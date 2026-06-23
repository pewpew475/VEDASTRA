"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import FadeIn from "./components/FadeIn";
import AstrologyToolsContainer from "./components/AstrologyToolsContainer";

const navItems = [
  "Home",
  "Consult Experts",
  "Services",
  "Gemstones",
  "Courses",
  "Horoscope",
  "Tools",
  "Blog",
  "Membership",
];

const trustItems = [
  {
    icon: "VA",
    title: "Verified Astrologers",
    description: "Experienced practitioners offering real Vedic guidance.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: "AG",
    title: "Authentic Gemstones",
    description: "Carefully sourced spiritual remedies and energized stones.",
    image: "/downloaded_images/Rose_Quartz_Bracelets.png"
  },
  {
    icon: "AP",
    title: "Accurate Predictions",
    description: "Insightful analysis grounded in trusted ancient sciences.",
    image: "https://images.unsplash.com/photo-1515942661900-94b3d1972591?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: "SC",
    title: "Secure Consultations",
    description: "Private, protected, and convenient sessions with experts.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
  },
];

const services = [
  {
    title: "Vedic Astrology",
    description:
      "Deep birth chart analysis to uncover your personality, life path, career prospects, marriage compatibility, and planetary influences.",
    button: "Learn More",
    image:
      "https://images.unsplash.com/photo-1515942661900-94b3d1972591?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Numerology",
    description:
      "Understand how numbers influence your life path, personality, relationships, and success.",
    button: "Explore Numerology",
    image:
      "https://astrala.imgix.net/6sb2cxWciCvcbY12DpU8eC/95d59b3f79bf3cabc567da2ca50b63e7/name-numerology-destiny-soul-urge-personality-numbers.jpg?w=1080&q=60&auto=format,compress",
  },
  {
    title: "Tarot Card Reading",
    description:
      "Get intuitive guidance on love, career, finances, and life decisions through tarot card readings.",
    button: "Get a Reading",
    image:
      "https://ppiyanshi.com/cdn/shop/products/live-tarot-card-reading-course-121542.jpg?v=1707504050",
  },
  {
    title: "Vastu Consultation",
    description:
      "Harmonize your home or workplace with Vastu principles to attract prosperity, peace, and positive energy.",
    button: "Consult a Vastu Expert",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Energy Healing",
    description:
      "Balance your chakras and cleanse your aura through powerful spiritual healing sessions.",
    button: "Start Healing",
    image:
      "https://slvpost.com/wp-content/uploads/2023/08/meditation-1384758_1280-800.jpg",
  },
];


const consultationModes = [
  "Chat consultations",
  "Phone consultations",
  "Video sessions",
];

const dashboardItems = [
  "Daily horoscope",
  "Planetary influences",
  "Lucky numbers and colors",
  "Personalized remedies",
  "Gemstone recommendations",
];

const gemstoneFeatures = [
  "Lab-certified gemstones",
  "Customized rings and pendants",
  "Personalized gemstone recommendations",
  "Authenticity certificates",
];

const academyJourney = [
  {
    title: "Ved Astra Astrology Course",
    icon: "zodiac-wheel",
    detail: "Structured Vedic astrology program covering fundamentals to professional practice including chart reading and prediction techniques.",
    image: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Numerology Courses",
    icon: "numerology",
    detail: "Comprehensive numerology program covering destiny, personality, relationships, and wealth using Vedic and traditional systems.",
    image: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Ved Astra Tarot Master Course",
    icon: "tarot-card",
    detail: "Learn Tarot reading from basic intuition to professional consulting and spiritual business building.",
    image: "https://images.unsplash.com/photo-1601006626938-f91039860c18?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Vastu Course",
    icon: "vastu-grid",
    detail: "Learn Vastu Shastra for creating harmonious living and working spaces.",
    image: "https://images.unsplash.com/photo-1503387762-592eea58f4e8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Ved Astra Reiki Healing Master Program",
    icon: "lotus-healing",
    detail: "Complete Reiki training from self-healing to teaching others and building a professional healing practice.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Money Reiki Course",
    icon: "lotus-healing",
    detail: "A powerful spiritual healing and manifestation program focused on working with money energy using Reiki symbols.",
    image: "/downloaded_images/Golden_Planetary_Orbs.png"
  },
  {
    title: "21-Day Meditation Master Course",
    icon: "lotus-healing",
    detail: "A structured 21-day journey focusing on calmness, energy balance, and manifestation without intense practices.",
    image: "https://images.unsplash.com/photo-1515942661900-94b3d1972591?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Akashic Records Course",
    icon: "lotus-healing",
    detail: "Learn to access soul records for past-life insights, healing, and guidance.",
    image: "/downloaded_images/Ancient_Scriptures_Rolls.png"
  },
  {
    title: "Aura Course",
    icon: "lotus-healing",
    detail: "Learn to read, cleanse, and heal the human aura.",
    image: "/downloaded_images/Cosmic_Swirl_Light.png"
  },
  {
    title: "Rudraksha Science & Healing",
    icon: "zodiac-wheel",
    detail: "Study Rudraksha for healing, astrology remedies, and professional consultation.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Seven Chakras Healing Course",
    icon: "lotus-healing",
    detail: "Deep dive into chakra system for healing and energy balance.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
  },
];

const academyFeatures = [
  {
    title: "Structured Online Learning",
    icon: "structured-learning",
  },
  {
    title: "Live Workshops",
    icon: "live-workshops",
  },
  {
    title: "Certification Programs",
    icon: "certification",
  },
  {
    title: "Mentorship Opportunities",
    icon: "mentorship",
  },
];


const zodiacSigns = [
  { name: 'Aries', icon: 'aries' },
  { name: 'Taurus', icon: 'taurus' },
  { name: 'Gemini', icon: 'gemini' },
  { name: 'Cancer', icon: 'cancer' },
  { name: 'Leo', icon: 'leo' },
  { name: 'Virgo', icon: 'virgo' },
  { name: 'Libra', icon: 'libra' },
  { name: 'Scorpio', icon: 'scorpio' },
  { name: 'Sagittarius', icon: 'sagittarius' },
  { name: 'Capricorn', icon: 'capricorn' },
  { name: 'Aquarius', icon: 'aquarius' },
  { name: 'Pisces', icon: 'pisces' },
];
const wheelPolarPoint = (radius: number, angleDeg: number) => {
  const angle = (angleDeg - 90) * Math.PI / 180;
  return {
    x: Number((250 + radius * Math.cos(angle)).toFixed(2)),
    y: Number((250 + radius * Math.sin(angle)).toFixed(2)),
  };
};

