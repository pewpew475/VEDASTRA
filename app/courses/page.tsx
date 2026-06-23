"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  ChevronRight, 
  X, 
  Clock, 
  Award, 
  CheckCircle2, 
  Star, 
  TrendingUp,
  Zap,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Globe,
  Layout,
  Layers,
  Sparkles,
  Compass,
  Moon,
  Sun,
  Users,
  BadgeCheck,
  Trophy,
  ArrowUpRight,
  Quote
} from "lucide-react";
import coursesData from "../../courses.json";

// Types
interface Module {
  name?: string;
  modules?: string[];
  duration?: string;
  outcome?: string;
  focus?: string[];
}

interface Level {
  name: string;
  duration?: string;
  programName?: string;
  modules?: string[];
  outcome?: string;
}

interface Phase {
  name: string;
  duration: string;
  focus: string[];
}

interface DailyStructure {
  morning: string;
  evening: string;
  night: string;
}

interface Course {
  id: string;
  title: string;
  alias?: string[];
  category: string;
  overview: string;
  levels?: Level[];
  phases?: Phase[];
  modules?: string[];
  dailyStructure?: DailyStructure;
  features?: string[];
  positioning?: string;
  certification?: string;
  bonusModules?: string[];
  duration?: string;
  outcome?: string;
  trending?: boolean;
  featured?: boolean;
  image?: string;
}

const CATEGORIES = [
  { name: "All", icon: <Sparkles className="w-4 h-4" /> },
  { name: "Astrology", icon: <Globe className="w-4 h-4" /> },
  { name: "Energy Healing", icon: <Zap className="w-4 h-4" /> },
  { name: "Divination", icon: <Moon className="w-4 h-4" /> },
  { name: "Meditation", icon: <Sun className="w-4 h-4" /> },
  { name: "Vastu", icon: <Layout className="w-4 h-4" /> },
  { name: "Spiritual", icon: <Compass className="w-4 h-4" /> }
];

const LEVELS = ["All", "Foundation", "Practitioner", "Master", "Advanced"];

const TRUST_BADGES = [
  { icon: <Users className="w-5 h-5" />, text: "5000+ Students Transformed" },
  { icon: <BadgeCheck className="w-5 h-5" />, text: "Certified Master Programs" },
  { icon: <Trophy className="w-5 h-5" />, text: "Award-Winning Vedic School" }
];

const TESTIMONIALS = [
  {
    name: "Anya Sharma",
    role: "Professional Astrologer",
    text: "The Ved Astra Astrology course completely changed my career path. The depth of knowledge and professional guidance is unmatched.",
    image: "https://i.pravatar.cc/150?u=anya"
  },
  {
    name: "Vikram Mehta",
    role: "Energy Healer",
    text: "Mastering Reiki through VedAstraa was a spiritual awakening. The community and teachers are incredibly supportive.",
    image: "https://i.pravatar.cc/150?u=vikram"
  },
  {
    name: "Priya Iyer",
    role: "Tarot Practitioner",
    text: "I went from a complete beginner to a confident professional tarot reader in just 3 months. Highly recommended!",
    image: "https://i.pravatar.cc/150?u=priya"
  }
];

