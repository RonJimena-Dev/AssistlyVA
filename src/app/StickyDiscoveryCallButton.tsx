"use client";
import { useEffect, useRef, useState } from "react";

export default function StickyDiscoveryCallButton() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!btnRef.current || !wrapperRef.current) return;
      const stickyOffset = wrapperRef.current.getBoundingClientRect().top + window.scrollY;
      if (window.scrollY > stickyOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="cta-wrapper" ref={wrapperRef}>
      <button
        id="stickyBtn"
        ref={btnRef}
        className={`cta-btn${isSticky ? " sticky" : ""}`}
      >
        Book a Discovery Call
      </button>
    </div>
  );
}

