import React from "react";
import { useState, useEffect } from "react";
import CarRepairIcon from '@mui/icons-material/CarRepair';
import { Link, useNavigate } from "react-router-dom";
import 'boxicons'

const Hero = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/appointment', { state: { openForm: true } });
  };

  // Timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown logic
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-08-28T23:59:59").getTime(); // Set target date
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

  const Blinktext = ({ children, interval = 500 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setInterval(() => {
        setVisible((prev) => !prev);
      }, interval);

      return () => clearInterval(timer);
    }, [interval]);

    return (
      <div style={{ visibility: visible ? "visible" : "hidden" }}>
        {children}
      </div>
    );
  };

  return (
    <>
      <div className="container w-full flex flex-col lg:flex-row pb-24 bg-gray-200">
        <div className="container">
          <div className="card-container1 m-4 md:m-12 flex flex-wrap justify-center text-xl">
            <Link to={'/carhub/services'} className="w-1/2 sm:w-auto">
              <div className="card pl-4 pr-4 md:pl-6 md:pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-2 md:m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold">
                <CarRepairIcon style={{ fontSize: '50px', color: 'green' }} /><br />
                <span>Car</span> <br />
                <span>Service</span>
              </div>
            </Link>
            <Link to={'/under-progress'} className="w-1/2 sm:w-auto">
              <div className="card pl-4 pr-4 md:pl-6 md:pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-2 md:m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold">
                <img style={{ width: '50px', marginLeft: '12px' }} src="/assets/service-icons/car-renewal-20230315040907.png" />
                <span>Car</span>
                <br />
                <span>Renewal</span>
              </div>
            </Link>
            <Link to={'/carhub/roadside-services'} className="w-1/2 sm:w-auto">
              <div className="card pl-4 pr-4 md:pl-6 md:pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-2 md:m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold">
                <img style={{ width: '50px', marginLeft: '15px' }} src="/assets/service-icons/recovery-vehicle-20231014114645-20231021073004.png" />
                <span>Roadside</span>
                <br />
                <span>Assistance</span>
              </div>
            </Link>
          </div>

          <div className="card-container2 m-4 md:m-12 flex flex-wrap justify-center text-xl">
            <Link to={'/under-progress'} className="w-1/2 sm:w-auto">
              <div className="card pl-4 pr-4 md:pl-6 md:pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-2 md:m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold">
                <img style={{ width: '50px', marginLeft: '15px' }} src="/assets/service-icons/recovery-vehicle-20231014114645-20231021073004.png" />
                <span>Mobile</span> <br />
                <span>Service</span>
              </div>
            </Link>
            <Link to={'/under-progress'} className="w-1/2 sm:w-auto">
              <div className="card pl-4 pr-4 md:pl-6 md:pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-2 md:m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold">
                <img style={{ width: '80px', height: '60px', marginLeft: '10px' }} src="/assets/service-icons/courtesy.png" />
                <span>Car</span> <br />
                <span>Evaluation</span>
              </div>
            </Link>
            <Link to={'/carhub/contract-form'} className="w-1/2 sm:w-auto">
              <div className="card pl-4 pr-4 md:pl-6 md:pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-2 md:m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold">
                <img style={{ width: '50px', marginLeft: '10px' }} src="/assets/service-icons/contract.png" />
                <span>Service</span> <br />
                <span>Contract</span>
              </div>
            </Link>
          </div>

          <div className="card-container3 m-4 md:m-12 flex flex-wrap justify-center text-xl">
            <Link to={'/under-progress'} className="w-1/2 sm:w-auto">
              <div className="card pl-4 pr-4 md:pl-6 md:pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-2 md:m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold">
                <CarRepairIcon style={{ fontSize: '60px', color: 'green' }} /><br />
                <span>Car</span> <br />
                <span>Repair</span>
              </div>
            </Link>
            <Link to={'/under-progress'} className="w-1/2 sm:w-auto">
              <div className="card pl-4 pr-4 md:pl-6 md:pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-2 md:m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold">
                <img style={{ width: '50px', marginLeft: '10px' }} src="/assets/service-icons/car-detailing-20230315040819.png" />
                <span>Car</span> <br />
                <span>Detailing</span>
              </div>
            </Link>
            <Link to={'/under-progress'} className="w-1/2 sm:w-auto">
              <div className="card pl-4 pr-4 md:pl-6 md:pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-2 md:m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold">
                <img style={{ width: '70px', height: '60px', marginLeft: '10px' }} src="/assets/service-icons/courtesy.png" />
                <span>Courtesy</span> <br />
                <span>Car</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Booking section */}
        <div className="container pr-8">
          <div className="flex justify-center">
            <img
              className="w-1/2 md:w-1/3 lg:w-1/3"
              src="/assets/carwithleaf.png"
              alt="refresh-img"
            />
          </div>
          <div className="container flex flex-col gap-3 md:gap-5 font-extrabold text-3xl md:text-5xl text-center">
            <span>BOOK NOW</span>
            <span className="text-green-800">GET YOUR CAR REFRESH</span>
          </div>
          <div className="container flex justify-center flex-col gap-3 text-center mt-6 md:mt-10">
            <span className="text-lg md:text-xl text-gray-900 font-semibold">
              Free Car Delivery and PickUp
            </span>
            <div className="border-2 font-semibold border-dotted w-fit mx-auto text-lg md:text-xl pl-4 pr-4 text-gray-900 bg-yellow-300 border-black">
              Use Code : CARHUB2025
            </div>
            <Blinktext>
              <h1 className="text-red-800 text-xl md:text-2xl font-extrabold">
                Hurry Up
              </h1>
            </Blinktext>
          </div>
          <br />
          {/* Timer section */}
          <div className="container flex flex-wrap justify-center gap-1 md:gap-3">
            <div className="block">
              <div className="text-center days bg-black text-white animate-blink-shadow text-3xl md:text-5xl px-3 md:px-5 py-1 shadow-md rounded-xl">
                {timeLeft.days}
              </div>
              <small className="mt-1 md:mt-2 flex justify-center text-sm md:text-base font-bold text-gray-800">
                DAYS
              </small>
            </div>
            <span className="text-3xl md:text-5xl">:</span>
            <div className="block">
              <div className="hours text-center rounded-xl bg-green-800 animate-blink-shadow text-white text-3xl md:text-5xl px-3 md:px-5 py-1 shadow-md">
                {timeLeft.hours}
              </div>
              <small className="flex mt-1 md:mt-2 justify-center text-sm md:text-base font-bold text-gray-800">
                HOURS
              </small>
            </div>
            <span className="text-3xl md:text-5xl">:</span>
            <div className="block">
              <div className="minutes text-center rounded-xl bg-green-800 animate-blink-shadow text-white text-3xl md:text-5xl px-3 md:px-5 py-1 shadow-md">
                {timeLeft.minutes}
              </div>
              <small className="mt-1 md:mt-2 flex justify-center text-sm md:text-base font-bold text-gray-800">
                MINUTES
              </small>
            </div>
            <span className="text-3xl md:text-5xl">:</span>
            <div className="block">
              <div className="seconds text-center bg-green-800 animate-blink-shadow text-white text-3xl md:text-5xl px-3 md:px-5 py-1 shadow-md rounded-xl">
                {timeLeft.seconds}
              </div>
              <small className="mt-1 md:mt-2 flex justify-center animate-pulse text-sm md:text-base font-bold text-gray-800">
                SECONDS
              </small>
            </div>
          </div>
          <div className="container text-center mt-6 md:mt-8">
            <button
              onClick={handleBookingClick}
              className="text-xl md:text-2xl font-bold shadow-xl hover:shadow-black bg-green-800 text-white p-3 md:p-4 rounded-2xl">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;