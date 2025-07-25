"use client";
import { useEffect, useRef, useState } from "react";

export default function StickyDiscoveryCallButton() {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      // If button is above the viewport top, make sticky
      setIsSticky(rect.top < 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      ref={btnRef}
      href="#contact"
      className={`discovery-btn${isSticky ? " sticky" : ""}`}
    >
      Book a Discovery Call
    </a>
  );
}
