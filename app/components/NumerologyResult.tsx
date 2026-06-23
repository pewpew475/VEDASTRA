
"use client";

import { calculateLifePathNumber, calculateDestinyNumber, numerologyMeanings } from "../../lib/numerology";

interface NumerologyResultProps {
  name: string;
  dob: string;
  onBack: () => void;
}

export default function NumerologyResult({ name, dob, onBack }: NumerologyResultProps) {
  const lifePath = calculateLifePathNumber(dob);
  const destiny = calculateDestinyNumber(name);

  return (
    <div className="numerology-result-container">
      <button onClick={onBack} className="btn btn-link mb-4">← Back to Form</button>
      
      <div className="result-grid">
        <div className="result-card">
          <h3>Life Path Number: {lifePath}</h3>
          <p>{numerologyMeanings[lifePath]}</p>
        </div>

        <div className="result-card">
          <h3>Destiny Number: {destiny}</h3>
          <p>{numerologyMeanings[destiny]}</p>
        </div>
      </div>
    </div>
  );
}
