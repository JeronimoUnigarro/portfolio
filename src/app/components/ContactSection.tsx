'use client'

import { Phone, Mail, Github, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding py-32"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Título animado */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-4"
              style={{ color: 'var(--color-text-light)' }}
            >
              Contáctame
            </h2>
            <h3
              className="text-2xl md:text-3xl font-semibold"
              style={{ color: 'var(--color-text-light)' }}
            >
              Jeronimo David Unigarro Melo
            </h3>
             <h3
              className="text-2xl md:text-3xl font-semibold"
              style={{ color: 'var(--color-text-light)' }}
            >
              Ingeniero en Software
            </h3>
          </motion.div>

          {/* Información de contacto */}
          <div className="space-y-8">
            <ContactItem
              icon={<Phone className="w-6 h-6" style={{ color: 'var(--color-text-light)' }} />}
              title="Teléfono"
              subtitle="Puedes contactarme por medio de mi teléfono"
              value="+57 3163643958"
            />
            <ContactItem
              icon={<Mail className="w-6 h-6" style={{ color: 'var(--color-text-light)' }} />}
              title="Correo"
              subtitle="Puedes contactarme por medio de mi correo"
              value="jeronimo.unigarro@campusucc.edu.co"
              link="https://myaccount.microsoft.com/?ref=MeControl&login_hint=jeronimo.unigarro%40campusucc.edu.co&tid=8d36836e-6b75-4de6-bab9-5f4b1775427f"
            />
            <ContactItem
              icon={<Github className="w-6 h-6" style={{ color: 'var(--color-text-light)' }} />}
              title="GitHub"
              subtitle="Puedo contactarme por GitHub"
              value="github.com/JeronimoUnigarro"
              link="https://github.com/JeronimoUnigarro"
            />
            <ContactItem
              icon={<Instagram className="w-6 h-6" style={{ color: 'var(--color-text-light)' }} />}
              title="Instagram"
              subtitle="Puedes encontrarme en Instagram como"
              value="@jeronimounigarro"
              link="https://www.instagram.com/jeronimounigarro/"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  title,
  subtitle,
  value,
  link,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  value: string
  link?: string
}) {
  return (
    <div className="flex items-start space-x-4 group hover:scale-[1.02] transition-transform duration-300">
      <div
        className="rounded-full p-4 shadow-lg"
        style={{
          backgroundImage: 'linear-gradient(to bottom right, var(--color-primary), var(--color-secondary))',
        }}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
          {subtitle}
        </p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium transition-colors"
            style={{
              color: 'var(--color-text-light)',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-link-hover)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--color-text-light)')}
          >
            {value}
          </a>
        ) : (
          <p className="text-lg font-medium" style={{ color: 'var(--color-text-light)' }}>
            {value}
          </p>
        )}
      </div>
    </div>
  )
}
