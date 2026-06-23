"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Instagram, 
  Youtube, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Globe 
} from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Vedic Astrology", href: "/services#astrology" },
      { name: "Numerology", href: "/services#numerology" },
      { name: "Tarot Reading", href: "/services#tarot" },
      { name: "Vastu Consultation", href: "/services#vastu" },
      { name: "Energy Healing", href: "/services#healing" },
    ],
  },
  {
    title: "Courses",
    links: [
      { name: "Ved Astra Astrology Course", href: "/courses" },
      { name: "Numerology Courses", href: "/courses" },
      { name: "Ved Astra Tarot Master Course", href: "/courses" },
      { name: "Vastu Course", href: "/courses" },
      { name: "Ved Astra Reiki Healing Master Program", href: "/courses" },
      { name: "21-Day Meditation Master Course", href: "/courses" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "About Us", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-stars">
        <div className="footer-stars-back"></div>
        <div className="footer-stars-front"></div>
      </div>
      <div className="footer-shell">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image
              src="/logo-removebg.png"
              alt="VedAstraa"
              width={250}
              height={95}
              className="h-40 w-auto"
            />
          </Link>
          <p className="footer-desc">
            Empowering your spiritual journey through Vedic wisdom, astrology, and holistic healing. 
            Connect with your cosmic blueprint and find clarity in every step.
          </p>
          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a 
                key={social.label} 
                href={social.href} 
                className="social-icon" 
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links-grid">
          {footerLinks.map((column) => (
            <div key={column.title} className="footer-column">
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="footer-column contact-column">
            <h3>Contact</h3>
            <ul className="contact-list">
              <li>
                <Mail size={16} />
                <span>support@vedastraa.com</span>
              </li>
              <li>
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>Vedic Heights, Spiritual Hub, New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {currentYear} VedAstraa. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
