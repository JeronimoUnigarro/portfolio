'use client'

import { Quote, Star } from 'lucide-react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    id: 1,
    text: 'Jerónimo es un profesional en crecimiento constante, siempre busca mejorar y superar cada proyecto.',
    author: 'Jacobo Solare',
    role: 'Colega Universitario',
    image: '/icons/user.png',
    rating: 4,
    maxLength: true, // Marcar para texto largo
  },
  {
    id: 2,
    text: 'He visto cómo Jerónimo se supera en cada etapa, demostrando compromiso y pasión por la tecnología.',
    author: 'Santiago Getial',
    role: 'Colega Universitario',
    image: '/icons/user.png',
    rating: 5,
    maxLength: true, // Marcar para texto largo
  },
  {
    id: 3,
    text: 'Jerónimo se destaca por su responsabilidad y su enfoque en crear soluciones útiles y relevantes.',
    author: 'Luis Carlos Revelo',
    role: 'Profesor de Universidad',
    image: '/icons/user.png',
    rating: 5,
  },
  {
    id: 4,
    text: 'Jerónimo tiene una gran capacidad de adaptación y siempre ofrece ideas innovadoras.',
    author: 'Yuly Bastidas',
    role: 'Colega Universitario',
    image: '/icons/user.png',
    rating: 5,
  },
]

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="section-padding py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          style={{ color: 'var(--color-text-light)' }}
        >
          Testimonios
        </h2>

        <div className="relative pb-24">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
              renderBullet: function (index, className) {
                return `<span class="${className}"></span>`
              },
            }}
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

        <style jsx global>{`
          .swiper-pagination {
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 100%;
            text-align: center;
            margin-top: 0;
            padding: 10px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
          }

          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: rgba(255, 255, 255, 0.3);
            opacity: 1;
            margin: 0;
            transition: all 0.3s ease;
            border-radius: 50%;
          }

          .swiper-pagination-bullet-active {
            background: var(--color-highlight);
            opacity: 1;
            transform: scale(1.2);
            box-shadow: 0 0 8px var(--color-highlight);
          }
        `}</style>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div
      className="testimonial-card h-full flex flex-col p-8 rounded-lg shadow-lg border"
      style={{
        backgroundColor: 'hsl(0, 0%, 18%)', // var(--color-background-light)
        borderColor: 'var(--color-border)',
        boxShadow: `0 4px 6px -1px var(--color-shadow), 0 2px 4px -2px var(--color-shadow)`,
      }}
    >
      <div className="mb-4">
        <div className="mb-2" style={{ color: 'var(--color-primary-light)' }}>
          <Quote className="w-6 h-6" />
        </div>
        <div className={testimonial.maxLength ? 'line-clamp-3' : ''}>
          <p style={{ color: 'var(--color-text-light)' }}>{testimonial.text}</p>
        </div>
      </div>

      <div className="mt-auto">
        <div
          className="flex justify-between items-center"
          style={{ color: 'var(--color-text-light)' }}
        >
          <div className="flex items-center">
            <div
              className="w-10 h-10 rounded-full overflow-hidden relative mr-3 flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-secondary)' }}
            >
              {testimonial.image ? (
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <span className="text-xs font-medium" style={{ color: 'var(--color-text-light)' }}>
                  {testimonial.author.substring(0, 2).toUpperCase()}
                </span>
              )}
            </div>
            <div>
              <p className="font-medium text-sm">{testimonial.author}</p>
              <p className="text-xs" style={{ color: 'var(--color-primary-light)' }}>
                {testimonial.role}
              </p>
            </div>
          </div>

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating
                    ? 'text-yellow-500 fill-yellow-500'
                    : 'text-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
