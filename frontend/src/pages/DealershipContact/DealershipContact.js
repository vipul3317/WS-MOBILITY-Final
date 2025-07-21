
import React, { useEffect } from 'react';

const DealershipContact = () => {


    useEffect(() => {
        // Check if the Flowbite library is loaded and the Carousel class exists
        if (typeof window.Flowbite !== 'undefined' && typeof window.Flowbite.Carousel !== 'undefined') {
            const carouselElement = document.getElementById('default-carousel');

            const items = [
                { position: 0, el: document.getElementById('carousel-item-1') },
                { position: 1, el: document.getElementById('carousel-item-2') },
                { position: 2, el: document.getElementById('carousel-item-3') },
                { position: 3, el: document.getElementById('carousel-item-4') },
                { position: 4, el: document.getElementById('carousel-item-5') }
            ];

            const options = {
                defaultPosition: 1,
                interval: 3000, // Change the slide every 3 seconds
                indicators: {
                    activeClasses: 'bg-white dark:bg-gray-800',
                    inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
                    items: [
                        { position: 0, el: document.getElementById('carousel-slide-to-0') },
                        { position: 1, el: document.getElementById('carousel-slide-to-1') },
                        { position: 2, el: document.getElementById('carousel-slide-to-2') },
                        { position: 3, el: document.getElementById('carousel-slide-to-3') },
                        { position: 4, el: document.getElementById('carousel-slide-to-4') }
                    ]
                },
                onSlideChange: () => {
                    // Callback function when a slide changes
                    console.log('Slide has been changed');
                },
            };

            const carousel = new window.Flowbite.Carousel(carouselElement, items, options);
        }
    }, []);

    return (
        // Single parent container to hold all content
        <div className="flex flex-col">
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
                    <div className="w-full max-w-md relative z-10 bg-white">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full z-20"></div>
                        <form className="space-y-4 pt-6">
                            <h3 className="font-semibold text-center text-black mb-4">
                                Become a Wsmobility Dealer
                            </h3>
                            <input
                                type="text"
                                placeholder="Name*"
                                required
                                className="w-full border-b border-black outline-none py-1 placeholder:text-gray-400"
                            />
                            <select
                                required
                                className="w-full border-b border-black outline-none py-1 text-gray-400 cursor-pointer "
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
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 pl-1 text-xs flex items-center gap-1">
                                    <img
                                        src="https://flagcdn.com/w20/in.png"
                                        alt="Flag of India"
                                        className="w-5 h-auto mr-2"
                                        width="20"
                                        height="15"
                                    />
                                    {/* // data will be come from the other courntry site in json  */}
                                </span>
                                <input
                                    type="tel"
                                    placeholder="Phone Number*"
                                    required
                                    className="w-full border-b border-black outline-none py-1 pl-10 placeholder:text-gray-400"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email*"
                                required
                                className="w-full border-b border-black outline-none py-1 placeholder:text-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Address*"
                                required
                                className="w-full border-b border-black outline-none py-1 placeholder:text-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="City*"
                                required
                                className="w-full border-b border-black outline-none py-1 placeholder:text-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Pin Code*"
                                required
                                className="w-full border-b border-black outline-none py-1 placeholder:text-gray-400"
                            />
                            <select
                                required
                                className="w-full border-b border-black outline-none py-1 text-gray-400"
                                defaultValue=""
                            >
                                <option disabled value="">
                                    Select State
                                </option>
                                <option>State 1</option>
                                <option>State 2</option>
                                <option>State 3</option>
                            </select>
                            <select
                                required
                                className="w-full border-b border-black outline-none py-1 text-gray-400"
                                defaultValue=""
                            >
                                <option disabled value="">
                                    —Please choose an option—
                                </option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                            <p className="font-semibold text-center text-black">
                                Turnover of Current Business (in Lakhs/Cr) *
                            </p>
                            <hr className="border-black" />
                            <div className="flex justify-center mt-6">
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-pink-500 to-red-400 text-white px-8 py-2 rounded-full text-sm font-medium hover:brightness-110 transition"
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
                    className="w-full object-cover object-center absolute inset-0 h-full -z-10"
                    height="600"
                    src="https://storage.googleapis.com/a1aa/image/2b0695b6-fc41-45ce-c4e3-2403193e4ce8.jpg"
                    width="1920"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-center text-slate-900 font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
                        Why Should I Own An Electric Bike Dealership
                    </h1>
                    <p className="mt-3 max-w-3xl mx-auto text-center text-black text-base sm:text-lg md:text-xl">
                        Join wsmobility winning team and be part of the best distributorship business in the booming electric vehicle industry.
                    </p>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {/* Card 1 */}
                        <div className="relative bg-white p-8 pt-16">
                            <div className="absolute -top-8 left-8 bg-red-500 px-5 py-3 font-extrabold text-white text-4xl leading-none">
                                01
                            </div>
                            <h3 className="text-slate-900 font-semibold text-lg mb-3">
                                Thriving Market
                            </h3>
                            <p className="text-slate-900 text-sm leading-relaxed font-semibold">
                                The electric bike dealership industry is growing rapidly, making this the perfect time for you to invest and succeed in the booming EV space.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="relative bg-white p-8 pt-16">
                            <div className="absolute -top-8 left-8 bg-red-500 px-5 py-3 font-extrabold text-white text-4xl leading-none">
                                02
                            </div>
                            <h3 className="text-slate-900 font-semibold text-lg mb-3">
                                Eco-Friendly
                            </h3>
                            <p className="text-slate-900 text-sm leading-relaxed font-semibold">
                                By owning an EV dealership, you contribute to a cleaner, greener future with zero-emission, eco-friendly transportation solutions.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="relative bg-white p-8 pt-16">
                            <div className="absolute -top-8 left-8 bg-red-500 px-5 py-3 font-extrabold text-white text-4xl leading-none">
                                03
                            </div>
                            <h3 className="text-slate-900 font-semibold text-lg mb-3">
                                Profit Potential
                            </h3>
                            <p className="text-slate-900 text-sm leading-relaxed font-semibold">
                                A bike dealership offers high-profit margins with increasing demand, giving you a strong return on investment and long-term business growth.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="relative bg-white p-8 pt-16">
                            <div className="absolute -top-8 left-8 bg-red-500 px-5 py-3 font-extrabold text-white text-4xl leading-none">
                                04
                            </div>
                            <h3 className="text-slate-900 font-semibold text-lg mb-3">
                                Credibility
                            </h3>
                            <p className="text-slate-900 text-sm leading-relaxed font-semibold">
                                With a Wsmobility electric scooter dealership, you get expert support, hands-on training, and the backing of a trusted brand—helping you build a profitable and successful dealership business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
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
                    <h1 className="text-2xl md:text-3xl font-semibold leading-tight mb-6">
                        Process of Obtaining wsmobility Electric Two Wheeler Dealership
                    </h1>
                    <div className="mb-6">
                        <p className="font-semibold text-sm md:text-base mb-2">
                            Express Your Interest:
                        </p>
                        <hr className="border-t border-gray-300 mb-3" />
                        <p className="text-xs md:text-sm leading-relaxed">
                            All you have to do is fill in your details in the form above and submit it to us.
                        </p>
                    </div>
                    <div className="mb-6">
                        <p className="font-semibold text-sm md:text-base mb-2">
                            Get Connected:
                        </p>
                        <hr className="border-t border-gray-300 mb-3" />
                        <p className="text-xs md:text-sm leading-relaxed">
                            Our Dedicated Team Will Reach Out To You Within 48 Hours To Answer Your Questions about electric bike dealerships And Provide All The Information You Need To Get Started.
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold text-sm md:text-base mb-2">
                            Become A Wsmobility Partner:
                        </p>
                        <hr className="border-t border-gray-300 mb-3" />
                        <p className="text-xs md:text-sm leading-relaxed">
                            Once You’re Confident About The Opportunity, We’ll Guide You Through The e bike Dealership Application Process, Ensuring A Smooth Transition to owning an e bike franchise
                        </p>
                    </div>
                </div>
            </div>

            <div id="default-carousel" className="relative w-full" data-carousel="static">
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* Item 1 */}
                    <div id="carousel-item-1" className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://www.muthootcap.com/wp-content/uploads/2022/06/Ather-450X-1-1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* Item 2 */}
                    <div id="carousel-item-2" className="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="https://www.muthootcap.com/wp-content/uploads/2022/06/Ather-450X-1-1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* Item 3 */}
                    <div id="carousel-item-3" className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://www.muthootcap.com/wp-content/uploads/2022/06/Ather-450X-1-1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* Item 4 */}
                    <div id="carousel-item-4" className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://www.muthootcap.com/wp-content/uploads/2022/06/Ather-450X-1-1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* Item 5 */}
                    <div id="carousel-item-5" className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://www.muthootcap.com/wp-content/uploads/2022/06/Ather-450X-1-1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>

                {/* Slider indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button id="carousel-slide-to-0" type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button id="carousel-slide-to-1" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button id="carousel-slide-to-2" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button id="carousel-slide-to-3" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button id="carousel-slide-to-4" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
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

            <section className="max-w-7xl mx-auto px-6 py-12 bg-white text-gray-700">
                <h1 className="text-center text-3xl md:text-4xl font-semibold mb-12 text-gray-600">
                    FIND YOUR NEAREST DEALER
                </h1>
                <form
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 max-w-7xl mx-auto items-center"
                    action="#"
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
                            <option value="+91" selected>+91 ▼</option>
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
                        className="border-b border-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 pb-1 cursor-pointer "
                        aria-label="Select State"
                    >
                        <option disabled selected>- Select State -</option>
                        <option>State 1</option>
                        <option>State 2</option>
                    </select>
                    <select
                        name="region"
                        className="border-b border-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 pb-1 cursor-pointer "
                        aria-label="Select Region"
                    >
                        <option disabled selected>- Select Region-</option>
                        <option>Region 1</option>
                        <option>Region 2</option>
                    </select>
                    <select
                        name="city"
                        className="border-b border-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-500 pb-1 cursor-pointer "
                        aria-label="Select City"
                    >
                        <option disabled selected>- Select City-</option>
                        <option>City 1</option>
                        <option>City 2</option>
                    </select>
                    <div className="flex flex-col space-y-4">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="need_more_bike_details"
                                className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-400 cursor-pointer "
                            />
                            <span className="text-gray-700 text-lg">Need More Bike Details</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer  ">
                            <input
                                type="checkbox"
                                name="interested_to_buy"
                                className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-400 cursor-pointer "
                            />
                            <span className="text-gray-700 text-lg">Interested to Buy</span>
                        </label>
                    </div>

                    <div className="md:col-span-4 flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium px-6 py-2 rounded"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </section>



        </div>
    );
};

export default DealershipContact;




