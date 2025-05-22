import React from 'react'
import Accordion from './accordion';

const FAQ = () => {
    return (
        <div className="container w-full p-4 sm:p-8 md:p-16 pb-6 sm:pb-8 bg-gray-300">
            <div className="faqHeading font-semibold mb-4 sm:mb-8 flex justify-center text-2xl sm:text-3xl md:text-4xl">
                FREQUENTLY ASKED QUESTIONS
            </div>
            <div className='mx-2 sm:mx-8 md:mx-16 lg:mx-24 justify-center'>
                <Accordion title='How much is the pick-up and drop off service? ?' answer='It’s absolutely free! The complimentary pickup and delivery service is applicable for any service booking done on the app, or the website. 

                By choosing CarHub, you get to skip the traffic and won’t have to wait around at garages any longer. If your car happens to be in need of recovery, it’ll come at some additional cost. ' />
            </div>
            <div className='mx-2 sm:mx-8 md:mx-16 lg:mx-24 justify-center'>
                <Accordion title='What if my car is still covered under warranty??' answer='CarHub still offers convenient benefits and savings on all your wear and tear items including batteries, brakes and tyres and on non-mechanical repairs. If you have any queries you can simply use our online chat support or call our customer care to speak to one of our advisors who will be happy to assist you.' />
            </div>
            <div className='mx-2 sm:mx-8 md:mx-16 lg:mx-24 justify-center'>
                <Accordion title='Is my car safe at the garage?' answer='Yes. All garages part of our network are fully insured, and all our mechanics are more than qualified to work on your car.' />
            </div>
            <div className='mx-2 sm:mx-8 md:mx-16 lg:mx-24 justify-center'>
                <Accordion title='When will I get my car ?' answer='CarHub provides a next day delivery for all regular service bookings. If any additional work is required, then you’ll be given an EDD.

The free pickup and delivery will be done at your desired timeslots, which means you can get your vehicle back before midnight on the following day. Our designated drivers operate 24 hours a day, so your car can be collected and delivered at any time.' />
            </div>
        </div>
    )
}

export default FAQ;