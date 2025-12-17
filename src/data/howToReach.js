const howToReach = [
  {
    id: 1,
    mode: "By Air",
    icon: "✈️",
    confidence: "high",
    description:
      "Kempegowda International Airport (BLR) is Bangalore’s primary airport, well connected to major Indian and international cities.",
    details: [
      "Located about 40 km from the city center",
      "Direct flights from Delhi, Mumbai, Chennai, Hyderabad, Dubai, Singapore, London",
      "24/7 airport operations"
    ],
    recommended:
      "Use airport taxi services or Vayu Vajra airport buses for reliable city transfer.",
    source: "Kempegowda International Airport (BIAL)",
  },

  {
    id: 2,
    mode: "By Train",
    icon: "🚆",
    confidence: "high",
    description:
      "Bangalore is well connected by rail to all major cities in India.",
    details: [
      "Major stations: KSR Bengaluru (Majestic), Yeshwantpur, Bangalore Cantt",
      "Frequent trains from Chennai, Hyderabad, Mumbai, Delhi",
      "Affordable and convenient for domestic travelers"
    ],
    recommended:
      "KSR Bengaluru (Majestic) is best for central city access.",
    source: "Indian Railways"
  },

  {
    id: 3,
    mode: "By Road",
    icon: "🚌",
    confidence: "medium",
    description:
      "Bangalore has excellent road connectivity via national highways.",
    details: [
      "Well-connected to Chennai, Hyderabad, Mysore, Coimbatore",
      "KSRTC and private buses operate frequently",
      "Overnight sleeper buses available from nearby states"
    ],
    recommended:
      "Volvo or Airavat buses offer the most comfortable experience.",
    source: "KSRTC"
  },

  {
    id: 4,
    mode: "Self-drive / Taxi",
    icon: "🚗",
    confidence: "medium",
    description:
      "Driving into Bangalore is convenient from nearby cities but traffic increases near city limits.",
    details: [
      "Good highways from Mysore, Chennai, Hyderabad",
      "Toll roads are common",
      "Parking can be limited in central areas"
    ],
    recommended:
      "Best for short-distance travel (within 300 km).",
    source: "Govt. of Karnataka Transport"
  }
];

export default howToReach;
