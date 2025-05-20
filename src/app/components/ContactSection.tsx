import { Phone, Mail, Github, Instagram } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-black py-32">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Sección del título y nombre */}
          <div className="flex flex-col justify-start items-center lg:items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center lg:text-left">Contáctame</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left mb-16">Jeronimo Unigarro</h3>
          </div>

          {/* Sección de formas de contacto */}
          <div className="flex flex-col justify-center items-center lg:items-start space-y-6">
            <div className="flex items-start">
              <div className="bg-secondary rounded-full p-3 mr-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground text-white">Puedes contactarme por medio de mi teléfono</p>
                <p className="font-medium text-white">+57 3163643958</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary rounded-full p-3 mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground text-white">Puedes contactarme por medio de mi correo</p>
                <p className="font-medium text-white">jeronimo.unigarro@campusucc.edu.co </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary rounded-full p-3 mr-4">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground text-white">Puedo contactarme por GitHub</p>
                <a 
                  href="https://github.com/JeronimoUnigarro"
                  target="_blank"
                  className="font-medium hover:text-primary transition-colors text-white"
                >
                github.com/JeronimoUnigarro
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
                  href="https://www.instagram.com/jeronimounigarro/"
                  target="_blank"
                  className="font-medium hover:text-primary transition-colors text-white"
                >
                  @jeronimounigarro
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
