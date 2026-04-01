import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/motion'

interface SectionHeadingProps {
  overline?: string
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ overline, title, highlight, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={centered ? 'text-center max-w-2xl mx-auto mb-16' : 'max-w-2xl mb-12'}
    >
      {overline && (
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">
          {overline}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
