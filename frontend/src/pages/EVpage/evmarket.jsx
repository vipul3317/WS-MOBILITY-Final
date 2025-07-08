import React, { useState, useEffect } from 'react';
import { TrendingUp, Zap, Users, Target, CheckCircle, MapPin, IndianRupee, Car, Truck, Bus, Battery, Award, Globe, ArrowRight } from 'lucide-react';

const EVMarket = () => {
    const [animatedValue, setAnimatedValue] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('ev-market-section');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timer = setInterval(() => {
                setAnimatedValue(prev => {
                    if (prev >= 56.37) {
                        clearInterval(timer);
                        return 56.37;
                    }
                    return prev + 0.8;
                });
            }, 50);
        }
    }, [isVisible]);

    const marketStats = [
        {
            icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
            image: "assets/marketStats/photo-1.jpg",
            title: "56.37 Lakh",
            subtitle: "Total EV Sales (2024)",
            description: "Massive market growth creates prime dealership opportunities",
            trend: "+180% YoY",
            highlight: "High Demand"
        },
        {
            icon: <Car className="w-8 h-8 text-green-600" />,
            image: "assets/marketStats/photo-2.jpg",
            title: "20.1 Lakh",
            subtitle: "E2W Registrations",
            description: "Two-wheelers dominate with 70%+ market share - ideal for dealers",
            trend: "+165% YoY",
            highlight: "Top Segment"
        },
        {
            icon: <MapPin className="w-8 h-8 text-purple-600" />,
            image: "assets/marketStats/photo-3.jpg",
            title: "300%",
            subtitle: "Tier 2/3 Growth",
            description: "Explosive growth in smaller cities offers untapped potential",
            trend: "High ROI",
            highlight: "Opportunity Zone"
        },
        {
            icon: <Target className="w-8 h-8 text-orange-600" />,
            image: "assets/marketStats/photo-4.jpg",
            title: "30% by 2030",
            subtitle: "Government Target",
            description: "FAME-II support ensures sustained demand for EV dealerships",
            trend: "Guaranteed",
            highlight: "Policy Backed"
        },
        {
            icon: <Zap className="w-8 h-8 text-indigo-600" />,
            image: "",
            title: "₹15,000Cr",
            subtitle: "FAME-II Budget",
            description: "Government subsidies boost sales volume and reduce customer cost",
            trend: "Active",
            highlight: "Subsidy Support"
        }
    ];

    const opportunities = [
        {
            icon: <CheckCircle className="w-6 h-6 text-green-500" />,
            title: "Massive Untapped Demand",
            description: "Rural, semi-urban & urban India embracing electric mobility"
        },
        {
            icon: <IndianRupee className="w-6 h-6 text-blue-500" />,
            title: "Easy Selling Points",
            description: "Fuel savings + low maintenance = Customer satisfaction"
        },
        {
            icon: <Award className="w-6 h-6 text-purple-500" />,
            title: "Government Support",
            description: "FAME-II subsidies, easy financing, eco-awareness driving conversions"
        },
        {
            icon: <Globe className="w-6 h-6 text-orange-500" />,
            title: "Fleet Demand Boom",
            description: "Zomato, Amazon, courier businesses driving commercial adoption"
        }
    ];

    return (
        <div id="ev-market-section" className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full mb-4">
                        <Battery className="w-5 h-5 text-green-700 mr-2" />
                        <span className="text-green-700 font-semibold">EV Market Opportunity</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Ride the EV Boom with<br /> <span className="text-green-600">WS Mobility</span>
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-semibold">
                        India is experiencing an electric revolution — and you can be part of it with WS Mobility's dealership opportunity.
                    </p>
                </div>

                {/* Animated Counter Section */}
                <div className="mb-12">
                    <div className="bg-green-100 rounded-2xl p-6 text-center">
                        <div className="text-6xl font-bold text-yellow-600 mb-4">
                            {animatedValue.toFixed(1)} <span className="text-2xl">Lakh</span>
                        </div>
                        <div className="text-2xl text-gray-700 mb-2 font-semibold">Total EV Sales in India (CY2024)</div>
                        <div className="text-lg font-semibold text-gray-500">Cumulative registrations across all categories</div>
                    </div>
                </div>

                {/* Market Stats Grid */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Key metrics showing why now is <br />the perfect time to start your EV dealership business</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                    {marketStats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 hover:scale-[1.05]">
                            {/* Image Section */}
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src={stat.image}
                                    alt={stat.subtitle}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-3 left-3 bg-slate-100 backdrop-blur-sm rounded-full p-2">
                                    {stat.icon}
                                </div>
                                <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    {stat.trend}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-5">
                                <div className="text-2xl font-bold text-yellow-500 mb-1">{stat.title}</div>
                                <div className="text-base font-semibold text-slate-600 mb-2">{stat.subtitle}</div>
                                <div className="text-sm text-black leading-relaxed mb-3">{stat.description}</div>

                                <div className="flex items-center justify-between">
                                    <div className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-1 rounded-full">
                                        {stat.highlight}
                                    </div>
                                    <div className="text-xs text-yellow-400 font-semibold">
                                        2024 Data
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* What This Means for You */}
                <div className="mb-16">
                    <h3 className="text-2xl sm:text-4xl font-bold text-green-700 mb-8 text-center ">What This Means for You</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {opportunities.map((opportunity, index) => (
                            <div key={index} className="bg-slate-100 rounded-xl p-6 hover:bg-green-50 transition-colors duration-300">
                                <div className="flex items-start">
                                    <div className="mr-4 mt-1">
                                        {opportunity.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">{opportunity.title}</h4>
                                        <p className="text-gray-600">{opportunity.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-gray-800 text-white rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
                        <p className="text-lg mb-6">
                            India aims to achieve 30% EV penetration by 2030. Now is the time to build your EV dealership business while competition is low!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EVMarket;