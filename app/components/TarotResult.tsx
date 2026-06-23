
"use client";

import { useState, useEffect } from "react";
import { tarotCards } from "../../lib/tarot";

interface TarotResultProps {
  onBack: () => void;
}

export default function TarotResult({ onBack }: TarotResultProps) {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    // Pick 3 unique random cards
    const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
    setCards(shuffled.slice(0, 3));
  }, []);

  const spreadLabels = ["Past", "Present", "Future"];

  return (
    <div className="tarot-result-container text-center max-w-5xl mx-auto">
      <button onClick={onBack} className="btn btn-link mb-8">← Back to Form</button>
      
      <h3 className="text-3xl font-bold text-indigo-900 mb-2">Your Three-Card Spread</h3>
      <p className="text-gray-500 mb-12">Insights into your journey through time</p>

      <div className="tarot-spread grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={card.name} className="tarot-card-item group">
            <div className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-4">
              {spreadLabels[index]}
            </div>
            
            <div className="tarot-card-display perspective-1000 mb-6">
              <div className="tarot-card-visual relative w-full aspect-[2/3] bg-indigo-900 rounded-xl shadow-xl transition-transform duration-700 preserve-3d group-hover:rotate-y-12">
                <div className="tarot-card-inner absolute inset-0 flex flex-col items-center justify-center p-6 border-2 border-indigo-400/30 rounded-xl overflow-hidden">
                  <div className="absolute top-4 left-4 text-indigo-400/20 text-4xl">✦</div>
                  <div className="absolute bottom-4 right-4 text-indigo-400/20 text-4xl">✦</div>
                  
                  <span className="tarot-symbol text-6xl mb-4 text-amber-400">✨</span>
                  <p className="text-xl font-bold text-white uppercase tracking-tighter">{card.name}</p>
                </div>
              </div>
            </div>

            <div className="tarot-card-meaning text-left bg-white p-6 rounded-xl shadow-sm border border-indigo-50">
              <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                <span className="text-indigo-400">📜</span> Interpretation
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-indigo-50 rounded-2xl border border-indigo-100">
        <h4 className="font-bold text-indigo-900 mb-3">Reflecting on your spread</h4>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          The three-card spread offers a holistic view of your situation. Look for connections between the Past influences, 
          your Current energy, and the likely Future path. Trust your intuition as you contemplate these symbols.
        </p>
      </div>
    </div>
  );
}
