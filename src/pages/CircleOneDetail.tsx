import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  MessageSquare, ShoppingBag, Shield, Building2, Star, Bell,
  ArrowRight, Smartphone, ChevronRight, ExternalLink
} from 'lucide-react'
import { staggerContainer, fadeInUp, fadeInLeft, pageTransition } from '../utils/motion'
import { circleOneFeatures, circleOneTechStack } from '../constants/circleone'
import ContactSection from '../components/sections/ContactSection'

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, ShoppingBag, Shield, Building2, Star, Bell,
}

const phoneScreenshots = [
  { src: '/screenshots/Screenshot_20260330_170707.png', label: 'Login Screen' },
  { src: '/screenshots/Screenshot_20260330_171918.png', label: 'Setup Profile' },
  { src: '/screenshots/Screenshot_20260330_171954.png', label: 'Join Community' },
  { src: '/screenshots/Screenshot_20260330_172036.png', label: 'Community Feed' },
]

const tabletScreenshots = [
  { src: '/screenshots/tablet/Screenshot_20260330_172905.png', label: 'Feed View' },
  { src: '/screenshots/tablet/Screenshot_20260330_173043.png', label: 'Community' },
  { src: '/screenshots/tablet/Screenshot_20260330_173156.png', label: 'Profile' },
  { src: '/screenshots/tablet/Screenshot_20260330_173210.png', label: 'Details' },
]

export default function CircleOneDetail() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      {/* Hero Band */}
      <section className="section-padding pt-32 relative overflow-hidden bg-[var(--bg-surface)]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="container-max">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeInUp}>
              <Link to="/products" className="inline-flex items-center gap-1 text-sm text-[var(--text-secondary)] hover:text-primary mb-6 transition-colors">
                <ChevronRight size={14} className="rotate-180" /> Back to Products
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-xl shadow-primary/40">
                <Smartphone size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)]">CircleOne</h1>
                <p className="text-[var(--text-secondary)]">Hyperlocal Community App</p>
              </div>
              <span className="ml-auto text-sm px-4 py-2 rounded-full bg-accent/20 text-accent font-bold border border-accent/30">
                Live on Play Store
              </span>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              CircleOne brings apartment communities together — enabling residents to connect, share updates, buy and sell locally, and build trust through peer ratings. Built mobile-first with Flutter and powered by a NestJS backend.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-8">
              {['Flutter 3.x', 'NestJS', 'PostgreSQL', 'Firebase Auth', 'Firebase FCM', 'Riverpod', 'Prisma ORM', 'Render.com'].map(t => (
                <span key={t} className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">{t}</span>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.heretech.circleone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-white font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all"
              >
                <ExternalLink size={16} /> View on Play Store
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--border)] text-[var(--text-primary)] font-bold hover:border-primary hover:bg-primary/5 transition-all"
              >
                Build Something Similar <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">Features</span>
              <h2 className="text-3xl font-bold text-[var(--text-primary)]">Everything your community needs</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {circleOneFeatures.map(feature => {
                const Icon = iconMap[feature.icon]
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeInUp}
                    className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      {Icon && <Icon size={22} style={{ color: feature.color }} />}
                    </div>
                    <h3 className="font-bold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Phone Screenshots */}
      <section className="section-padding bg-[var(--bg-surface)]">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">Screenshots</span>
              <h2 className="text-3xl font-bold text-[var(--text-primary)]">See it in action</h2>
            </motion.div>

            {/* Phone Screenshots */}
            <motion.div variants={fadeInUp} className="mb-4">
              <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-widest mb-6 text-center">Phone</h3>
              <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide justify-start lg:justify-center">
                {phoneScreenshots.map((shot, i) => (
                  <motion.div
                    key={shot.src}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex-shrink-0 snap-center"
                  >
                    {/* Phone frame */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] blur-xl scale-95" />
                      <div className="relative w-48 bg-[var(--bg-elevated)] rounded-[2.5rem] border-4 border-[var(--border)] overflow-hidden shadow-2xl">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-[var(--bg-elevated)] rounded-b-2xl z-10 flex items-center justify-center">
                          <div className="w-10 h-1.5 bg-[var(--border)] rounded-full" />
                        </div>
                        <img
                          src={shot.src}
                          alt={shot.label}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-center text-[var(--text-secondary)] mt-3 font-medium">{shot.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tablet Screenshots */}
            <motion.div variants={fadeInUp} className="mt-12">
              <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-widest mb-6 text-center">Tablet</h3>
              <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide justify-start lg:justify-center">
                {tabletScreenshots.map((shot, i) => (
                  <motion.div
                    key={shot.src}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex-shrink-0 snap-center"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/15 rounded-2xl blur-xl scale-95" />
                      <div className="relative w-72 bg-[var(--bg-elevated)] rounded-2xl border-4 border-[var(--border)] overflow-hidden shadow-2xl">
                        <img
                          src={shot.src}
                          alt={shot.label}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-center text-[var(--text-secondary)] mt-3 font-medium">{shot.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">Tech Stack</span>
              <h2 className="text-3xl font-bold text-[var(--text-primary)]">Built with modern technology</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {circleOneTechStack.map(stack => (
                <motion.div
                  key={stack.category}
                  variants={fadeInUp}
                  className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)]"
                >
                  <div
                    className="text-sm font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full inline-block"
                    style={{ backgroundColor: `${stack.color}20`, color: stack.color }}
                  >
                    {stack.category}
                  </div>
                  <div className="space-y-3">
                    {stack.techs.map(tech => (
                      <div key={tech.name} className="flex items-start gap-3">
                        <ChevronRight size={14} style={{ color: stack.color }} className="mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-sm font-semibold text-[var(--text-primary)]">{tech.name}</span>
                          <span className="text-xs text-[var(--text-secondary)] ml-2">— {tech.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--bg-surface)]">
        <div className="container-max max-w-2xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInLeft} className="p-10 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border)]">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                Interested in a <span className="text-gradient">similar solution?</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-8">
                We can build a custom community platform, marketplace, or mobile app tailored to your specific needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-brand text-white font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all"
              >
                Request a Service <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  )
}
