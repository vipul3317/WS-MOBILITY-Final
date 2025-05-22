import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';

const Warranty = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const buttons = ["Service", "A/C", "Repair", "Batteries", "Tyres", "Electrical"];

    const warrantyContent = {
        0: <div className="warranty-part2 flex flex-col md:flex-row justify-between w-full max-w-6xl">
            <div className="policy1 flex flex-col text-center pb-6 md:pl-24 md:pb-0 md:pr-24 border-b-4 md:border-b-0 md:border-r-4 border-green-700 mb-6 md:mb-0">
                <span className='text-6xl text-green-600 font-semibold p-1'>12 MONTHS</span>
                <span className='text-3xl text-black font-semibold p-1'>OR</span>
                <span className='text-6xl text-green-600 font-semibold p-1'>10,000 KM</span>
            </div>
            <div className="policy2 w-full md:w-1/2 pt-4 md:pt-0 pb-4 md:pl-8">
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Warranty on parts and labour</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>12 months or 10,000 KM - whichever comes first</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Hassle-free claims process</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Terms & conditions apply</span>
                <br />
                <div className='mt-8 ml-8'>We provide a 12 month/10,000 KM warranty with every car service. Whether you choose to buy genuine or aftermarket parts from us, both come with a hassle-free warranty policy. <br className="hidden md:block" />The labour is also covered under the warranty.</div>
            </div>
        </div>,
        1: <div className="warranty-part2 flex flex-col md:flex-row justify-between w-full max-w-6xl">
            <div className="policy2 w-full md:w-1/2 pt-4 md:pt-0 md:pl-24 pb-4">
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Warranty on parts and labour</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>6 months or 5,000 KM - whichever comes first</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Hassle-free claims process</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Terms & conditions apply</span>
                <br />
                <div className='mt-8 ml-8'>We provide a 6 month/5,000 KM warranty with every car service. Whether you choose to buy genuine or aftermarket parts from us, both come with a hassle-free warranty policy. <br className="hidden md:block" />The labour is also covered under the warranty.</div>
            </div>
            <div className="policy1 w-full md:w-1/2 flex flex-col text-center pb-6 md:pb-0 md:pr-24 border-t-4 md:border-t-0 md:border-l-4 border-green-700 mb-6 md:mb-0">
                <span className='text-6xl text-green-600 font-semibold p-1'>6 MONTHS</span>
                <span className='text-3xl text-black font-semibold p-1'>OR</span>
                <span className='text-6xl text-green-600 font-semibold p-1'>5,000 KM</span>
            </div>
        </div>,
        2: <div className="warranty-part2 flex flex-col md:flex-row justify-between w-full max-w-6xl">
            <div className="policy1 flex flex-col text-center pb-6 md:pl-24 md:pb-0 md:pr-24 border-b-4 md:border-b-0 md:border-r-4 border-green-700 mb-6 md:mb-0">
                <span className='text-6xl text-green-600 font-semibold p-1'>12 MONTHS</span>
                <span className='text-3xl text-black font-semibold p-1'>OR</span>
                <span className='text-6xl text-green-600 font-semibold p-1'>10,000 KM</span>
            </div>
            <div className="policy2 w-full md:w-1/2 pt-4 md:pt-0 pb-4 md:pl-8">
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Warranty on parts and labour</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>12 months or 10,000 KM - whichever comes first</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Hassle-free claims process</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Terms & conditions apply</span>
                <br />
                <div className='mt-8 ml-8'>We provide a 12 month/10,000 KM warranty with mechanical repairs<br className="hidden md:block" /> excluding AC, electrical, seals and consumables. Whether you choose<br className="hidden md:block" /> to buy genuine or aftermarket parts from us, both come with a hassle-free warranty policy. The labour is also covered under the warranty.</div>
            </div>
        </div>,
        3: <div className="warranty-part2 flex flex-col md:flex-row justify-between w-full max-w-6xl">
            <div className="policy2 w-full md:w-1/2 pt-4 md:pt-0 md:pl-24 pb-4">
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Warranty on parts and labour</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>12 months or 10,000 KM - whichever comes first</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Hassle-free claims process</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Terms & conditions apply</span>
                <br />
                <div className='mt-8 ml-8'>We provide a 12 month/10,000 KM warranty with every car service. Whether you choose to buy genuine or aftermarket parts from us, both come with a hassle-free warranty policy. <br className="hidden md:block" />The labour is also covered under the warranty.</div>
            </div>
            <div className="policy1 w-full md:w-1/2 flex flex-col text-center pb-6 md:pb-0 md:pr-24 border-t-4 md:border-t-0 md:border-l-4 border-green-700 mb-6 md:mb-0">
                <span className='text-6xl text-green-600 font-semibold p-1'>12 MONTHS</span>
                <span className='text-3xl text-black font-semibold p-1'>OR</span>
                <span className='text-6xl text-green-600 font-semibold p-1'>10,000 KM</span>
            </div>
        </div>,
        4: <div className="warranty-part2 flex flex-col md:flex-row justify-between w-full max-w-6xl">
            <div className="policy1 flex flex-col text-center pb-6 md:pl-24 md:pb-0 md:pr-24 border-b-4 md:border-b-0 md:border-r-4 border-green-700 mb-6 md:mb-0">
                <span className='text-6xl text-green-600 font-semibold p-1'>12 MONTHS</span>
                <span className='text-3xl text-black font-semibold p-1'>OR</span>
                <span className='text-6xl text-green-600 font-semibold p-1'>10,000 KM</span>
            </div>
            <div className="policy2 w-full md:w-1/2 pt-4 md:pt-0 pb-4 md:pl-8">
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Warranty on parts and labour</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>12 months or 10,000 KM - whichever comes first</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Hassle-free claims process</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Terms & conditions apply</span>
                <br />
                <div className='mt-8 ml-8'>We provide a 12 month/10,000 KM warranty with every car service. <br className="hidden md:block" />Whether you choose to buy genuine or aftermarket parts from us, <br className="hidden md:block" />both come with a hassle-free warranty policy. <br className="hidden md:block" />The labour is also covered under the warranty.</div>
            </div>
        </div>,
        5: <div className="warranty-part2 flex flex-col md:flex-row justify-between w-full max-w-6xl">
            <div className="policy2 w-full md:w-1/2 pt-4 md:pt-0 md:pl-24 pb-4">
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Warranty on parts and labour</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>6 months or 5,000 KM - whichever comes first</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Hassle-free claims process</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Terms & conditions apply</span>
                <br />
                <div className='mt-8 ml-8'>We provide a 6-month warranty on electrical components and repairs. Whether you choose to buy genuine or aftermarket parts from us, both come with a hassle-free warranty policy. <br className="hidden md:block" />The labour is also covered under the warranty.</div>
            </div>
            <div className="policy1 w-full md:w-1/2 flex flex-col text-center pb-6 md:pb-0 md:pr-24 border-t-4 md:border-t-0 md:border-l-4 border-green-700 mb-6 md:mb-0">
                <span className='text-6xl text-green-600 font-semibold p-1'>6 MONTHS</span>
                <span className='text-3xl text-black font-semibold p-1'>OR</span>
                <span className='text-6xl text-green-600 font-semibold p-1'>5,000 KM</span>
            </div>
        </div>
    };

    return (
        <section id='warranty-id'>
            <div className="parent-warranty w-full pt-8 pb-8 bg-gray-200">
                <div className="warrantydiv-part1 p-4">
                    <div className="heading-warranty text-center text-black font-semibold text-4xl">
                        OUR WARRANTY POLICY
                    </div>
                    <div className="flex gap-2 flex-wrap justify-center mt-12 mb-8">
                        {buttons.map((label, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`transition-all duration-0 ${selectedIndex === index ? "bg-green-600 text-white" : "bg-white text-black"} hover:bg-green-600 hover:text-white rounded-lg pt-2 pb-2 md:pt-4 md:pb-4 pl-4 pr-4 md:pl-16 md:pr-16 text-sm md:text-xl border border-black mb-2 md:mb-0`}>
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="brand-content flex justify-center px-4 md:px-0">
                    {warrantyContent[selectedIndex]}
                </div>
            </div>
        </section>
    )
}

export default Warranty;