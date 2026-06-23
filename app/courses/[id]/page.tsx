"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Globe, Zap, Moon, Sun, Layout, Sparkles, BookOpen, Clock, Award, 
  CheckCircle2, Star, TrendingUp, Users, ShieldCheck, Trophy, 
  ChevronRight, ArrowRight, X, Play, Info, BarChart3, 
  MessageCircle, Share2, Heart, Calendar, ArrowLeft,
  ChevronDown, GraduationCap, Lightbulb, Compass,
  Sunrise, Sunset, MoonStar, Gift, FileCheck, Target,
  Users2, Gem, Rocket, Library, Scroll
} from "lucide-react";
import { getCourseById, Course, Level } from "../../../lib/courseData";
import CourseEnrollmentFlow from "../../components/courses/CourseEnrollmentFlow";

// Sub-components
const QuoteIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C3.46468 8 3.01697 8.44772 3.01697 9V12C3.01697 12.5523 2.56925 13 2.01697 13H0.0169678V5H10.017V15C10.017 18.3137 7.33065 21 4.01697 21H2.01697Z" />
  </svg>
);

// Utility for Category Icons
const getCategoryIcon = (category: string, className: string = "w-6 h-6") => {
  switch (category) {
    case "Astrology": return <Globe className={className} />;
    case "Energy Healing": return <Zap className={className} />;
    case "Divination": return <Moon className={className} />;
    case "Meditation": return <Sun className={className} />;
    case "Vastu": return <Layout className={className} />;
    case "Spiritual": return <Sparkles className={className} />;
    default: return <BookOpen className={className} />;
  }
};

