"use client";

import { useEffect, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import styles from './StickyButton.module.css';

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

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`${styles.stickyButton} ${isVisible ? styles.visible : ''}`}>
      <a
        href="https://calendly.com/opsalphava/discovery-call"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        aria-label="Book Discovery Call"
      >
        <FaPhoneAlt className={styles.icon} />
        <span className="sr-only">Book Discovery Call</span>
      </a>
    </div>
  );
}
