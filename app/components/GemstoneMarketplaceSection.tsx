import Link from "next/link";
import { GEMSTONES } from "../gemstones/data";
import GemstoneRecommendationWidget from "./GemstoneRecommendationWidget";

export default function GemstoneMarketplaceSection() {
  const categories = [
    {
      id: "gemstones",
      title: "Gemstones",
      subtitle: "Divine energy encapsulated in Earth's rarest treasures for planetary alignment",
      items: GEMSTONES.filter(
        (gem) =>
          !gem.name.toLowerCase().includes("rudraksha") &&
          !gem.name.toLowerCase().includes("bracelet")
      ),
    },
    {
      id: "rudraksha",
      title: "Rudraksha",
      subtitle: "Sacred beads for spiritual awakening, protection, and inner peace",
      items: GEMSTONES.filter((gem) => gem.name.toLowerCase().includes("rudraksha")),
    },
    {
      id: "bracelets",
      title: "Bracelets",
      subtitle: "Wearable talismans for daily balance, healing, and holistic wellness",
      items: GEMSTONES.filter((gem) => gem.name.toLowerCase().includes("bracelet")),
    },
  ];

  return (
    <section
      id="gemstones-marketplace"
      className="gem-marketplace-section"
      aria-labelledby="gem-marketplace-heading"
    >
      {/* Cosmic Background Layers */}
      <div className="gem-marketplace-fixed-bg">
        <div className="hero-vignette" />
        <div className="starfield starfield-back" />
        <div className="starfield starfield-front" />
        <div className="dust dust-one" />
        <div className="dust dust-two" />
        <div className="nebula nebula-left" />
        <div className="nebula nebula-right" />
      </div>

      <div className="section-shell gem-marketplace-shell">
        <header className="gem-marketplace-header">
          <p className="section-kicker gem-kicker">Premium Collection</p>
          <h2 id="gem-marketplace-heading" className="section-title gem-heading">
            Sacred Remedies for Life&apos;s Journey
          </h2>
          <p className="gem-subheading">
            Discover authentic, lab-certified gemstones, rudraksha, and bracelets carefully selected
            for their spiritual and planetary significance.
          </p>
        </header>

        <GemstoneRecommendationWidget />

        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="gem-category-section"
            aria-label={category.title}
          >
            <header className="gem-category-header">
              <h3 className="gem-category-title">{category.title}</h3>
              <p className="gem-category-subtitle">{category.subtitle}</p>
              <div className="gem-category-accent" aria-hidden="true" />
            </header>

            <div className="gem-grid-container">
              <div className="gem-grid">
                {category.items.map((gem) => (
                  <article key={gem.name} className="gem-card">
                    <Link href={`/gemstones/${gem.slug}`} className="gem-card-top block">
                      <div className="gem-card-media">
                        <div className="gem-card-image" aria-hidden="true">
                          <img
                            src={gem.image}
                            alt={gem.name}
                            className="gem-img-content"
                            loading="lazy"
                            decoding="async"
                            width="400"
                            height="400"
                          />
                          <div className="gem-card-overlay" aria-hidden="true" />
                        </div>
                        <span className="gem-card-tag">{gem.badge}</span>
                      </div>
                    </Link>

                    <div className="gem-card-content">
                      <div className="gem-card-header">
                        <h3 className="gem-card-title">
                          <Link href={`/gemstones/${gem.slug}`} className="hover:text-gold-400 transition-colors">
                            {gem.name}
                          </Link>
                        </h3>
                        <p className="gem-card-planet">{gem.planet}</p>
                      </div>
                      <p className="gem-card-description">{gem.benefits}</p>
                    </div>

                    <footer className="gem-card-footer">
                      <div className="gem-card-pricing">
                        <span className="gem-card-price">{gem.priceRange}</span>
                        <span className="gem-card-cert">100% Natural · Lab Certified</span>
                      </div>
                      <div className="gem-card-actions">
                        <Link href={`/gemstones/${gem.slug}`} className="gem-btn gem-btn-primary text-center">
                          View Details
                        </Link>
                        <button className="gem-btn gem-btn-secondary">Consult Astrologer</button>
                      </div>
                    </footer>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section
          className="gem-trust-strip"
          aria-label="Why buy gemstones from VedAstraa"
        >
          <div className="gem-trust-item">
            <div className="gem-trust-icon" aria-hidden="true">
              ✦
            </div>
            <div>
              <p className="gem-trust-title">100% Natural &amp; Lab Certified</p>
              <p className="gem-trust-text">Every gemstone is lab tested with traceable certification.</p>
            </div>
          </div>
          <div className="gem-trust-item">
            <div className="gem-trust-icon" aria-hidden="true">
              ☉
            </div>
            <div>
              <p className="gem-trust-title">Astrologer-Recommended</p>
              <p className="gem-trust-text">Curated based on your unique birth chart and planetary needs.</p>
            </div>
          </div>
          <div className="gem-trust-item">
            <div className="gem-trust-icon" aria-hidden="true">
              ◈
            </div>
            <div>
              <p className="gem-trust-title">Custom Rings &amp; Pendants</p>
              <p className="gem-trust-text">Handcrafted settings in gold, silver, or panchdhatu.</p>
            </div>
          </div>
          <div className="gem-trust-item">
            <div className="gem-trust-icon" aria-hidden="true">
              🛡
            </div>
            <div>
              <p className="gem-trust-title">Secure Shipping</p>
              <p className="gem-trust-text">Tamper-proof packaging with authenticity certificate.</p>
            </div>
          </div>
        </section>

        <section
          className="gem-spotlight"
          aria-label="Featured gemstone spotlight"
        >
          <div className="gem-spotlight-media" aria-hidden="true">
            <div className="gem-spotlight-glow" />
            <div className="gem-spotlight-ring gem-spotlight-ring-outer" />
            <div className="gem-spotlight-ring gem-spotlight-ring-inner" />
            <div className="gem-spotlight-orb" />
          </div>
          <div className="gem-spotlight-copy">
            <p className="gem-spotlight-kicker">Featured Planetary Remedy</p>
            <h3 className="gem-spotlight-title">Blue Sapphire for Saturn Alignment</h3>
            <p className="gem-spotlight-text">
              A carefully selected Blue Sapphire (Neelam) can accelerate disciplined success, support
              karmic cleansing, and align you with Saturn&apos;s higher wisdom—when prescribed after
              a detailed birth-chart review.
            </p>
            <ul className="gem-spotlight-list">
              <li>Ideal for career stability and long-term growth</li>
              <li>Recommended only after astrological suitability check</li>
              <li>Available in fine cuts with custom ring and pendant designs</li>
            </ul>
            <Link href="/gemstones/blue-sapphire" className="gem-spotlight-cta inline-block text-center">
              Shop Now
            </Link>
          </div>
        </section>

        <section
          className="gem-steps"
          aria-label="How gemstone recommendation works"
        >
          <h3 className="gem-steps-heading">How Gemstone Recommendation Works</h3>
          <div className="gem-steps-grid">
            <div className="gem-step">
              <div className="gem-step-number">01</div>
              <h4 className="gem-step-title">Enter Birth Details</h4>
              <p className="gem-step-text">
                Share your Name, Date of Birth, Time of Birth, and Birthplace so we can calculate your
                precise birth chart.
              </p>
            </div>
            <div className="gem-step">
              <div className="gem-step-number">02</div>
              <h4 className="gem-step-title">Astrologer Analysis</h4>
              <p className="gem-step-text">
                Our Vedic astrologers study your planetary strengths, weaknesses, and current dashas
                to determine suitable gemstones.
              </p>
            </div>
            <div className="gem-step">
              <div className="gem-step-number">03</div>
              <h4 className="gem-step-title">Receive Certified Recommendation</h4>
              <p className="gem-step-text">
                You receive a curated list of certified gemstones, exact carat range, metal, and
                wearing instructions—tailored just for you.
              </p>
            </div>
          </div>
        </section>

        <section className="gem-luxury-cta">
          <div className="gem-luxury-cta-inner">
            <div className="gem-luxury-copy">
              <p className="gem-luxury-kicker">Luxury Spiritual Commerce</p>
              <h3 className="gem-luxury-title">
                Unlock the Power of Planetary Energies — Discover Your Perfect Gemstone Today
              </h3>
            </div>
            <div className="gem-luxury-actions">
              <Link href="#gem-widget" className="gem-luxury-btn gem-luxury-btn-primary inline-block text-center">
                Find My Gemstone
              </Link>
              <Link href="#gemstones" className="gem-luxury-btn gem-luxury-btn-secondary inline-block text-center">
                Browse All Gemstones
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

