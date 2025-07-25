"use client";
import { useEffect, useRef, useState } from "react";
import styles from './StickyButton.module.css';

export default function StickyDiscoveryCallButton() {
  const [isSticky, setIsSticky] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 0);
      }
    };

    // Initial check in case page loads with scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.ctaWrapper} ref={wrapperRef}>
      <button 
        className={`${styles.ctaButton} ${isSticky ? styles.sticky : ''}`}
        onClick={() => window.open('https://calendly.com/opsalpha/discovery-call', '_blank')}
      >
        Book Discovery Call
      </button>
    </div>
  );
}
