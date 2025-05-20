"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const certifications = [
  {
    id: 1,
    title: 'Nivel Ingles B1',
    issuer: 'Universidad de Nariño - Udenar',
    date: 'Mayo 2025',
    image: '/icons/udenar.png',
  },
  {
    id: 2,
    title: 'Tecnicnico en Mantenimiento de computadores',
    issuer: 'SENA',
    date: 'Noviembre 2022',
    image: '/icons/sena.png',
  },
  {
    id: 3,
    title: 'Ingeniero en Software',
    issuer: 'Universidad Cooperativa de Colombia',
    date: 'Mayo 2025',
    image: '/icons/cope.png',
  },
 
]

export default function AchievementsSection() {
  return (
    <section id="certifications" className="bg-black py-32 md:py-48">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-white text-center tracking-tight">
          Certificaciones
        </h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {certifications.map(cert => (
            <SwiperSlide key={cert.id} className="flex justify-center px-6">
              <div className="bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 w-full max-w-[320px] min-h-[200px] flex flex-col justify-between mb-10">
                <div className="flex items-center gap-5 mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-white">{cert.title}</h3>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">{cert.date}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
