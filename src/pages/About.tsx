import { motion } from 'framer-motion'
import { CheckCircle2, Target, Heart, Zap, Users } from 'lucide-react'
import { staggerContainer, fadeInUp, pageTransition } from '../utils/motion'
import ContactSection from '../components/sections/ContactSection'

const values = [
  { icon: Target, title: 'Precision Engineering', desc: 'We design systems that scale. Every architectural decision is made with future growth in mind.', color: '#6C63FF' },
  { icon: Heart, title: 'Client-First Mindset', desc: 'Your success is our success. We treat every project as if it were our own product.', color: '#EC4899' },
  { icon: Zap, title: 'Speed Without Compromise', desc: 'Fast delivery never means cutting corners. We move fast by being well-organized.', color: '#F59E0B' },
  { icon: Users, title: 'Collaborative Approach', desc: 'We work with you, not just for you. Transparent communication at every step.', color: '#00D4AA' },
]

const team = [
  { name: 'Hemanth', role: 'Founder & Lead Engineer', skills: ['Flutter', 'NestJS', 'System Design'] },
]

export default function About() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero */}
      <section className="section-padding pt-32 bg-[var(--bg-surface)]">
        <div className="container-max">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10">
              About Here Tech
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-6 leading-tight">
              We design before we build.
              <br /><span className="text-gradient">Always.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Here Tech is a solution design and engineering company based in Hyderabad, India. We partner with startups and businesses to turn ideas into world-class digital products.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Our Mission</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              To make great technology accessible. Too many brilliant ideas fail because of poor technical execution. We bridge the gap between vision and reality — helping founders and businesses build products that actually work.
            </p>
            <div className="space-y-3">
              {['We start every project by deeply understanding the problem', 'We design the architecture before writing a single line of code', 'We build for scalability, not just the MVP', 'We stay with you after launch'].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--text-primary)] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map(v => (
              <div key={v.title} className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${v.color}20` }}>
                  <v.icon size={20} style={{ color: v.color }} />
                </div>
                <h3 className="font-bold text-sm text-[var(--text-primary)] mb-1">{v.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[var(--bg-surface)]">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 text-center">The Team</h2>
          <div className="flex justify-center">
            {team.map(member => (
              <div key={member.name} className="p-8 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] text-center max-w-xs">
                <div className="w-20 h-20 rounded-full bg-gradient-brand mx-auto mb-4 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-primary/40">
                  {member.name[0]}
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-1">{member.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{member.role}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map(s => (
                    <span key={s} className="text-xs px-2 py-1 rounded-lg bg-primary/10 text-primary font-medium">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  )
}
