"use client"
import { useEffect, useState } from 'react'
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-[-2]" style={{ backgroundColor: 'var(--color-background)' }}>
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, transparent 0%, var(--color-background) 50%)'
          }}
        ></div>
      </div>
      
      
      <div className="w-full flex flex-col md:flex-row">
        
        <div className="w-full md:w-1/2 h-[30vh] md:h-screen">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/icons/codigo.jpg')",
              borderRight: '1px solid var(--color-border)'
            }}
          ></div>
        </div>
        
        
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start px-6 md:px-10 py-8 md:py-0">
          <motion.div 
            className="w-full text-center md:text-left pt-0 pb-8 md:pb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight"
              style={{ color: 'var(--color-text-light)' }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div>Soy</div>
              <div className="md:pl-8 lg:pl-16 xl:pl-24"><span style={{ color: 'var(--color-text-light)' }}>Jeronimo</span></div>
              <div><span style={{ color: 'var(--color-text-light)' }}>Unigarro</span></div>
            </motion.h1>
            
            <motion.div 
              className="mt-3 md:mt-4 flex items-center justify-center md:justify-start"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="relative h-6 md:h-8 overflow-hidden">
                <div className="flex flex-col">
                  {words.map((word, index) => (
                    <motion.span
                      key={index}
                      className={`text-base md:text-xl font-medium absolute transition-all duration-500 ease-in-out ${
                        index === activeWordIndex 
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-8 opacity-0'
                      }`}
                      style={{
                        top: 0,
                        color: 'var(--color-primary)',
                        transition: 'transform 0.5s ease, opacity 0.5s ease'
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </div>
              <span 
                className="animated-cursor ml-1" 
                style={{ backgroundColor: 'var(--color-primary)' }}
              ></span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}