import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ParentNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handlePartnership=()=>{
    navigate('/evdealership');
  }

  const navItems = [
    { name: 'Home', targetId: 'home' },
    { name:'Become a Partner', targetId:'partnership', onClick: handlePartnership},
    { name: 'About Us', targetId: 'aboutwsmobility' },
    { name: 'Contact Us', targetId: 'contactSection' },
  ];
  
  const handleClick = (e, targetId) => {
  e.preventDefault();
  if (targetId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const section = document.getElementById(targetId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};
  
  return (
    <div className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between h-20">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img style={{width:120, height:120}} src='assets/parentCompanyLogo1.png' alt='ws-mob-logo'/>
            </a>
          </div>
          
          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleClick(e, item.targetId);
                  if(item.onClick) item.onClick();
                }}
                className="px-3 py-2 text-gray-700 hover:text-green-700 cursor-pointer rounded-md text-lg font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentNav;