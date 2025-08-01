import React, { useEffect } from 'react';
import EvNavbar from '../../components/navbar/evNav'; // Assuming this path is correct for your project

// --- Data Definitions (Moved to the top for better organization) ---

// Data for the "Why Should I Own An Electric Bike Dealership" section
const DEALERSHIP_BENEFITS = [
    {
        id: '01',
        title: 'Thriving Market',
        description: 'The electric bike dealership industry is growing rapidly, making this the perfect time for you to invest and succeed in the booming EV space.',
    },
    {
        id: '02',
        title: 'Eco-Friendly',
        description: 'By owning an EV dealership, you contribute to a cleaner, greener future with zero-emission, eco-friendly transportation solutions.',
    },
    {
        id: '03',
        title: 'Profit Potential',
        description: 'A bike dealership offers high-profit margins with increasing demand, giving you a strong return on investment and long-term business growth.',
    },
    {
        id: '04',
        title: 'Credibility',
        description: 'With a Wsmobility electric scooter dealership, you get expert support, hands-on training, and the backing of a trusted brand—helping you build a profitable and successful dealership business.',
    },
];

// Image URLs for the carousel. These are high-quality, relevant images.
const CAROUSEL_IMAGES = [
  'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NTHOf0VCKVgSBUqyLywCakcj0Wl7TTt9SA&s',
  'https://images.unsplash.com/photo-1627503708465-b1a37c352a92?q=80&w=2940&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616422201997-7e61a298516d?q=80&w=2940&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1634842512130-1b25022e389e?q=80&w=2940&auto=format&fit=crop',
];

