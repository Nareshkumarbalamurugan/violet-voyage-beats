import japan from "@/assets/japan.jpg";
import france from "@/assets/france.jpg";
import italy from "@/assets/italy.jpg";
import korea from "@/assets/korea.jpg";
import brazil from "@/assets/brazil.jpg";

export type Country = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  foods: string[];
  music: { genre: string; mood: string }[];
  accent: string;
};

export const countries: Country[] = [
  {
    id: "japan",
    name: "Japan",
    tagline: "Tradition Meets Tomorrow.",
    description:
      "Cherry blossoms drifting past neon skylines. A country where every detail is a quiet ceremony.",
    image: japan,
    foods: ["Sushi", "Ramen", "Tempura", "Mochi"],
    music: [
      { genre: "City Pop", mood: "Nostalgic neon nights" },
      { genre: "J-Pop", mood: "Bright & electric" },
      { genre: "Koto", mood: "Ancient stillness" },
    ],
    accent: "from-pink-300/40 to-violet-500/40",
  },
  {
    id: "france",
    name: "France",
    tagline: "The Art of Living.",
    description:
      "Golden hour over Parisian rooftops. Wine, light, and a centuries-old love affair with beauty.",
    image: france,
    foods: ["Croissant", "Coq au Vin", "Ratatouille", "Macaron"],
    music: [
      { genre: "French Jazz", mood: "Smoke & velvet" },
      { genre: "Café Acoustic", mood: "Sunday mornings" },
      { genre: "Chanson", mood: "Romantic murmurs" },
    ],
    accent: "from-amber-300/40 to-violet-500/40",
  },
  {
    id: "italy",
    name: "Italy",
    tagline: "La Dolce Vita.",
    description:
      "Cypress-lined roads, sun-drenched stone, and meals that last the entire afternoon.",
    image: italy,
    foods: ["Pizza Napoletana", "Pasta Carbonara", "Risotto", "Gelato"],
    music: [
      { genre: "Italian Pop", mood: "Coastal summers" },
      { genre: "Opera", mood: "Grand & timeless" },
      { genre: "Neo-Folk", mood: "Tuscan evenings" },
    ],
    accent: "from-orange-300/40 to-violet-500/40",
  },
  {
    id: "korea",
    name: "South Korea",
    tagline: "Where Innovation Meets Culture.",
    description:
      "Seoul hums under violet neon — palaces and skyscrapers, kimchi and K-pop, all in one breath.",
    image: korea,
    foods: ["Bibimbap", "Korean BBQ", "Tteokbokki", "Bingsu"],
    music: [
      { genre: "K-Pop", mood: "High-gloss euphoria" },
      { genre: "Korean Indie", mood: "Late-night reflection" },
      { genre: "R&B", mood: "Soft & smoldering" },
    ],
    accent: "from-fuchsia-400/40 to-violet-600/40",
  },
  {
    id: "brazil",
    name: "Brazil",
    tagline: "Rhythm of the Atlantic.",
    description:
      "Mountains, ocean, samba in the streets. A country that moves to its own irresistible beat.",
    image: brazil,
    foods: ["Feijoada", "Açaí Bowl", "Pão de Queijo", "Moqueca"],
    music: [
      { genre: "Bossa Nova", mood: "Warm & weightless" },
      { genre: "Samba", mood: "Carnival energy" },
      { genre: "MPB", mood: "Sun-soaked soul" },
    ],
    accent: "from-emerald-300/40 to-violet-500/40",
  },
];