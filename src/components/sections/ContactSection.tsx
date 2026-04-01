import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, MessageSquare } from 'lucide-react'
import { staggerContainer, fadeInUp } from '../../utils/motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 lg:p-16 text-center"
        >
          {/* Background circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

          <motion.div variants={fadeInUp} className="relative">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageSquare size={20} className="text-white/80" />
              <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">Let's Talk</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Have a project in mind?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Tell us what you're building. We'll design the right solution and make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-bold shadow-xl hover:scale-105 transition-all"
              >
                Request a Service <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:hello@heretech.in"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-all"
              >
                <Mail size={18} /> hello@heretech.in
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
