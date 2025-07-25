"use client";

import { useEffect, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

export default function StickyDiscoveryCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <a
        href="https://calendly.com/opsalphava/discovery-call"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#2E5AAC] text-white shadow-lg hover:bg-[#1C2331] transition-colors duration-200 group"
        aria-label="Book Discovery Call"
      >
        <FaPhoneAlt className="w-5 h-5 md:w-6 md:h-6" />
        <span className="sr-only">Book Discovery Call</span>
      </a>
    </div>
  );
}
