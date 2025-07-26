"use client";
import { motion, Variants } from 'framer-motion';
import React from 'react';

// Fade/slide-in with optional stagger for luxury entrance animations
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

export const FramerMotionWrapper = ({
  children,
  index = 0,
  className = '',
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUpVariants}
  >
    {children}
  </motion.div>
);
