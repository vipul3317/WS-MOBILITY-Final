import React from 'react';
import { Package, GraduationCap, Megaphone, BarChart3, UserCheck, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhatWeProvide = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/evdealership');
    }
    const services = [
        {
            icon: <Package className="w-8 h-8 text-yellow-300" />,
            title: "Complete Dealership Kit",
            description: "Everything you need to start - POSM materials, software systems, and operational tools",
            features: ["Point of Sale Materials", "Dealership Software", "Operational Tools", "Brand Assets"],
            color: "green"
        },
        {
            icon: <GraduationCap className="w-8 h-8 text-yellow-300" />,
            title: "Sales & Technical Training",
            description: "Comprehensive training programs to make you an EV expert and sales champion",
            features: ["Product Knowledge", "Sales Techniques", "Technical Support", "Ongoing Updates"],
            color: "green"
        },
        {
            icon: <Megaphone className="w-8 h-8 text-yellow-300" />,
            title: "Marketing & Digital Support",
            description: "Professional marketing campaigns and digital presence to drive customers to your store",
            features: ["Digital Campaigns", "Social Media Support", "Local Marketing", "Lead Generation"],
            color: "green"
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-yellow-300" />,
            title: "Inventory Management",
            description: "Smart inventory systems and credit facilities to optimize your stock and cash flow",
            features: ["Stock Management", "Credit Facility", "Demand Forecasting", "Auto Replenishment"],
            color: "green"
        },
        {
            icon: <UserCheck className="w-8 h-8 text-yellow-300" />,
            title: "Dedicated Relationship Manager",
            description: "Personal support manager to guide your business growth and resolve any challenges",
            features: ["Personal Support", "Business Guidance", "Issue Resolution", "Growth Planning"],
            color: "green"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            green: "border-green-300 hover:border-green-400 bg-gradient-to-br from-slate-800 to-green-900 text-white hover:from-slate-700 hover:to-green-800",

        };
        return colors[color];
    };

    return (
        <div className="px-4 md:px-8 lg:px-16 py-16 bg-gray-200">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Provide</h2>
                <p className="text-lg sm:text-xl font-semibold text-gray-600 max-w-3xl mx-auto">
                    Complete end-to-end support to ensure your EV dealership success from day one
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className={`rounded-xl border-2 ${getColorClasses(service.color)} p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]`}>
                        {/* Icon and Title */}
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-100 mb-4 leading-relaxed">{service.description}</p>

                        {/* Features List */}
                        <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                    <span className="text-sm text-yellow-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 rounded-2xl p-8 text-white border border-gray-700 shadow-2xl">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">Ready to Get Started?</h3>
                    <p className="text-gray-300 text-lg font-semibold mb-6">Join our network of successful EV dealers with complete support</p>
                    <button
                        onClick={handleOnClick}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                        Start Your EV Journey Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhatWeProvide;