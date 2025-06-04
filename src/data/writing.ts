
export interface WritingSample {
  id: string;
  category: 'blog' | 'whitepaper' | 'case-study' | 'legal';
  title: string;
  description: string;
  tags: string[];
  wordCount?: number;
  link?: string;
  downloadUrl?: string;
  image: string;
  previewText?: string;
}

export const writingSamples: WritingSample[] = [
  {
    id: 'social-media-2025',
    category: 'blog',
    title: '10 Proven Social Media Marketing Strategies for Small Businesses in 2025',
    description: 'Comprehensive guide covering the latest social media trends and actionable strategies for business growth.',
    tags: ['#SocialMedia', '#SEO', '#SmallBusiness', '#2025'],
    wordCount: 1200,
    link: 'https://medium.com/@kipchirchirtoo/10-social-media-2025-abcdef123',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    previewText: 'Social media marketing continues to evolve rapidly, with new platforms and strategies emerging constantly. This comprehensive guide breaks down the most effective approaches for small businesses looking to maximize their social media ROI in 2025...'
  },
  {
    id: 'aws-lambda-tutorial',
    category: 'blog',
    title: "A Beginner's Guide to Setting Up a Serverless Function on AWS Lambda",
    description: 'Step-by-step tutorial for developers new to serverless architecture and AWS Lambda functions.',
    tags: ['#AWS', '#Serverless', '#NodeJS', '#Tutorial'],
    wordCount: 1000,
    link: 'https://kipchirchirtoo.dev/aws-lambda-guide',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    previewText: 'Serverless computing has revolutionized how we deploy and scale applications. AWS Lambda, as a leading Function-as-a-Service platform, offers developers a powerful way to run code without managing servers...'
  },
  {
    id: 'blockchain-applications',
    category: 'whitepaper',
    title: 'Blockchain Beyond Cryptocurrency: 5 Real-World Applications in 2025',
    description: 'Executive whitepaper exploring practical blockchain implementations across industries.',
    tags: ['#Blockchain', '#Technology', '#Innovation', '#2025'],
    wordCount: 1500,
    downloadUrl: '/assets/pdfs/blockchain-applications-2025.pdf',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop'
  },
  {
    id: 'content-upgrade-case-study',
    category: 'case-study',
    title: 'How Company X Increased Monthly Leads by 120% Using Content Upgrades',
    description: 'Detailed case study analyzing the implementation and results of a content marketing strategy.',
    tags: ['#CaseStudy', '#ContentMarketing', '#LeadGeneration', '#ROI'],
    wordCount: 800,
    downloadUrl: '/assets/pdfs/content-upgrade-case-study.pdf',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  },
  {
    id: 'remote-work-kenya',
    category: 'legal',
    title: 'Why Remote Work Is Here to Stay: 5 Legal Considerations for Employers in Kenya',
    description: 'Analysis of employment law implications for remote work arrangements in Kenya.',
    tags: ['#Employment', '#Kenya', '#RemoteWork', '#Legal'],
    wordCount: 700,
    link: 'https://linkedin.com/pulse/remote-work-kenya-legal-kipchirchir-too',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
    previewText: 'The COVID-19 pandemic fundamentally changed how we work, with remote work becoming not just a temporary solution but a permanent fixture in many organizations. For Kenyan employers, this shift brings both opportunities and legal challenges...'
  },
  {
    id: 'offences-against-persons',
    category: 'legal',
    title: 'Examining Offences Against Persons Under Kenyan Penal Code',
    description: 'Comprehensive legal research paper analyzing criminal law provisions in Kenya.',
    tags: ['#Criminal', '#Law', '#Kenya', '#Research'],
    wordCount: 2000,
    downloadUrl: '/assets/pdfs/offences-against-persons-kenya.pdf',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop'
  },
  {
    id: 'ai-legal-practices',
    category: 'legal',
    title: 'Implementing AI in Legal Practices: A Kenyan Perspective',
    description: 'Whitepaper examining the intersection of artificial intelligence and legal services in Kenya.',
    tags: ['#AI', '#Legal', '#Technology', '#Kenya'],
    wordCount: 1300,
    downloadUrl: '/assets/pdfs/ai-in-legal-practices-kenya.pdf',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop'
  }
];
