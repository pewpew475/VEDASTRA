"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import styles from "../gemstones/[slug]/GemstoneProduct.module.css";
import GemstonePayment from "./GemstonePayment";

interface GemstoneCheckoutButtonProps {
  amount: number;
  name: string;
  description: string;
  image: string;
  planet: string;
}

export default function GemstoneCheckoutButton({
  amount,
  name,
  description,
  image,
  planet,
}: GemstoneCheckoutButtonProps) {
  const [showPayment, setShowPayment] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAcquireClick = () => {
    setLoading(true);
    // Simulate a brief loading state for a premium feel
    setTimeout(() => {
      setShowPayment(true);
      setLoading(false);
    }, 600);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    alert("Order placed successfully! Our experts will contact you for the energization ritual details.");
  };

  return (
    <>
      <button
        className={styles.primaryCta}
        onClick={handleAcquireClick}
        disabled={loading}
      >
        <span className="flex items-center gap-2">
          {loading ? (
            <>
              Preparing... <Loader2 className="w-4 h-4 animate-spin" />
            </>
          ) : (
            <>
              Acquire Now <ArrowRight className="w-4 h-4" />
            </>
          )}
        </span>
      </button>

      <AnimatePresence>
        {showPayment && (
          <GemstonePayment
            gem={{
              name,
              priceRange: `₹${amount}`,
              basePrice: amount,
              image,
              planet,
            }}
            onClose={() => setShowPayment(false)}
            onPaymentSuccess={handlePaymentSuccess}
          />
        )}
      </AnimatePresence>
    </>
  );
}
