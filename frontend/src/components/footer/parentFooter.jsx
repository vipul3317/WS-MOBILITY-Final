import React from "react";
import {Car,Bike,Phone,Mail,MapPin,Clock,ChevronRight,Facebook,Instagram,Twitter,Linkedin,Zap,Settings} from 'lucide-react';

const ParentFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-green-50 to-green-100 border-t-4 border-green-600">
      
      <div className="max-w-7xl  mx-auto pt-16 pb-8 px-2 sm:px-2 lg:px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="assets/parentCompanyLogo.jpg" 
                alt="WS Mobility Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-600 mt-4 text-base">
              A visionary startup revolutionizing the automobile industry in Bihar with comprehensive mobility solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <Facebook size={18} className="text-green-700" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <Instagram size={18} className="text-green-700" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <Twitter size={18} className="text-green-700" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <Linkedin size={18} className="text-green-700" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Services</h3>
            <div className="w-28 h-1 bg-green-500 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <a href="/carhub" className="flex items-center text-gray-600 hover:text-green-700 transition-colors duration-300">
                  <ChevronRight size={16} className="mr-2 text-green-600" />
                  <span className="flex items-center font-semibold">
                    <Car size={16} className="mr-2" /> Car Hub Services
                  </span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" className="flex items-center text-gray-600 hover:text-green-700 transition-colors duration-300">
                  <ChevronRight size={16} className="mr-2 text-green-600" />
                  <span className="flex items-center font-semibold">
                    <Bike size={16} className="mr-2" /> Bikemen Services
                  </span>
                </a>
              </li>
              <li>
                <a href="/coming-soon" className="flex items-center text-gray-600 hover:text-green-700 transition-colors duration-300">
                  <ChevronRight size={16} className="mr-2 text-green-600" />
                  <span className="flex items-center font-semibold">
                    <Zap size={16} className="mr-2" /> Mantra E-Bikes
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-600 hover:text-green-700 transition-colors duration-300">
                  <ChevronRight size={16} className="mr-2 text-green-600" />
                  <span className="flex items-center font-semibold">
                    <Settings size={16} className="mr-2" /> Maintenance Packages
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <div className="w-24 h-1 bg-green-500 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <a href="/#aboutwsmobility" className="flex items-center text-gray-600 hover:text-green-700 transition-colors duration-300">
                  <ChevronRight size={16} className="mr-2 text-green-600" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-600 hover:text-green-700 transition-colors duration-300">
                  <ChevronRight size={16} className="mr-2 text-green-600" />
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-600 hover:text-green-700 transition-colors duration-300">
                  <ChevronRight size={16} className="mr-2 text-green-600" />
                  Blog & News
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-600 hover:text-green-700 transition-colors duration-300">
                  <ChevronRight size={16} className="mr-2 text-green-600" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-600 hover:text-green-700 transition-colors duration-300">
                  <ChevronRight size={16} className="mr-2 text-green-600" />
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/#contactSection" className="flex items-center text-gray-600 hover:text-green-700 transition-colors duration-300">
                  <ChevronRight size={16} className="mr-2 text-green-600" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Info</h3>
            <div className="w-24 h-1 bg-green-500 mb-6"></div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                  <MapPin size={18} className="text-green-600" />
                </div>
                <p className="text-gray-600">
                  Near PNB bank, Kanti Factory Rd,<br /> 
                  Kankarbagh, Patna, BIHAR-800026
                </p>
              </li>
              <li className="flex items-center">
                <div className="mr-4 bg-green-100 p-2 rounded-full">
                  <Phone size={18} className="text-green-600" />
                </div>
                <p className="text-gray-600">7256095121</p>
              </li>
              <li className="flex items-center">
                <div className="mr-4 bg-green-100 p-2 rounded-full">
                  <Mail size={18} className="text-green-600" />
                </div>
                <p className="text-gray-600">contact@wsmobility.in</p>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                  <Clock size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-gray-600">Sat-Thu: 8AM-6PM</p>
                  <p className="text-gray-600">Fri: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-green-400">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-600">Stay updated with our latest news and offers</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-300"
                />
                <button className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition duration-300 mt-2 sm:mt-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center text-white">
              © {currentYear} WS Mobility Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ParentFooter;