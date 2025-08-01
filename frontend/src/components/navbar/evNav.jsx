import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router';

const EvNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const navigate = useNavigate();
    const location = useLocation();
    const handleScrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    const navItems = [
        { name: 'Home', targetId: 'home' },
        { name: 'Models', targetId: 'models' },
        { name: 'Why Partner', targetId: 'why-partner' },
        { name: 'Success Stories', targetId: 'success-stories' },
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
        if (targetId === 'home') {
            navigate('/');
            return;
        }
        if (location.pathname === '/ev-dealership-opportunity') {
            const section = document.getElementById(targetId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            navigate(`/ev-dealership-opportunity#${targetId}`);
        }
    };

    return (
        <nav className="bg-white/95 backdrop-blur-sm shadow-md w-full fixed top-0 left-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <NavLink to="/" className="flex items-center">
                        <img
                            src="assets/parentCompanyLogo1.png"
                            alt="ws-mob-logo"
                            style={{ width: 120, height: 110 }}
                        />
                    </NavLink>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                href={`#${item.targetId}`}
                                onClick={(e) => handleClick(e, item.targetId)}
                                className="text-gray-700 hover:text-green-600 text-lg font-medium transition-colors duration-300"
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
                            onClick={downloadBrochure}
                        >
                            Download Brochure
                        </button>
                        <button
                            onClick={handleScrollToBottom}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            <NavLink to='/evdealershipcontact' >
                                Contact Us
                            </NavLink>
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
                                    setIsMenuOpen(false);
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
                        <button className="w-full mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            onClick={handleScrollToBottom}>
                            Apply Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default EvNavbar;