const DealershipContact = () => {
    // useEffect hook for Flowbite Carousel initialization
    useEffect(() => {
        const initializeCarousel = () => {
            // Ensure Flowbite and its Carousel component are available
            if (typeof window.Flowbite !== 'undefined' && typeof window.Flowbite.Carousel !== 'undefined') {
                const carouselElement = document.getElementById('default-carousel');
                if (!carouselElement) {
                    console.warn("Carousel element not found, Flowbite carousel cannot be initialized.");
                    return;
                }

                // Dynamically create carousel items and indicators from CAROUSEL_IMAGES data
                const items = CAROUSEL_IMAGES.map((_, index) => ({
                    position: index,
                    el: document.getElementById(`carousel-item-${index + 1}`),
                }));

                const indicators = {
                    activeClasses: 'bg-white dark:bg-gray-800',
                    inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
                    items: CAROUSEL_IMAGES.map((_, index) => ({
                        position: index,
                        el: document.getElementById(`carousel-slide-to-${index}`),
                    })),
                };

                const options = {
                    defaultPosition: 0, // Changed to 0 to start from the first image
                    interval: 3000, // Change slide every 3 seconds
                    indicators: indicators,
                    onSlideChange: () => {
                        console.log('Carousel slide has been changed');
                    },
                };

                // Initialize the Flowbite Carousel
                new window.Flowbite.Carousel(carouselElement, items, options);
            } else {
                console.warn("Flowbite or Flowbite.Carousel is not defined. Ensure Flowbite script is loaded.");
            }
        };

        // Use a short delay to ensure the Flowbite library has fully loaded
        // before attempting to initialize the carousel. This is a common practice
        // when dealing with external UI libraries that might load asynchronously.
        const timeoutId = setTimeout(initializeCarousel, 500);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div className='w-full'>
            <EvNavbar />
            <div className="flex flex-col w-full mt-10"> {/* Adjusted margin-top for content below navbar */}

                {/* Dealership contact form section */}
                <section className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-[#22334a] via-[#4f5c6b] to-[#a9b1bb]">
                    {/* Left side with the background image and text */}
                    <div className="flex-1 flex items-center justify-center px-6 md:px-20 py-16 relative">
                        <img
                            alt="World map with blue glowing points representing locations"
                            src="https://storage.googleapis.com/a1aa/image/f2625f59-09c4-4a9f-22f7-2388962f52a9.jpg"
                            className="hidden md:block absolute left-0 top-0 bottom-0 w-full object-cover opacity-20 pointer-events-none"
                            style={{ zIndex: 0 }}
                            width={600}
                            height={400}
                        />
                        <div className="max-w-lg text-white relative z-10">
                            <h1 className="font-extrabold text-3xl md:text-4xl leading-tight mb-4">
                                Wsmobility Electric Scooter Dealership - Best Electric Bike Franchise
                            </h1>
                            <h2 className="font-semibold text-lg md:text-xl leading-snug">
                                1000+ EV Dealership & Service Partners In Pan India Bases
                            </h2>
                        </div>
                    </div>

                    {/* Right side with the form */}
                    <div className="relative flex-1 flex items-center justify-center px-6 md:px-12 py-16 bg-white">
                        <div className="w-full max-w-md relative z-10">
                            {/* Removed redundant div with absolute positioning for a visual element,
                  as it wasn't clear what it was intended for and could be better handled with CSS. */}
                            <form className="space-y-4 pt-6 bg-white p-8 rounded-lg shadow-xl"> {/* Added shadow for better visual separation */}
                                <h3 className="font-semibold text-center text-black mb-4 text-2xl"> {/* Increased font size */}
                                    Become a Wsmobility Dealer
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Name*"
                                    required
                                    className="w-full border-b border-black outline-none py-2 placeholder:text-gray-400 focus:border-blue-500 transition-colors" // Added focus style
                                />
                                <select
                                    required
                                    className="w-full border-b border-black outline-none py-2 text-gray-400 cursor-pointer focus:border-blue-500 transition-colors"
                                    defaultValue=""
                                >
                                    <option disabled value="">
                                        --Select Age--
                                    </option>
                                    <option>18-25</option>
                                    <option>26-35</option>
                                    <option>36-45</option>
                                    <option>46+</option>
                                </select>
                                <div className="relative">
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-sm flex items-center gap-1 pl-1">
                                        <img
                                            src="https://flagcdn.com/w20/in.png"
                                            alt="Flag of India"
                                            className="w-5 h-auto mr-2"
                                            width="20"
                                            height="15"
                                        />
                                        +91 {/* Assuming +91 is the default and only option for this form */}
                                    </span>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number*"
                                        required
                                        className="w-full border-b border-black outline-none py-2 pl-12 placeholder:text-gray-400 focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    required
                                    className="w-full border-b border-black outline-none py-2 placeholder:text-gray-400 focus:border-blue-500 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Address*"
                                    required
                                    className="w-full border-b border-black outline-none py-2 placeholder:text-gray-400 focus:border-blue-500 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="City*"
                                    required
                                    className="w-full border-b border-black outline-none py-2 placeholder:text-gray-400 focus:border-blue-500 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Pin Code*"
                                    required
                                    className="w-full border-b border-black outline-none py-2 placeholder:text-gray-400 focus:border-blue-500 transition-colors"
                                />
                                <select
                                    required
                                    className="w-full border-b border-black outline-none py-2 text-gray-400 focus:border-blue-500 transition-colors"
                                    defaultValue=""
                                >
                                    <option disabled value="">
                                        Select State
                                    </option>
                                    <option>State 1</option>
                                    <option>State 2</option>
                                    <option>State 3</option>
                                </select>
                                {/* This select was empty in your original, added a placeholder */}
                                <select
                                    required
                                    className="w-full border-b border-black outline-none py-2 text-gray-400 focus:border-blue-500 transition-colors"
                                    defaultValue=""
                                >
                                    <option disabled value="">
                                        —Please choose an option—
                                    </option>
                                    <option>Option A</option>
                                    <option>Option B</option>
                                    <option>Option C</option>
                                </select>
                                <p className="font-semibold text-center text-black pt-4"> {/* Increased padding-top */}
                                    Turnover of Current Business (in Lakhs/Cr) *
                                </p>
                                <div className="flex justify-center mt-6">
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-pink-500 to-red-400 text-white px-8 py-3 rounded-full text-lg font-bold hover:brightness-110 transition-transform transform hover:scale-105" // Larger button, bolder text, subtle hover effect
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Dealership benefits cards section */}
                <section className="relative bg-gradient-to-b from-yellow-200 to-yellow-300 overflow-hidden">
                    <img
                        alt="Row of electric scooters in various colors parked on a white floor with a soft yellow-orange gradient sky background"
                        className="w-full object-cover object-center absolute inset-0 h-full -z-10 opacity-30" // Added opacity for better text readability
                        height="600"
                        src="https://images.unsplash.com/photo-1639016149400-08f9c1b64082?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // New, more relevant image
                        width="1920"
                    />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                        <h1 className="text-center text-slate-900 font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
                            Why Should I Own An Electric Bike Dealership
                        </h1>
                        <p className="mt-3 max-w-3xl mx-auto text-center text-black text-base sm:text-lg md:text-xl font-medium"> {/* Adjusted font weight */}
                            Join wsmobility winning team and be part of the best distributorship business in the booming electric vehicle industry.
                        </p>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {/* Dynamically render benefit cards using the DEALERSHIP_BENEFITS array */}
                            {DEALERSHIP_BENEFITS.map((benefit) => (
                                <div key={benefit.id} className="relative bg-white p-8 pt-16 rounded-xl shadow-lg"> {/* Added rounded corners and shadow */}
                                    <div className="absolute -top-8 left-8 bg-red-500 px-5 py-3 font-extrabold text-white text-4xl leading-none rounded-md"> {/* Added rounded corners */}
                                        {benefit.id}
                                    </div>
                                    <h3 className="text-slate-900 font-semibold text-xl mb-3"> {/* Increased font size */}
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-900 text-sm leading-relaxed font-semibold">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process of Obtaining Dealership Section */}
                <div className="bg-white text-[#0c1e3d] flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 py-10 gap-10 md:gap-20">
                    <div className="relative w-full max-w-lg md:max-w-xl flex justify-center">
                        <img
                            alt="Modern building with large circular Wsmobility logo sign on the wall, concrete and glass facade, evening lighting"
                            className="w-full h-auto object-contain"
                            height="420"
                            src="https://wsmobility.in/assets/parentCompanyLogo1.png"
                            width="720"
                        />
                        <div
                            className="absolute right-[-30px] top-1/2 -translate-y-1/2 bg-white text-[#0c1e3d] font-semibold text-sm md:text-base leading-tight tracking-tight px-2 py-1 rotate-[100px] select-none"
                            style={{ writingMode: 'vertical-rl' }}
                        >
                            Let’s Chat
                        </div>
                    </div>
                    <div className="max-w-xl w-full">
                        <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-6">
                            Process of Obtaining Wsmobility Electric Two Wheeler Dealership
                        </h2>
                        <div className="mb-6">
                            <h3 className="font-semibold text-base md:text-lg mb-2"> {/* Increased font size */}
                                Express Your Interest:
                            </h3>
                            <hr className="border-t border-gray-300 mb-3" />
                            <p className="text-sm md:text-base leading-relaxed"> {/* Adjusted font size */}
                                All you have to do is fill in your details in the form above and submit it to us.
                            </p>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-semibold text-base md:text-lg mb-2">
                                Get Connected:
                            </h3>
                            <hr className="border-t border-gray-300 mb-3" />
                            <p className="text-sm md:text-base leading-relaxed">
                                Our Dedicated Team Will Reach Out To You Within 48 Hours To Answer Your Questions about electric bike dealerships And Provide All The Information You Need To Get Started.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-base md:text-lg mb-2">
                                Become A Wsmobility Partner:
                            </h3>
                            <hr className="border-t border-gray-300 mb-3" />
                            <p className="text-sm md:text-base leading-relaxed">
                                Once You’re Confident About The Opportunity, We’ll Guide You Through The e bike Dealership Application Process, Ensuring A Smooth Transition to owning an e bike franchise
                            </p>
                        </div>
                    </div>
                </div>

                {/* Carousel Section */}
                <section className="py-12 bg-gray-100"> {/* Added padding and light background */}
                    <div id="default-carousel" className="relative w-full max-w-7xl mx-auto" data-carousel="static"> {/* Centered carousel and added max-width */}
                        {/* Carousel wrapper */}
                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                            {/* Dynamically render carousel items */}
                            {CAROUSEL_IMAGES.map((image, index) => (
                                <div
                                    key={index}
                                    id={`carousel-item-${index + 1}`}
                                    className="hidden duration-700 ease-in-out"
                                    data-carousel-item={index === 0 ? "active" : ""} // Set first item as active
                                >
                                    <img
                                    loading='lazy'
                                        src={image}
                                        className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                        alt={`Electric scooter image ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Slider indicators */}
                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            {/* Dynamically render indicators */}
                            {CAROUSEL_IMAGES.map((_, index) => (
                                <button
                                    key={index}
                                    id={`carousel-slide-to-${index}`}
                                    type="button"
                                    className="w-3 h-3 rounded-full"
                                    aria-current={index === 0 ? "true" : "false"}
                                    aria-label={`Slide ${index + 1}`}
                                    data-carousel-slide-to={index}
                                ></button>
                            ))}
                        </div>

                        {/* Slider controls */}
                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </section>

                {/* FIND YOUR NEAREST DEALER form section */}
                <section className="max-w-7xl mx-auto px-6 py-12 bg-white text-gray-700">
                    <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12 text-gray-600">
                        FIND YOUR NEAREST DEALER
                    </h2>
                    <form
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 max-w-7xl mx-auto items-center"
                        action="#" // Consider adding a proper form submission handler here
                        method="GET"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="border-b border-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 pb-1"
                        />
                        <div className="flex items-center border-b border-gray-700 pb-1">
                            <img
                                src="https://flagcdn.com/w20/in.png"
                                alt="Flag of India"
                                className="w-5 h-auto mr-2"
                                width="20"
                                height="15"
                            />
                            <select
                                name="phone_code"
                                className="appearance-none bg-transparent focus:outline-none text-gray-600"
                                aria-label="Country code"
                            >
                                <option value="+91" selected>+91</option> {/* Removed ▼ as it's typically handled by the browser's select styling */}
                            </select>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone*"
                                className="flex-1 ml-2 placeholder-gray-400 focus:outline-none"
                                required
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            className="border-b border-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 pb-1"
                            required
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            className="border-b border-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 pb-1"
                            min="0"
                        />
                        <select
                            name="state"
                            className="border-b border-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 pb-1 cursor-pointer"
                            aria-label="Select State"
                        >
                            <option disabled selected>- Select State -</option>
                            <option>State 1</option>
                            <option>State 2</option>
                            <option>State 3</option>
                        </select>
                        <select
                            name="region"
                            className="border-b border-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 pb-1 cursor-pointer"
                            aria-label="Select Region"
                        >
                            <option disabled selected>- Select Region-</option>
                            <option>Region 1</option>
                            <option>Region 2</option>
                        </select>
                        <select
                            name="city"
                            className="border-b border-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 pb-1 cursor-pointer"
                            aria-label="Select City"
                        >
                            <option disabled selected>- Select City-</option>
                            <option>City 1</option>
                            <option>City 2</option>
                        </select>
                        <div className="flex flex-col space-y-4 md:col-span-1"> {/* Explicitly setting col-span for consistency */}
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="need_more_bike_details"
                                    className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-400 cursor-pointer"
                                />
                                <span className="text-gray-700 text-lg">Need More Bike Details</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="interested_to_buy"
                                    className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-400 cursor-pointer"
                                />
                                <span className="text-gray-700 text-lg">Interested to Buy</span>
                            </label>
                        </div>

                        <div className="md:col-span-4 flex justify-center mt-6">
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium px-8 py-3 rounded-md transition-colors" // Larger button, rounded corners
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </section>

            </div>
        </div>
    );
};


export default DealershipContact;