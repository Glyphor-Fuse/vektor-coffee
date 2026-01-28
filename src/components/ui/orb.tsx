import React from 'react';
import { motion } from 'framer-motion';

export const Orb: React.FC<{ color?: string; size?: string; className?: string }> = ({ 
  color = "hsl(var(--accent))", 
  size = "200px",
  className = ""
}) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute rounded-full blur-[80px] pointer-events-none ${className}`}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
      }}
    />
  );
};