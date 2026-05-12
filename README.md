# CleanKicks - Premium Shoe Care Landing Page

A modern, premium, high-converting ecommerce landing page for CleanKicks - a professional-grade shoe cleaning kit brand.

## Features

✨ **Premium Design**
- Black and white luxury theme
- Modern glassmorphism effects
- Smooth animations and transitions
- Responsive mobile-first design

🎯 **High-Converting Sections**
- Hero section with product showcase
- Before/after comparison slider
- Feature cards with icons
- Step-by-step how-it-works
- Product showcase grid
- Customer testimonials
- Trust badges
- FAQ accordion
- Final CTA section

🚀 **Technology Stack**
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion (animations)
- React Icons

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## File Structure

```
cleankicks-landing/
├── components/          # React components
│   ├── Navbar.js
│   ├── Hero.js
│   ├── BeforeAfter.js
│   ├── Features.js
│   ├── HowItWorks.js
│   ├── ProductShowcase.js
│   ├── Testimonials.js
│   ├── TrustBadges.js
│   ├── FAQ.js
│   ├── FinalCTA.js
│   └── Footer.js
├── pages/              # Next.js pages
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── styles/             # Global styles
│   └── globals.css
├── public/             # Static assets
│   ├── product-kit.png
│   ├── shoe-before.jpg
│   └── shoe-after.jpg
├── package.json
├── next.config.js
├── tailwind.config.js
└── jsconfig.json
```

## Key Components

### Navbar
- Fixed navigation with logo
- Mobile responsive menu
- Smooth animations
- CTA button

### Hero Section
- Large product showcase
- Strong headlines and CTA buttons
- Animated statistics
- Floating badges

### Before/After Slider
- Interactive comparison slider
- Touch/mouse support
- Professional UI

### Features Grid
- 6 premium feature cards
- Icon-based design
- Hover animations

### Testimonials
- Customer reviews with ratings
- Statistics section
- Avatar placeholders

### FAQ Accordion
- Smooth expand/collapse
- 6 common questions
- Professional styling

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: '#FF4444',    // Red accent
  secondary: '#000000',  // Black
  accent: '#FFFFFF',     // White
}
```

### Images
Replace images in the `public` folder:
- `product-kit.png` - Main product image
- `shoe-before.jpg` - Before cleaning
- `shoe-after.jpg` - After cleaning

### Copy/Content
Edit component files to update text, testimonials, and FAQ content.

## Performance

- ⚡ Next.js optimization
- 🖼️ Image optimization
- 📱 Mobile-first responsive
- 🎨 CSS-in-JS with Tailwind
- ✨ Smooth animations with Framer Motion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Deploy on Vercel

The easiest way to deploy is on [Vercel](https://vercel.com/):

```bash
npm i -g vercel
vercel
```

### Deploy on Netlify

```bash
npm run build
# Connect your repository to Netlify
```

## License

MIT License - feel free to use this for your projects!

## Support

For questions or issues, please contact support@cleankicks.com

---

**CleanKicks** - Bring Your Sneakers Back to Life 🔥
