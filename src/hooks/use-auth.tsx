import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/* ─── Types ─────────────────────────────────────────────── */
export type User = {
  id: string;
  name: string;
  email: string;
  joinedAt: string;
  avatar: string; // first initial, for generated avatar
};

type StoredUser = User & { passwordHash: string };

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signUp: (
    name: string,
    email: string,
    password: string
  ) => Promise<{ error?: string }>;
  signOut: () => void;
};

/* ─── Storage keys ───────────────────────────────────────── */
const CURRENT_KEY = "vv-auth-user";
const USERS_KEY = "vv-auth-users";

/* ─── Seed demo account ──────────────────────────────────── */
const DEMO_USER: StoredUser = {
  id: "demo-001",
  name: "Priya Sharma",
  email: "demo@violetVoyage.com",
  joinedAt: "2026-01-01",
  avatar: "P",
  passwordHash: "Demo1234!", // plain-text for demo — never do this in production!
};

function seedUsers() {
  if (typeof localStorage === "undefined") return;
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) {
    localStorage.setItem(USERS_KEY, JSON.stringify([DEMO_USER]));
  } else {
    // Ensure demo user always exists
    const list: StoredUser[] = JSON.parse(raw);
    if (!list.find((u) => u.id === DEMO_USER.id)) {
      localStorage.setItem(USERS_KEY, JSON.stringify([DEMO_USER, ...list]));
    }
  }
}

function getUsers(): StoredUser[] {
  if (typeof localStorage === "undefined") return [DEMO_USER];
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [DEMO_USER];
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrent(): User | null {
  if (typeof localStorage === "undefined") return null;
  const raw = localStorage.getItem(CURRENT_KEY);
  return raw ? JSON.parse(raw) : null;
}

function saveCurrent(user: User | null) {
  if (user) {
    localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_KEY);
  }
}

function toPublic(u: StoredUser): User {
  const { passwordHash: _, ...pub } = u;
  return pub;
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* ─── Context ────────────────────────────────────────────── */
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    seedUsers();
    const current = getCurrent();
    setUser(current);
    setIsLoading(false);
  }, []);

  const signIn = useCallback(
    async (email: string, password: string): Promise<{ error?: string }> => {
      setIsLoading(true);
      await delay(700);

      const users = getUsers();
      const found = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );

      if (!found) {
        setIsLoading(false);
        return { error: "No account found with that email address." };
      }

      // Demo: plain-text comparison (replace with bcrypt in production)
      if (found.passwordHash !== password) {
        setIsLoading(false);
        return { error: "Incorrect password. Please try again." };
      }

      const pub = toPublic(found);
      saveCurrent(pub);
      setUser(pub);
      setIsLoading(false);
      return {};
    },
    []
  );

  const signUp = useCallback(
    async (
      name: string,
      email: string,
      password: string
    ): Promise<{ error?: string }> => {
      setIsLoading(true);
      await delay(900);

      const users = getUsers();
      const existing = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );

      if (existing) {
        setIsLoading(false);
        return {
          error: "An account with that email already exists. Try signing in.",
        };
      }

      const newUser: StoredUser = {
        id: `usr-${Date.now()}`,
        name: name.trim(),
        email: email.toLowerCase().trim(),
        joinedAt: new Date().toISOString().slice(0, 10),
        avatar: name.trim()[0].toUpperCase(),
        passwordHash: password, // demo only
      };

      saveUsers([...users, newUser]);
      const pub = toPublic(newUser);
      saveCurrent(pub);
      setUser(pub);
      setIsLoading(false);
      return {};
    },
    []
  );

  const signOut = useCallback(() => {
    saveCurrent(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
