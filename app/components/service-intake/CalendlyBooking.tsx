"use client";

import { useEffect, useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { motion } from "framer-motion";
import { CheckCircle2, Video, Calendar, Clock, ArrowLeft } from "lucide-react";

interface CalendlyBookingProps {
  url: string;
  onBack: () => void;
  prefill?: {
    email?: string;
    name?: string;
    phone?: string;
    notes?: string;
    customAnswers?: {
      a1?: string;
      a2?: string;
      a3?: string;
    };
  };
  onEventScheduled?: () => void;
}

export default function CalendlyBooking({ url, onBack, prefill, onEventScheduled }: CalendlyBookingProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useCalendlyEventListener({
    onEventScheduled: (e) => {
      console.log("Event scheduled:", e);
      if (onEventScheduled) onEventScheduled();
    },
  });

  if (!isClient) return null;

  // Enhance prefill with customAnswers for broader compatibility
  // We cast to 'any' because the react-calendly Prefill type is missing 'notes'
  // but Calendly's standard embed script DOES support it.
  const enhancedPrefill: any = {
    ...prefill,
    smsReminderNumber: prefill?.phone,
    customAnswers: {
      ...prefill?.customAnswers,
      a1: prefill?.notes, // Usually the first custom question
      a2: prefill?.notes, // Fallback for second question
      a3: prefill?.notes, // Fallback for third question
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex items-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Review
        </button>
      </div>

      <div className="text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-200 border border-amber-500/20">
          <Calendar className="h-4 w-4" />
          Schedule Your Session
        </div>
        <h4 className="font-[var(--font-playfair)] text-3xl text-white sm:text-4xl">Book Your 15-Minute Slot</h4>
        <p className="mt-4 text-slate-300">
          Please select a suitable time for your consultation.
          After booking, you will proceed to the payment step to confirm your session.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
          <Clock className="h-5 w-5 text-amber-200 mx-auto mb-2" />
          <p className="text-sm font-medium text-white">15 Minutes</p>
          <p className="text-xs text-slate-400">Session Duration</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
          <Video className="h-5 w-5 text-rose-300 mx-auto mb-2" />
          <p className="text-sm font-medium text-white">Google Meet</p>
          <p className="text-xs text-slate-400">Live Video Call</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
          <Calendar className="h-5 w-5 text-violet-300 mx-auto mb-2" />
          <p className="text-sm font-medium text-white">Instant Sync</p>
          <p className="text-xs text-slate-400">Calendar Invite</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 min-h-[700px]">
        <InlineWidget
          url={url}
          prefill={enhancedPrefill}
          styles={{
            height: "700px",
          }}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "f59e0b",
            textColor: "0f172a",
          }}
        />
      </div>

      <div className="text-center text-sm text-slate-400">
        Can't find a suitable time? Contact us at support@vedastraa.com
      </div>
    </motion.div>
  );
}
