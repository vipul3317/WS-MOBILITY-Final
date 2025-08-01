import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Target, DollarSign, Award, Megaphone, Headphones, ExternalLink, Factory, Zap, Plus, Shield, Smartphone, Wrench, Leaf, Calculator, MapPin, Phone, Mail, MessageCircle, Star, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import EvNavbar from '../../components/navbar/evNav';
import EVMarket from './evmarket';
import WhatWeProvide from './whatweprovide';
import Sendmsg from './sendmsg';
import ScrollToTopButton from '../../utils/ScrollToTopButton';

const EVLandingPage = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/evdealership');
    }
    const handleExploreClick = () => {
        navigate('/evbikemodels');
    }
    const [activeModel, setActiveModel] = useState(0);

    const address = "Engtian Electric Bike Pvt Ltd - Gut No 35, Nk E-Bike, Village -Dhotre Bk, Block - Parner, Ahmednagar, Maharashtra 414304";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.slice(1); // remove #
            const section = document.getElementById(id);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' });
                }, 0);
            }
        }
    }, [location]);

    const models = [
        {
            name: 'WS Urban Pro',
            subtitle: 'The Daily Commuter',
            range: '120 km',
            speed: '65 kmph',
            charging: '4-5 hours',
            image: '/api/placeholder/400/300',
            features: ['Perfect for office commute', 'Optimal battery life', 'Cost-effective solution']
        },
        {
            name: 'WS Elite',
            subtitle: 'The Smart Rider',
            range: '150 km',
            speed: '70 kmph',
            charging: '4-5 hours',
            image: '/api/placeholder/400/300',
            features: ['App connectivity', 'GPS tracking', 'Premium comfort']
        },
        {
            name: 'WS Cargo',
            subtitle: 'The Business Partner',
            range: '100 km',
            speed: '60 kmph',
            charging: '5-6 hours',
            image: '/api/placeholder/400/300',
            features: ['150 kg payload', 'Commercial use', 'Quick ROI']
        }
    ];

    const benefits = [
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: 'Fastest-Growing EV Brand in India',
            description: 'Partner with India\'s rapidly expanding electric mobility leader. Our strong presence across two-wheeler and three-wheeler segments creates high market demand, ensuring consistent customer interest and sales opportunities for your dealership.'
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: 'Low Investment, High Returns',
            description: 'Launch your EV dealership with minimal upfront investment while enjoying industry-best profit margins on every sale. Our optimized business model ensures quick ROI and sustainable profitability from day one.'
        },
        {
            icon: <Megaphone className="w-8 h-8" />,
            title: 'Proven Marketing & Sales Support',
            description: 'Eliminate guesswork with our comprehensive marketing ecosystem. From targeted digital campaigns to effective on-ground activations, we provide proven strategies that generate qualified leads and drive conversions consistently.'
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: 'Strong Brand Recall',
            description: 'Leverage our established brand recognition and growing customer base to accelerate your sales process. WS Mobility\'s trusted reputation makes customer acquisition faster and easier, reducing your sales cycle significantly.'
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: '100% Dealer-Centric Model',
            description: 'Experience true partnership with complete transparency. No hidden charges, no forced inventory, and no unrealistic targets. Our success is directly tied to your growth, ensuring mutual profitability and long-term business sustainability.'
        },
        {
            icon: <Headphones className="w-8 h-8" />,
            title: 'Dedicated After-Sales Support',
            description: 'Ensure customer satisfaction and loyalty with our comprehensive service infrastructure. Complete access to genuine spares, technical support, and service training keeps your customers happy and generates repeat business opportunities.'
        }
    ];
    const [testimonials, setTestimonials] = useState([
        {
            id: 1,
            name: 'Rajesh Motors',
            role: 'Authorized Dealer, Mumbai',
            text: 'Partnership with WS Mobility transformed our business. 40% increase in monthly sales within 6 months!',
            rating: 5,
            date: '2024-01-15'
        },
        {
            id: 2,
            name: 'Green Wheels Dealership',
            role: 'Multi-brand Dealer, Bangalore',
            text: 'Excellent support from WS team. Training programs and marketing assistance helped us become the top dealer in our region.',
            rating: 5,
            date: '2024-01-20'
        },
        {
            id: 3,
            name: 'Speed Zone Motors',
            role: 'New Dealer Partner, Delhi NCR',
            text: 'Started with zero EV knowledge. WS Mobility\'s comprehensive training made us EV experts. ROI exceeded expectations!',
            rating: 5,
            date: '2024-01-25'
        },
        {
            id: 4,
            name: 'City Bike Hub',
            role: 'Franchise Owner, Pune',
            text: 'Low investment, high returns. The dealership model is dealer-friendly with great profit margins.',
            rating: 4,
            date: '2024-02-01'
        },
        {
            id: 5,
            name: 'Electric Avenue',
            role: 'Dealership Partner, Hyderabad',
            text: 'Customer demand for WS bikes is incredible. Inventory moves fast, profits are consistent.',
            rating: 5,
            date: '2024-02-05'
        },
        {
            id: 6,
            name: 'Future Mobility Solutions',
            role: 'Service & Sales Center, Chennai',
            text: 'Technical support is outstanding. Spare parts availability and warranty claims process is seamless.',
            rating: 5,
            date: '2024-02-10'
        }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newReview, setNewReview] = useState({
        name: '',
        role: '',
        text: '',
        rating: 5
    });
    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-scroll functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const totalSlides = Math.ceil(testimonials.length / itemsPerView);
                const currentSlide = Math.floor(prevIndex / itemsPerView);
                if (currentSlide >= totalSlides - 1) {
                    return 0;
                }
                return prevIndex + itemsPerView;
            });
        }, 4000);

        return () => clearInterval(timer);
    }, [testimonials.length, itemsPerView]);

    const nextSlide = () => {
        const totalSlides = Math.ceil(testimonials.length / itemsPerView);
        const currentSlide = Math.floor(currentIndex / itemsPerView);
        if (currentSlide < totalSlides - 1) {
            setCurrentIndex(prev => prev + itemsPerView);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        const currentSlide = Math.floor(currentIndex / itemsPerView);
        if (currentSlide > 0) {
            setCurrentIndex(prev => prev - itemsPerView);
        } else {
            const totalSlides = Math.ceil(testimonials.length / itemsPerView);
            setCurrentIndex((totalSlides - 1) * itemsPerView);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRatingChange = (rating) => {
        setNewReview(prev => ({
            ...prev,
            rating
        }));
    };

    const handleSubmitReview = () => {
        if (newReview.name && newReview.role && newReview.text) {
            const review = {
                id: testimonials.length + 1,
                ...newReview,
                date: new Date().toISOString().split('T')[0]
            };
            setTestimonials(prev => [review, ...prev]);
            setNewReview({ name: '', role: '', text: '', rating: 5 });
            setShowAddForm(false);
        }
    };

    const totalSlides = Math.ceil(testimonials.length / itemsPerView);
    const currentSlide = Math.floor(currentIndex / itemsPerView);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveModel((prev) => (prev + 1) % models.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* back Scroller */}
            <ScrollToTopButton />

            {/* Navigation */}
            <EvNavbar />

            {/* Hero Section */}
            <section
                style={{
                    backgroundImage: "url('assets/bg-bike.jpeg')",
                    height: "100vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center ",
                    backgroundRepeat: "no-repeat"
                }}
                className="pt-40 bg-green-100 relative z-0"
            >

                <div className="absolute inset-0 bg-black bg-opacity-55 z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold text-white mb-4">
                            <span className="block">The Future.</span>
                            <span className="block text-[#32CD32]">Is Electric.</span>
                            <span className="block">Is Here.</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 px-4">
                            Join India's fastest-growing electric vehicle brand. <br />Exclusive dealership opportunities with attractive margins and comprehensive support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                            <button
                                onClick={handleOnClick}
                                className="px-6 sm:px-8 py-3 text-base sm:text-lg bg-[#2EB82E] text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                                Apply For Dealership
                            </button>
                            <button
                                onClick={handleExploreClick}
                                className=" flex px-6 sm:px-8 py-3 text-base sm:text-lg border border-green-700 text-green-700 bg-white bg-opacity-90 rounded-lg hover:bg-opacity-100 transition-colors font-semibold"
                            >
                                <Phone className='mr-2' />
                                Schedule a Call
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Models */}
            <section id="product-portfolio" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="md:text-5xl font-bold text-gray-900 mb-4">Our Product Portfolio</h2>
                        <p className="text-gray-600 text-2xl max-w-2xl mx-auto">High-demand electric vehicles with attractive profit margins</p>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${activeModel * 100}%)` }}>
                                {models.map((model, index) => (
                                    <div key={index} className="w-full flex-shrink-0">
                                        <div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden mx-4">
                                            <div className="md:flex">
                                                <div className="md:w-1/2 p-8">
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h3>
                                                    <p className="text-green-600 font-semibold mb-4">{model.subtitle}</p>

                                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                                        <div>
                                                            <span className="text-sm text-gray-500">Range</span>
                                                            <p className="font-semibold">{model.range}</p>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-500">Top Speed</span>
                                                            <p className="font-semibold">{model.speed}</p>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-500">Charging</span>
                                                            <p className="font-semibold">{model.charging}</p>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-gray-500">Price</span>
                                                            <p className="font-semibold text-green-600">{model.price}*</p>
                                                        </div>
                                                    </div>

                                                    <ul className="space-y-2 mb-6">
                                                        {model.features.map((feature, idx) => (
                                                            <li key={idx} className="flex items-center text-sm text-gray-600">
                                                                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <div className="flex flex-col sm:flex-row gap-3">
                                                        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                                            Book Test Ride
                                                        </button>
                                                        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                                            EMI Calculator
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="md:w-1/2 bg-blue-100 flex items-center justify-center p-8">
                                                    <div className="w-full h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                                                        <span className="text-gray-500">EV Bike Image</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-green-100 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
                            onClick={() => setActiveModel((prev) => (prev - 1 + models.length) % models.length)}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-100 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
                            onClick={() => setActiveModel((prev) => (prev + 1) % models.length)}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <div className="flex justify-center mt-6 space-x-2">
                            {models.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === activeModel ? 'bg-green-600' : 'bg-gray-300'
                                        }`}
                                    onClick={() => setActiveModel(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Models */}
            <section id='models' className="bg-white py-16 pt-6">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden" style={{ boxShadow: '0 0 50px rgba(0, 0, 0, 0.1), 0 25px 50px rgba(0, 0, 0, 0.15)' }}>
                        <div className="relative overflow-hidden">
                            {/* Soft Animated Background Elements */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-emerald-100/20 to-teal-100/30">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-green-200/10 rounded-full -translate-x-32 -translate-y-32 animate-pulse"></div>
                                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/10 rounded-full translate-x-48 translate-y-48 animate-pulse delay-700"></div>
                                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-teal-200/15 rounded-full animate-bounce delay-300"></div>
                                <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-green-300/10 rounded-full animate-pulse delay-1000"></div>
                            </div>

                            {/* Geometric Patterns */}
                            <div className="absolute inset-0 opacity-60">
                                <svg className="w-full h-full" viewBox="0 0 400 200">
                                    <defs>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#059669" stopOpacity="0.4" />
                                            <stop offset="50%" stopColor="#10b981" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.2" />
                                        </linearGradient>
                                        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#059669" stopOpacity="0.5" />
                                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,100 Q100,60 200,100 T400,100" stroke="url(#lineGradient)" strokeWidth="3" fill="none" />
                                    <path d="M0,130 Q150,80 300,130 T400,130" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                                    <path d="M0,70 Q200,40 400,70" stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" />
                                    <circle cx="80" cy="70" r="5" fill="url(#circleGradient)">
                                        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="320" cy="130" r="4" fill="url(#circleGradient)">
                                        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="200" cy="50" r="3" fill="url(#circleGradient)">
                                        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" />
                                    </circle>
                                </svg>
                            </div>

                            {/* Main Content */}
                            <div className="relative z-10 px-8 py-8 text-center">
                                <div className="relative inline-block mb-8">
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-3xl blur-xl transform rotate-6"></div>
                                    <div className="relative bg-white/40 backdrop-blur-md border border-green-200/30 rounded-3xl p-6 shadow-lg">
                                        <div className="flex items-center justify-center space-x-3">
                                            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
                                    Discover Our
                                    <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                        Complete Collection
                                    </span>
                                </h2>

                                <p className="text-slate-600 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                                    From urban commuters to performance riders, explore our full range of cutting-edge electric bikes crafted for the future of mobility.
                                </p>

                                {/* CTA Button */}
                                <div className="relative inline-block">
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-lg transform scale-110"></div>
                                    <button
                                        onClick={handleExploreClick}
                                        className="relative group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-500 shadow-xl border border-white/20 flex items-center gap-4"
                                    >
                                        <span className="relative">
                                            Explore All Models
                                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></div>
                                        </span>

                                        <div className="relative">
                                            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                                        </div>
                                    </button>
                                </div>

                                {/* Badge */}
                                <div className="mt-8 inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-green-200/30 rounded-full px-6 py-3 shadow-sm">
                                    <div className="flex -space-x-2">
                                        <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
                                        <div className="w-3 h-3 bg-emerald-400 rounded-full border-2 border-white shadow-sm"></div>
                                        <div className="w-3 h-3 bg-teal-400 rounded-full border-2 border-white shadow-sm"></div>
                                    </div>
                                    <span className="text-slate-600 text-sm font-medium">15+ Premium Models</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section id="why-partner" className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose WS Mobility?</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-semibold font-poppins">Join our growing network of successful EV dealerships and unlock exceptional business opportunities</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100 border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 text-center p-8 rounded-2xl shadow-lg">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl"></div>
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-emerald-500 rounded-b-full"></div>
                                <div className="relative z-10 transform group-hover:-translate-y-2 transition-all duration-500">

                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 group-hover:bg-white/20 rounded-2xl mb-6 text-emerald-600 group-hover:text-white shadow-lg group-hover:shadow-2xl group-hover:shadow-emerald-500/30 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        {benefit.icon}
                                    </div>

                                    <h3 className="text-xl font-poppins font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-gray-700 group-hover:text-gray-100 leading-relaxed transition-colors duration-500">
                                        {benefit.description}
                                    </p>
                                </div>

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 1px, transparent 1px),
                                            radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                                        backgroundSize: '30px 30px'
                                    }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <EVMarket />
            <WhatWeProvide />
            {/* manufacturing */}
            <div className="min-h-screen bg-emerald-100 pt-8 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex justify-center items-center mb-6">
                            <div className="bg-white p-1 rounded-full shadow-lg">
                                <img src='assets/parentCompanyLogo1.png' alt='ws-logo' className='w-32 h-32' />
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Manufacturing Hub</h1>
                        <div className="w-80 h-1 bg-green-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="relative h-96 bg-gray-200 flex items-center justify-center">
                            <img src='assets/manufacturing.png' className='w-160' />
                        </div>

                        <div className="p-8 lg:p-12">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Side - Company Info */}
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                            <Factory className="w-8 h-8 text-green-600" />
                                            Manufacturing Excellence
                                        </h2>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            Our cutting-edge manufacturing facility represents the pinnacle of electric bike production technology.
                                            With advanced assembly lines and quality control systems, we ensure every vehicle meets the highest standards.
                                        </p>
                                    </div>

                                    {/* Company Details Card */}
                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Company Details</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 text-lg font-semibold">Engtian Electric Bike Pvt Ltd</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">Gut No 35, NK E-Bike</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">Village - Dhotre Bk, Block - Parner</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">Ahmednagar, Maharashtra 414304</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-green-500">
                                            <h4 className="font-bold text-gray-800 text-base mb-1">Production Capacity</h4>
                                            <p className="text-gray-600 text-sm">High-volume manufacturing</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-green-500">
                                            <h4 className="font-bold text-gray-800 text-base mb-1">Quality Control</h4>
                                            <p className="text-gray-600 text-sm">ISO certified processes</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-lg border-l-4  border-green-500">
                                            <h4 className="font-bold text-gray-800 text-base mb-1">Technology</h4>
                                            <p className="text-gray-600 text-sm">Advanced automation</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-lg border-l-4  border-green-500">
                                            <h4 className="font-bold text-gray-800 text-base mb-1">Sustainability</h4>
                                            <p className="text-gray-600 text-sm">Eco-friendly operations</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Location & Map */}
                                <div className="space-y-8">
                                    {/* Location Card */}
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                                        <div className="flex items-center gap-3 mb-6">
                                            <MapPin className="w-8 h-8 text-green-800" />
                                            <h3 className="text-2xl font-bold text-gray-800">Our Location</h3>
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                                <h4 className="font-semibold text-gray-800 mb-2">Complete Address</h4>
                                                <p className="text-gray-600 leading-relaxed text-sm">
                                                    Engtian Electric Bike Pvt Ltd<br />
                                                    Gut No 35, NK E-Bike<br />
                                                    Village - Dhotre Bk, Block - Parner<br />
                                                    Ahmednagar, Maharashtra 414304
                                                </p>
                                            </div>
                                        </div>

                                        {/* Google Maps Button */}
                                        <a
                                            href={googleMapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group w-full justify-center"
                                        >
                                            <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                                            View on Google Maps
                                            <ExternalLink className="w-4 h-4" />
                                        </a>

                                        <p className="text-gray-500 text-sm text-center mt-3">
                                            Get directions and explore our facility location
                                        </p>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
                                        <h4 className="font-bold text-lg text-gray-800 mb-4">Visit Our Facility</h4>
                                        <div className="space-y-3 text-base">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                <span className="text-gray-700">Manufacturing tours available</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                <span className="text-gray-700">Business partnerships welcome</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                <span className="text-gray-700">Strategic location in Maharashtra</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <section id='success-stories' className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300 rounded-full blur-lg animate-bounce delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-teal-300 rounded-full blur-2xl animate-pulse delay-500"></div>
                    <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-lime-300 rounded-full blur-lg animate-ping delay-700"></div>
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-block mb-4">
                            <h2 className="text-3xl md:text-4xl font-bold bg-teal-900 bg-clip-text text-transparent mb-4">
                                Successful Dealer Partners
                            </h2>
                            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full animate-pulse"></div>
                        </div>
                        <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-lg">
                            Join our growing network of profitable EV dealerships across India
                        </p>
                        <button
                            onClick={() => setShowAddForm(true)}
                            className="group inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-emerald-900 text-white px-4 py-4 rounded-2xl hover:from-green-400 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:text-yellow-300 hover:shadow-green-500/25 border border-green-400/20 relative overflow-hidden"
                        >
                            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                            Share Your Experience
                            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
                        </button>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden pt-8 pb-8 rounded-xl">
                            <div
                                className="flex transition-transform duration-300 ease-out"
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`
                                }}
                            >
                                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="w-full flex-shrink-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                                            {testimonials
                                                .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                                                .map((testimonial) => (
                                                    <div key={testimonial.id} className="group relative bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 border border-green-200/50 hover:border-green-400/50 overflow-hidden">

                                                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-transparent rounded-bl-3xl"></div>

                                                        <div className="relative z-10">
                                                            <div className="flex items-center justify-between mb-4">
                                                                <div className="flex items-center space-x-1">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <Star
                                                                            key={i}
                                                                            className={`w-5 h-5 transition-all duration-300 ${i < testimonial.rating
                                                                                ? 'text-yellow-400 fill-current group-hover:scale-110'
                                                                                : 'text-gray-300'
                                                                                }`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-xs text-green-700 bg-green-100/80 px-3 py-1 rounded-full font-medium backdrop-blur">
                                                                    {new Date(testimonial.date).toLocaleDateString('en-IN')}
                                                                </span>
                                                            </div>
                                                            <p className="text-gray-700 mb-4 leading-relaxed text-sm italic font-medium">
                                                                "{testimonial.text}"
                                                            </p>
                                                            <div className="border-t border-green-200 pt-4 mt-auto">
                                                                <p className="font-bold text-gray-900 text-base group-hover:text-green-700 transition-colors duration-300">{testimonial.name}</p>
                                                                <p className="text-sm text-green-600 font-medium">{testimonial.role}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}

                                            {Array.from({
                                                length: Math.max(0, itemsPerView - testimonials.slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView).length)
                                            }).map((_, emptyIndex) => (
                                                <div key={`empty-${emptyIndex}`} className="invisible">
                                                    <div className="bg-white rounded-lg p-6 h-64"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        {totalSlides > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed border border-green-200/50 hover:border-green-400/50"
                                    disabled={currentSlide === 0}
                                >
                                    <ChevronLeft className="w-5 h-5 text-green-800" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed border border-green-200/50 hover:border-green-400/50"
                                    disabled={currentSlide >= totalSlides - 1}
                                >
                                    <ChevronRight className="w-5 h-5 text-green-800" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Pagination Dots */}
                    {totalSlides > 1 && (
                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index * itemsPerView)}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${currentSlide === index
                                        ? 'bg-green-600 scale-110'
                                        : 'bg-green-300 hover:bg-green-400 hover:scale-105'
                                        }`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Dealership Network Statistics */}
                    <div className="mt-12 text-center">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <div className="bg-white/80 backdrop-blur rounded-xl px-6 py-4 shadow-lg border border-green-200/50 hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                                <div className="text-3xl font-bold text-green-600">{testimonials.length}+</div>
                                <div className="text-sm text-gray-700 font-medium">Partner Reviews</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur rounded-xl px-6 py-4 shadow-lg border border-green-200/50 hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                                <div className="text-3xl font-bold text-emerald-600">500+</div>
                                <div className="text-sm text-gray-700 font-medium">Active Dealers</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur rounded-xl px-6 py-4 shadow-lg border border-green-200/50 hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                                <div className="text-3xl font-bold text-yellow-500">
                                    {(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)}
                                </div>
                                <div className="text-sm text-gray-700 font-medium">Partner Rating</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur rounded-xl px-6 py-4 shadow-lg border border-green-200/50 hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                                <div className="text-3xl font-bold text-teal-600">25+</div>
                                <div className="text-sm text-gray-700 font-medium">States Covered</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Review Modal */}
                {showAddForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg max-w-md w-full p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Share Your Dealership Experience</h3>
                                <button
                                    onClick={() => setShowAddForm(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Dealership Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={newReview.name}
                                        onChange={handleInputChange}
                                        placeholder="e.g., ABC Motors"
                                        className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Role & Location *
                                    </label>
                                    <input
                                        type="text"
                                        name="role"
                                        value={newReview.role}
                                        onChange={handleInputChange}
                                        placeholder="e.g., Authorized Dealer, Mumbai"
                                        className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Partner Rating *
                                    </label>
                                    <div className="flex space-x-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => handleRatingChange(star)}
                                                className={`w-8 h-8 ${star <= newReview.rating
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-300'
                                                    } hover:text-yellow-400 transition-colors`}
                                            >
                                                <Star className="w-full h-full fill-current" />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Experience *
                                    </label>
                                    <textarea
                                        name="text"
                                        value={newReview.text}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Share your experience as a WS Mobility dealer partner..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex space-x-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowAddForm(false)}
                                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmitReview}
                                        className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                                    >
                                        Submit Review
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Contact */}
            <Sendmsg />

        </div>
    )
}
export default EVLandingPage; 