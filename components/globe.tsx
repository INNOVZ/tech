"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const dots = [
  { city: "Milan", top: "30%", left: "35%", size: 12, delay: 0 },
  { city: "Riyadh", top: "45%", left: "60%", size: 14, delay: 1 },
  { city: "Dubai", top: "52%", left: "70%", size: 18, delay: 2 },
  { city: "Kerala", top: "65%", left: "80%", size: 14, delay: 1.5 },
];

export function Globe({ className }: { className?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-full flex items-center justify-center ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Glow */}
      <motion.div 
        className="absolute inset-10 rounded-full bg-orchid/15 blur-[60px]"
        animate={{ scale: hovered ? 1.2 : 1, opacity: hovered ? 0.3 : 0.15 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: hovered ? 10 : 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[0%] rounded-full border border-orchid/20 border-dashed"
      />

      {/* Middle Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: hovered ? 8 : 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[18%] rounded-full border border-orchid/30"
      />
      
      {/* Inner Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: hovered ? 5 : 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[35%] rounded-full border-2 border-orchid/20 border-dotted"
      />
      
      {/* Core */}
      <motion.div 
        className="absolute inset-[50%] rounded-full bg-gradient-to-tr from-orchid to-midnight shadow-[0_0_50px_rgba(111,62,220,0.6)]"
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Floating Location Dots */}
      {dots.map((dot, i) => (
        <motion.div
          key={dot.city}
          className="absolute group z-10"
          style={{ top: dot.top, left: dot.left }}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="relative flex items-center justify-center rounded-full bg-white shadow-xl cursor-crosshair transition-transform duration-300 group-hover:scale-150"
            style={{ width: dot.size, height: dot.size }}
          >
            <div className="absolute inset-0 rounded-full bg-orchid animate-ping opacity-60" style={{ animationDuration: '2s' }} />
            <div className="w-1/2 h-1/2 rounded-full bg-orchid" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute top-[120%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none">
            <div className="bg-midnight/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-2xl whitespace-nowrap">
              {dot.city}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
