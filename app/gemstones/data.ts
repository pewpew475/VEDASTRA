export type Gemstone = {
  slug: string;
  name: string;
  planet: string;
  priceRange: string;
  basePrice: number;
  benefits: string;
  image: string;
  badge: string;
  detailedDescription?: string;
  specifications?: {
    material: string;
    size: string;
    origin: string;
    certification: string;
    [key: string]: string;
  };
  howToUse?: string[];
  spiritualBenefits?: string[];
};

export const GEMSTONES: Gemstone[] = [
  {
    slug: "1-mukhi-rudraksha",
    name: "1 Mukhi Rudraksha",
    planet: "Sun",
    priceRange: "₹1,500 – ₹22,000",
    basePrice: 1500,
    benefits: "The 1 Mukhi Rudraksha is revered for its powerful spiritual significance and is believed to enhance concentration and mental clarity. It is traditionally associated with Lord Shiva and is said to bring prosperity, health, and overall well-being.",
    image: "/downloaded_images/1-mukhi-rudraksha.png",
    badge: "Sacred Rudraksha · Gol/Kaju",
    detailedDescription: "The 1 Mukhi Rudraksha is the most auspicious gift of nature to mankind. It is the rarest among all mukhis and is the king of all Rudraksha beads. The one mukhi Rudraksha is ruled by Lord Shiva himself. It is said that the wearer of this bead attains the level of Shiva. It is believed that the wearer of 1 Mukhi Rudraksha is blessed by Lord Shiva and Goddess Lakshmi.",
    specifications: {
      material: "Natural Rudraksha Bead",
      size: "20mm - 25mm",
      origin: "India / Nepal",
      certification: "Lab Certified (Authenticity Guaranteed)",
      shape: "Half Moon / Round"
    },
    howToUse: [
      "Wear it on a Monday morning after a bath.",
      "Chant 'Om Hreem Namah' 108 times before wearing.",
      "Can be worn as a pendant in silk or wool thread.",
      "Keep it in a clean, sacred place when not wearing."
    ],
    spiritualBenefits: [
      "Enhances concentration and mental clarity",
      "Brings peace and harmony to the wearer",
      "Helps in meditation and spiritual growth",
      "Protects against negative energies"
    ]
  },
  {
    slug: "2-mukhi-rudraksha",
    name: "2 Mukhi Rudraksha",
    planet: "Moon",
    priceRange: "₹750 – ₹15,000",
    basePrice: 750,
    benefits: "Revered for spiritual and emotional benefits, it enhances harmony and strengthens relationships. Associated with balancing the mind and emotions, promoting calmness and reducing stress.",
    image: "/downloaded_images/2_Mukhi_Rudraksha.png",
    badge: "Relationship · Nepal/Java",
    detailedDescription: "The 2 Mukhi Rudraksha represents Ardhanareshwar, a joint image of Lord Shiva and Goddess Parvati. It is the symbol of unity and harmony. It is said to be very effective in strengthening the bond between husband and wife, father and son, and friends.",
    specifications: {
      material: "Natural Rudraksha Bead",
      size: "15mm - 20mm",
      origin: "Nepal / Java",
      certification: "ISO Certified Lab",
      shape: "Oval / Natural"
    },
    howToUse: [
      "Best worn on a Monday.",
      "Chant 'Om Namah' 108 times.",
      "Clean regularly with a soft brush and oil.",
      "Wear close to the heart for emotional balance."
    ],
    spiritualBenefits: [
      "Promotes unity and harmony",
      "Balances emotional instability",
      "Strengthens relationships",
      "Brings inner peace"
    ]
  },
  {
    slug: "3-mukhi-rudraksha",
    name: "3 Mukhi Rudraksha",
    planet: "Mars",
    priceRange: "₹750 – ₹1,000",
    basePrice: 750,
    benefits: "Believed to enhance communication skills, promote self-confidence, and foster emotional balance. Invokes the blessings of Lord Agni for purification and transformation.",
    image: "/downloaded_images/3_Mukhi_Rudraksha.png",
    badge: "Confidence · Himalayan",
    detailedDescription: "The 3 Mukhi Rudraksha represents Agni (Fire). Like fire, it burns the sins of the past and makes the wearer pure and fresh. It is highly effective for people suffering from an inferiority complex and low self-esteem.",
    specifications: {
      material: "Natural Rudraksha Bead",
      size: "12mm - 18mm",
      origin: "Himalayan Region",
      certification: "Certified Authentic",
      ruling_deity: "Lord Agni"
    },
    howToUse: [
      "Wear it on a Sunday or Thursday.",
      "Chant 'Om Kleem Namah' 108 times.",
      "Avoid wearing while sleeping or bathing.",
      "Energize with incense and flowers."
    ],
    spiritualBenefits: [
      "Boosts self-confidence and courage",
      "Purifies the soul and mind",
      "Helps in overcoming past traumas",
      "Enhances creative expression"
    ]
  },
  {
    slug: "4-mukhi-rudraksha-nepal",
    name: "4 Mukhi Rudraksha (Nepal)",
    planet: "Mercury",
    priceRange: "₹1,500",
    basePrice: 1500,
    benefits: "Known for its powerful connection to Lord Brahma. Enhances intellect, creativity, and concentration, making it ideal for students and professionals.",
    image: "/downloaded_images/4_Mukhi_Rudraksha_(Nepal).png",
    badge: "Intellect · Nepal",
    detailedDescription: "The 4 Mukhi Rudraksha is the symbol of Lord Brahma, the creator of the universe. It is blessed by the four-headed Brahma and gives the wearer the power of knowledge and creativity. It is excellent for students, scientists, and researchers.",
    specifications: {
      material: "Natural Nepal Rudraksha",
      size: "18mm - 22mm",
      origin: "Nepal",
      certification: "X-Ray Lab Certified",
      bead_count: "Single Bead"
    },
    howToUse: [
      "Wear on a Wednesday morning.",
      "Chant 'Om Hreem Namah' 108 times.",
      "Place on your study table for focus.",
      "Keep it clean and energized."
    ],
    spiritualBenefits: [
      "Sharpens memory and intellect",
      "Enhances vocal communication",
      "Promotes logical thinking",
      "Increases creative potential"
    ]
  },
  {
    slug: "5-mukhi-rudraksha-nepal",
    name: "5 Mukhi Rudraksha (Nepal)",
    planet: "Jupiter",
    priceRange: "₹2,499",
    basePrice: 2499,
    benefits: "Revered for spiritual and health benefits. Enhances concentration and mental clarity, promoting a balanced mind and emotional stability.",
    image: "/downloaded_images/5_Mukhi_Rudraksha_(Nepal).png",
    badge: "Peace · Shiva Energy",
    detailedDescription: "The 5 Mukhi Rudraksha is the most common and popular bead. It represents Lord Kalagni Rudra. It is highly effective for overall health and peace of mind. It is also known as the bead of 'Pancha Brahmins'.",
    specifications: {
      material: "Premium Nepal Rudraksha",
      size: "20mm+",
      origin: "Nepal",
      certification: "Authenticity Certificate Included",
      energy: "Balanced"
    },
    howToUse: [
      "Can be worn daily.",
      "Chant 'Om Hreem Namah' regularly.",
      "Use for Japa (meditation counting).",
      "Soak in water overnight and drink (consult expert)."
    ],
    spiritualBenefits: [
      "Brings mental peace and calm",
      "Regulates blood pressure and health",
      "Removes negative thoughts",
      "Enhances spiritual connection"
    ]
  },
  {
    slug: "6-mukhi-rudraksha-nepal",
    name: "6 Mukhi Rudraksha (Nepal)",
    planet: "Venus",
    priceRange: "₹1,500",
    basePrice: 1500,
    benefits: "Associated with Lord Kartikeya. Enhances willpower, confidence, and self-esteem. Supports emotional balance and helps overcome negative tendencies.",
    image: "/downloaded_images/6_Mukhi_Rudraksha_(Nepal).png",
    badge: "Willpower · Kartikeya",
    detailedDescription: "The 6 Mukhi Rudraksha is ruled by Lord Kartikeya, the son of Lord Shiva. It is known to bestow the wearer with focus, grounding, and perfection. It is particularly beneficial for those in leadership roles.",
    specifications: {
      material: "Natural Nepal Rudraksha",
      size: "19mm - 23mm",
      origin: "Nepal",
      certification: "Lab Tested",
      ruling_planet: "Venus"
    },
    howToUse: [
      "Wear on a Friday.",
      "Chant 'Om Hreem Hum Namah' 108 times.",
      "Wear on the right arm for maximum benefit.",
      "Keep it away from chemicals."
    ],
    spiritualBenefits: [
      "Increases willpower and courage",
      "Provides grounding energy",
      "Helps in emotional stability",
      "Enhances focus and dedication"
    ]
  },
  {
    slug: "7-mukhi-rudraksha",
    name: "7 Mukhi Rudraksha",
    planet: "Saturn",
    priceRange: "₹1,499",
    basePrice: 1499,
    benefits: "Linked to Goddess Mahalaxmi. Believed to bring wealth, prosperity, and abundance. Enhances creativity, focus, and decision-making abilities.",
    image: "/downloaded_images/7_Mukhi_Rudraksha.png",
    badge: "Wealth · Mahalaxmi",
    detailedDescription: "The 7 Mukhi Rudraksha is the symbol of Mahalakshmi, the Goddess of Wealth. It is also associated with the Sapta Rishis. It is believed to bring financial growth and remove obstacles related to career and business.",
    specifications: {
      material: "Natural Rudraksha Bead",
      size: "16mm - 21mm",
      origin: "Nepal / India",
      certification: "Government Approved Lab",
      deity: "Goddess Mahalaxmi"
    },
    howToUse: [
      "Wear on a Friday.",
      "Chant 'Om Hum Namah' 108 times.",
      "Keep in your cash box or wallet.",
      "Perform Lakshmi Puja with the bead."
    ],
    spiritualBenefits: [
      "Attracts wealth and prosperity",
      "Removes bad luck and misery",
      "Enhances decision-making",
      "Brings career opportunities"
    ]
  },
  {
    slug: "8-mukhi-rudraksha",
    name: "8 Mukhi Rudraksha",
    planet: "Rahu",
    priceRange: "₹1,150 – ₹6,000",
    basePrice: 1150,
    benefits: "Associated with Lord Ganesha. Removes obstacles and brings success. Enhances self-confidence, wisdom, and decision-making skills.",
    image: "/downloaded_images/8_Mukhi_Rudraksha.png",
    badge: "Success · Ganesha",
    detailedDescription: "The 8 Mukhi Rudraksha is the symbol of Lord Ganesha, the remover of obstacles. It is also blessed by the eight Vasus. It provides the wearer with success in all undertakings and protects from unseen enemies.",
    specifications: {
      material: "Natural Rudraksha",
      size: "15mm - 20mm",
      origin: "Nepal / Java",
      certification: "Authenticity Certificate",
      ruling_deity: "Lord Ganesha"
    },
    howToUse: [
      "Wear on a Wednesday.",
      "Chant 'Om Hum Namah' 108 times.",
      "Touch to Ganesha idol before wearing.",
      "Use for overcoming difficult life phases."
    ],
    spiritualBenefits: [
      "Removes obstacles from life",
      "Ensures success in ventures",
      "Reduces the ill effects of Rahu",
      "Increases wisdom and awareness"
    ]
  },
  {
    slug: "9-mukhi-rudraksha",
    name: "9 Mukhi Rudraksha",
    planet: "Ketu",
    priceRange: "₹900 – ₹5,500",
    basePrice: 900,
    benefits: "Associated with Goddess Durga. Enhances confidence, leadership, and decision-making. Offers protection from negative influences.",
    image: "/downloaded_images/9_Mukhi_Rudraksha.png",
    badge: "Power · Durga Energy",
    detailedDescription: "The 9 Mukhi Rudraksha is blessed by Goddess Durga in her nine forms (Nav Durga). It is full of power and energy. It is especially beneficial for women as it provides them with the strength of Durga.",
    specifications: {
      material: "Natural Rudraksha",
      size: "17mm - 22mm",
      origin: "Nepal",
      certification: "Premium Lab Certified",
      deity: "Goddess Durga"
    },
    howToUse: [
      "Wear on a Saturday or during Navratri.",
      "Chant 'Om Hreem Hum Namah' 108 times.",
      "Wear on the left hand for energy.",
      "Keep it clean with oil and incense."
    ],
    spiritualBenefits: [
      "Provides courage and fearlessness",
      "Protects from evil eye and negativity",
      "Balances the effects of Ketu",
      "Enhances inner power and stamina"
    ]
  },
  {
    slug: "10-mukhi-rudraksha",
    name: "10 Mukhi Rudraksha",
    planet: "All Planets",
    priceRange: "₹3,000 – ₹12,700",
    basePrice: 3000,
    benefits: "Associated with Lord Vishnu. Symbolizes protection and preservation. Brings peace, harmony, and stability to the wearer's life.",
    image: "/downloaded_images/10_Mukhi_Rudraksha.png",
    badge: "Protection · Vishnu",
    detailedDescription: "The 10 Mukhi Rudraksha represents Lord Vishnu, the protector of the universe. It is one of the most powerful beads for protection. It is said to act as a shield for the wearer, protecting them from all directions.",
    specifications: {
      material: "Natural Rudraksha",
      size: "18mm - 23mm",
      origin: "Nepal",
      certification: "Authenticity Verified",
      deity: "Lord Vishnu"
    },
    howToUse: [
      "Wear on a Thursday.",
      "Chant 'Om Hreem Namah Namah' 108 times.",
      "Can be placed in the house for protection.",
      "Perform Vishnu Sahasranama while wearing."
    ],
    spiritualBenefits: [
      "Acts as a protective shield",
      "Removes the ill effects of all planets",
      "Brings peace and stability",
      "Protects from legal troubles"
    ]
  },
  {
    slug: "11-mukhi-rudraksha",
    name: "11 Mukhi Rudraksha",
    planet: "Mars",
    priceRange: "₹1,500 – ₹12,700",
    basePrice: 1500,
    benefits: "Associated with Lord Hanuman. Symbolizes strength, courage, and protection. Enhances physical and mental stamina.",
    image: "/downloaded_images/11_Mukhi_Rudraksha.png",
    badge: "Strength · Hanuman",
    detailedDescription: "The 11 Mukhi Rudraksha is the symbol of Lord Hanuman, the eleventh Rudra. It bestows the wearer with wisdom, right judgment, and powerful vocabulary. It is excellent for those who wish to excel in meditation and yoga.",
    specifications: {
      material: "Natural Rudraksha",
      size: "19mm - 24mm",
      origin: "Nepal",
      certification: "X-Ray Tested",
      deity: "Lord Hanuman"
    },
    howToUse: [
      "Wear on a Tuesday or Saturday.",
      "Chant 'Om Hreem Hum Namah' 108 times.",
      "Wear on the top of the head (Shikha) for yoga.",
      "Offer prayers to Lord Hanuman."
    ],
    spiritualBenefits: [
      "Increases courage and confidence",
      "Enhances concentration and focus",
      "Provides protection during travel",
      "Helps in spiritual awakening"
    ]
  },
  {
    slug: "12-mukhi-rudraksha",
    name: "12 Mukhi Rudraksha",
    planet: "Sun",
    priceRange: "₹3,600 – ₹9,500",
    basePrice: 3600,
    benefits: "Revered for powerful spiritual and healing properties. Enhances intuition, promotes mental clarity, and fosters emotional balance.",
    image: "/downloaded_images/12_Mukhi_Rudraksha.png",
    badge: "Vitality · Surya Energy",
    detailedDescription: "The 12 Mukhi Rudraksha represents Lord Sun (Surya). It gives the wearer the radiance and strength of the Sun. It is highly recommended for people who want to attain name, fame, and power in society.",
    specifications: {
      material: "Natural Rudraksha",
      size: "20mm - 25mm",
      origin: "Nepal",
      certification: "Premium Lab Certified",
      planet: "Sun"
    },
    howToUse: [
      "Wear on a Sunday morning.",
      "Chant 'Om Kraum Sraum Raum Namah' 108 times.",
      "Face the Sun while wearing for the first time.",
      "Keep it clean and shiny."
    ],
    spiritualBenefits: [
      "Brings name, fame, and wealth",
      "Increases leadership qualities",
      "Removes worries and fears",
      "Enhances physical vitality"
    ]
  },
  {
    slug: "13-mukhi-rudraksha",
    name: "13 Mukhi Rudraksha",
    planet: "Venus",
    priceRange: "₹3,200 – ₹15,000",
    basePrice: 3200,
    benefits: "Highly valued for its association with Lord Indra. Enhances leadership qualities, courage, and authority.",
    image: "/downloaded_images/13_Mukhi_Rudraksha.png",
    badge: "Authority · Indra",
    detailedDescription: "The 13 Mukhi Rudraksha represents Lord Indra and Lord Kamadeva. it is known to fulfill all earthly desires and gives the wearer the power of attraction and charisma. It is very effective for those in marketing and sales.",
    specifications: {
      material: "Natural Rudraksha",
      size: "18mm - 23mm",
      origin: "Nepal",
      certification: "Authenticity Certificate",
      deity: "Lord Indra / Kamadeva"
    },
    howToUse: [
      "Wear on a Friday.",
      "Chant 'Om Hreem Namah' 108 times.",
      "Wear close to the throat or heart.",
      "Keep it away from impure places."
    ],
    spiritualBenefits: [
      "Enhances charisma and attraction",
      "Fulfills worldly desires",
      "Improves social status",
      "Brings success in love and relationships"
    ]
  },
  {
    slug: "14-mukhi-rudraksha",
    name: "14 Mukhi Rudraksha",
    planet: "Saturn",
    priceRange: "₹5,000 – ₹50,000",
    basePrice: 5000,
    benefits: "Associated with Lord Hanuman. Known for powerful protective and healing properties. Enhances courage, strength, and resilience.",
    image: "/downloaded_images/14_Mukhi_Rudraksha.png",
    badge: "Resilience · Hanuman",
    detailedDescription: "The 14 Mukhi Rudraksha is also known as 'Deva Mani'. It is believed to have originated from the eyes of Lord Shiva. It is a very rare and powerful bead that provides the wearer with supreme protection and intuition.",
    specifications: {
      material: "Rare Nepal Rudraksha",
      size: "22mm+",
      origin: "Nepal",
      certification: "Collector Grade Certificate",
      type: "Rare Collector Bead"
    },
    howToUse: [
      "Wear on a Tuesday or Saturday.",
      "Chant 'Om Namah' 108 times.",
      "Wear on the forehead (Ajna Chakra) during meditation.",
      "Handle with extreme care and respect."
    ],
    spiritualBenefits: [
      "Activates the Third Eye (Ajna Chakra)",
      "Provides supreme protection",
      "Enhances intuitive powers",
      "Removes the ill effects of Saturn and Mars"
    ]
  },
  {
    slug: "amethyst-bracelet",
    name: "Amethyst Bracelet",
    planet: "Saturn",
    priceRange: "₹2,200",
    basePrice: 2200,
    benefits: "Valued for calming and protective properties. Reduces stress and anxiety, promoting mental clarity and emotional balance.",
    image: "/downloaded_images/Amethyst_Bracelet.png",
    badge: "Calm · Energy Healing",
    detailedDescription: "This Amethyst Bracelet is handcrafted with premium natural Amethyst beads. Amethyst is a powerful and protective stone that has a high spiritual vibration. It is known as the 'Stone of Spirituality and Contentment'.",
    specifications: {
      material: "Natural Amethyst Stones",
      size: "8mm beads",
      origin: "Brazil / Africa",
      certification: "Certified Natural Stone",
      string: "Elastic / Adjustable"
    },
    howToUse: [
      "Wear on the left wrist for receiving energy.",
      "Cleanse under moonlight once a month.",
      "Do not expose to direct sunlight for long.",
      "Wear during meditation for focus."
    ],
    spiritualBenefits: [
      "Calms the mind and spirit",
      "Enhances spiritual awareness",
      "Protects against psychic attacks",
      "Aids in restful sleep"
    ]
  },
  {
    slug: "black-tourmaline-bracelets",
    name: "Black Tourmaline Bracelets",
    planet: "Rahu/Ketu",
    priceRange: "₹1,800",
    basePrice: 1800,
    benefits: "Highly valued for powerful protective qualities. Shields against negative energies and electromagnetic radiation.",
    image: "/downloaded_images/Black_Tourmaline_Bracelets.png",
    badge: "Protection · Grounding",
    detailedDescription: "Black Tourmaline is one of the most powerful grounding and protective stones. It acts as a shield against all types of negative energy, including EMF radiation from electronic devices.",
    specifications: {
      material: "Natural Black Tourmaline",
      size: "10mm beads",
      origin: "India",
      certification: "Authenticity Guaranteed",
      bead_type: "Polished Round"
    },
    howToUse: [
      "Wear on the right wrist for protection.",
      "Cleanse with sage or incense.",
      "Keep near your computer or phone.",
      "Wear daily for grounding energy."
    ],
    spiritualBenefits: [
      "Shields from negative energy",
      "Grounds the body's energy",
      "Reduces stress and anxiety",
      "Promotes physical vitality"
    ]
  },
  {
    slug: "blue-sapphire",
    name: "Blue Sapphire",
    planet: "Saturn",
    priceRange: "₹9,750 – ₹30,750",
    basePrice: 9750,
    benefits: "Revered for profound spiritual benefits. Symbolizes wisdom, purity, and divine favor. Enhances mental clarity and focus.",
    image: "/downloaded_images/Blue_Sapphire.png",
    badge: "Wisdom · Premium Neelam",
    detailedDescription: "The Blue Sapphire (Neelam) is the gemstone of Saturn. It is one of the fastest-acting gemstones and can bring instant success and wealth if it suits the wearer. It is known for its ability to clear confusion and provide mental clarity.",
    specifications: {
      material: "Natural Blue Sapphire",
      size: "2 - 5 Carats",
      origin: "Ceylon (Sri Lanka) / Thailand",
      certification: "GIA / IGI / Lab Certified",
      cut: "Oval / Cushion"
    },
    howToUse: [
      "Consult an astrologer before wearing.",
      "Set in Silver or White Gold ring.",
      "Wear on the middle finger of the right hand.",
      "Wear on a Saturday evening."
    ],
    spiritualBenefits: [
      "Accelerates career and business growth",
      "Provides protection from accidents",
      "Clears mental confusion",
      "Brings discipline and focus"
    ]
  },
  {
    slug: "cats-eye",
    name: "Cat's Eye",
    planet: "Ketu",
    priceRange: "₹1,200 – ₹4,000",
    basePrice: 1200,
    benefits: "Renowned for enhancing focus and mental clarity. Protects against negative energies and brings good fortune.",
    image: "/downloaded_images/Cat's_Eye.png",
    badge: "Focus · Lehsunia",
    detailedDescription: "Cat's Eye (Lehsunia) is the gemstone of Ketu. It is characterized by its unique 'chatoyancy' effect. It is believed to bring back lost wealth and protect the wearer from hidden enemies and evil spirits.",
    specifications: {
      material: "Natural Cat's Eye (Chrysoberyl)",
      size: "3 - 7 Carats",
      origin: "India / Sri Lanka",
      certification: "Lab Certified Natural",
      color: "Greenish Brown / Yellow"
    },
    howToUse: [
      "Wear in Silver on a Tuesday night.",
      "Wear on the ring finger or middle finger.",
      "Chant Ketu Mantra before wearing.",
      "Keep the stone clean for maximum effect."
    ],
    spiritualBenefits: [
      "Protects from hidden enemies",
      "Brings back lost prosperity",
      "Enhances intuition and focus",
      "Balances the energy of Ketu"
    ]
  },
  {
    slug: "cat-eye-bracelets",
    name: "Cat Eye Bracelets",
    planet: "Ketu",
    priceRange: "₹2,300",
    basePrice: 2300,
    benefits: "Known for protective and grounding qualities. Helps deflect negative energies and enhance focus and confidence.",
    image: "/downloaded_images/Cat_Eye_Bracelets.png",
    badge: "Intuition · Style",
    detailedDescription: "This stylish bracelet features natural Cat's Eye beads that exhibit a beautiful chatoyancy. It's a perfect wearable talisman for protection and daily spiritual balance.",
    specifications: {
      material: "Natural Cat's Eye Stone",
      size: "8mm beads",
      origin: "India",
      certification: "Quality Checked",
      design: "Stretchable Bracelet"
    },
    howToUse: [
      "Wear daily on either wrist.",
      "Clean with a soft damp cloth.",
      "Charge under the full moon.",
      "Set an intention before wearing."
    ],
    spiritualBenefits: [
      "Provides a protective aura",
      "Enhances confidence and willpower",
      "Brings clarity in difficult times",
      "Stylish yet spiritually active"
    ]
  },
  {
    slug: "clear-quartz-bracelets",
    name: "Clear Quartz Bracelets",
    planet: "All Planets",
    priceRange: "₹2,400",
    basePrice: 2400,
    benefits: "Master healer. Prized for powerful energy amplification. Enhances clarity of thought and boosts concentration.",
    image: "/downloaded_images/Clear_Quartz_Bracelets.png",
    badge: "Amplifier · Master Healer",
    detailedDescription: "Clear Quartz is known as the 'Master Healer' and will amplify energy and thought, as well as the effect of other crystals. It absorbs, stores, releases and regulates energy.",
    specifications: {
      material: "Natural Clear Quartz (Sphatik)",
      size: "8mm / 10mm beads",
      origin: "Himalayas",
      certification: "Lab Certified Sphatik",
      clarity: "High Transparency"
    },
    howToUse: [
      "Wear on any day.",
      "Wash with Gangajal or raw milk.",
      "Keep it near other crystals to charge them.",
      "Wear during meditation for clarity."
    ],
    spiritualBenefits: [
      "Amplifies energy and intentions",
      "Balances and revitalizes the aura",
      "Enhances psychic abilities",
      "Provides deep emotional healing"
    ]
  },
  {
    slug: "emerald-panna",
    name: "Emerald (panna)",
    planet: "Mercury",
    priceRange: "₹6,000 – ₹20,000",
    basePrice: 6000,
    benefits: "Revered for spiritual benefits. Enhances mental clarity, promotes emotional balance, and fosters compassion.",
    image: "/downloaded_images/emerald-panna-copy.png",
    badge: "Communication · Panna",
    detailedDescription: "Emerald (Panna) is the gemstone of Mercury. It is a symbol of love, rebirth, and wisdom. It is highly beneficial for professionals in communication, finance, and creative fields.",
    specifications: {
      material: "Natural Emerald",
      size: "3 - 6 Carats",
      origin: "Zambia / Colombia / Brazil",
      certification: "IGJ / Lab Certified",
      color: "Deep Green"
    },
    howToUse: [
      "Wear in Gold or Silver on a Wednesday morning.",
      "Wear on the little finger of the right hand.",
      "Chant 'Om Budhaya Namah' 108 times.",
      "Ensure the stone touches the skin."
    ],
    spiritualBenefits: [
      "Enhances communication and speech",
      "Sharpens intellect and memory",
      "Brings harmony in relationships",
      "Promotes business and financial growth"
    ]
  },
  {
    slug: "firoza",
    name: "Firoza",
    planet: "Jupiter/Venus",
    priceRange: "₹2,000 – ₹10,000",
    basePrice: 2000,
    benefits: "Valued for calming energy and protective qualities. Promotes emotional balance, enhances communication, and fosters creativity.",
    image: "/downloaded_images/Firoza.png",
    badge: "Tranquility · Turquoise",
    detailedDescription: "Firoza (Turquoise) is a sacred stone in many cultures. It is associated with both Jupiter and Venus. It is known to bring good luck, health, and protection from accidents and evil eye.",
    specifications: {
      material: "Natural Turquoise",
      size: "5 - 15 Carats",
      origin: "Iran (Nishapuri) / Arizona",
      certification: "Authentic Stone Certificate",
      color: "Sky Blue / Greenish Blue"
    },
    howToUse: [
      "Can be worn as a ring or pendant.",
      "Set in Silver or Copper.",
      "Wear on a Friday or Thursday morning.",
      "Chant Jupiter or Venus mantras."
    ],
    spiritualBenefits: [
      "Brings luck and prosperity",
      "Protects from negative energy",
      "Enhances creativity and expression",
      "Promotes physical healing"
    ]
  },
  {
    slug: "ganesh-mukhi-rudraksha",
    name: "Ganesh Mukhi Rudraksha",
    planet: "Mercury/Rahu",
    priceRange: "₹3,000",
    basePrice: 3000,
    benefits: "Invokes blessings of Lord Ganesha. Removes obstacles, enhances wisdom, and promotes success in new ventures.",
    image: "/downloaded_images/Ganesh_Mukhi_Rudraksha.png",
    badge: "Obstacle Remover · Ganesha",
    detailedDescription: "The Ganesh Mukhi Rudraksha is a unique bead that has a natural trunk-like protrusion on its surface. It represents Lord Ganesha and is used to remove all hurdles from the wearer's life path.",
    specifications: {
      material: "Natural Rudraksha",
      size: "18mm - 22mm",
      origin: "Nepal",
      certification: "X-Ray Lab Tested",
      feature: "Natural Trunk Formation"
    },
    howToUse: [
      "Wear on a Wednesday morning.",
      "Chant 'Om Gam Ganapataye Namah'.",
      "Place on your altar for daily prayers.",
      "Energize with incense and flowers."
    ],
    spiritualBenefits: [
      "Removes all obstacles and hurdles",
      "Brings success in new beginnings",
      "Increases intelligence and wisdom",
      "Provides mental stability"
    ]
  },
  {
    slug: "gauri-shankar-rudraksha",
    name: "Gauri Shankar Rudraksha",
    planet: "Moon/Venus",
    priceRange: "₹9,500",
    basePrice: 9500,
    benefits: "Symbolizes divine union of Shiva and Parvati. Strengthens relationships, promotes harmony, and enhances understanding.",
    image: "/downloaded_images/Gauri_Shankar_Rudraksha.png",
    badge: "Harmony · Divine Union",
    detailedDescription: "Gauri Shankar Rudraksha is a naturally joined bead of two Rudrakshas. It represents the unified form of Lord Shiva and Goddess Parvati. It is the ultimate bead for relationship harmony and finding a life partner.",
    specifications: {
      material: "Natural Joined Rudraksha",
      size: "25mm - 30mm",
      origin: "Nepal",
      certification: "Collector Grade Authenticity",
      deity: "Shiva and Parvati"
    },
    howToUse: [
      "Wear as a pendant in gold/silver.",
      "Chant 'Om Gauri Shankara Namah'.",
      "Keep in the bedroom for marital harmony.",
      "Perform puja on Mondays."
    ],
    spiritualBenefits: [
      "Strengthens marital bonds",
      "Attracts the right life partner",
      "Brings harmony to the family",
      "Promotes peace and unity"
    ]
  },
  {
    slug: "gomed",
    name: "Gomed",
    planet: "Rahu",
    priceRange: "₹900 – ₹4,000",
    basePrice: 900,
    benefits: "Hessonite garnet. Enhances mental clarity and emotional balance. Boosts confidence and reduces anxiety.",
    image: "/downloaded_images/Gomed.png",
    badge: "Confidence · Rahu Balancer",
    detailedDescription: "Gomed (Hessonite) is the gemstone of Rahu. It has the color of honey and is known for its ability to protect the wearer from sudden misfortunes and enemies. It is highly recommended during Rahu Mahadasha.",
    specifications: {
      material: "Natural Hessonite Garnet",
      size: "4 - 8 Carats",
      origin: "India (Gaya) / Sri Lanka",
      certification: "Lab Certified Natural",
      color: "Honey / Brownish Orange"
    },
    howToUse: [
      "Wear in Silver on a Saturday night.",
      "Wear on the middle finger of the right hand.",
      "Chant 'Om Raam Rahve Namah'.",
      "Consult an astrologer before wearing."
    ],
    spiritualBenefits: [
      "Reduces confusion and anxiety",
      "Protects from sudden setbacks",
      "Brings success in politics and law",
      "Balances the energy of Rahu"
    ]
  },
  {
    slug: "hematite-bracelets",
    name: "Hematite Bracelets",
    planet: "Mars/Saturn",
    priceRange: "₹1,800 – ₹1,900",
    basePrice: 1800,
    benefits: "Prized for grounding and balancing properties. Enhances focus and concentration while promoting mental clarity.",
    image: "/downloaded_images/Hematite_Bracelets.png",
    badge: "Grounding · Vitality",
    detailedDescription: "Hematite is a stone that is most commonly used to ground or stabilize and for protection. It's often used to help you feel safe and secure. It's a great stone to use for focus and concentration.",
    specifications: {
      material: "Natural Hematite Stone",
      size: "8mm / 10mm beads",
      origin: "Brazil / India",
      certification: "Quality Assured",
      color: "Metallic Gray / Black"
    },
    howToUse: [
      "Wear on the wrist of your non-dominant hand.",
      "Do not wear if you have a pacemaker.",
      "Clean with a dry cloth only.",
      "Keep away from water to prevent rusting."
    ],
    spiritualBenefits: [
      "Strongly grounding and stabilizing",
      "Increases courage and willpower",
      "Protects against negativity",
      "Enhances memory and focus"
    ]
  },
  {
    slug: "lapis-lazuli",
    name: "Lapis Lazuli",
    planet: "Saturn/Jupiter",
    priceRange: "₹1,499 – ₹1,999",
    basePrice: 1499,
    benefits: "Prized for deep blue color. Promotes mental clarity, enhances creativity, and supports emotional healing.",
    image: "/downloaded_images/Lapis_Lazuli.png",
    badge: "Wisdom · Truth",
    detailedDescription: "Lapis Lazuli is a deep-blue metamorphic rock used as a semi-precious stone that has been prized since antiquity for its intense color. It is a symbol of wisdom and truth.",
    specifications: {
      material: "Natural Lapis Lazuli",
      size: "5 - 15 Carats",
      origin: "Afghanistan / Chile",
      certification: "Certified Semi-Precious",
      color: "Royal Blue with Pyrite"
    },
    howToUse: [
      "Can be worn as a ring or pendant.",
      "Set in Silver or Copper.",
      "Wear on a Saturday or Thursday.",
      "Clean with warm soapy water."
    ],
    spiritualBenefits: [
      "Encourages self-awareness",
      "Reveals inner truth",
      "Stimulates objectivity and clarity",
      "Boosts the immune system"
    ]
  },
  {
    slug: "moonstone",
    name: "Moonstone",
    planet: "Moon",
    priceRange: "₹2,100 – ₹3,599",
    basePrice: 2100,
    benefits: "Enhances intuition and emotional insight. Promotes calmness and balance, easing stress and stabilizing emotions.",
    image: "/downloaded_images/Moonstone.png",
    badge: "Intuition · Calmness",
    detailedDescription: "Moonstone is a stone of inner growth and strength. It soothes emotional instability and stress, and stabilizes the emotions, providing calmness. It is highly linked to the Moon and intuition.",
    specifications: {
      material: "Natural Moonstone (Feldspar)",
      size: "5 - 12 Carats",
      origin: "India / Sri Lanka",
      certification: "Certified Natural Stone",
      effect: "Adularescence (Blue Glow)"
    },
    howToUse: [
      "Wear in Silver on a Monday morning.",
      "Wear on the little finger or ring finger.",
      "Chant 'Om Chandraya Namah'.",
      "Recharge under the full moon."
    ],
    spiritualBenefits: [
      "Enhances intuition and psychic gifts",
      "Balances feminine energy",
      "Promotes inspiration and success",
      "Aids in lucid dreaming"
    ]
  },
  {
    slug: "opal-fire",
    name: "Opal (fire)",
    planet: "Venus",
    priceRange: "₹15,000 – ₹51,250",
    basePrice: 15000,
    benefits: "Enhances creativity, inspiration, and emotional healing. Amplifies intuition and deepens spiritual awareness.",
    image: "/downloaded_images/opal-copy.png",
    badge: "Creativity · Inspiration",
    detailedDescription: "Fire Opal is a stone of luck, abundance, and creativity. It is associated with Venus and is known to enhance the wearer's charisma and luxury in life. It's a stone of passion and vitality.",
    specifications: {
      material: "Natural Fire Opal",
      size: "2 - 6 Carats",
      origin: "Ethiopia / Australia",
      certification: "Premium Lab Certified",
      color: "Play of Colors / Orange"
    },
    howToUse: [
      "Wear in Silver or White Gold.",
      "Wear on the ring finger on a Friday.",
      "Chant 'Om Shum Shukraya Namah'.",
      "Avoid contact with chemicals and heat."
    ],
    spiritualBenefits: [
      "Attracts luxury and wealth",
      "Enhances creativity and artistic skill",
      "Brings passion to relationships",
      "Boosts confidence and charisma"
    ]
  },
  {
    slug: "pyrite-bracelets",
    name: "Pyrite Bracelets",
    planet: "Sun/Mars",
    priceRange: "₹1,500",
    basePrice: 1500,
    benefits: "Fool's gold. Enhances mental clarity and focus. Promotes physical vitality and serves as a protective shield.",
    image: "/downloaded_images/Pyrite_Bracelets.png",
    badge: "Vitality · Protection",
    detailedDescription: "Pyrite is a powerful protection stone which shields and protects against all forms of negative vibrations and/or energy. It's often called 'Fool's Gold' due to its metallic luster.",
    specifications: {
      material: "Natural Pyrite Stone",
      size: "8mm beads",
      origin: "Peru / Mexico",
      certification: "Quality Checked",
      finish: "Metallic Luster"
    },
    howToUse: [
      "Wear on the right wrist for action/energy.",
      "Keep it on your desk for abundance.",
      "Cleanse with dry salt or smoke.",
      "Wear while working to stay focused."
    ],
    spiritualBenefits: [
      "Attracts wealth and abundance",
      "Protects against negative energy",
      "Boosts self-confidence",
      "Promotes logical thinking"
    ]
  },
  {
    slug: "red-coral",
    name: "Red Coral",
    planet: "Mars",
    priceRange: "₹2,100 – ₹7,000",
    basePrice: 2100,
    benefits: "Enhances vitality and promotes emotional balance. Supports circulation and boosts energy levels. Fosters confidence.",
    image: "/downloaded_images/Red_Coral.png",
    badge: "Courage · Moonga",
    detailedDescription: "Red Coral (Moonga) is the gemstone of Mars. It is an organic gemstone formed in the deep sea. It is known to provide the wearer with courage, strength, and the ability to overcome enemies.",
    specifications: {
      material: "Natural Red Coral",
      size: "5 - 10 Carats",
      origin: "Italy / Japan",
      certification: "Natural Organic Certificate",
      color: "Deep Red / Orange Red"
    },
    howToUse: [
      "Wear in Gold or Copper on a Tuesday.",
      "Wear on the ring finger of the right hand.",
      "Chant 'Om Angarkaya Namah'.",
      "Check for Manglik Dosha before wearing."
    ],
    spiritualBenefits: [
      "Increases courage and physical strength",
      "Helps in overcoming Manglik Dosha",
      "Brings success in property and land",
      "Protects from evil eye and black magic"
    ]
  },
  {
    slug: "rose-quartz-bracelets",
    name: "Rose Quartz Bracelets",
    planet: "Venus",
    priceRange: "₹1,500",
    basePrice: 1500,
    benefits: "Renowned for calming and soothing properties. Associated with emotional healing and promoting self-love.",
    image: "/downloaded_images/Rose_Quartz_Bracelets.png",
    badge: "Self-Love · Harmony",
    detailedDescription: "Rose Quartz is the stone of universal love. It restores trust and harmony in relationships, encouraging unconditional love. It purifies and opens the heart at all levels.",
    specifications: {
      material: "Natural Rose Quartz",
      size: "8mm beads",
      origin: "Madagascar / Brazil",
      certification: "Natural Stone Certificate",
      color: "Soft Pink"
    },
    howToUse: [
      "Wear on the left wrist for self-love.",
      "Cleanse with water or moonlight.",
      "Sleep with it under your pillow.",
      "Wear daily to attract love."
    ],
    spiritualBenefits: [
      "Promotes self-love and acceptance",
      "Attracts romantic relationships",
      "Heals emotional wounds",
      "Brings inner peace and harmony"
    ]
  },
  {
    slug: "ruby",
    name: "Ruby",
    planet: "Sun",
    priceRange: "₹4,875 – ₹15,375",
    basePrice: 4875,
    benefits: "Symbolizes vitality, passion, and protection. Stimulates heart chakra, enhancing emotional balance and confidence.",
    image: "/downloaded_images/Ruby.png",
    badge: "Passion · Manik",
    detailedDescription: "Ruby (Manik) is the gemstone of the Sun. It is the king of gemstones and represents authority, power, and dignity. It is believed to provide the wearer with name, fame, and good health.",
    specifications: {
      material: "Natural Ruby (Corundum)",
      size: "3 - 7 Carats",
      origin: "Burma / Africa / Thailand",
      certification: "IGJ / Lab Certified",
      color: "Pigeon Blood Red / Pinkish Red"
    },
    howToUse: [
      "Wear in Gold or Copper on a Sunday morning.",
      "Wear on the ring finger of the right hand.",
      "Chant 'Om Suryaya Namah' 108 times.",
      "Ensure the stone is eye-clean."
    ],
    spiritualBenefits: [
      "Increases leadership and authority",
      "Brings name, fame, and social status",
      "Boosts confidence and willpower",
      "Improves heart and bone health"
    ]
  },
  {
    slug: "seven-chakras-bracelets",
    name: "Seven chakras Bracelets",
    planet: "All Chakras",
    priceRange: "₹1,200",
    basePrice: 1200,
    benefits: "Designed to balance and align the body's energy centers. Enhances physical vitality, emotional stability, and mental clarity.",
    image: "/downloaded_images/Seven_chakras_Bracelets.png",
    badge: "Alignment · Holistic Health",
    detailedDescription: "This bracelet features seven different natural stones, each corresponding to one of the seven main chakras in the body. It helps in balancing the entire energy system.",
    specifications: {
      material: "Natural Mixed Stones",
      size: "8mm beads",
      origin: "Mixed Sources",
      stones: "Amethyst, Lapis, Turquoise, Aventurine, Tiger Eye, Carnelian, Jasper",
      certification: "Authentic Stone Mix",
      design: "Energy Balance"
    },
    howToUse: [
      "Wear daily on either wrist.",
      "Cleanse with sage or sunlight.",
      "Meditate while focusing on each stone.",
      "Set an intention for balance."
    ],
    spiritualBenefits: [
      "Balances all seven chakras",
      "Enhances overall well-being",
      "Removes energy blockages",
      "Promotes spiritual alignment"
    ]
  },
  {
    slug: "white-pearl",
    name: "White Pearl",
    planet: "Moon",
    priceRange: "₹450 – ₹1,500",
    basePrice: 450,
    benefits: "Symbolizes purity and sophistication. Brings timeless elegance and natural beauty. Promotes inner peace.",
    image: "/downloaded_images/White_Pearl.png",
    badge: "Purity · Moti",
    detailedDescription: "White Pearl (Moti) is the gemstone of the Moon. It is an organic gemstone formed within oysters. It is known for its calming effect and its ability to control anger and emotional instability.",
    specifications: {
      material: "Natural White Pearl",
      size: "4 - 10 Carats",
      origin: "Basra / Japan / South Sea",
      certification: "Natural Pearl Certificate",
      shape: "Round / Oval"
    },
    howToUse: [
      "Wear in Silver on a Monday morning.",
      "Wear on the little finger of the right hand.",
      "Chant 'Om Chandraya Namah'.",
      "Wash with raw milk before wearing."
    ],
    spiritualBenefits: [
      "Calms the mind and reduces anger",
      "Enhances emotional stability",
      "Brings peace and prosperity",
      "Improves relationship with mother"
    ]
  },
  {
    slug: "yellow-sapphire",
    name: "Yellow Sapphire",
    planet: "Jupiter",
    priceRange: "₹15,000 – ₹51,250",
    basePrice: 15000,
    benefits: "Enhances wisdom, prosperity, and mental clarity. Promotes confidence and optimism, supporting personal growth.",
    image: "/downloaded_images/yellow_sapphire.png",
    badge: "Prosperity · Pukhraj",
    detailedDescription: "Yellow Sapphire (Pukhraj) is the gemstone of Jupiter (Guru). It is one of the most auspicious and widely worn gemstones. It is known to bring wealth, health, and wisdom to the wearer.",
    specifications: {
      material: "Natural Yellow Sapphire",
      size: "3 - 8 Carats",
      origin: "Ceylon (Sri Lanka) / Thailand",
      certification: "IGI / GIA / Lab Certified",
      color: "Lemon Yellow / Golden Yellow"
    },
    howToUse: [
      "Wear in Gold on a Thursday morning.",
      "Wear on the index finger of the right hand.",
      "Chant 'Om Gram Greem Graum Sah Gurve Namah'.",
      "Consult an expert for the right weight."
    ],
    spiritualBenefits: [
      "Brings immense wealth and prosperity",
      "Enhances wisdom and knowledge",
      "Ensures success in education and law",
      "Promotes health and longevity"
    ]
  },
];
