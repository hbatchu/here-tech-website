export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  color: string
}

export const services: Service[] = [
  {
    id: 'solution-design',
    title: 'Solution Design',
    description: 'We architect the right technical foundation for your product — from system design to tech stack selection and scalability planning.',
    features: ['System Architecture', 'Tech Stack Advisory', 'Scalability Planning', 'API Design', 'Database Design', 'Security Audit'],
    icon: 'Lightbulb',
    color: '#F59E0B',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps built with Flutter that feel native on both Android and iOS, with beautiful UIs and smooth performance.',
    features: ['Flutter (Android & iOS)', 'State Management', 'Offline Support', 'Push Notifications', 'App Store Deployment', 'Play Store Publishing'],
    icon: 'Smartphone',
    color: '#6C63FF',
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'Modern, responsive web platforms built with React and Next.js — from MVPs to enterprise-scale applications.',
    features: ['React / Next.js', 'Responsive Design', 'SEO Optimization', 'Performance Tuning', 'PWA Support', 'CMS Integration'],
    icon: 'Globe',
    color: '#00D4AA',
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Robust, scalable backend systems and REST/GraphQL APIs built with NestJS and Node.js, integrated with any database.',
    features: ['NestJS / Node.js', 'REST & GraphQL APIs', 'PostgreSQL / MongoDB', 'Authentication & Auth', 'Real-time WebSockets', 'Microservices'],
    icon: 'Server',
    color: '#EF4444',
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description: 'End-to-end cloud infrastructure, CI/CD pipelines, and deployment automation so your product ships faster and stays reliable.',
    features: ['Docker & Kubernetes', 'CI/CD Pipelines', 'AWS / GCP / Azure', 'Auto Scaling', 'Monitoring & Alerts', 'Cost Optimization'],
    icon: 'Cloud',
    color: '#3B82F6',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centered design that converts. We create intuitive interfaces, design systems, and prototypes that delight users.',
    features: ['Figma Prototyping', 'Design Systems', 'User Research', 'Accessibility (WCAG)', 'Brand Identity', 'Motion Design'],
    icon: 'Palette',
    color: '#EC4899',
  },
]
