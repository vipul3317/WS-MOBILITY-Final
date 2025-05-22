import React, { useState } from "react";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { Link } from "react-router-dom";

const Hero2 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttons = ["You Book", "We Collect", "We Service", "We Deliver"];

  const content = {
    0: <div className="flex flex-col md:flex-row justify-center working-explain0 p-4">
      <div className="details flex flex-col mb-6 md:mb-0 md:ml-2">
        <span className="text-green-600 text-xl md:text-2xl font-bold"><PhoneInTalkIcon className="mr-2" /> Contact</span>
        <span className="text-base md:text-lg ml-6 md:ml-10">Car Hub call centre operates from 8AM - 9PM, Saturday to Thursday.</span>
        <span className="text-base md:text-lg ml-6 md:ml-10">Call us at <a href="/contact" className="text-blue-800 font-bold underlined ml-1"> 7256095121</a> </span>

        <span className="text-green-600 text-xl md:text-2xl font-bold mt-4 md:mt-6"><BookOnlineIcon className="mr-2" /> Book Online</span>
        <span className="text-base md:text-lg ml-6 md:ml-10">Make a booking online at a single tap.</span>
        <span className="text-base md:text-lg ml-6 md:ml-10">Call us at <a href="/contact" className="text-blue-800 font-bold underlined ml-1">7256095121</a> </span>
      </div>
      <div className="working-media mx-auto md:ml-8">
        <img className="rounded-3xl w-full max-w-xs md:max-w-md" src="/assets/car-img.jpg" alt="car-image" />
      </div>
    </div>,

    1: <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 max-w-6xl working-explain1 p-4">
      <div className="working-media mx-auto mb-6 md:mb-0 md:ml-8 md:flex-1 order-1 md:order-none">
        <img className="rounded-3xl w-full max-w-xs md:max-w-md" src="/assets/collect.jpg" alt="car-image" />
      </div>
      <div className="details md:flex-1 flex flex-col">
        <span className="text-green-600 text-xl md:text-2xl font-bold"><PhoneInTalkIcon className="mr-2" />We Collect</span>
        <br />
        <div className="text-base md:text-lg ml-4 md:ml-8">
          After making the booking, our driver will arrive at a time and location of your choice. We will inspect your car
          and check for any faults and concerns you may have. A collection report will then be generated and sent on sms & email.
          <br />
          <br />
          If you have any concerns or enquiries, please contact customer support at 7256095121.
          Please remove any valuable belongings as your car passes through multiple departments.
          <br />
          <br />
          All our staﬀ wear face masks, gloves, and take other necessary precautions to prevent the spread of COVID-19.
        </div>
      </div>
    </div>,

    2: <div className="flex flex-col md:flex-row justify-center gap-4 max-w-6xl working-explain2 p-4">
      <div className="details md:flex-1 flex flex-col mb-6 md:mb-0">
        <span className="text-green-600 text-xl md:text-2xl font-bold"><PhoneInTalkIcon className="mr-2" />We Service</span>
        <br />
        <div className="text-base md:text-lg ml-4 md:ml-8">
          Once the car arrives at the workshop, a service advisor is assigned and a full detailed report with images is generated again.
          The car is checked by the next available technician. After checking, the health check report is sent by sms & email.
          <br />
          <br />
          If needed, our parts advisors search for highest quality parts with the best prices in the market. A quotation is then generated
          and sent to you via sms & email to accept or reject. No work is carried out without your approval.
          <br />
          <br />
          Once we receive your decision, the parts are ordered and your car repair or service is initiated.
        </div>
      </div>
      <div className="working-media mx-auto md:ml-8 md:flex-1">
        <img className="rounded-3xl w-full max-w-xs md:max-w-md" src="/assets/workshop.jpg" alt="car-image" />
      </div>
    </div>,

    3: <div className="flex flex-col md:flex-row justify-center gap-4 max-w-6xl working-explain3 p-4">
      <div className="working-media mx-auto mb-6 md:mb-0 md:ml-8 md:flex-1 order-1 md:order-none">
        <img className="rounded-3xl w-full max-w-xs md:max-w-md" src="/assets/delivery.jpg" alt="car-image" />
      </div>
      <div className="details md:flex-1 flex flex-col">
        <span className="text-green-600 text-xl md:text-2xl font-bold"><PhoneInTalkIcon className="mr-2" />We Deliver</span>
        <br />
        <div className="text-base md:text-lg ml-4 md:ml-8">
          We Deliver
          Once the car service is complete, it goes for a quality check, and a road test. If it fails the quality check,
          it gets sent back to the workshop for further diagnosis.
          After passing the road test, the car goes for cleaning. The insides get vacuumed and the outside gets shampooed,
          washed, and dried.
          <br/>
          <br/>
          The car goes for another quality check after the cleaning. After it passes, an invoice will be generated and a link
          to make the online payment gets sent to you by SMS and email.
          <br/>
          <br/>
          Once the invoice is paid, a driver is then assigned to deliver your car back to you. The driver will carry out a final 
          inspection with you and generate a delivery report which will be sent to you on SMS and email.
        </div>
      </div>
    </div>
  }

  return (
    <section id="work-flow-id">
      <div className="container w-full pt-4 md:pt-8 pb-4 md:pb-8 bg-gray-300">
        <div className="working-heading p-2 md:p-4">
          <div className="heading-work text-center text-black font-bold text-2xl md:text-4xl">
            HOW IT WORKS
          </div>
          <div className="work-flow flex flex-wrap justify-center mt-4 md:mt-8 mb-4 md:mb-8">
            {buttons.map((label, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`text-sm sm:text-base md:text-xl transition-all duration-100 w-full sm:w-auto 
                ${selectedIndex === index ? "bg-green-600 text-white" : "bg-white text-black"} 
                hover:text-white hover:bg-green-600 py-2 md:pt-4 md:pb-4 px-4 sm:px-8 md:px-12 lg:px-24 
                border border-black mb-2 sm:mb-0 sm:mx-1`}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center px-2">
          {content[selectedIndex]}
        </div>
        <div className="get-a-quote justify-center mt-4 md:mt-8 flex flex-wrap px-4">
          <span className="text-base md:text-xl bg-black text-white p-3 md:p-4 md:pl-16 md:pr-16 rounded-2xl text-center"> 
            Incredible Car Service Deals.
            <Link to={'/under-progress'}>
              <button className="underline underline-offset-auto block w-full mt-2">GET A PERSONALIZED QUOTE</button>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero2;