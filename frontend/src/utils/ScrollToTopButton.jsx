import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!visible) return null;

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-10 right-6 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all"
            title="Back to Top"
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
};

export default ScrollToTopButton;
