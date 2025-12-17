const foodItems = [
  {
    id: 1,
    name: "Masala Dosa",
    category: "Tiffin / Breakfast",
    image: "/images/masala-dosa.jpg",
    shortDesc: "Iconic Bangalore-style crispy dosa",
    description:
      "A thick, golden-brown crispy dosa made with fermented rice batter, generously coated with butter and served with potato palya, coconut chutney, and sambar. Bangalore’s dosa style is distinct for its crispness and richness.",
    bestTime: "Morning (7:00 AM – 11:00 AM)",
    confidence: "high",
    recommended: {
      place: "CTR (Central Tiffin Room)",
      address: "Margosa Road, Malleshwaram, Bangalore 560003",
      mapLink: "https://maps.google.com/?q=CTR+Malleshwaram"
    },
  },

  {
    id: 2,
    name: "South Indian Meals",
    category: "Lunch",
    image: "/images/south-indian-meals.jpg",
    shortDesc: "Traditional vegetarian thali served on banana leaf",
    description:
      "A wholesome Karnataka-style meal featuring rice, sambar, rasam, palya, kosambari, curd, pickle, and a sweet — traditionally served on a banana leaf and eaten with hands.",
    bestTime: "Afternoon (12:00 PM – 3:00 PM)",
    confidence: "high",
    recommended: {
      place: "MTR (Mavalli Tiffin Room)",
      address: "Lalbagh Road, Bangalore 560027",
      mapLink: "https://maps.google.com/?q=MTR+Lalbagh"
    },
  },

  {
    id: 3,
    name: "VV Puram Food Street",
    category: "Evening / Late Night Snacks",
    image: "/images/vv-puram-food.jpg",
    shortDesc: "Bangalore’s most famous street food destination",
    description:
      "An iconic food street offering a wide variety of vegetarian street snacks such as dosa varieties, paddu, chaats, sweets, and regional specialties. A must-visit cultural food experience.",
    bestTime: "Evening (6:00 PM – 10:30 PM)",
    confidence: "high",
    recommended: {
      place: "VV Puram Food Street",
      address: "Visveswarapuram, Bangalore 560004",
      mapLink: "https://maps.google.com/?q=VV+Puram+Food+Street"
    },
  },

  {
    id: 4,
    name: "Bangalore Savories",
    category: "Snacks",
    image: "/images/bangalore-snacks.jpg",
    shortDesc: "Local tea-time snacks and bakery savories",
    description:
      "Popular savory snacks such as khara bun, vegetable puffs, congress kadlekai, nippattu, and mixture — commonly enjoyed with evening tea across Bangalore.",
    bestTime: "Evening",
    confidence: "medium",
    recommended: {
      place: "Iyengar Bakery (Local Branch)",
      address: "Multiple locations across Bangalore",
      mapLink: "https://maps.google.com/?q=Iyengar+Bakery+Bangalore"
    },
  },

  {
    id: 5,
    name: "Mysore Pak",
    category: "Dessert / Sweets",
    image: "/images/mysore-pak.jpg",
    shortDesc: "Rich ghee-based Karnataka sweet",
    description:
      "A legendary Karnataka sweet made from gram flour, sugar, and generous amounts of ghee. Known for its melt-in-the-mouth texture and rich flavor.",
    bestTime: "Anytime",
    confidence: "high",
    recommended: {
      place: "Sri Krishna Sweets",
      address: "Commercial Street, Bangalore 560001",
      mapLink: "https://maps.google.com/?q=Sri+Krishna+Sweets+Bangalore"
    },
  },

  {
    id: 6,
    name: "Bangalore-Style Biryani",
    category: "Non-Vegetarian Special",
    image: "/images/meghanas-biryani.jpg",
    shortDesc: "Spicy Andhra-style biryani loved by locals",
    description:
      "A flavorful, spicy biryani made with fragrant rice, tender chicken, and bold Andhra spices. Bangalore’s modern food identity is closely tied to Meghana Foods.",
    bestTime: "Lunch or Dinner",
    confidence: "high",
    recommended: {
      place: "Meghana Foods",
      address: "Residency Road, Bangalore 560025",
      mapLink: "https://maps.google.com/?q=Meghana+Foods+Residency+Road"
    },
  }
];

export default foodItems;
