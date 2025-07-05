import React, { useState, useMemo, useCallback } from 'react';
import { Search, Filter, X, ChevronDown, SortAsc, SortDesc, Star, Zap, Gauge, Battery } from 'lucide-react';

const BikeModels = ({ bikes: initialBikes = [] }) => {
    // State management
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [showFilters, setShowFilters] = useState(false);
    const [featuredOnly, setFeaturedOnly] = useState(false);
    const [availableOnly, setAvailableOnly] = useState(false);
    const [speedRange, setSpeedRange] = useState([0, 200]);
    const [rangeFilter, setRangeFilter] = useState([0, 300]);
    const [batteryType, setBatteryType] = useState('all');
    const [motorType, setMotorType] = useState('all');
    const [chargingType, setChargingType] = useState('all');

    // Memoized calculations
    const { categories, filterOptions } = useMemo(() => {
        const cats = [...new Set(initialBikes.map(bike => bike.category))].filter(Boolean).sort();
        
        const batteryTypes = [...new Set(initialBikes.map(bike => 
            bike.specifications?.batteryType || bike.specifications?.battery
        ).filter(Boolean))].sort();
        
        const motorTypes = [...new Set(initialBikes.map(bike => 
            bike.specifications?.motorType || bike.specifications?.motor
        ).filter(Boolean))].sort();
        
        const chargingTypes = [...new Set(initialBikes.map(bike => 
            bike.specifications?.chargingType || bike.specifications?.charging
        ).filter(Boolean))].sort();
        
        const speeds = initialBikes.map(bike => 
            parseInt(bike.specifications?.speed?.toString().replace(/\D/g, '') || '0')
        ).filter(speed => speed > 0);
        
        const ranges = initialBikes.map(bike => 
            parseInt(bike.specifications?.range?.toString().replace(/\D/g, '') || '0')
        ).filter(range => range > 0);
        
        return {
            categories: cats,
            filterOptions: {
                batteryTypes,
                motorTypes,
                chargingTypes,
                speedBounds: speeds.length > 0 ? 
                    { min: Math.min(...speeds), max: Math.max(...speeds) } : 
                    { min: 0, max: 200 },
                rangeBounds: ranges.length > 0 ? 
                    { min: Math.min(...ranges), max: Math.max(...ranges) } : 
                    { min: 0, max: 300 }
            }
        };
    }, [initialBikes]);

    // Utility functions
    const getSpecIcon = useCallback((key) => {
        const iconMap = { motor: Zap, range: Battery, speed: Gauge, battery: Battery };
        return iconMap[key.toLowerCase()] || Zap;
    }, []);

    const searchBikes = useCallback((bikes, query) => {
        if (!query?.trim()) return bikes;
        const searchTerm = query.toLowerCase().trim();
        
        return bikes.filter(bike => {
            const searchableFields = [
                bike.name, bike.category, bike.specifications?.motor,
                bike.specifications?.range, bike.specifications?.speed,
                bike.specifications?.battery, ...(bike.features || [])
            ].filter(Boolean).map(field => field.toString().toLowerCase());

            return searchableFields.some(field => field.includes(searchTerm));
        });
    }, []);

    // Main filtering and sorting logic
    const filteredAndSortedBikes = useMemo(() => {
        let filtered = searchBikes(initialBikes, searchQuery);

        // Apply filters
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(bike => bike.category === selectedCategory);
        }

        filtered = filtered.filter(bike => {
            const speed = parseInt(bike.specifications?.speed?.toString().replace(/\D/g, '') || '0');
            const range = parseInt(bike.specifications?.range?.toString().replace(/\D/g, '') || '0');
            return speed >= speedRange[0] && speed <= speedRange[1] &&
                   range >= rangeFilter[0] && range <= rangeFilter[1];
        });

        if (batteryType !== 'all') {
            filtered = filtered.filter(bike => 
                bike.specifications?.batteryType === batteryType || 
                bike.specifications?.battery === batteryType
            );
        }

        if (motorType !== 'all') {
            filtered = filtered.filter(bike => 
                bike.specifications?.motorType === motorType || 
                bike.specifications?.motor === motorType
            );
        }

        if (chargingType !== 'all') {
            filtered = filtered.filter(bike => 
                bike.specifications?.chargingType === chargingType || 
                bike.specifications?.charging === chargingType
            );
        }

        if (featuredOnly) filtered = filtered.filter(bike => bike.featured === true);
        if (availableOnly) filtered = filtered.filter(bike => bike.available === true);

        // Apply sorting
        filtered.sort((a, b) => {
            let aValue, bValue;
            switch (sortBy) {
                case 'range':
                    aValue = parseInt(a.specifications?.range?.toString().replace(/\D/g, '') || '0');
                    bValue = parseInt(b.specifications?.range?.toString().replace(/\D/g, '') || '0');
                    break;
                case 'speed':
                    aValue = parseInt(a.specifications?.speed?.toString().replace(/\D/g, '') || '0');
                    bValue = parseInt(b.specifications?.speed?.toString().replace(/\D/g, '') || '0');
                    break;
                case 'category':
                    aValue = (a.category || '').toLowerCase();
                    bValue = (b.category || '').toLowerCase();
                    break;
                case 'name':
                default:
                    aValue = (a.name || '').toLowerCase();
                    bValue = (b.name || '').toLowerCase();
                    break;
            }
            return sortOrder === 'asc' ? 
                (aValue > bValue ? 1 : aValue < bValue ? -1 : 0) :
                (aValue < bValue ? 1 : aValue > bValue ? -1 : 0);
        });

        return filtered;
    }, [initialBikes, searchQuery, selectedCategory, speedRange, rangeFilter, batteryType, motorType, chargingType, sortBy, sortOrder, featuredOnly, availableOnly, searchBikes]);

    // Event handlers
    const resetFilters = useCallback(() => {
        setSearchQuery('');
        setSelectedCategory('all');
        setSpeedRange([filterOptions.speedBounds.min, filterOptions.speedBounds.max]);
        setRangeFilter([filterOptions.rangeBounds.min, filterOptions.rangeBounds.max]);
        setBatteryType('all');
        setMotorType('all');
        setChargingType('all');
        setSortBy('name');
        setSortOrder('asc');
        setFeaturedOnly(false);
        setAvailableOnly(false);
    }, [filterOptions]);

    const handleClearSearch = useCallback(() => setSearchQuery(''), []);

    // Render components
    const renderFilterSelect = (label, value, onChange, options, allLabel) => (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
            >
                <option value="all">{allLabel}</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );

    const renderRangeFilter = (label, range, setRange, bounds, step) => (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}: {range[0]} - {range[1]} {label.includes('Speed') ? 'km/h' : 'km'}
            </label>
            <div className="flex gap-2">
                {[0, 1].map(index => (
                    <input
                        key={index}
                        type="range"
                        min={bounds.min}
                        max={bounds.max}
                        step={step}
                        value={range[index]}
                        onChange={(e) => {
                            const newRange = [...range];
                            newRange[index] = parseInt(e.target.value);
                            setRange(newRange);
                        }}
                        className="flex-1 accent-green-600"
                    />
                ))}
            </div>
        </div>
    );

    const renderBikeCard = (bike, index) => (
        <div key={bike._id || index} className="group">
            {/* Bike Header */}
            <div className="text-center mb-8">
                <div className="inline-block mb-4 flex flex-wrap items-center justify-center gap-3">
                    <span className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-full text-sm font-semibold">
                        {bike.category || 'Uncategorized'}
                    </span>
                    {bike.featured && (
                        <span className="px-3 py-1 bg-blue-700 text-white rounded-full text-xs font-semibold flex items-center gap-1">
                            <Star className="h-3 w-3" fill="currentColor" />
                            FEATURED
                        </span>
                    )}
                    {bike.available === false && (
                        <span className="px-3 py-1 bg-gray-500 text-white rounded-full text-xs font-semibold">
                            OUT OF STOCK
                        </span>
                    )}
                </div>
                <h3 className="text-5xl font-serif font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                    {bike.name || 'Unnamed Bike'}
                </h3>
                <div className="text-center text-gray-600 mt-4">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium">
                        Contact for Pricing
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content Section */}
                <div className="space-y-6">
                    {/* Specifications */}
                    {bike.specifications && Object.keys(bike.specifications).length > 0 && (
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-700 rounded-lg flex items-center justify-center">
                                    <Gauge className="w-4 h-4 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-800">Performance Specs</h4>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                {Object.entries(bike.specifications).map(([key, value], i) => {
                                    const IconComponent = getSpecIcon(key);
                                    return (
                                        <div key={i} className="flex items-center gap-3 p-1 bg-gradient-to-r from-emerald-50 to-green-200 rounded-lg">
                                            <IconComponent className="w-4 h-4 text-green-700" />
                                            <div className="flex-1">
                                                <span className="text-sm text-gray-600 capitalize">
                                                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                                                </span>
                                                <span className="ml-2 font-semibold text-gray-800">{value}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Features */}
                    {bike.features && bike.features.length > 0 && (
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-700 rounded-lg flex items-center justify-center">
                                    <Star className="w-4 h-4 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-800">Key Features</h4>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                                {bike.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-green-200 to-emerald-50 transition-colors duration-200">
                                        <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-700 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Image Section */}
                <div className="relative">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-200 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                        <div className="relative bg-white rounded-3xl p-4 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                            <img
                                src={bike.imageUrl || `/api/placeholder/500/400`}
                                alt={bike.name || 'Bike image'}
                                className="w-100 h-80 pl-8 md:pl-56 sm:pl-24 lg:pl-20 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                            <div className="absolute top-4 right-4 flex flex-col gap-2">
                                <div className="bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                    ECO-FRIENDLY
                                </div>
                                {bike.available === false && (
                                    <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                        OUT OF STOCK
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Color Options */}
                    {bike.colors && bike.colors.length > 0 && (
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mt-10 shadow-lg border border-green-100">
                            <h4 className="text-lg font-bold text-gray-800 mb-3">Available Colors</h4>
                            <div className="flex flex-wrap gap-2">
                                {bike.colors.map((color, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-200 text-gray-900 rounded-full text-sm">
                                        {color}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    if (initialBikes.length === 0) {
        return (
            <section className="min-h-screen bg-gray-200 pt-0">
                <div className="max-w-7xl mx-auto px-4 py-16 pt-12">
                    <div className="text-center py-12">
                        <div className="text-gray-500 text-lg">No bikes available to display.</div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-gray-200 pt-0">
            <div className="max-w-7xl mx-auto px-4 py-2">
                {/* Search and Filter Controls */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 mb-12">
                    {/* Search Bar */}
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search bikes by name, features, or specifications..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        />
                        {searchQuery && (
                            <button
                                onClick={handleClearSearch}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-100 rounded-r-lg transition-colors"
                                aria-label="Clear search"
                            >
                                <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            </button>
                        )}
                    </div>

                    {/* Filter Toggle */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                        >
                            <Filter className="h-4 w-4" />
                            {showFilters ? 'Hide Filters' : 'Show Filters'}
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
                        </button>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <span className="text-sm text-gray-600">
                                {filteredAndSortedBikes.length} of {initialBikes.length} bikes
                            </span>
                            <button
                                onClick={resetFilters}
                                className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>

                    {/* Filter Controls */}
                    {showFilters && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300">
                            {renderFilterSelect('Category', selectedCategory, setSelectedCategory, categories, 'All Categories')}
                            {renderFilterSelect('Sort By', sortBy, setSortBy, ['name', 'category', 'range', 'speed'], 'Name')}
                            
                            {/* Sort Order */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
                                <button
                                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                                    className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
                                >
                                    {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
                                    {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                                </button>
                            </div>

                            {renderRangeFilter('Speed Range', speedRange, setSpeedRange, filterOptions.speedBounds, 5)}
                            {renderRangeFilter('Range', rangeFilter, setRangeFilter, filterOptions.rangeBounds, 10)}
                            {renderFilterSelect('Battery Type', batteryType, setBatteryType, filterOptions.batteryTypes, 'All Battery Types')}
                            {renderFilterSelect('Motor Type', motorType, setMotorType, filterOptions.motorTypes, 'All Motor Types')}
                            {renderFilterSelect('Charging Type', chargingType, setChargingType, filterOptions.chargingTypes, 'All Charging Types')}

                            {/* Checkboxes */}
                            <div className="col-span-full">
                                <div className="flex flex-wrap gap-6">
                                    {[
                                        { state: featuredOnly, setState: setFeaturedOnly, label: 'Featured Only' },
                                        { state: availableOnly, setState: setAvailableOnly, label: 'Available Only' }
                                    ].map(({ state, setState, label }) => (
                                        <label key={label} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={state}
                                                onChange={(e) => setState(e.target.checked)}
                                                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 accent-green-600"
                                            />
                                            <span className="text-sm text-gray-700">{label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bikes Grid */}
                {filteredAndSortedBikes.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-500 text-lg mb-4">No bikes found matching your criteria.</div>
                        <button
                            onClick={resetFilters}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="space-y-20">
                        {filteredAndSortedBikes.map(renderBikeCard)}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BikeModels;