
export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  features: string[];
  metrics?: string;
  links: {
    github: string;
    live?: string;
    demo?: string;
  };
  image: string;
}

export const projects: Project[] = [
  {
    id: 'kilanflux',
    title: 'Hotel Management System (KilanFlux)',
    role: 'Backend Developer & Architect',
    description: 'Comprehensive hotel management platform with multi-role access and automated workflows.',
    techStack: ['Django', 'Django REST Framework', 'PostgreSQL', 'Supabase', 'JWT Auth', 'Docker'],
    features: [
      'Multi-role Access (Admin, Landlord, Caretaker, Tenant)',
      'Supabase Storage for Room Photos & Documents',
      'Auto-generated Swagger API docs & Postman collection'
    ],
    metrics: 'Reduced reservation processing time by 50%',
    links: {
      github: 'https://github.com/allan-too/kilanflux-backend',
      live: 'https://kilanflux-demo.vercel.app'
    },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=400&fit=crop'
  },
  {
    id: 'kilan-crm',
    title: 'Legal CRM SaaS (Kilan)',
    role: 'Full-Stack Developer & AI Integration Lead',
    description: 'AI-powered legal CRM with document summarization and smart client intake workflows.',
    techStack: ['React', 'Vite', 'Tailwind', 'FastAPI', 'MongoDB', 'Stripe', 'Gemini LLM'],
    features: [
      'Role-Based Dashboard (Admin, Lawyer, Paralegal)',
      'Document Summarization via Gemini prompts',
      '14-day Free Trial & Stripe Billing Integration'
    ],
    links: {
      github: 'https://github.com/allan-too/kilan-crm',
      live: 'https://kilan-crm-demo.vercel.app'
    },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
  },
  {
    id: 'ai-email',
    title: 'Global AI Email & Outreach Writer',
    role: 'Lead Developer & Prompt Engineer',
    description: 'AI-powered email management system with inbox prioritization and cold outreach generation.',
    techStack: ['React', 'Node.js', 'Express', 'Gmail API', 'Gemini LLM', 'Docker'],
    features: [
      '"Inbox Zero" Summarization & Prioritization',
      'Cold Email Generator with A/B Testing Templates',
      'Real-Time Status Updates via WebSockets'
    ],
    links: {
      github: 'https://github.com/allan-too/ai-email-outreach',
      demo: 'ai-email-demo.gif'
    },
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop'
  },
  {
    id: 'coffeeconnect',
    title: 'Coffee Trade Marketplace (CoffeeConnect)',
    role: 'Front-End & UX Developer',
    description: 'Marketplace connecting coffee farmers with buyers, featuring real-time chat and bidding.',
    techStack: ['React', 'Tailwind CSS', 'Supabase', 'Realtime Chat', 'PostgreSQL'],
    features: [
      'Buyer/Seller Matching & Chat System',
      'Bidding & Price Analytics Dashboard',
      'Mobile-Responsive for Kenyan Farmers'
    ],
    links: {
      github: 'https://github.com/allan-too/coffeeconnect',
      live: 'https://coffeeconnect-demo.vercel.app'
    },
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=400&fit=crop'
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery Website (Glovo-Style Clone)',
    role: 'Front-End Developer',
    description: 'Full-featured food delivery platform with interactive maps and real-time order tracking.',
    techStack: ['Next.js', 'React SSR', 'Tailwind', 'Leaflet.js', 'Stripe', 'HTML5', 'CSS3'],
    features: [
      'Interactive Map for Restaurant Locator',
      'Add-To-Cart & Checkout Flow with Stripe',
      'Order Tracking UI with Real-Time Updates'
    ],
    links: {
      github: 'https://github.com/allan-too/glovo-clone',
      live: 'https://fooddeliverydemo.vercel.app'
    },
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop'
  }
];
