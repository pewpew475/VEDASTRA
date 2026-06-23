"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Loader2
} from "lucide-react";
import { ServiceDefinition } from "./types";
import { useState } from "react";

interface PaymentCheckoutProps {
  service: ServiceDefinition;
  onBack: () => void;
  onPaymentSuccess: () => void;
  prefill?: {
    name?: string;
    email?: string;
    phone?: string;
    notes?: string;
  };
}

export default function PaymentCheckout({ service, onBack, onPaymentSuccess, prefill }: PaymentCheckoutProps) {
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
          amount: service.price,
          currency: service.currency,
          receipt: `service_${service.key}_${Date.now()}`,
          notes: {
            service_name: service.title,
            customer_name: prefill?.name,
            customer_email: prefill?.email,
            customer_phone: prefill?.phone,
            intake_details: prefill?.notes,
          },
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
        description: `Payment for ${service.shortTitle}`,
        order_id: order.id,
        handler: function (response: any) {
          console.log("Payment Successful:", response);
          onPaymentSuccess();
        },
        prefill: {
          name: prefill?.name || "",
          email: prefill?.email || "",
          contact: prefill?.phone || "",
        },
        notes: {
          intake_details: prefill?.notes?.substring(0, 255),
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

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Booking
        </button>
        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
          <ShieldCheck className="h-3 w-3" />
          Secure Checkout
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Order Summary */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Order Summary</h4>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-200 text-xl border border-amber-500/20">
                {service.icon}
              </div>
              <div>
                <h5 className="font-semibold text-white">{service.shortTitle}</h5>
                <p className="text-xs text-slate-400">Personal Consultation</p>
              </div>
            </div>

            <div className="space-y-3 border-t border-white/5 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Consultation Fee</span>
                <span className="text-white font-medium">{formatPrice(service.price, service.currency)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Platform Charges</span>
                <span className="text-emerald-400 font-medium">Free</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-4 mt-2">
                <span className="text-base font-bold text-white">Total Amount</span>
                <span className="text-xl font-bold text-amber-300">{formatPrice(service.price, service.currency)}</span>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-emerald-500/10 bg-emerald-500/5 p-4">
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-emerald-50">Instant Confirmation</p>
                <p className="text-xs text-emerald-200/70 mt-1">Receive your session link immediately after payment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="lg:col-span-3 space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl">
            <h4 className="mb-6 text-xl font-[var(--font-playfair)] text-white">Secure Payment</h4>
            
            <p className="text-slate-400 text-sm mb-8">
              Complete your booking securely via Razorpay. We support all major payment 
              methods including UPI, Credit/Debit Cards, and Net Banking.
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
                  Pay Now {formatPrice(service.price, service.currency)}
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
            <Lock className="h-3 w-3" />
            End-to-end encrypted · PCI DSS Compliant
          </div>
        </div>
      </div>
    </div>
  );
}
