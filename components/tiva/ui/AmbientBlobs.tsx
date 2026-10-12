"use client";

import { motion } from "framer-motion";

interface AmbientBlobsProps {
  variant?: "dark" | "light";
}

export default function AmbientBlobs({ variant = "dark" }: AmbientBlobsProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 50, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full blur-[120px] ${
          variant === "dark" 
            ? "bg-[#168BFF]/20" 
            : "bg-[#168BFF]/10"
        }`}
      />
      
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full blur-[140px] ${
          variant === "dark" 
            ? "bg-[#7C3AED]/15" 
            : "bg-[#7C3AED]/10"
        }`}
      />
      
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full blur-[100px] ${
          variant === "dark" 
            ? "bg-[#06B6D4]/10" 
            : "bg-[#06B6D4]/5"
        }`}
      />
    </div>
  );
}