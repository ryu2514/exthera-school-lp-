# Exthera-School Landing Page

A professional landing page for Exthera-School, a Japanese online exercise therapy academy run by Ryuju Kobayashi, PT.

## 🎯 Goal
Acquire **100 new paid members** for the monthly subscription plan during the promotional period.

## 🎨 Features

- **Responsive Design**: Fully responsive design optimized for all devices (≥320px)
- **Modern Tech Stack**: Built with React, Vite, TailwindCSS
- **Interactive Components**: Framer Motion animations, Headless UI modals
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, Schema.org markup
- **Performance Focused**: Lighthouse scores ≥90 targeted
- **Form Integration**: Zapier webhook integration for lead capture

## 🚀 Tech Stack

- **Framework**: React (Vite)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **UI Components**: Headless UI
- **Deployment**: Vercel
- **Form Handling**: Zapier webhooks

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with parallax effect
│   ├── Benefits.jsx      # 5 key benefits section
│   ├── SocialProof.jsx   # Statistics and credibility
│   ├── Curriculum.jsx    # Learning content blocks
│   ├── Pricing.jsx       # Membership pricing table
│   ├── FAQ.jsx           # Frequently asked questions
│   ├── CTA.jsx           # Call-to-action with form
│   └── Footer.jsx        # Site footer
├── App.jsx               # Main application component
├── main.jsx             # React entry point
└── index.css            # Global styles with Tailwind

public/
└── assets/
    ├── logo.svg
    ├── hero-exercise-therapy.png
    └── og.png
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Design Specifications

- **Brand Color**: #1A98D5
- **Font**: Noto Sans JP
- **Style**: Clean, professional, spacious
- **Reference Sites**: stripe.com/jp, webflow.com

## 📧 Form Integration

The CTA forms are configured to submit to Zapier webhooks. Update the webhook URL in `src/components/CTA.jsx`:

```javascript
const response = await fetch('https://hooks.zapier.com/hooks/catch/YOUR-WEBHOOK-ID/', {
  // ... form submission logic
});
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Deploy** - Vercel will automatically deploy using the included `vercel.json` configuration

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload dist/ folder** to your hosting provider

## 🔧 Configuration

### Assets

Replace placeholder assets in `public/assets/`:
- `logo.svg` - Company logo
- `hero-exercise-therapy.png` - Hero background image
- `og.png` - Open Graph image for social sharing

## 🎯 Landing Page Sections

1. **Hero** - Main value proposition with CTA
2. **Benefits** - 5 key reasons to choose Exthera-School
3. **Social Proof** - Statistics and credibility indicators
4. **Curriculum** - Learning content and features
5. **Pricing** - Membership plan details
6. **CTA #1** - Primary conversion form
7. **FAQ** - Common questions and answers
8. **CTA #2** - Secondary conversion opportunity
9. **Footer** - Additional links and information

## 📊 Performance Targets

- **Performance**: ≥90 Lighthouse score
- **Accessibility**: ≥90 Lighthouse score
- **Best Practices**: ≥90 Lighthouse score
- **SEO**: ≥90 Lighthouse score

## 📝 Content Management

### Updating Pricing
Edit the pricing information in `src/components/Pricing.jsx`. Look for `<<FIXME>>` placeholders.

### Updating Deadlines
Search for `<<FIXME>>` throughout the codebase to find deadline placeholders.

### Adding New FAQ Items
Update the `faqs` array in `src/components/FAQ.jsx`.

## 🌐 SEO Features

- Complete meta tags for search engines
- Open Graph tags for social media sharing
- Twitter Card meta tags
- Schema.org structured data for FAQs
- Semantic HTML structure
- Alt text for images
- Proper heading hierarchy

## 📱 Responsive Breakpoints

- **Mobile**: ≥320px
- **Tablet**: ≥768px
- **Desktop**: ≥1024px
- **Large Desktop**: ≥1280px

---

**Built with ❤️ for Exthera-School by Ryuju Kobayashi, PT**
