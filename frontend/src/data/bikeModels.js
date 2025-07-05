export const bikeModels = [
  {
    _id: "667202a7b8e8c123456789a1",
    name: "WS ABC",
    imageUrl: "bike-models/ev_bike_image-removebg-preview.png",
    specifications: {
      motor: "10' BLDC Hub Motor (Waterproof IP 67)",
      speed: "60 kmph",
      controller: "Smart Wireless (Waterproof IP64)",
      range: "80 km",
      breakSystem: "F/R: DISC / DISC",
      battery: "Li-ion TYPE : 72V48AH (3.5kWh)",
      chargerSpec: "5A/8A Fast Charger",
      chargingTime: "4 hours"
    },
    features: [
      "Eco and Sport Modes",
      "LED Headlights",
      "Fast Charging Support",
      "Bluetooth Connectivity",
      "Waterproof Throttle",
      "USB Charging Point",
      "Side Stand Sensor",
      "Anti Theft Alarm",
      "Keyless Entry",
      "GPRS Tracking System",
      "Tubeless Tyres",
      "Central Locking"
    ],

    category: "Premium",
    available: true,
    featured: true,
    colors: ["Matte Black", "Electric Blue", "Pearl White"]
  },
  {
    _id: "667202a7b8e8c123456789a2",
    name: "WS Ninja Pro",
    imageUrl: "bike-models/thunder-pro-image.png",
    specifications: {
      motor: "12' BLDC Hub Motor (Waterproof IP 67)",
      speed: "85 kmph",
      controller: "Smart Wireless (Waterproof IP64)",
      range: "100 km",
      breakSystem: "F/R: DISC / DISC",
      battery: "Li-ion TYPE : 72V42AH (3.0kWh)",
      chargerSpec: "5A Fast Charger",
      chargingTime: "3.5 hours"
    },
    features: [
      "Eco and Sport Modes",
      "LED Headlights",
      "Fast Charging Support",
      "Bluetooth Connectivity",
      "Digital Display",
      "USB Charging Point",
      "Side Stand Sensor",
      "Anti Theft Alarm",
      "Keyless Entry",
      "GPRS Tracking System"
    ],
    category: "Premium",
    available: true,
    featured: true,
    colors: ["Thunder Black", "Electric Blue", "Pearl White"]
  },
  {
    _id: "667202a7b8e8c123456789a3",
    name: "WS City Cruiser",
    imageUrl: "bike-models/city-cruiser-image.png",
    specifications: {
      motor: "10' BLDC Hub Motor (Waterproof IP 67)",
      speed: "65 kmph",
      controller: "Smart Wireless (Waterproof IP64)",
      range: "90 km",
      breakSystem: "F/R: DISC / DRUM",
      battery: "Li-ion TYPE : 72V36AH (2.5kWh)",
      chargerSpec: "5A Charger",
      chargingTime: "4.5 hours"
    },
    features: [
      "Eco Mode",
      "LED Headlights",
      "Digital Display",
      "USB Charging Point",
      "Side Stand Sensor",
      "Anti Theft Alarm",
      "Waterproof Throttle",
      "Tubeless Tyres"
    ],
    category: "Mid-Range",
    available: true,
    featured: true,
    colors: ["Crimson Red", "Forest Green", "Midnight Blue"]
  },
  {
    _id: "667202a7b8e8c123456789a4",
    name: "WS Eco Rider",
    imageUrl: "bike-models/eco-rider-image.png",
    specifications: {
      motor: "8' BLDC Hub Motor (Waterproof IP 67)",
      speed: "45 kmph",
      controller: "Basic Wireless (Waterproof IP64)",
      range: "70 km",
      breakSystem: "F/R: DRUM / DRUM",
      battery: "Li-ion TYPE : 60V36AH (2.0kWh)",
      chargerSpec: "3A Charger",
      chargingTime: "5 hours"
    },
    features: [
      "Eco Mode",
      "LED Headlights",
      "Digital Display",
      "Side Stand Sensor",
      "Anti Theft Alarm",
      "Waterproof Throttle"
    ],
    category: "Budget",
    available: true,
    featured: false,
    colors: ["Classic White", "Graphite Gray", "Sunny Yellow"]
  },
  {
    _id: "667202a7b8e8c123456789a5",
    name: "WS Sport Edition",
    imageUrl: "bike-models/sport-edition-image.png",
    specifications: {
      motor: "12' BLDC Hub Motor (Waterproof IP 67)",
      speed: "110 kmph",
      controller: "Advanced Smart Wireless (Waterproof IP64)",
      range: "130 km",
      breakSystem: "F/R: DISC / DISC",
      battery: "Li-ion TYPE : 72V50AH (3.6kWh)",
      chargerSpec: "8A Fast Charger",
      chargingTime: "3.5 hours"
    },
    features: [
      "Eco and Sport Modes",
      "LED Headlights",
      "Fast Charging Support",
      "Bluetooth Connectivity",
      "Waterproof Throttle",
      "USB Charging Point",
      "Side Stand Sensor",
      "Anti Theft Alarm",
      "Keyless Entry",
      "GPRS Tracking System",
      "Tubeless Tyres",
      "Central Locking",
      "Cruise Control",
      "Regenerative Braking"
    ],
    category: "Premium",
    available: true,
    featured: true,
    colors: ["Racing Red", "Carbon Black", "Metallic Silver"]
  },
  {
    _id: "667202a7b8e8c123456789a6",
    name: "WS Delivery Pro",
    imageUrl: "bike-models/delivery-pro-image.png",
    specifications: {
      motor: "10' BLDC Hub Motor (Waterproof IP 67)",
      speed: "60 kmph",
      controller: "Commercial Grade Wireless (Waterproof IP64)",
      range: "110 km",
      breakSystem: "F/R: DISC / DISC",
      battery: "Li-ion TYPE : 72V40AH (2.8kWh)",
      chargerSpec: "5A Charger",
      chargingTime: "4 hours"
    },
    features: [
      "Heavy Duty Build",
      "LED Headlights",
      "Digital Display",
      "USB Charging Point",
      "Side Stand Sensor",
      "Anti Theft Alarm",
      "GPRS Tracking System",
      "Swappable Battery",
      "Load Capacity 150kg",
      "Commercial Warranty"
    ],
  
    category: "Commercial",
    available: true,
    featured: false,
    colors: ["Commercial White", "Fleet Blue", "Delivery Green"]
  }
];

