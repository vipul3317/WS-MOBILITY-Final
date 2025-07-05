// utils/bikeUtils.js
import { bikeModels } from '../data/bikeModels';

// Price utilities
export const formatPrice = (price) => {
  if (price == null) return 'Price not available';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

export const calculateDiscount = (originalPrice, currentPrice) => {
  if (!originalPrice || !currentPrice || originalPrice <= currentPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

export const getPriceStats = () => {
  const prices = bikeModels.map(bike => bike.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
    average: Math.round(prices.reduce((sum, price) => sum + price, 0) / prices.length)
  };
};

// Sorting utilities
const extractNumericValue = (value, fallback = 0) => 
  parseInt(value?.toString().replace(/\D/g, '') || fallback);

export const getBikesSortedByPrice = (order = 'asc') => 
  [...bikeModels].sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);

export const getBikesSortedByRange = (order = 'desc') => 
  [...bikeModels].sort((a, b) => {
    const rangeA = extractNumericValue(a.specifications.range);
    const rangeB = extractNumericValue(b.specifications.range);
    return order === 'asc' ? rangeA - rangeB : rangeB - rangeA;
  });

// Search and filter utilities
export const searchBikes = (query) => {
  const searchTerm = query.toLowerCase();
  return bikeModels.filter(bike => {
    const searchableFields = [
      bike.name,
      bike.specifications.motor,
      bike.specifications.range,
      ...bike.features
    ];
    return searchableFields.some(field => 
      field.toLowerCase().includes(searchTerm)
    );
  });
};

export const getFilteredBikes = (filters = {}) => {
  return bikeModels.filter(bike => {
    // Category filter
    if (filters.category && bike.category !== filters.category) return false;
    
    // Type filter
    if (filters.type && bike.type !== filters.type) return false;
    
    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (bike.price < min || bike.price > max) return false;
    }
    
    // Availability filters
    if (filters.availableOnly && !bike.available) return false;
    if (filters.featuredOnly && !bike.featured) return false;
    
    return true;
  });
};

// Recommendation utilities
export const getRecommendedBikes = (budget) => 
  bikeModels
    .filter(bike => bike.price <= budget && bike.available)
    .sort((a, b) => b.price - a.price)
    .slice(0, 3);

export const getBikesForComparison = (bikeIds) => 
  bikeModels.filter(bike => bikeIds.includes(bike._id));

// Analytics utilities
export const getPopularFeatures = () => {
  const featureCount = {};
  
  bikeModels.forEach(bike => {
    bike.features.forEach(feature => {
      featureCount[feature] = (featureCount[feature] || 0) + 1;
    });
  });
  
  return Object.entries(featureCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([feature, count]) => ({ feature, count }));
};

// Validation utilities
export const validateBikeData = (bike) => {
  const requiredFields = ['_id', 'name', 'imageUrl', 'specifications', 'features'];
  const requiredSpecs = ['motor', 'speed', 'range', 'battery', 'chargingTime'];
  
  return requiredFields.every(field => bike.hasOwnProperty(field)) &&
         requiredSpecs.every(spec => bike.specifications?.hasOwnProperty(spec)) &&
         Array.isArray(bike.features);
};