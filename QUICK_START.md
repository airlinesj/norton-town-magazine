# Quick Start Guide

## Project Setup Complete! ✨

Your Norton Town Magazine platform has been fully scaffolded. Here's what's ready:

### ✅ What's Included

**Core Files:**
- `src/app/layout.tsx` - Root layout with integrated Navbar
- `src/app/page.tsx` - Complete homepage with all sections:
  - Interactive Hero ("Week 126")
  - Sticky "Wrap it UP!" Deal Bar
  - NOTAS '26 Portal with countdown
  - Community Business Directory (searchable & filterable)
  - Event Hub (horizontal scroll)
  - Norton Infrastructure Gallery (masonry)
  - Footer

**Components:**
- `src/components/Navbar.tsx` - Glassmorphic navigation
- `src/components/MagazineCard.tsx` - Reusable card component with hover-tilt

**Utilities:**
- `src/lib/whatsapp.ts` - WhatsApp integration
- `src/lib/utils.ts` - Shared utilities

**Configuration:**
- `tailwind.config.ts` - Custom glass effects and brand colors
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `globals.css` - Global animations and utilities

**Documentation:**
- `README.md` - Complete project documentation
- `.github/copilot-instructions.md` - Development guidelines

## 🚀 Installation & Running

### 1. Install Dependencies
```bash
cd /home/julius/Desktop/ntmag
npm install
```

**Note:** If you encounter network issues, try:
```bash
npm install --legacy-peer-deps
# or
npm install --no-audit
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

## 📝 Key Features Implemented

### ✨ Interactive Hero Section
- Animated entrance with Framer Motion
- "Week 126" badge
- "Wrap it UP!" promotional banner
- CTA buttons
- Scroll indicator

### 🎯 Sticky Deal Bar
- Animated marquee scrolling
- Sticky positioning below navbar
- Pause-on-hover functionality

### 🏆 NOTAS '26 Portal
- Glassmorphic card design
- Countdown timer (to Dec 5, 2026)
- "IMAGINE" theme
- Nomination CTA

### 📱 Business Directory
- Real-time search filtering
- Category-based filtering:
  - All
  - Food/Retail
  - Beauty
  - Education
- WhatsApp contact buttons
- Responsive grid

**Featured Businesses:**
1. Angwa City Butchery (+263 77 773 0936)
2. Mimi Hair Salon & Barber (0777 650 978)
3. CocoBlue International School (+263 77 773 0936)

### 🎪 Event Hub
- Horizontal snap-scroll carousel
- Color-coded event cards
- Displays event details with CTAs

**Featured Events:**
1. New Life Covenant Word Fest 2026 (April 11-12)
2. MatonGate Holiday Lessons (April 25-30)
3. Norton Business Summit (May 10-12)

### 🏛️ Norton Infrastructure Gallery
- Masonry grid layout
- Hover animations
- Category badges
- Placeholder cards for:
  - Twinlakes Mall
  - New Road Networks
  - Community Center
  - Business Park
  - Technology Hub
  - Green Spaces

## 🎨 Color System

Brand colors are configured in `tailwind.config.ts`:

```typescript
'norton-red': '#E11D48'      // Primary
'norton-blue': '#0EA5E9'     // Secondary
'norton-gold': '#F59E0B'     // Accent
```

## 🔧 Common Customizations

### Add a New Business
Edit `src/lib/whatsapp.ts`:
```typescript
export const BUSINESS_DIRECTORY = {
  'new-business': {
    name: 'Business Name',
    category: 'Category',
    phone: '+263 XX XXX XXXX',
    description: 'Business description'
  }
}
```

### Add a New Event
Edit `src/app/page.tsx` in the Event Hub section:
```typescript
const events = [
  {
    id: 4,
    name: 'Event Name',
    date: 'Date Range',
    description: 'Description',
    color: 'from-color-to-to-color'
  }
]
```

### Change Brand Colors
Update `tailwind.config.ts`:
```typescript
colors: {
  'norton-red': '#YOUR_COLOR',
  'norton-blue': '#YOUR_COLOR',
  'norton-gold': '#YOUR_COLOR',
}
```

## 🧪 Testing Checklist

Before going live, verify:
- [ ] Navbar responsive on mobile
- [ ] Hero section displays correctly
- [ ] Business directory search/filter works
- [ ] WhatsApp links open correctly
- [ ] All animations are smooth
- [ ] No console errors
- [ ] Mobile responsiveness (test on actual device)

## 📦 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t norton-magazine .
docker run -p 3000:3000 norton-magazine
```

### Docker Compose
```bash
docker-compose up
```

## 📚 Documentation

- Full project documentation: [README.md](./README.md)
- Development guidelines: [.github/copilot-instructions.md](./.github/copilot-instructions.md)
- Next.js docs: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion
- Tailwind CSS: https://tailwindcss.com

## 🆘 Troubleshooting

### Port 3000 Already in Use
```bash
# Find and kill process on port 3000
npx kill-port 3000
# or specify a different port
npm run dev -- -p 3001
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Run type checking
npx tsc --noEmit
```

## 🎓 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ✅ Open http://localhost:3000
4. ✅ Customize content (businesses, events, colors)
5. ✅ Test responsiveness on mobile
6. ✅ Deploy to production

## 📧 Support

For issues or questions:
- Check the [README.md](./README.md) for detailed documentation
- Review [.github/copilot-instructions.md](./.github/copilot-instructions.md) for development guidelines
- Comment sections in code for specific feature help

---

**Happy coding! 🚀** Your Norton Town Magazine platform is ready for development!