const describeWheelArc = (radius: number, startAngle: number, endAngle: number) => {
  const start = wheelPolarPoint(radius, startAngle);
  const end = wheelPolarPoint(radius, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
};

const describeWheelSector = (innerRadius: number, outerRadius: number, startAngle: number, endAngle: number) => {
  const outerStart = wheelPolarPoint(outerRadius, startAngle);
  const outerEnd = wheelPolarPoint(outerRadius, endAngle);
  const innerEnd = wheelPolarPoint(innerRadius, endAngle);
  const innerStart = wheelPolarPoint(innerRadius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`,
    'Z',
  ].join(' ');
};

const zodiacIconPaths: Record<string, string[]> = {
  aries: [
    "M12 21c0-4 0-8 0-8 0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6M12 13c0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6",
  ],
  taurus: [
    "M12 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
    "M6 4a6 6 0 0 1 12 0",
  ],
  gemini: [
    "M8 4.5v15",
    "M16 4.5v15",
    "M3 3.5c6 1.5 12 1.5 18 0",
    "M3 20.5c6-1.5 12-1.5 18 0",
  ],
  cancer: [
    "M6 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "M18 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    "M18 12a9 6 0 0 0-15-5",
    "M6 12a9 6 0 0 0 15 5",
  ],
  leo: [
    "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    "M15.5 10c1-2 4-2 4 2 0 3-2 5-2 9",
  ],
  virgo: [
    "M4 5v10c0 1 1 2 2 2s2-1 2-2V5c0 1 1 2 2 2s2-1 2-2v10c0 1 1 2 2 2s2-1 2-2V9c0-2 3-2 3 0v5c0 3-2 5-5 5",
  ],
  libra: [
    "M4 21h16",
    "M4 18h5a3 3 0 0 1 6 0h5",
  ],
  scorpio: [
    "M4 5v10c0 1 1 2 2 2s2-1 2-2V5c0 1 1 2 2 2s2-1 2-2v10c0 1 1 2 2 2s2-1 2-2v4l3-3m-3 3l-3-3",
  ],
  sagittarius: [
    "M5 19l14-14",
    "M12 5h7v7",
    "M7 12l5 5",
  ],
  capricorn: [
    "M4 5v12c0 1 1 2 2 2s2-1 2-2V5l4 14c1 2 4 2 4 0 0-2-2-4-4-4",
  ],
  aquarius: [
    "M4 9l3-3 3 3 3-3 3 3 3-3",
    "M4 17l3-3 3 3 3-3 3 3 3-3",
  ],
  pisces: [
    "M5 4a14 14 0 0 1 0 16",
    "M19 4a14 14 0 0 0 0 16",
    "M4 12h16",
  ],
};

function ZodiacIcon({ icon, label }: { icon: string; label: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="zodiac-glyph-svg"
      role="img"
      aria-label={label}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {zodiacIconPaths[icon].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

function CourseIcon({ icon, label }: { icon: string; label: string }) {
  switch (icon) {
    case "zodiac-wheel":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <circle cx="12" cy="12" r="8.5" className="academy-icon-stroke" />
          <circle cx="12" cy="12" r="4.25" className="academy-icon-stroke academy-icon-fade" />
          <path d="M12 3.5v17M3.5 12h17M6.2 6.2l11.6 11.6M17.8 6.2L6.2 17.8" className="academy-icon-stroke academy-icon-fade" />
          <circle cx="12" cy="12" r="1.25" className="academy-icon-fill" />
        </svg>
      );
    case "numerology":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <path d="M12 3l2.6 5.4L21 9.2l-4.6 4.2 1.2 6.4L12 17l-5.6 2.8 1.2-6.4L3 9.2l6.4-.8L12 3Z" className="academy-icon-stroke" />
          <path d="M9.35 14.2c1.1-1.3 2.3-2.65 5.3-5.45" className="academy-icon-stroke academy-icon-fade" />
          <path d="M9.2 9.5h2.5v5.3" className="academy-icon-stroke" />
        </svg>
      );
    case "tarot-card":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <rect x="5" y="3.5" width="14" height="17" rx="2.5" className="academy-icon-stroke" />
          <path d="M12 7.5l1.35 2.7 3 .45-2.15 2.1.5 3-2.7-1.45-2.7 1.45.5-3-2.15-2.1 3-.45L12 7.5Z" className="academy-icon-stroke academy-icon-fade" />
          <path d="M8.2 18h7.6" className="academy-icon-stroke academy-icon-fade" />
        </svg>
      );
    case "vastu-grid":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <rect x="4" y="4" width="16" height="16" rx="1.5" className="academy-icon-stroke" />
          <path d="M9.33 4v16M14.67 4v16M4 9.33h16M4 14.67h16" className="academy-icon-stroke academy-icon-fade" />
          <path d="M4 4l16 16M20 4L4 20" className="academy-icon-stroke academy-icon-fade" />
        </svg>
      );
    case "lotus-healing":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <path d="M12 7.2c1.5-2 3.1-2.95 4.8-3.2.1 2.55-.8 4.65-2.9 6.05" className="academy-icon-stroke" />
          <path d="M12 7.2c-1.5-2-3.1-2.95-4.8-3.2-.1 2.55.8 4.65 2.9 6.05" className="academy-icon-stroke" />
          <path d="M12 8.1c2.45-1.35 4.95-.95 6.8.85-1.55 2.25-3.8 3.35-6.8 3.35-3 0-5.25-1.1-6.8-3.35 1.85-1.8 4.35-2.2 6.8-.85Z" className="academy-icon-stroke academy-icon-fade" />
          <path d="M8 15.4c1.05 1.65 2.4 2.6 4 2.6s2.95-.95 4-2.6" className="academy-icon-stroke" />
          <path d="M12 12.3v5.7" className="academy-icon-stroke academy-icon-fade" />
        </svg>
      );
    case "structured-learning":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <rect x="4" y="5" width="16" height="14" rx="2.5" className="academy-icon-stroke" />
          <path d="M8 9h8M8 12h8M8 15h5" className="academy-icon-stroke academy-icon-fade" />
        </svg>
      );
    case "live-workshops":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <rect x="4" y="6" width="10" height="12" rx="2" className="academy-icon-stroke" />
          <path d="M14 10l5-2v8l-5-2z" className="academy-icon-stroke academy-icon-fade" />
        </svg>
      );
    case "certification":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <circle cx="12" cy="10" r="5" className="academy-icon-stroke" />
          <path d="M10 14.5l-1 5 3-1.7 3 1.7-1-5" className="academy-icon-stroke academy-icon-fade" />
          <path d="M10.2 10.2l1.2 1.2 2.5-2.5" className="academy-icon-stroke" />
        </svg>
      );
    case "mentorship":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label={label} fill="none">
          <circle cx="9" cy="9" r="3" className="academy-icon-stroke" />
          <circle cx="16.5" cy="10.5" r="2.5" className="academy-icon-stroke academy-icon-fade" />
          <path d="M4.5 18c.9-2.65 2.8-4 5.7-4s4.8 1.35 5.7 4" className="academy-icon-stroke" />
          <path d="M14.5 18c.45-1.55 1.65-2.35 3.6-2.35 1 0 1.8.2 2.4.65" className="academy-icon-stroke academy-icon-fade" />
        </svg>
      );
    default:
      return null;
  }
}
const testimonials = [
  {
    name: "Amit Sharma",
    role: "Software Engineer, Delhi",
    review:
      "VedAstraa helped me understand my career path through detailed birth chart analysis. The guidance was extremely accurate and transformative.",
    avatar: "AS",
  },
  {
    name: "Priya Mehta",
    role: "Entrepreneur, Mumbai",
    review:
      "The tarot reading gave me clarity during a difficult time. The astrologer was deeply insightful, compassionate, and professional.",
    avatar: "PM",
  },
  {
    name: "Rahul Verma",
    role: "Business Owner, Pune",
    review:
      "I purchased a gemstone recommended by my astrologer and noticed genuinely positive changes within weeks. Truly remarkable.",
    avatar: "RV",
  },
  {
    name: "Sunita Rao",
    role: "Teacher, Bangalore",
    review:
      "The Kundli matching service was thorough and gave us both families complete confidence before the wedding. Grateful.",
    avatar: "SR",
  },
  {
    name: "Vikram Nair",
    role: "Doctor, Chennai",
    review:
      "Skeptical at first, but the numerology report was shockingly accurate about my personality and life patterns. Mind-opening.",
    avatar: "VN",
  },
  {
    name: "Deepa Iyer",
    role: "Yoga Instructor, Mysore",
    review:
      "The Reiki healing course changed how I work with energy. The curriculum is structured beautifully - truly a sacred experience.",
    avatar: "DI",
  },
  {
    name: "Arjun Kapoor",
    role: "Architect, Hyderabad",
    review:
      "Vastu consultation transformed my office space. Productivity improved noticeably. I recommend this to every business owner.",
    avatar: "AK",
  },
  {
    name: "Meera Pillai",
    role: "Writer, Kochi",
    review:
      "Daily horoscopes feel personal, not generic. The moon sign insights are eerily accurate. VedAstraa is now part of my morning routine.",
    avatar: "MP",
  },
  {
    name: "Rohan Desai",
    role: "Finance Manager, Ahmedabad",
    review:
      "The birth chart calculator is the most detailed free tool I have found. It rivals paid readings from other platforms.",
    avatar: "RD",
  },
  {
    name: "Ananya Krishnan",
    role: "Student, Coimbatore",
    review:
      "Chose my career direction based on the astrology guidance. Two years later, I am exactly where I needed to be. Life-changing.",
    avatar: "AK",
  },
];

const row1 = testimonials.slice(0, 5);
const row2 = testimonials.slice(5, 10);

const howItWorksSteps = [
  {
    step: "Step 1",
    title: "Create Your Birth Profile",
    description:
      "Enter your birth details to generate your personalized astrology dashboard.",
    image: "https://threemoonmagic.com/cdn/shop/products/A4MOCKPURPLE.jpg?v=1655549128&width=1946"
  },
  {
    step: "Step 2",
    title: "Explore Insights",
    description:
      "Receive daily predictions, remedies, and spiritual guidance.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUgAY_PgC66A7E4e4uM1KWgvxfNaiA8HltIblxQ36yOEVeipEtAO621Z6n67RduSHMYoYX2P5I0pSkokMuYq03M_tYkpjii46KFED97ScwTi0pKwkzt_GopSecsEkIJE3n7ZVK/s1600/fortune-teller-2.jpeg"
  },
  {
    step: "Step 3",
    title: "Consult Experts",
    description:
      "Book chat, call, or video sessions with verified astrologers.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "Step 4",
    title: "Enhance Your Journey",
    description:
      "Purchase recommended gemstones or enroll in spiritual courses.",
    image: "https://thumbs.dreamstime.com/b/celestial-compass-stunning-galaxy-symbolic-fantasy-journey-astrology-beyond-352993406.jpg"
  },
];

const footerColumns = [
  {
    title: "VedAstraa",
    links: ["About Us", "Our Mission", "Blog", "Careers"],
  },
  {
    title: "Services",
    links: [
      "Vedic Astrology",
      "Numerology",
      "Tarot Reading",
      "Vastu Consultation",
      "Energy Healing",
    ],
  },
  {
    title: "Courses",
    links: [
      "Ved Astra Astrology Course",
      "Numerology Courses",
      "Ved Astra Tarot Master Course",
      "Vastu Course",
      "Ved Astra Reiki Healing Master Program",
      "21-Day Meditation Master Course",
    ],
  },
  {
    title: "Support",
    links: [
      "Contact Us",
      "FAQs",
      "Refund Policy",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
  {
    title: "Connect",
    links: ["Instagram", "YouTube", "Facebook"],
  },
];

function PinkZodiacWheel() {
  return (
    <svg className='relative z-1 w-full h-full block' viewBox='0 0 500 500' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <filter id='heroGlow' x='-40%' y='-40%' width='180%' height='180%'>
          <feGaussianBlur stdDeviation='7' result='blur' />
          <feComposite in='SourceGraphic' in2='blur' operator='over' />
        </filter>
        <filter id='heroSoftGlow' x='-50%' y='-50%' width='200%' height='200%'>
          <feGaussianBlur stdDeviation='12' result='blur' />
          <feColorMatrix
            in='blur'
            type='matrix'
            values='1 0 0 0 0  0 0.75 0 0 0  0 0 1 0 0  0 0 0 0.65 0'
          />
        </filter>
        <radialGradient id='heroZodiacGlow' cx='50%' cy='50%' r='60%'>
          <stop offset='0%' stopColor='#ffffff' stopOpacity='0.12' />
          <stop offset='35%' stopColor='#7b6bb4' stopOpacity='0.14' />
          <stop offset='72%' stopColor='#5f4b9a' stopOpacity='0.16' />
          <stop offset='100%' stopColor='#0d0717' stopOpacity='0' />
        </radialGradient>
        <radialGradient id='heroWheelFill' cx='50%' cy='50%' r='70%'>
          <stop offset='0%' stopColor='#cfc8ee' stopOpacity='0.08' />
          <stop offset='24%' stopColor='#6f5ea8' stopOpacity='0.15' />
          <stop offset='60%' stopColor='#4f3b82' stopOpacity='0.24' />
          <stop offset='100%' stopColor='#211d49' stopOpacity='0.98' />
        </radialGradient>
        <linearGradient id='heroWheelStroke' x1='80' y1='40' x2='420' y2='460'>
          <stop offset='0%' stopColor='#ffffff' stopOpacity='0.95' />
          <stop offset='28%' stopColor='#9f92d1' stopOpacity='0.54' />
          <stop offset='62%' stopColor='#6a5aa4' stopOpacity='0.6' />
          <stop offset='100%' stopColor='#514284' stopOpacity='0.56' />
        </linearGradient>
        <linearGradient id='heroSectorGlow' x1='120' y1='95' x2='390' y2='405'>
          <stop offset='0%' stopColor='#c8c1e6' stopOpacity='0.08' />
          <stop offset='50%' stopColor='#665696' stopOpacity='0.08' />
          <stop offset='100%' stopColor='#4e4586' stopOpacity='0.14' />
        </linearGradient>
      </defs>

      <circle cx='250' cy='250' r='242' fill='url(#heroZodiacGlow)' className='zodiac-wheel-breathe' />
      <circle cx='250' cy='250' r='232' fill='url(#heroWheelFill)' stroke='rgba(211, 205, 236, 0.54)' strokeWidth='2.2' />
      <circle cx='250' cy='250' r='224' stroke='rgba(132, 118, 181, 0.18)' strokeWidth='1' />
      <circle cx='250' cy='250' r='214' stroke='rgba(95, 79, 146, 0.14)' strokeWidth='0.8' />

      <g className='rotate-slow'>
        {zodiacSigns.map((z, i) => {
          const startAngle = i * 30;
          const endAngle = startAngle + 30;
          const iconAngle = startAngle + 15;
          const iconPoint = wheelPolarPoint(168, iconAngle);
          const labelPoint = wheelPolarPoint(204, iconAngle);

          return (
            <g key={z.name}>
              <path
                d={describeWheelSector(96, 220, startAngle, endAngle)}
                fill={i % 2 === 0 ? 'url(#heroSectorGlow)' : 'rgba(255,255,255,0.035)'}
              />
              <path
                d={describeWheelArc(182, startAngle + 3, endAngle - 3)}
                stroke='rgba(157,146,209,0.12)'
                strokeWidth='14'
                strokeLinecap='round'
              />
              <g transform={`translate(${iconPoint.x}, ${iconPoint.y}) rotate(${iconAngle}) scale(2.15) translate(-12, -12)`}>
                {zodiacIconPaths[z.icon].map((d, idx) => (
                  <path
                    key={`${z.name}-path-${idx}`}
                    d={d}
                    stroke='url(#heroWheelStroke)'
                    strokeWidth='1.45'
                    fill='none'
                    filter='url(#heroGlow)'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                ))}
              </g>
              <text
                x={labelPoint.x}
                y={labelPoint.y}
                textAnchor='middle'
                dominantBaseline='middle'
                fontSize='10.5'
                fill='rgba(216,211,238,0.74)'
                letterSpacing='1.9'
              >
                {z.name.toUpperCase()}
              </text>
            </g>
          );
        })}
      </g>

      <g className='rotate-reverse zodiac-wheel-mid'>
        {Array.from({ length: 72 }).map((_, i) => {
          const angle = i * 5;
          const major = i % 6 === 0;
          const start = wheelPolarPoint(212, angle);
          const end = wheelPolarPoint(major ? 232 : 226, angle);
          return (
            <line
              key={`tick-${i}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={major ? 'rgba(214,209,235,0.42)' : 'rgba(106,90,164,0.18)'}
              strokeWidth={major ? 1.5 : 0.8}
              strokeLinecap='round'
            />
          );
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30;
          const inner = wheelPolarPoint(82, angle);
          const outer = wheelPolarPoint(220, angle);
          return (
            <line
              key={`divider-${i}`}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke='rgba(95,79,146,0.15)'
              strokeWidth='0.9'
            />
          );
        })}
        {[198, 156, 122, 96, 74].map((radius) => (
          <circle
            key={`ring-${radius}`}
            cx='250'
            cy='250'
            r={radius}
            stroke={radius === 156 ? 'url(#heroWheelStroke)' : 'rgba(95,79,146,0.18)'}
            strokeWidth={radius === 156 ? '1.4' : '0.9'}
          />
        ))}
        {Array.from({ length: 24 }).map((_, i) => {
          const point = wheelPolarPoint(139, i * 15);
          return (
            <circle
              key={`dot-${i}`}
              cx={point.x}
              cy={point.y}
              r={i % 2 === 0 ? '2.6' : '1.6'}
              fill={i % 2 === 0 ? 'rgba(223,218,241,0.54)' : 'rgba(110,95,166,0.42)'}
            />
          );
        })}
      </g>

      <g className='rotate-med zodiac-wheel-core'>
        <circle cx='250' cy='250' r='66' fill='rgba(37,31,74,0.68)' stroke='rgba(132,118,181,0.2)' strokeWidth='1' />
        <path
          d='M250 183 L272 228 L321 228 L282 257 L296 307 L250 279 L204 307 L218 257 L179 228 L228 228 Z'
          fill='rgba(85,72,138,0.16)'
          stroke='url(#heroWheelStroke)'
          strokeWidth='1.5'
          filter='url(#heroGlow)'
        />
        <path
          d='M250 199 L285 215 L301 250 L285 285 L250 301 L215 285 L199 250 L215 215 Z'
          fill='none'
          stroke='rgba(157,146,209,0.28)'
          strokeWidth='1'
        />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30;
          const start = wheelPolarPoint(18, angle);
          const end = wheelPolarPoint(58, angle);
          return (
            <line
              key={`ray-${i}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke='rgba(157,146,209,0.3)'
              strokeWidth='1'
            />
          );
        })}
        <circle cx='250' cy='250' r='34' fill='rgba(132,118,181,0.08)' stroke='rgba(157,146,209,0.28)' strokeWidth='1.2' />
        <circle cx='250' cy='250' r='9' fill='#fff' filter='url(#heroSoftGlow)' />
      </g>
    </svg>
  );
}

function ClassicZodiacWheel() {
  return (
    <svg className='relative z-1 w-full h-full block' viewBox='0 0 500 500' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <filter id='classicGlow' x='-30%' y='-30%' width='160%' height='160%'>
          <feGaussianBlur stdDeviation='6' result='blur' />
          <feComposite in='SourceGraphic' in2='blur' operator='over' />
        </filter>
        <radialGradient id='classicZodiacGradient' cx='50%' cy='50%' r='50%'>
          <stop offset='0%' stopColor='rgba(168, 85, 247, 0.3)' />
          <stop offset='60%' stopColor='rgba(236, 72, 153, 0.15)' />
          <stop offset='100%' stopColor='transparent' />
        </radialGradient>
      </defs>

      <circle cx='250' cy='250' r='240' fill='url(#classicZodiacGradient)' />

      <g className='rotate-slow'>
        <circle cx='250' cy='250' r='230' stroke='rgba(255, 255, 255, 0.4)' strokeWidth='1' />
        <circle cx='250' cy='250' r='222' stroke='rgba(255, 255, 255, 0.2)' strokeWidth='0.5' />
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = i * 10 * Math.PI / 180;
          const x1 = (250 + 222 * Math.cos(angle)).toFixed(2);
          const y1 = (250 + 222 * Math.sin(angle)).toFixed(2);
          const x2 = (250 + 230 * Math.cos(angle)).toFixed(2);
          const y2 = (250 + 230 * Math.sin(angle)).toFixed(2);
          return (
            <line
              key={`classic-tick-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke='rgba(255, 255, 255, 0.3)'
              strokeWidth='0.5'
            />
          );
        })}

        {zodiacSigns.map((z, i) => {
          const angle = (i * 30 - 90) * Math.PI / 180;
          const x1 = (250 + 100 * Math.cos(angle)).toFixed(2);
          const y1 = (250 + 100 * Math.sin(angle)).toFixed(2);
          const x2 = (250 + 222 * Math.cos(angle)).toFixed(2);
          const y2 = (250 + 222 * Math.sin(angle)).toFixed(2);
          const sx = (250 + 155 * Math.cos(angle + 15 * Math.PI / 180)).toFixed(2);
          const sy = (250 + 155 * Math.sin(angle + 15 * Math.PI / 180)).toFixed(2);
          const lx = (250 + 205 * Math.cos(angle + 15 * Math.PI / 180)).toFixed(2);
          const ly = (250 + 205 * Math.sin(angle + 15 * Math.PI / 180)).toFixed(2);

          return (
            <g key={z.name}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke='rgba(255, 255, 255, 0.15)' strokeWidth='0.5' />
              <g transform={`translate(${sx}, ${sy}) rotate(${i * 30}) scale(2) translate(-12, -12)`}>
                {zodiacIconPaths[z.icon].map((d, idx) => (
                  <path
                    key={`${z.name}-classic-path-${idx}`}
                    d={d}
                    stroke='white'
                    strokeWidth='1.5'
                    fill='none'
                    filter='url(#classicGlow)'
                  />
                ))}
              </g>
              <text
                x={lx}
                y={ly}
                textAnchor='middle'
                dominantBaseline='middle'
                fontSize='9'
                fill='rgba(255, 255, 255, 0.75)'
                letterSpacing='1.2'
                style={{ transform: `rotate(${i * 30}deg)`, transformOrigin: `${lx}px ${ly}px` }}
              >
                {z.name.toUpperCase()}
              </text>
            </g>
          );
        })}

        <circle cx='250' cy='250' r='100' stroke='rgba(255, 255, 255, 0.3)' strokeWidth='1' />
        <circle cx='250' cy='250' r='92' stroke='rgba(255, 255, 255, 0.1)' strokeWidth='0.5' />
      </g>

      <g className='rotate-med' filter='url(#classicGlow)'>
        <path
          d='M250 150 L280 220 L350 220 L295 265 L315 335 L250 290 L185 335 L205 265 L150 220 L220 220 Z'
          fill='none'
          stroke='rgba(251, 191, 36, 0.8)'
          strokeWidth='1.5'
        />
        <circle cx='250' cy='250' r='50' stroke='rgba(251, 191, 36, 0.4)' strokeWidth='1' />
        <circle cx='250' cy='250' r='5' fill='#fbbf24' />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = i * 45 * Math.PI / 180;
          return (
            <line
              key={`classic-star-ray-${i}`}
              x1={250 + 5 * Math.cos(a)}
              y1={250 + 5 * Math.sin(a)}
              x2={250 + 45 * Math.cos(a)}
              y2={250 + 45 * Math.sin(a)}
              stroke='rgba(251, 191, 36, 0.6)'
              strokeWidth='1'
            />
          );
        })}
      </g>
    </svg>
  );
}
export default function Home() {
  return (
    <>
      <section
        className="relative isolate flex flex-col justify-center overflow-hidden min-h-[100svh] px-8 pt-36 pb-16
          min-[1400px]:pt-40
          min-[901px]:max-[1199px]:px-8 min-[901px]:max-[1199px]:pt-32 min-[901px]:max-[1199px]:pb-12
          min-[601px]:max-[900px]:px-8 min-[601px]:max-[900px]:pt-28 min-[601px]:max-[900px]:pb-12 min-[601px]:max-[900px]:justify-start
          max-[600px]:px-5 max-[600px]:pt-26 max-[600px]:pb-14 max-[600px]:justify-start
          max-[380px]:px-4 max-[380px]:pt-24 max-[380px]:pb-12"
      >
          <div className="absolute inset-0 z-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:z-0 before:pointer-events-none before:[background:radial-gradient(ellipse_65%_55%_at_68%_48%,rgba(88,28,135,0.32)_0%,rgba(49,14,90,0.2)_38%,transparent_70%),radial-gradient(ellipse_45%_40%_at_25%_50%,rgba(30,12,68,0.28)_0%,transparent_65%),radial-gradient(ellipse_100%_80%_at_50%_100%,rgba(5,2,18,0.9)_0%,transparent_60%)]" />
          <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(ellipse_110%_110%_at_50%_50%,transparent_38%,rgba(2,1,10,0.55)_72%,rgba(2,1,10,0.85)_100%)]" />
          <div className="absolute inset-0 z-0 pointer-events-none [background-image:radial-gradient(circle_1px_at_8%_12%,rgba(255,255,255,0.55)_0%,transparent_100%),radial-gradient(circle_1px_at_18%_78%,rgba(255,255,255,0.4)_0%,transparent_100%),radial-gradient(circle_1.5px_at_26%_9%,rgba(255,255,255,0.65)_0%,transparent_100%),radial-gradient(circle_1px_at_35%_55%,rgba(255,255,255,0.35)_0%,transparent_100%),radial-gradient(circle_1px_at_42%_88%,rgba(255,255,255,0.45)_0%,transparent_100%),radial-gradient(circle_1.5px_at_55%_22%,rgba(255,255,255,0.6)_0%,transparent_100%),radial-gradient(circle_1px_at_63%_67%,rgba(255,255,255,0.38)_0%,transparent_100%),radial-gradient(circle_1px_at_72%_14%,rgba(255,255,255,0.5)_0%,transparent_100%),radial-gradient(circle_1.5px_at_80%_44%,rgba(255,255,255,0.58)_0%,transparent_100%),radial-gradient(circle_1px_at_88%_82%,rgba(255,255,255,0.42)_0%,transparent_100%),radial-gradient(circle_1px_at_94%_33%,rgba(255,255,255,0.48)_0%,transparent_100%),radial-gradient(circle_1px_at_12%_42%,rgba(212,175,55,0.4)_0%,transparent_100%),radial-gradient(circle_1px_at_78%_68%,rgba(212,175,55,0.35)_0%,transparent_100%),radial-gradient(circle_1px_at_48%_95%,rgba(212,175,55,0.3)_0%,transparent_100%)] motion-reduce:animate-none animate-[starDriftBack_80s_linear_infinite]" />
          <div className="absolute inset-0 z-0 pointer-events-none opacity-85 [background-image:radial-gradient(circle_1.5px_at_15%_35%,rgba(255,255,255,0.7)_0%,transparent_100%),radial-gradient(circle_1px_at_33%_18%,rgba(255,255,255,0.55)_0%,transparent_100%),radial-gradient(circle_2px_at_52%_72%,rgba(255,255,255,0.65)_0%,transparent_100%),radial-gradient(circle_1.5px_at_68%_28%,rgba(255,255,255,0.6)_0%,transparent_100%),radial-gradient(circle_1px_at_85%_58%,rgba(255,255,255,0.5)_0%,transparent_100%),radial-gradient(circle_1.5px_at_22%_62%,rgba(168,85,247,0.5)_0%,transparent_100%),radial-gradient(circle_1px_at_75%_15%,rgba(168,85,247,0.4)_0%,transparent_100%)] motion-reduce:animate-none animate-[starDriftFront_55s_linear_infinite]" />
          <div className="absolute rounded-full pointer-events-none z-1 blur-[60px] w-[520px] h-[320px] -top-[60px] -left-[80px] bg-[radial-gradient(ellipse,rgba(88,28,135,0.22)_0%,transparent_70%)] motion-reduce:animate-none animate-[dustDrift_22s_ease-in-out_infinite] max-[600px]:w-[280px] max-[600px]:h-[180px] max-[600px]:blur-[40px]" />
          <div className="absolute rounded-full pointer-events-none z-1 blur-[60px] w-[420px] h-[280px] -bottom-[40px] right-[15%] bg-[radial-gradient(ellipse,rgba(212,175,55,0.08)_0%,transparent_70%)] motion-reduce:animate-none animate-[dustDrift_28s_ease-in-out_8s_infinite_reverse] max-[600px]:w-[220px] max-[600px]:h-[160px] max-[600px]:blur-[40px]" />
          <div className="absolute top-0 bottom-0 left-0 w-[320px] pointer-events-none z-1 bg-[linear-gradient(to_right,rgba(49,14,90,0.18)_0%,transparent_100%)] max-[600px]:w-[160px]" />
          <div className="absolute top-0 bottom-0 right-0 w-[320px] pointer-events-none z-1 bg-[linear-gradient(to_left,rgba(49,14,90,0.12)_0%,transparent_100%)] max-[600px]:w-[160px]" />

          <section
            className="relative z-2 grid items-center gap-8 max-w-[1400px] mx-auto w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
              min-[1400px]:grid-cols-[1fr_minmax(0,0.9fr)]
              min-[601px]:max-[900px]:grid-cols-1 min-[601px]:max-[900px]:gap-0 min-[601px]:max-[900px]:relative
              max-[600px]:grid-cols-1 max-[600px]:gap-0"
          >
            <div className="flex flex-col items-start gap-0 pr-[clamp(0rem,3vw,3rem)] min-[601px]:max-[900px]:relative min-[601px]:max-[900px]:z-2 min-[601px]:max-[900px]:pr-0 min-[601px]:max-[900px]:pt-8 max-[600px]:items-center max-[600px]:text-center max-[600px]:pr-0">
              <p className="inline-flex items-center gap-[10px] text-[0.62rem] font-bold tracking-[0.22em] uppercase text-[rgba(212,175,55,0.82)] mb-6 max-[600px]:text-[0.58rem] max-[600px]:tracking-[0.18em] before:content-[''] before:block before:w-7 before:h-px before:[background:linear-gradient(to_right,transparent,rgba(212,175,55,0.55))] after:content-[''] after:block after:w-7 after:h-px after:[background:linear-gradient(to_left,transparent,rgba(212,175,55,0.55))]">Ancient insight, modern guidance</p>
              <h1 className="font-playfair text-[clamp(3rem,4.8vw,5.2rem)] font-bold leading-[1.04] tracking-[-0.02em] mb-7 [background-image:linear-gradient(148deg,#f8f0dc_0%,#e4c97a_28%,#c8a84b_52%,#e8d490_72%,#f0e8d0_100%)] bg-clip-text text-transparent
                min-[901px]:max-[1199px]:text-[clamp(2.4rem,4.2vw,3.8rem)]
                min-[601px]:max-[900px]:text-[clamp(2.6rem,8vw,4rem)]
                max-[600px]:text-[clamp(2.2rem,10vw,3.2rem)] max-[600px]:mb-5 max-[600px]:tracking-[-0.015em] max-[600px]:[hyphens:none] max-[600px]:[&_br]:hidden
                max-[380px]:text-[clamp(1.9rem,11vw,2.6rem)]">Discover <br /> Your Destiny Through Ancient <br /> Wisdom</h1>
              <p className="font-roboto text-[clamp(0.88rem,1.1vw,1rem)] leading-[1.78] text-[rgba(225,210,175,0.62)] max-w-[48ch] mb-10
                min-[601px]:max-[900px]:max-w-[54ch]
                max-[600px]:text-[0.875rem] max-[600px]:max-w-[38ch] max-[600px]:text-center max-[600px]:mb-8 max-[600px]:text-[rgba(220,205,175,0.6)] max-[600px]:leading-[1.72]">
                VedAstraa combines the timeless sciences of Vedic Astrology,
                Numerology, Tarot, and Vastu with modern technology to deliver
                accurate guidance, personalized consultations, and authentic
                spiritual products.
              </p>
              <div className="flex items-center gap-[14px] flex-wrap max-[600px]:flex-col max-[600px]:w-full max-[600px]:gap-3 max-[600px]:items-stretch">
                <a href="#" className="btn btn-primary relative overflow-hidden px-8 py-[0.9rem] text-[0.75rem] tracking-[0.12em] shadow-[0_0_0_1px_rgba(212,175,55,0.35),0_4px_18px_rgba(212,175,55,0.22),0_10px_36px_rgba(212,175,55,0.12)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-[3px] hover:shadow-[0_0_0_1px_rgba(212,175,55,0.55),0_6px_26px_rgba(212,175,55,0.38),0_18px_52px_rgba(212,175,55,0.18)] after:content-[''] after:absolute after:top-0 after:-left-full after:w-[55%] after:h-full after:[background:linear-gradient(105deg,transparent,rgba(255,255,255,0.18),transparent)] after:transition-[left] after:duration-[550ms] after:ease-linear after:pointer-events-none hover:after:left-[150%] max-[600px]:w-full max-[600px]:justify-center max-[600px]:text-center max-[600px]:px-6 max-[600px]:py-4 max-[600px]:hover:translate-y-0">
                  Get Your Free Birth Chart
                </a>
                <a href="#" className="btn btn-secondary px-8 py-[0.9rem] text-[0.75rem] tracking-[0.12em] bg-white/[0.03] border border-white/[0.14] text-[rgba(235,220,195,0.78)] backdrop-blur-[8px] transition-[background,border-color,color,transform] duration-300 hover:duration-[320ms] hover:ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/[0.07] hover:border-[rgba(212,175,55,0.38)] hover:text-[#f0e6d0] hover:-translate-y-[3px] max-[600px]:w-full max-[600px]:justify-center max-[600px]:text-center max-[600px]:px-6 max-[600px]:py-4 max-[600px]:hover:translate-y-0">
                  Consult an Expert
                </a>
              </div>
            </div>

            <div
              className="flex items-center justify-center relative
                min-[601px]:max-[900px]:absolute min-[601px]:max-[900px]:-top-12 min-[601px]:max-[900px]:right-[-6vw] min-[601px]:max-[900px]:opacity-35 min-[601px]:max-[900px]:pointer-events-none min-[601px]:max-[900px]:z-0
                max-[600px]:order-[-1] max-[600px]:w-full max-[600px]:justify-center max-[600px]:-mb-6 max-[600px]:pointer-events-none"
              aria-hidden='true'
            >
            </div>

          </section>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-3 flex flex-col items-center gap-2 opacity-45 motion-reduce:animate-none animate-[scrollHintFade_3s_ease-in-out_2s_infinite] max-[600px]:hidden" aria-hidden="true">
            <div className="relative flex justify-center pt-[5px] w-[18px] h-7 border border-[rgba(212,175,55,0.4)] rounded-[10px] before:content-[''] before:w-0.5 before:h-[5px] before:[background:rgba(212,175,55,0.7)] before:rounded-[1px] before:motion-reduce:animate-none before:animate-[mouseScroll_2s_ease-in-out_infinite]" />
            <span className="text-[0.58rem] tracking-[0.22em] uppercase text-[rgba(212,175,55,0.8)]">Scroll</span>
          </div>

        </section>

      <section className="py-20 max-[768px]:after:content-[''] max-[768px]:after:block max-[768px]:after:relative max-[768px]:after:z-[3] max-[768px]:after:w-12 max-[768px]:after:h-1 max-[768px]:after:mx-auto max-[768px]:after:-mt-7 max-[768px]:after:rounded-sm max-[768px]:after:bg-[rgba(212,175,55,0.3)]">
          <div className="relative z-2 max-w-[1200px] mx-auto px-6 max-[768px]:px-0">
            <FadeIn>
              <p className="text-center text-[clamp(1.15rem,2.5vw,1.55rem)] font-semibold text-[#e8d5a3] tracking-[0.02em] leading-[1.55] m-0 mb-12 max-[768px]:px-5 max-[768px]:mb-8">
                Trusted by thousands seeking clarity and spiritual guidance
              </p>
            </FadeIn>
            <div className="grid grid-cols-4 gap-5 min-[769px]:max-[1064px]:grid-cols-2
                max-[768px]:flex max-[768px]:flex-row max-[768px]:overflow-x-scroll max-[768px]:gap-3.5 max-[768px]:pt-4 max-[768px]:pb-10 max-[768px]:px-[14vw]
                max-[768px]:[scroll-snap-type:x_mandatory] max-[768px]:[-webkit-overflow-scrolling:touch] max-[768px]:[scrollbar-width:none] max-[768px]:[-ms-overflow-style:none] max-[768px]:[&::-webkit-scrollbar]:hidden
                max-[768px]:[perspective:1100px] max-[768px]:[perspective-origin:50%_50%] max-[768px]:[scroll-behavior:smooth]
                max-[768px]:after:content-[''] max-[768px]:after:flex-[0_0_14vw] max-[768px]:after:pointer-events-none">
              {trustItems.map((item) => (
                <FadeIn
                  key={item.title}
                  className="max-[768px]:[scroll-snap-align:center] max-[768px]:flex-[0_0_72vw] max-[768px]:max-w-[290px] max-[768px]:[transform-origin:center_center]
                    max-[768px]:[animation:skiper-enter_linear_both,skiper-exit_linear_both] max-[768px]:[animation-timeline:view(inline),view(inline)] max-[768px]:[animation-range:entry_0%_entry_60%,exit_40%_exit_100%]"
                >
                  <article className="group relative rounded-[18px] overflow-hidden min-h-[340px] cursor-default border border-white/[0.07]
                      shadow-[0_2px_12px_rgba(0,0,0,0.4),0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]
                      transition-[transform,box-shadow,border-color] duration-[380ms] ease-[cubic-bezier(0.23,1,0.32,1)]
                      hover:-translate-y-2 hover:scale-[1.01] hover:border-[rgba(212,175,55,0.25)]
                      hover:shadow-[0_4px_16px_rgba(0,0,0,0.5),0_20px_56px_rgba(0,0,0,0.6),0_0_0_1px_rgba(212,175,55,0.12),inset_0_1px_0_rgba(255,255,255,0.1)]
                      max-[768px]:min-h-[300px] max-[768px]:w-full max-[768px]:transition-shadow max-[768px]:duration-300 max-[768px]:hover:translate-y-0 max-[768px]:hover:scale-100">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[550ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.07] max-[768px]:group-hover:scale-100"
                      style={{ backgroundImage: `url(${item.image})` }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 z-1 rounded-[inherit] pointer-events-none [background:radial-gradient(ellipse_at_50%_100%,rgba(6,4,18,0.82)_0%,transparent_75%),linear-gradient(to_top,rgba(6,4,18,0.97)_0%,rgba(6,4,18,0.65)_45%,rgba(6,4,18,0.1)_100%)]" aria-hidden="true" />
                    <div className="relative z-2 flex flex-col justify-end min-h-[340px] p-[24px_22px] box-border">
                      <div className="inline-flex items-center justify-center w-[46px] h-[46px] rounded-xl bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.38)] text-[#d4af37] text-[0.62rem] font-extrabold tracking-[0.08em] mb-3.5 backdrop-blur-[10px] [backdrop-filter:blur(10px)_saturate(1.4)] self-start shrink-0 shadow-[inset_0_1px_0_rgba(212,175,55,0.15),0_2px_8px_rgba(0,0,0,0.3)]" aria-hidden="true">
                        {item.icon}
                      </div>
                      <h3 className="m-0 mb-2 text-[1.05rem] font-bold text-[#f5ead8] tracking-[0.015em] leading-[1.3] [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">{item.title}</h3>
                      <p className="m-0 text-[0.82rem] text-[rgba(232,213,163,0.7)] leading-[1.65]">{item.description}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

      <section className="relative py-[100px] pb-[120px] overflow-hidden max-[768px]:py-16 max-[768px]:pb-20">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <span className="block absolute -inset-[20%] [background:radial-gradient(ellipse_80%_50%_at_15%_40%,rgba(88,28,135,0.22)_0%,transparent_60%),radial-gradient(ellipse_60%_40%_at_85%_60%,rgba(55,20,100,0.18)_0%,transparent_55%),radial-gradient(ellipse_100%_60%_at_50%_100%,rgba(15,10,40,0.55)_0%,transparent_70%)] [animation:cloudDrift_18s_ease-in-out_infinite_alternate]" />
          </div>
          <div className="relative z-1 max-w-[1200px] mx-auto px-6 max-[768px]:px-4">
            <p className="text-center text-[0.72rem] font-bold tracking-[0.22em] uppercase text-[#d4af37] m-0 mb-3.5 opacity-90">Our Services</p>
            <h2 className="text-center text-[clamp(1.65rem,3.5vw,2.4rem)] font-bold leading-[1.25] m-0 mb-5 [background:linear-gradient(135deg,#d4af37_0%,#f5ead8_45%,#b8965a_100%)] [background-clip:text] [-webkit-background-clip:text] text-transparent">
              Spiritual Guidance for Every Aspect of Life
            </h2>
            <p className="text-center max-w-[640px] mx-auto mb-14 max-[768px]:mb-9 text-[clamp(0.9rem,1.6vw,1rem)] max-[768px]:text-[0.9rem] text-[rgba(220,205,175,0.72)] leading-[1.75]">
              VedAstraa offers expert consultations across multiple spiritual
              sciences to help you navigate life&apos;s important decisions with
              clarity and confidence.
            </p>

            <div className="grid grid-cols-3 gap-6 min-[769px]:max-[1064px]:grid-cols-2 min-[769px]:max-[1064px]:gap-5 max-[768px]:grid-cols-1 max-[768px]:gap-4
                [&>article:last-child:nth-child(odd)]:min-[769px]:max-[1064px]:[grid-column:1/-1] [&>article:last-child:nth-child(odd)]:min-[769px]:max-[1064px]:max-w-[520px] [&>article:last-child:nth-child(odd)]:min-[769px]:max-[1064px]:mx-auto [&>article:last-child:nth-child(odd)]:min-[769px]:max-[1064px]:w-full">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative flex flex-col rounded-[20px] overflow-hidden [background:linear-gradient(160deg,rgba(28,22,62,0.88)_0%,rgba(18,14,45,0.96)_100%)] border border-white/[0.07]
                    shadow-[0_2px_0_rgba(212,175,55,0.06),0_4px_20px_rgba(0,0,0,0.45),0_16px_48px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)]
                    transition-[transform,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)]
                    hover:-translate-y-2 hover:border-[rgba(212,175,55,0.22)]
                    hover:shadow-[0_0_0_1px_rgba(212,175,55,0.14),0_8px_32px_rgba(0,0,0,0.55),0_24px_64px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]
                    max-[768px]:hover:translate-y-0"
                >
                  <div
                    className="relative w-full h-[210px] max-[768px]:h-[200px] max-[400px]:h-[175px] bg-cover bg-center shrink-0 grayscale contrast-[1.05] brightness-90
                      transition-[filter,transform] duration-[450ms,550ms] ease-[ease,cubic-bezier(0.23,1,0.32,1)]
                      group-hover:grayscale-[60%] group-hover:contrast-[1.1] group-hover:brightness-95 group-hover:scale-[1.04]
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[72px] after:[background:linear-gradient(to_bottom,transparent_0%,rgba(18,14,45,0.96)_100%)] after:pointer-events-none"
                    style={{ backgroundImage: `url(${service.image})` }}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col flex-1 p-6 pb-7 max-[400px]:p-[18px] max-[400px]:pb-[22px]">
                    <h3 className="m-0 mb-3 text-[1.15rem] max-[768px]:text-[1.1rem] font-bold leading-[1.3] tracking-[0.01em] [background:linear-gradient(90deg,#d4af37_0%,#f5ead8_55%)] [background-clip:text] [-webkit-background-clip:text] text-transparent">{service.title}</h3>
                    <p className="m-0 mb-6 text-[0.875rem] text-[rgba(210,195,165,0.72)] leading-[1.7] flex-1">{service.description}</p>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center self-start max-[768px]:self-stretch max-[768px]:justify-center mt-auto px-[22px] py-2.5 text-[0.72rem] font-bold tracking-[0.14em] uppercase no-underline text-[#e8d5a3] bg-transparent border border-[rgba(212,175,55,0.4)] rounded-md cursor-pointer whitespace-nowrap
                        transition-[background,border-color,color,box-shadow,transform] duration-300 ease-[ease,ease,ease,ease,ease]
                        hover:bg-[rgba(212,175,55,0.1)] hover:border-[rgba(212,175,55,0.75)] hover:text-[#f5ead8] hover:shadow-[0_0_12px_rgba(212,175,55,0.15),inset_0_1px_0_rgba(212,175,55,0.1)] hover:translate-x-[3px]"
                    >
                      {service.button}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      <section className="relative py-[100px] pb-[110px] overflow-hidden max-[768px]:py-16 max-[768px]:pb-[72px]
          before:content-[''] before:absolute before:inset-0 before:z-0 before:pointer-events-none
          before:[background:radial-gradient(ellipse_55%_60%_at_15%_50%,rgba(88,28,135,0.2)_0%,transparent_65%),radial-gradient(ellipse_40%_50%_at_85%_50%,rgba(55,20,100,0.14)_0%,transparent_60%)]" id="consult-experts">
          <div className="section-shell relative z-1">
            <div className="grid grid-cols-2 gap-16 items-center min-[769px]:max-[1064px]:gap-9 max-[768px]:grid-cols-1 max-[768px]:gap-10">
              <div className="flex items-center justify-center relative order-1" aria-hidden="true">
                <div className="relative w-[min(460px,100%)] aspect-square [filter:drop-shadow(0_0_40px_rgba(168,85,247,0.28))_drop-shadow(0_0_80px_rgba(212,175,55,0.08))]
                    min-[769px]:max-[1064px]:w-[min(360px,100%)] max-[768px]:w-[min(280px,80vw)] max-[768px]:[filter:drop-shadow(0_0_24px_rgba(168,85,247,0.22))]">
                  <ClassicZodiacWheel />
                </div>
              </div>

              <div className="flex flex-col gap-10 max-[768px]:order-2 max-[768px]:gap-7">
                <div className="flex flex-col max-[768px]:text-center max-[768px]:items-center">
                  <p className="section-kicker">Consult Verified Experts</p>
                  <h2 className="section-title">Connect With Verified Astrologers</h2>
                  <p className="section-body">
                    Our experts are carefully vetted to ensure experience,
                    authenticity, and accurate guidance. Choose from astrologers,
                    numerologists, tarot readers, and Vastu consultants.
                  </p>
                  <ul className="list-none p-0 m-0 mb-8 flex flex-col gap-2.5 max-[768px]:items-start max-[768px]:w-fit max-[768px]:mx-auto max-[768px]:mb-7">
                    {consultationModes.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[0.75rem] font-bold tracking-[0.16em] uppercase text-[rgba(232,213,163,0.85)]
                          before:content-[''] before:inline-block before:w-[7px] before:h-[7px] before:bg-[#d4af37] before:rounded-[1px] before:rotate-45 before:shrink-0 before:shadow-[0_0_6px_rgba(212,175,55,0.55)]">{item}</li>
                    ))}
                  </ul>
                  <a href="#" className="btn btn-primary self-start max-[768px]:self-stretch max-[768px]:text-center max-[768px]:justify-center max-[768px]:w-full">
                    Browse Astrologers
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3 max-[768px]:gap-2.5 max-[420px]:grid-cols-1 max-[420px]:gap-2">
                  {[
                    { label: "Astrology", title: "Birth Charts" },
                    { label: "Tarot", title: "Guided Readings" },
                    { label: "Vastu", title: "Space Harmony" },
                    { label: "Numerology", title: "Life Path Insights" },
                  ].map((card) => (
                    <div
                      key={card.label}
                      className="group flex flex-col gap-1.5 p-[18px_20px] rounded-[14px] [background:linear-gradient(135deg,rgba(38,28,80,0.75)_0%,rgba(22,16,55,0.88)_100%)] border border-white/[0.06]
                        shadow-[0_2px_12px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.04)] cursor-default
                        transition-[border-color,box-shadow,transform,background] duration-[350ms] ease-[cubic-bezier(0.23,1,0.32,1)]
                        hover:border-[rgba(212,175,55,0.28)] hover:-translate-y-[3px] hover:[background:linear-gradient(135deg,rgba(48,35,95,0.85)_0%,rgba(28,20,65,0.95)_100%)] hover:shadow-[0_0_0_1px_rgba(212,175,55,0.1),0_8px_28px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.07)]
                        min-[769px]:max-[1064px]:p-[14px_16px] max-[768px]:p-[14px_14px] max-[768px]:hover:translate-y-0
                        max-[420px]:flex-row max-[420px]:items-center max-[420px]:gap-3.5 max-[420px]:p-[14px_16px]"
                    >
                      <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#d4af37] opacity-85 max-[420px]:block">{card.label}</span>
                      <strong className="text-[0.95rem] font-bold text-[#f0e6d0] tracking-[0.01em] leading-[1.3] max-[768px]:text-[0.88rem] max-[420px]:block">{card.title}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      <section className="relative py-[110px] pb-[120px] overflow-hidden max-[768px]:py-16 max-[768px]:pb-[72px]">
          {/* Sacred geometry background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <svg className="absolute top-1/2 left-1/2 w-[min(820px,100vw)] h-auto -translate-x-1/2 -translate-y-1/2 opacity-80" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="400,80 680,560 120,560" stroke="rgba(228,175,86,0.10)" strokeWidth="1" fill="none"/>
              <polygon points="400,720 120,240 680,240" stroke="rgba(228,175,86,0.10)" strokeWidth="1" fill="none"/>
              <polygon points="400,140 630,520 170,520" stroke="rgba(228,175,86,0.07)" strokeWidth="1" fill="none"/>
              <polygon points="400,660 170,280 630,280" stroke="rgba(228,175,86,0.07)" strokeWidth="1" fill="none"/>
              <circle cx="400" cy="400" r="280" stroke="rgba(228,175,86,0.06)" strokeWidth="1" fill="none"/>
              <circle cx="400" cy="400" r="180" stroke="rgba(228,175,86,0.04)" strokeWidth="1" fill="none"/>
            </svg>
            <svg className="absolute top-1/2 right-[-8%] w-[min(520px,60vw)] h-auto -translate-y-1/2 opacity-60 [animation:slowSpin_80s_linear_infinite] max-[768px]:[animation:none] max-[768px]:right-[-20%] max-[768px]:w-[70vw] max-[768px]:opacity-30" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="270" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1" fill="none" strokeDasharray="4 8"/>
              <circle cx="300" cy="300" r="240" stroke="rgba(236, 72, 153, 0.1)" strokeWidth="1" fill="none"/>
              {Array.from({length:12}).map((_,i)=>{
                const a = i*30*Math.PI/180;
                const x1=(300+230*Math.cos(a)).toFixed(2);
                const y1=(300+230*Math.sin(a)).toFixed(2);
                const x2=(300+270*Math.cos(a)).toFixed(2);
                const y2=(300+270*Math.sin(a)).toFixed(2);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(168, 85, 247, 0.2)" strokeWidth="1"/>;
              })}
              {Array.from({length:12}).map((_,i)=>{
                const a = (i*30-15)*Math.PI/180;
                const tx=(300+255*Math.cos(a)).toFixed(2);
                const ty=(300+255*Math.sin(a)).toFixed(2);
                const symbols = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
                return <text key={i} x={tx} y={ty} textAnchor="middle" dominantBaseline="middle" fontSize="14" fill="rgba(236, 72, 153, 0.3)">{symbols[i]}</text>;
              })}
            </svg>

            {/* Lush Wavy silver grey lines - 80 paths for dense shimmery effect */}
            <svg className="absolute top-0 left-[-5%] w-[110%] h-full opacity-35 max-[768px]:opacity-20" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              {Array.from({length: 20}).map((_, i) => {
                const xOffset = 250 + (i * 35); // Re-spaced for 20 lines
                const waveAmp = 55 + (i % 10) * 6; // Rhythmic sinusoidal amplitude
                return (
                  <path
                    key={i}
                    d={`M ${xOffset} 0
                       C ${xOffset + waveAmp} 200, ${xOffset - waveAmp} 400, ${xOffset} 600
                       S ${xOffset + waveAmp} 800, ${xOffset} 1000`}
                    stroke={`rgba(168, 85, 247, ${0.15 + (i % 8) * 0.05})`}
                    strokeWidth={1.2 + (i % 4) * 0.4}
                    opacity={0.6 + (i % 12) * 0.03}
                  />
                );
              })}
            </svg>
          </div>

          <div className="section-shell relative z-1 grid grid-cols-2 gap-[72px] items-center min-[769px]:max-[1064px]:gap-10 max-[768px]:grid-cols-1 max-[768px]:gap-10">
            {/* LEFT: Copy Column */}
            <div className="flex flex-col gap-0 max-[768px]:order-2 max-[768px]:items-center max-[768px]:text-center">
              <p className="section-kicker">Certified Gemstone Marketplace</p>
              <h2 className="section-title !mb-5 max-w-[480px] max-[768px]:!max-w-full max-[768px]:text-center">Authentic Gemstones for Planetary Balance</h2>
              <p className="section-body !mb-7 max-w-[460px] max-[768px]:!max-w-full max-[768px]:text-center">
                Gemstones play a significant role in Vedic astrology. VedAstraa
                offers 100% natural and certified gemstones recommended by
                experts based on your birth chart.
              </p>
              <ul className="list-none p-0 m-0 mb-9 flex flex-col gap-[13px] max-[768px]:items-start max-[768px]:w-fit max-[768px]:mx-auto">
                {[
                  {icon:"⬡", label:"Lab-certified gemstones"},
                  {icon:"✦", label:"Personalized gemstone recommendations"},
                  {icon:"◈", label:"Customized rings and pendants"},
                  {icon:"❋", label:"Authenticity certificates"},
                ].map(f=>(
                  <li key={f.label} className="flex items-center gap-3 text-[0.88rem] text-[rgba(225,210,175,0.82)] leading-[1.4]">
                    <span className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-lg bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.22)] text-[#d4af37] text-[0.82rem] shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.1)] [backdrop-filter:blur(4px)]" aria-hidden="true">{f.icon}</span>
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="btn btn-primary self-start max-[768px]:self-stretch max-[768px]:text-center max-[768px]:justify-center max-[768px]:w-full">
                Shop Gemstones
              </a>
            </div>

            {/* RIGHT: Big B&W image panel */}
            <div className="relative max-[768px]:order-1" aria-label="Gemstone astrology visual">
              <div className="group relative rounded-[22px] overflow-hidden aspect-4/3 border border-[rgba(212,175,55,0.18)]
                  shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_4px_24px_rgba(0,0,0,0.55),0_20px_60px_rgba(0,0,0,0.45),0_0_80px_rgba(212,175,55,0.06),inset_0_1px_0_rgba(255,255,255,0.06)]
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[65%] after:[background:linear-gradient(to_top,rgba(8,5,22,0.92)_0%,rgba(8,5,22,0.55)_50%,transparent_100%)] after:z-3 after:pointer-events-none after:rounded-[inherit]
                  max-[768px]:aspect-3/2 max-[768px]:rounded-2xl max-[420px]:aspect-square">
                <img
                  src="/gemstone-bg.png"
                  alt="Luxury gemstones on Vedic astrology chart"
                  className="w-full h-full object-cover object-center block [filter:grayscale(30%)_brightness(0.75)_contrast(1.05)] transition-[filter,transform] duration-[600ms] ease-[ease,ease]
                    group-hover:[filter:grayscale(10%)_brightness(0.85)_contrast(1.05)] group-hover:scale-[1.03] max-[768px]:group-hover:scale-100 max-[768px]:group-hover:[filter:grayscale(30%)_brightness(0.75)_contrast(1.05)]"
                />

                {/* Gold sacred geometry SVG overlay on image */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-2" viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="300" cy="210" r="160" stroke="rgba(228,175,86,0.22)" strokeWidth="1" strokeDasharray="5 10"/>
                  <circle cx="300" cy="210" r="110" stroke="rgba(228,175,86,0.15)" strokeWidth="1" strokeDasharray="3 7"/>
                  <polygon points="300,60 480,330 120,330" stroke="rgba(228,175,86,0.18)" strokeWidth="1" fill="none"/>
                  <polygon points="300,360 120,90 480,90" stroke="rgba(228,175,86,0.13)" strokeWidth="1" fill="none"/>
                  {Array.from({length:8}).map((_,i)=>{
                    const a=i*45*Math.PI/180;
                    const x1 = (300+14*Math.cos(a)).toFixed(2);
                    const y1 = (210+14*Math.sin(a)).toFixed(2);
                    const x2 = (300+22*Math.cos(a)).toFixed(2);
                    const y2 = (210+22*Math.sin(a)).toFixed(2);
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(228,175,86,0.35)" strokeWidth="1"/>;
                  })}
                  <path d="M20,20 L60,20 M20,20 L20,60" stroke="rgba(228,175,86,0.4)" strokeWidth="1.5" fill="none"/>
                  <path d="M580,20 L540,20 M580,20 L580,60" stroke="rgba(228,175,86,0.4)" strokeWidth="1.5" fill="none"/>
                  <path d="M20,400 L60,400 M20,400 L20,360" stroke="rgba(228,175,86,0.4)" strokeWidth="1.5" fill="none"/>
                  <path d="M580,400 L540,400 M580,400 L580,360" stroke="rgba(228,175,86,0.4)" strokeWidth="1.5" fill="none"/>
                </svg>

                {/* Top certified badge */}
                <div className="absolute top-4 left-4 z-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.66rem] font-bold tracking-[0.14em] uppercase text-[#e8d5a3] bg-[rgba(20,14,50,0.72)] border border-[rgba(212,175,55,0.38)]
                    [backdrop-filter:blur(10px)_saturate(1.3)] shadow-[0_2px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(212,175,55,0.1)] max-[768px]:text-[0.6rem] max-[768px]:px-[11px] max-[768px]:py-[5px]">
                  <span className="text-[#d4af37] text-[0.7rem]">✦</span> Certified &amp; Authentic
                </div>

                {/* Bottom: 3 gemstone label cards */}
                <div className="absolute bottom-[18px] left-4 right-4 z-5 flex gap-2.5 max-[768px]:gap-[7px] max-[768px]:bottom-3 max-[768px]:left-3 max-[768px]:right-3 max-[420px]:flex-col max-[420px]:gap-1.5 max-[420px]:max-h-[42%] max-[420px]:bottom-2.5">
                  {[
                    { key: "ruby", symbol: "☉", name: "Ruby", sub: "Sun · Manik", chipCls: "border-[rgba(220,60,60,0.3)] hover:border-[rgba(220,60,60,0.55)] hover:shadow-[0_4px_18px_rgba(220,60,60,0.2),0_2px_12px_rgba(0,0,0,0.45)]", symbolCls: "text-[#f87171] [text-shadow:0_0_10px_rgba(248,113,113,0.6)]" },
                    { key: "emerald", symbol: "☿", name: "Emerald", sub: "Mercury · Panna", chipCls: "border-[rgba(52,168,100,0.3)] hover:border-[rgba(52,168,100,0.55)] hover:shadow-[0_4px_18px_rgba(52,168,100,0.2),0_2px_12px_rgba(0,0,0,0.45)]", symbolCls: "text-[#4ade80] [text-shadow:0_0_10px_rgba(74,222,128,0.5)]" },
                    { key: "sapphire", symbol: "♄", name: "Blue Sapphire", sub: "Saturn · Neelam", chipCls: "border-[rgba(96,130,230,0.3)] hover:border-[rgba(96,130,230,0.55)] hover:shadow-[0_4px_18px_rgba(96,130,230,0.2),0_2px_12px_rgba(0,0,0,0.45)]", symbolCls: "text-[#93c5fd] [text-shadow:0_0_10px_rgba(147,197,253,0.5)]" },
                  ].map((gem) => (
                    <div
                      key={gem.key}
                      className={`flex-1 flex items-center gap-[9px] px-3 py-2.5 rounded-xl bg-[rgba(12,8,32,0.78)] border [backdrop-filter:blur(12px)_saturate(1.4)]
                        shadow-[0_2px_12px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.05)] cursor-default
                        transition-[border-color,transform,box-shadow] duration-300 ease-[ease,cubic-bezier(0.23,1,0.32,1),ease]
                        hover:-translate-y-0.5
                        max-[768px]:min-w-0 max-[768px]:px-2 max-[768px]:py-2 max-[768px]:gap-1.5 max-[768px]:rounded-[10px] max-[768px]:hover:translate-y-0
                        max-[420px]:flex-none max-[420px]:w-full ${gem.chipCls}`}
                    >
                      <span className={`text-[1.15rem] leading-none shrink-0 max-[768px]:text-[1rem] ${gem.symbolCls}`}>{gem.symbol}</span>
                      <div>
                        <strong className="block text-[0.78rem] font-bold text-[#f0e6d0] leading-[1.2] whitespace-nowrap min-[769px]:max-[1064px]:text-[0.72rem] max-[768px]:text-[0.7rem]">{gem.name}</strong>
                        <em className="block text-[0.62rem] not-italic text-[rgba(210,195,165,0.58)] tracking-[0.04em] whitespace-nowrap min-[769px]:max-[1064px]:hidden max-[768px]:hidden max-[420px]:!block">{gem.sub}</em>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      <section className="dashboard-section">
          <div className="section-shell split-panel dashboard-panel">
            <div className="dashboard-visual">
              <div className="dashboard-card main-dashboard-card">
                <p>VedAstraa Dashboard</p>
                <strong>Personalized for your birth profile</strong>
                <span>Daily guidance, remedies, and aligned recommendations.</span>
              </div>
              <div className="dashboard-card side-dashboard-card">
                <p>Today&apos;s Cosmic Snapshot</p>
                <strong>Favorable energies are rising</strong>
              </div>
            </div>

            <div className="split-copy">
              <p className="section-kicker">Personalized Spiritual Insights</p>
              <h2 className="section-title">Your Personalized Spiritual Dashboard</h2>
              <p className="section-body">
                Once you create your birth profile, VedAstraa generates insights
                tailored specifically to you.
              </p>
              <ul className="feature-list feature-list-columns">
                {dashboardItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#" className="btn btn-primary">
                Create My Profile
              </a>
            </div>
          </div>
        </section>

      <section className="academy-section" id="courses">
          <div className="section-shell academy-shell">
            <div className="academy-ornament academy-ornament-left" aria-hidden="true" />
            <div className="academy-ornament academy-ornament-right" aria-hidden="true" />

            <div className="academy-pregrid-header">
              <div className="showcase-chip">VedAstraa Courses</div>
              <div className="academy-journey-header">
                <p className="academy-overline">Sacred Learning Path</p>
                <h2 className="academy-journey-title">
                  A refined spiritual curriculum designed as a living journey.
                </h2>
              </div>
            </div>

            <div className="academy-panel">
              <div className="academy-journey-panel">
                <div className="academy-timeline" aria-label="VedAstraa Courses timeline">
                  <span className="academy-timeline-line" aria-hidden="true" />
                  {academyJourney.slice(0, 5).map((course, index) => (
                    <article key={course.title} className="academy-course">
                      <div
                        className="academy-course-bg bw"
                        style={{ backgroundImage: `url(${course.image})` }}
                        aria-hidden="true"
                      />
                      <div className="academy-course-content">
                        <div className="academy-course-marker" aria-hidden="true">
                          <CourseIcon icon={course.icon} label={course.title} />
                        </div>
                        <div className="academy-course-copy">
                          <span className="academy-course-step">Course {index + 1}</span>
                          <h3>{course.title}</h3>
                          <p>{course.detail}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="academy-visual-panel">
                <div className="academy-visual-frame">
                  <div className="academy-visual-sky" aria-hidden="true">
                    <span className="academy-visual-ring academy-visual-ring-outer" />
                    <span className="academy-visual-ring academy-visual-ring-middle" />
                    <span className="academy-visual-ring academy-visual-ring-inner" />
                    <span className="academy-visual-grid" />
                    <span className="academy-visual-sage" />
                    <span className="academy-visual-particles academy-visual-particles-one" />
                    <span className="academy-visual-particles academy-visual-particles-two" />
                  </div>

                  <div className="academy-copy">
                    <p className="section-kicker">Learn Ancient Spiritual Sciences</p>
                    <p className="academy-visual-chip">Luxury spiritual courses</p>
                    <h2 className="section-title">Immersive wisdom for modern seekers.</h2>
                    <p className="section-body">
                      Enter a carefully structured learning space where timeless
                      sciences, live guidance, and contemplative practice come
                      together in a polished online course experience.
                    </p>

                    <div className="academy-feature-badges">
                      {academyFeatures.map((feature) => (
                        <div key={feature.title} className="academy-feature-badge">
                          <span className="academy-feature-icon" aria-hidden="true">
                            <CourseIcon icon={feature.icon} label={feature.title} />
                          </span>
                          <span>{feature.title}</span>
                        </div>
                      ))}
                    </div>

                    <a href="#" className="btn btn-primary academy-cta">
                      Explore Courses
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section className="tools-section" id="tools">
          <div className="section-shell">
            <p className="section-kicker">Astrology Tools</p>
            <h2 className="section-title">Free Astrology Tools</h2>
            <p className="section-intro">
              Explore powerful tools to gain quick insights into your destiny.
            </p>
            <AstrologyToolsContainer />
          </div>
        </section>

      <section className="horoscope-section" id="horoscope">
          <div className="section-shell">
            <div className="horoscope-layout">
              <div className="zodiac-grid">
                {zodiacSigns.map((sign) => (
                  <article key={sign.name} className="zodiac-card">
                    <div className="zodiac-glyph">
                      <ZodiacIcon icon={sign.icon} label={sign.name} />
                    </div>
                    <h3>{sign.name}</h3>
                  </article>
                ))}
              </div>
              <div className="horoscope-copy">
                <p className="section-kicker">Daily Horoscope</p>
                <h2 className="section-title">Today&apos;s Horoscope</h2>
                <p className="section-intro">
                  Check what the stars have planned for you today.
                </p>
                <a href="#" className="btn btn-primary section-cta">
                  View Full Horoscope
                </a>
              </div>
            </div>
          </div>
        </section>
      <section className="testimonials-section">
          <div className="section-shell">
            <p className="section-kicker">Testimonials</p>
            <h2 className="section-title">What Our Users Say</h2>
            <p className="section-intro">
              Real stories from seekers who found clarity through the stars.
            </p>
          </div>

          <div className="testimonials-marquee-wrapper" aria-label="User testimonials">
            <div className="testimonials-track-outer">
              <div className="testimonials-track testimonials-track-left">
                {[...row1, ...row1].map((item, i) => (
                  <article key={`r1-${i}`} className="testimonial-card-premium" aria-label={`Review by ${item.name}`}>
                    <div className="testimonial-quote-mark" aria-hidden="true">"</div>
                    <div className="testimonial-stars" aria-hidden="true">★★★★★</div>
                    <p className="testimonial-body">{item.review}</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar" aria-hidden="true">{item.avatar}</div>
                      <div className="testimonial-author-info">
                        <strong>{item.name}</strong>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="testimonials-track-outer">
              <div className="testimonials-track testimonials-track-right">
                {[...row2, ...row2].map((item, i) => (
                  <article key={`r2-${i}`} className="testimonial-card-premium" aria-label={`Review by ${item.name}`}>
                    <div className="testimonial-quote-mark" aria-hidden="true">"</div>
                    <div className="testimonial-stars" aria-hidden="true">★★★★★</div>
                    <p className="testimonial-body">{item.review}</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar" aria-hidden="true">{item.avatar}</div>
                      <div className="testimonial-author-info">
                        <strong>{item.name}</strong>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

      <section className="bg-[rgba(44,11,59,0.185)] py-16 lg:py-24">
        <div className="relative z-2 max-w-[1280px] mx-auto px-5 lg:px-8">
          <p className="block mb-3 [font-family:var(--font-inter)] text-xs font-semibold tracking-[0.16em] uppercase text-gold">How VedAstraa Works</p>
          <h2 className="m-0 [font-family:var(--font-playfair)] text-[clamp(1.875rem,5vw,2.25rem)] font-normal leading-[1.2] tracking-[-0.03em] max-w-[22ch] [background-image:linear-gradient(to_right,#bf953f,#fcf6ba,#b38728,#fbf5b7,#aa771c)] bg-clip-text text-transparent [text-shadow:0_8px_30px_rgba(11,31,59,0.35)]">A Clear Path to Spiritual Guidance</h2>

          {/* ── MOBILE: Swiper Carousel ── */}
          <div className="block lg:hidden mt-10">
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1.12}
              grabCursor={true}
              pagination={{ clickable: true }}
              className="how-swiper pb-11 overflow-visible"
            >
              {howItWorksSteps.map((item) => (
                <SwiperSlide key={item.step}>
                  <article className="relative h-[28rem] rounded-2xl overflow-hidden isolate">
                    <div
                      className="absolute inset-0 z-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 z-1 [background:linear-gradient(180deg,transparent_0%,rgba(4,4,4,0.5)_50%,rgba(4,4,4,0.92)_100%)]" aria-hidden="true" />
                    <div className="absolute inset-x-0 bottom-0 z-2 p-6 flex flex-col gap-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold text-cosmos-dark [font-family:var(--font-inter)] text-xs font-bold tracking-[0.1em]">{item.step}</span>
                      <h3 className="[font-family:var(--font-playfair)] text-lg font-semibold text-cream leading-[1.2] tracking-[-0.01em]">{item.title}</h3>
                      <p className="[font-family:var(--font-inter)] text-sm leading-[1.6] text-white/60">{item.description}</p>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ── DESKTOP: Premium Grid ── */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-5 mt-14">
            {howItWorksSteps.map((item) => (
              <article
                key={item.step}
                className="group relative min-h-[26rem] rounded-xl overflow-hidden isolate flex flex-col justify-end cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-[5px]
                  before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:p-px before:z-[4] before:pointer-events-none before:transition-opacity before:duration-[400ms]
                  before:[background:linear-gradient(160deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.02)_40%,rgba(255,255,255,0.08)_100%)]
                  before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[-webkit-mask-composite:xor]
                  after:content-[''] after:absolute after:-inset-px after:rounded-[inherit] after:p-px after:z-[4] after:pointer-events-none after:opacity-0 after:transition-opacity after:duration-[400ms] hover:after:opacity-100
                  after:[background:radial-gradient(600px_circle_at_50%_50%,rgba(228,175,86,0.45),transparent_40%)]
                  after:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[mask-composite:exclude] after:[-webkit-mask-composite:xor]"
              >
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center [filter:grayscale(100%)_brightness(0.55)] transition-[filter,transform] duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[filter:grayscale(0%)_brightness(0.45)] group-hover:scale-[1.06]"
                  style={{ backgroundImage: `url(${item.image})` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 z-1 transition-[background] duration-500 [background:linear-gradient(180deg,rgba(4,4,4,0.2)_0%,rgba(4,4,4,0.55)_50%,rgba(4,4,4,0.95)_100%)] group-hover:[background:linear-gradient(180deg,rgba(4,4,4,0.1)_0%,rgba(4,4,4,0.45)_55%,rgba(4,4,4,0.92)_100%)]" />
                <div className="absolute inset-8 z-[-1] opacity-0 blur-[24px] transition-opacity duration-[600ms] [background:radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.4),transparent_70%)] group-hover:opacity-60" aria-hidden="true" />
                <div className="relative z-[3] p-7 flex flex-col gap-[0.625rem]">
                  <span className="mb-1 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold text-cosmos-dark [font-family:var(--font-inter)] text-xs font-bold tracking-[0.1em]">{item.step}</span>
                  <h3 className="[font-family:var(--font-playfair)] text-xl font-semibold text-cream leading-[1.2] tracking-[-0.02em]">{item.title}</h3>
                  <p className="[font-family:var(--font-inter)] text-sm leading-[1.6] text-white/50 max-w-full">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-5 max-[768px]:py-14 max-[768px]:px-4 max-[480px]:py-12 max-[480px]:px-3 overflow-hidden isolate [background:linear-gradient(135deg,rgba(168,85,247,0.05)_0%,rgba(236,72,153,0.03)_50%,rgba(168,85,247,0.02)_100%)]">
        <div className="relative max-w-[720px] mx-auto z-2">
          {/* Accent elements */}
          <div className="absolute -top-[100px] -right-[150px] w-[400px] h-[400px] rounded-full blur-[40px] pointer-events-none z-0 [background:radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)] max-[768px]:top-[-80px] max-[768px]:right-[-120px] max-[768px]:w-[300px] max-[768px]:h-[300px] max-[480px]:opacity-50 max-[480px]:top-[-60px] max-[480px]:right-[-100px] max-[480px]:w-[250px] max-[480px]:h-[250px]" aria-hidden="true" />
          <div className="absolute -bottom-[80px] -left-[200px] w-[350px] h-[350px] rounded-full blur-[40px] pointer-events-none z-0 [background:radial-gradient(circle,rgba(236,72,153,0.1)_0%,transparent_70%)] max-[768px]:bottom-[-60px] max-[768px]:left-[-150px] max-[768px]:w-[250px] max-[768px]:h-[250px] max-[480px]:opacity-50 max-[480px]:bottom-[-50px] max-[480px]:left-[-120px] max-[480px]:w-[200px] max-[480px]:h-[200px]" aria-hidden="true" />

          <div className="relative z-2 text-center">
            <div className="inline-flex items-center justify-center px-[1.2rem] py-[0.6rem] mb-6 rounded-full border border-[rgba(228,175,86,0.4)] text-gold text-[0.85rem] font-semibold tracking-[0.05em] backdrop-blur-[10px] [background:linear-gradient(135deg,rgba(228,175,86,0.2),rgba(228,175,86,0.08))] max-[768px]:px-4 max-[768px]:py-2 max-[768px]:text-xs max-[768px]:mb-4 max-[480px]:mb-3">✨ Limited Time Offer</div>
            <h2 className="m-0 mb-4 [font-family:var(--font-playfair)] text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.2] tracking-[-0.02em] [background-image:linear-gradient(to_right,#ffffff_0%,rgba(228,175,86,0.8)_100%)] bg-clip-text text-transparent max-[768px]:text-[clamp(1.5rem,6vw,2.2rem)] max-[768px]:mb-3 max-[480px]:text-[clamp(1.25rem,7vw,1.75rem)]">Begin Your Cosmic Journey</h2>
            <p className="m-0 mb-10 max-w-[560px] mx-auto [font-family:var(--font-inter)] text-[1.05rem] leading-[1.7] text-white/70 tracking-[-0.005em] max-[768px]:text-base max-[768px]:leading-[1.6] max-[768px]:mb-8 max-[480px]:text-[0.9rem] max-[480px]:mb-6">
              Get personalized astrological insights from India's most trusted astrologers.
              Your first consultation is waiting.
            </p>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mb-12 py-8 border-t border-b border-white/10 max-[768px]:gap-[1.2rem] max-[768px]:py-6 max-[768px]:mb-8 max-[480px]:flex-wrap max-[480px]:gap-4 max-[480px]:py-[1.2rem] max-[480px]:mb-6">
              <div className="flex flex-col gap-[0.4rem] flex-[0_1_auto] max-[480px]:flex-[0_1_calc(50%-0.5rem)]">
                <span className="block text-[1.4rem] font-bold text-gold [font-family:var(--font-playfair)] tracking-[-0.01em] max-[768px]:text-xl">50K+</span>
                <span className="block text-xs font-semibold text-white/50 uppercase tracking-[0.1em] max-[768px]:text-[0.7rem]">Active Members</span>
              </div>
              <div className="w-px h-10 [background:linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] max-[768px]:h-[30px] max-[480px]:hidden" />
              <div className="flex flex-col gap-[0.4rem] flex-[0_1_auto] max-[480px]:flex-[0_1_calc(50%-0.5rem)]">
                <span className="block text-[1.4rem] font-bold text-gold [font-family:var(--font-playfair)] tracking-[-0.01em] max-[768px]:text-xl">4.9★</span>
                <span className="block text-xs font-semibold text-white/50 uppercase tracking-[0.1em] max-[768px]:text-[0.7rem]">Avg Rating</span>
              </div>
              <div className="w-px h-10 [background:linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] max-[768px]:h-[30px] max-[480px]:hidden" />
              <div className="flex flex-col gap-[0.4rem] flex-[0_1_auto] max-[480px]:flex-[0_1_calc(50%-0.5rem)]">
                <span className="block text-[1.4rem] font-bold text-gold [font-family:var(--font-playfair)] tracking-[-0.01em] max-[768px]:text-xl">24/7</span>
                <span className="block text-xs font-semibold text-white/50 uppercase tracking-[0.1em] max-[768px]:text-[0.7rem]">Support</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-4 mb-6 max-[768px]:gap-[0.8rem] max-[768px]:mb-4 max-[480px]:gap-[0.6rem]">
              <a href="#" className="group inline-flex items-center justify-center gap-3 px-[1.8rem] py-4 rounded-xl [font-family:var(--font-inter)] text-base font-semibold tracking-[0.02em] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] no-underline whitespace-nowrap text-[#0f172a] shadow-[0_8px_24px_rgba(245,158,11,0.3)] [background:linear-gradient(135deg,#f59e0b_0%,#fbbf24_100%)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(245,158,11,0.4)] active:translate-y-0 max-[768px]:px-[1.6rem] max-[768px]:py-[0.9rem] max-[768px]:text-[0.95rem] max-[768px]:w-full max-[768px]:hover:translate-y-0 max-[480px]:px-[1.4rem] max-[480px]:py-[0.85rem] max-[480px]:text-[0.9rem]">
                <span>Get My Free Kundli</span>
                <span className="text-[1.2rem] transition-transform duration-300 group-hover:translate-x-1 max-[480px]:hidden">→</span>
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-3 px-[1.8rem] py-4 rounded-xl [font-family:var(--font-inter)] text-base font-semibold tracking-[0.02em] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] no-underline whitespace-nowrap bg-white/[0.08] text-cream border-[1.5px] border-white/20 backdrop-blur-[10px] hover:bg-white/[0.12] hover:border-[rgba(228,175,86,0.5)] hover:shadow-[0_8px_24px_rgba(228,175,86,0.2)] hover:-translate-y-0.5 active:translate-y-0 max-[768px]:px-[1.6rem] max-[768px]:py-[0.9rem] max-[768px]:text-[0.95rem] max-[768px]:w-full max-[768px]:hover:translate-y-0 max-[480px]:px-[1.4rem] max-[480px]:py-[0.85rem] max-[480px]:text-[0.9rem]">
                <span>Book a Consultation</span>
              </a>
            </div>

            <p className="m-0 text-[0.8rem] text-white/40 font-medium tracking-[0.02em] max-[768px]:text-xs">No credit card required • Takes 2 minutes</p>
          </div>
        </div>
      </section>
    </>
  );
}





















