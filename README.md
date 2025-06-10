
# Paul Serban's Portfolio

A modern, responsive portfolio website showcasing my work as a Full-Stack Software Engineer, Writer & Researcher, and Law Student. Built with React, Vite, and Tailwind CSS with beautiful animations and dark/light theme support.

## 🚀 Features

- **Responsive Design**: Mobile-first approach, perfect on all devices (320px to 1920px+)
- **Dark/Light Theme**: Smooth theme switching with persistent preference
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Vite for lightning-fast development and builds
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typewriter Effect**: React Type Animation
- **Notifications**: Sonner

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation with mobile menu
│   ├── Hero.tsx         # Hero section with typewriter effect
│   ├── Projects.tsx     # Projects showcase
│   ├── ProjectCard.tsx  # Individual project cards
│   ├── Writing.tsx      # Writing & research section
│   ├── WritingCard.tsx  # Individual writing sample cards
│   ├── Legal.tsx        # Legal expertise section
│   ├── Resume.tsx       # Resume section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Site footer
├── contexts/            # React contexts
│   └── ThemeContext.tsx # Dark/light theme management
├── data/                # Static data
│   ├── projects.ts      # Project information
│   └── writing.ts       # Writing samples data
├── pages/               # Page components
│   └── Index.tsx        # Main landing page
└── assets/              # Static assets (images, PDFs)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd keen-kipchirchir-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

This project is optimized for deployment on:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the built files from the `dist` directory

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect it's a Vite project and deploy

### Deploy to Netlify

1. Run `npm run build`
2. Drag the `dist` folder to Netlify's deploy area
3. Or connect your Git repository for continuous deployment

## 📝 Content Management

### Adding New Projects

Edit `src/data/projects.ts` to add new projects. Each project should include:

- Title, role, and description
- Tech stack array
- Key features list
- Links (GitHub, live demo)
- Project image URL

### Adding Writing Samples

Edit `src/data/writing.ts` to add new articles, whitepapers, or legal documents:

- Category (blog, whitepaper, case-study, legal)
- Title and description
- Tags and word count
- Links or download URLs
- Preview image

### Updating Personal Information

Personal details are scattered throughout components. Key locations:

- `src/components/Hero.tsx` - Main introduction
- `src/components/Footer.tsx` - Social links
- `src/components/Contact.tsx` - Contact information
- `src/components/Resume.tsx` - Resume preview

## 🎨 Customization

### Theme Colors

The site uses a blue accent color scheme. To change:

1. Update `tailwind.config.ts` for custom colors
2. Modify gradient classes in components
3. Update theme context in `src/contexts/ThemeContext.tsx`

### Animations

Animations are handled by Framer Motion. Key animation patterns:

- **Page entry**: `initial={{ opacity: 0, y: 50 }}` → `animate={{ opacity: 1, y: 0 }}`
- **Hover effects**: `whileHover={{ scale: 1.05, y: -2 }}`
- **Scroll triggers**: `whileInView` with `viewport={{ once: true }}`

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🔧 Performance Optimizations

- Lazy loading for images
- Code splitting with dynamic imports
- Optimized bundle size with Vite
- Efficient re-renders with React best practices

## 📄 License

MIT License - feel free to use this code for your own portfolio!

## 📞 Contact

- **Email**: paul.serban@email.com
- **LinkedIn**: [linkedin.com/in/paulserban](https://www.linkedin.com/in/paulserban)
- **GitHub**: [github.com/paul-serban](https://github.com/paul-serban)

---

Built with ❤️ by Paul Serban in Austin, TX
