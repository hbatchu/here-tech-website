import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Code2, Smartphone } from 'lucide-react'
import { fadeInUp, fadeInRight, staggerContainer } from '../../utils/motion'

const stats = [
  { value: '10+', label: 'Projects Delivered' },
  { value: '5+', label: 'Technologies' },
  { value: '2+', label: 'Years Experience' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container-max section-padding w-full pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles size={12} />
                Solution Design & Engineering
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 text-[var(--text-primary)]">
              We Build
              <br />
              <span className="text-gradient">Digital</span>
              <br />
              Products
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg">
              Here Tech designs and engineers world-class mobile apps, web platforms, and backend systems. From idea to launch — we handle everything.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-brand text-white font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all"
              >
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[var(--border)] text-[var(--text-primary)] font-bold hover:border-primary hover:bg-primary/5 transition-all"
              >
                View Products
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-8">
              {stats.map(stat => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-gradient">{stat.value}</div>
                  <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — App mockup card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl scale-110" />

              {/* Main card */}
              <div className="relative bg-[var(--bg-surface)] border border-[var(--border)] rounded-3xl p-6 w-80 shadow-2xl animate-float">
                {/* App header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg shadow-primary/40">
                    <Smartphone size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[var(--text-primary)]">CircleOne</div>
                    <div className="text-xs text-[var(--text-secondary)]">Hyperlocal Community App</div>
                  </div>
                  <span className="ml-auto text-xs px-2 py-1 rounded-full bg-accent/20 text-accent font-semibold">Live</span>
                </div>

                {/* Fake UI */}
                <div className="space-y-3 mb-6">
                  {['Community Feed', 'Marketplace', 'Peer Ratings'].map((item, i) => (
                    <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-elevated)]">
                      <div className="w-8 h-8 rounded-lg bg-gradient-brand opacity-80" style={{ opacity: 0.6 + i * 0.15 }} />
                      <span className="text-sm font-medium text-[var(--text-primary)]">{item}</span>
                      <div className="ml-auto w-4 h-4 rounded-full bg-accent/30" />
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {['Flutter', 'NestJS', 'Firebase'].map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-lg bg-primary/10 text-primary font-medium">{t}</span>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-accent text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg shadow-accent/40 flex items-center gap-1"
              >
                <Code2 size={12} /> Full Stack
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
