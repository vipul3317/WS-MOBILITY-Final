import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MajorService = () => {
    const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/appointment', { state: { openForm: true } });
  };
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Countdown logic
    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetDate = new Date("2025-04-28T23:59:59").getTime(); 
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timerId = setInterval(calculateTimeLeft, 1000); 
        return () => clearInterval(timerId); 
    }, []);


    return (
        <section>
            <div className="container pt-8 pb-8 bg-gray-200">
            <div className="service flex justify-center">
                    <div className="major-service relative flex flex-col justify-around items-center p-4 bg-transparent overflow-hidden rounded-xl 
      border-t border-t-[rgba(39,108,51,0.5)]
      border-r border-r-[rgba(39,108,51,0.5)]
      border-b border-b-[rgba(39,108,51,0.5)]
      border-l border-l-[rgba(39,108,51,0.5)] 
      text-center bg-red-200 text-black font-bold text-4xl">
                        <h3 className="text-4xl font-bold pl-8 pr-8">MAJOR CAR SERVICE</h3>
                        <span className="absolute top-0 left-0 h-[5px] w-0 rounded-full bg-gradient-to-r from-transparent via-[rgba(132,130,26,0.9)] to-[rgb(8,76,7)] animate-animateTop"></span>
                        <span className="absolute bottom-0 right-0 h-[5px] w-0 rounded-full bg-gradient-to-r from-[rgba(8,76,7)] via-[rgba(132,130,26,0.9)] to-transparent animate-animateBottom"></span>
                        <span className="absolute top-0 right-0 w-[5px] h-0 rounded-full bg-gradient-to-b from-transparent via-[rgba(132,130,26,0.9)] to-[rgb(8,76,7)] animate-animateRight"></span>
                        <span className="absolute bottom-0 left-0 w-[5px] h-0 rounded-full bg-gradient-to-b from-[rgba(8,76,7)] via-[rgba(132,130,26,0.9)] to-transparent animate-animateLeft"></span>

                    </div>
                </div>
                <div className='relative mt-8'>
                    <div className='shadow-all-directions mx-auto p-6 md:p-8 bg-white rounded-3xl w-full md:w-3/5'>
                        <div className='flex flex-col md:flex-row md:gap-20 gap-8'>
                            <div className="included">
                                <span className='font-bold text-2xl ml-7 '>INCLUDED</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Car Wash</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Dashboard & Tyre Polish</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Interior Vacuuming (Carpet & Seat)</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Heater/Spark Plugs Checking
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Oil Filter Replacement
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Car Inspection
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Engine Oil Replacement
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Coolant Top-Up (200 ml)
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Battery Water Top-Up
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Wiper Fluid Replacement
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Battery Water Top-Up
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Air Filter Cleaning
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Car Scanning
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Fuel Filter Checking
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Rear Brake Shoes Serviced
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>AFront Brake Pads Serviced
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Brake Fluid Top-Up
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>AC Filter Cleaning
                                </span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Air Filter Cleaning
                                </span>

                            </div>
                            <div className="not-included-price gap-6">
                                <div className="not-included">
                                    <span className='font-bold text-2xl ml-7'>NOT INCLUDED</span>
                                    <br />
                                    <ClearIcon style={{ color: 'red' }} />
                                    <span className='ml-1'>Air Filter</span>
                                    <br />
                                    <ClearIcon style={{ color: 'red' }} />
                                    <span className='ml-1'>AC Filter</span>
                                    <br />
                                    <ClearIcon style={{ color: 'red' }} />
                                    <span className='ml-1'>Spark Plugs</span>
                                    <br />
                                    <ClearIcon style={{ color: 'red' }} />
                                    <span className='ml-1'>Spark Plugs Replacement (Labour)</span>
                                </div>
                                <div className="strikethrough-red price-not-app mt-16 text-5xl font-bold">
                                    Rs.12000
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlap-price text-center bg-green-800 p-6 rounded-3xl shadow-md animate-blinkRed-shadow
                        w-full md:w-auto mt-8 
                        md:absolute md:right-20 md:top-20">
                        <span className='text-white text-xl '>GET FREE OIL AND AED 150 OFF</span>
                        <br />
                        <span className='text-white text-xl'>WHEN YOU BOOK TODAY</span>
                        <br />
                        <span className='text-white text-xl block mt-4'>Now at <span className='text-yellow-300 text-5xl'>Rs.9999</span></span>

                        <div className="container flex flex-wrap justify-center gap-2 mt-5">
                            <div className="block">
                                <div className="text-center days bg-black text-white text-2xl px-5 py-1 shadow-md rounded-xl">
                                    {timeLeft.days}
                                </div>
                                <small className="mt-2 flex justify-center text-sm text-white">
                                    DAYS
                                </small>
                            </div>
                            <span className="text-2xl text-white">:</span>
                            <div className="block">
                                <div className="hours text-center rounded-xl bg-white text-black text-2xl px-5 py-1 shadow-md">
                                    {timeLeft.hours}
                                </div>
                                <small className="flex mt-2 justify-center text-sm text-white">
                                    HOURS
                                </small>
                            </div>
                            <span className="text-2xl text-white">:</span>
                            <div className="block">
                                <div className="minutes text-center rounded-xl bg-white text-black text-2xl px-5 py-1 shadow-md">
                                    {timeLeft.minutes}
                                </div>
                                <small className="mt-2 flex justify-center text-sm text-white">
                                    MINUTES
                                </small>
                            </div>
                            <span className="text-2xl text-white">:</span>
                            <div className="block">
                                <div className="seconds text-center bg-white text-black text-2xl px-5 py-1 shadow-md rounded-xl">
                                    {timeLeft.seconds}
                                </div>
                                <small className="mt-2 flex justify-center text-sm text-white">
                                    SECONDS
                                </small>
                            </div>
                        </div>

                        <div className="container text-center mt-5">
                            <button onClick={handleBookingClick} className="text-2xl font-bold shadow-lg shadow-white bg-red-700 text-white p-4 rounded-2xl ">BOOK NOW</button>
                        </div>

                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default MajorService;