"use client";

import { useEffect, useState } from "react";
import FadeIn from "../components/FadeIn";
import ServiceIntakeFlow from "../components/service-intake/ServiceIntakeFlow";
import { ServiceKey } from "../components/service-intake/types";

type Service = {
  key: ServiceKey;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  icon: "zodiac" | "numbers" | "tarot" | "vastu" | "chakra";
};

const services: Service[] = [
  {
    key: "astrology",
    title: "Vedic Astrology Reading",
    icon: "zodiac",
    description:
      "Decode the secrets of your birth chart and understand how planetary positions influence your personality, relationships, career, and destiny.",
    benefits: ["Detailed birth chart analysis", "Career and financial predictions", "Marriage and compatibility insights", "Planetary dosha analysis", "Life path guidance"],
    cta: "Book Astrology Reading",
  },
  {
    key: "numerology",
    title: "Numerology Consultation",
    icon: "numbers",
    description:
      "Discover the hidden power of numbers and how they influence your personality, destiny, and life opportunities.",
    benefits: ["Life path number analysis", "Lucky numbers and dates", "Name correction guidance", "Business name numerology", "Career and financial insights"],
    cta: "Consult Numerologist",
  },
  {
    key: "tarot",
    title: "Tarot Card Reading",
    icon: "tarot",
    description:
      "Receive intuitive insights and guidance through powerful tarot card readings that help you make confident decisions.",
    benefits: ["Love and relationship guidance", "Career insights", "Decision clarity", "Emotional support", "Future possibilities"],
    cta: "Get Tarot Reading",
  },
  {
    key: "vastu",
    title: "Vastu Consultation",
    icon: "vastu",
    description:
      "Balance the energies of your home or workplace using ancient Vastu principles to attract prosperity and harmony.",
    benefits: ["Home energy analysis", "Office productivity alignment", "Wealth and prosperity corrections", "Direction and placement guidance", "Property evaluation before purchase"],
    cta: "Consult Vastu Expert",
  },
  {
    key: "healing",
    title: "Energy Healing",
    icon: "chakra",
    description:
      "Restore balance to your mind, body, and soul through powerful energy healing sessions and chakra alignment.",
    benefits: ["Chakra balancing", "Aura cleansing", "Emotional healing", "Spiritual alignment", "Energy block removal"],
    cta: "Start Healing Session",
  },
];

