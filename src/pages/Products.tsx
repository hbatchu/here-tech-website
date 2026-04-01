import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Smartphone, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp, pageTransition } from '../utils/motion'
import ContactSection from '../components/sections/ContactSection'

export default function Products() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <section className="section-padding pt-32 bg-[var(--bg-surface)]">
        <div className="container-max text-center max-w-3xl mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10">
              Our Products
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-6">
              Products we've{' '}
              <span className="text-gradient">designed & built</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)]">
              Real-world digital products engineered by our team and used by communities today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* CircleOne */}
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden rounded-3xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all p-8 lg:p-10"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex flex-col sm:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-xl shadow-primary/40 flex-shrink-0">
                  <Smartphone size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-black text-[var(--text-primary)]">CircleOne</h2>
                    <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent font-bold border border-accent/30">Live on Play Store</span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-4">Hyperlocal community app for apartment residents — connecting neighbours through a community feed, marketplace, and peer ratings.</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Flutter', 'NestJS', 'PostgreSQL', 'Firebase', 'Render'].map(t => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">{t}</span>
                    ))}
                  </div>
                  <Link
                    to="/products/circleone"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-white font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 p-8 rounded-2xl border-2 border-dashed border-[var(--border)] text-center">
              <p className="text-[var(--text-secondary)] mb-2 font-medium">More products in development</p>
              <p className="text-sm text-[var(--text-secondary)]">Have an idea? <Link to="/contact" className="text-primary hover:underline">Let's build it together.</Link></p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  )
}
