"use client"
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const projects = [
  {
    id: 1,
    title: 'MediTrack',
    description: 'Es una aplicación web que ayuda a los usuarios a llevar un control de sus tratamientos médicos y recordatorios de medicamentos. Incluye un historial de dosis y su conexión constante a internet.',
    image: 'https://images.pexels.com/photos/3912363/pexels-photo-3912363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'ProMed',
    description: 'Plataforma para gestión de citas médicas, historial clínico y comunicación entre pacientes y médicos.',
    image: 'https://images.pexels.com/photos/4144238/pexels-photo-4144238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Vue.js', 'Firebase', 'CSS'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'FitTrack',
    description: 'Aplicación para el seguimiento de actividades físicas y entrenamientos personalizados.',
    image: 'https://images.pexels.com/photos/2795280/pexels-photo-2795280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Angular', 'Firebase', 'TailwindCSS'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    title: 'EduLearn',
    description: 'Una plataforma para la educación online con cursos, videoclases y exámenes interactivos.',
    image: 'https://images.pexels.com/photos/5591861/pexels-photo-5591861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MySQL'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 5,
    title: 'TravelGo',
    description: 'App para planificar viajes, buscar vuelos, hoteles y crear itinerarios personalizados.',
    image: 'https://images.pexels.com/photos/1231234/pexels-photo-1231234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Next.js', 'MongoDB', 'TailwindCSS'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 6,
    title: 'Foodie',
    description: 'Aplicación de recetas de cocina con videos, ingredientes y valoraciones de usuarios.',
    image: 'https://images.pexels.com/photos/3764615/pexels-photo-3764615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 7,
    title: 'CryptoTracker',
    description: 'Herramienta para el seguimiento de precios y análisis de criptomonedas en tiempo real.',
    image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'WebSocket', 'Node.js'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 8,
    title: 'HealthPlus',
    description: 'Sistema de gestión de consultas médicas, recetas y horarios de atención.',
    image: 'https://images.pexels.com/photos/3052387/pexels-photo-3052387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Express', 'MongoDB'],
    demoUrl: '#',
    codeUrl: '#',
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
          navigation={true}
          className="projects-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
