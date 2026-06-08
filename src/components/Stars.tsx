import { Star } from "lucide-react";

export function Stars({ value, className = "" }: { value: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`} aria-label={`${value} out of 5`}>
      <Star className="h-3.5 w-3.5 fill-gold text-gold" />
      <span className="text-xs font-medium text-foreground/90">{value.toFixed(1)}</span>
    </span>
  );
}