// Utility for Category Gradients
const getCategoryGradient = (category: string) => {
  switch (category) {
    case "Astrology": return "from-purple-600 via-indigo-700 to-blue-900";
    case "Energy Healing": return "from-amber-500 via-orange-600 to-red-800";
    case "Divination": return "from-blue-600 via-indigo-700 to-purple-900";
    case "Meditation": return "from-cyan-500 via-blue-600 to-indigo-800";
    case "Vastu": return "from-emerald-500 via-teal-600 to-blue-800";
    default: return "from-indigo-600 via-purple-700 to-slate-900";
  }
};

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [course, setCourse] = useState<Course | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (params && params.id) {
      const courseId = Array.isArray(params.id) ? params.id[0] : params.id;
      const foundCourse = getCourseById(courseId);
      if (foundCourse) {
        setCourse(foundCourse);
      } else {
        router.push("/courses");
      }
    }
  }, [params, router]);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!course ? (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center gap-6 z-[200]"
          >
            <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(245,158,11,0.4)]" />
            <p className="text-amber-500/60 font-black uppercase tracking-[0.3em] text-xs animate-pulse">Initializing Sacred Path...</p>
            <button 
              onClick={() => router.push("/courses")}
              className="mt-4 px-6 py-2 bg-white/5 hover:bg-white/10 text-slate-400 text-xs rounded-full border border-white/10 transition-all"
            >
              Return to Courses
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Scroll Progress Bar */}
            <motion.div 
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-purple-500 to-indigo-500 z-[100] origin-left"
              style={{ scaleX: scaleProgress }}
            />

            {/* Hero Section - Cinematic & Immersive */}
            <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-64 md:pt-32 pb-24 px-6 overflow-hidden">
              {/* Animated Background Layers */}
              <div className={`absolute inset-0 bg-gradient-to-b ${getCategoryGradient(course.category)} opacity-20`} />
              <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
              
              {/* Floating Decorative Elements */}
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full"
              />
              <motion.div 
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-amber-500/10 blur-[150px] rounded-full"
              />

              {/* Added Floating Sacred Geometries */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                  opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[10%] left-[15%] w-64 h-64 border border-white/10 rounded-full flex items-center justify-center opacity-10 pointer-events-none"
              >
                <div className="w-48 h-48 border border-white/5 rounded-full" />
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45" />
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45" />
              </motion.div>

              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.2, 1],
                  opacity: [0.03, 0.08, 0.03]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[15%] right-[10%] w-80 h-80 border border-white/5 rounded-full flex items-center justify-center opacity-5 pointer-events-none"
              >
                <div className="w-64 h-64 border border-white/5 rounded-full" />
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              </motion.div>
              
              {/* Particle Overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>

        {/* Hero Image / Icon Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
          {course.image ? (
            <div className="relative w-full h-full max-w-[1200px] max-h-[800px] blur-[60px]">
              <img src={course.image} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className={`w-[60rem] h-[60rem] bg-gradient-to-br ${getCategoryGradient(course.category)} blur-[150px] opacity-40 rounded-full`} />
          )}
        </div>

        <div className="relative z-10 max-w-7xl w-full text-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="inline-flex items-center gap-3 px-6 py-2.5 mb-10 text-xs font-black tracking-[0.4em] uppercase bg-white/5 backdrop-blur-xl text-amber-500 rounded-full border border-white/10 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  {course.category} Academy of Wisdom
                </motion.div>
                
                <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl lg:text-[7rem] font-black leading-[0.9] tracking-tighter mb-10"
          >
            <span className="block text-slate-300 opacity-80 mb-2 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight">Master the Art of</span>
            <span className="sparkle-gold drop-shadow-[0_0_25px_rgba(228,175,86,0.4)]">{course.title}</span>
            {course.alias && course.alias.length > 0 && (
              <span className="block mt-4 text-xl md:text-2xl text-amber-500/40 font-bold uppercase tracking-widest italic">
                Also known as {course.alias.join(", ")}
              </span>
            )}
          </motion.h1>

          {course.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl mx-auto mb-16 aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] group"
            >
              <img src={course.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 backdrop-blur-xl border border-amber-500/30 flex items-center justify-center text-amber-500">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-sm font-black uppercase tracking-widest text-white/80">Certified Spiritual Path</span>
              </div>
            </motion.div>
          )}

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-16 font-light"
          >
            {course.overview}
          </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  className="flex flex-wrap justify-center gap-6 md:gap-10"
                >
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-all duration-500">
                      <Clock className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Duration</span>
                    <span className="text-sm font-bold text-slate-200">{course.duration || (course.levels?.[0]?.duration ? course.levels[0].duration + "+" : "Self-paced")}</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-all duration-500">
                      <Award className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Certification</span>
                    <span className="text-sm font-bold text-slate-200 truncate max-w-[150px]">{course.certification ? "Professional" : "Global Mastery"}</span>
                  </div>

                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-all duration-500">
                      <Users className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Mentorship</span>
                    <span className="text-sm font-bold text-slate-200">1-on-1 Access</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="mt-20"
                >
                  <button 
                    onClick={() => setIsEnrollmentOpen(true)}
                    className="group relative px-12 py-6 bg-amber-500 text-slate-950 rounded-2xl font-black text-lg uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(245,158,11,0.3)]"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Enroll in Path <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>
                </motion.div>
              </div>

              {/* Floating Iconography */}
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] right-[10%] opacity-20 hidden lg:block"
              >
                {getCategoryIcon(course.category, "w-24 h-24 text-amber-500/40")}
              </motion.div>
              
              <motion.div 
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[20%] left-[10%] opacity-20 hidden lg:block"
              >
                <GraduationCap className="w-20 h-20 text-purple-500/40" />
              </motion.div>
            </section>

            {/* Luxury Content Sections */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-48">
              
              {/* Overview Section - Glassmorphism Card */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-amber-500/20 blur-3xl opacity-30 rounded-[4rem]" />
                  <div className="relative p-10 md:p-16 rounded-[4rem] bg-slate-900/40 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-500 to-purple-600 opacity-50" />
                    <QuoteIcon className="w-16 h-16 text-amber-500/10 mb-8" />
                    <h2 className="text-sm font-black uppercase tracking-[0.5em] text-slate-500 mb-10 flex items-center gap-4">
                      <Info className="w-5 h-5 text-amber-500/60" /> The Sacred Journey
                    </h2>
                    <p className="text-2xl md:text-3xl text-slate-200 leading-[1.4] font-light tracking-wide mb-12 italic">
                      {course.overview}
                    </p>
                    
                    {course.positioning && (
                      <div className="p-8 rounded-3xl bg-amber-500/[0.03] border border-amber-500/10 text-amber-200/90 text-xl font-medium relative">
                        <span className="absolute -top-3 left-6 px-4 py-1 bg-slate-950 text-[10px] font-black uppercase tracking-widest text-amber-500/60 rounded-full border border-amber-500/20">The Promise</span>
                        "{course.positioning}"
                      </div>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-12"
                >
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Why This <span className="sparkle-gold">Path?</span></h3>
                    <p className="text-xl text-slate-400 leading-relaxed font-light">
                      This isn't just a course; it's a structural evolution of your consciousness. We've distilled ancient wisdom into a modern, actionable framework for mastery.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {(course.features || [
                      "Life-time Sacred Access",
                      "Professional Global Certification",
                      "Private Practitioner Community",
                      "1-on-1 Mentorship Support"
                    ]).slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-amber-500/20 transition-all duration-500 group">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="text-base font-bold text-slate-300 group-hover:text-white transition-colors">{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Who Is This For Section */}
              <section className="relative">
                <div className="text-center mb-20">
                  <motion.span className="text-xs font-black uppercase tracking-[0.5em] text-amber-500 mb-6 block">Target Audience</motion.span>
                  <motion.h2 className="text-4xl md:text-6xl font-black tracking-tight">Who Is This <span className="sparkle-gold">For?</span></motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {[
                    {
                      title: "Seekers & Beginners",
                      desc: "Those starting their spiritual journey and looking for authentic, foundational knowledge.",
                      icon: Compass
                    },
                    {
                      title: "Aspiring Professionals",
                      desc: "Individuals wanting to turn their passion for " + course.category + " into a professional career.",
                      icon: GraduationCap
                    },
                    {
                      title: "Established Healers",
                      desc: "Practitioners looking to deepen their expertise with advanced, lineage-based techniques.",
                      icon: Sparkles
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -10 }}
                      className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-all text-center group"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mx-auto mb-8 group-hover:scale-110 transition-transform">
                        <item.icon className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                      <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* VedAstraa Advantage Section */}
              <section className="relative p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.03] border border-white/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div>
                    <motion.span className="text-xs font-black uppercase tracking-[0.5em] text-indigo-400 mb-6 block">The Advantage</motion.span>
                    <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight">The <span className="text-indigo-400">VedAstraa</span> Standard</h2>
                    <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
                      When you choose VedAstraa, you aren't just buying a course. You are joining a global lineage of masters dedicated to preserving and sharing authentic spiritual sciences.
                    </p>
                    <div className="space-y-6">
                      {[
                        { title: "Lineage Wisdom", desc: "Access teachings passed down through authentic guru-shishya traditions.", icon: Scroll },
                        { title: "Practical Mastery", desc: "Beyond theory—gain actionable skills for real-world transformation.", icon: Target },
                        { title: "Global Network", desc: "Connect with a community of practitioners across 50+ countries.", icon: Globe }
                      ].map((adv, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                            <adv.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="text-lg font-bold text-white mb-1">{adv.title}</h5>
                            <p className="text-slate-500 text-sm">{adv.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group">
                    <img 
                      src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&q=80" 
                      alt="Spiritual Mastery" 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10 p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                      <p className="text-lg text-white font-medium italic">"VedAstraa didn't just teach me astrology; it gave me a new lens to view my entire existence."</p>
                      <div className="mt-6 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/40" />
                        <div>
                          <p className="text-sm font-bold text-white">Elena R.</p>
                          <p className="text-[10px] uppercase tracking-widest text-indigo-400">Master Alumnus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Curriculum Section - Premium Accordion */}
              <section id="curriculum">
                <div className="text-center mb-24">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs font-black uppercase tracking-[0.5em] text-amber-500 mb-6 block"
                  >
                    Curated Curriculum
                  </motion.span>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-7xl font-black tracking-tight"
                  >
                    The Blueprint of <span className="sparkle-gold">Mastery</span>
                  </motion.h2>
                </div>

                <div className="space-y-6 max-w-5xl mx-auto">
                  {course.levels ? (
                    course.levels.map((level, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${activeAccordion === idx ? "bg-white/[0.03] border-amber-500/30 shadow-2xl" : "bg-white/[0.01] border-white/5 hover:border-white/10"}`}
                      >
                        <button 
                          onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                          className="w-full p-8 md:p-10 flex items-center justify-between text-left"
                        >
                          <div className="flex items-center gap-8">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black transition-all duration-500 ${activeAccordion === idx ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-slate-500 border border-white/5"}`}>
                              0{idx + 1}
                            </div>
                            <div>
                              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{level.name}</h4>
                              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {level.duration || "Phase " + (idx + 1)}</span>
                                {level.modules && <span className="flex items-center gap-2"><BookOpen className="w-3 h-3" /> {level.modules.length} Modules</span>}
                              </div>
                            </div>
                          </div>
                          <motion.div 
                            animate={{ rotate: activeAccordion === idx ? 180 : 0 }}
                            className={`p-3 rounded-full ${activeAccordion === idx ? "bg-amber-500/20 text-amber-500" : "bg-white/5 text-slate-500"}`}
                          >
                            <ChevronDown className="w-6 h-6" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {activeAccordion === idx && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <div className="px-8 md:px-24 pb-12 pt-4">
                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
                                
                                {level.outcome && (
                                  <div className="mb-12 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 flex items-start gap-6">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                                      <Trophy className="w-5 h-5" />
                                    </div>
                                    <div>
                                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/60 block mb-1">Phase Outcome</span>
                                      <p className="text-lg text-emerald-200/80 italic font-medium">"{level.outcome}"</p>
                                    </div>
                                  </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                  {level.modules?.map((module, midx) => (
                                    <motion.div 
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: midx * 0.05 }}
                                      key={midx} 
                                      className="flex items-start gap-5 group/item cursor-default"
                                    >
                                      <div className="mt-2.5 w-2 h-2 rounded-full bg-amber-500/30 group-hover/item:bg-amber-500 group-hover/item:scale-150 transition-all duration-300" />
                                      <p className="text-lg text-slate-400 font-light group-hover/item:text-slate-100 transition-colors leading-relaxed">
                                        {module}
                                      </p>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))
                  ) : course.phases ? (
                    course.phases.map((phase, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-10 rounded-[3rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-amber-500/20 transition-all group"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
                          <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-amber-500 font-black border border-white/5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500 shadow-xl">
                              {idx + 1}
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-white mb-1">{phase.name}</h4>
                              <span className="text-xs font-black uppercase tracking-widest text-amber-500/60">{phase.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {phase.focus.map((f, fi) => (
                            <span key={fi} className="px-5 py-2.5 bg-white/5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-100 group-hover:bg-amber-500/10 transition-all border border-transparent group-hover:border-amber-500/20">
                              {f}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))
                  ) : course.modules ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {course.modules.map((module, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-amber-500/20 hover:bg-white/[0.03] transition-all group"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-amber-500/5 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform border border-amber-500/10">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">{module}</span>
                        </motion.div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </section>

              {/* Daily Structure Section (for Meditation) */}
              {course.dailyStructure && (
                <section className="relative">
                  <div className="text-center mb-20">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-xs font-black uppercase tracking-[0.5em] text-cyan-500 mb-6 block"
                    >
                      Sacred Rhythm
                    </motion.span>
                    <motion.h2 className="text-4xl md:text-6xl font-black tracking-tight">
                      Daily <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Practice</span> Structure
                    </motion.h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                      { label: "Morning", icon: Sunrise, time: course.dailyStructure.morning, color: "text-orange-400", bg: "bg-orange-500/5" },
                      { label: "Evening", icon: Sunset, time: course.dailyStructure.evening, color: "text-amber-400", bg: "bg-amber-500/5" },
                      { label: "Night", icon: MoonStar, time: course.dailyStructure.night, color: "text-blue-400", bg: "bg-blue-500/5" }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -10 }}
                        className={`p-10 rounded-[3.5rem] ${item.bg} border border-white/5 backdrop-blur-xl relative overflow-hidden group`}
                      >
                        <div className={`w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center ${item.color} mb-8 border border-white/10 group-hover:scale-110 transition-transform`}>
                          <item.icon className="w-8 h-8" />
                        </div>
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-2">{item.label} Activation</h4>
                        <p className="text-2xl font-black text-white">{item.time}</p>
                        <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20 ${item.color}`} />
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* Bonus Modules Section */}
              {course.bonusModules && (
                <section className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-amber-500/5 blur-[120px] rounded-full opacity-50" />
                  <div className="relative p-12 md:p-24 rounded-[4rem] bg-white/[0.01] border border-white/10 backdrop-blur-3xl overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
                      <div>
                        <motion.div className="inline-flex items-center gap-3 px-6 py-2 bg-amber-500/10 text-amber-500 rounded-full border border-amber-500/20 text-[10px] font-black uppercase tracking-widest mb-6">
                          <Gift className="w-4 h-4" /> Exclusive Add-ons
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight">Bonus <span className="sparkle-gold">Masterclasses</span></h2>
                      </div>
                      <p className="text-xl text-slate-400 max-w-md font-light leading-relaxed">
                        In addition to the core curriculum, you'll receive specialized modules to expand your professional practice.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {course.bonusModules.map((bonus, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all flex items-start gap-6 group"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 group-hover:rotate-12 transition-transform">
                            <Sparkles className="w-5 h-5" />
                          </div>
                          <span className="text-lg font-bold text-slate-200 group-hover:text-amber-400 transition-colors">{bonus}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Course Outcome Summary */}
              {course.outcome && (
                <section className="relative overflow-hidden py-20">
                  <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="w-20 h-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mx-auto mb-10 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                    >
                      <Target className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-500 mb-8">Ultimate Transformation</h3>
                    <p className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                      "{course.outcome}"
                    </p>
                  </div>
                </section>
              )}

              {/* Global Recognition Section */}
              <section className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05),transparent_70%)]" />
                <div className="max-w-5xl mx-auto text-center relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-12"
                  >
                    <Trophy className="w-6 h-6 text-amber-500" />
                    <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-300">Globally Recognized Excellence</span>
                  </motion.div>
                  <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tight text-white">Your Path to <span className="sparkle-gold">Certified Mastery</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { label: "50+ Countries", sub: "Alumni Network", icon: Globe },
                      { label: "10k+ Students", sub: "Successfully Trained", icon: Users2 },
                      { label: "ISO Certified", sub: "Quality Standards", icon: ShieldCheck },
                      { label: "Life-time", sub: "Valid Certificate", icon: FileCheck }
                    ].map((stat, i) => (
                      <div key={i} className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-amber-500/20 transition-all">
                        <stat.icon className="w-8 h-8 text-amber-500/40 mx-auto mb-6" />
                        <h4 className="text-2xl font-black text-white mb-1">{stat.label}</h4>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-500">{stat.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Global Mastery Banner - CTA */}
              <section className="relative p-12 md:p-32 rounded-[5rem] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-amber-900/40 opacity-40" />
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl" />
                
                {/* Animated Glows */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-500/20 blur-[120px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full group-hover:scale-150 transition-transform duration-1000" />

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-24 h-24 rounded-[2rem] bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mx-auto mb-12 shadow-[0_0_50px_rgba(245,158,11,0.2)]"
                  >
                    <ShieldCheck className="w-12 h-12" />
                  </motion.div>
                  
                  <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tight text-white">
                    Ready to Awaken <br />
                    <span className="sparkle-gold">Your Higher Self?</span>
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-slate-300 mb-16 font-light leading-relaxed">
                    Enroll today and receive lifetime access to the curriculum, our private practitioner community, 
                    and {course.certification ? <span className="text-amber-400 font-bold underline decoration-amber-500/30 underline-offset-8">{course.certification}</span> : "global certification"} recognized by VedAstraa alumni worldwide.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button 
                      onClick={() => setIsEnrollmentOpen(true)}
                      className="px-16 py-8 bg-amber-500 text-slate-950 rounded-[2.5rem] font-black text-xl uppercase tracking-widest hover:bg-amber-400 transition-all shadow-[0_20px_60px_rgba(245,158,11,0.4)] hover:scale-105 active:scale-95 group/cta"
                    >
                      <span className="flex items-center gap-4">
                        Enroll in Full Path <ArrowRight className="w-7 h-7 group-hover/cta:translate-x-2 transition-transform duration-500" />
                      </span>
                    </button>
                    <button className="px-16 py-8 bg-white/5 backdrop-blur-xl text-white rounded-[2.5rem] font-black text-xl uppercase tracking-widest hover:bg-white/10 transition-all border border-white/20">
                      Book Consultation
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* Attention-Grabbing Sticky Enroll Bar */}
            <motion.div 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] w-[95%] max-w-5xl"
            >
              <div className="relative p-1 bg-gradient-to-r from-amber-500/50 via-purple-500/50 to-indigo-500/50 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
                <div className="bg-slate-900/90 backdrop-blur-3xl rounded-[2.9rem] px-8 md:px-12 py-5 flex items-center justify-between gap-10">
                  <div className="hidden md:flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/60 mb-1">Currently Viewing</span>
                    <span className="text-xl font-black text-white truncate max-w-[300px] tracking-tight">{course.title}</span>
                  </div>
                  
                  <div className="flex-grow md:flex-grow-0 flex items-center gap-12">
                    <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-amber-500/30" />
                        <span>{course.duration || "Self-paced"}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-amber-500/30" />
                        <span>Certificate</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setIsEnrollmentOpen(true)}
                      className="w-full md:w-auto px-12 py-5 bg-amber-500 text-slate-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-400 transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:scale-105 active:scale-95 group/sticky overflow-hidden relative"
                    >
                      <span className="relative z-10">Enroll Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/sticky:animate-shimmer" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Course Enrollment Flow Modal */}
            <CourseEnrollmentFlow 
              course={course} 
              isOpen={isEnrollmentOpen} 
              onClose={() => setIsEnrollmentOpen(false)} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
