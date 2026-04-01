import { motion } from 'framer-motion'
import { Lightbulb, Smartphone, Globe, Server, Cloud, Palette, ChevronRight } from 'lucide-react'
import { staggerContainer, fadeInUp, pageTransition } from '../utils/motion'
import { services } from '../constants/services'
import ContactSection from '../components/sections/ContactSection'

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Smartphone, Globe, Server, Cloud, Palette,
}

export default function Services() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <section className="section-padding pt-32 bg-[var(--bg-surface)]">
        <div className="container-max text-center max-w-3xl mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10">
              Our Services
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-6">
              Everything you need to{' '}
              <span className="text-gradient">ship your product</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)]">
              From architecture to deployment, we handle the full product lifecycle so you can focus on your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {services.map(service => {
              const Icon = iconMap[service.icon]
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${service.color}20` }}>
                      {Icon && <Icon size={26} style={{ color: service.color }} />}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[var(--text-primary)] mb-1">{service.title}</h3>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <ChevronRight size={14} style={{ color: service.color }} className="flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  )
}
