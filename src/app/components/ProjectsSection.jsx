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
    description: 'Es una aplicación web que ayuda a los usuarios a llevar un control de sus tratamientos médicos y recordatorios de medicamentos...',
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
    codeUrl: 'https://github.com/migueltovarb/ISWElectiva110202-11.git',
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding py-16 px-4 sm:px-6 lg:px-12"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text-light)'
      }}
    >
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
          background: var(--color-border);
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: var(--color-link);
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
    <div
      className="project-card h-full flex flex-col p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
      style={{
        backgroundColor: 'var(--color-background-alt)',
        boxShadow: `0 4px 12px var(--color-shadow)`,
        border: `1px solid var(--color-border)`
      }}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.2)] to-transparent"></div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--color-text-light)' }}>{project.title}</h3>
        <p className="text-sm sm:text-base mb-4 flex-grow" style={{ color: 'var(--color-text-light)' }}>{project.description}</p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm px-2 py-1 rounded-full"
                style={{
                  backgroundColor: 'var(--color-secondary-light)',
                  color: 'var(--color-text-light)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium transition-colors"
                style={{
                  color: 'var(--color-link)'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-link-hover)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-link)'}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Demo
              </a>
            )}
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium transition-colors"
              style={{
                color: 'var(--color-primary)'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary-light)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-primary)'}
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
