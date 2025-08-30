// import React from "react";
// import {Car,Bike,Phone,Mail,MapPin,Clock,ChevronRight,Facebook,Instagram,Twitter,Linkedin,Zap,Settings} from 'lucide-react';

// const ParentFooter = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 border-t-4 border-green-600">

//       <div className="max-w-7xl  mx-auto pt-12 pb-8 px-2 sm:px-2 lg:px-2">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

//           <div className="space-y-4">
//             <div className="flex ">
//               <img
//                 src="assets/wsLogo.png"
//                 alt="WS Mobility Logo"
//                 className="h-24 w-24 object-contain bg-gray-1200"
//               />
//             </div>
//             <p className="text-gray-300 mt-4 text-base">
//               A visionary startup revolutionizing the automobile industry in Bihar with comprehensive mobility solutions.
//             </p>
//             <div className="flex space-x-4 mt-6">
//               <a href="https://www.facebook.com/profile.php?id=61574614275395" className="bg-gray-800 p-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-300">
//                 <Facebook size={28} className="text-green-400" />
//               </a>
//               <a href="https://www.instagram.com/wsmobility?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bg-gray-800 p-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-300">
//                 <Instagram size={28} className="text-green-400" />
//               </a>

//               <a href="https://www.linkedin.com/company/wsmobility/" className="bg-gray-800 p-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-300">
//                 <Linkedin size={28} className="text-green-400" />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
//             <div className="w-28 h-1 bg-green-500 mb-6"></div>
//             <ul className="space-y-3">
//               <li>
//                 <a href="/carhub" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300">
//                   <ChevronRight size={16} className="mr-2 text-green-500" />
//                   <span className="flex items-center font-semibold">
//                     <Car size={16} className="mr-2" /> WS Services
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="/coming-soon" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300">
//                   <ChevronRight size={16} className="mr-2 text-green-500" />
//                   <span className="flex items-center font-semibold">
//                     <Bike size={16} className="mr-2" /> Bikemen Services
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="https://www.nkebikes.com/" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300">
//                   <ChevronRight size={16} className="mr-2 text-green-500" />
//                   <span className="flex items-center font-semibold">
//                     <Zap size={16} className="mr-2" /> NK E-Bikes
//                   </span>
//                 </a>
//               </li>
//                <li>
//                 <a href="https://rapmotors.in/downloads.php" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300">
//                   <ChevronRight size={16} className="mr-2 text-green-500" />
//                   <span className="flex items-center font-semibold">
//                     <Zap size={16} className="mr-2" /> RAP ECO Motors
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300">
//                   <ChevronRight size={16} className="mr-2 text-green-500" />
//                   <span className="flex items-center font-semibold">
//                     <Settings size={16} className="mr-2" /> Maintenance Packages
//                   </span>
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//             <div className="w-24 h-1 bg-green-500 mb-6"></div>
//             <ul className="space-y-3">
//               <li>
//                 <a href="/#aboutwsmobility" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300">
//                   <ChevronRight size={16} className="mr-2 text-green-500" />
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300">
//                   <ChevronRight size={16} className="mr-2 text-green-500" />
//                   Our Team
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300">
//                   <ChevronRight size={16} className="mr-2 text-green-500" />
//                   Blog & News
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300">
//                   <ChevronRight size={16} className="mr-2 text-green-500" />
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300">
//                   <ChevronRight size={16} className="mr-2 text-green-500" />
//                   Terms & Conditions
//                 </a>
//               </li>
//               <li>
//                 <a href="/#contactSection" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300">
//                   <ChevronRight size={16} className="mr-2 text-green-500" />
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
//             <div className="w-24 h-1 bg-green-500 mb-6"></div>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <div className="mr-4 mt-1 bg-gray-800 p-2 rounded-full">
//                   <MapPin size={18} className="text-green-400" />
//                 </div>
//                 <p className="text-gray-300">
//                   202 Mitu Palace, Near PNB bank, Kanti Factory Rd, Chitragupta Nagar,
//                   Kankarbagh, Patna, Bihar-800026
//                 </p>
//               </li>
//               <li className="flex items-center">
//                 <div className="mr-4 bg-gray-800 p-2 rounded-full">
//                   <Phone size={18} className="text-green-400" />
//                 </div>
//                 <p className="text-gray-300">9117031733</p>
//               </li>
//               <li className="flex items-center">
//                 <div className="mr-4 bg-gray-800 p-2 rounded-full">
//                   <Mail size={18} className="text-green-400" />
//                 </div>
//                 <p className="text-gray-300">info@wsmobility.in</p>
//               </li>
//               <li className="flex items-start">
//                 <div className="mr-4 mt-1 bg-gray-800 p-2 rounded-full">
//                   <Clock size={18} className="text-green-400" />
//                 </div>
//                 <div>
//                   <p className="text-gray-300 pt-2">Sat-Thu: 8AM-6PM</p>

