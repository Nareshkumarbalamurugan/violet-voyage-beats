import type { MusicGenre } from "@/data/countries";

function SpotifyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34a.75.75 0 0 1-1.03.25c-2.82-1.72-6.36-2.11-10.54-1.16a.75.75 0 1 1-.33-1.46c4.56-1.04 8.49-.6 11.65 1.34.36.22.47.69.25 1.03zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.99-8.16-2.56-11.98-1.4a.94.94 0 1 1-.55-1.8c4.37-1.32 9.81-.69 13.5 1.6.44.27.58.84.32 1.29zm.13-3.41C15.27 8.4 8.5 8.17 4.87 9.29a1.12 1.12 0 1 1-.66-2.15c4.17-1.27 11.65-1 16.03 1.6a1.12 1.12 0 1 1-1.12 1.92z"/>
    </svg>
  );
}

function AppleMusicIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M22.5 6.18c0-.97 0-1.93-.05-2.9-.04-.79-.13-1.59-.45-2.32-.32-.7-.85-1.18-1.55-1.5C19.74-.83 18.94-.92 18.15-.95 17.18-1 16.22-1 15.25-1H8.75c-.97 0-1.93 0-2.9.05-.79.03-1.59.12-2.3.43-.7.32-1.23.8-1.55 1.5-.32.73-.41 1.53-.44 2.32C1.5 4.25 1.5 5.21 1.5 6.18v11.64c0 .97 0 1.93.06 2.9.03.79.12 1.59.44 2.32.32.7.85 1.18 1.55 1.5.71.31 1.51.4 2.3.43.97.05 1.93.05 2.9.05h6.5c.97 0 1.93 0 2.9-.05.79-.03 1.59-.12 2.3-.43.7-.32 1.23-.8 1.55-1.5.32-.73.41-1.53.45-2.32.05-.97.05-1.93.05-2.9V6.18zM17.4 16.1c0 .5-.13.95-.4 1.33-.27.39-.62.66-1.05.83-.43.16-.86.18-1.3.06-.43-.12-.78-.36-1.04-.71-.26-.36-.4-.78-.4-1.27 0-.6.21-1.1.64-1.51.42-.41.95-.62 1.58-.66l1.2-.16V7.84l-6.5.87v9.16c0 .5-.13.95-.4 1.33-.27.38-.62.66-1.05.82-.43.17-.86.19-1.3.07-.43-.12-.78-.36-1.04-.71-.26-.36-.4-.78-.4-1.27 0-.6.21-1.1.64-1.51.42-.41.95-.62 1.58-.66l1.2-.16V6.66c0-.32.09-.59.27-.81.18-.21.43-.34.74-.39l7.5-1c.35-.05.64.04.86.27.22.23.33.51.33.86V16.1z"/>
    </svg>
  );
}

export function MusicPlatforms({
  countryName,
  music,
}: {
  countryName: string;
  music: MusicGenre[];
}) {
  const q = encodeURIComponent(`${countryName} ${music.map((m) => m.genre).join(" ")}`);
  const spotify = `https://open.spotify.com/search/${q}`;
  const apple = `https://music.apple.com/us/search?term=${q}`;

  return (
    <div className="glass rounded-3xl p-6 shadow-soft">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Sound of {countryName}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <a
          href={spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 rounded-2xl bg-[#1DB954] px-4 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
        >
          <SpotifyIcon className="h-5 w-5" />
          Spotify
        </a>
        <a
          href={apple}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
        >
          <AppleMusicIcon className="h-5 w-5" />
          Apple Music
        </a>
      </div>
    </div>
  );
}
