"use client"

import { Phone, Mail, Github, Instagram } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-black py-24">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-16">
          
          {/* Sección del título y nombre */}
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contáctame</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left mb-16">Jeronimo Unigarro</h3>
          </div>

          {/* Sección de formas de contacto */}
          <div className="flex flex-col justify-center items-start space-y-6">
            <div className="flex items-start">
              <div className="bg-secondary rounded-full p-3 mr-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground text-white">Puedes contactarme por medio de mi teléfono</p>
                <p className="font-medium text-white">+57 3012345678</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary rounded-full p-3 mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground text-white">Puedes contactarme por medio de mi correo</p>
                <p className="font-medium text-white">jeronimo.unigarro@ejemplo.edu.co</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary rounded-full p-3 mr-4">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground text-white">Puedo contactarme por GitHub</p>
                <a 
                  href="https://github.com/jeronimouni" 
                  target="_blank"
                  className="font-medium hover:text-primary transition-colors text-white"
                >
                  github.com/jeronimouni
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary rounded-full p-3 mr-4">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground text-white">Puedes encontrarme en Instagram como</p>
                <a 
                  href="https://instagram.com/jeronimouni" 
                  target="_blank"
                  className="font-medium hover:text-primary transition-colors text-white"
                >
                  @jeronimouni
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