function ServiceIcon({ kind, label }: { kind: Service["icon"]; label: string }) {
  switch (kind) {
    case "zodiac":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <circle cx="12" cy="12" r="8.5" className="va-icon-stroke" />
          <circle cx="12" cy="12" r="4.25" className="va-icon-stroke va-icon-fade" />
          <path d="M12 3.5v17M3.5 12h17M6.2 6.2l11.6 11.6M17.8 6.2L6.2 17.8" className="va-icon-stroke va-icon-fade" />
          <circle cx="12" cy="12" r="1.25" className="va-icon-fill" />
        </svg>
      );
    case "numbers":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <path d="M8 4l-2 16" className="va-icon-stroke" />
          <path d="M14 4l-2 16" className="va-icon-stroke" />
          <path d="M4 9h16" className="va-icon-stroke va-icon-fade" />
          <path d="M3 15h16" className="va-icon-stroke va-icon-fade" />
          <path d="M10 4h10" className="va-icon-stroke va-icon-fade" />
        </svg>
      );
    case "tarot":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <rect x="5" y="3.5" width="14" height="17" rx="2.5" className="va-icon-stroke" />
          <path d="M12 7.5l1.35 2.7 3 .45-2.15 2.1.5 3-2.7-1.45-2.7 1.45.5-3-2.15-2.1 3-.45L12 7.5Z" className="va-icon-stroke va-icon-fade" />
          <path d="M8.2 18h7.6" className="va-icon-stroke va-icon-fade" />
        </svg>
      );
    case "vastu":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <rect x="4" y="4" width="16" height="16" rx="1.5" className="va-icon-stroke" />
          <path d="M9.33 4v16M14.67 4v16M4 9.33h16M4 14.67h16M4 4l16 16M20 4L4 20" className="va-icon-stroke va-icon-fade" />
        </svg>
      );
    case "chakra":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <circle cx="12" cy="12" r="7.5" className="va-icon-stroke" />
          <circle cx="12" cy="12" r="2.25" className="va-icon-stroke va-icon-fade" />
          <path d="M12 4.5v15M4.5 12h15M6.6 6.6l10.8 10.8M17.4 6.6L6.6 17.4" className="va-icon-stroke va-icon-fade" />
          <path d="M7.2 12c0-2.65 2.05-4.8 4.8-4.8S16.8 9.35 16.8 12 14.65 16.8 12 16.8 7.2 14.65 7.2 12Z" className="va-icon-stroke va-icon-fade" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceKey>("astrology");

  const handleServiceSelect = (serviceKey: ServiceKey) => {
    setSelectedService(serviceKey);
    // Give it a tiny delay to ensure state update has triggered any necessary layout changes
    // and then scroll to the intake form section
    setTimeout(() => {
      const element = document.getElementById("intake-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 10);
  };

  return (
    <div className="va-services-page">
      <section className="va-services-hero">
        <div className="va-services-bg" aria-hidden="true">
          <div className="va-services-stars va-services-stars-back" />
          <div className="va-services-stars va-services-stars-front" />
          <div className="va-services-nebula va-services-nebula-one" />
          <div className="va-services-nebula va-services-nebula-two" />
          <div className="va-services-glow va-services-glow-gold" />
        </div>

        <div className="section-shell va-services-shell">
          <FadeIn as="header" className="va-services-header">
            <p className="va-services-kicker">Our Spiritual Services</p>
            <h1 className="va-services-title">
              <span className="va-title-accent">Ancient Wisdom.</span>
              <span className="va-title-main">Modern Guidance.</span>
            </h1>
            <div className="va-services-intro-container">
              <p className="va-services-intro-main">
                VedAstraa brings together multiple <span>sacred sciences</span> to provide
                <span>clarity</span>, <span>direction</span>, and <span>balance</span> in your life.
              </p>
              <div className="va-services-intro-divider" />
              <p className="va-services-intro-sub">
                Choose a service below and the right intake form opens instantly so your journey
                can begin with the right context.
              </p>
            </div>
          </FadeIn>

          <div className="va-services-grid" role="list">
            {services.map((service, index) => (
              <FadeIn key={service.title} as="article" className="va-service-card">
                <div className="va-service-card-inner" style={{ ["--va-delay" as never]: `${index * 70}ms` }}>
                  <div className="va-service-card-ornament" aria-hidden="true" />

                  <div className="va-service-card-content">
                    <div className="va-service-icon" aria-hidden="true">
                      <span className="va-service-icon-ring" />
                      <ServiceIcon kind={service.icon} label={service.title} />
                    </div>

                    <h2 className="va-service-title">{service.title}</h2>

                    <div className="va-service-meta">
                      <span className="va-chip">Verified experts</span>
                      <span className="va-chip va-chip-muted">1:1 session</span>
                    </div>

                    <p className="va-service-desc">{service.description}</p>

                    <ul className="va-service-benefits" aria-label={`${service.title} benefits`}>
                      {service.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>

                    <div className="va-service-actions">
                      <button
                        type="button"
                        onClick={() => handleServiceSelect(service.key)}
                        className="va-btn va-btn-card"
                        aria-pressed={selectedService === service.key}
                      >
                        {service.cta}
                        <span className="va-btn-arrow" aria-hidden="true">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn id="intake-form" as="section" className="mt-14 scroll-mt-24" threshold={0.15}>
            <div className="mb-6 flex flex-wrap gap-3">
              {services.map((service) => (
                <button
                  key={service.key}
                  type="button"
                  onClick={() => handleServiceSelect(service.key)}
                  className={`rounded-full border px-4 py-2 text-base font-medium transition ${
                    selectedService === service.key
                      ? "border-[#a855f7]/60 bg-white/10 text-white shadow-[0_0_30px_rgba(168,85,247,0.16)]"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            <ServiceIntakeFlow selectedService={selectedService} />
          </FadeIn>

          <FadeIn as="section" className="va-services-cta" threshold={0.15}>
            <div className="va-services-cta-copy">
              <h2>Not Sure Which Service You Need?</h2>
              <p>
                Start with the closest match above and we can fine-tune the consultation path once
                your intake comes in.
              </p>
            </div>
            <div className="va-services-cta-actions">
              <button type="button" className="va-btn va-btn-primary" onClick={() => handleServiceSelect("astrology")}>
                Start With Astrology
              </button>
              <button type="button" className="va-btn va-btn-secondary" onClick={() => handleServiceSelect("tarot")}>
                Quick Tarot Intake
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
