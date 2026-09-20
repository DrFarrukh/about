# Dr. Muhammad Farrukh Qureshi - Academic Portfolio

A premium personal academic and research portfolio website built with React and Vite.

## Features

- **Modern Dark Theme**: Navy/charcoal palette with cyan/teal electric accents
- **Fully Responsive**: Beautiful on desktop and mobile
- **SEO Optimized**: Complete meta tags, OpenGraph, Twitter Cards, and Schema.org structured data
- **Fast Loading**: Optimized build with code splitting
- **Accessible**: Semantic HTML, proper focus states, ARIA labels

## Sections

1. **Hero** - Name, title, research statement, CTA buttons, animated research pipeline
2. **About** - Biography with key metrics displayed as stat cards
3. **Research Vision** - Interactive 7-stage research pipeline (Sensing → Autonomous Intelligence)
4. **Research Areas** - 10 research area cards with keywords and projects
5. **Featured Projects** - 6 detailed research projects with modal details
6. **Publications** - Searchable, filterable publication browser (28 publications)
7. **Research Group** - PhD, MS, and undergraduate researchers
8. **Teaching** - Course portfolio with resources
9. **Academic Journey** - Vertical timeline of education and positions
10. **Awards & Grants** - MSCA Seal, research grants, awards
11. **Collaborations** - International research partnerships
12. **Technology Stack** - Technical expertise by category
13. **Contact** - Collaboration call-to-action with contact form

## Tech Stack

- React 19
- Vite 6
- Lucide React (icons)
- CSS Variables for theming
- Intersection Observer for scroll animations

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

All content is stored in `src/data/portfolioData.js`. Update the following:

- Personal information (email, links)
- Research pipeline stages
- Publications list
- Projects
- Research group members
- Teaching courses
- Awards and collaborations

## Deployment

```bash
npm run build
```

Deploy the `dist/` folder to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## File Structure

```
mfq-portfolio/
├── index.html              # SEO-optimized entry point
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg         # MFQ monogram logo
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Main application with all components
    ├── index.css           # Global styles and CSS variables
    └── data/
        └── portfolioData.js # All portfolio content data
```

## License

MIT
