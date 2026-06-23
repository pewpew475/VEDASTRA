
export const tarotCards = [
  { name: "The Fool", description: "New beginnings, optimism, and a leap of faith." },
  { name: "The Magician", description: "Manifestation, power, and taking action." },
  { name: "The High Priestess", description: "Intuition, mystery, and inner knowledge." },
  { name: "The Empress", description: "Femininity, beauty, and abundance." },
  { name: "The Emperor", description: "Authority, structure, and foundation." },
  { name: "The Hierophant", description: "Tradition, conformity, and spiritual guidance." },
  { name: "The Lovers", description: "Love, harmony, and relationships." },
  { name: "The Chariot", description: "Control, willpower, and victory." },
  { name: "Strength", description: "Courage, persuasion, and inner strength." },
  { name: "The Hermit", description: "Introspection, solitude, and inner guidance." },
  { name: "Wheel of Fortune", description: "Change, cycles, and destiny." },
  { name: "Justice", description: "Fairness, truth, and law." },
  { name: "The Hanged Man", description: "Surrender, letting go, and new perspectives." },
  { name: "Death", description: "Endings, transformation, and transitions." },
  { name: "Temperance", description: "Balance, patience, and moderation." },
  { name: "The Devil", description: "Addiction, materialism, and playfulness." },
  { name: "The Tower", description: "Sudden change, upheaval, and revelation." },
  { name: "The Star", description: "Hope, inspiration, and renewal." },
  { name: "The Moon", description: "Illusion, fear, and anxiety." },
  { name: "The Sun", description: "Positivity, fun, and warmth." },
  { name: "Judgement", description: "Rebirth, inner calling, and absolution." },
  { name: "The World", description: "Completion, integration, and accomplishment." },
];

export function drawTarotCard() {
  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  return tarotCards[randomIndex];
}