// Helper functions for filtering and sorting
export const getBikesByCategory = (category) => {
  return bikeModels.filter(bike => bike.category === category);
};

export const getFeaturedBikes = () => {
  return bikeModels.filter(bike => bike.featured);
};

export const getAvailableBikes = () => {
  return bikeModels.filter(bike => bike.available);
};

export const getBikeById = (id) => {
  return bikeModels.find(bike => bike._id === id);
};

export const getBikesByPriceRange = (minPrice, maxPrice) => {
  return bikeModels.filter(bike => bike.price >= minPrice && bike.price <= maxPrice);
};

// Search bikes by name, specifications, or features
export const searchBikes = (query) => {
  const searchTerm = query.toLowerCase();
  return bikeModels.filter(bike => 
    bike.name.toLowerCase().includes(searchTerm) ||
    bike.specifications.motor.toLowerCase().includes(searchTerm) ||
    bike.specifications.range.toLowerCase().includes(searchTerm) ||
    bike.features.some(feature => feature.toLowerCase().includes(searchTerm))
  );
};

// Get bikes sorted by range (highest to lowest)
export const getBikesSortedByRange = () => {
  return [...bikeModels].sort((a, b) => {
    const rangeA = parseInt(a.specifications.range.replace(' km', ''));
    const rangeB = parseInt(b.specifications.range.replace(' km', ''));
    return rangeB - rangeA;
  });
};

// Get bikes sorted by speed (highest to lowest)
export const getBikesSortedBySpeed = () => {
  return [...bikeModels].sort((a, b) => {
    const speedA = parseInt(a.specifications.speed.replace(' kmph', ''));
    const speedB = parseInt(b.specifications.speed.replace(' kmph', ''));
    return speedB - speedA;
  });
};

// Constants for categories
export const BIKE_CATEGORIES = {
  BUDGET: 'Budget',
  MID_RANGE: 'Mid-Range',
  PREMIUM: 'Premium',
  COMMERCIAL: 'Commercial'
};