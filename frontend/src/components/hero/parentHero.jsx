import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    Car,
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
        { id: 1, name: 'bike1', src: 'assets/bike-photos/IMG-20250402-WA0004.jpg' },
        { id: 2, name: 'bike1', src: 'assets/bike-photos/IMG-20250402-WA0005.jpg' },
        { id: 3, name: 'bike1', src: 'assets/bike-photos/IMG-20250402-WA0006.jpg' },
        { id: 4, name: 'bike1', src: 'assets/bike-photos/IMG-20250402-WA0007.jpg' },
        { id: 5, name: 'bike1', src: 'assets/bike-photos/IMG-20250402-WA0008.jpg' },
        { id: 6, name: 'bike1', src: 'assets/bike-photos/IMG-20250402-WA0009.jpg' },
        { id: 7, name: 'bike1', src: 'assets/bike-photos/IMG-20250402-WA0010.jpg' },
        { id: 8, name: 'bike1', src: 'assets/bike-photos/IMG-20250402-WA0011.jpg' },
        { id: 9, name: 'bike1', src: 'assets/bike-photos/IMG-20250402-WA0012.jpg' }
    ];

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
        <section className="bg-green-50 mt-8 md:-mt-12">
            <div className="container mx-auto flex justify-center gap-8 lg:gap-24 text-center lg:pt-40 flex-wrap ">
                {/* Car Service Card */}
                <div
                    className={`relative w-80 md:w-96 h-80 cursor-pointer transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-12' : 'opacity-100 translate-y-0'}`}
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
                        <div className="absolute inset-0 rounded-2xl flex flex-col justify-center items-center p-8">
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
                            <div className={`relative mb-6 transition-all duration-500 ${hoverCar ? 'scale-110 translate-y-0' : 'scale-100 translate-y-0'}`}>
                                <div className="absolute inset-0 rounded-full bg-green-300 blur-xl opacity-50 scale-150"></div>
                                <div className="relative bg-gradient-to-br from-white to-green-100 shadow-lg p-5 rounded-full">
                                    <Car size={40} className="text-green-700" />
                                </div>

                                {/* Orbiting element */}
                                <div
                                    className="absolute h-6 w-6 rounded-full flex items-center justify-center"
                                    style={{
                                        transform: `rotate(${rotation * 2}deg) translateX(60px)`,
                                        transformOrigin: 'center center',
                                    }}
                                >
                                    <Settings size={16} className="text-green-200" />
                                </div>
                            </div>

                            {/* Text content with animation */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 drop-shadow-md">
                                    Premium Car Service
                                </h3>

                                <p className="text-gray-900 mb-5 drop-shadow">
                                    Professional maintenance and repair for all vehicle models
                                </p>

                                <a
                                    href="/carhub"
                                    className={`inline-flex items-center transition-all border border-x-4 duration-500 bg-white/20 hover:bg-white/30 backdrop-blur-md px-5 py-2.5 rounded-xl text-gray-900 font-medium ${hoverCar ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}`}
                                >
                                    <span className="font-bold">Visit CARHUB</span>
                                    <ChevronRight size={16} className="ml-2" />
                                </a>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute bottom-6 right-6">
                                <Zap size={16} className={`text-white/50 transition-all duration-500 ${hoverCar ? 'opacity-100 scale-125' : 'opacity-50 scale-100'}`} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bike Purchase Card */}
                <div
                    className={`relative w-80 md:w-96 h-80 cursor-pointer transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-12' : 'opacity-100 translate-y-0'}`}
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
                        <div className="absolute inset-0 rounded-2xl flex flex-col justify-center items-center p-8">
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
                            <div className={`relative mb-6 transition-all duration-500 ${hoverBike ? 'scale-110 translate-y-0' : 'scale-100 translate-y-0'}`}>
                                <div className="absolute inset-0 rounded-full bg-green-300 blur-xl opacity-50 scale-150"></div>
                                <div className="relative bg-gradient-to-br from-white to-green-100 shadow-lg p-5 rounded-full">
                                    <Settings size={40} className="text-green-700" />
                                </div>

                                {/* Orbiting element */}
                                <div
                                    className="absolute h-6 w-6 rounded-full flex items-center justify-center"
                                    style={{
                                        transform: `rotate(${-rotation * 2}deg) translateX(60px)`,
                                        transformOrigin: 'center center',
                                    }}
                                >
                                    <Zap size={16} className="text-green-200" />
                                </div>
                            </div>

                            {/* Text content with animation */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 drop-shadow-md">
                                    Electric Bikes
                                </h3>

                                <p className="text-gray-900 mb-5 drop-shadow">
                                    Explore our collection of premium electric bikes
                                </p>

                                <a
                                    href="/coming-soon"
                                    className={`inline-flex items-center border border-x-4 transition-all duration-500 bg-white/20 hover:bg-white/30 backdrop-blur-md px-5 py-2.5 rounded-xl text-gray-900 font-medium ${hoverBike ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}`}
                                >
                                    <span className="font-bold">Visit Mantra-e-Bike</span>
                                    <ChevronRight size={16} className="ml-2" />
                                </a>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute bottom-6 right-6">
                                <Settings size={16} className={`text-white/50 transition-all duration-500 ${hoverBike ? 'opacity-100 scale-125' : 'opacity-50 scale-100'}`} />
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

            <div className="overflow-hidden bg-green-50 m-32">
                <div
                    ref={carouselRef}
                    className="flex items-center overflow-x-hidden whitespace-nowrap"
                >
                    {logos.map(logo => (
                        <div key={logo.id} className="mx-8 flex-shrink-0">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-20 w-auto object-contain"
                            />
                        </div>
                    ))}

                    {/* Duplicate logos to create smooth infinite scroll effect */}
                    {logos.map(logo => (
                        <div key={`duplicate-${logo.id}`} className="mx-8 flex-shrink-0">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-20 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div id="aboutwsmobility" className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">About Us</h2>
                    <div className="w-44 h-1 bg-green-500 mx-auto mb-1"></div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Services Since <span className="text-gray-600">2019</span></h3>
                </div>

                <div className="flex flex-col gap-8 items-center">
                    <div>
                        <p className="font-bold text-green-700 mb-2 text-2xl underline">About WS Mobility Pvt. Ltd.</p>
                        <p className="text-gray-600 mb-6 ">
                            WS Mobility Pvt. Ltd. is a visionary startup founded with the mission to
                            revolutionize the automobile industry in Bihar by offering a comprehensive,
                            one-stop solution for all mobility needs. Our aim is to bridge the gap in the
                            automotive service and sales sector, particularly in underdeveloped and emerging
                            regions, by delivering high-quality, reliable, and sustainable services for cars, bikes, and electric vehicles (EVs).
                        </p>
                        <p className="text-gray-600 mb-6">
                            We are proud to share that WS Mobility Pvt. Ltd. is officially approved by the Bihar Startups
                            initiative, a recognition that reinforces our commitment to innovation, entrepreneurship, and regional development.
                        </p>

                        <div className="flex flex-col gap-4 mb-6">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Target size={20} className="text-green-600" />
                                </div>
                                <p className="text-lg font-semibold text-gray-800 mt-2">Our Vision</p>
                            </div>
                            <p className="text-gray-600">Our long-term vision is to establish WS Mobility Pvt. Ltd. as the leading
                                integrated mobility platform in Bihar, catering to the diverse needs of vehicle owners and eco-conscious
                                consumers. We strive to create an ecosystem that supports the present-day requirements of traditional
                                automobile users while also driving the adoption of future-ready electric mobility solutions. Through our
                                unified platform, we aspire to bring innovation, affordability, and sustainability to the forefront of
                                Bihar's automobile industry.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 mb-6">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Layers size={20} className="text-green-600" />
                                </div>
                                <p className="text-lg font-semibold text-gray-800 mt-2">Our Core Pillars</p>
                            </div>
                            <p className="text-gray-600">WS Mobility Pvt. Ltd. is built on four sustainable and synergistic business verticals:
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 mb-6 ml-4">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Car size={20} className="text-green-600" />
                                </div>
                                <p className="text-lg font-semibold text-gray-800 mt-2">CAR HUB</p>
                            </div>
                            <p className="text-gray-600 ml-12">A dedicated center for comprehensive car services, including maintenance, repairs,
                                and diagnostics. CAR HUB ensures that car owners in Bihar receive premium quality services at affordable rates,
                                backed by skilled professionals and cutting-edge technology.
                            </p>
                            <p className="ml-12"><a href="/carhub" className="text-blue-600">Click here</a><span> to visit the site</span></p>
                        </div>

                        <div className="flex flex-col gap-2 mb-6 ml-4">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Bike size={20} className="text-green-600" />
                                </div>
                                <p className="text-lg font-semibold text-gray-800 mt-2">Bikemen</p>
                            </div>
                            <p className="text-gray-600 ml-12">A specialized bike service vertical tailored to meet the needs of
                                two-wheeler owners. From routine maintenance to emergency support, Bikemen delivers trustworthy and
                                prompt service, ensuring customer satisfaction and vehicle longevity.

                            </p>
                            <p className="ml-12"><a href="/coming-soon" className="text-blue-600">Click here</a><span> to visit the site</span></p>
                        </div>

                        <div className="flex flex-col gap-2 mb-6 ml-4">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Bike size={20} className="text-green-600" />
                                </div>
                                <p className="text-lg font-semibold text-gray-800 mt-2">Mantra (EV Division)
                                </p>
                            </div>
                            <p className="text-gray-600 ml-12">Mantra is our exclusive wholesale division for eco-friendly electric
                                bikes. With a mission to make green mobility accessible, Mantra offers high-quality e-bikes at competitive
                                prices. What sets Mantra apart is our 3-year continuous service promise for customers who become part of
                                the Mantra family, reinforcing our commitment to long-term value and sustainability.

                            </p>
                            <p className="ml-12"><a href="/coming-soon" className="text-blue-600">Click here</a><span> to visit the site</span></p>
                        </div>

                        <div className="flex flex-col gap-2 mb-6 ml-4">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Target size={20} className="text-green-600" />
                                </div>
                                <p className="text-lg font-semibold text-gray-800 mt-2">Future Mobility Services (Planned Expansion)
                                </p>
                            </div>
                            <p className="text-gray-600 ml-12">As we grow, WS Mobility Pvt. Ltd. aims to introduce smart mobility services,
                                such as electric vehicle rentals, shared mobility platforms, and rural transportation solutions, to further
                                promote eco-conscious living and economic development across Bihar.

                            </p>
                        </div>


                        <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
                            Learn More <ChevronRight size={16} className="ml-2" />
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="assets/parentCompanyLogo.jpg"
                            alt="WS-mobility"
                            className="rounded-lg shadow-lg w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div id="contactSection" className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12 mt-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h2>
                    <div className="w-48 h-1 bg-green-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600 text-lg">Got questions? We're here to help with all your needs</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 justify-center pb-16">
                    <div className="bg-white rounded-lg shadow-md p-6 pr-12">
                        <h3 className="text-center font-bold p-1 bg-yellow-400 rounded-xl text-lg">CAR HUB</h3>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-4">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Phone size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Phone</h4>
                                    <p className="text-gray-600">7256095121</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Mail size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <p className="text-gray-600">carhub@service.in</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <MapPin size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Location</h4>
                                    <p className="text-gray-600">Near PNB bank, Kanti Factory Rd,
                                        <br /> Kankarbagh, Patna, BIHAR-800026</p>
                                    <a href="https://www.google.com/maps/dir//CAR+HUB+:+Multi+brand+Car+Service+Center+in+Patna,+Kanti+Factory+Rd,+near+PNB,+New+Colony,+Kankarbagh,+Kumhrar,+Patna,+Bihar+800020" className="underline  text-blue-500">see on map</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Clock size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Business Hours</h4>
                                    <p className="text-gray-600">Sun-Thu: 8AM-6PM</p>
                                    <p className="text-gray-600">Sat: 9AM-4PM</p>
                                    <p className="text-gray-600">Fri: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 pr-12">
                        <h3 className="text-center font-bold p-1 bg-yellow-400 rounded-xl text-lg">Mantra (EV Division)</h3>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-4">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Phone size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Phone</h4>
                                    <p className="text-gray-600">7256095121</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Mail size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <p className="text-gray-600">mantraebike@service.in</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <MapPin size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Location</h4>
                                    <p className="text-gray-600">Near PNB bank, Kanti Factory Rd,
                                        <br /> Kankarbagh, Patna, BIHAR-800026</p>
                                    <a href="" className="underline  text-blue-500">see on map</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Clock size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Business Hours</h4>
                                    <p className="text-gray-600">Sun-Thu: 8AM-6PM</p>
                                    <p className="text-gray-600">Sat: 9AM-4PM</p>
                                    <p className="text-gray-600">Fri: Closed</p>
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
                                    <p className="text-gray-600">7256095121</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Mail size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <p className="text-gray-600">bikemen@service.in</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <MapPin size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Location</h4>
                                    <p className="text-gray-600">Naya Tola, Sadar BLOCK,
                                        <br /> Kumhrar, Patna, BIHAR-800026</p>
                                    <a href="https://www.google.com/maps/dir//BOSCH+Authorized+Car+Service+Center-+Carhub,+Naya+Tola,+near+Patna,+Daud+Bigha,+Sadar+BLOCK,+Kumhrar,+Patna,+Bihar+800026" className="underline  text-blue-500">see on map</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                                    <Clock size={20} className="text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Business Hours</h4>
                                    <p className="text-gray-600">Sun-Thu: 8AM-6PM</p>
                                    <p className="text-gray-600">Sat: 9AM-4PM</p>
                                    <p className="text-gray-600">Fri: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    );
};

export default ParentHero;