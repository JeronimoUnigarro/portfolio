"use client"

import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { motion } from "framer-motion"

export default function HeroSection() {
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const words = ['desarrollador', 'estudiante', 'innovador', 'solucionador']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black z-[-1]">
        {/* Optional: add a subtle gradient or texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      </div>
      
      <motion.div 
        className="max-w-4xl text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-white leading-tight"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Soy <br />
          <span className="text-white">Jeronimo</span> <br />
          <span className="text-white">Unigarro</span>
        </motion.h1>
        
        <motion.div 
          className="mt-6 flex justify-end items-center"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="relative h-8 overflow-hidden">
            <div className="flex flex-col">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className={`text-xl text-primary font-medium absolute transition-all duration-500 ease-in-out ${
                    index === activeWordIndex 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ 
                    top: 0,
                    transition: 'transform 0.5s ease, opacity 0.5s ease' 
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
          <span className="animated-cursor ml-1"></span>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ 
          delay: 1, 
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        
      </motion.div>
    </section>
  )
}
