import React, { useState } from 'react'
import BikeModels from '../../components/EVbikes/BikeModels';
import { Menu, X } from 'lucide-react';
import { bikeModels, getFeaturedBikes, getAvailableBikes } from '../../data/bikeModels';

const EvbikePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
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

  const navItems = [
    { name: 'Models', targetId: 'models' },
    { name: 'Why Partner', targetId: 'why-partner' },
    { name: 'Success Stories', targetId: 'success-stories' },
    { name: 'Apply Now', targetId: 'apply-now' },
  ];

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = 'Brochure Draft 1.pdf';
    link.download = 'brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='min-h-screen'>
      <nav className="bg-white/95 backdrop-blur-sm shadow-md w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="assets/parentCompanyLogo1.png"
                alt="ws-mob-logo"
                style={{ width: 120, height: 110 }}
              />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.targetId}`}
                  onClick={(e) => handleClick(e, item.targetId)}
                  className="text-gray-700 hover:text-green-600 text-lg font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
                onClick={downloadBrochure}
              >
                Download Brochure
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg rounded-b-lg">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.targetId}`}
                  onClick={(e) => {
                    handleClick(e, item.targetId);
                    setIsMenuOpen(false); // Close mobile menu after clicking
                  }}
                  className="block text-gray-700 hover:text-green-600 text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
              <button
                className="w-full mt-2 px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
                onClick={downloadBrochure}
              >
                Download Brochure
              </button>
              <button className="w-full mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

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

        {/* Optional: Filter Section */}
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

      {/* Pass filtered bikes to BikeModels component */}
      <BikeModels bikes={getFilteredBikes()} />
    </div>
  )
}

export default EvbikePage;