"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Lock, 
  CreditCard,
  CheckCircle2, 
  Sparkles,
  Award,
  Clock,
  User,
  Mail,
  Phone,
  Ticket,
  ArrowLeft,
  Loader2
} from "lucide-react";
import { Course } from "../../../lib/courseData";

interface CourseEnrollmentFlowProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

type Step = "details" | "payment" | "confirmation";

export default function CourseEnrollmentFlow({ course, isOpen, onClose }: CourseEnrollmentFlowProps) {
  const [currentStep, setCurrentStep] = useState<Step>("details");
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [coupon, setCoupon] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    try {
      setIsProcessing(true);

      const res = await loadRazorpay();

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        setIsProcessing(false);
        return;
      }

      // Create order on the server
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: course.price,
          currency: course.currency || "INR",
          receipt: `course_${course.id}_${Date.now()}`,
        }),
      });

      const order = await response.json();

      if (!response.ok) {
        throw new Error(order.error || "Failed to create order");
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "VedAstraa Academy",
        description: `Enrollment for ${course.title}`,
        order_id: order.id,
        handler: function (response: any) {
          console.log("Payment Successful:", response);
          setCurrentStep("confirmation");
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#6366f1", // indigo-500
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error: any) {
      console.error("Payment Error:", error);
      alert(error.message || "Something went wrong with the payment");
    } finally {
      setIsProcessing(false);
    }
  };

  const formatPrice = (price: number = 0, currency: string = "INR") => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const steps = [
    { id: "details", label: "Details", icon: User },
    { id: "payment", label: "Payment", icon: CreditCard },
    { id: "confirmation", label: "Access", icon: CheckCircle2 }
  ];

  const handleNext = () => {
    if (currentStep === "details") setCurrentStep("payment");
    else if (currentStep === "payment") handlePayment();
  };

  const handleBack = () => {
    if (currentStep === "payment") setCurrentStep("details");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/80 backdrop-blur-xl p-4 md:p-8"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-6xl h-full max-h-[850px] bg-slate-900/40 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-50 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side: Course Summary Card */}
          <div className="w-full md:w-[40%] bg-gradient-to-br from-indigo-950/50 via-slate-950 to-purple-950/50 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-purple-600" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest mb-8">
                <Sparkles className="w-3 h-3" />
                Enrollment Open
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
                {course.title}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Duration</p>
                    <p className="text-sm font-bold text-slate-200">{course.duration || "Self-paced Mastery"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Certification</p>
                    <p className="text-sm font-bold text-slate-200">{course.certification ? "Professional" : "Global Mastery"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Access</p>
                    <p className="text-sm font-bold text-slate-200">Instant Sacred Access</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-xs text-slate-400 mb-2 font-bold uppercase tracking-widest relative z-10">Investment for Growth</p>
                <div className="flex items-end gap-3 relative z-10">
                  <span className="text-4xl font-black text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">{formatPrice(course.discountPrice || course.price, course.currency)}</span>
                  {course.discountPrice && (
                    <span className="text-lg text-slate-500 line-through mb-1">{formatPrice(course.price, course.currency)}</span>
                  )}
                </div>
                {course.discountPrice && (
                  <div className="mt-2 text-[10px] font-black text-emerald-400 uppercase tracking-widest relative z-10 flex items-center gap-2">
                    <Zap className="w-3 h-3" />
                    You save {formatPrice(course.price! - course.discountPrice, course.currency)} ({(Math.round(((course.price! - course.discountPrice) / course.price!) * 100))}% OFF)
                  </div>
                )}
              </div>

              {/* Certification Badges */}
              <div className="mt-8 flex flex-wrap gap-4 opacity-60">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Verified Path</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>100% Secure & Encrypted Enrollment</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form & Payment */}
          <div className="w-full md:w-[60%] bg-slate-900/60 p-8 md:p-12 overflow-y-auto">
            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-12 max-w-md mx-auto">
              {steps.map((step, idx) => (
                <div key={step.id} className="flex flex-col items-center gap-2 relative">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      currentStep === step.id 
                        ? "bg-amber-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)]" 
                        : steps.findIndex(s => s.id === currentStep) > idx 
                          ? "bg-emerald-500 text-white" 
                          : "bg-slate-800 text-slate-500"
                    }`}
                  >
                    {steps.findIndex(s => s.id === currentStep) > idx ? <CheckCircle2 className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${currentStep === step.id ? "text-amber-500" : "text-slate-500"}`}>
                    {step.label}
                  </span>
                  {idx < steps.length - 1 && (
                    <div className="absolute left-[2.5rem] top-5 w-[calc(100%-1rem)] h-px bg-slate-800" />
                  )}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {currentStep === "details" && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-white mb-2">Complete Your Profile</h3>
                    <p className="text-slate-400 text-sm">Enter your details to initialize your sacred path.</p>
                  </div>

                  <div className="space-y-4 max-w-md mx-auto">
                    <div className="group">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Full Name</label>
                      <div className="relative group/input">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within/input:text-amber-500 transition-colors" />
                        <input 
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] group-hover/input:border-white/10"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        <div className="absolute inset-0 rounded-2xl bg-amber-500/5 opacity-0 group-focus-within/input:opacity-100 blur-xl -z-10 transition-opacity" />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Email Address</label>
                      <div className="relative group/input">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within/input:text-amber-500 transition-colors" />
                        <input 
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] group-hover/input:border-white/10"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <div className="absolute inset-0 rounded-2xl bg-amber-500/5 opacity-0 group-focus-within/input:opacity-100 blur-xl -z-10 transition-opacity" />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Phone Number</label>
                      <div className="relative group/input">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within/input:text-amber-500 transition-colors" />
                        <input 
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full bg-slate-950/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] group-hover/input:border-white/10"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                        <div className="absolute inset-0 rounded-2xl bg-amber-500/5 opacity-0 group-focus-within/input:opacity-100 blur-xl -z-10 transition-opacity" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 flex justify-center">
                    <button 
                      onClick={handleNext}
                      disabled={!formData.name || !formData.email || !formData.phone}
                      className="w-full max-w-md px-12 py-5 bg-amber-500 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 rounded-[2rem] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(245,158,11,0.2)]"
                    >
                      Proceed to Payment <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === "payment" && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <button onClick={handleBack} className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white transition-colors">
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                      <h3 className="text-2xl font-black text-white">Secure Checkout</h3>
                      <p className="text-slate-400 text-sm">Review your details and complete your enrollment.</p>
                    </div>
                  </div>

                  <div className="max-w-md mx-auto p-8 rounded-[2rem] bg-slate-950/50 border border-white/5 text-center">
                    <div className="w-16 h-16 rounded-3xl bg-amber-500/10 flex items-center justify-center text-amber-500 mx-auto mb-6">
                      <Lock className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Safe & Secure Payment</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Your transaction is encrypted and secured by Razorpay. 
                      We support all major payment methods including UPI, Cards, and Net Banking.
                    </p>
                  </div>

                  <div className="max-w-md mx-auto p-6 rounded-3xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                      <Ticket className="w-5 h-5 text-amber-500" />
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">Coupon Code</span>
                    </div>
                    <div className="flex gap-2">
                      <input 
                        type="text"
                        placeholder="ENTER CODE"
                        className="flex-1 bg-slate-950/50 border border-white/5 rounded-xl py-3 px-4 text-white placeholder:text-slate-700 text-sm focus:outline-none focus:border-amber-500/50 transition-all uppercase font-bold tracking-widest"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                      />
                      <button 
                        onClick={() => {
                          if (coupon) setIsCouponApplied(true);
                        }}
                        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all"
                      >
                        Apply
                      </button>
                    </div>
                    {isCouponApplied && (
                      <motion.p 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-[10px] text-emerald-400 font-bold uppercase tracking-widest"
                      >
                        ✓ Coupon applied successfully!
                      </motion.p>
                    )}
                  </div>

                  <div className="pt-4 flex flex-col items-center gap-6">
                    <button 
                      onClick={handleNext}
                      disabled={isProcessing}
                      className="w-full max-w-md px-12 py-5 bg-amber-500 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 rounded-[2rem] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(245,158,11,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          Pay {formatPrice(course.discountPrice || course.price, course.currency)} Now <Lock className="w-5 h-5 ml-1" />
                        </>
                      )}
                    </button>
                    
                    <div className="flex flex-wrap items-center justify-center gap-6 opacity-40">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">SSL Secure</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Instant Access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Global Cert.</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === "confirmation" && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-8 py-12"
                >
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="w-24 h-24 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_50px_rgba(16,185,129,0.4)]"
                    >
                      <CheckCircle2 className="w-12 h-12" />
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-emerald-500 blur-2xl -z-10"
                    />
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-white mb-4">Enrollment Successful!</h3>
                    <p className="text-slate-400 max-w-sm mx-auto">
                      Welcome to the <span className="text-amber-500 font-bold">{course.title}</span>. Your sacred journey has officially begun.
                    </p>
                  </div>

                  <div className="w-full max-w-md p-8 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 font-bold uppercase tracking-widest">Enrollment ID</span>
                      <span className="text-white font-mono">#VA-9923841</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 font-bold uppercase tracking-widest">Status</span>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest">Active</span>
                    </div>
                    <div className="pt-6 border-t border-white/5">
                      <p className="text-xs text-slate-400 mb-6">You will receive an email with your access credentials and onboarding instructions shortly.</p>
                      <button 
                        onClick={onClose}
                        className="w-full py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest transition-all"
                      >
                        Go to Dashboard
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