//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 pt-8 border-t border-gray-700">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="w-full md:w-1/2 mb-6 md:mb-0">
//               <h4 className="text-lg font-semibold text-white mb-2">Subscribe to Our Newsletter</h4>
//               <p className="text-gray-300">Stay updated with our latest news and offers</p>
//             </div>
//             <div className="w-full md:w-1/2">
//               <div className="flex flex-col sm:flex-row">
//                 <input
//                   type="email"
//                   placeholder="Your email address"
//                   className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-600 bg-gray-800 text-white placeholder-gray-400"
//                 />
//                 <button className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition duration-300 mt-2 sm:mt-0">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-800 py-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center text-gray-300">
//               © {currentYear} WS Mobility Pvt. Ltd. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default ParentFooter;

import React from "react";
import {
  Car,
  Bike,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Zap,
  Settings,
} from "lucide-react";

const ParentFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t-4 border-green-600">
      <div className="max-w-7xl mx-auto pt-12 pb-8 px-2 sm:px-2 lg:px-2">
        {/* Grid layout updated to 5 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Logo + Social */}
          <div className="space-y-4 ml-4">
            <div className="flex">
              <img
                src="assets/wsLogo.png"
                alt="WS Mobility Logo"
                className="h-24 w-24 object-contain bg-gray-1200"
              />
            </div>
            <p className="text-gray-300 mt-4 text-base">
              A visionary startup revolutionizing the automobile industry in
              Bihar with comprehensive mobility solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61574614275395"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
              >
                <Facebook size={28} className="text-green-400" />
              </a>
              <a
                href="https://www.instagram.com/wsmobility"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
              >
                <Instagram size={28} className="text-green-400" />
              </a>
              <a
                href="https://www.linkedin.com/company/wsmobility/"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
              >
                <Linkedin size={28} className="text-green-400" />
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <div className="w-28 h-1 bg-green-500 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <a
                  href="/carhub"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  <span className="flex items-center font-semibold">
                    <Car size={16} className="mr-2" /> WS Services
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/coming-soon"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  <span className="flex items-center font-semibold">
                    <Bike size={16} className="mr-2" /> Bikemen Services
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.nkebikes.com/"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  <span className="flex items-center font-semibold">
                    <Zap size={16} className="mr-2" /> NK E-Bikes
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://rapmotors.in/downloads.php"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  <span className="flex items-center font-semibold">
                    <Zap size={16} className="mr-2" /> RAP ECO Motors
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  <span className="flex items-center font-semibold">
                    <Settings size={16} className="mr-2" /> Maintenance Packages
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="w-24 h-1 bg-green-500 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#aboutwsmobility"
                  className="flex items-center text-gray-300 hover:text-green-400"
                >
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-green-400"
                >
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-green-400"
                >
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  Blog & News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-green-400"
                >
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-green-400"
                >
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/#contactSection"
                  className="flex items-center text-gray-300 hover:text-green-400"
                >
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* ✅ Column 4: Our Partners */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Partners
            </h3>
            <div className="w-28 h-1 bg-green-500 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.nkebikes.com/"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  NK E-BIKES
                </a>
              </li>
              <li>
                <a
                  href="https://rapmotors.in/downloads.php"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  RAP ECO MOTORS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <div className="w-24 h-1 bg-green-500 mb-6"></div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-gray-800 p-2 rounded-full">
                  <MapPin size={18} className="text-green-400" />
                </div>
                <p className="text-gray-300">
                  202 Mitu Palace, Near PNB bank, Kanti Factory Rd, Chitragupta
                  Nagar, Kankarbagh, Patna, Bihar-800026
                </p>
              </li>
              <li className="flex items-center">
                <div className="mr-4 bg-gray-800 p-2 rounded-full">
                  <Phone size={18} className="text-green-400" />
                </div>
                <p className="text-gray-300">9117031733</p>
              </li>
              <li className="flex items-center">
                <div className="mr-4 bg-gray-800 p-2 rounded-full">
                  <Mail size={18} className="text-green-400" />
                </div>
                <p className="text-gray-300">info@wsmobility.in</p>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-gray-800 p-2 rounded-full">
                  <Clock size={18} className="text-green-400" />
                </div>
                <div>
                  <p className="text-gray-300 pt-2">Sat-Thu: 8AM-6PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-gray-300">
                Stay updated with our latest news and offers
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-l-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition duration-300 mt-2 sm:mt-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center text-gray-300">
            © {currentYear} WS Mobility Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ParentFooter;
