import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Lightbulb, Smartphone, Globe, Server, Cloud, Palette, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp } from '../../utils/motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../constants/services'

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Smartphone, Globe, Server, Cloud, Palette,
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding bg-[var(--bg-surface)]">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <SectionHeading
            overline="What We Do"
            title="Services We"
            highlight="Offer"
            subtitle="From ideation to deployment, we provide end-to-end digital product development services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => {
              const Icon = iconMap[service.icon]
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="group p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    {Icon && <Icon size={22} style={{ color: service.color }} />}
                  </div>
                  <h3 className="font-bold text-lg text-[var(--text-primary)] mb-2">{service.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map(f => (
                      <span key={f} className="text-xs px-2 py-1 rounded-lg bg-[var(--bg-surface)] text-[var(--text-secondary)]">{f}</span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
