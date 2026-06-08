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

/* Scenic landscape image for countries that don't ship a bundled asset */
const place = (q: string) => img(q, "landscape,travel");

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

  /* ─────────────── INDIA ─────────────── */
  {
    id: "india",
    name: "India",
    flag: "🇮🇳",
    tagline: "A Million Stories, One Land.",
    description:
      "From snow-dusted Himalayas to spice-scented bazaars and palaces of marble — a sensory symphony of color, faith, and flavour.",
    image: place("india taj mahal"),
    rating: 4.7,
    bestSeason: "Oct–Mar (cool & dry)",
    budget: "$",
    budgetLabel: "Budget-friendly",
    cities: ["Delhi", "Jaipur", "Varanasi", "Mumbai"],
    region: "South Asia",
    visa: "eVisa (30/90 days)",
    safety: 71,
    timezone: "IST (UTC+5:30)",
    foods: [
      f({ name: "Masala Dosa", specialty: "Crispy fermented crepe", description: "A golden, paper-thin rice-and-lentil crepe wrapped around spiced potato, served with coconut chutney and sambar.", ingredients: ["Rice batter", "Urad dal", "Potato", "Mustard seeds", "Curry leaves"], priceRange: "$", diet: "Vegetarian", spice: 2, calories: "~390 kcal", popularity: 94, restaurants: ["MTR (Bengaluru)", "Saravana Bhavan"], streetFood: ["South Indian tiffin stalls", "Railway platform vendors"] }),
      f({ name: "Butter Chicken", specialty: "Velvet tomato gravy", description: "Tandoor-charred chicken simmered in a silky tomato-butter sauce kissed with fenugreek and cream.", ingredients: ["Chicken", "Tomato", "Butter", "Cream", "Garam masala"], priceRange: "$$", diet: "Non-Vegetarian", spice: 2, calories: "~490 kcal", popularity: 96, restaurants: ["Moti Mahal (Delhi)", "Bukhara"], streetFood: ["Dhaba highway kitchens"] }),
      f({ name: "Pani Puri", specialty: "Explosive street bite", description: "Hollow crisp shells filled with spiced potato and tangy tamarind water that bursts in one glorious mouthful.", ingredients: ["Semolina puri", "Tamarind water", "Potato", "Chickpeas", "Mint"], priceRange: "$", diet: "Vegetarian", spice: 3, calories: "~150 kcal", popularity: 92, restaurants: ["Elco Market (Mumbai)"], streetFood: ["Chaat carts everywhere", "Evening bazaar stalls"] }),
    ],
    music: [
      { genre: "Bollywood", mood: "Cinematic & euphoric", type: "Modern", artists: ["A. R. Rahman", "Arijit Singh"] },
      { genre: "Hindustani Classical", mood: "Meditative ragas", type: "Traditional", artists: ["Ravi Shankar", "Zakir Hussain"] },
      { genre: "Bhangra", mood: "Punjabi festival energy", type: "Festival", artists: ["Daler Mehndi"] },
    ],
    attractions: [
      a({ name: "Taj Mahal", category: "Historical", description: "An ivory-white marble mausoleum of eternal love, glowing at dawn.", location: "Agra", ticket: "₹1100 (foreigners)", hours: "Sunrise–sunset (closed Fri)", bestTime: "Sunrise", tip: "Enter from the east gate to beat queues.", unesco: true, query: "taj mahal" }),
      a({ name: "Amber Fort", category: "Historical", description: "A honey-hued hilltop fortress of mirrored halls above Jaipur.", location: "Jaipur", ticket: "₹500", hours: "8am–6pm", bestTime: "Morning", tip: "Catch the evening light & sound show.", query: "amber fort jaipur" }),
      a({ name: "Varanasi Ghats", category: "Hidden Gem", description: "Ancient riverfront steps where dawn aartis meet the sacred Ganges.", location: "Varanasi", ticket: "Free", hours: "24 hours", bestTime: "Sunrise boat ride", tip: "Witness the evening Ganga Aarti.", query: "varanasi ghats ganges" }),
    ],
    culture: {
      festivals: ["Diwali (Festival of Lights)", "Holi (Colors)", "Durga Puja"],
      language: "Hindi, English + 20 official languages",
      greeting: "Namaste 🙏 with palms together",
      clothing: "Saree, kurta & vibrant regional dress",
      etiquette: ["Remove shoes in temples & homes", "Eat with the right hand", "Dress modestly at shrines"],
      currency: "Indian Rupee (₹ / INR)",
      religion: "Hindu majority; richly multi-faith",
      holidays: ["Diwali", "Independence Day (Aug 15)", "Holi"],
      customs: ["Touching elders' feet", "Festive rangoli art", "Chai at every hour"],
    },
    accent: "from-amber-300/40 to-sky-500/40",
  },

  /* ─────────────── THAILAND ─────────────── */
  {
    id: "thailand",
    name: "Thailand",
    flag: "🇹🇭",
    tagline: "Land of Smiles.",
    description:
      "Gilded temples, turquoise islands, and night markets perfumed with lemongrass and chilli — serenity and chaos in perfect balance.",
    image: place("thailand temple beach"),
    rating: 4.8,
    bestSeason: "Nov–Mar (cool, dry)",
    budget: "$",
    budgetLabel: "Great value",
    cities: ["Bangkok", "Chiang Mai", "Phuket", "Krabi"],
    region: "Southeast Asia",
    visa: "Visa-free / Visa-on-arrival (30–60 days)",
    safety: 78,
    timezone: "ICT (UTC+7)",
    foods: [
      f({ name: "Pad Thai", specialty: "Wok-tossed icon", description: "Stir-fried rice noodles with tamarind, egg, peanuts and prawns — sweet, sour and savoury in every bite.", ingredients: ["Rice noodles", "Tamarind", "Egg", "Peanuts", "Bean sprouts"], priceRange: "$", diet: "Both", spice: 2, calories: "~430 kcal", popularity: 95, restaurants: ["Thip Samai (Bangkok)"], streetFood: ["Riverside night markets", "Soi food carts"] }),
      f({ name: "Tom Yum Goong", specialty: "Fiery aromatic soup", description: "A hot-and-sour prawn soup loud with lemongrass, galangal, lime and bird's-eye chilli.", ingredients: ["Prawns", "Lemongrass", "Galangal", "Kaffir lime", "Chilli"], priceRange: "$$", diet: "Non-Vegetarian", spice: 4, calories: "~290 kcal", popularity: 90, restaurants: ["Pe Aor (Bangkok)"], streetFood: ["Wet-market soup stalls"] }),
      f({ name: "Mango Sticky Rice", specialty: "Sweet coconut bliss", description: "Warm glutinous rice steeped in coconut cream beside ripe golden mango.", ingredients: ["Glutinous rice", "Coconut milk", "Ripe mango", "Palm sugar"], priceRange: "$", diet: "Vegetarian", spice: 0, calories: "~340 kcal", popularity: 88, restaurants: ["Mae Varee (Bangkok)"], streetFood: ["Dessert carts", "Weekend markets"] }),
    ],
    music: [
      { genre: "Luk Thung", mood: "Rural ballads", type: "Traditional", artists: ["Pumpuang Duangjan"] },
      { genre: "Thai Pop (T-Pop)", mood: "Bright & youthful", type: "Modern", artists: ["BNK48", "Phum Viphurit"] },
      { genre: "Mor Lam", mood: "Hypnotic Isan groove", type: "Regional", artists: ["Rasmee"] },
    ],
    attractions: [
      a({ name: "Grand Palace & Wat Phra Kaew", category: "Historical", description: "A dazzling royal complex housing the revered Emerald Buddha.", location: "Bangkok", ticket: "฿500", hours: "8:30am–3:30pm", bestTime: "Early morning", tip: "Cover shoulders and knees to enter.", query: "grand palace bangkok" }),
      a({ name: "Phi Phi Islands", category: "Beaches", description: "Limestone cliffs plunging into electric-blue lagoons.", location: "Krabi", ticket: "Boat tours ฿1000+", hours: "Day trips", bestTime: "Nov–Apr", tip: "Go early to beat the crowds at Maya Bay.", query: "phi phi islands thailand" }),
      a({ name: "Doi Suthep Temple", category: "Historical", description: "A golden mountaintop temple overlooking Chiang Mai.", location: "Chiang Mai", ticket: "฿30", hours: "6am–6pm", bestTime: "Sunset", tip: "Climb the 309-step naga staircase.", query: "doi suthep temple" }),
    ],
    culture: {
      festivals: ["Songkran (Water Festival)", "Loi Krathong (Lights)", "Yi Peng Lantern"],
      language: "Thai (ภาษาไทย)",
      greeting: "Sawasdee 🙏 with a wai",
      clothing: "Light modest dress; cover up at temples",
      etiquette: ["Never touch someone's head", "Don't point feet at people/Buddha", "Respect the monarchy"],
      currency: "Thai Baht (฿ / THB)",
      religion: "Theravada Buddhism",
      holidays: ["Songkran", "King's Birthday", "Loi Krathong"],
      customs: ["The wai greeting", "Spirit houses", "Floating krathong offerings"],
    },
    accent: "from-violet-300/40 to-sky-500/40",
  },

  /* ─────────────── SPAIN ─────────────── */
  {
    id: "spain",
    name: "Spain",
    flag: "🇪🇸",
    tagline: "Sun, Soul & Siesta.",
    description:
      "Flamenco heels on cobbled streets, Gaudí's dreamlike spires, and tapas shared until midnight — passion lived out loud.",
    image: place("spain barcelona architecture"),
    rating: 4.7,
    bestSeason: "Apr–Jun & Sep–Oct",
    budget: "$$",
    budgetLabel: "Moderate",
    cities: ["Barcelona", "Madrid", "Seville", "Granada"],
    region: "Southern Europe",
    visa: "Schengen Visa (90 days)",
    safety: 84,
    timezone: "CET (UTC+1)",
    foods: [
      f({ name: "Paella Valenciana", specialty: "Saffron rice feast", description: "Bomba rice simmered in a wide pan with saffron, rabbit, chicken and beans, crowned by a prized crust (socarrat).", ingredients: ["Bomba rice", "Saffron", "Chicken", "Rabbit", "Green beans"], priceRange: "$$", diet: "Both", spice: 1, calories: "~470 kcal", popularity: 93, restaurants: ["Casa Carmela (Valencia)"], streetFood: ["Sunday family paellas"] }),
      f({ name: "Jamón Ibérico", specialty: "Acorn-cured artistry", description: "Silky hand-carved ham from acorn-fed black pigs, melting at room temperature.", ingredients: ["Ibérico pork leg", "Sea salt", "Time (36+ months)"], priceRange: "$$$", diet: "Non-Vegetarian", spice: 0, calories: "~250 kcal", popularity: 89, restaurants: ["Mercado de San Miguel (Madrid)"], streetFood: ["Tapas bar counters"] }),
      f({ name: "Patatas Bravas", specialty: "Smoky-spiced potatoes", description: "Crisp fried potato cubes drenched in smoky brava sauce and garlic aioli.", ingredients: ["Potatoes", "Smoked paprika", "Tomato", "Garlic aioli"], priceRange: "$", diet: "Vegetarian", spice: 2, calories: "~320 kcal", popularity: 85, restaurants: ["Bar Tomás (Barcelona)"], streetFood: ["Every neighbourhood tapas bar"] }),
    ],
    music: [
      { genre: "Flamenco", mood: "Raw Andalusian passion", type: "Traditional", artists: ["Paco de Lucía", "Camarón de la Isla"] },
      { genre: "Spanish Pop", mood: "Sunlit & danceable", type: "Modern", artists: ["Rosalía", "Alejandro Sanz"] },
      { genre: "Rumba Catalana", mood: "Street-party rhythm", type: "Regional", artists: ["Gipsy Kings"] },
    ],
    attractions: [
      a({ name: "Sagrada Família", category: "Historical", description: "Gaudí's unfinished basilica where stone melts into forest-like columns and stained-glass light.", location: "Barcelona", ticket: "€26", hours: "9am–6pm", bestTime: "Morning light", tip: "Book timed tickets weeks ahead.", unesco: true, query: "sagrada familia" }),
      a({ name: "Alhambra", category: "Historical", description: "A Moorish palace-fortress of intricate arabesques above Granada.", location: "Granada", ticket: "€19", hours: "8:30am–8pm", bestTime: "Sunset over Albaicín", tip: "Nasrid Palaces require a timed slot.", unesco: true, query: "alhambra granada" }),
      a({ name: "Plaza de España", category: "Hidden Gem", description: "A semicircular tiled plaza of bridges and azulejos in Seville.", location: "Seville", ticket: "Free", hours: "24 hours", bestTime: "Golden hour", tip: "Rent a rowboat on the canal.", query: "plaza de espana seville" }),
    ],
    culture: {
      festivals: ["La Tomatina", "Running of the Bulls (San Fermín)", "Feria de Abril"],
      language: "Spanish (Español)",
      greeting: "¡Hola! with two cheek kisses",
      clothing: "Stylish smart-casual; dress up for evenings",
      etiquette: ["Dinner starts late (9–10pm)", "Greet with two kisses", "Respect the siesta hours"],
      currency: "Euro (€ / EUR)",
      religion: "Catholic heritage",
      holidays: ["Semana Santa", "La Tomatina", "Three Kings (Reyes)"],
      customs: ["Late-night tapas crawls", "Sobremesa table talk", "Flamenco evenings"],
    },
    accent: "from-rose-300/40 to-sky-500/40",
  },

  /* ─────────────── EGYPT ─────────────── */
  {
    id: "egypt",
    name: "Egypt",
    flag: "🇪🇬",
    tagline: "Where Time Began.",
    description:
      "Pyramids piercing a desert sky, a sacred river of life, and 5,000 years of pharaohs whispering from temple walls.",
    image: place("egypt pyramids nile"),
    rating: 4.6,
    bestSeason: "Oct–Apr (mild)",
    budget: "$",
    budgetLabel: "Affordable",
    cities: ["Cairo", "Luxor", "Aswan", "Alexandria"],
    region: "North Africa",
    visa: "eVisa / Visa-on-arrival (30 days)",
    safety: 68,
    timezone: "EET (UTC+2)",
    foods: [
      f({ name: "Koshari", specialty: "National comfort bowl", description: "A hearty street tangle of rice, lentils, macaroni and chickpeas under spicy tomato sauce and crisp onions.", ingredients: ["Rice", "Lentils", "Macaroni", "Chickpeas", "Fried onions"], priceRange: "$", diet: "Vegetarian", spice: 2, calories: "~450 kcal", popularity: 91, restaurants: ["Abou Tarek (Cairo)"], streetFood: ["Koshari shops citywide"] }),
      f({ name: "Ful Medames", specialty: "Ancient breakfast", description: "Slow-stewed fava beans mashed with olive oil, cumin and lemon — eaten since the pharaohs.", ingredients: ["Fava beans", "Olive oil", "Cumin", "Lemon", "Garlic"], priceRange: "$", diet: "Vegetarian", spice: 1, calories: "~300 kcal", popularity: 86, restaurants: ["Felfela (Cairo)"], streetFood: ["Morning ful carts"] }),
      f({ name: "Molokhia", specialty: "Emerald jute stew", description: "A silky green stew of finely chopped jute leaves with garlic and coriander, ladled over rice or bread.", ingredients: ["Jute leaves", "Garlic", "Coriander", "Chicken stock"], priceRange: "$", diet: "Both", spice: 1, calories: "~210 kcal", popularity: 80, restaurants: ["Home kitchens & local diners"], streetFood: ["Baladi eateries"] }),
    ],
    music: [
      { genre: "Tarab / Classical Arabic", mood: "Soulful & sweeping", type: "Traditional", artists: ["Umm Kulthum", "Mohamed Abdel Wahab"] },
      { genre: "Mahraganat", mood: "Electro street energy", type: "Modern", artists: ["Sadat", "Oka Wi Ortega"] },
      { genre: "Shaabi", mood: "Working-class festivity", type: "Regional", artists: ["Ahmed Adaweya"] },
    ],
    attractions: [
      a({ name: "Pyramids of Giza", category: "Historical", description: "The last surviving Ancient Wonder — three colossal tombs guarded by the Sphinx.", location: "Giza", ticket: "EGP 540", hours: "7am–5pm", bestTime: "Early morning", tip: "Ride a camel out for the classic panorama.", unesco: true, query: "pyramids of giza" }),
      a({ name: "Karnak Temple", category: "Historical", description: "A vast hall of 134 towering carved columns built across 2,000 years.", location: "Luxor", ticket: "EGP 450", hours: "6am–5:30pm", bestTime: "Late afternoon", tip: "Return for the evening sound & light show.", unesco: true, query: "karnak temple luxor" }),
      a({ name: "Nile Felucca Sail", category: "Nature", description: "Drift past palm-fringed banks on a traditional white-sailed boat at sunset.", location: "Aswan", ticket: "~EGP 300/hr", hours: "Daylight", bestTime: "Sunset", tip: "Negotiate the price before boarding.", query: "felucca nile aswan" }),
    ],
    culture: {
      festivals: ["Ramadan & Eid", "Abu Simbel Sun Festival", "Sham El-Nessim (Spring)"],
      language: "Arabic (العربية)",
      greeting: "As-salamu alaykum (السلام عليكم)",
      clothing: "Modest dress; cover shoulders & knees",
      etiquette: ["Use the right hand", "Dress modestly at mosques", "Bargain politely in bazaars"],
      currency: "Egyptian Pound (E£ / EGP)",
      religion: "Muslim majority; Coptic Christian minority",
      holidays: ["Eid al-Fitr", "Eid al-Adha", "Sham El-Nessim"],
      customs: ["Generous hospitality", "Mint tea welcomes", "Haggling in souks"],
    },
    accent: "from-amber-300/40 to-cyan-500/40",
  },

  /* ─────────────── MEXICO ─────────────── */
  {
    id: "mexico",
    name: "Mexico",
    flag: "🇲🇽",
    tagline: "Color, Spice & Soul.",
    description:
      "Aztec pyramids and Pacific surf, mariachi at midnight and markets ablaze with chillies — a country that lives in vivid technicolor.",
    image: place("mexico chichen itza beach"),
    rating: 4.7,
    bestSeason: "Nov–Apr (dry season)",
    budget: "$",
    budgetLabel: "Affordable",
    cities: ["Mexico City", "Oaxaca", "Cancún", "Guadalajara"],
    region: "North America",
    visa: "Visa-free / FMM tourist card (180 days)",
    safety: 66,
    timezone: "CST (UTC−6)",
    foods: [
      f({ name: "Tacos al Pastor", specialty: "Spit-roasted legend", description: "Marinated pork shaved off a vertical trompo onto warm corn tortillas, crowned with pineapple, onion and coriander.", ingredients: ["Pork", "Achiote", "Corn tortilla", "Pineapple", "Coriander"], priceRange: "$", diet: "Non-Vegetarian", spice: 3, calories: "~230 kcal each", popularity: 96, restaurants: ["El Huequito (CDMX)", "Los Cocuyos"], streetFood: ["Evening taquerías", "Street trompo stands"] }),
      f({ name: "Mole Poblano", specialty: "Ancient sauce of 20+ ingredients", description: "A complex, glossy sauce of chillies, chocolate, nuts and spices ladled over tender turkey or chicken.", ingredients: ["Chillies", "Mexican chocolate", "Sesame", "Almonds", "Spices"], priceRange: "$$", diet: "Non-Vegetarian", spice: 2, calories: "~410 kcal", popularity: 84, restaurants: ["El Mural de los Poblanos (Puebla)"], streetFood: ["Festival fondas"] }),
      f({ name: "Guacamole", specialty: "Tableside avocado ritual", description: "Ripe avocado mashed with lime, onion, chilli and coriander — fresh, creamy and bright.", ingredients: ["Avocado", "Lime", "Onion", "Serrano chilli", "Coriander"], priceRange: "$", diet: "Vegetarian", spice: 1, calories: "~150 kcal", popularity: 90, restaurants: ["Pujol (CDMX)"], streetFood: ["Market molcajete stalls"] }),
    ],
    music: [
      { genre: "Mariachi", mood: "Proud & romantic", type: "Traditional", artists: ["Vicente Fernández", "Mariachi Vargas"] },
      { genre: "Regional Mexicano", mood: "Modern corridos", type: "Modern", artists: ["Peso Pluma", "Natanael Cano"] },
      { genre: "Son Jarocho", mood: "Veracruz string fiesta", type: "Regional", artists: ["Los Cojolites"] },
    ],
    attractions: [
      a({ name: "Chichén Itzá", category: "Historical", description: "The colossal Maya pyramid of Kukulcán where equinox light forms a descending serpent.", location: "Yucatán", ticket: "MXN 614", hours: "8am–5pm", bestTime: "Early morning", tip: "Visit at the equinox for the serpent shadow.", unesco: true, query: "chichen itza" }),
      a({ name: "Teotihuacán", category: "Historical", description: "Avenue of the Dead flanked by the towering Pyramids of the Sun and Moon.", location: "near Mexico City", ticket: "MXN 90", hours: "9am–5pm", bestTime: "Sunrise balloon ride", tip: "Float over the pyramids in a hot-air balloon.", unesco: true, query: "teotihuacan pyramid" }),
      a({ name: "Cenotes of Yucatán", category: "Nature", description: "Crystalline freshwater sinkholes once sacred to the Maya.", location: "Yucatán", ticket: "~MXN 200", hours: "9am–5pm", bestTime: "Midday light beams", tip: "Bring biodegradable sunscreen only.", query: "cenote yucatan" }),
    ],
    culture: {
      festivals: ["Día de los Muertos", "Guelaguetza", "Cinco de Mayo"],
      language: "Spanish (Español) + 68 native languages",
      greeting: "¡Hola! / ¡Buenos días! with a handshake or hug",
      clothing: "Casual bright wear; embroidered huipiles in the south",
      etiquette: ["Greet warmly", "Tip ~10–15%", "Use 'usted' with elders"],
      currency: "Mexican Peso ($ / MXN)",
      religion: "Catholic majority; deep indigenous roots",
      holidays: ["Día de los Muertos", "Independence (Sep 16)", "Three Kings"],
      customs: ["Ofrenda altars", "Sobremesa lingering meals", "Piñata celebrations"],
    },
    accent: "from-rose-300/40 to-emerald-500/40",
  },

  /* ─────────────── GREECE ─────────────── */
  {
    id: "greece",
    name: "Greece",
    flag: "🇬🇷",
    tagline: "Cradle of the West.",
    description:
      "Whitewashed villages tumbling into the Aegean, marble temples on sun-baked hills, and the slow pleasure of olives, wine and sea.",
    image: place("greece santorini aegean"),
    rating: 4.8,
    bestSeason: "May–Jun & Sep–Oct",
    budget: "$$",
    budgetLabel: "Moderate",
    cities: ["Athens", "Santorini", "Mykonos", "Thessaloniki"],
    region: "Southern Europe",
    visa: "Schengen Visa (90 days)",
    safety: 83,
    timezone: "EET (UTC+2)",
    foods: [
      f({ name: "Souvlaki", specialty: "Charcoal-grilled skewers", description: "Marinated meat grilled over coals and tucked into warm pita with tzatziki, tomato and onion.", ingredients: ["Pork or chicken", "Pita", "Tzatziki", "Tomato", "Oregano"], priceRange: "$", diet: "Non-Vegetarian", spice: 1, calories: "~350 kcal", popularity: 94, restaurants: ["Kostas (Athens)"], streetFood: ["Souvlaki grills everywhere"] }),
      f({ name: "Moussaka", specialty: "Layered oven classic", description: "Baked layers of aubergine, spiced minced lamb and creamy béchamel — comfort, Greek-style.", ingredients: ["Aubergine", "Minced lamb", "Béchamel", "Tomato", "Cinnamon"], priceRange: "$$", diet: "Non-Vegetarian", spice: 1, calories: "~450 kcal", popularity: 86, restaurants: ["Ta Karamanlidika (Athens)"], streetFood: ["Taverna lunch trays"] }),
      f({ name: "Greek Salad (Horiatiki)", specialty: "Sun-ripened simplicity", description: "Tomato, cucumber, olives and a slab of feta dressed in golden olive oil and oregano.", ingredients: ["Tomato", "Cucumber", "Kalamata olives", "Feta", "Olive oil"], priceRange: "$", diet: "Vegetarian", spice: 0, calories: "~220 kcal", popularity: 88, restaurants: ["Island tavernas"], streetFood: ["Market produce stalls"] }),
    ],
    music: [
      { genre: "Rebetiko", mood: "Smoky urban blues", type: "Traditional", artists: ["Markos Vamvakaris"] },
      { genre: "Laïko", mood: "Bouzouki-driven pop", type: "Modern", artists: ["Stelios Kazantzidis"] },
      { genre: "Nisiotika", mood: "Breezy island songs", type: "Regional", artists: ["Konitopoulos family"] },
    ],
    attractions: [
      a({ name: "Acropolis & Parthenon", category: "Historical", description: "The marble temple of Athena crowning Athens for 2,500 years.", location: "Athens", ticket: "€20", hours: "8am–8pm", bestTime: "Opening hour", tip: "Combo ticket covers nearby ancient sites.", unesco: true, query: "acropolis parthenon" }),
      a({ name: "Oia, Santorini", category: "Beaches", description: "Cliffside blue-domed village above a flooded volcanic caldera.", location: "Santorini", ticket: "Free", hours: "24 hours", bestTime: "Sunset", tip: "Arrive early to claim a sunset spot.", query: "oia santorini sunset" }),
      a({ name: "Meteora Monasteries", category: "Hidden Gem", description: "Byzantine monasteries perched atop sheer rock pinnacles.", location: "Thessaly", ticket: "€3 each", hours: "9am–4pm", bestTime: "Morning mist", tip: "Dress modestly to enter the monasteries.", unesco: true, query: "meteora monastery greece" }),
    ],
    culture: {
      festivals: ["Greek Orthodox Easter", "Apokries (Carnival)", "Athens Epidaurus Festival"],
      language: "Greek (Ελληνικά)",
      greeting: "Yassou (Γειά σου) with a warm smile",
      clothing: "Light summer wear; cover up at monasteries",
      etiquette: ["Accept offered food/drink", "Dinner is late & lingering", "Name-days matter more than birthdays"],
      currency: "Euro (€ / EUR)",
      religion: "Greek Orthodox Christianity",
      holidays: ["Orthodox Easter", "Ohi Day (Oct 28)", "Assumption (Aug 15)"],
      customs: ["Smashing plates in celebration", "Evil-eye (mati) charms", "Long seaside tavernas"],
    },
    accent: "from-sky-300/40 to-blue-500/40",
  },

  /* ─────────────── AUSTRALIA ─────────────── */
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    tagline: "The Wild & Wide South.",
    description:
      "Red desert horizons, the world's oldest rainforests, a living reef of impossible colour, and laid-back cities hugging golden coasts.",
    image: place("australia sydney opera reef"),
    rating: 4.7,
    bestSeason: "Sep–Nov & Mar–May",
    budget: "$$$",
    budgetLabel: "Premium",
    cities: ["Sydney", "Melbourne", "Cairns", "Uluru"],
    region: "Oceania",
    visa: "eVisitor / ETA (90 days)",
    safety: 89,
    timezone: "AEST (UTC+10)",
    foods: [
      f({ name: "Barramundi", specialty: "Grilled native fish", description: "A buttery white-fleshed fish grilled with lemon and native herbs — a coastal staple.", ingredients: ["Barramundi", "Lemon myrtle", "Olive oil", "Sea salt"], priceRange: "$$", diet: "Non-Vegetarian", spice: 0, calories: "~280 kcal", popularity: 80, restaurants: ["Fish Face (Sydney)"], streetFood: ["Seaside fish & chip shops"] }),
      f({ name: "Meat Pie", specialty: "Footy-stand icon", description: "A flaky pastry parcel of rich minced beef gravy — best eaten with tomato sauce on top.", ingredients: ["Beef mince", "Gravy", "Puff pastry", "Onion"], priceRange: "$", diet: "Non-Vegetarian", spice: 0, calories: "~430 kcal", popularity: 85, restaurants: ["Harry's Café de Wheels (Sydney)"], streetFood: ["Bakeries & sport stadiums"] }),
      f({ name: "Pavlova", specialty: "Cloud-light meringue", description: "A crisp-shelled, marshmallow-soft meringue piled with cream and summer fruit.", ingredients: ["Egg whites", "Sugar", "Cream", "Passionfruit", "Berries"], priceRange: "$", diet: "Vegetarian", spice: 0, calories: "~300 kcal", popularity: 78, restaurants: ["Bourke Street Bakery"], streetFood: ["Holiday dessert tables"] }),
    ],
    music: [
      { genre: "Aussie Rock / Pub Rock", mood: "Anthemic & raw", type: "Modern", artists: ["AC/DC", "Midnight Oil"] },
      { genre: "Indigenous / Yolŋu", mood: "Ancient songlines", type: "Traditional", artists: ["Yothu Yindi", "Gurrumul"] },
      { genre: "Indie Pop", mood: "Sun-drenched & dreamy", type: "Modern", artists: ["Tame Impala", "Courtney Barnett"] },
    ],
    attractions: [
      a({ name: "Sydney Opera House", category: "Historical", description: "The sail-shelled masterpiece sweeping over Sydney Harbour.", location: "Sydney", ticket: "Tours from AUD 43", hours: "9am–5pm tours", bestTime: "Sunset harbour cruise", tip: "Catch a performance inside the concert hall.", unesco: true, query: "sydney opera house" }),
      a({ name: "Great Barrier Reef", category: "Nature", description: "The planet's largest living structure — 2,300km of coral and marine life.", location: "Queensland", ticket: "Tours from AUD 200", hours: "Day trips", bestTime: "Jun–Oct (clear water)", tip: "Choose eco-certified reef operators.", unesco: true, query: "great barrier reef" }),
      a({ name: "Uluru", category: "Nature", description: "A vast sacred sandstone monolith glowing red at dawn in the Red Centre.", location: "Northern Territory", ticket: "AUD 38 (3-day park)", hours: "Sunrise–sunset", bestTime: "Sunset color change", tip: "Respect Anangu wishes — don't climb.", unesco: true, query: "uluru ayers rock" }),
    ],
    culture: {
      festivals: ["Vivid Sydney", "Melbourne Cup", "NAIDOC Week"],
      language: "English (+ 250+ Indigenous languages)",
      greeting: "G'day! / How ya going? — relaxed & friendly",
      clothing: "Casual, beach-ready; sun-smart hats",
      etiquette: ["Egalitarian & informal", "Sit up front in taxis", "Shout a round at the pub"],
      currency: "Australian Dollar (A$ / AUD)",
      religion: "Diverse & largely secular",
      holidays: ["Australia Day", "ANZAC Day", "Boxing Day"],
      customs: ["Beach & BBQ culture", "Acknowledging Country", "Footy weekends"],
    },
    accent: "from-amber-300/40 to-rose-500/40",
  },

  /* ─────────────── MOROCCO ─────────────── */
  {
    id: "morocco",
    name: "Morocco",
    flag: "🇲🇦",
    tagline: "A Feast for the Senses.",
    description:
      "Labyrinth souks heavy with saffron and leather, Saharan dunes glowing at dusk, and mint tea poured from a silver height.",
    image: place("morocco marrakech sahara"),
    rating: 4.6,
    bestSeason: "Mar–May & Sep–Nov",
    budget: "$",
    budgetLabel: "Affordable",
    cities: ["Marrakech", "Fez", "Chefchaouen", "Casablanca"],
    region: "North Africa",
    visa: "Visa-free for many (90 days)",
    safety: 74,
    timezone: "WET (UTC+1)",
    foods: [
      f({ name: "Tagine", specialty: "Slow-cooked clay-pot stew", description: "Tender meat or vegetables simmered with preserved lemon, olives and warm spices in a conical clay pot.", ingredients: ["Lamb or chicken", "Preserved lemon", "Olives", "Ras el hanout", "Apricots"], priceRange: "$", diet: "Both", spice: 2, calories: "~420 kcal", popularity: 92, restaurants: ["Nomad (Marrakech)"], streetFood: ["Medina food stalls"] }),
      f({ name: "Couscous", specialty: "Friday family feast", description: "Steamed semolina grains mounded with slow-cooked vegetables and meat in golden broth.", ingredients: ["Semolina couscous", "Lamb", "Carrots", "Chickpeas", "Saffron"], priceRange: "$", diet: "Both", spice: 1, calories: "~390 kcal", popularity: 88, restaurants: ["Dar Yacout (Marrakech)"], streetFood: ["Friday communal lunches"] }),
      f({ name: "Bastilla", specialty: "Sweet-savory pie", description: "Flaky warqa pastry layered with spiced poultry, almonds and a dusting of cinnamon sugar.", ingredients: ["Warqa pastry", "Pigeon or chicken", "Almonds", "Cinnamon", "Sugar"], priceRange: "$$", diet: "Non-Vegetarian", spice: 1, calories: "~470 kcal", popularity: 79, restaurants: ["Al Fassia (Marrakech)"], streetFood: ["Celebration caterers"] }),
    ],
    music: [
      { genre: "Gnawa", mood: "Hypnotic spiritual trance", type: "Traditional", artists: ["Maâlem Mahmoud Guinia"] },
      { genre: "Chaabi", mood: "Festive street pop", type: "Regional", artists: ["Najat Aatabou"] },
      { genre: "Andalusian Classical", mood: "Refined courtly suites", type: "Traditional", artists: ["Orchestra of Fez"] },
    ],
    attractions: [
      a({ name: "Jemaa el-Fnaa", category: "Nightlife", description: "Marrakech's legendary square of snake charmers, storytellers and sizzling food stalls.", location: "Marrakech", ticket: "Free", hours: "24 hours", bestTime: "After sunset", tip: "Agree prices before eating or watching.", unesco: true, query: "jemaa el fnaa marrakech" }),
      a({ name: "Chefchaouen Blue City", category: "Hidden Gem", description: "A mountain town washed in a thousand shades of blue.", location: "Rif Mountains", ticket: "Free", hours: "24 hours", bestTime: "Morning light", tip: "Wander the back alleys for the best blues.", query: "chefchaouen blue city" }),
      a({ name: "Sahara at Merzouga", category: "Nature", description: "Towering golden dunes of Erg Chebbi crossed by camel caravan.", location: "Merzouga", ticket: "Tours from MAD 800", hours: "Overnight camps", bestTime: "Sunrise on the dunes", tip: "Stay overnight in a desert camp.", query: "sahara desert merzouga" }),
    ],
    culture: {
      festivals: ["Ramadan & Eid", "Fes Festival of Sacred Music", "Imilchil Marriage Festival"],
      language: "Arabic & Amazigh (+ French)",
      greeting: "As-salamu alaykum / Labas? with the right hand on heart",
      clothing: "Modest dress; djellaba robes traditional",
      etiquette: ["Eat with the right hand", "Accept mint tea graciously", "Bargain with good humour"],
      currency: "Moroccan Dirham (MAD)",
      religion: "Sunni Islam",
      holidays: ["Eid al-Fitr", "Eid al-Adha", "Throne Day"],
      customs: ["Mint tea hospitality", "Hammam bath rituals", "Souk haggling"],
    },
    accent: "from-amber-300/40 to-blue-500/40",
  },
];

export const getCountry = (id: string) => countries.find((c) => c.id === id);
