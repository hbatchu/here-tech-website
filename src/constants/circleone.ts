export const circleOneFeatures = [
  {
    icon: 'MessageSquare',
    title: 'Community Feed',
    description: 'Share updates, announcements, and conversations with everyone in your apartment community in real-time.',
    color: '#6C63FF',
  },
  {
    icon: 'ShoppingBag',
    title: 'Hyperlocal Marketplace',
    description: 'Buy and sell items within your community. Find trusted neighbours for deals without leaving your building.',
    color: '#00D4AA',
  },
  {
    icon: 'Shield',
    title: 'Secure OTP Login',
    description: 'No passwords to remember. Login securely with your phone number using Firebase-powered OTP authentication.',
    color: '#F59E0B',
  },
  {
    icon: 'Building2',
    title: 'Apartment Communities',
    description: 'Join or create your apartment group. Each community has its own private space for residents only.',
    color: '#3B82F6',
  },
  {
    icon: 'Star',
    title: 'Peer Ratings',
    description: 'Rate and review transactions and interactions. Build trust within your community through transparent feedback.',
    color: '#EC4899',
  },
  {
    icon: 'Bell',
    title: 'Push Notifications',
    description: 'Stay informed with instant notifications for new posts, messages, and marketplace activity via Firebase FCM.',
    color: '#EF4444',
  },
]

export const circleOneTechStack = [
  {
    category: 'Mobile Frontend',
    color: '#6C63FF',
    techs: [
      { name: 'Flutter 3.x', desc: 'Cross-platform UI framework' },
      { name: 'Riverpod', desc: 'State management' },
      { name: 'GoRouter', desc: 'Declarative routing' },
      { name: 'Hive', desc: 'Local storage / offline support' },
      { name: 'Dio', desc: 'HTTP client with interceptors' },
    ],
  },
  {
    category: 'Backend',
    color: '#00D4AA',
    techs: [
      { name: 'NestJS', desc: 'Node.js framework' },
      { name: 'Prisma ORM', desc: 'Database access layer' },
      { name: 'PostgreSQL', desc: 'Primary database' },
      { name: 'JWT Auth', desc: 'Token-based authentication' },
      { name: 'Firebase Admin', desc: 'OTP verification & FCM' },
    ],
  },
  {
    category: 'Infrastructure',
    color: '#F59E0B',
    techs: [
      { name: 'Firebase Auth', desc: 'Phone OTP authentication' },
      { name: 'Firebase FCM', desc: 'Push notifications' },
      { name: 'Render.com', desc: 'Backend cloud hosting' },
      { name: 'Google Play', desc: 'Android distribution' },
    ],
  },
]
