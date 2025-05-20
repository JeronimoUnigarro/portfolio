"use client"
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const projects = [
  {
    id: 1,
    title: 'MediTrack',
    description: 'Es una aplicación web que ayuda a los usuarios a llevar un control de sus tratamientos médicos y recordatorios de medicamentos. Incluye un historial de dosis y su conexión constante a internet.',
    image: '/imagenes/image.png',
    tags: ['React', 'Next.js','TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://control-medicacion-l5nt-lch7uy12x-jeronimos-projects-a9c7ec10.vercel.app/',
    codeUrl: 'https://github.com/JeronimoUnigarro/Control_Medicacion',
  },
  {
    id: 2,
    title: 'PlaneTicket',
    description: 'Es una interfaz para la reserva de boletos de avión',
    image: '/icons/planeticket.png',
    tags: ['Next.js', 'TailwindCSS', 'TypeScript', 'React'],
    demoUrl: 'https://plane-ticket-six.vercel.app/',
    codeUrl: 'https://github.com/JeronimoUnigarro/PlaneTicket.git',
  },
  {
    id: 3,
    title: 'Card_IA',
    description: 'Es una card para la vista de un procudto con una breve descripcion del producto',
    image: '/icons/cardIa.png',
    tags: ['Next.js','Taiwilindcss','React'],
    demoUrl: 'https://taller-card-ia.vercel.app/',
    codeUrl: 'https://github.com/JeronimoUnigarro/Taller_Card_IA',
  },
  {
    id: 4,
    title: 'Window UI',
    description: 'Es una intefaz de configuracion de estilos de un dispositivo movil.',
    image: '/icons/window.png',
    tags: ['Next.js','Taiwilindcss','React'],
    codeUrl: 'https://github.com/JeronimoUnigarro/Inter_Window_UI',
  },
  {
    id: 5,
    title: 'Gestor de Reclamos',
    description: 'Esta es una aplicaciones para que clientes puedan presentar sus quejas a las empresa que le brindaron el servicio.',
    image: '/icons/reportify.png',
    tags: ['Django', 'Postgresql', 'Vite','React'],
    demoUrl: '#',
    codeUrl: 'https://github.com/migueltovarb/ISWElectiva110202-11.git',
  },
  
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">Proyectos</h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="projects-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: #3b82f6;
          opacity: 1;
        }

        .swiper-pagination {
          bottom: -12px !important;
          text-align: center;
        }
      `}</style>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="project-card h-full flex flex-col bg-zinc-900 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 w-full overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-sm sm:text-base mb-4 text-gray-300 flex-grow">{project.description}</p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Demo
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-green-500 hover:text-green-400 transition-colors"
            >
              <Github className="w-4 h-4 mr-1" />
              Código
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
