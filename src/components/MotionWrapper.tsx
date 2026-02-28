"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  type?: "fadeInUp" | "stagger" | "scale";
}

export default function MotionWrapper({ children, delay = 0, className, type = "fadeInUp" }: Props) {
  if (type === "stagger") {
    return (
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        variants={{
          initial: {},
          whileInView: { transition: { staggerChildren: 0.15 } }
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const variants = {
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6, delay }
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.5, delay }
    }
  };

  return (
    <motion.div
      {...variants[type as keyof typeof variants]}
      className={className}
    >
      {children}
    </motion.div>
  );
}