
"use client";

import { useState, useEffect, useRef } from "react";
import AstrologyToolForm from "./AstrologyToolForm";
import BirthChartResult from "./BirthChartResult";
import MatchMakingForm from "./MatchMakingForm";
import MatchMakingResult from "./MatchMakingResult";
import NumerologyResult from "./NumerologyResult";
import TarotResult from "./TarotResult";
import { BirthDetails, MatchDetails } from "../../lib/astrologyApi";

const astrologyTools = [
  { 
    id: "birth-chart", 
    name: "Birth Chart Calculator",
    description: "Detailed analysis of planetary positions at your birth.",
    icon: "zodiac",
    image: "https://images.unsplash.com/photo-1515942661900-94b3d1972591?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: "kundli-matching", 
    name: "Kundli Matching",
    description: "Vedic compatibility analysis for marriage and relationships.",
    icon: "match",
    image: "https://3.imimg.com/data3/BY/OB/MY-9759711/kundli-match-making-500x500.jpg"
  },
  { 
    id: "numerology", 
    name: "Numerology Calculator",
    description: "Discover the hidden meaning behind your name and birth date.",
    icon: "numbers",
    image: "https://astrala.imgix.net/6sb2cxWciCvcbY12DpU8eC/95d59b3f79bf3cabc567da2ca50b63e7/name-numerology-destiny-soul-urge-personality-numbers.jpg?w=1080&q=60&auto=format,compress"
  },
  { 
    id: "moon-sign", 
    name: "Moon Sign Finder",
    description: "Find your Moon sign to understand your emotional core.",
    icon: "moon",
    image: "https://www.santoshsharmaa.com/wp-content/uploads/2025/10/sun-moon.webp"
  },
  { 
    id: "tarot", 
    name: "Tarot Card Draw",
    description: "Receive intuitive guidance with a single card pull.",
    icon: "tarot",
    image: "https://ppiyanshi.com/cdn/shop/products/live-tarot-card-reading-course-121542.jpg?v=1707504050"
  },
];

function ToolIcon({ kind }: { kind: string }) {
  switch (kind) {
    case "zodiac": return <span>✦</span>;
    case "match": return <span>⚭</span>;
    case "numbers": return <span>⬡</span>;
    case "moon": return <span>☽</span>;
    case "tarot": return <span>🃏</span>;
    default: return <span>✦</span>;
  }
}

export default function AstrologyToolsContainer() {
  const toolsSectionRef = useRef<HTMLDivElement>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [birthDetails, setBirthDetails] = useState<BirthDetails | null>(null);
  const [matchDetails, setMatchDetails] = useState<MatchDetails | null>(null);
  const [numerologyData, setNumerologyData] = useState<{ name: string; dob: string } | null>(null);

  const handleToolSelect = (index: number) => {
    const tool = astrologyTools[index];
    setSelectedIndex(index);
    setSelectedTool(tool.id);
    setBirthDetails(null);
    setMatchDetails(null);
    setNumerologyData(null);
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    }
  }, [selectedIndex]);

  const closePopup = () => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';

    setSelectedIndex(null);
    setBirthDetails(null);
    setMatchDetails(null);
    setNumerologyData(null);
    setSelectedTool(null);

    setTimeout(() => {
      document.getElementById('tools')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 50);
  };

  const handleFormSubmit = (details: BirthDetails) => {
    setBirthDetails(details);
  };

  const handleMatchSubmit = (details: MatchDetails) => {
    setMatchDetails(details);
  };

  const handleBack = () => {
    setBirthDetails(null);
    setMatchDetails(null);
    setNumerologyData(null);
    setSelectedTool(null);
  };

  const renderSelectedContent = () => {
    if (!selectedTool) return null;

    if (selectedTool === "tarot") {
      return <TarotResult onBack={handleBack} />;
    }

    if (selectedTool === "kundli-matching") {
      if (matchDetails) {
        return <MatchMakingResult details={matchDetails} onBack={() => setMatchDetails(null)} />;
      }
      return <MatchMakingForm onSubmit={handleMatchSubmit} title="Kundli Matching" />;
    }

    if (selectedTool === "numerology") {
      if (numerologyData) {
        return <NumerologyResult name={numerologyData.name} dob={numerologyData.dob} onBack={() => setNumerologyData(null)} />;
      }
      return (
        <div className="astrology-tool-form-container">
          <h3>Numerology Calculator</h3>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              setNumerologyData({
                name: formData.get("name") as string,
                dob: formData.get("dob") as string,
              });
            }}
            className="birth-form"
          >
            <label className="field">
              <span>Name</span>
              <input type="text" name="name" required placeholder="Your full name" />
            </label>
            <label className="field">
              <span>Date of Birth</span>
              <input type="date" name="dob" required />
            </label>
            <button type="submit" className="btn btn-primary form-submit">
              Calculate Numerology
            </button>
          </form>
        </div>
      );
    }

    if (birthDetails) {
      switch (selectedTool) {
        case "birth-chart":
          return <BirthChartResult details={birthDetails} onBack={() => setBirthDetails(null)} />;
        case "moon-sign":
          return <BirthChartResult details={birthDetails} onBack={() => setBirthDetails(null)} />;
        default:
          return (
            <div className="tool-placeholder">
              <h3>{astrologyTools.find(t => t.id === selectedTool)?.name}</h3>
              <p>Integration for this tool is coming soon.</p>
              <button onClick={handleBack} className="btn btn-secondary">Go Back</button>
            </div>
          );
      }
    }

    return (
      <AstrologyToolForm 
        onSubmit={handleFormSubmit} 
        title={astrologyTools.find(t => t.id === selectedTool)?.name || ""} 
      />
    );
  };

  return (
    <div id="tools" ref={toolsSectionRef} className="astrology-tools-container">
      <div className="tools-grid-premium">
        {astrologyTools.map((tool, idx) => (
          <article
            key={tool.id}
            className="tool-card-premium"
            onClick={() => handleToolSelect(idx)}
            role="button"
            tabIndex={0}
          >
            <div className="tool-card-bg bw" style={{ backgroundImage: `url(${tool.image})` }} />
            <div className="tool-card-content">
              <div className="tool-card-icon"><ToolIcon kind={tool.icon} /></div>
              <div className="tool-card-text">
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
              <div className="tool-card-action"><span>Explore Tool →</span></div>
            </div>
          </article>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="tool-popup-overlay"
          onMouseDown={(e) => e.target === e.currentTarget && closePopup()}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="tool-popup"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <div className="tool-popup-header">
              <div className="tool-popup-title-row">
                <span className="tool-popup-icon">
                  <ToolIcon kind={astrologyTools[selectedIndex].icon} />
                </span>
                <div>
                  <h3>{astrologyTools[selectedIndex].name}</h3>
                  <p>{astrologyTools[selectedIndex].description}</p>
                </div>
              </div>
              <button className="tool-popup-close" onClick={closePopup} aria-label="Close">✕</button>
            </div>

            <div className="tool-popup-body">
              {renderSelectedContent()}
            </div>

            {/* footer intentionally removed - forms manage their own submit buttons */}
          </div>
        </div>
      )}
    </div>
  );
}
