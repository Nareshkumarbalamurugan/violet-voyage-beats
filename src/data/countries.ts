import japan from "@/assets/japan.jpg";
import france from "@/assets/france.jpg";
import italy from "@/assets/italy.jpg";
import korea from "@/assets/korea.jpg";
import brazil from "@/assets/brazil.jpg";

export type Food = {
  id: string;
  name: string;
  specialty: string;
  description: string;
  image: string;
};

export type MusicGenre = { genre: string; mood: string };

export type Country = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  foods: Food[];
  music: MusicGenre[];
  accent: string;
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const foodImg = (q: string) =>
  `https://loremflickr.com/1600/900/${encodeURIComponent(q)},food,gourmet?lock=${Math.abs(
    [...q].reduce((a, c) => a + c.charCodeAt(0), 0)
  )}`;

const f = (
  name: string,
  specialty: string,
  description: string,
  query?: string
): Food => ({
  id: slug(name),
  name,
  specialty,
  description,
  image: foodImg(query ?? name),
});

export const countries: Country[] = [
  {
    id: "japan",
    name: "Japan",
    tagline: "Tradition Meets Tomorrow.",
    description:
      "Cherry blossoms drifting past neon skylines. A country where every detail is a quiet ceremony.",
    image: japan,
    foods: [
      f("Sushi", "Edomae artistry", "Hand-pressed vinegared rice topped with the morning's catch — a centuries-old craft refined into edible minimalism."),
      f("Ramen", "Tonkotsu soul", "Slow-simmered pork bone broth, springy alkaline noodles, and a soft-yolk egg. Comfort in a steaming bowl."),
      f("Tempura", "Featherlight crunch", "Seafood and vegetables dipped in ice-cold batter and flash-fried — impossibly crisp, never heavy."),
      f("Mochi", "Pounded poetry", "Glutinous rice pounded into pillowy cakes, wrapped around sweet red bean or served with matcha."),
    ],
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
    foods: [
      f("Croissant", "Laminated perfection", "Eighty-one buttery layers folded by hand, baked until shatteringly crisp outside and cloud-soft within."),
      f("Coq au Vin", "Burgundy braise", "Rooster slow-cooked in red wine with lardons, mushrooms, and pearl onions — the taste of a French farmhouse."),
      f("Ratatouille", "Provençal harvest", "Sun-ripened tomato, courgette, aubergine, and pepper layered with thyme and olive oil — summer on a plate."),
      f("Macaron", "Parisian jewel", "Delicate almond meringue shells sandwiching silky ganache. A study in color, balance, and restraint."),
    ],
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
    foods: [
      f("Pizza Napoletana", "Wood-fired tradition", "San Marzano tomatoes, fior di latte, and a leopard-spotted crust kissed by 900°F flame for 90 seconds.", "neapolitan pizza"),
      f("Pasta Carbonara", "Roman classic", "Guanciale, pecorino romano, egg yolk, and black pepper — a glossy, peppery emulsion. No cream, ever.", "carbonara pasta"),
      f("Risotto", "Creamy alchemy", "Carnaroli rice stirred patiently with broth until each grain releases its starch into silk.", "risotto"),
      f("Gelato", "Velvet chill", "Less air, less fat than ice cream — denser, more intense flavor. The pistachio is non-negotiable.", "gelato"),
    ],
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
    foods: [
      f("Bibimbap", "Stone-bowl harmony", "Rice, sautéed vegetables, gochujang, and a sunny egg in a sizzling stone bowl. Mix vigorously, eat immediately."),
      f("Korean BBQ", "Tableside theater", "Marinated bulgogi and galbi grilled at the table, wrapped in lettuce with ssamjang, garlic, and rice.", "korean bbq"),
      f("Tteokbokki", "Street-side fire", "Chewy rice cakes simmered in sweet-spicy gochujang sauce — Seoul's favorite late-night craving."),
      f("Bingsu", "Snow-flake dessert", "Mountains of shaved milk-ice topped with red bean, fresh fruit, and condensed milk. Summer's antidote."),
    ],
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
    foods: [
      f("Feijoada", "Saturday ritual", "Black bean stew slow-cooked with smoked pork, served with rice, collard greens, orange, and farofa."),
      f("Açaí Bowl", "Amazon energy", "Frozen açaí blended thick and topped with banana, granola, and honey — purple fuel from the rainforest.", "acai bowl"),
      f("Pão de Queijo", "Cheesy clouds", "Tapioca-flour cheese rolls — crisp shell, impossibly stretchy inside. Best eaten warm with coffee.", "pao de queijo"),
      f("Moqueca", "Coastal stew", "Fish simmered in coconut milk, dendê oil, tomato, and cilantro — the soul of Bahia in a clay pot."),
    ],
    music: [
      { genre: "Bossa Nova", mood: "Warm & weightless" },
      { genre: "Samba", mood: "Carnival energy" },
      { genre: "MPB", mood: "Sun-soaked soul" },
    ],
    accent: "from-emerald-300/40 to-violet-500/40",
  },
];