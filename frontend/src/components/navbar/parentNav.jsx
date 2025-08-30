// import React, { useState, useEffect } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const ParentNav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [scrollWidth, setScrollWidth] = useState(0);
//   const navigate = useNavigate();

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const handlePartnership = () => navigate('/ev-dealership-opportunity');

//   const handleClick = (e, targetId) => {
//     e.preventDefault();
//     if (targetId === 'home') {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//       return;
//     }
//     const section = document.getElementById(targetId);
//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     }
//   };

//   const handlePartnerClick = (url) => {
//     window.open(url, '_blank');
//   };

//   const navItems = [
//     { name: 'Home', targetId: 'home' },
//     { name: 'Become a Partner', targetId: 'partnership', onClick: handlePartnership},
//     {
//       name: 'Our Partners',
//       hasDropdown: true,
//       partners: [
//         { name: 'NK E-BIKES', url: 'https://www.nkebikes.com/' },
//         { name: 'RAP ECO MOTORS', url: 'https://rapmotors.in/' }
//       ]
//     },
//     { name: 'About Us', targetId: 'aboutwsmobility' },
//     { name: 'Contact Us', targetId: 'contactSection' },
//   ];

//   // Scroll progress effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
//       const scrolled = (scrollTop / totalHeight) * 100;
//       setScrollWidth(scrolled);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Scroll Progress Bar */}
//       <div
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           height: '6px',
//           width: `${scrollWidth}%`,
//           backgroundColor: '#10b981', // Tailwind green-500
//           zIndex: 9999,
//           transition: 'width 0.25s ease-out'
//         }}
//       />

//       {/* Navigation Bar */}
//       <div className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
//           <div className="flex justify-between h-20">
//             <div className="flex items-center">
//               <a href="/" className="flex items-center">
//                 <img style={{ width: 120, height: 120 }} src='assets/parentCompanyLogo1.png' alt='ws-mob-logo' />
//               </a>
//             </div>

//             {/* Desktop nav */}
//             <div className="hidden md:flex items-center space-x-4">
//               {navItems.map((item) => (
//                 <div key={item.name} className="relative">
//                   {item.hasDropdown ? (
//                     <div className="relative">
//                       <button
//                         onClick={toggleDropdown}
//                         className="flex items-center px-1 py-2 text-gray-700 hover:text-green-700 cursor-pointer rounded-md text-lg font-medium transition-colors duration-300"
//                       >
//                         {item.name}
//                         <ChevronDown className="ml-1 font-semibold h-4 w-4" />
//                       </button>
//                       {dropdownOpen && (
//                         <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
//                           {item.partners.map(({ name, url }) => (
//                             <button
//                               key={name}
//                               onClick={() => handlePartnerClick(url)}
//                               className="block w-full font-semibold text-left px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-green-700 transition-colors duration-200"
//                             >
//                               {name}
//                             </button>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <a
//                       href={item.href}
//                       onClick={(e) => {
//                         handleClick(e, item.targetId);
//                         item.onClick?.();
//                       }}
//                       className="px-2 py-2 text-gray-700 hover:text-green-700 cursor-pointer rounded-md text-lg font-medium transition-colors duration-300"
//                     >
//                       {item.name}
//                     </a>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Mobile menu button */}
//             <div className="flex md:hidden items-center">
//               <button
//                 onClick={toggleMenu}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
//               {navItems.map(({ name, href, hasDropdown, partners, targetId, onClick }) => (
//                 <div key={name}>
//                   {hasDropdown ? (
//                     <>
//                       <button
//                         onClick={toggleDropdown}
//                         className="flex items-center w-full px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-lg font-medium"
//                       >
//                         {name}
//                         <ChevronDown className="ml-1 h-4 w-4" />
//                       </button>

//                       {dropdownOpen && (
//                         <div className="pl-4 space-y-1">
//                           {partners.map(({ name: pName, url }) => (
//                             <button
//                               key={pName}
//                               onClick={() => handlePartnerClick(url)}
//                               className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-gray-200 rounded-md text-base font-semibold"
//                             >
//                               {pName}
//                             </button>
//                           ))}
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <a
//                       href={href}
//                       onClick={(e) => {
//                         handleClick(e, targetId);
//                         onClick?.();
//                       }}
//                       className="block px-3 py-2 hover:cursor-pointer text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-lg font-medium"
//                     >
//                       {name}
//                     </a>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ParentNav;

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ParentNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handlePartnership = () => navigate("/ev-dealership-opportunity");

  const handleClick = (e, targetId) => {
    e.preventDefault();
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handlePartnerClick = (url) => {
    window.open(url, "_blank");
  };

  const downloadBrochure = () => {
    const brochureUrl = "/Brochure Draft 1.pdf"; // Replace with your actual file path
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "WS-Mobility-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: "Home", targetId: "home" },
    {
      name: "Become a Partner",
      targetId: "partnership",
      onClick: handlePartnership,
    },
    {
      name: "Our Partners",
      hasDropdown: true,
      partners: [
        { name: "NK E-BIKES", url: "https://www.nkebikes.com/" },
        { name: "RAP ECO MOTORS", url: "https://rapmotors.in/" },
      ],
    },
    { name: "About Us", targetId: "aboutwsmobility" },
    { name: "Contact Us", targetId: "contactSection" },
  ];

  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrolled = (scrollTop / totalHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "6px",
          width: `${scrollWidth}%`,
          backgroundColor: "#10b981",
          zIndex: 9999,
          transition: "width 0.25s ease-out",
        }}
      />

      {/* Navigation Bar */}
      <div className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img
                  style={{ width: 120, height: 120 }}
                  src="assets/parentCompanyLogo1.png"
                  alt="ws-mob-logo"
                />
              </a>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={toggleDropdown}
                        className="flex items-center px-1 py-2 text-gray-700 hover:text-green-700 cursor-pointer rounded-md text-lg font-medium transition-colors duration-300"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 font-semibold h-4 w-4" />
                      </button>
                      {dropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                          {item.partners.map(({ name, url }) => (
                            <button
                              key={name}
                              onClick={() => handlePartnerClick(url)}
                              className="block w-full font-semibold text-left px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-green-700 transition-colors duration-200"
                            >
                              {name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        handleClick(e, item.targetId);
                        item.onClick?.();
                      }}
                      className="px-2 py-2 text-gray-700 hover:text-green-700 cursor-pointer rounded-md text-lg font-medium transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              {/* Download Brochure Button */}
              <button
                className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
                onClick={downloadBrochure}
              >
                Download Brochure
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
              {navItems.map(
                ({ name, href, hasDropdown, partners, targetId, onClick }) => (
                  <div key={name}>
                    {hasDropdown ? (
                      <>
                        <button
                          onClick={toggleDropdown}
                          className="flex items-center w-full px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-lg font-medium"
                        >
                          {name}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>

                        {dropdownOpen && (
                          <div className="pl-4 space-y-1">
                            {partners.map(({ name: pName, url }) => (
                              <button
                                key={pName}
                                onClick={() => handlePartnerClick(url)}
                                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-gray-200 rounded-md text-base font-semibold"
                              >
                                {pName}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={href}
                        onClick={(e) => {
                          handleClick(e, targetId);
                          onClick?.();
                        }}
                        className="block px-3 py-2 hover:cursor-pointer text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-lg font-medium"
                      >
                        {name}
                      </a>
                    )}
                  </div>
                )
              )}

              {/* Download Brochure Button in Mobile Menu */}
              <button
                className="w-full mt-2 px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
                onClick={downloadBrochure}
              >
                Download Brochure
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ParentNav;
