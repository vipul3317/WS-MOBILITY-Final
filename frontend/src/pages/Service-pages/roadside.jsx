import React, { useState } from 'react';
import {
    Phone,
    MapPin,
    Battery,
    Wrench,
    Car,
    Lock,
    Clock,
    CheckCircle,
    Truck,
    AlertTriangle,
    Shield,
    Gauge,
    Activity,
    ChevronRight
} from 'lucide-react';
import Header from '../../components/navbar';
import Footer from '../../components/footer/Footers';

const RoadSideAssistance = () => {
    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('all');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        issue: '',
        vehicleType: ''
    })

    const services = [
        {
            id: 'lockout',
            icon: <Lock className="text-teal-500" size={40} />,
            title: 'Car Lockout Service',
            description: 'Help when you\'re locked out of your vehicle',
            timeEstimate: '25 min',
            price: 'Rs.5999',
            image: '/assets/serviceModel/carLockout.png'
        },
        {
            id: 'tire',
            icon: <Wrench className="text-teal-500" size={40} />,
            title: 'Flat Tyre Change',
            description: 'Professional tire change on the spot',
            timeEstimate: '20 min',
            price: 'Rs.4999',
            image: '/assets/serviceModel/cartyre3d.png'
        },
        {
            id: 'towing',
            icon: <Truck className="text-teal-500" size={40} />,
            title: 'Car Recovery And Towing Service',
            description: 'Safe and reliable towing to your preferred location',
            timeEstimate: '30 min',
            price: 'Rs.4999',
            image: '/assets/serviceModel/carTowing.png'
        },
        {
            id: 'battery',
            icon: <Battery className="text-teal-500" size={40} />,
            title: 'Battery Jump Start And Replacement Service',
            description: 'Quick jump start service to get you back on the road',
            timeEstimate: '15 min',
            price: 'Rs.3999',
            image: '/assets/serviceModel/battery.png'

        }
    ];

    const features = [
        {
            icon: <Activity className="text-emerald-400" />,
            title: 'Real-time Tracking',
            description: 'Track your service technician live on the map'
        },
        {
            icon: <Shield className="text-emerald-400" />,
            title: 'Vetted Professionals',
            description: 'All technicians are certified and background-checked'
        },
        {
            icon: <Gauge className="text-emerald-400" />,
            title: '30-Min Guarantee',
            description: 'We arrive within 30 minutes or your service is free'
        },
        {
            icon: <AlertTriangle className="text-emerald-400" />,
            title: 'Emergency Ready',
            description: 'Available 24/7, rain or shine, holidays included'
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsRequestModalOpen(false);
    };

    return (
        <>
            <Header />
            <div className="container flex flex-col bg-gradient-to-b from-slate-900 via-emerald-900 to-slate-900 ">
                <div className="p-16 text-center inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 w-full mx-auto animate-expandCenter">
                    <div className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full mb-6 backdrop-blur-sm">
                        24/7 Emergency Service
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Roadside <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                            Rescue
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Professional roadside assistance in 30 minutes or less, guaranteed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setIsRequestModalOpen(true)}
                            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full hover:from-emerald-600 hover:to-teal-600 transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25"
                        >
                            <Phone size={24} />
                            Get Help Now
                        </button>
                        <button
                            className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-full hover:bg-emerald-400/10 transition duration-300"
                        >
                            Call Us Now
                        </button>
                    </div>
                </div>

                {/* //services  */}

                <div className="bg-white container mx-auto px-4 py-16">
                    <div className=" mb-8 flex flex-wrap justify-center gap-4">
                        {['all', 'battery', 'tire', 'lockout', 'towing'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setSelectedService(filter)}
                                className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedService === filter
                                    ? 'bg-green-600 text-white shadow-lg'
                                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                                    }`}
                            >
                                {filter === 'all' ? 'All Services' : services.find(s => s.id === filter)?.title}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col  md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services
                            .filter(service => selectedService === 'all' || service.id === selectedService)
                            .map((service, index) => (
                                <div
                                    key={index}
                                    className="group flex justify-between bg-gray-300 rounded-2xl p-6 hover:bg-green-50 transition-all duration-300 border border-slate-700 hover:slate-500/50 relative overflow-hidden"
                                >
                                    {/* <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300 "></div> */}
                                    <div className="relative pl-8">
                                        <div className="bg-green-900 inline-block p-3 rounded-xl mb-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-green-900 mb-2">{service.title}</h3>
                                        <p className="text-gray-800 mb-4 text-lg">{service.description}</p>
                                        <div className="flex items-center text-sm">
                                            <span className="text-blue-800 text-xl">🕐 {service.timeEstimate}</span>

                                        </div>
                                        <button
                                            onClick={() => {
                                                setFormData(prev => ({ ...prev, issue: service.id }));
                                                setIsRequestModalOpen(true);
                                            }}
                                            className="mt-4 p-2 pl-8 pr-8 bg-green-800 text-white rounded-lg hover:bg-slate-900 hover:text-emerald-400 transition-all duration-300"
                                        >
                                            Request Service
                                        </button>
                                        <span className="text-red-700 pl-4 text-2xl font-semibold">{service.price}</span>
                                    </div>
                                    <div className="mt-4 flex justify-end pr-24">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-100 h-60 object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* features */}

                <div className="bg-emerald-100 py-20">
                    <div className="container mx-auto px-24 py-4">
                        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-12">
                            Why Choose Us?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-white rounded-xl border-x-4 border-transparent group-hover:border-emerald-400 shadow-md group-hover:shadow-lg transition-all duration-300"></div>
                                    <div className="relative z-10 p-6 rounded-xl border-l-4 border-emerald-400">
                                        <div className="bg-gradient-to-r from-emerald-900 to-gray-900 inline-block p-3 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-emerald-700 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Request Modal */}
                {isRequestModalOpen && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="bg-slate-300 rounded-2xl p-8 max-w-xl w-full shadow-2xl">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-black">Request Assistance</h3>
                                <button
                                    onClick={() => setIsRequestModalOpen(false)}
                                    className="text-black hover:text-red-900 font-bold text-xl transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder=" "
                                        className="peer w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-transparent"
                                    />
                                    <label className="absolute rounded-md left-4 -top-2.5 bg-slate-800 px-2 text-sm text-emerald-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-emerald-400 peer-focus:text-sm">
                                        Your Name
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder=" "
                                        className="peer w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-transparent"
                                    />
                                    <label className="absolute rounded-md left-4 -top-2.5 bg-slate-800 px-2 text-sm text-emerald-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-emerald-400 peer-focus:text-sm">
                                        Phone Number
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        required
                                        placeholder=" "
                                        className="peer w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-transparent"
                                    />
                                    <label className="absolute rounded-md left-4 -top-2.5 bg-slate-800 px-2 text-sm text-emerald-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-emerald-400 peer-focus:text-sm">
                                        Your Location
                                    </label>
                                </div>
                                <div className="relative">
                                    <select
                                        name="issue"
                                        value={formData.issue}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white"
                                    >
                                        <option value="">Select an issue</option>
                                        {services.map(service => (
                                            <option key={service.id} value={service.id}>
                                                {service.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="vehicleType"
                                        value={formData.vehicleType}
                                        onChange={handleInputChange}
                                        required
                                        placeholder=" "
                                        className="peer w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-transparent"
                                    />
                                    <label className="absolute rounded-md left-4 -top-2.5 bg-slate-800 px-2 text-sm text-emerald-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-emerald-400 peer-focus:text-sm">
                                        Vehicle Type
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-emerald-900 to-teal-500 text-white py-3 rounded-lg hover:from-teal-500 hover:to-emerald-900 transition duration-300 shadow-lg hover:shadow-emerald-500/25"
                                >
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </div>
                )}

            </div>
            <Footer/>
        </>

    )
}

export default RoadSideAssistance;