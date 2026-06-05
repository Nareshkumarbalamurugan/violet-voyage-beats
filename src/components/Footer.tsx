export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 text-center text-sm text-muted-foreground">
      <p className="font-display text-foreground">Violet Voyage</p>
      <p className="mt-2">Travel beyond borders. © {new Date().getFullYear()}</p>
    </footer>
  );
}