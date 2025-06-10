
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
    id: 'ai-software-development',
    category: 'whitepaper',
    title: 'The Impact of Artificial Intelligence on Modern Software Development',
    description: 'An in-depth analysis of how AI is transforming software engineering practices.',
    tags: ['#AI', '#SoftwareDevelopment', '#Technology', '#Innovation'],
    wordCount: 1800,
    link: 'https://docs.google.com/document/d/e/2PACX-1vSJDgeoiRTs-OI8qDTuBHy_MbfGAiMGNQVZU47UzvzRLOsYkOI2jdnmszX2pALPuHuswPHakS2GTll6/pub',
    image: 'https://images.unsplash.com/photo-1620712943543-282862a42db1?w=600&h=400&fit=crop',
    previewText: 'Artificial intelligence is no longer a futuristic concept but a present-day reality that is reshaping the software development lifecycle...'
  },
  {
    id: 'frontend-framework-comparison',
    category: 'blog',
    title: 'A Comparative Study of Frontend Frameworks: React vs. Vue vs. Angular',
    description: 'A technical comparison of the most popular frontend frameworks for web development.',
    tags: ['#React', '#VueJS', '#Angular', '#WebDevelopment'],
    wordCount: 1500,
    link: 'https://docs.google.com/document/d/e/2PACX-1vTRCfwPfG-757n4VdqGM-HSCO1I8uP0DBviXll38jD4rAyYQfh4D23KaVLNy_zaeOjdoXlDM_6NKPJ3/pub',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop',
    previewText: 'Choosing the right frontend framework is a critical decision for any web project. This article provides a deep dive into the pros and cons of React, Vue, and Angular...'
  },
  {
    id: 'blockchain-digital-identity',
    category: 'whitepaper',
    title: 'The Role of Blockchain in Securing Digital Identity',
    description: 'Exploring how blockchain technology can provide a secure and decentralized approach to digital identity management.',
    tags: ['#Blockchain', '#Security', '#Identity', '#Technology'],
    wordCount: 2000,
    link: 'https://docs.google.com/document/d/1DC_oXOFCk6ry8gzUl8XuXKq-jcqfOvWFnJdeuvf6ElE/edit?tab=t.0#heading=h.4upecmy46gcm',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop',
    previewText: 'In an increasingly digital world, securing personal identity is paramount. Blockchain technology offers a paradigm shift from centralized identity systems to a decentralized, user-centric model...'
  },
  {
    id: 'urban-hydroponic-farming',
    category: 'blog',
    title: 'From Farm to Table: The Rise of Urban Hydroponic Farming',
    description: 'An article on the growing trend of urban hydroponic farming and its impact on food sustainability.',
    tags: ['#UrbanFarming', '#Hydroponics', '#Sustainability', '#FoodTech'],
    wordCount: 900,
    link: 'https://medium.com/@paulserbann/from-farm-to-table-the-rise-of-urban-hydroponic-farming-22cbb9ad8336',
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e4e?w=600&h=400&fit=crop',
    previewText: 'As urban populations grow, so does the challenge of feeding them sustainably. Urban hydroponic farming presents a revolutionary solution, bringing fresh produce closer to consumers...'
  }
];
