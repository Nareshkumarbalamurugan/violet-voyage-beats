import { useRouter } from "@tanstack/react-router";

export function BackButton({ label = "Back" }: { label?: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.history.back()}
      className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm hover:bg-white/10 transition-colors"
    >
      <span aria-hidden>←</span> {label}
    </button>
  );
}