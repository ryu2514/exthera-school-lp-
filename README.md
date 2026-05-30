# 🏥 Exthera-School Landing Page

![Exthera-School](https://img.shields.io/badge/Exthera--School-Landing%20Page-1A98D5?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.10-06B6D4?style=for-the-badge&logo=tailwindcss)

A professional landing page for **Exthera-School**, a Japanese online exercise therapy academy run by Ryuju Kobayashi, PT.

## 🎯 Project Goal
Acquire **100 new paid members** for the monthly subscription plan during the promotional period.

## ✨ Key Features

🎨 **Responsive Design** - Optimized for all devices (≥320px)  
⚡ **High Performance** - Lighthouse scores ≥90  
🎭 **Modern Animations** - Framer Motion powered  
📱 **Mobile-First** - Perfect mobile experience  
🔍 **SEO Optimized** - Complete meta tags & schema markup  
📊 **Analytics Ready** - Google Analytics integration ready  

## 🚀 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.1.0 | UI Framework |
| Vite | 7.0.0 | Build Tool |
| TailwindCSS | 4.1.10 | Styling |
| Framer Motion | 12.19.1 | Animations |
| Heroicons | 2.2.0 | Icons |

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Hero.jsx         # Landing hero section
│   ├── Benefits.jsx     # 5 key benefits
│   ├── SocialProof.jsx  # Statistics & credibility
│   ├── Curriculum.jsx   # Learning content
│   ├── Pricing.jsx      # Membership plans
│   ├── FAQ.jsx          # Q&A section
│   ├── CTA.jsx          # Call-to-action forms
│   └── Footer.jsx       # Site footer
├── App.jsx              # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles

public/
└── assets/             # Static assets
    ├── logo.svg        # Brand logo
    ├── hero-exercise-therapy.png
    └── og.png          # Social sharing image
```

## 🛠️ Quick Start

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

## 🎨 Design System

- **Primary Color**: `#1A98D5` (Brand Blue)
- **Font Family**: Noto Sans JP
- **Design Style**: Clean, professional, spacious
- **Inspiration**: stripe.com/jp, webflow.com

## 📊 Performance Metrics

| Metric | Target | Status |
|--------|--------|--------|
| Performance | ≥90 | ✅ Optimized |
| Accessibility | ≥90 | ✅ Compliant |
| Best Practices | ≥90 | ✅ Implemented |
| SEO | ≥90 | ✅ Optimized |

## 🌐 Deployment

### Live URL
- **Production**: https://lp.exthera-school.com *(Coming Soon)*
- **Preview**: https://exthera-school-lp.vercel.app

### Deploy to Vercel
1. Connect GitHub repository
2. Configure build settings:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy automatically

## 📧 Integration

### Form Handling
Forms are configured for Zapier webhooks. Update webhook URL in `src/components/CTA.jsx`.

### Analytics
Ready for Google Analytics, GTM, and Facebook Pixel integration.

## 📱 Responsive Design

| Device | Breakpoint | Status |
|--------|------------|--------|
| Mobile | ≥320px | ✅ Optimized |
| Tablet | ≥768px | ✅ Optimized |
| Desktop | ≥1024px | ✅ Optimized |
| Large | ≥1280px | ✅ Optimized |

## 🔧 Configuration

### Environment Variables
Create `.env` file for custom configuration:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_ENABLE_ANALYTICS=true
```

### Content Updates
- Pricing: `src/components/Pricing.jsx`
- FAQ: `src/components/FAQ.jsx`
- Contact: `src/components/CTA.jsx`

## 📞 Support

For technical support or questions:
- 📧 Email: support@exthera-school.com
- 📱 Website: https://exthera-school.com

---

<div align="center">

**Built with ❤️ for Exthera-School**  
*Empowering Physical Therapists with Evidence-Based Exercise Therapy*

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/exthera-school-lp)

</div>
