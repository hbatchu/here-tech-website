import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '../../utils/motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const stats = [
  { value: '10+', label: 'Projects Delivered', desc: 'Across mobile, web, and backend' },
  { value: '5+', label: 'Technologies', desc: 'Flutter, React, NestJS, and more' },
  { value: '100%', label: 'Client Satisfaction', desc: 'We care about outcomes, not just output' },
  { value: '24/7', label: 'Support', desc: 'Always available post-launch' },
]

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding bg-[var(--bg-surface)]">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map(stat => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] text-center"
            >
              <div className="text-4xl font-black text-gradient mb-2">{stat.value}</div>
              <div className="font-bold text-[var(--text-primary)] mb-1">{stat.label}</div>
              <div className="text-xs text-[var(--text-secondary)]">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
