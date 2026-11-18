export type Rebus = { parts: string[]; answer: string; choices: string[] };

const POOL: Rebus[] = [
  { parts: ['⭐', '🐟'], answer: 'starfish', choices: ['starfish', 'stardust', 'sardine', 'nightjar'] },
  { parts: ['🌧️', '🌈'], answer: 'rainbow', choices: ['rainbow', 'stormbow', 'drizzle', 'monsoon'] },
  { parts: ['🌞', '🌻'], answer: 'sunflower', choices: ['sunflower', 'sunbeam', 'daylily', 'solar flare'] },
  { parts: ['🔥', '🚒'], answer: 'firetruck', choices: ['firetruck', 'firefly', 'red van', 'flame engine'] },
  { parts: ['🍯', '🍞'], answer: 'honeybread', choices: ['honeybread', 'sourdough', 'beehive loaf', 'syrup cake'] },
  { parts: ['🥜', '🍯'], answer: 'peanut butter', choices: ['peanut butter', 'almond cream', 'cashew spread', 'nut honey'] },
  { parts: ['🕷️', '🕸️'], answer: 'spider web', choices: ['spider web', 'silk net', 'cobweb', 'fly trap'] },
  { parts: ['🐦', '🏠'], answer: 'birdhouse', choices: ['birdhouse', 'nest box', 'aviary', 'hen coop'] },
  { parts: ['🍔', '🧀'], answer: 'cheeseburger', choices: ['cheeseburger', 'melted patty', 'burger wrap', 'cheddar melt'] },
  { parts: ['🌟', '🚀'], answer: 'starship', choices: ['starship', 'shooting star', 'space rocket', 'comet'] },
  { parts: ['🧈', '🦋'], answer: 'butterfly', choices: ['butterfly', 'moth', 'winged bug', 'flutter'] },
  { parts: ['🐄', '🤠'], answer: 'cowboy', choices: ['cowboy', 'rancher', 'herder', 'buckaroo'] },
  { parts: ['🍦', '🧊'], answer: 'ice cream', choices: ['ice cream', 'frozen scoop', 'snow cone', 'gelato'] },
  { parts: ['🐟', '🍟'], answer: 'fish and chips', choices: ['fish and chips', 'fried fish', 'cod fritters', 'chip shop'] },
  { parts: ['☕', '🫘'], answer: 'coffee bean', choices: ['coffee bean', 'espresso seed', 'bean brew', 'roast kernel'] },
  { parts: ['🌶️', '🌭'], answer: 'hot dog', choices: ['hot dog', 'spicy sausage', 'chili roll', 'chilli dog'] },
  { parts: ['🧈', '🥛'], answer: 'buttermilk', choices: ['buttermilk', 'milk butter', 'cream shake', 'dairy drink'] },
  { parts: ['🐔', '🍗'], answer: 'fried chicken', choices: ['fried chicken', 'roast bird', 'crispy fowl', 'grilled hen'] },
  { parts: ['🌙', '🐟'], answer: 'moonfish', choices: ['moonfish', 'night carp', 'lunar trout', 'opah'] },
  { parts: ['🌊', '🐚'], answer: 'seashell', choices: ['seashell', 'wave curl', 'salt scoop', 'ocean pearl'] },
  { parts: ['🌙', '💡'], answer: 'moonlight', choices: ['moonlight', 'night lamp', 'silver glow', 'lunar shine'] },
  { parts: ['🪨', '☎️'], answer: 'stone phone', choices: ['stone phone', 'rock call', 'pebble dial', 'granite ring'] },
  { parts: ['🪟', '🥚'], answer: 'window egg', choices: ['window egg', 'pane yolk', 'glass shell', 'sill hatch'] },
  { parts: ['🎈', '🐘'], answer: 'balloon elephant', choices: ['balloon elephant', 'inflated pachyderm', 'party trunk', 'tied tusks'] },
];

export type RebusPuzzle = {
  day: string;
  parts: string[];
  choices: string[];
  answer: string;
};

export const dayKeyUTC = (now: Date = new Date()): string => now.toISOString().slice(0, 10);

export const dailySeed = (day: string): number => {
  let hash = 2166136261;
  const input = 'rebus:' + day;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

export const mulberry32 = (seed: number): (() => number) => {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const shuffle = <T,>(items: T[], rand: () => number): T[] => [...items].sort(() => rand() - 0.5);

export const generateRebus = (day: string): RebusPuzzle => {
  const rand = mulberry32(dailySeed(day));
  const base = POOL[dailySeed(day) % POOL.length] ?? (POOL[0] as Rebus);
  return { day, parts: base.parts, choices: shuffle(base.choices, rand), answer: base.answer };
};

export const isCorrectRebus = (puzzle: RebusPuzzle, choice: string): boolean =>
  choice === puzzle.answer;
