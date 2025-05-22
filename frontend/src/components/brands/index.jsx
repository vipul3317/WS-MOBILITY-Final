import React, { useState } from 'react'

const Brand = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const buttons = ["American", "British", "German", "Japanese", "French", "Others"];

    const brandContent = {
        0: <div className='branddiv-part2'>
            <div className="brandcard-container m-2 flex flex-wrap gap-5 justify-center">
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-4' src='/assets/brand logos/ford-logo-2017-download.png' alt='brandA-1' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-4' src='/assets/brand logos/jeep-logo-1993-download.png'alt='brandA-2' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-5' src='/assets/brand logos/Chevrolet-logo-2013-640x281.jpg' alt='brandA-3' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/brand logos/tesla-logo-2007-full-640.png' alt='brandA-4' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/brand logos/hummer-logo.png' alt='brandA-5' /></span>
                </div>
            </div>
        </div> ,
        1: <div className='branddiv-part2'>
            <div className="brandcard-container m-2 flex flex-wrap gap-5 justify-center">
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-2' src='/assets/brand logos/Rolls-Royce-logo-640x550.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-2' src='/assets/brand logos/Mini-logo-2001-640x270.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/bentley-logo-2002-640.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-4' src='/assets/brand logos/Land-Rover-logo-2011-640x335.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-4' src='/assets/brand logos/MG-logo-red-2010-640x550.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-2' src='/assets/brand logos/jaguar-logo-2021-640.png' /></span>
                </div>
                
            </div>
        </div> ,
        2: <div className='branddiv-part2'>
            <div className="brandcard-container m-2 flex flex-wrap gap-5 justify-center">
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/brand logos/audi-logo-2016-640.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/brand logos/bmw-logo-2020-gray.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-2' src='/assets/brand logos/Mercedes-Benz-logo-2011-640x369.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Volkswagen-logo-2019-640x500.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/brand logos/porsche-logo-2014-full-640.png' /></span>
                </div>
                
            </div>
        </div> ,
        3: <div className='branddiv-part2'>
            <div className="brandcard-container m-2 flex flex-wrap gap-5 justify-center">
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/toyota-logo-2020-europe-640.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-2' src='/assets/brand logos/honda-logo-2000-full-640.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-2' src='/assets/brand logos/nissan-logo-2020-black-show (1).png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-4' src='/assets/brand logos/Suzuki-logo-640x285.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Mitsubishi-logo-640x550.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Infiniti-logo-1989-640x308.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Lexus-logo-1988-640x266.jpg' /></span>
                </div>
                
            </div>
        </div> ,
        4: <div className='branddiv-part2'>
            <div className="brandcard-container m-2 flex flex-wrap gap-5 justify-center">
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Bugatti-logo-640x327.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Peugeot-logo-2010-640x451.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Citroen-logo-2009-640x550.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Renault-logo-2015-640x550.jpg' /></span>
                </div>
            </div>
        </div> ,
        5: <div className='branddiv-part2'>
            <div className="brandcard-container m-2 flex flex-wrap gap-5 justify-center">
            <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Tata-logo-2000-640x550.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Mahindra-logo-640x316.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Kia-logo-640x321.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Skoda-logo-2016-640x550.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Volvo-logo-2014-640x550.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-5' src='/assets/brand logos/Isuzu-logo-1991-640x106.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-3' src='/assets/brand logos/Datsun-logo-2013-640x344.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-2' src='/assets/brand logos/Fiat-logo-2006-640x550.jpg' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-2' src='/assets/brand logos/lamborghini-logo-1998-640.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-2' src='/assets/brand logos/hyundai-logo-2011-640.png' /></span>
                </div>
                
                
            </div>
        </div>

    }
    return (
        <section id='brands-id'>
            <div className="w-full parent-brand pt-8 pb-8 bg-gray-300">
                <div className="branddiv-part1 p-4 ">
                    <div className="heading-brand text-center text-black font-semibold text-4xl">
                        BRANDS WE SERVICE & REPAIR
                    </div>
                    <div className="flex gap-2 flex-wrap justify-center mt-12 mb-8">
                        {buttons.map((label, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`text-xl transition-all duration-0 ${selectedIndex === index ? "bg-green-600 text-white" : "bg-white text-black"} hover:bg-green-600 hover:text-white rounded-lg pt-4 pb-4 pl-16 pr-16 border border-black`}>
                                {label}
                            </button>
                        ))}

                    </div>
                </div>

                <div className="brand-content flex justify-center">
                        {brandContent[selectedIndex]}
                </div>

            </div>
        </section>
    )
}

export default Brand