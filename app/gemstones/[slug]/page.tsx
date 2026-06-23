import { GEMSTONES, Gemstone } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Sparkles, ShieldCheck, Zap, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import styles from "./GemstoneProduct.module.css";
import GemstoneCheckoutButton from "../../components/GemstoneCheckoutButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GEMSTONES.map((gem) => ({
    slug: gem.slug,
  }));
}

export default async function GemstoneDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const gem = GEMSTONES.find((g) => g.slug === slug);

  if (!gem) {
    notFound();
  }

  // Related products based on planet or category
  const relatedProducts = GEMSTONES.filter(
    (g) => g.slug !== gem.slug && (g.planet === gem.planet || g.badge.split(" · ")[0] === gem.badge.split(" · ")[0])
  ).slice(0, 6);

  return (
    <div className={styles.wrapper}>
      {/* Background Layers */}
      <div className={styles.cosmicBackgroundContainer}>
        <div className="hero-vignette" />
        <div className="starfield starfield-back" />
        <div className="starfield starfield-front" />
        <div className="dust dust-one" />
        <div className="dust dust-two" />
        <div className="nebula nebula-left" />
        <div className="nebula nebula-right" />
      </div>
      
      <div className={styles.contentWrapper}>
        {/* Full-width Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.imageContainer}>
              <img
                src={gem.image}
                alt={gem.name}
                className={styles.productImage}
                loading="eager"
                width={800}
                height={800}
              />
              <div className={styles.badge}>
                <Sparkles className="w-3 h-3" />
                {gem.badge}
              </div>
            </div>
            <div className={styles.radialGlow} />
          </div>

          <div className={styles.heroRight}>
            <div className={styles.titleWrapper}>
              <span className={styles.planetSubtitle}>{gem.planet} &middot; Sacred Alignment</span>
              <h1 className={styles.productName}>{gem.name}</h1>
            </div>

            <p className={styles.description}>{gem.benefits}</p>

            <div className={styles.priceSection}>
              <span className={styles.price}>{gem.priceRange}</span>
              <span className={styles.certLine}>
                Certified Natural &middot; Ethical Origin &middot; Energized by Experts
              </span>
            </div>

            <div className={styles.ctaGroup}>
              <GemstoneCheckoutButton
                amount={gem.basePrice}
                name={gem.name}
                description={gem.benefits}
                image={gem.image}
                planet={gem.planet}
              />
              <button className={styles.secondaryCta}>Consult Astrologer</button>
            </div>
          </div>
        </section>

        {/* Storytelling Flow */}
        <div className={styles.storytelling}>
          
          {/* Why This Product Section */}
          {gem.spiritualBenefits && (
            <FadeIn as="section" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionSubtitle}>Properties & Energies</span>
                <h2 className={styles.sectionTitle}>Why This Sacred Gem?</h2>
                <div className={styles.divider} />
              </div>
              
              <div className={styles.whyGrid}>
                {gem.spiritualBenefits.map((benefit, i) => (
                  <div key={i} className={styles.whyCard}>
                    <div className={styles.iconWrapper}>
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <p className={styles.benefitText}>"{benefit}"</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Rich Description Block */}
          {gem.detailedDescription && (
            <FadeIn as="section" className={styles.richDescription}>
              <p className={styles.richText}>
                &ldquo;{gem.detailedDescription}&rdquo;
              </p>
              <div className="mt-8">
                <span className={styles.sectionSubtitle}>Timeless Vedic Wisdom</span>
              </div>
            </FadeIn>
          )}

          {/* Specifications Section */}
          {gem.specifications && (
            <FadeIn as="section" className={styles.section}>
              <div className={styles.specsContainer}>
                <div className="mb-12">
                  <h2 className={styles.sectionTitle}>Technical Specifications</h2>
                  <div className="w-20 h-px bg-gold-500/50 mt-4" style={{ backgroundColor: '#d4af37', opacity: 0.5 }} />
                </div>
                <div className={styles.specsGrid}>
                  {Object.entries(gem.specifications).map(([key, value]) => (
                    <div key={key} className={styles.specItem}>
                      <span className={styles.specLabel}>{key.replace('_', ' ')}</span>
                      <span className={styles.specValue}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* How to Use Section */}
          {gem.howToUse && (
            <FadeIn as="section" className={styles.section}>
              <div className={styles.howToGrid}>
                <div className="space-y-12">
                  <div className="space-y-4">
                    <span className={styles.sectionSubtitle}>Rituals & Wearing</span>
                    <h2 className={styles.sectionTitle}>Vedic Rituals for Empowerment</h2>
                    <div className={styles.divider} style={{ margin: '0' }} />
                  </div>
                  
                  <div className={styles.stepsList}>
                    {gem.howToUse.map((step, i) => (
                      <div key={i} className={styles.stepItem}>
                        <div className={styles.stepNumber}>{i + 1}</div>
                        <p className={styles.stepText}>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.howToImage}>
                  <img src={gem.image} alt="Ritual" width={800} height={1000} />
                  <div className={styles.howToOverlay}>
                    <div className={styles.howToCard}>
                      <div className={styles.trustIcon} style={{ width: '80px', height: '80px' }}>
                        <Zap className="w-10 h-10" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif mb-2">Personal Guidance?</h3>
                        <p className="text-sm text-gray-400">Our master astrologers can calculate your precise wearing muhurta.</p>
                      </div>
                      <button className={styles.secondaryCta}>Request Guide</button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Trust & Authenticity Section */}
          <section className={styles.section}>
            <div className={styles.trustGrid}>
              {[
                { icon: ShieldCheck, title: "100% Natural", text: "Earth-mined" },
                { icon: Star, title: "Lab Certified", text: "Report included" },
                { icon: Zap, title: "Energized", text: "By Experts" },
                { icon: CheckCircle2, title: "Expert Curated", text: "Selected for you" }
              ].map((item, i) => (
                <div key={i} className={styles.trustItem}>
                  <div className={styles.trustIcon}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <span className={styles.trustTitle}>{item.title}</span>
                  <span className={styles.trustText}>{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <FadeIn as="section" className={styles.section}>
              <div className="flex justify-between items-end mb-12">
                <div className="space-y-4">
                  <span className={styles.sectionSubtitle}>Curated Collection</span>
                  <h2 className={styles.sectionTitle}>Seek Further Remedies</h2>
                </div>
                <Link href="/gemstones" className={styles.sectionSubtitle} style={{ textDecoration: 'none', color: '#d4af37' }}>
                  Explore All Treasures &rarr;
                </Link>
              </div>

              <div className={styles.scrollContainer}>
                {relatedProducts.map((related) => (
                  <Link key={related.slug} href={`/gemstones/${related.slug}`} className={styles.productCard}>
                    <div className={styles.cardImageContainer}>
                      <img 
                        src={related.image} 
                        alt={related.name} 
                        className={styles.cardImage} 
                        loading="lazy" 
                        width={400} 
                        height={400} 
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className={styles.cardTitle}>{related.name}</h3>
                      <div className={styles.cardFooter}>
                        <span className={styles.cardPlanet}>{related.planet}</span>
                        <span className={styles.cardPrice}>{related.priceRange}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
}
