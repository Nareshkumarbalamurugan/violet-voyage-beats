import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { c as Clock, B as BookOpen, w as ChevronUp, o as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const articles = [{
  id: "kyoto-golden-hour",
  category: "Culture",
  title: "Kyoto at Golden Hour: Finding Stillness in the City of Temples",
  excerpt: "As dusk falls over Fushimi Inari, something extraordinary happens to the vermilion torii gates — they ignite.",
  readTime: "6 min",
  date: "May 2026",
  image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
  body: `As dusk falls over Fushimi Inari, something extraordinary happens to the vermilion torii gates — they ignite. The setting sun catches the lacquer paint at precisely the right angle, turning the entire pathway into a corridor of molten gold. Most tourists have departed by 5pm. This is precisely when you should arrive.

Kyoto demands patience. Unlike Tokyo's relentless forward motion, this ancient capital rewards those who slow down, step off the tour-bus circuit, and wander without agenda. The city's 1,600 temples and shrines are not monuments to be ticked off a list; they are living spiritual spaces, each carrying centuries of ceremony and intention.

**The Philosopher's Path in autumn** — when maple trees drop crimson leaves into the canal — is perhaps Japan's most quietly beautiful walk. At 1.8km, it takes just 40 minutes, but most who set out along it find themselves still wandering two hours later, drawn into side alleys, small coffee houses, and tiny galleries selling hand-pressed woodblock prints.

For food, skip the tourist-facing ramen shops along Shijo Street. Instead, ask at your ryokan for their preferred kaiseki restaurant. Kaiseki — the formal multi-course cuisine of Kyoto — is as much theatre as nutrition. Dishes arrive in precise sequence: clear dashi broth, seasonal sashimi, a tiny lacquered box of pickles. Each element mirrors the season, the weather, and the chef's mood that morning.

The best Kyoto experiences are invisible to the casual eye. A bamboo gate half-open off a side street. The scent of incense drifting from a temple at 6am. A grandmother walking her dog past a garden that has remained unchanged for 400 years. These are the moments that Violet Voyage exists to help you find.`
}, {
  id: "paris-hidden-bistros",
  category: "Food",
  title: "The Paris Locals Know: Bistros That Don't Appear on Any Map",
  excerpt: "Real Parisian cuisine hides behind un-Instagrammable facades in the 11th and 20th arrondissements.",
  readTime: "5 min",
  date: "April 2026",
  image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
  body: `Real Parisian cuisine hides behind un-Instagrammable facades in the 11th and 20th arrondissements. The tablecloths are paper. The wine comes in a carafe. And the steak frites is transcendent.

The secret to eating well in Paris is simple: walk away from the Seine. The 1st, 3rd, and 4th arrondissements are beautiful, but their restaurants have largely adapted to serve the 30 million annual tourists rather than the Parisians who once frequented them. The locals moved east.

**Rue de Charonne** in the 11th offers a kilometre-long stretch of genuinely excellent neighbourhood restaurants — Vietnamese pho run by third-generation families, Algerian couscous houses that have fed the neighbourhood since the 1970s, and the occasional modern bistrot where a young chef works with hyper-local Loire Valley produce.

The ritual of the French lunch is non-negotiable. Two courses minimum. Wine. A coffee afterward. No rushing. Parisians consider the midday meal a form of cultural identity, and eating a quick sandwich over a keyboard is viewed with the same horror most cities reserve for genuinely criminal behaviour.

Le Repaire de Cartouche remains one of the finest unknown bistros in the city — packed with regulars at noon, quiet by 1:30. Order the rabbit terrine to start, then the duck confit with Sarladaise potatoes, then the île flottante. You will understand, suddenly and completely, why French cuisine became the template against which all others are measured.`
}, {
  id: "seoul-music-underground",
  category: "Music",
  title: "Seoul After Midnight: The Jazz Basements and K-Indie Clubs You Should Know",
  excerpt: "Beyond K-pop, Seoul pulses with an extraordinary underground music scene operating in a different key entirely.",
  readTime: "7 min",
  date: "March 2026",
  image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=800&q=80",
  body: `Beyond K-pop, Seoul pulses with an extraordinary underground music scene operating in a different key entirely. In Itaewon's basement bars, jazz musicians from six countries convene nightly. In Hongdae, indie bands that have refused major label deals play to audiences of 80 who know every word.

Seoul's musical geography is hyperlocal. Gangnam is glossy K-pop territory — entertainment company buildings, idol training facilities, the polished infrastructure of the global pop machine. But cross the Han River and travel to the northern neighbourhoods, and you enter a different sonic universe.

**Hapjeong and Mapo-gu** are home to Seoul's indie rock scene. Venues like FF, Mudaeruk, and Rolling Hall have hosted the Korean artists who define what music critics now call 'K-indie' — guitar-driven, introspective, influenced equally by 90s American indie rock and traditional Korean folk music.

The jazz scene, centred on Itaewon and the Insadong neighbourhood, is perhaps Seoul's best-kept cultural secret. Club Evans has operated continuously since 1993, presenting live jazz seven nights a week. Ticket prices rarely exceed ₩15,000. The musicians — many trained at Berklee and Juilliard — play with the intensity of people who have chosen this life deliberately.

For K-pop fans, the HYBE Insight museum near Yongsan Station offers a genuinely excellent behind-the-scenes look at idol culture — not hagiography, but a thoughtful examination of the music, production process, and global cultural moment. Book tickets three weeks ahead.`
}, {
  id: "amalfi-slow-travel",
  category: "Travel Tips",
  title: "Slow Travel on the Amalfi Coast: Why You Need at Least Ten Days",
  excerpt: "The Amalfi Coast is not a destination you do. It is one you inhabit, surrender to, and eventually mourn.",
  readTime: "8 min",
  date: "February 2026",
  image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
  body: `The Amalfi Coast is not a destination you do. It is one you inhabit, surrender to, and eventually mourn. Most travellers make the mistake of attempting it in three days — day-tripping from Naples or Sorrento, queuing for the blue-domed churches, eating overpriced pasta with a harbour view, and leaving satisfied that they've seen it. They have seen almost nothing.

The coast reveals itself slowly. The first three days are adjustment: the vertigo of the roads, the density of the crowd in high summer, the realisation that Google Maps and local reality are in fundamental disagreement about which paths exist.

By day four, something shifts. You have found the beach that requires a 40-minute hike and 200 steps. You know which bar opens at 6am for the fishermen and serves coffee that tastes like it has been distilled from the Mediterranean itself. You have eaten your weight in fresh mozzarella di bufala and begun to understand that the Italian relationship with cheese is not a preference but a philosophy.

**Ravello**, perched 350 metres above sea level, is the coast's quietest and most beautiful village — a favourite of Virginia Woolf, D.H. Lawrence, and Gore Vidal. Its Villa Cimbrone garden overlooks a terrace with a view so impossibly perfect it has been reproduced on a thousand Instagram grids, yet somehow remains moving every single time.

The practical advice: book accommodation for ten nights minimum. Rent nothing — there are no roads suitable for self-driving unless you are psychologically prepared for vehicles sharing single-lane cliff roads at speed. Take the SITA bus, learn when it runs, and embrace the inevitable 40-minute wait as the universe's gift of enforced contemplation.`
}, {
  id: "rio-carnival-secrets",
  category: "Culture",
  title: "Beyond the Sambadrome: Carnival in Rio's Neighbourhoods",
  excerpt: "The televised Carnival parades are extraordinary. But the real party happens in the streets of Santa Teresa and Lapa.",
  readTime: "5 min",
  date: "January 2026",
  image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=800&q=80",
  body: `The televised Carnival parades are extraordinary. But the real party happens in the streets of Santa Teresa and Lapa, where neighbourhood blocos (street bands) draw tens of thousands of Cariocas in elaborate costumes for free, spontaneous, genuinely joyful celebrations that bear no resemblance to the ticketed spectacle in the Sambadrome.

Rio's Carnival is not one event but a hundred simultaneous ones. The Sambadrome parades — where samba schools compete in fierce, meticulous, multi-million-dollar productions — represent the formal, televised heart of the festival. They are breathtaking and absolutely worth experiencing. But they are also ticketed, tourist-facing, and increasingly disconnected from the Carioca street culture from which they emerged.

**The blocos** are where you find that culture intact. Banda de Ipanema, Cordão do Bola Preta, Monobloco — each bloco has its own personality, music, and following. Bola Preta, which celebrated its 107th Carnival in 2026, draws over two million people through the streets of the centre in its single Saturday parade. No tickets. No barriers. Just a city dancing.

For first-timers, the practical logistics of Carnival are daunting. Book accommodation eight months in advance — hotel prices increase 400% and availability collapses. Carry minimal valuables. Stay aware of your surroundings in crowded areas. And understand that the city operates on a different schedule: parties start at midnight, peak at 3am, and conclude at sunrise.

The food of Carnival is street food — açaí bowls, pastel (fried pastry) with cheese or shrimp, corn on the cob, coxinha (chicken croquettes), and an endless river of ice-cold beer served in small cans to stay cold in the heat.`
}, {
  id: "florence-museums-strategy",
  category: "Travel Tips",
  title: "The Florence Strategy: How to See the Uffizi Without Losing Your Mind",
  excerpt: "Florence's greatest museums are crowded. They are also irreplaceable. The solution is a strategy, not a compromise.",
  readTime: "4 min",
  date: "December 2025",
  image: "https://images.unsplash.com/photo-1541370976299-4d24be11e19b?w=800&q=80",
  body: `Florence's greatest museums are crowded. They are also irreplaceable. The solution is a strategy, not a compromise. Book your Uffizi ticket for 8am — the moment the museum opens — on the official website no less than six weeks in advance. Arrive fifteen minutes early. Walk directly to the Botticelli rooms on the second floor. The Birth of Venus and Primavera will be, for approximately forty minutes, nearly empty.

This matters because these paintings require time. The Birth of Venus is not a postcard. It is a 1.72 by 2.78 metre panel that rewards sustained looking — the texture of Venus's hair, the extraordinary foreshortening of the wind god Zephyr, the meadow flowers rendered with a botanist's precision. A photograph communicates almost none of this.

**The Accademia** — home to Michelangelo's David — operates on the same principle. Book for first entry, spend an hour with David alone (or nearly so), then walk the rest of the collection at leisure. The museum also houses Michelangelo's unfinished Prisoners series, which many visitors rush past to reach the David but which are arguably more affecting — figures struggling to emerge from raw marble, intentional incompletion as artistic statement.

Beyond the canonical museums, Florence rewards wandering. The Oltrarno neighbourhood south of the Arno has largely escaped the worst of mass tourism. The Bardini Garden offers views of the city that rival the Piazzale Michelangelo without the selfie-stick density. And the San Miniato al Monte church, a 20-minute walk uphill from the city centre, contains one of the finest Romanesque interiors in Italy and is almost always quiet.`
}];
const categories = ["All", "Culture", "Food", "Music", "Travel Tips"];
function BlogPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [expanded, setExpanded] = reactExports.useState(null);
  const filtered = activeCategory === "All" ? articles : articles.filter((a) => a.category === activeCategory);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen pb-24 pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "mb-4 text-xs uppercase tracking-[0.3em] text-gold", children: "Travel Journal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
      opacity: 0,
      y: 30
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.9
    }, className: "text-5xl md:text-6xl font-semibold text-gradient-gold", children: [
      "Stories from",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "the road."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      delay: 0.3
    }, className: "mt-4 max-w-xl text-muted-foreground", children: "Deep reads, cultural guides, and hard-won travel wisdom from our editorial team and community." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveCategory(cat), className: `rounded-full px-4 py-1.5 text-sm transition-all ${activeCategory === cat ? "bg-primary text-primary-foreground" : "border border-white/20 text-muted-foreground hover:bg-white/5"}`, children: cat }, cat)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((article, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { layout: true, initial: {
      opacity: 0,
      y: 24
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0
    }, transition: {
      delay: i * 0.07
    }, className: "glass overflow-hidden rounded-3xl shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cursor-pointer", onClick: () => setExpanded((prev) => prev === article.id ? null : article.id), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-[280px_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: article.image, alt: article.title, className: "aspect-video w-full object-cover sm:aspect-auto sm:h-full", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-gold/15 px-2.5 py-1 text-gold font-medium", children: article.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
              " ",
              article.readTime,
              " read"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: article.date })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-xl font-semibold leading-snug", children: article.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: article.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-1 text-sm font-medium text-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }),
            expanded === article.id ? "Collapse" : "Read article",
            expanded === article.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expanded === article.id && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        height: 0,
        opacity: 0
      }, animate: {
        height: "auto",
        opacity: 1
      }, exit: {
        height: 0,
        opacity: 0
      }, transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-invert prose-sm max-w-none border-t border-white/10 px-6 py-6", children: article.body.split("\n\n").map((paragraph, pi) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm leading-relaxed text-foreground/85", dangerouslySetInnerHTML: {
        __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
      } }, pi)) }) }) })
    ] }, article.id)) }) })
  ] }) });
}
export {
  BlogPage as component
};
