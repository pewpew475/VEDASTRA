"use client";

import { useState } from "react";
import Link from "next/link";
import { GEMSTONES } from "../gemstones/data";

type GemRecommendation = {
  name: string;
  planet: string;
  description: string;
  slug: string;
};

const SAMPLE_RECOMMENDATIONS: GemRecommendation[] = [
  {
    name: "Yellow Sapphire",
    planet: "Jupiter",
    description: "Supports wisdom, growth, and graceful expansion of opportunities.",
    slug: "yellow-sapphire",
  },
  {
    name: "Blue Sapphire",
    planet: "Saturn",
    description: "Brings discipline, focus, and karmic alignment when worn correctly.",
    slug: "blue-sapphire",
  },
  {
    name: "Emerald",
    planet: "Mercury",
    description: "Sharpens intellect, communication, and business intuition.",
    slug: "emerald-panna",
  },
  {
    name: "Ruby",
    planet: "Sun",
    description: "Ignites confidence, leadership, and radiant self-expression.",
    slug: "ruby",
  },
];

export default function GemstoneRecommendationWidget() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [tob, setTob] = useState("");
  const [birthplace, setBirthplace] = useState("");
  const [result, setResult] = useState<GemRecommendation | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const index =
      (name.length + birthplace.length + (dob ? dob.length : 0) + (tob ? tob.length : 0)) %
      SAMPLE_RECOMMENDATIONS.length;
    setResult(SAMPLE_RECOMMENDATIONS[index]);
  }

  return (
    <section id="gem-widget" className="gem-widget">
      <div className="gem-widget-header">
        <p className="gem-widget-kicker">Birth Chart Gemstone Match</p>
        <h3 className="gem-widget-title">Find Your Planetary Gemstone</h3>
        <p className="gem-widget-subtitle">
          Enter your birth details to receive an astrologically aligned gemstone suggestion.
        </p>
      </div>

      <form className="gem-widget-form" onSubmit={handleSubmit}>
        <div className="gem-widget-grid">
          <label className="gem-field">
            <span>Name</span>
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="gem-field">
            <span>Date of Birth</span>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </label>
          <label className="gem-field">
            <span>Time of Birth</span>
            <input
              type="time"
              value={tob}
              onChange={(e) => setTob(e.target.value)}
            />
          </label>
          <label className="gem-field">
            <span>Birthplace</span>
            <input
              type="text"
              placeholder="City, State, Country"
              value={birthplace}
              onChange={(e) => setBirthplace(e.target.value)}
            />
          </label>
        </div>

        <button type="submit" className="gem-widget-cta">
          <span>Find My Gemstone</span>
        </button>
      </form>

      <div className="gem-widget-result" aria-live="polite">
        {result ? (
          <div className="flex flex-col gap-4">
            <div>
              <p className="gem-widget-result-label">Your recommended gemstone</p>
              <p className="gem-widget-result-main">
                {result.name} <span>for {result.planet}</span>
              </p>
              <p className="gem-widget-result-description">{result.description}</p>
            </div>
            <Link 
              href={`/gemstones/${result.slug}`} 
              className="inline-flex items-center gap-2 text-gold-500 font-bold uppercase tracking-widest text-xs hover:text-gold-400 transition-colors"
            >
              View Detailed Guide <span>→</span>
            </Link>
          </div>
        ) : (
          <p className="gem-widget-placeholder">
            Example: <strong>Your recommended gemstone: Yellow Sapphire for Jupiter</strong>
          </p>
        )}
      </div>
    </section>
  );
}

