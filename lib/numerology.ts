
export function calculateLifePathNumber(dob: string): number {
  const digits = dob.replace(/\D/g, "").split("").map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split("").map(Number).reduce((a, b) => a + b, 0);
  }
  
  return sum;
}

const pythagoreanTable: Record<string, number> = {
  a: 1, j: 1, s: 1,
  b: 2, k: 2, t: 2,
  c: 3, l: 3, u: 3,
  d: 4, m: 4, v: 4,
  e: 5, n: 5, w: 5,
  f: 6, o: 6, x: 6,
  g: 7, p: 7, y: 7,
  h: 8, q: 8, z: 8,
  i: 9, r: 9
};

export function calculateDestinyNumber(name: string): number {
  const chars = name.toLowerCase().replace(/[^a-z]/g, "").split("");
  let sum = chars.reduce((acc, char) => acc + (pythagoreanTable[char] || 0), 0);
  
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split("").map(Number).reduce((a, b) => a + b, 0);
  }
  
  return sum;
}

export const numerologyMeanings: Record<number, string> = {
  1: "The Leader: Independent, creative, and ambitious. You are a natural-born leader with a strong drive to succeed.",
  2: "The Peacemaker: Sensitive, diplomatic, and cooperative. You value harmony and excel in partnerships.",
  3: "The Communicator: Expressive, social, and optimistic. You have a gift for creativity and self-expression.",
  4: "The Builder: Practical, disciplined, and reliable. You value stability and work hard to achieve your goals.",
  5: "The Adventurer: Versatile, curious, and freedom-loving. You embrace change and seek new experiences.",
  6: "The Nurturer: Responsible, compassionate, and family-oriented. You find fulfillment in helping others.",
  7: "The Seeker: Analytical, introspective, and spiritual. You have a deep desire to uncover the truth and seek knowledge.",
  8: "The Achiever: Authoritative, efficient, and success-oriented. You have strong organizational skills and value material success.",
  9: "The Humanitarian: Compassionate, idealistic, and selfless. You are driven by a desire to make the world a better place.",
  11: "The Visionary: Highly intuitive and inspired. You have a strong spiritual connection and a unique vision for the future.",
  22: "The Master Builder: Capable of turning dreams into reality. You have the practical skills and vision to achieve great things.",
  33: "The Master Teacher: Selfless and compassionate. You have a deep desire to guide and inspire others.",
};
