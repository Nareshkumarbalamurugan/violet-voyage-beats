import { useEffect, useRef, useState } from "react";

type Track = { genre: string; mood: string; track: string };

export function MusicList({ tracks, title }: { tracks: Track[]; title: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = (i: number) => {
    const t = tracks[i];
    if (!audioRef.current) audioRef.current = new Audio();
    const a = audioRef.current;

    if (playing === i) {
      a.pause();
      setPlaying(null);
      return;
    }
    a.src = t.track;
    a.play().catch(() => {});
    setPlaying(i);
    a.onended = () => setPlaying(null);
  };

  return (
    <div className="glass rounded-3xl p-6 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {title}
        </h3>
        <span className="text-xs text-lavender">Music</span>
      </div>
      <ul className="divide-y divide-white/5">
        {tracks.map((m, i) => {
          const isPlaying = playing === i;
          return (
            <li key={m.genre} className="flex items-center gap-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-semibold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <p className="font-medium">{m.genre}</p>
                <p className="text-xs text-muted-foreground">
                  {isPlaying ? "Now playing…" : m.mood}
                </p>
              </div>
              <button
                onClick={() => toggle(i)}
                aria-label={`${isPlaying ? "Pause" : "Play"} ${m.genre}`}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-primary transition-colors"
              >
                {isPlaying ? "❚❚" : "▶"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}