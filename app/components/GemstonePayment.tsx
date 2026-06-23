"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  ArrowRight,
  CheckCircle2,
  Loader2,
  X
} from "lucide-react";
import { useState } from "react";

interface GemstonePaymentProps {
  gem: {
    name: string;
    priceRange: string;
    basePrice: number;
    image: string;
    planet: string;
  };
  onClose: () => void;
  onPaymentSuccess: () => void;
}

export default function GemstonePayment({ gem, onClose, onPaymentSuccess }: GemstonePaymentProps) {
  const [isProcessing, setIsProcessing] = useState(false);

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
          amount: gem.basePrice,
          currency: "INR",
          receipt: `gemstone_${gem.name.replace(/\s+/g, '_')}_${Date.now()}`,
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
        name: "VedAstraa",
        description: `Payment for ${gem.name}`,
        order_id: order.id,
        handler: function (response: any) {
          console.log("Payment Successful:", response);
          onPaymentSuccess();
        },
        prefill: {
          name: "", 
          email: "",
          contact: "",
        },
        theme: {
          color: "#f59e0b", // amber-500
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-4xl overflow-hidden rounded-[40px] border border-white/10 bg-slate-900/90 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
      >
        {/* Background Accents */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-[80px]" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />

        <div className="relative z-10 p-6 sm:p-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Secure Checkout</h3>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">VedAstraa Treasures</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            {/* Left Column: Product Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="aspect-square mb-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                  <img 
                    src={gem.image} 
                    alt={gem.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400/80">{gem.planet} &middot; Natural</span>
                    <h4 className="text-xl font-serif text-white mt-1">{gem.name}</h4>
                  </div>
                  
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Base Price</span>
                      <span className="text-white font-medium">{formatPrice(gem.basePrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Certification</span>
                      <span className="text-emerald-400 font-medium">Included</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-4 mt-2">
                      <span className="text-base font-bold text-white">Total Amount</span>
                      <span className="text-2xl font-bold text-amber-300">{formatPrice(gem.basePrice)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Includes Authenticity Certificate & Vedic Energization Ritual.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-xl">
                <h4 className="mb-6 text-xl font-serif text-white">Payment Securely</h4>
                
                <p className="text-slate-400 text-sm mb-8">
                  Click the button below to complete your purchase securely via Razorpay. 
                  All major payment methods are supported including UPI, Cards, and Net Banking.
                </p>

                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-rose-300 to-violet-300 px-6 py-4 text-base font-bold text-slate-900 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(252,211,77,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Pay Now {formatPrice(gem.basePrice)}
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <Lock className="h-3 w-3" />
                PCI DSS Compliant · Secured by Razorpay
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
