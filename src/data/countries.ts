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
  ingredients: string[];
  priceRange: string;
  diet: "Vegetarian" | "Non-Vegetarian" | "Both";
  spice: number; // 0-5
  calories: string;
  popularity: number; // 0-100
  restaurants: string[];
  streetFood: string[];
};

export type MusicTrack = {
  genre: string;
  mood: string;
  type: "Traditional" | "Modern" | "Regional" | "Festival" | "Playlist";
  artists: string[];
};

export type Attraction = {
  name: string;
  category: string;
  description: string;
  location: string;
  ticket: string;
  hours: string;
  bestTime: string;
  tip: string;
  image: string;
  unesco?: boolean;
};

export type Culture = {
  festivals: string[];
  language: string;
  greeting: string;
  clothing: string;
  etiquette: string[];
  currency: string;
  religion: string;
  holidays: string[];
  customs: string[];
};

export type Country = {
  id: string;
  name: string;
  flag: string;
  tagline: string;
  description: string;
  image: string;
  rating: number;
  bestSeason: string;
  budget: "$" | "$$" | "$$$";
  budgetLabel: string;
  cities: string[];
  region: string;
  visa: string;
  safety: number; // 0-100
  timezone: string;
  foods: Food[];
  music: MusicTrack[];
  attractions: Attraction[];
  culture: Culture;
  accent: string;
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const img = (q: string, extra = "") =>
  `https://loremflickr.com/1200/900/${encodeURIComponent(q)}${extra ? "," + encodeURIComponent(extra) : ""}?lock=${Math.abs(
    [...(q + extra)].reduce((a, c) => a + c.charCodeAt(0), 0)
  )}`;

type FoodInput = Omit<Food, "id" | "image"> & { query?: string };
const f = (food: FoodInput): Food => ({
  ...food,
  id: slug(food.name),
  image: img(food.query ?? food.name, "food"),
});

type AttrInput = Omit<Attraction, "image"> & { query?: string };
const a = (attr: AttrInput): Attraction => ({
  ...attr,
  image: img(attr.query ?? attr.name, "landmark"),
});

export const countries: Country[] = [
  {
    id: "japan",
    name: "Japan",
    flag: "🇯🇵",
    tagline: "Tradition Meets Tomorrow.",
    description:
      "Cherry blossoms drifting past neon skylines. A country where every detail is a quiet ceremony.",
    image: japan,
    rating: 4.9,
    bestSeason: "Mar–May (Cherry Blossom)",
    budget: "$$$",
    budgetLabel: "Premium",
    cities: ["Tokyo", "Kyoto", "Osaka", "Hokkaido"],
    region: "East Asia",
    visa: "eVisa / Visa-free for many (90 days)",
    safety: 96,
    timezone: "JST (UTC+9)",
    foods: [
      f({
        name: "Sushi",
        specialty: "Edomae artistry",
        description:
          "Hand-pressed vinegared rice topped with the morning's catch — a centuries-old craft refined into edible minimalism.",
        ingredients: ["Shari rice", "Fresh fish", "Nori", "Wasabi", "Rice vinegar"],
        priceRange: "$$–$$$",
        diet: "Non-Vegetarian",
        spice: 1,
        calories: "~40 kcal / piece",
        popularity: 98,
        restaurants: ["Sukiyabashi Jiro (Tokyo)", "Sushi Saito (Tokyo)"],
        streetFood: ["Tsukiji Outer Market stalls", "Conveyor-belt sushi (kaiten)"],
      }),
      f({
        name: "Ramen",
        specialty: "Tonkotsu soul",
        description:
          "Slow-simmered pork bone broth, springy alkaline noodles, and a soft-yolk egg. Comfort in a steaming bowl.",
        ingredients: ["Pork bone broth", "Wheat noodles", "Chashu pork", "Ajitama egg", "Scallions"],
        priceRange: "$–$$",
        diet: "Non-Vegetarian",
        spice: 2,
        calories: "~500 kcal",
        popularity: 95,
        restaurants: ["Ichiran", "Afuri (Tokyo)"],
        streetFood: ["Yokocho alley ramen", "Late-night yatai stalls"],
      }),
      f({
        name: "Tempura",
        specialty: "Featherlight crunch",
        description:
          "Seafood and vegetables dipped in ice-cold batter and flash-fried — impossibly crisp, never heavy.",
        ingredients: ["Prawns", "Seasonal vegetables", "Cold batter", "Tentsuyu dipping sauce"],
        priceRange: "$$",
        diet: "Both",
        spice: 0,
        calories: "~350 kcal",
        popularity: 88,
        restaurants: ["Tempura Kondo (Tokyo)", "Tenju"],
        streetFood: ["Department store food halls", "Tendon counters"],
      }),
      f({
        name: "Mochi",
        specialty: "Pounded poetry",
        description:
          "Glutinous rice pounded into pillowy cakes, wrapped around sweet red bean or served with matcha.",
        ingredients: ["Glutinous rice", "Red bean paste", "Matcha", "Kinako"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~100 kcal / piece",
        popularity: 80,
        restaurants: ["Nakatanidou (Nara)", "Demachi Futaba (Kyoto)"],
        streetFood: ["Festival mochi stands", "Temple-town sweet shops"],
      }),
    ],
    music: [
      { genre: "City Pop", mood: "Nostalgic neon nights", type: "Modern", artists: ["Tatsuro Yamashita", "Mariya Takeuchi"] },
      { genre: "J-Pop", mood: "Bright & electric", type: "Modern", artists: ["YOASOBI", "Kenshi Yonezu"] },
      { genre: "Koto & Shakuhachi", mood: "Ancient stillness", type: "Traditional", artists: ["Kimio Eto", "Goro Yamaguchi"] },
      { genre: "Matsuri Taiko", mood: "Festival thunder", type: "Festival", artists: ["Kodo"] },
    ],
    attractions: [
      a({ name: "Fushimi Inari Shrine", category: "Historical", description: "Thousands of vermilion torii gates winding up a sacred mountain.", location: "Kyoto", ticket: "Free", hours: "24 hours", bestTime: "Early morning", tip: "Hike past the first gates to escape crowds.", unesco: false, query: "torii gate kyoto" }),
      a({ name: "Mount Fuji", category: "Nature", description: "Japan's iconic snow-capped sacred volcano and climbing pilgrimage.", location: "Honshu", ticket: "Free (climb permit in season)", hours: "Climbing Jul–Sep", bestTime: "Sunrise (Goraiko)", tip: "View it clearly from Lake Kawaguchiko.", unesco: true, query: "mount fuji" }),
      a({ name: "Shibuya Crossing", category: "Nightlife", description: "The world's busiest pedestrian scramble under a wall of neon.", location: "Tokyo", ticket: "Free", hours: "24 hours", bestTime: "After dark", tip: "Watch from the Shibuya Sky deck.", query: "shibuya crossing" }),
      a({ name: "Arashiyama Bamboo Grove", category: "Hidden Gem", description: "A towering green corridor of swaying bamboo.", location: "Kyoto", ticket: "Free", hours: "24 hours", bestTime: "Sunrise", tip: "Combine with nearby Tenryu-ji temple.", query: "bamboo forest japan" }),
    ],
    culture: {
      festivals: ["Hanami (Cherry Blossom)", "Gion Matsuri", "Tanabata"],
      language: "Japanese (日本語)",
      greeting: "Konnichiwa (こんにちは) with a bow",
      clothing: "Kimono & yukata for ceremonies; modern fashion in cities",
      etiquette: ["Remove shoes indoors", "No tipping", "Quiet on trains", "Bow to greet"],
      currency: "Japanese Yen (¥ / JPY)",
      religion: "Shinto & Buddhism",
      holidays: ["Golden Week", "Obon", "New Year (Shogatsu)"],
      customs: ["Gift-giving (omiyage)", "Slurping noodles is polite", "Onsen bathing rituals"],
    },
    accent: "from-pink-300/40 to-violet-500/40",
  },
  {
    id: "france",
    name: "France",
    flag: "🇫🇷",
    tagline: "The Art of Living.",
    description:
      "Golden hour over Parisian rooftops. Wine, light, and a centuries-old love affair with beauty.",
    image: france,
    rating: 4.8,
    bestSeason: "Apr–Jun & Sep–Oct",
    budget: "$$$",
    budgetLabel: "Premium",
    cities: ["Paris", "Nice", "Lyon", "Bordeaux"],
    region: "Western Europe",
    visa: "Schengen Visa (90 days)",
    safety: 82,
    timezone: "CET (UTC+1)",
    foods: [
      f({
        name: "Croissant",
        specialty: "Laminated perfection",
        description:
          "Eighty-one buttery layers folded by hand, baked until shatteringly crisp outside and cloud-soft within.",
        ingredients: ["Flour", "French butter", "Yeast", "Milk", "Sugar"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~270 kcal",
        popularity: 96,
        restaurants: ["Du Pain et des Idées (Paris)", "Cédric Grolet"],
        streetFood: ["Corner boulangeries", "Morning market bakeries"],
      }),
      f({
        name: "Coq au Vin",
        specialty: "Burgundy braise",
        description:
          "Rooster slow-cooked in red wine with lardons, mushrooms, and pearl onions — the taste of a French farmhouse.",
        ingredients: ["Chicken", "Red wine", "Lardons", "Mushrooms", "Pearl onions"],
        priceRange: "$$",
        diet: "Non-Vegetarian",
        spice: 1,
        calories: "~490 kcal",
        popularity: 84,
        restaurants: ["Le Coq Rico (Paris)", "Bouillon Chartier"],
        streetFood: ["Bistro lunch menus"],
      }),
      f({
        name: "Ratatouille",
        specialty: "Provençal harvest",
        description:
          "Sun-ripened tomato, courgette, aubergine, and pepper layered with thyme and olive oil — summer on a plate.",
        ingredients: ["Tomato", "Courgette", "Aubergine", "Bell pepper", "Herbes de Provence"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~180 kcal",
        popularity: 78,
        restaurants: ["La Petite Maison (Nice)"],
        streetFood: ["Provençal market traiteurs"],
      }),
      f({
        name: "Macaron",
        specialty: "Parisian jewel",
        description:
          "Delicate almond meringue shells sandwiching silky ganache. A study in color, balance, and restraint.",
        ingredients: ["Almond flour", "Egg whites", "Sugar", "Ganache filling"],
        priceRange: "$$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~90 kcal / piece",
        popularity: 90,
        restaurants: ["Ladurée", "Pierre Hermé"],
        streetFood: ["Patisserie windows"],
      }),
    ],
    music: [
      { genre: "French Jazz", mood: "Smoke & velvet", type: "Modern", artists: ["Django Reinhardt", "Stéphane Grappelli"] },
      { genre: "Chanson", mood: "Romantic murmurs", type: "Traditional", artists: ["Édith Piaf", "Jacques Brel"] },
      { genre: "Café Acoustic", mood: "Sunday mornings", type: "Playlist", artists: ["Paris Combo", "Zaz"] },
      { genre: "French House", mood: "Electric Paris nights", type: "Modern", artists: ["Daft Punk", "Justice"] },
    ],
    attractions: [
      a({ name: "Eiffel Tower", category: "Historical", description: "The iron lattice icon that defines the Paris skyline.", location: "Paris", ticket: "€18–29", hours: "9:30–23:45", bestTime: "Sunset & sparkle hour", tip: "Book summit tickets weeks ahead.", query: "eiffel tower" }),
      a({ name: "Louvre Museum", category: "Historical", description: "The world's largest art museum, home to the Mona Lisa.", location: "Paris", ticket: "€22", hours: "9:00–18:00 (closed Tue)", bestTime: "Wednesday evening", tip: "Enter via Carrousel to skip pyramid queues.", unesco: true, query: "louvre museum" }),
      a({ name: "Côte d'Azur Beaches", category: "Beaches", description: "Glittering Mediterranean coves from Nice to Cannes.", location: "French Riviera", ticket: "Free (public)", hours: "Daylight", bestTime: "June", tip: "Visit Villefranche-sur-Mer for calm water.", query: "french riviera beach" }),
      a({ name: "Mont Saint-Michel", category: "UNESCO", description: "A medieval abbey rising from tidal flats like a mirage.", location: "Normandy", ticket: "€11 (abbey)", hours: "9:00–19:00", bestTime: "High tide", tip: "Stay overnight after day-trippers leave.", unesco: true, query: "mont saint michel" }),
    ],
    culture: {
      festivals: ["Bastille Day", "Fête de la Musique", "Cannes Film Festival"],
      language: "French (Français)",
      greeting: "Bonjour with la bise (cheek kiss)",
      clothing: "Effortless chic; smart-casual elegance",
      etiquette: ["Greet shopkeepers", "Dine slowly", "Keep voices low", "Bread on the table, not plate"],
      currency: "Euro (€ / EUR)",
      religion: "Predominantly Catholic; secular state (laïcité)",
      holidays: ["Bastille Day (Jul 14)", "Toussaint", "Assumption"],
      customs: ["Long leisurely meals", "Wine with lunch", "August holidays"],
    },
    accent: "from-amber-300/40 to-violet-500/40",
  },
  {
    id: "italy",
    name: "Italy",
    flag: "🇮🇹",
    tagline: "La Dolce Vita.",
    description:
      "Cypress-lined roads, sun-drenched stone, and meals that last the entire afternoon.",
    image: italy,
    rating: 4.9,
    bestSeason: "Apr–Jun & Sep",
    budget: "$$",
    budgetLabel: "Moderate",
    cities: ["Rome", "Florence", "Venice", "Amalfi"],
    region: "Southern Europe",
    visa: "Schengen Visa (90 days)",
    safety: 80,
    timezone: "CET (UTC+1)",
    foods: [
      f({
        name: "Pizza Napoletana",
        specialty: "Wood-fired tradition",
        description:
          "San Marzano tomatoes, fior di latte, and a leopard-spotted crust kissed by 900°F flame for 90 seconds.",
        ingredients: ["00 flour", "San Marzano tomato", "Fior di latte", "Basil", "Olive oil"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~270 kcal / slice",
        popularity: 97,
        restaurants: ["L'Antica Pizzeria da Michele (Naples)", "Sorbillo"],
        streetFood: ["Pizza a portafoglio (folded)", "Fried pizza fritta"],
        query: "neapolitan pizza",
      }),
      f({
        name: "Pasta Carbonara",
        specialty: "Roman classic",
        description:
          "Guanciale, pecorino romano, egg yolk, and black pepper — a glossy, peppery emulsion. No cream, ever.",
        ingredients: ["Spaghetti", "Guanciale", "Pecorino Romano", "Egg yolk", "Black pepper"],
        priceRange: "$$",
        diet: "Non-Vegetarian",
        spice: 1,
        calories: "~600 kcal",
        popularity: 93,
        restaurants: ["Roscioli (Rome)", "Da Enzo al 29"],
        streetFood: ["Trattoria lunch counters"],
        query: "carbonara pasta",
      }),
      f({
        name: "Risotto",
        specialty: "Creamy alchemy",
        description:
          "Carnaroli rice stirred patiently with broth until each grain releases its starch into silk.",
        ingredients: ["Carnaroli rice", "Broth", "Parmigiano", "Butter", "White wine"],
        priceRange: "$$",
        diet: "Both",
        spice: 0,
        calories: "~430 kcal",
        popularity: 82,
        restaurants: ["Ratanà (Milan)", "Trattoria Masuelli"],
        streetFood: ["Arancini (fried risotto balls)"],
        query: "risotto",
      }),
      f({
        name: "Gelato",
        specialty: "Velvet chill",
        description:
          "Less air, less fat than ice cream — denser, more intense flavor. The pistachio is non-negotiable.",
        ingredients: ["Milk", "Sugar", "Pistachio", "Fresh fruit"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~210 kcal / scoop",
        popularity: 95,
        restaurants: ["Gelateria dei Neri (Florence)", "Giolitti (Rome)"],
        streetFood: ["Gelato carts on every piazza"],
        query: "gelato",
      }),
    ],
    music: [
      { genre: "Opera", mood: "Grand & timeless", type: "Traditional", artists: ["Luciano Pavarotti", "Andrea Bocelli"] },
      { genre: "Italian Pop", mood: "Coastal summers", type: "Modern", artists: ["Måneskin", "Eros Ramazzotti"] },
      { genre: "Neapolitan Folk", mood: "Tuscan evenings", type: "Regional", artists: ["Pino Daniele"] },
      { genre: "Canzone Napoletana", mood: "Mandolin romance", type: "Regional", artists: ["Roberto Murolo"] },
    ],
    attractions: [
      a({ name: "Colosseum", category: "Historical", description: "The mighty Roman amphitheatre that once held 50,000 spectators.", location: "Rome", ticket: "€18", hours: "9:00–19:00", bestTime: "Early morning", tip: "Combo ticket includes the Forum.", unesco: true, query: "colosseum rome" }),
      a({ name: "Venice Canals", category: "Hidden Gem", description: "A floating city of bridges, gondolas, and faded palazzi.", location: "Venice", ticket: "Gondola ~€80", hours: "24 hours", bestTime: "Dawn", tip: "Get lost away from San Marco for magic.", unesco: true, query: "venice canal" }),
      a({ name: "Amalfi Coast", category: "Beaches", description: "Pastel cliff-side villages above a turquoise sea.", location: "Campania", ticket: "Free", hours: "Daylight", bestTime: "May", tip: "Take the SITA bus, not a car.", query: "amalfi coast" }),
      a({ name: "Florence Duomo", category: "Historical", description: "Brunelleschi's terracotta dome crowning Renaissance Florence.", location: "Florence", ticket: "€30 (dome climb)", hours: "10:15–16:00", bestTime: "Opening", tip: "Book the dome climb online days ahead.", unesco: true, query: "florence duomo" }),
    ],
    culture: {
      festivals: ["Carnevale di Venezia", "Palio di Siena", "Ferragosto"],
      language: "Italian (Italiano)",
      greeting: "Ciao / Buongiorno with warm gestures",
      clothing: "La bella figura — polished, tailored style",
      etiquette: ["Cover shoulders in churches", "No cappuccino after noon", "Dinner after 8pm"],
      currency: "Euro (€ / EUR)",
      religion: "Roman Catholic",
      holidays: ["Ferragosto (Aug 15)", "Republic Day", "Epiphany"],
      customs: ["Aperitivo hour", "Passeggiata evening stroll", "Long Sunday lunches"],
    },
    accent: "from-orange-300/40 to-violet-500/40",
  },
  {
    id: "korea",
    name: "South Korea",
    flag: "🇰🇷",
    tagline: "Where Innovation Meets Culture.",
    description:
      "Seoul hums under violet neon — palaces and skyscrapers, kimchi and K-pop, all in one breath.",
    image: korea,
    rating: 4.7,
    bestSeason: "Sep–Nov (Autumn foliage)",
    budget: "$$",
    budgetLabel: "Moderate",
    cities: ["Seoul", "Busan", "Jeju", "Gyeongju"],
    region: "East Asia",
    visa: "K-ETA / Visa-free for many (90 days)",
    safety: 92,
    timezone: "KST (UTC+9)",
    foods: [
      f({
        name: "Bibimbap",
        specialty: "Stone-bowl harmony",
        description:
          "Rice, sautéed vegetables, gochujang, and a sunny egg in a sizzling stone bowl. Mix vigorously, eat immediately.",
        ingredients: ["Rice", "Assorted namul vegetables", "Gochujang", "Egg", "Sesame oil"],
        priceRange: "$",
        diet: "Both",
        spice: 3,
        calories: "~560 kcal",
        popularity: 90,
        restaurants: ["Gogung (Seoul)", "Jeonju local houses"],
        streetFood: ["Market dosirak counters"],
      }),
      f({
        name: "Korean BBQ",
        specialty: "Tableside theater",
        description:
          "Marinated bulgogi and galbi grilled at the table, wrapped in lettuce with ssamjang, garlic, and rice.",
        ingredients: ["Beef short rib", "Bulgogi marinade", "Lettuce", "Ssamjang", "Garlic"],
        priceRange: "$$",
        diet: "Non-Vegetarian",
        spice: 2,
        calories: "~650 kcal",
        popularity: 96,
        restaurants: ["Maple Tree House (Seoul)", "Geumdwaeji Sikdang"],
        streetFood: ["Pojangmacha grill tents"],
        query: "korean bbq",
      }),
      f({
        name: "Tteokbokki",
        specialty: "Street-side fire",
        description:
          "Chewy rice cakes simmered in sweet-spicy gochujang sauce — Seoul's favorite late-night craving.",
        ingredients: ["Rice cakes", "Gochujang", "Fish cake", "Scallion", "Sugar"],
        priceRange: "$",
        diet: "Both",
        spice: 4,
        calories: "~400 kcal",
        popularity: 92,
        restaurants: ["Sindang-dong Tteokbokki Town"],
        streetFood: ["Myeongdong street carts", "Pojangmacha stalls"],
      }),
      f({
        name: "Bingsu",
        specialty: "Snow-flake dessert",
        description:
          "Mountains of shaved milk-ice topped with red bean, fresh fruit, and condensed milk. Summer's antidote.",
        ingredients: ["Shaved milk ice", "Red bean", "Condensed milk", "Fruit", "Tteok"],
        priceRange: "$$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~350 kcal",
        popularity: 78,
        restaurants: ["Sulbing", "Homilbat (Seoul)"],
        streetFood: ["Summer café terraces"],
      }),
    ],
    music: [
      { genre: "K-Pop", mood: "High-gloss euphoria", type: "Modern", artists: ["BTS", "NewJeans", "BLACKPINK"] },
      { genre: "Korean Indie", mood: "Late-night reflection", type: "Modern", artists: ["IU", "Hyukoh"] },
      { genre: "Pansori", mood: "Ancestral storytelling", type: "Traditional", artists: ["Ahn Sook-sun"] },
      { genre: "Trot", mood: "Retro festival joy", type: "Festival", artists: ["Lim Young-woong"] },
    ],
    attractions: [
      a({ name: "Gyeongbokgung Palace", category: "Historical", description: "Joseon-era royal palace with a ceremonial guard-changing.", location: "Seoul", ticket: "₩3,000", hours: "9:00–18:00 (closed Tue)", bestTime: "Guard change 10am", tip: "Wear hanbok for free entry.", query: "gyeongbokgung palace" }),
      a({ name: "Bukchon Hanok Village", category: "Hidden Gem", description: "Lanes of traditional tile-roofed hanok houses.", location: "Seoul", ticket: "Free", hours: "Daylight (quiet hours)", bestTime: "Early morning", tip: "Be respectful — residents live here.", query: "bukchon hanok village" }),
      a({ name: "Jeju Island", category: "Nature", description: "Volcanic island of waterfalls, craters, and lava tubes.", location: "Jeju", ticket: "Varies", hours: "Daylight", bestTime: "Spring/Autumn", tip: "Hike Hallasan for sunrise.", unesco: true, query: "jeju island" }),
      a({ name: "Haeundae Beach", category: "Beaches", description: "Busan's lively crescent of sand backed by skyscrapers.", location: "Busan", ticket: "Free", hours: "24 hours", bestTime: "Summer evenings", tip: "Pair with nearby Gamcheon Culture Village.", query: "haeundae beach busan" }),
    ],
    culture: {
      festivals: ["Seollal (Lunar New Year)", "Chuseok", "Boryeong Mud Festival"],
      language: "Korean (한국어)",
      greeting: "Annyeonghaseyo (안녕하세요) with a bow",
      clothing: "Hanbok for tradition; trend-setting street fashion",
      etiquette: ["Use two hands when giving/receiving", "Remove shoes indoors", "Pour elders' drinks"],
      currency: "South Korean Won (₩ / KRW)",
      religion: "Buddhism, Christianity, Confucian values",
      holidays: ["Seollal", "Chuseok", "Liberation Day"],
      customs: ["Respect for elders (nunchi)", "Communal side dishes (banchan)", "Café culture"],
    },
    accent: "from-fuchsia-400/40 to-violet-600/40",
  },
  {
    id: "brazil",
    name: "Brazil",
    flag: "🇧🇷",
    tagline: "Rhythm of the Atlantic.",
    description:
      "Mountains, ocean, samba in the streets. A country that moves to its own irresistible beat.",
    image: brazil,
    rating: 4.6,
    bestSeason: "Dec–Mar (Summer & Carnival)",
    budget: "$$",
    budgetLabel: "Moderate",
    cities: ["Rio de Janeiro", "São Paulo", "Salvador", "Florianópolis"],
    region: "South America",
    visa: "eVisa for some; visa-free for many (90 days)",
    safety: 64,
    timezone: "BRT (UTC−3)",
    foods: [
      f({
        name: "Feijoada",
        specialty: "Saturday ritual",
        description:
          "Black bean stew slow-cooked with smoked pork, served with rice, collard greens, orange, and farofa.",
        ingredients: ["Black beans", "Smoked pork", "Sausage", "Collard greens", "Farofa"],
        priceRange: "$$",
        diet: "Non-Vegetarian",
        spice: 2,
        calories: "~700 kcal",
        popularity: 91,
        restaurants: ["Casa da Feijoada (Rio)", "Bolinha (São Paulo)"],
        streetFood: ["Weekend botecos"],
      }),
      f({
        name: "Açaí Bowl",
        specialty: "Amazon energy",
        description:
          "Frozen açaí blended thick and topped with banana, granola, and honey — purple fuel from the rainforest.",
        ingredients: ["Açaí pulp", "Banana", "Granola", "Honey", "Guaraná syrup"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~450 kcal",
        popularity: 88,
        restaurants: ["Tropicália (Rio)"],
        streetFood: ["Beachfront açaí kiosks"],
        query: "acai bowl",
      }),
      f({
        name: "Pão de Queijo",
        specialty: "Cheesy clouds",
        description:
          "Tapioca-flour cheese rolls — crisp shell, impossibly stretchy inside. Best eaten warm with coffee.",
        ingredients: ["Tapioca flour", "Minas cheese", "Egg", "Milk", "Oil"],
        priceRange: "$",
        diet: "Vegetarian",
        spice: 0,
        calories: "~70 kcal / piece",
        popularity: 85,
        restaurants: ["Casa do Pão de Queijo"],
        streetFood: ["Bakery padarias everywhere"],
        query: "pao de queijo",
      }),
      f({
        name: "Moqueca",
        specialty: "Coastal stew",
        description:
          "Fish simmered in coconut milk, dendê oil, tomato, and cilantro — the soul of Bahia in a clay pot.",
        ingredients: ["White fish", "Coconut milk", "Dendê oil", "Tomato", "Cilantro"],
        priceRange: "$$",
        diet: "Non-Vegetarian",
        spice: 2,
        calories: "~480 kcal",
        popularity: 80,
        restaurants: ["Paraíso Tropical (Salvador)"],
        streetFood: ["Bahian acarajé stands"],
      }),
    ],
    music: [
      { genre: "Bossa Nova", mood: "Warm & weightless", type: "Traditional", artists: ["João Gilberto", "Antônio Carlos Jobim"] },
      { genre: "Samba", mood: "Carnival energy", type: "Festival", artists: ["Beth Carvalho", "Zeca Pagodinho"] },
      { genre: "MPB", mood: "Sun-soaked soul", type: "Modern", artists: ["Caetano Veloso", "Gilberto Gil"] },
      { genre: "Forró", mood: "Northeastern dance", type: "Regional", artists: ["Luiz Gonzaga"] },
    ],
    attractions: [
      a({ name: "Christ the Redeemer", category: "Historical", description: "The 38m Art Deco statue watching over Rio from Corcovado.", location: "Rio de Janeiro", ticket: "R$87", hours: "8:00–19:00", bestTime: "Sunrise (clear skies)", tip: "Take the cog train through Tijuca forest.", unesco: false, query: "christ the redeemer" }),
      a({ name: "Sugarloaf Mountain", category: "Nature", description: "Cable-car peaks above Guanabara Bay at golden hour.", location: "Rio de Janeiro", ticket: "R$160", hours: "8:00–21:00", bestTime: "Sunset", tip: "Buy tickets online to skip lines.", query: "sugarloaf mountain rio" }),
      a({ name: "Iguaçu Falls", category: "Nature", description: "275 thundering cascades straddling the Argentine border.", location: "Paraná", ticket: "R$100", hours: "9:00–17:00", bestTime: "Morning", tip: "Bring a poncho for the Devil's Throat.", unesco: true, query: "iguazu falls" }),
      a({ name: "Copacabana Beach", category: "Beaches", description: "4km of golden sand, beach football, and caipirinhas.", location: "Rio de Janeiro", ticket: "Free", hours: "24 hours", bestTime: "Late afternoon", tip: "Watch your belongings; travel light.", query: "copacabana beach" }),
    ],
    culture: {
      festivals: ["Carnival (Carnaval)", "Festa Junina", "Réveillon (New Year)"],
      language: "Portuguese (Português)",
      greeting: "Olá / Tudo bem? with a hug or cheek kiss",
      clothing: "Bright, relaxed beachwear; Havaianas everywhere",
      etiquette: ["Arrive fashionably late", "Warm physical greetings", "Football is sacred"],
      currency: "Brazilian Real (R$ / BRL)",
      religion: "Catholic majority; vibrant Afro-Brazilian faiths",
      holidays: ["Carnival", "Independence Day (Sep 7)", "Tiradentes"],
      customs: ["Beach culture", "Churrasco barbecues", "Samba circles (roda)"],
    },
    accent: "from-emerald-300/40 to-violet-500/40",
  },
];

export const getCountry = (id: string) => countries.find((c) => c.id === id);
