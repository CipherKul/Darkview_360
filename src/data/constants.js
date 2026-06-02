import {
  ShieldCheck,
  Eye,
  UserCog,
  BellRing,
  Cpu,
  Smartphone,
  Volume2,
  Activity,
  ScanFace,
  Bell,
  Home,
  Building2,
  Factory,
  Hospital,
  Store,
  Warehouse,
  ShoppingCart,
  GraduationCap,
} from 'lucide-react'

export const BRAND = {
  name: 'Darkview_360',
  tagline: '360° Surveillance. Zero Blind Spots.',
  phone: '+91 98873 32211',
  email: 'enquiry@darkview360.com',
  address: 'Kota, Rajasthan, India',
  addressFull: 'Industrial Area, Kota, Rajasthan 324005',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Technology', to: '/technology' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
]

export const SERVICES = [
  {
    icon: ShieldCheck,
    title: 'Complete Security',
    desc: 'PTZ cameras integrated with audio speakers for full audio-visual surveillance, deterrence, and live two-way response.',
    features: ['PTZ 360° rotation', 'Loudspeaker integration', 'Night vision', 'Weatherproof'],
    color: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80&auto=format&fit=crop',
  },
  {
    icon: Eye,
    title: 'Live Monitoring',
    desc: '24/7 AI-powered surveillance with real-time threat detection, instant alerts, and automated incident reporting.',
    features: ['24/7 coverage', 'AI threat detection', 'Real-time alerts', 'Cloud recording'],
    color: 'from-violet-500 to-fuchsia-600',
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=800&q=80&auto=format&fit=crop',
  },
  {
    icon: UserCog,
    title: 'Virtual Guard',
    desc: 'Trained human operators remotely monitor your premises with advanced video analytics — smarter and more cost-effective than on-site guards.',
    features: ['Trained operators', 'Video analytics', 'Audio challenge', 'Police dispatch'],
    color: 'from-emerald-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=80&auto=format&fit=crop',
  },
  {
    icon: BellRing,
    title: 'Alarm Monitoring',
    desc: 'Smoke, intrusion, and motion sensors integrated with a centralized alarm response system for rapid action.',
    features: ['Smoke sensors', 'Intrusion alarms', 'Panic button', 'Auto dispatch'],
    color: 'from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1622559617436-9ea9b34d391c?w=800&q=80&auto=format&fit=crop',
  },
]

export const IMAGES = {
  about: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80&auto=format&fit=crop',
  aboutSecondary: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop',
  heroBg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop',
  contact: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop',
}

export const TECH_FEATURES = [
  { icon: Cpu, title: 'AI Threat Detection', desc: 'Computer vision identifies suspicious activity automatically.' },
  { icon: ScanFace, title: 'Facial Recognition', desc: 'Identify known visitors and flag unknown faces in real time.' },
  { icon: Smartphone, title: 'Mobile App Access', desc: 'View live feeds and receive alerts on iOS & Android.' },
  { icon: Volume2, title: 'Two-Way Audio', desc: 'Speak through cameras to deter intruders instantly.' },
  { icon: Activity, title: 'Motion Analytics', desc: 'Smart motion zones reduce false alarms by 95%.' },
  { icon: Bell, title: 'Instant Alerts', desc: 'SMS, push, and email notifications within seconds.' },
]

export const INDUSTRIES = [
  { icon: Home, label: 'Residential', desc: 'Protect your family with smart home surveillance.', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80&auto=format&fit=crop' },
  { icon: Building2, label: 'Corporate', desc: 'Secure offices, lobbies, and meeting rooms.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop' },
  { icon: Factory, label: 'Industrial', desc: 'Monitor large facilities, perimeters and assets.', image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80&auto=format&fit=crop' },
  { icon: Hospital, label: 'Hospitals', desc: 'Patient safety and asset protection in healthcare.', image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80&auto=format&fit=crop' },
  { icon: Store, label: 'Retail', desc: 'Prevent shoplifting and improve store operations.', image: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=600&q=80&auto=format&fit=crop' },
  { icon: Warehouse, label: 'Warehouse', desc: 'Inventory protection and worker safety.', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80&auto=format&fit=crop' },
  { icon: ShoppingCart, label: 'Supermarket', desc: 'Loss prevention and customer flow analytics.', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80&auto=format&fit=crop' },
  { icon: GraduationCap, label: 'Schools', desc: 'Safe campuses with monitored entry points.', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80&auto=format&fit=crop' },
]

export const STATS = [
  { value: '500+', label: 'Active Clients' },
  { value: '10K+', label: 'Cameras Monitored' },
  { value: '24/7', label: 'Live Coverage' },
  { value: '<30s', label: 'Response Time' },
]

export const TESTIMONIALS = [
  {
    quote:
      'Darkview_360 transformed how we protect our factory. The virtual guard service alone saved us 60% over traditional security.',
    name: 'Rakesh Sharma',
    role: 'Factory Owner, Kota',
  },
  {
    quote:
      'Their AI alerts caught a break-in attempt at 2 AM and dispatched police before any damage. Truly 24/7 protection.',
    name: 'Priya Agarwal',
    role: 'Retail Store Manager, Kota',
  },
  {
    quote:
      'Installation was professional, the mobile app is fantastic, and the team is always responsive. Highly recommended.',
    name: 'Dr. Manish Verma',
    role: 'Hospital Director, Kota',
  },
]
