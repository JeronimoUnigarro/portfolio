import Image from 'next/image'


export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="section-padding py-20" 
      style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text-light)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Acerca de mí</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <p className="text-lg mb-6">
                ¡Hola! Soy Jerónimo Unigarro, estudiante de Ingeniería de Software en Colombia. Me apasiona el desarrollo de soluciones tecnológicas que sean útiles y accesibles para las personas. Siempre estoy buscando aprender algo nuevo y mejorar mis habilidades técnicas y personales.
              </p>
              <p className="text-lg mb-6">
                Durante mi formación he adquirido habilidades blandas como el liderazgo, la comunicación asertiva, el trabajo en equipo y el pensamiento crítico, las cuales aplico en mis proyectos y trabajos colaborativos.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Formación Académica:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span style={{ color: 'var(--color-text-light)' }} className="mr-2">•</span>
                  <span>Universidad: Cooperativa de Colombia</span>
                </li>
                <li className="flex items-start">
                  <span style={{ color: 'var(--color-text-light)' }} className="mr-2">•</span>
                  <span>Carrera: Ingeniería de Software</span>
                </li>
                <li className="flex items-start">
                  <span style={{ color: 'var(--color-text-light)' }} className="mr-2">•</span>
                  <span>Semestre actual: 5º semestre</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Tecnologías que manejo:</h3>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: '/icons/react.svg', alt: 'React' },
                  { icon: '/icons/node.svg', alt: 'Node.js' },
                  { icon: '/icons/python.svg', alt: 'Python' },
                  { icon: '/icons/vite1.svg', alt: 'vite' },
                  { icon: '/icons/images.jpg', alt: 'Next.js' },
                ].map((tech, index) => (
                  <div key={index} className="relative w-12 h-12">
                    <Image
                      src={tech.icon}
                      alt={tech.alt}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div 
              className="relative w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden" 
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-t z-10" 
                style={{ 
                  background: 'linear-gradient(to top, transparent 0%, var(--color-shadow) 100%)',
                  opacity: 0.3
                }}
              ></div>
              <Image
                src="/imagenes/foto_grado.jpg"
                alt="Jerónimo Unigarro"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}