const travelTips = [
  {
    id: 1,
    title: "Getting Around the City",
    icon: "bus",
    shortDesc: "Recommended transportation options for efficient city travel",
    recommended: "Metro rail services offer the most reliable commute during peak hours.",
    source: "Bangalore Metro Rail Corporation (BMRCL)",
    do: [
      {
        icon: "🚇",
        text: "Use Namma Metro during peak hours to avoid traffic congestion and ensure faster travel."
      },
      {
        icon: "🚕",
        text: "Use app-based cab services such as Uber or Ola for reliable point-to-point travel."
      },
      {
        icon: "🛺",
        text: "Opt for auto-rickshaws for short distances; confirm fares in advance."
      }
    ],
    avoid: [
      {
        icon: "🚗",
        text: "Avoid driving during peak office hours (8–11 AM and 5–8 PM) due to heavy traffic."
      },
      {
        icon: "🚌",
        text: "Avoid city buses during rush hours if you are travelling on a tight schedule."
      }
    ],
    action: {
      text: "View Metro Route Map",
      url: "https://www.bmrc.co.in/schematic-route-map/"
    }
  },

  {
    id: 2,
    title: "Emergency Contacts",
    icon: "ambulance",
    shortDesc: "Official emergency helplines available across Bangalore",
    recommended: "Save these emergency numbers on your phone upon arrival.",
    source: "Government of India – Emergency Services",
    do: [
      {
        icon: "🚓",
        text: "Police Emergency",
        value: "112"
      },
      {
        icon: "🚑",
        text: "Ambulance Services",
        value: "108"
      },
      {
        icon: "🚒",
        text: "Fire Emergency",
        value: "101"
      }
    ],
    avoid: [
      {
        icon: "📞",
        text: "Avoid relying on unverified local contacts during emergencies."
      }
    ]
  },

  {
    id: 3,
    title: "Stay & Safety Tips",
    icon: "hotel",
    shortDesc: "Accommodation guidance and general safety precautions",
    recommended: "Reputed hotels in central locations offer better safety and accessibility.",
    source: "Karnataka Tourism & Booking.com",
    do: [
      {
        icon: "🏨",
        text: "Book accommodation in well-connected areas such as Indiranagar, Whitefield, Koramangala, or MG Road."
      },
      {
        icon: "👩‍🦰",
        text: "Women travellers are advised to stay in reputed hotels or serviced apartments."
      },
      {
        icon: "🔒",
        text: "Store digital copies of identification and travel documents securely."
      }
    ],
    avoid: [
      {
        icon: "🌙",
        text: "Avoid poorly lit or isolated areas late at night."
      },
      {
        icon: "💰",
        text: "Avoid carrying large amounts of cash while exploring the city."
      }
    ],
    action: {
      text: "Recommended Areas to Stay",
      url: "https://www.booking.com/city/in/bangalore.html"
    }
  },

  {
      id: 4,
      title: "Weather & Packing",
      icon: "weather",
      shortDesc: "Weather conditions and essential packing advice",
      recommended: "Light layers and rain protection are sufficient for most seasons.",
      source: "India Meteorological Department (IMD)",
      do: [
        {
          icon: "🧥",
          text: "Carry light jackets or layers, as evening temperatures can be cooler."
        },
        {
          icon: "🌂",
          text: "Keep an umbrella or rain protection, as rainfall can be unpredictable."
        }
      ],
      avoid: [
        {
          icon: "🥵",
          text: "Avoid packing heavy winter clothing, as Bangalore has a mild climate year-round."
        }
      ],
      action: {
        text: "Check Live Weather",
        url: "https://zoom.earth/places/india/bengaluru/"
      }
    }
];

export default travelTips;
