import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle2, Send } from 'lucide-react'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, pageTransition } from '../utils/motion'
import { services } from '../constants/services'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(20, 'Please describe your project (min 20 characters)'),
})

type FormData = z.infer<typeof schema>

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    // TODO: POST to /api/contact or your preferred endpoint
    await new Promise(r => setTimeout(r, 1000)) // simulate request
    console.log('Form data:', data)
    setSubmitted(true)
  }

  const inputClass = "w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
  const labelClass = "block text-sm font-semibold text-[var(--text-primary)] mb-2"
  const errorClass = "text-xs text-red-400 mt-1"

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <section className="section-padding pt-32 bg-[var(--bg-surface)]">
        <div className="container-max text-center max-w-2xl mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10">
              Contact Us
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-4">
              Let's build something{' '}
              <span className="text-gradient">great together</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--text-secondary)]">
              Tell us about your project. We'll get back to you within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={fadeInLeft}>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">Get in touch</h2>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@heretech.in', href: 'mailto:hello@heretech.in' },
                    { icon: Phone, label: 'Phone', value: '+91 79890 55938', href: 'tel:+917989055938' },
                    { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana, India', href: null },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)]">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-[var(--text-secondary)] font-medium mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-semibold text-[var(--text-primary)] hover:text-primary transition-colors">{item.value}</a>
                        ) : (
                          <div className="text-sm font-semibold text-[var(--text-primary)]">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInLeft} className="p-6 rounded-2xl bg-gradient-brand text-white">
                <h3 className="font-bold text-lg mb-2">Quick response guaranteed</h3>
                <p className="text-white/80 text-sm leading-relaxed">We respond to all inquiries within 24 hours. For urgent matters, reach us directly on WhatsApp.</p>
                <a
                  href="https://wa.me/917989055938"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-sm font-semibold transition-all"
                >
                  WhatsApp Us
                </a>
              </motion.div>
            </motion.div>

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full min-h-96 text-center p-12 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)]"
                  >
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} className="text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Request received!</h3>
                    <p className="text-[var(--text-secondary)] max-w-sm">We'll review your project and get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <motion.div variants={fadeInUp}>
                        <label className={labelClass}>Full Name *</label>
                        <input {...register('name')} placeholder="Hemanth Kumar" className={inputClass} />
                        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                      </motion.div>
                      <motion.div variants={fadeInUp}>
                        <label className={labelClass}>Email *</label>
                        <input {...register('email')} type="email" placeholder="hello@company.com" className={inputClass} />
                        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                      </motion.div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <motion.div variants={fadeInUp}>
                        <label className={labelClass}>Phone</label>
                        <input {...register('phone')} type="tel" placeholder="+91 98765 43210" className={inputClass} />
                      </motion.div>
                      <motion.div variants={fadeInUp}>
                        <label className={labelClass}>Company / Project Name</label>
                        <input {...register('company')} placeholder="Your Company" className={inputClass} />
                      </motion.div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <motion.div variants={fadeInUp}>
                        <label className={labelClass}>Service Needed *</label>
                        <select {...register('service')} className={inputClass}>
                          <option value="">Select a service...</option>
                          {services.map(s => (
                            <option key={s.id} value={s.id}>{s.title}</option>
                          ))}
                        </select>
                        {errors.service && <p className={errorClass}>{errors.service.message}</p>}
                      </motion.div>
                      <motion.div variants={fadeInUp}>
                        <label className={labelClass}>Project Budget *</label>
                        <select {...register('budget')} className={inputClass}>
                          <option value="">Select budget range...</option>
                          <option value="below-50k">Below ₹50,000</option>
                          <option value="50k-2l">₹50,000 – ₹2,00,000</option>
                          <option value="2l-5l">₹2,00,000 – ₹5,00,000</option>
                          <option value="5l-plus">₹5,00,000+</option>
                        </select>
                        {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
                      </motion.div>
                    </div>

                    <motion.div variants={fadeInUp}>
                      <label className={labelClass}>Tell us about your project *</label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        placeholder="Describe what you're building, what problem it solves, and any specific requirements..."
                        className={`${inputClass} resize-none`}
                      />
                      {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-brand text-white font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={18} /> Send Request
                          </>
                        )}
                      </button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
