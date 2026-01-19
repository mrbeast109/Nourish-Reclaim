# HealthFlow - Modern Health & Wellness Website

A modern, interactive health coaching website built with pure HTML, CSS, and JavaScript featuring advanced animations, 3D effects, glassmorphism design, and parallax scrolling.

## ✨ Features

### Design
- **Glassmorphism UI** - Frosted glass effects with backdrop blur
- **3D Transforms** - Interactive 3D card flips and hover effects
- **Parallax Scrolling** - Smooth multi-layer parallax animations
- **Gradient Meshes** - Beautiful animated gradient backgrounds
- **Custom Cursor** - Magnetic cursor effect on desktop
- **Scroll Animations** - GSAP-powered scroll-triggered reveals

### Components
- **Creative Navbar** - Sticky glassmorphic navbar with 3D hover effects
- **Hero Section** - Full-screen hero with floating 3D elements
- **Service Cards** - 3D flip cards on hover
- **Process Timeline** - Animated step-by-step process
- **Benefits Section** - Alternating content rows with parallax images
- **Testimonials** - Masonry grid with varied card sizes
- **Newsletter Form** - Inline form with validation and success animations
- **Responsive Footer** - Multi-column footer with social links

### Interactions
- ✅ Smooth scroll navigation
- ✅ Mobile hamburger menu with slide animation
- ✅ Scroll progress indicator
- ✅ Button ripple effects
- ✅ Form validation with visual feedback
- ✅ Hover micro-interactions
- ✅ Custom cursor tracking (desktop)

## 🎨 Design Tokens

### Color Palette
- **Primary**: Pine Teal (#1B4D3E)
- **Secondary**: Mint Leaf (#3EB489)
- **Accent**: Muted Teal (#85B09A)
- **Background**: Off-white (#F8FAFC)

### Typography
- **Headings**: Sora (Modern, friendly sans-serif)
- **Body**: Open Sans (Clean, readable)

## 🚀 Getting Started

### Prerequisites
- Node.js v20+ installed
- npm or yarn package manager

### Installation

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Recommended: Node.js v20 LTS or later

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```
   Production files will be in the `dist` folder

### Project Structure
```
health-coaching-website/
├── index.html          # Main HTML file
├── style.css           # All CSS styles and animations
├── main.js             # JavaScript interactions and GSAP animations
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## 🎯 Performance Features

- **Optimized Animations** - Hardware-accelerated CSS transforms
- **Throttled Scroll Events** - Efficient event handling
- **Lazy Loading** - Images loaded on demand
- **Intersection Observer** - Battery-efficient scroll animations
- **CSS Variables** - Centralized design tokens for consistency

## 📱 Responsive Design

- **Mobile-first** approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1023px
  - Desktop: 1024px+

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

### Changing Colors
Edit CSS variables in `style.css`:
```css
:root {
  --color-primary: #1B4D3E;
  --color-secondary: #3EB489;
  /* ... more variables */
}
```

### Changing Fonts
Update Google Fonts import in `index.html` and CSS variables:
```css
:root {
  --font-heading: 'Your Font', sans-serif;
  --font-body: 'Your Font', sans-serif;
}
```

### Modifying Animations
GSAP animations are configured in `main.js`. Adjust timing, easing, and effects as needed.

## 📦 Dependencies

- **Vite** - Fast build tool and dev server
- **GSAP** - Professional-grade animation library
- **ScrollTrigger** - Scroll-based animations (GSAP plugin)

## 🎓 Learning Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [CSS Glassmorphism](https://css.glass/)
- [Vite Guide](https://vitejs.dev/guide/)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Credits

- **Images**: Pexels (Lucas Pezeta, Yan Krukau, Victor Freitas, Hana Brannigan, Valeria Ushakova)
- **Fonts**: Google Fonts (Sora, Open Sans)
- **Icons**: Inline SVG
- **Avatars**: Pravatar.cc

---

**Built with ❤️ for modern wellness**
