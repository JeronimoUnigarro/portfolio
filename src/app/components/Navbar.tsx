'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Acerca de mí', path: '/#about' },
  { name: 'Proyectos', path: '/#projects' },
  { name: 'Testimonios', path: '/#testimonials' },
  { name: 'Certificaciones', path: '/#certifications' },
  { name: 'Contáctame', path: '/#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('/')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScrollForActiveSection = () => {
      if (typeof window === 'undefined') return

      const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[]
      let current = ''

      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = `/#${section.id}`
          break
        }
      }

      setActiveSection(current || '/')
    }

    window.addEventListener('scroll', handleScrollForActiveSection)
    return () => window.removeEventListener('scroll', handleScrollForActiveSection)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-md' : 'bg-black'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-4 md:px-8">
        <Link href="/" className="text-white font-bold text-lg">JU</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              href={link.path} 
              key={link.path}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.path
                  ? 'text-white border-b-2 border-white pb-1'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto py-4 flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <Link 
                href={link.path} 
                key={link.path}
                className={`text-base font-medium ${
                  activeSection === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
