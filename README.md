# The Norton Town Magazine - Digital Platform

A premium, responsive digital magazine platform built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for Norton, Zimbabwe.

## 🎨 Features

- **Interactive Hero Section**: Eye-catching "Week 126" cover story with Framer Motion animations
- **Sticky Deal Bar**: Animated marquee featuring exclusive offers like "Wrap it UP!" promotion
- **NOTAS '26 Portal**: Glassmorphic countdown card for Norton Town Awards
- **Business Directory**: Searchable and filterable community business listings  
- **WhatsApp Integration**: Click-to-WhatsApp functionality for all business contacts
- **Event Hub**: Horizontal scroll section for upcoming community events
- **Infrastructure Gallery**: Masonry grid showcasing local development projects
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Glassmorphism UI**: Modern glass-effect components with smooth transitions
- **Beautiful Animations**: Scroll-reveal, hover effects, and page transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom glass-effect utilities
- **UI Components**: Radix UI base patterns (via class-based approach)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Geist Sans (body), Playfair Display (headers)

## 🎯 Branding

**Primary Colors**:
- `#E11D48` - Chicken Inn Red
- `#0EA5E9` - Frozen Oasis Blue
- `#F59E0B` - NOTAS Gold

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navbar
│   ├── page.tsx            # Main homepage with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Glass-morphism navigation
│   └── MagazineCard.tsx    # Reusable card with hover-tilt
├── lib/
│   ├── utils.ts            # Utility functions
│   └── whatsapp.ts         # WhatsApp integration utilities
└── config files (tsconfig, tailwind.config, etc.)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see your magazine in action!

## 💼 Business Directory

The platform includes pre-configured businesses:

- **Angwa City Butchery** - Food/Retail
- **Mimi Hair Salon & Barber** - Beauty
- **CocoBlue International School** - Education

Each listing includes WhatsApp integration for easy customer contact.

## 📱 WhatsApp Integration

All business cards have one-click WhatsApp messaging:

```typescript
openWhatsAppChat({
  phone: '+263777730936',
  businessName: 'Angwa City Butchery'
})
```

## 🎬 Key Components

### Navbar
- Glassmorphic design with blur effect
- Responsive mobile menu
- Smooth scroll navigation links
- Search integration ready

### MagazineCard
- Hover-tilt animation with Framer Motion
- Glassmorphism effect option
- Click handlers and custom styling
- Scroll-reveal animations

### Hero Section
- Animated background blobs
- Week badge with scale animation
- "Wrap it UP!" promotional banner
- CTA buttons with customizable actions

### NOTAS Portal
- Glassmorphic layout
- Countdown timer display
- Nomination call-to-action

### Business Directory
- Real-time search filtering
- Category-based filtering
- WhatsApp contact buttons
- Responsive grid layout

### Event Hub
- Horizontal scroll carousel
- Color-coded event cards
- Date and description display

### Infrastructure Gallery
- Masonry grid layout
- Hover animations
- Category badges

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize brand colors:

```typescript
colors: {
  'norton-red': '#E11D48',
  'norton-blue': '#0EA5E9',
  'norton-gold': '#F59E0B',
}
```

### Typography
Add custom fonts in `src/app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'
```

### Animations
Modify animation durations and transitions in `globals.css` and component files.

## 📝 Adding Content

### Add Events
Edit the `events` array in `src/app/page.tsx`

### Add Businesses
Update `BUSINESS_DIRECTORY` in `src/lib/whatsapp.ts`

### Add Gallery Items
Modify the gallery grid in the Infrastructure section

## 🚢 Deployment

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

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## 📄 License

© 2026 The Norton Town Magazine. All rights reserved.

## 🤝 Support

For support and inquiries, contact: info@ntmag.zw
