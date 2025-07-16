import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    Car,
    Cpu,
    Cog,
    Wrench,
    Clock,
    Users,
    ChevronRight,
    Phone,
    Mail,
    MapPin,
    Target,
    Layers,
    Bike, Settings, Zap
} from 'lucide-react';


const ParentHero = () => {
    const [rotation, setRotation] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoverCar, setHoverCar] = useState(false);
    const [hoverBike, setHoverBike] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const carouselRef = useRef(null);
    const logos = [
        { id: 1, name: 'bike1', src: 'assets/bike-photos/1.png' },
        { id: 2, name: 'bike1', src: 'assets/bike-photos/2.png' },
        { id: 3, name: 'bike1', src: 'assets/bike-photos/3.png' },
        { id: 4, name: 'bike1', src: 'assets/bike-photos/4.png' },
        { id: 5, name: 'bike1', src: 'assets/bike-photos/5.png' },
        { id: 6, name: 'bike1', src: 'assets/bike-photos/6.png' },
        { id: 7, name: 'bike1', src: 'assets/bike-photos/7.png' },

    ];

    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const scrollCarousel = () => {
            if (carouselRef.current) {
                if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
                    carouselRef.current.scrollLeft = 0;
                } else {
                    carouselRef.current.scrollLeft += 1;
                }
            }
        }

        const interval = setInterval(scrollCarousel, 10);
        return () => clearInterval(interval);
    }, []);

    // Continuous background rotation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => (prev + 0.15) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    // Initial animation
    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Calculate 3D transform based on mouse position relative to card
    const calculate3DTransform = (e, cardId) => {
        if (!e.currentTarget) return;

        const card = e.currentTarget;
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        // Calculate mouse position relative to card center
        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;

        // Calculate rotation angles (limited range)
        const rotateY = (mouseX / (cardRect.width / 2)) * 5;
        const rotateX = -(mouseY / (cardRect.height / 2)) * 5;

        setMousePosition({
            x: rotateY,
            y: rotateX,
            cardId: cardId
        });
    };

    const resetTransform = (cardId) => {
        setMousePosition({
            x: 0,
            y: 0,
            cardId: cardId
        });
    };

    // Get 3D transform for a specific card
    const getTransform = (cardId) => {
        if (mousePosition.cardId === cardId) {
            return `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`;
        }
        return 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };


    return (
        <section className="bg-black pt-24 lg:pt-8">
            <div
                style={{
                    backgroundImage: "url('assets/ev-01.jpg')",
                    minHeight: "100vh", // Changed from height to minHeight
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
                className="container mx-auto flex z-0 justify-center gap-4 sm:gap-8 pt-8 sm:pt-16 lg:pt-4 pb-8 sm:pb-16 text-center lg:gap-24 flex-wrap items-center" // Added responsive padding and items-center
            >
                <div className="absolute inset-0 bg-black bg-opacity-25 z-0"></div>

                {/* Bike Purchase Card */}
                <div
                    className={`relative w-72 sm:w-80 md:w-96 h-72 sm:h-80 z-20 cursor-pointer transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-12' : 'opacity-100 translate-y-0'}`}
                    style={{ transitionDelay: '500ms' }}
                    onMouseMove={(e) => calculate3DTransform(e, 'bike')}
                    onMouseLeave={() => resetTransform('bike')}
                    onMouseEnter={() => setHoverBike(true)}
                    onMouseOut={() => setHoverBike(false)}
                >
                    {/* Main card with 3D transform */}
                    <div
                        className="absolute inset-0 rounded-2xl shadow-2xl transition-all duration-300 ease-out"
                        style={{
                            transform: getTransform('bike'),
                            boxShadow: hoverBike ? '0 20px 50px rgba(0, 100, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.15)',
                        }}
                    >
                        {/* Card background with animated gradients */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            {/* Base gradient */}
                            <div className="absolute inset-0 bg-gradient-to-bl from-green-700 via-green-500 to-green-300"></div>

                            {/* Animated rotating gradient overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-tl from-transparent via-emerald-600/30 to-green-400/40"
                                style={{
                                    transform: `rotate(${-rotation}deg)`,
                                    transformOrigin: 'center center',
                                }}
                            ></div>

                            {/* Animated pulse highlight */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-b from-white/0 via-green-300/20 to-white/0 transition-opacity duration-1000 ${hoverBike ? 'opacity-60' : 'opacity-0'}`}
                                style={{
                                    transformOrigin: 'center center',
                                    backgroundSize: '200% 200%',
                                    backgroundPosition: hoverBike ? 'center' : 'bottom',
                                }}
                            ></div>

                            {/* Active glow effect on hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-tr from-green-300/50 to-transparent rounded-2xl transition-opacity duration-500 ${hoverBike ? 'opacity-100' : 'opacity-0'}`}
                            ></div>
                        </div>

                        {/* Card content */}
                        <div className="absolute inset-0 rounded-2xl flex flex-col justify-center items-center p-6 sm:p-8">
                            {/* Floating particles effect */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={`bike-particle-${i}`}
                                        className="absolute w-2 h-2 rounded-full bg-white/40"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                            opacity: 0.3 + Math.random() * 0.4,
                                            transform: `scale(${0.5 + Math.random()})`,
                                            animation: `float ${3 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`
                                        }}
                                    ></div>
                                ))}
                            </div>

                            {/* Icon with glow effect */}
                            <div className={`relative mb-4 sm:mb-6 transition-all duration-500 ${hoverBike ? 'scale-110 translate-y-0' : 'scale-100 translate-y-0'}`}>
                                <div className="absolute inset-0 rounded-full bg-green-300 blur-xl opacity-50 scale-150"></div>
                                <div className="relative bg-gradient-to-br from-white to-green-100 shadow-lg p-2 sm:p-2 rounded-full">
                                    {/* <Settings size={32} className="text-green-700 sm:w-10 sm:h-10" /> */}
                                    <img className="w-14 h-12 sm:w-16" src="assets/green-bike-logo.png" alt="ev-bike-logo" />

                                </div>

                                {/* Orbiting element */}
                                <div
                                    className="absolute h-6 w-6 rounded-full flex items-center justify-center"
                                    style={{
                                        transform: `rotate(${-rotation * 2}deg) translateX(50px) sm:translateX(60px)`,
                                        transformOrigin: 'center center',
                                    }}
                                >
                                    <Zap size={14} className="text-green-200 sm:w-4 sm:h-4" />
                                </div>
                            </div>

                            {/* Text content with animation */}
                            <div className="relative z-10 text-center">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 drop-shadow-md">
                                    EV Dealership
                                </h3>

                                <p className="text-sm sm:text-base text-gray-900 mb-4 sm:mb-5 drop-shadow px-2">
                                    Explore our collection of 2W & 3W electric vehicles
                                </p>

                                <a
                                    href="/ev-dealership-opportunity"
                                    className={`inline-flex items-center border border-x-4 transition-all duration-500 bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-gray-900 font-medium text-sm sm:text-base ${hoverBike ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}`}
                                >
                                    <span className="font-bold">Visit Our Website</span>
                                    <ChevronRight size={14} className="ml-2 sm:w-4 sm:h-4" />
                                </a>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                                <Settings size={14} className={`text-white/50 transition-all duration-500 sm:w-4 sm:h-4 ${hoverBike ? 'opacity-100 scale-125' : 'opacity-50 scale-100'}`} />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Car Service Card */}

                <div
                    className={`relative w-72 sm:w-80 md:w-96 h-72 sm:h-80 z-20 cursor-pointer transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-12' : 'opacity-100 translate-y-0'}`}
                    style={{ transitionDelay: '300ms' }}
                    onMouseMove={(e) => calculate3DTransform(e, 'car')}
                    onMouseLeave={() => resetTransform('car')}
                    onMouseEnter={() => setHoverCar(true)}
                    onMouseOut={() => setHoverCar(false)}
                >
                    {/* Main card with 3D transform */}
                    <div
                        className="absolute inset-0 rounded-2xl shadow-2xl transition-all duration-300 ease-out"
                        style={{
                            transform: getTransform('car'),
                            boxShadow: hoverCar ? '0 20px 50px rgba(0, 100, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.15)',
                        }}
                    >
                        {/* Card background with animated gradients */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            {/* Base gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-green-400 to-green-700"></div>

                            {/* Animated rotating gradient overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-green-500/40 via-emerald-400/30 to-transparent"
                                style={{
                                    transform: `rotate(${rotation}deg)`,
                                    transformOrigin: 'center center',
                                }}
                            ></div>

                            {/* Animated pulse highlight */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-white/0 via-green-300/20 to-white/0 transition-opacity duration-1000 ${hoverCar ? 'opacity-60' : 'opacity-0'}`}
                                style={{
                                    transformOrigin: 'center center',
                                    backgroundSize: '200% 200%',
                                    backgroundPosition: hoverCar ? 'center' : 'bottom',
                                }}
                            ></div>

                            {/* Active glow effect on hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br from-green-300/50 to-transparent rounded-2xl transition-opacity duration-500 ${hoverCar ? 'opacity-100' : 'opacity-0'}`}
                            ></div>
                        </div>

                        {/* Card content */}
                        <div className="absolute inset-0 rounded-2xl flex flex-col justify-center items-center p-6 sm:p-8">
                            {/* Floating particles effect */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={`car-particle-${i}`}
                                        className="absolute w-2 h-2 rounded-full bg-white/40"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                            opacity: 0.3 + Math.random() * 0.4,
                                            transform: `scale(${0.5 + Math.random()})`,
                                            animation: `float ${3 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`
                                        }}
                                    ></div>
                                ))}
                            </div>

                            {/* Icon with glow effect */}
                            <div className={`relative mb-4 sm:mb-6 transition-all duration-500 ${hoverCar ? 'scale-110 translate-y-0' : 'scale-100 translate-y-0'}`}>
                                <div className="absolute inset-0 rounded-full bg-green-300 blur-xl opacity-50 scale-150"></div>
                                <div className="relative bg-gradient-to-br from-white to-green-100 shadow-lg p-1 sm:p-1 rounded-full">
                                    {/* <Car size={32} className="text-green-700 sm:w-10 sm:h-10" /> */}
                                    <img className="w-16 h-14" src="assets/car-logo.png" alt="car-logo" />
                                </div>

                                {/* Orbiting element */}
                                <div
                                    className="absolute h-6 w-6 rounded-full flex items-center justify-center"
                                    style={{
                                        transform: `rotate(${rotation * 2}deg) translateX(50px) sm:translateX(60px)`,
                                        transformOrigin: 'center center',
                                    }}
                                >
                                    <Settings size={14} className="text-green-200 sm:w-4 sm:h-4" />
                                </div>
                            </div>

                            {/* Text content with animation */}
                            <div className="relative z-10 text-center">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 drop-shadow-md">
                                    Premium Car Service
                                </h3>

                                <p className="text-sm sm:text-base text-gray-900 mb-4 sm:mb-5 drop-shadow px-2">
                                    Professional maintenance and repair for all vehicle models
                                </p>

                                <a
                                    href="/carhub"
                                    className={`inline-flex items-center transition-all border border-x-4 duration-500 bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-gray-900 font-medium text-sm sm:text-base ${hoverCar ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}`}
                                >
                                    <span className="font-bold">Visit WS Car Service</span>
                                    <ChevronRight size={14} className="ml-2 sm:w-4 sm:h-4" />
                                </a>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                                <Zap size={14} className={`text-white/50 transition-all duration-500 sm:w-4 sm:h-4 ${hoverCar ? 'opacity-100 scale-125' : 'opacity-50 scale-100'}`} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CSS for floating animation */}
                <style jsx>{`
        @keyframes float {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-10px) scale(1.1); }
        }
    `}</style>
            </div>

            {/* Logo Carousel Section - Now properly separated */}
            <div className="overflow-hidden bg-black mt-8 sm:mt-0 mb-8 sm:mb-20 ml-6 sm:ml-12 mr-6 sm:mr-12 lg:ml-32 lg:mr-32">
                <div
                    ref={carouselRef}
                    className="flex items-center overflow-x-hidden whitespace-nowrap"
                >
                    {logos.map(logo => (
                        <div key={logo.id} className="mx-4 sm:mx-8 flex-shrink-0">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                            />
                        </div>
                    ))}

                    {/* Duplicate logos to create smooth infinite scroll effect */}
                    {logos.map(logo => (
                        <div key={`duplicate-${logo.id}`} className="mx-4 sm:mx-8 flex-shrink-0">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* aboutwsmobility */}
            <div id="aboutwsmobility" className="min-h-screen bg-green-100 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Organic Flowing Shapes - Reduced for mobile */}
                    <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-green-400/20 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute top-16 md:top-32 right-0 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-gradient-to-bl from-teal-400/15 to-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
                    <div className="absolute bottom-0 left-1/3 w-36 h-36 md:w-54 md:h-54 lg:w-72 lg:h-72 bg-gradient-to-tr from-emerald-400/20 to-green-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>

                    {/* Floating Elements - Smaller on mobile */}
                    <div className="absolute top-12 md:top-20 left-4 md:left-10 text-green-900 opacity-70" style={{ animation: 'floatUpDown 4s ease-in-out infinite' }}>
                        <Car size={20} className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-7 h-7" />
                    </div>
                    <div className="absolute top-24 md:top-40 right-8 md:right-20 text-emerald-800 opacity-60" style={{ animation: 'floatUpDown 5s ease-in-out infinite', animationDelay: '1s' }}>
                        <Zap size={18} className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-7 h-7" />
                    </div>
                    <div className="absolute bottom-32 md:bottom-40 left-8 md:left-20 text-teal-800 opacity-50" style={{ animation: 'floatUpDown 6s ease-in-out infinite', animationDelay: '2s' }}>
                        <Cpu size={24} className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-7 h-7" />
                    </div>
                    <div className="absolute top-48 md:top-60 right-16 md:right-40 text-green-800 opacity-40" style={{ animation: 'rotateFloat 8s linear infinite' }}>
                        <Cog size={16} className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-7 h-7" />
                    </div>
                    <div className="absolute bottom-48 md:bottom-60 left-1/2 text-emerald-800 opacity-50" style={{ animation: 'rotateFloat 10s linear infinite reverse' }}>
                        <Cog size={20} className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-7 h-7" />
                    </div>

                    {/* Decorative Lines - Reduced opacity on mobile */}
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 md:via-green-400/30 to-transparent opacity-40 md:opacity-60"></div>
                    <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/15 md:via-emerald-400/20 to-transparent opacity-30 md:opacity-40" style={{ animationDelay: '3s' }}></div>

                    
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-3 md:px-4 py-8 md:py-12 lg:py-16">
                    {/* Header Section */}
                    <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-900 mb-3 md:mb-4 drop-shadow-lg">About Us</h2>
                        <div className="w-32 md:w-40 lg:w-48 h-1 md:h-1.5 bg-teal-800 mx-auto mb-2 md:mb-3 rounded-full shadow-lg shadow-green-400/50"></div>
                        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-green-800 mb-2">
                            Premium Services Since <span className="text-green-900 font-bold">2019</span>
                        </h3>
                    </div>

                    <div className="flex flex-col gap-6 md:gap-8 items-center">
                        {/* Main Content */}
                        <div className={`w-full transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                            {/* Company Introduction */}
                            <div className="bg-white/95 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 mb-6 md:mb-8 shadow-2xl border border-green-200/50 hover:shadow-green-400/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] md:hover:scale-[1.02]">
                                <p className="font-bold text-green-700 mb-2 text-lg md:text-xl lg:text-2xl underline decoration-green-400">About WS Mobility Pvt. Ltd.</p>
                                <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base lg:text-lg">
                                    WS Mobility Pvt. Ltd. is a visionary startup founded with the mission to
                                    revolutionize the automobile industry in Bihar by offering a comprehensive,
                                    one-stop solution for all mobility needs. Our aim is to bridge the gap in the
                                    automotive service and sales sector, particularly in underdeveloped and emerging
                                    regions, by delivering high-quality, reliable, and sustainable services for cars, bikes, and electric vehicles (EVs).
                                </p>
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl md:rounded-2xl p-4 md:p-6 border-l-4 border-green-400 shadow-inner">
                                    <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                                        We are proud to share that WS Mobility Pvt. Ltd. is officially approved by the Bihar Startups
                                        initiative, a recognition that reinforces our commitment to innovation, entrepreneurship, and regional development.
                                    </p>
                                </div>
                            </div>

                            {/* Vision Section */}
                            <div className={`bg-white/95 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 mb-6 md:mb-8 shadow-2xl border border-green-200/50 hover:shadow-green-400/30 hover:shadow-2xl transition-all duration-500 ${hoveredCard === 'vision' ? 'scale-[1.02] md:scale-105 rotate-1' : ''}`}
                                onMouseEnter={() => setHoveredCard('vision')}
                                onMouseLeave={() => setHoveredCard(null)}>
                                <div className="flex flex-col gap-3 md:gap-4 mb-4 md:mb-6">
                                    <div className="flex items-start">
                                        <div className="mr-3 md:mr-4 mt-1 bg-gradient-to-br from-green-400 to-emerald-500 p-2 md:p-3 lg:p-4 rounded-full shadow-lg">
                                            <Target size={20} className="md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                                        </div>
                                        <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-800 mt-1 md:mt-2">Our Vision</p>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                                        Our long-term vision is to establish WS Mobility Pvt. Ltd. as the leading
                                        integrated mobility platform in Bihar, catering to the diverse needs of vehicle owners and eco-conscious
                                        consumers. We strive to create an ecosystem that supports the present-day requirements of traditional
                                        automobile users while also driving the adoption of future-ready electric mobility solutions. Through our
                                        unified platform, we aspire to bring innovation, affordability, and sustainability to the forefront of
                                        Bihar's automobile industry.
                                    </p>
                                </div>
                            </div>

                            {/* Core Pillars Section */}
                            <div className="bg-white/95 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 mb-6 md:mb-8 shadow-2xl border border-green-200/50">
                                <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8">
                                    <div className="flex items-start">
                                        <div className="mr-3 md:mr-4 mt-1 bg-gradient-to-br from-green-500 to-teal-500 p-2 md:p-3 lg:p-4 rounded-full shadow-lg">
                                            <Layers size={20} className="md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                                        </div>
                                        <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-800 mt-1 md:mt-2">Our Core Pillars</p>
                                    </div>
                                    <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                                        WS Mobility Pvt. Ltd. is built on four sustainable and synergistic business verticals:
                                    </p>
                                </div>

                                {/* Electric Mobility Division - FIRST */}
                                <div className={`flex flex-col gap-2 mb-6 md:mb-8 transition-all duration-500 ${hoveredCard === 'ev' ? 'transform translate-x-1 md:translate-x-3 scale-[1.02] md:scale-105' : ''}`}
                                    onMouseEnter={() => setHoveredCard('ev')}
                                    onMouseLeave={() => setHoveredCard(null)}>
                                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border-2 border-green-300 shadow-xl hover:shadow-green-400/40 hover:shadow-2xl transition-all duration-300">
                                        <div className="flex items-start">
                                            <div className="mr-3 md:mr-4 lg:mr-6 mt-1 bg-gradient-to-br from-green-500 to-emerald-600 p-2 md:p-3 lg:p-4 rounded-full shadow-lg animate-pulse">
                                                <Zap size={20} className="md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                                            </div>
                                            <p className="text-base md:text-lg lg:text-2xl font-bold text-green-800 mt-1 md:mt-2 lg:mt-3">Electric Mobility Division (EV Division)</p>
                                        </div>
                                        <p className="text-gray-700 ml-8 md:ml-12 lg:ml-16 mb-3 md:mb-4 leading-relaxed text-sm md:text-base lg:text-lg">
                                            Our Electric Mobility Division is dedicated to promoting eco-friendly
                                            transportation by offering a wide range of high-quality electric bikes from multiple trusted brands.
                                            With a mission to make green mobility accessible to everyone, we provide competitively priced e-bikes
                                            that cater to various needs and preferences. What truly sets us apart is our 3-year continuous service
                                            promise for customers who join our electric mobility network-reflecting our commitment to long-term value,
                                            customer satisfaction, and sustainability.
                                        </p>
                                        <p className="ml-8 md:ml-12 lg:ml-16">
                                            <a href="/coming-soon" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm md:text-base lg:text-lg bg-white px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                                Click here
                                                <ChevronRight size={16} className="md:w-5 md:h-5 ml-2" />
                                            </a>
                                            <span className="text-gray-600 ml-2 md:ml-3 text-sm md:text-base lg:text-lg">to visit the site</span>
                                        </p>
                                    </div>
                                </div>

                                {/* CAR HUB */}
                                <div className={`flex flex-col gap-2 mb-6 md:mb-8 transition-all duration-500 ${hoveredCard === 'carhub' ? 'transform translate-x-1 md:translate-x-3 scale-[1.01] md:scale-[1.02]' : ''}`}
                                    onMouseEnter={() => setHoveredCard('carhub')}
                                    onMouseLeave={() => setHoveredCard(null)}>
                                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-blue-200 shadow-lg hover:shadow-blue-300/30 hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-start">
                                            <div className="mr-3 md:mr-4 lg:mr-6 mt-1 bg-gradient-to-br from-blue-500 to-cyan-500 p-2 md:p-3 lg:p-4 rounded-full shadow-lg">
                                                <Car size={20} className="md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                                            </div>
                                            <p className="text-base md:text-lg lg:text-2xl font-bold text-blue-800 mt-1 md:mt-2 lg:mt-3">WS Car Service</p>
                                        </div>
                                        <p className="text-gray-700 ml-8 md:ml-12 lg:ml-16 mb-3 md:mb-4 leading-relaxed text-sm md:text-base lg:text-lg">
                                            A dedicated center for comprehensive car services, including maintenance, repairs,
                                            and diagnostics.WS Car Service ensures that car owners in Bihar receive premium quality services at affordable rates,
                                            backed by skilled professionals and cutting-edge technology.
                                        </p>
                                        <p className="ml-8 md:ml-12 lg:ml-16">
                                            <a href="/carhub" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm md:text-base lg:text-lg bg-white px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                                Click here
                                                <ChevronRight size={16} className="md:w-5 md:h-5 ml-2" />
                                            </a>
                                            <span className="text-gray-600 ml-2 md:ml-3 text-sm md:text-base lg:text-lg">to visit the site</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Bikemen */}
                                <div className={`flex flex-col gap-2 mb-6 md:mb-8 transition-all duration-500 ${hoveredCard === 'bikemen' ? 'transform translate-x-1 md:translate-x-3 scale-[1.01] md:scale-[1.02]' : ''}`}
                                    onMouseEnter={() => setHoveredCard('bikemen')}
                                    onMouseLeave={() => setHoveredCard(null)}>
                                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-purple-200 shadow-lg hover:shadow-purple-300/30 hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-start">
                                            <div className="mr-3 md:mr-4 lg:mr-6 mt-1 bg-gradient-to-br from-purple-500 to-indigo-500 p-2 md:p-3 lg:p-4 rounded-full shadow-lg">
                                                <Bike size={20} className="md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                                            </div>
                                            <p className="text-base md:text-lg lg:text-2xl font-bold text-purple-800 mt-1 md:mt-2 lg:mt-3">Bikemen</p>
                                        </div>
                                        <p className="text-gray-700 ml-8 md:ml-12 lg:ml-16 mb-3 md:mb-4 leading-relaxed text-sm md:text-base lg:text-lg">
                                            A specialized bike service vertical tailored to meet the needs of
                                            two-wheeler owners. From routine maintenance to emergency support, Bikemen delivers trustworthy and
                                            prompt service, ensuring customer satisfaction and vehicle longevity.
                                        </p>
                                        <p className="ml-8 md:ml-12 lg:ml-16">
                                            <a href="/coming-soon" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm md:text-base lg:text-lg bg-white px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                                Click here
                                                <ChevronRight size={16} className="md:w-5 md:h-5 ml-2" />
                                            </a>
                                            <span className="text-gray-600 ml-2 md:ml-3 text-sm md:text-base lg:text-lg">to visit the site</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Future Mobility Services */}
                                <div className={`flex flex-col gap-2 mb-4 md:mb-6 transition-all duration-500 ${hoveredCard === 'future' ? 'transform translate-x-1 md:translate-x-3 scale-[1.01] md:scale-[1.02]' : ''}`}
                                    onMouseEnter={() => setHoveredCard('future')}
                                    onMouseLeave={() => setHoveredCard(null)}>
                                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-orange-200 shadow-lg hover:shadow-orange-300/30 hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-start">
                                            <div className="mr-3 md:mr-4 lg:mr-6 mt-1 bg-gradient-to-br from-orange-500 to-amber-500 p-2 md:p-3 lg:p-4 rounded-full shadow-lg">
                                                <Target size={20} className="md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                                            </div>
                                            <p className="text-base md:text-lg lg:text-2xl font-bold text-orange-800 mt-1 md:mt-2 lg:mt-3">Future Mobility Services (Planned Expansion)</p>
                                        </div>
                                        <p className="text-gray-700 ml-8 md:ml-12 lg:ml-16 leading-relaxed text-sm md:text-base lg:text-lg">
                                            As we grow, WS Mobility Pvt. Ltd. aims to introduce smart mobility services,
                                            such as electric vehicle rentals, shared mobility platforms, and rural transportation solutions, to further
                                            promote eco-conscious living and economic development across Bihar.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="text-center">
                                <button className="inline-flex items-center px-9 py-3 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white text-base md:text-lg lg:text-xl font-semibold rounded-full hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 md:hover:scale-110 hover:shadow-2xl shadow-lg border-2 border-green-300/50">
                                    Learn More
                                    <ChevronRight size={20} className="md:w-6 md:h-6 ml-2 md:ml-3 transition-transform duration-300 group-hover:translate-x-2" />
                                </button>
                            </div>
                        </div>

                        {/* Company Logo/Image - Hidden on mobile for better performance */}
                        <div className={`w-1/2 sm:w-1/3 md:w-1/2 mx-auto md:mx-0 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400/40 to-emerald-400/40 rounded-xl md:rounded-3xl blur-xl md:blur-2xl transform rotate-1 md:rotate-3 group-hover:rotate-3 md:group-hover:rotate-6 transition-transform duration-500"></div>
                                <div className="relative bg-white/95 backdrop-blur-sm rounded-xl md:rounded-3xl p-3 md:p-6 shadow-lg md:shadow-2xl border border-green-200/50 md:border-2">
                                    <img
                                        src="assets/parentCompanyLogo1.png"
                                        alt="WS-mobility"
                                        className="rounded-lg md:rounded-2xl shadow-md md:shadow-xl w-full h-32 md:h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                        style={{
                                            filter: 'drop-shadow(0 8px 16px rgba(34, 197, 94, 0.3)) md:drop-shadow(0 15px 30px rgba(34, 197, 94, 0.4))'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Custom CSS for animations */}
                <style jsx>{`
                @keyframes moveAcross {
                    0% { transform: translateX(-150px); opacity: 0; }
                    15% { opacity: 1; }
                    85% { opacity: 1; }
                    100% { transform: translateX(calc(100vw + 150px)); opacity: 0; }
                }
                
                @keyframes floatUpDown {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-15px) rotate(3deg); }
                    50% { transform: translateY(-8px) rotate(-2deg); }
                    75% { transform: translateY(-20px) rotate(2deg); }
                }
                
                @keyframes rotateFloat {
                    0% { transform: rotate(0deg) translateY(0px); }
                    50% { transform: rotate(180deg) translateY(-10px); }
                    100% { transform: rotate(360deg) translateY(0px); }
                }
                
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(0.8); }
                    50% { opacity: 0.8; transform: scale(1.2); }
                }
            `}</style>
            </div>


            <div id="contactSection" className="w-full mx-auto -mt-2 pt-1 bg-green-100">
                <div className="text-center mb-12 mt-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h2>
                    <div className="w-48 h-1 bg-green-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600 text-lg">Got questions? We're here to help with all your needs</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 justify-center pb-16">
                    <div className="bg-white rounded-lg shadow-md p-6 pr-12">
                        <h3 className="text-center font-bold p-1 bg-yellow-400 rounded-xl text-lg">WS Car Service</h3>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-4">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Phone size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Phone</h4>
                                    <p className="text-gray-600">9117031733</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Mail size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <p className="text-gray-600">wsmobilitypvt@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <MapPin size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Location</h4>
                                    <p className="text-gray-600">Near PNB bank, Kanti Factory Rd,
                                        <br /> Kankarbagh, Patna, Bihar-800026</p>
                                    <a href="https://www.google.com/maps/dir//CAR+HUB+:+Multi+brand+Car+Service+Center+in+Patna,+Kanti+Factory+Rd,+near+PNB,+New+Colony,+Kankarbagh,+Kumhrar,+Patna,+Bihar+800020" className="underline  text-blue-500">see on map</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Clock size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Business Hours</h4>
                                    <p className="text-gray-600">Sat-Thu: 9AM - 7PM</p>

                                    <p className="text-gray-600">Fri: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 pr-8">
                        <h3 className="text-center font-bold p-1 bg-yellow-400 rounded-xl text-lg">EV Division</h3>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-4">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Phone size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Phone</h4>
                                    <p className="text-gray-600">9117031733</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Mail size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <p className="text-gray-600">sales@wsmobility.in</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <MapPin size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Location</h4>
                                    <p className="text-gray-600">Mitu Palace-202, Near PNB bank,<br /> Chitragupta Nagar, Kanti Factory<br /> Rd,
                                        Kankarbagh, Patna,<br /> Bihar-800026</p>
                                    <a href="" className="underline  text-blue-500">see on map</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Clock size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Business Hours</h4>
                                    <p className="text-gray-600">Mon-Sun: 9AM - 7PM</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 pr-12">
                        <h3 className="text-center font-bold p-1 bg-yellow-400 rounded-xl text-lg">Bikemen</h3>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-4">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Phone size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Phone</h4>
                                    <p className="text-gray-600">9117031733</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Mail size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <p className="text-gray-600">info@wsmobility.in</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <MapPin size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Location</h4>
                                    <p className="text-gray-600">Near PNB bank, Kanti Factory Rd,
                                        <br /> Kankarbagh, Patna, Bihar-800026</p>
                                    <a href="https://www.google.com/maps/dir//BOSCH+Authorized+Car+Service+Center-+Carhub,+Naya+Tola,+near+Patna,+Daud+Bigha,+Sadar+BLOCK,+Kumhrar,+Patna,+Bihar+800026" className="underline  text-blue-500">see on map</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Clock size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Business Hours</h4>
                                    <p className="text-gray-600">Mon-Sun: 9AM - 7PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </section >
    );
};

export default ParentHero;