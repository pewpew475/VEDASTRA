
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
    <div id="tools" ref={toolsSectionRef} className="mt-12 w-full">
      <div className="grid grid-cols-5 gap-4 min-[769px]:max-[1064px]:grid-cols-3 max-[768px]:grid-cols-2 max-[768px]:gap-3 max-[420px]:grid-cols-1">
        {astrologyTools.map((tool, idx) => {
          const isLastOdd = idx === astrologyTools.length - 1 && (idx + 1) % 2 === 1;
          return (
          <article
            key={tool.id}
            className={`group relative rounded-[18px] overflow-hidden min-h-[300px] cursor-pointer flex flex-col [background:linear-gradient(160deg,rgba(22,16,52,0.88)_0%,rgba(12,8,32,0.96)_100%)] border border-[rgba(255,255,255,0.07)] shadow-[0_2px_0_rgba(212,175,55,0.05),0_4px_20px_rgba(0,0,0,0.45),0_12px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)] outline-none [transition:transform_0.4s_cubic-bezier(0.23,1,0.32,1),border-color_0.4s_ease,box-shadow_0.4s_ease] hover:-translate-y-2 hover:border-[rgba(212,175,55,0.28)] hover:shadow-[0_0_0_1px_rgba(212,175,55,0.12),0_8px_32px_rgba(0,0,0,0.55),0_24px_64px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] focus-visible:-translate-y-2 focus-visible:border-[rgba(212,175,55,0.28)] focus-visible:shadow-[0_0_0_1px_rgba(212,175,55,0.12),0_8px_32px_rgba(0,0,0,0.55),0_24px_64px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] max-[768px]:hover:translate-y-0 max-[768px]:focus-visible:translate-y-0 before:content-[''] before:absolute before:top-0 before:left-1/4 before:right-1/4 before:h-px before:[background:linear-gradient(90deg,transparent,rgba(212,175,55,0.55),transparent)] before:opacity-0 before:transition-opacity before:duration-[0.4s] before:z-[4] hover:before:opacity-100 focus-visible:before:opacity-100 after:content-[''] after:absolute after:inset-0 after:z-[1] after:[background:linear-gradient(to_bottom,rgba(10,7,26,0.2)_0%,rgba(10,7,26,0.55)_40%,rgba(10,7,26,0.96)_100%)] after:rounded-[inherit] after:pointer-events-none${isLastOdd ? " max-[768px]:col-span-2 max-[768px]:max-w-full max-[420px]:col-span-1" : ""}`}
            onClick={() => handleToolSelect(idx)}
            role="button"
            tabIndex={0}
          >
            <div
              className="absolute inset-0 bg-cover bg-center z-0 [transition:transform_0.55s_cubic-bezier(0.23,1,0.32,1),filter_0.55s_ease] grayscale brightness-[0.3] contrast-[1.1] group-hover:grayscale-[65%] group-hover:brightness-[0.4] group-hover:scale-[1.06]"
              style={{ backgroundImage: `url(${tool.image})` }}
            />
            <div className="relative z-[2] flex flex-col justify-end min-h-[300px] px-[18px] py-5 box-border gap-3 max-[768px]:min-h-[240px] max-[768px]:py-4 max-[768px]:px-[14px] max-[420px]:min-h-[200px]">
              <div className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-[11px] bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.32)] text-[#d4af37] text-base backdrop-blur-[8px] self-start shadow-[0_0_12px_rgba(212,175,55,0.1)] flex-shrink-0 transition-[background,border-color] duration-300 group-hover:bg-[rgba(212,175,55,0.15)] group-hover:border-[rgba(212,175,55,0.5)]"><ToolIcon kind={tool.icon} /></div>
              <div>
                <h3 className="m-0 mb-[6px] text-[0.92rem] font-bold text-[#f0e6d0] leading-[1.3] tracking-[0.01em] max-[768px]:text-[0.85rem]">{tool.name}</h3>
                <p className="m-0 text-[0.75rem] text-[rgba(210,195,165,0.62)] leading-[1.6] max-[768px]:hidden max-[420px]:block max-[420px]:text-[0.72rem]">{tool.description}</p>
              </div>
              <div className="pt-2 border-t border-[rgba(255,255,255,0.07)]"><span className="text-[0.68rem] font-bold tracking-[0.1em] uppercase text-[#d4af37] opacity-80 transition-[opacity,letter-spacing] duration-300 inline-flex items-center gap-1 group-hover:opacity-100 group-hover:tracking-[0.14em]">Explore Tool →</span></div>
            </div>
          </article>
          );
        })}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-5 bg-[rgba(6,4,18,0.72)] [backdrop-filter:blur(14px)_saturate(1.4)] [-webkit-backdrop-filter:blur(14px)_saturate(1.4)] [animation:overlayFadeIn_0.28s_ease_both] max-[768px]:p-3 max-[768px]:items-end"
          onMouseDown={(e) => e.target === e.currentTarget && closePopup()}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-[540px] max-h-[88vh] overflow-y-auto [overscroll-behavior:contain] rounded-[22px] [background:linear-gradient(160deg,rgba(22,15,55,0.98)_0%,rgba(12,8,32,1)_100%)] border border-[rgba(212,175,55,0.18)] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_40px_rgba(0,0,0,0.7),0_24px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(212,175,55,0.06),inset_0_1px_0_rgba(255,255,255,0.06)] [animation:popupSlideIn_0.32s_cubic-bezier(0.23,1,0.32,1)_both] [scrollbar-width:thin] [scrollbar-color:rgba(212,175,55,0.25)_transparent] before:content-[''] before:absolute before:top-0 before:left-[15%] before:right-[15%] before:h-px before:[background:linear-gradient(90deg,transparent,rgba(212,175,55,0.55),transparent)] before:pointer-events-none before:rounded-[1px] before:z-[1] max-[768px]:max-w-full max-[768px]:max-h-[90vh] max-[768px]:rounded-[22px_22px_16px_16px] max-[768px]:[animation:popupSheetUp_0.35s_cubic-bezier(0.23,1,0.32,1)_both] max-[768px]:after:content-[''] max-[768px]:after:absolute max-[768px]:after:top-[10px] max-[768px]:after:left-1/2 max-[768px]:after:-translate-x-1/2 max-[768px]:after:w-9 max-[768px]:after:h-[3px] max-[768px]:after:bg-[rgba(255,255,255,0.18)] max-[768px]:after:rounded-[2px]"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 px-7 pt-7 pb-5 border-b border-[rgba(255,255,255,0.07)] sticky top-0 z-10 [background:linear-gradient(160deg,rgba(22,15,55,0.99)_0%,rgba(14,10,38,0.99)_100%)] rounded-[22px_22px_0_0] max-[768px]:px-5 max-[768px]:pt-7 max-[768px]:pb-[18px]">
              <div className="flex items-center gap-[14px] flex-1 min-w-0">
                <span className="inline-flex items-center justify-center w-12 h-12 flex-shrink-0 rounded-xl bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.32)] text-[1.2rem] shadow-[0_0_16px_rgba(212,175,55,0.12)]">
                  <ToolIcon kind={astrologyTools[selectedIndex].icon} />
                </span>
                <div>
                  <h3 className="m-0 mb-1 text-[1.05rem] font-bold text-[#f0e6d0] leading-[1.2]">{astrologyTools[selectedIndex].name}</h3>
                  <p className="m-0 text-[0.77rem] text-[rgba(210,195,165,0.58)] leading-[1.4]">{astrologyTools[selectedIndex].description}</p>
                </div>
              </div>
              <button className="flex-shrink-0 w-[34px] h-[34px] rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] text-[rgba(210,195,165,0.7)] text-[0.78rem] cursor-pointer flex items-center justify-center transition-[background,border-color,color] duration-[0.25s] self-start mt-[2px] hover:bg-[rgba(212,175,55,0.1)] hover:border-[rgba(212,175,55,0.3)] hover:text-[#d4af37]" onClick={closePopup} aria-label="Close">✕</button>
            </div>

            <div className="tool-popup-body px-7 pt-7 pb-2 flex flex-col gap-5 max-[768px]:px-5 max-[768px]:pt-5 max-[768px]:gap-4">
              {renderSelectedContent()}
            </div>

            {/* footer intentionally removed - forms manage their own submit buttons */}
          </div>
        </div>
      )}
    </div>
  );
}
