import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Smartphone, Users, ShoppingBag, Star } from 'lucide-react'
import { staggerContainer, fadeInUp } from '../../utils/motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import SectionHeading from '../ui/SectionHeading'

export default function ProductsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <SectionHeading
            overline="Our Products"
            title="Products We've"
            highlight="Built"
            subtitle="Real-world products designed and engineered by our team — used by communities today."
          />

          {/* CircleOne Card */}
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-3xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-primary/40 transition-all group"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative grid lg:grid-cols-2 gap-10 p-8 lg:p-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-xl shadow-primary/40">
                    <Smartphone size={26} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[var(--text-primary)]">CircleOne</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Hyperlocal Community App</p>
                  </div>
                  <span className="ml-auto text-xs px-3 py-1 rounded-full bg-accent/20 text-accent font-bold border border-accent/30">Live</span>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  CircleOne connects apartment residents — enabling community discussions, a hyperlocal marketplace, peer ratings, and OTP-based secure authentication. Built with Flutter and NestJS.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: Users, label: 'Community Feed', color: '#6C63FF' },
                    { icon: ShoppingBag, label: 'Marketplace', color: '#00D4AA' },
                    { icon: Star, label: 'Peer Ratings', color: '#F59E0B' },
                    { icon: Smartphone, label: 'OTP Login', color: '#EC4899' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-2 p-3 rounded-xl bg-[var(--bg-elevated)]">
                      <item.icon size={16} style={{ color: item.color }} />
                      <span className="text-sm font-medium text-[var(--text-primary)]">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Flutter', 'NestJS', 'PostgreSQL', 'Firebase', 'Riverpod'].map(t => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">{t}</span>
                  ))}
                </div>

                <Link
                  to="/products/circleone"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-white font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all"
                >
                  View Product Details <ArrowRight size={16} />
                </Link>
              </div>

              {/* Visual mockup */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-[var(--bg-elevated)] border border-[var(--border)] rounded-3xl p-6 w-64 space-y-3">
                    <div className="h-3 bg-gradient-brand rounded-full w-3/4" />
                    <div className="h-2 bg-[var(--bg-surface)] rounded-full w-full" />
                    <div className="h-2 bg-[var(--bg-surface)] rounded-full w-5/6" />
                    <div className="h-20 bg-[var(--bg-surface)] rounded-2xl flex items-center justify-center">
                      <div className="w-8 h-8 rounded-xl bg-gradient-brand opacity-60" />
                    </div>
                    <div className="h-2 bg-[var(--bg-surface)] rounded-full w-4/5" />
                    <div className="h-2 bg-[var(--bg-surface)] rounded-full w-3/5" />
                    <div className="h-10 bg-gradient-brand rounded-xl opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-center text-sm text-[var(--text-secondary)] mt-8">
            More products coming soon.{' '}
            <Link to="/contact" className="text-primary hover:underline">Got an idea? Let's build it together.</Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
