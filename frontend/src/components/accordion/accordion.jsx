import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

const Accordion = ({ title, answer }) => {
    const [accordionOpen, setaccordianOpen] = useState(false);
    return (
        <div className="questions py-2">
            <button
                onClick={() => setaccordianOpen(!accordionOpen)}
                className='flex justify-between w-full rounded-xl text-white bg-green-500 p-2 sm:p-3 pl-3 pr-3 sm:pl-4 sm:pr-4 text-base sm:text-xl'>
                <span className="text-left">{title}</span>
                {accordionOpen ? <ClearIcon className="flex-shrink-0 ml-2" /> : <AddIcon className="flex-shrink-0 ml-2" />}
            </button>
            <div className={`answer grid overflow-hidden transition-all bg-white rounded-xl p-1 text-base sm:text-lg pl-3 pr-3 sm:pl-4 sm:pr-4 duration-300 ease-in-out text-slate-600 
                    ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className='overflow-hidden'>{answer}</div>
            </div>
        </div>
    )
}

export default Accordion;