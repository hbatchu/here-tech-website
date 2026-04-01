import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../../utils/motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const values = [
  'We treat your product like our own',
  'Clean code, clean architecture',
  'Transparent communication always',
  'Delivery on time, every time',
]

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left visual */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl" />
            <div className="relative bg-[var(--bg-surface)] border border-[var(--border)] rounded-3xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-[var(--text-secondary)] font-mono">solution-design.ts</span>
              </div>
              <div className="font-mono text-sm space-y-1">
                <div><span className="text-purple-400">const</span> <span className="text-blue-400">hereTech</span> = {'{'}</div>
                <div className="pl-4"><span className="text-green-400">mission</span>: <span className="text-yellow-300">"Build world-class products"</span>,</div>
                <div className="pl-4"><span className="text-green-400">approach</span>: <span className="text-yellow-300">"Design-first engineering"</span>,</div>
                <div className="pl-4"><span className="text-green-400">stack</span>: [<span className="text-yellow-300">"Flutter"</span>, <span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"NestJS"</span>],</div>
                <div className="pl-4"><span className="text-green-400">deliver</span>: <span className="text-purple-400">true</span>,</div>
                <div>{'}'}</div>
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div variants={fadeInRight}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
              A team that{' '}
              <span className="text-gradient">designs</span> before it builds
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Here Tech is a solution designing company based in Hyderabad. We partner with startups and businesses to turn their ideas into reliable, scalable digital products — handling everything from architecture to deployment.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              Our approach starts with understanding your problem deeply, designing the right solution, then engineering it with precision. We don't just write code — we solve problems.
            </p>

            <div className="space-y-3 mb-8">
              {values.map(v => (
                <div key={v} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                  <span className="text-[var(--text-primary)] text-sm font-medium">{v}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all"
            >
              More About Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
