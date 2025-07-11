import React, { useState } from 'react'
import BikeModels from '../../components/EVbikes/BikeModels';
import { bikeModels, getFeaturedBikes, getAvailableBikes } from '../../data/bikeModels';
import EvNavbar from '../../components/navbar/evNav';

const EvbikePage = () => {
 
  const getFilteredBikes = () => {
    switch (filterType) {
      case 'featured':
        return getFeaturedBikes();
      case 'available':
        return getAvailableBikes();
      case 'all':
      default:
        return bikes;
    }
  };
  const [bikes] = useState(bikeModels);
  const [filterType, setFilterType] = useState('all');

  return (
    <div className='min-h-screen'>
      <EvNavbar/>

        <div className="text-center bg-gray-200 pb-12 pt-32 sm:pt-36">
          <div className="inline-block p-2 bg-green-200 rounded-full mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-800 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-900 to-emerald-900 bg-clip-text text-transparent mb-4">
            Our EV Bike Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-semibold">
            Experience the future of mobility with our premium electric bikes designed for performance, style, and sustainability.
          </p>
        </div>

        {/* Filter Section */}
        <div className="pt-4 pb-4 bg-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 rounded-lg transition-colors ${filterType === 'all'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                All Models ({bikes.length})
              </button>
              <button
                onClick={() => setFilterType('featured')}
                className={`px-4 py-2 rounded-lg transition-colors ${filterType === 'featured'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                Featured ({getFeaturedBikes().length})
              </button>
              <button
                onClick={() => setFilterType('available')}
                className={`px-4 py-2 rounded-lg transition-colors ${filterType === 'available'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                Available ({getAvailableBikes().length})
              </button>
            </div>
          </div>
        </div>
        
      <BikeModels bikes={getFilteredBikes()} />
    </div>
  )
}

export default EvbikePage;