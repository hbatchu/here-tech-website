import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Solution Design', href: '/services' },
    { label: 'Mobile Apps', href: '/services' },
    { label: 'Web Applications', href: '/services' },
    { label: 'Backend & APIs', href: '/services' },
    { label: 'Cloud & DevOps', href: '/services' },
  ],
  Products: [
    { label: 'CircleOne', href: '/products/circleone' },
  ],
}

const socials = [
  { icon: Twitter, href: 'https://twitter.com/heretech', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/heretech', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/heretech', label: 'GitHub' },
  { icon: Instagram, href: 'https://instagram.com/heretech', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-lg shadow-primary/30">
                <Zap size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl text-[var(--text-primary)]">
                Here<span className="text-gradient">Tech</span>
              </span>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 max-w-xs">
              We design and build world-class digital products — from concept to launch. Your vision, our engineering.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <a href="mailto:hello@heretech.in" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-primary transition-colors">
                <Mail size={14} />
                hello@heretech.in
              </a>
              <a href="tel:+917989055938" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-primary transition-colors">
                <Phone size={14} />
                +91 79890 55938
              </a>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <MapPin size={14} />
                Hyderabad, Telangana, India
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-secondary)] hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-[var(--text-primary)] mb-4 text-sm">{section}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Here Tech. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            Built with React + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