// Background Aura/Particle Component
const ParticleBackground = React.memo(() => {
  const reduceMotion = useReducedMotion();

  const particles = useMemo(() => {
    if (reduceMotion) return [];

    return Array.from({ length: 8 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.4 + 0.05,
      duration: Math.random() * 12 + 16,
      delay: Math.random() * 10,
      size: Math.random() < 0.25 ? 2 : 1,
    }));
  }, [reduceMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/40 to-slate-950" />
      
      {/* Animated Aura Waves */}
      <motion.div 
        aria-hidden="true"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform, opacity" }}
        className={`absolute -top-1/4 -left-1/4 w-full h-full bg-indigo-500/10 blur-[90px] rounded-full ${reduceMotion ? "hidden" : "hidden md:block"}`}
      />
      <motion.div 
        aria-hidden="true"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform, opacity" }}
        className={`absolute -bottom-1/4 -right-1/4 w-full h-full bg-purple-500/10 blur-[90px] rounded-full ${reduceMotion ? "hidden" : "hidden md:block"}`}
      />
      <motion.div 
        aria-hidden="true"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-[110px] rounded-full ${reduceMotion ? "hidden" : "hidden md:block"}`}
      />

      {/* Subtle Particles */}
      <div className={`absolute inset-0 ${reduceMotion ? "hidden" : "hidden md:block"}`}>
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ x: `${p.x}%`, y: `${p.y}%`, opacity: p.opacity }}
            animate={{ y: ["-10%", "110%"], opacity: [0, 0.35, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
            style={{ willChange: "transform, opacity" }}
            className={`absolute bg-amber-200/30 rounded-full blur-[1px] ${p.size === 2 ? "w-0.5 h-0.5" : "w-1 h-1"}`}
          />
        ))}
      </div>
    </div>
  );
});

ParticleBackground.displayName = "ParticleBackground";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const coursesSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        const next = window.scrollY > 100;
        setScrolled((prev) => (prev === next ? prev : next));
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const filteredCourses = useMemo(() => {
    return coursesData.courses.filter((course: any) => {
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           course.overview.toLowerCase().includes(searchQuery.toLowerCase());
      
      const hasLevel = selectedLevel === "All" || (course.levels && course.levels.some((l: any) => l.name.toLowerCase().includes(selectedLevel.toLowerCase())));
      
      return matchesCategory && matchesSearch && hasLevel;
    });
  }, [selectedCategory, searchQuery, selectedLevel]);

  const scrollToCourses = () => {
    coursesSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const totalCourses = coursesData.courses.length;
  const showingCourses = filteredCourses.length;

  const roadmapPaths = [
     {
       title: "Energy Healer Path",
       subtitle: "Become a Living Channel",
       description: "Master the art of energy manipulation, chakra balancing, and distance healing.",
       courses: ["Reiki Healing", "Money Reiki", "Aura Course"],
       icon: <Zap className="w-8 h-8 text-amber-500" />,
       color: "amber",
       category: "Energy Healing"
     },
     {
       title: "Astrology Expert",
       subtitle: "Decode the Celestial Script",
       description: "Build a professional practice in Vedic Astrology and planetary sciences.",
       courses: ["Ved Astra Astrology", "Numerology", "Rudraksha Science"],
       icon: <Globe className="w-8 h-8 text-purple-500" />,
       color: "purple",
       category: "Astrology"
     },
     {
       title: "Intuitive Master",
       subtitle: "Awaken Your Inner Eye",
       description: "Develop deep intuitive skills, tarot mastery, and Akashic access.",
       courses: ["Tarot Master", "Akashic Records", "Meditation 21-Days"],
       icon: <Moon className="w-8 h-8 text-blue-500" />,
       color: "blue",
       category: "Divination"
     }
   ];

  const roadmapStyles: Record<string, { glow: string; subtitle: string; dot: string; buttonHover: string }> = {
    amber: {
      glow: "bg-amber-500/10",
      subtitle: "text-amber-400",
      dot: "bg-amber-500",
      buttonHover: "group-hover:bg-amber-500/10 group-hover:border-amber-500/20",
    },
    purple: {
      glow: "bg-purple-500/10",
      subtitle: "text-purple-400",
      dot: "bg-purple-400",
      buttonHover: "group-hover:bg-purple-500/10 group-hover:border-purple-500/20",
    },
    blue: {
      glow: "bg-blue-500/10",
      subtitle: "text-blue-400",
      dot: "bg-blue-400",
      buttonHover: "group-hover:bg-blue-500/10 group-hover:border-blue-500/20",
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .sparkle-gold {
          background: linear-gradient(
            to right,
            #e4af56 0%,
            #ffe4a3 25%,
            #e4af56 50%,
            #ffe4a3 75%,
            #e4af56 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: "";
          opacity: 0.03;
          z-index: 50;
          pointer-events: none;
          background: url("https://grainy-gradients.vercel.app/noise.svg");
        }
      `}</style>
      <div className="noise-overlay" />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative pt-64 md:pt-40 pb-32 px-6 md:px-12 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -5, 0]
            }}
            transition={{ 
              delay: 0.2, 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] uppercase bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20 backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            VedAstraa Academy of Ancient Wisdom
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[6.75rem] font-extrabold mb-8 tracking-tighter leading-[0.95] md:leading-[1.05]">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="inline-block"
            >
              Step Into Your
            </motion.span> <br />
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1.5, ease: "easeOut" }}
              className="sparkle-gold drop-shadow-[0_0_15px_rgba(228,175,86,0.4)] inline-block"
            >
              Higher Self
            </motion.span>
          </h1>
          
          <p className="text-[1.31rem] md:text-[1.64rem] lg:text-[1.96rem] text-slate-400 max-w-4xl mx-auto leading-relaxed mb-20 font-light tracking-wide">
            Embark on a transformational journey through authentic Vedic sciences, 
            energy healing, and spiritual mastery. Your evolution begins with ancient wisdom.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 relative z-10">
            <button onClick={scrollToCourses} className="group relative px-10 py-5 bg-amber-500 text-slate-950 rounded-2xl font-bold text-base overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Journey <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button onClick={scrollToCourses} className="px-10 py-5 bg-white/5 backdrop-blur-xl text-white rounded-2xl font-semibold text-base border border-white/10 hover:bg-white/10 transition-all hover:border-white/20">
              Browse All Courses
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-4 mb-20"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Scroll to explore</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-12 bg-gradient-to-b from-amber-500/60 to-transparent"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TRUST_BADGES.map((badge, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                  {badge.icon}
                </div>
                <span className="text-sm font-medium text-slate-300 text-left leading-tight">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Floating Filter Bar */}
      <div className={`sticky top-8 z-40 px-6 transition-all duration-500 ${scrolled ? "translate-y-0" : "translate-y-4"}`}>
        <motion.div 
          className="max-w-[95%] mx-auto bg-slate-900/60 backdrop-blur-md md:backdrop-blur-2xl border border-white/10 rounded-3xl p-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row gap-4 items-center"
        >
          <div className="flex flex-wrap gap-1.5 justify-center p-1 bg-slate-950/40 rounded-2xl border border-white/5 w-full lg:w-auto overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-500 relative ${
                  selectedCategory === cat.name 
                    ? "text-slate-950" 
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {selectedCategory === cat.name && (
                  <motion.div 
                    layoutId="activeCat"
                    className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                  />
                )}
                <span className="relative z-10">{cat.icon}</span>
                <span className="relative z-10">{cat.name}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:flex-grow lg:justify-end pr-2">
            <div className="flex items-center justify-between sm:justify-start gap-3 bg-slate-950/40 border border-white/5 rounded-2xl px-4 py-2.5 w-full sm:w-auto">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">Showing</span>
              <span className="text-sm font-bold text-amber-200/90 tabular-nums">{showingCourses}</span>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-600">of</span>
              <span className="text-sm font-bold text-slate-300 tabular-nums">{totalCourses}</span>
            </div>
            <div className="relative group flex-grow lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Find your path..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-slate-950/40 border border-white/5 rounded-2xl text-sm font-normal focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-slate-950/60 transition-all placeholder:text-slate-600"
              />
            </div>
            
            <div className="flex items-center gap-2 bg-slate-950/40 border border-white/5 rounded-2xl px-4 py-2.5">
              <Filter className="w-4 h-4 text-slate-500" />
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-transparent border-none text-sm font-semibold focus:ring-0 cursor-pointer pr-4 appearance-none"
              >
                {LEVELS.map(lvl => (
                  <option key={lvl} value={lvl} className="bg-slate-900">{lvl} Level</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Course Grid - Organic & Premium */}
      <section ref={coursesSectionRef} className="max-w-[95%] mx-auto px-6 md:px-12 py-24 md:py-32 z-10 relative scroll-mt-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black tracking-[0.25em] uppercase bg-white/5 text-slate-300 rounded-full border border-white/10">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Browse Courses
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-6">
              Choose Your <span className="sparkle-gold">Path</span>
            </h2>
            <p className="text-lg text-slate-400 mt-4 max-w-2xl">
              Filter by category, search your interest, and open any course to see the full curriculum.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-5 py-3 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-sm">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-slate-500">Results</p>
              <p className="text-2xl font-black text-amber-200/90 tabular-nums">{showingCourses}</p>
            </div>
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course: any, index: number) => {
                // Organic Grid Spanning Logic (12-column base)
                // Cycle of 9: Full, Half, Half, Third, Third, Third, Half, Half, Full
                let colSpan = "xl:col-span-4 md:col-span-1"; // Default 1/3 (4/12) on XL, 1/2 on MD
                const cycle = index % 9;
                
                if (course.featured || cycle === 0 || cycle === 8) {
                  colSpan = "xl:col-span-12 md:col-span-2"; // Full width
                } else if (cycle === 1 || cycle === 2 || cycle === 6 || cycle === 7) {
                  colSpan = "xl:col-span-6 md:col-span-1"; // Half width
                } else {
                  colSpan = "xl:col-span-4 md:col-span-1"; // 1/3 width
                }
                
                const isFullWidth = colSpan.includes("xl:col-span-12");

                return (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    index={index} 
                    isFeatured={isFullWidth}
                    colSpan={colSpan}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-32 bg-slate-900/20 border border-dashed border-white/10 rounded-[3rem] backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-800/50 mb-8 border border-white/5">
              <Search className="w-10 h-10 text-slate-600" />
            </div>
            <h3 className="text-3xl font-bold mb-4">No paths found</h3>
            <p className="text-slate-500 text-lg">Your spiritual search returned no results. Try adjusting your filters.</p>
            <button 
              onClick={() => { setSelectedCategory("All"); setSelectedLevel("All"); setSearchQuery(""); }}
              className="mt-10 px-8 py-3 bg-white/5 hover:bg-white/10 rounded-full text-amber-500 font-bold border border-white/10 transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      {/* Learning Roadmap */}
      <section className="max-w-[95%] mx-auto px-6 md:px-12 py-32 border-t border-white/5 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-black tracking-[0.3em] uppercase text-amber-500 mb-4 block"
          >
            Curated Journeys
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Your Roadmap to <span className="sparkle-gold">Mastery</span></h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Follow our structured learning paths designed to take you from seeker to professional practitioner.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent -translate-y-1/2 hidden xl:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {roadmapPaths.map((path, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-10 rounded-[3.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl hover:border-white/10 transition-all overflow-hidden shadow-2xl"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 ${roadmapStyles[path.color].glow} blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`} />
                
                <div className="w-20 h-20 rounded-3xl bg-slate-950 flex items-center justify-center mb-10 border border-white/10 shadow-2xl group-hover:border-amber-500/20 transition-colors">
                  {path.icon}
                </div>
                
                <h3 className="text-3xl font-bold mb-3 tracking-tight">
                  {path.title}
                </h3>
                <p className={`text-sm font-black ${roadmapStyles[path.color].subtitle} mb-8 uppercase tracking-[0.3em]`}>{path.subtitle}</p>
                <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">{path.description}</p>
                
                <div className="space-y-5 mb-12">
                  {path.courses.map((c, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm text-slate-300 font-semibold tracking-wide">
                      <div className={`w-2 h-2 rounded-full ${roadmapStyles[path.color].dot} shadow-[0_0_12px_rgba(245,158,11,0.4)]`} />
                      {c}
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => {
                    setSelectedCategory(path.category);
                    setSelectedLevel("All");
                    setSearchQuery("");
                    scrollToCourses();
                  }}
                  className={`flex items-center justify-between w-full p-8 rounded-[2rem] bg-white/5 border border-white/5 transition-all group/btn ${roadmapStyles[path.color].buttonHover}`}
                >
                  <span className="font-bold text-xs uppercase tracking-[0.2em]">Start Roadmap</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats & Testimonials */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="max-w-[95%] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
                Trusted by Seekers <br />
                <span className="sparkle-gold">Worldwide</span>
              </h2>
              <p className="text-xl text-slate-400 mb-16 leading-relaxed font-normal">
                Our graduates aren't just students—they are professional practitioners, 
                healers, and conscious leaders making an impact across the globe.
              </p>
              
              <div className="grid grid-cols-2 gap-10">
                {[
                  { label: "Active Students", value: "5000+" },
                  { label: "Success Rate", value: "98%" },
                  { label: "Certified Courses", value: "15+" },
                  { label: "Master Teachers", value: "8+" }
                ].map((stat, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <p className="text-4xl font-black text-amber-500 mb-2">{stat.value}</p>
                    <p className="text-base font-semibold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full" />
              <div className="space-y-8 relative z-10">
                {TESTIMONIALS.map((t, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="p-10 rounded-[3rem] bg-slate-900/60 border border-white/10"
                  >
                    <Quote className="w-12 h-12 text-amber-500/20 mb-6" />
                    <p className="text-xl text-slate-200 italic mb-10 font-normal leading-relaxed">"{t.text}"</p>
                    <div className="flex items-center gap-6">
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        loading="lazy"
                        className="w-20 h-24 rounded-full border-2 border-amber-500/20 object-cover" 
                      />
                      <div>
                        <h4 className="text-xl font-black text-slate-100 mb-1">{t.name}</h4>
                        <p className="text-base font-semibold text-amber-500 uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Final CTA Banner */}
      <section className="px-6 md:px-12 py-40 z-10 relative">
        <div className="max-w-6xl mx-auto rounded-[4rem] overflow-hidden relative p-16 md:p-32 text-center group">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-amber-900/40" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0 bg-[url('/backgrounds/services-clouds.svg')] bg-cover opacity-20 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]" />
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-indigo-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-white"
            >
              Awaken Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 animate-shimmer">Divine Potential</span>
            </motion.h2>
            <p className="text-xl md:text-2xl text-indigo-100/80 max-w-4xl mx-auto mb-16 leading-relaxed font-normal">
              Join a global community of seekers and masters. Your transformation is not just a goal—it's your destiny. 
              Are you ready to begin?
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button 
                onClick={scrollToCourses}
                className="px-16 py-6 bg-amber-500 text-slate-950 rounded-2xl font-bold text-xl hover:bg-amber-400 transition-all shadow-[0_20px_40px_rgba(245,158,11,0.3)] hover:scale-105 active:scale-95 group/cta"
              >
                <span className="flex items-center gap-3">
                  Enroll Now <ChevronRight className="w-6 h-6 group-hover/cta:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-16 py-6 bg-white/10 backdrop-blur-xl text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all border border-white/20">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const CourseCard = React.memo(({ course, index, isFeatured, colSpan }: { course: Course; index: number; isFeatured?: boolean; colSpan: string }) => {
  const getIcon = (category: string) => {
    switch (category) {
      case "Astrology": return <Globe className="w-10 h-10" />;
      case "Energy Healing": return <Zap className="w-10 h-10" />;
      case "Divination": return <Moon className="w-10 h-10" />;
      case "Meditation": return <Sun className="w-10 h-10" />;
      case "Vastu": return <Layout className="w-10 h-10" />;
      case "Spiritual": return <Sparkles className="w-10 h-10" />;
      default: return <BookOpen className="w-10 h-10" />;
    }
  };

  const getGradient = (category: string) => {
    switch (category) {
      case "Astrology": return "from-purple-500/10 to-indigo-500/5";
      case "Energy Healing": return "from-amber-500/10 to-orange-500/5";
      case "Divination": return "from-blue-500/10 to-indigo-500/5";
      default: return "from-slate-500/10 to-slate-900/5";
    }
  };

  return (
    <Link 
      href={`/courses/${course.id}`}
      className={`${colSpan} block`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.02, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6, scale: 1.01 }}
        className={`group relative h-full bg-slate-900/40 border border-white/5 rounded-[3rem] overflow-hidden flex flex-col hover:border-amber-500/20 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 after:absolute after:left-0 after:right-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-amber-500/40 after:to-transparent after:opacity-0 group-hover:after:opacity-100 after:transition-opacity ${isFeatured ? "md:flex-row" : ""}`}
        style={{ willChange: "transform, opacity" }}
      >
        {/* Background Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(course.category)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Visual Zone */}
        <div className={`relative flex items-center justify-center shrink-0 ${isFeatured ? "p-2 md:p-6 md:w-[50%]" : "p-10 h-64"}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          {course.image ? (
            <div className={`relative z-10 w-full ${isFeatured ? "aspect-square max-w-[550px]" : "h-full"} overflow-hidden rounded-[3.5rem] border border-white/15 shadow-2xl group-hover:scale-[1.02] transition-all duration-700`}>
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
          ) : (
            <motion.div 
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
              className="relative z-10 w-24 h-24 rounded-[2.5rem] bg-slate-950 flex items-center justify-center text-amber-500 border border-white/10 shadow-2xl group-hover:scale-110 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
              <div className="relative z-10 group-hover:text-slate-950 transition-colors duration-500">
                {getIcon(course.category)}
              </div>
            </motion.div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-8 left-8 z-20">
            <span className="px-4 py-1.5 bg-slate-950/80 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 rounded-full border border-white/5 shadow-sm">
              {course.category}
            </span>
          </div>

          {/* Level/Trending Badge */}
          <div className="absolute top-8 right-8 z-20 flex flex-col gap-2 items-end">
            {course.trending && (
              <span className="flex items-center gap-1.5 px-3 py-1 bg-amber-500 text-slate-950 text-[9px] font-black uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                <TrendingUp className="w-2.5 h-2.5" /> Trending
              </span>
            )}
            <span className="px-3 py-1 bg-white/5 backdrop-blur-md text-[9px] font-black uppercase tracking-widest text-amber-200/70 rounded-full border border-white/5">
              {course.levels?.[0]?.name.split(" - ")[0] || "Mastery"}
            </span>
          </div>
        </div>
        
        {/* Content Zone */}
        <div className="relative z-10 p-10 md:p-14 flex flex-col flex-grow">
          <div className="mb-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-amber-100 transition-colors leading-[1.15] tracking-tight">
              {course.title}
            </h3>
            <p className="text-lg md:text-xl text-slate-400 line-clamp-3 mb-10 leading-relaxed font-light group-hover:text-slate-300 transition-colors">
              {course.overview}
            </p>
            
            {/* Outcome Line */}
            <div className="flex items-start gap-5 mb-12 p-7 rounded-[2.5rem] bg-slate-950/50 border border-white/5 group-hover:border-amber-500/10 group-hover:bg-amber-500/[0.03] transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/20 group-hover:bg-amber-500 transition-colors" />
              <Sparkles className="w-6 h-6 text-amber-500/60 shrink-0 mt-1" />
              <p className="text-base md:text-lg font-medium text-slate-300 group-hover:text-amber-100 italic leading-relaxed">
                "{course.levels?.[course.levels.length-1]?.outcome || course.outcome || "Professional Mastery"}"
              </p>
            </div>
          </div>

          {/* Footer Row */}
          <div className="flex flex-col sm:flex-row items-center gap-10 mt-8 pt-8 border-t border-white/5">
            <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-500/30" />
                <span>{course.duration || course.levels?.[0]?.duration || "Self-paced"}</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-amber-500/30" />
                <span>Certificate</span>
              </div>
            </div>

            <div className="w-full sm:w-auto ml-auto px-10 py-5 bg-white/5 backdrop-blur-md text-white rounded-[2rem] font-bold text-sm uppercase tracking-widest border border-white/10 group-hover:border-amber-500/50 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-700 flex items-center justify-center gap-4 shadow-xl group-hover:scale-105 active:scale-95 group/btn overflow-hidden relative">
              <span className="relative z-10">Explore Path</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
});

CourseCard.displayName = "CourseCard";
