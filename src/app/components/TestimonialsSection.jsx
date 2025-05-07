'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Sample testimonial data - replace with actual testimonials
const testimonials = [
  {
    id: 1,
    text: 'Jerónimo es un profesional en crecimiento constante, siempre busca mejorar y superar cada proyecto.',
    author: 'Jacobo Solare',
    role: 'Profesor de mundo',
    image: '/profile-jacobo.jpg',
    rating: 4,
  },
  {
    id: 2,
    text: 'He visto cómo Jerónimo se supera en cada etapa, demostrando compromiso y pasión por la tecnología.',
    author: 'Santiago Gariol',
    role: 'Profesor de mundo',
    image: '/profile-santiago.jpg',
    rating: 5,
  },
  {
    id: 3,
    text: 'Jerónimo se destaca por su responsabilidad y su enfoque en crear soluciones útiles y relevantes.',
    author: 'Luis Carlos Rivera',
    role: 'Profesor de mundo',
    image: '/profile-luis.jpg',
    rating: 5,
  },
  {
    id: 4,
    text: 'Jerónimo tiene una gran capacidad de adaptación y siempre ofrece ideas innovadoras.',
    author: 'Ana Gómez',
    role: 'Colaboradora',
    image: '/profile-ana.jpg',
    rating: 5,
  },
  {
    id: 5,
    text: 'Su dedicación y capacidad para trabajar en equipo lo convierten en un gran recurso.',
    author: 'Carlos López',
    role: 'Mentor',
    image: '/profile-carlos.jpg',
    rating: 4,
  },
]

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="section-padding bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">Testimonios</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card h-full flex flex-col bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
      <div className="mb-4">
        <div className="text-primary mb-2 text-yellow-400">
          <Quote className="w-6 h-6" />
        </div>
        <p className="text-muted-foreground text-sm mb-6 text-white">{testimonial.text}</p>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between items-center text-white">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary relative mr-3 flex items-center justify-center">
              {testimonial.image ? (
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <span className="text-xs font-medium text-white">
                  {testimonial.author.substring(0, 2).toUpperCase()}
                </span>
              )}
            </div>
            <div>
              <p className="font-medium text-sm">{testimonial.author}</p>
              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
