import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenServicesDropdown, setIsOpenServicesDropdown] = useState(false);
  const [isOpenBrandsDropdown, setIsOpenBrandsDropdown] = useState(false);
  const navRef = useRef(null);
  const servicesdropdownRef = useRef(null);
  const brandsdropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "services") {
      setIsOpenServicesDropdown(!isOpenServicesDropdown);
      setIsOpenBrandsDropdown(false);
    } else if (dropdown === "brands") {
      setIsOpenBrandsDropdown(!isOpenBrandsDropdown);
      setIsOpenServicesDropdown(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
     
      if (window.innerWidth >= 768) {
        if (
          servicesdropdownRef.current && 
          !servicesdropdownRef.current.contains(event.target) &&
          brandsdropdownRef.current && 
          !brandsdropdownRef.current.contains(event.target)
        ) {
          setIsOpenServicesDropdown(false);
          setIsOpenBrandsDropdown(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = (sectionId) => {
    document.getElementById('work-flow-id').scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const closeMenuOnClickIfMobile = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="p-4 border-b-2 border-green-900 w-full fixed top-0 left-0 bg-white z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-black text-3xl font-bold">
          <img className="w-42 h-12" src="/assets/carhub_logo-removebg-preview.png" alt="CarHub Logo" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none md:hidden "
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop & Mobile Menu */}
        <div
          ref={navRef}
          className={`md:flex md:items-center md:w-auto md:relative md:bg-transparent
                     ${isOpen ? "block" : "hidden"} 
                     fixed left-0 right-0 top-[72px] bg-white z-40 
                     md:top-auto md:relative md:z-auto`}
        >
          <div className="flex flex-col md:flex-row p-4 md:p-0 max-h-[80vh] overflow-y-auto md:overflow-visible">
            <a
              href="/"
              className="block py-2 px-2 text-base text-black hover:text-white hover:bg-green-700 hover:rounded-lg md:mx-1"
              onClick={closeMenuOnClickIfMobile}
            >
              Home
            </a>
            
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
              className="block py-2 px-2 text-base text-black hover:text-white hover:bg-green-700 hover:rounded-lg md:mx-1"
            >
              Working
            </a>
            
            {/* Services Dropdown */}
            <div className="relative w-full md:w-auto" ref={servicesdropdownRef}>
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center justify-between w-full py-2 px-2 text-base text-black hover:text-white hover:bg-green-700 hover:rounded-lg md:mx-1"
              >
                <span>Services</span>
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isOpenServicesDropdown && (
                <div
                  className={`bg-white shadow-lg rounded-lg
                    md:absolute md:top-full md:left-0 md:w-56 
                    w-full mt-1 z-50`}
                >
                  <div className="py-1">
                    <a
                      href="/carhub/services"
                      className="block border-b px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      Car Service
                    </a>
                    <a
                      href="/carhub/roadside-services"
                      className="block border-b px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      RoadSide Assistance
                    </a>
                    <a
                      href="/under-progress"
                      className="block border-b px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      Car Evaluation
                    </a>
                    <a
                      href="/under-progress"
                      className="block border-b px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      Mobile Service
                    </a>
                    <a
                      href="/under-progress"
                      className="block border-b px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      Service Contract
                    </a>
                    <a
                      href="/under-progress"
                      className="block px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      Car Detailing
                    </a>
                    <a
                      href="/under-progress"
                      className="block px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      Courtesy Car
                    </a>
                    
                  </div>
                </div>
              )}
            </div>

            {/* Brands Dropdown */}
            <div className="relative w-full md:w-auto" ref={brandsdropdownRef}>
              <button
                onClick={() => toggleDropdown("brands")}
                className="flex items-center justify-between w-full py-2 px-2 text-base text-black hover:text-white hover:bg-green-700 hover:rounded-lg md:mx-1"
              >
                <span>Brands</span>
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {isOpenBrandsDropdown && (
                <div
                  className={`bg-white shadow-lg rounded-lg
                    md:absolute md:top-full md:left-0 md:w-56 
                    w-full mt-1 z-50`}
                >
                  <div className="py-1">
                    <a
                      href="/brands/1"
                      className="block border-b px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      Audi
                    </a>
                    <a
                      href="/brands/2"
                      className="block border-b px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      BMW
                    </a>
                    <a
                      href="/brands/3"
                      className="block border-b px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      Mercedes
                    </a>
                    <a
                      href="/brands/4"
                      className="block border-b px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      Ford
                    </a>
                    <a
                      href="/brands/5"
                      className="block border-b px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      Hyundai
                    </a>
                    <a
                      href="/brands/6"
                      className="block border-b px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      Honda
                    </a>
                    <a
                      href="/brands/6"
                      className="block border-b px-4 py-2 text-base text-black hover:bg-gray-300 hover:text-green-900"
                      onClick={closeMenuOnClickIfMobile}
                    >
                      Other
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/contact"
              className="block py-2 px-2 text-base text-black hover:text-white hover:bg-green-700 hover:rounded-lg md:mx-1"
              onClick={closeMenuOnClickIfMobile}
            >
              Contact
            </a>
            
            <Link 
              to={'/carhub/login'}
              onClick={closeMenuOnClickIfMobile}
              className="flex items-center py-2 px-2 text-base text-black hover:text-white hover:bg-green-700 hover:rounded-lg md:mx-1"
            >
              <svg className="w-5 h-5 mr-1 text-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;