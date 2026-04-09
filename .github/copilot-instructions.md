# Norton Town Magazine - Development Guidelines

## Project Overview
A premium, high-end digital magazine platform for Norton, Zimbabwe built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (glassmorphism design system)
- **UI Components**: shadcn/ui (Radix UI based)
- **Animations**: Framer Motion (smooth page transitions, scroll-reveal)
- **Icons**: Lucide React
- **Typography**: Geist Sans (body), Playfair Display (headers)

## Brand Guidelines

### Color Palette
- **Primary Red**: `#E11D48` (Chicken Inn Red)
- **Primary Blue**: `#0EA5E9` (Frozen Oasis Blue)
- **Accent Gold**: `#F59E0B` (NOTAS Gold)

### Design Principles
1. Clean, minimalist aesthetic with airy layouts
2. Glassmorphism for modern depth effects
3. Professional "Digital-first" magazine styling
4. Smooth, intentional animations (Framer Motion)
5. Mobile-first responsive design

## Project Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout + Navbar
│   ├── page.tsx                # Main entry point (all sections)
│   └── globals.css             # Global styles & animations
├── components/
│   ├── Navbar.tsx              # Glassmorphic navigation header
│   └── MagazineCard.tsx        # Reusable card with hover-tilt
├── lib/
│   ├── utils.ts                # Shared utilities
│   └── whatsapp.ts             # WhatsApp contact integration
└── [config files]
```

## Core Features to Maintain

### 1. Interactive Hero Section
- "Week 126" cover story
- Framer Motion entrance animations
- "Wrap it UP!" promotional banner
- Scroll indicator animation

### 2. Sticky Deal Bar
- Animated marquee content
- Shows "$5 Crispinn' Chicken Wraps & Pepsi" exclusive
- Sticky positioning below navbar
- Hover pause functionality

### 3. NOTAS '26 Portal
- Glassmorphic card design
- "IMAGINE" theme display
- Countdown to December 5, 2026
- Nomination CTA button

### 4. Community Business Directory
- Real-time search filtering
- Category-based filtering (All, Food/Retail, Beauty, Education)
- WhatsApp click-to-contact for each business
- Responsive grid layout

### 5. Event Hub
- Horizontal scroll carousel (snap-scroll)
- Color-coded event cards
- Displays: Name, Date, Description, CTA

### 6. Norton Infrastructure Gallery
- Masonry grid layout
- Category badges
- Hover animations
- Placeholder image sections

### 7. Footer
- Brand information
- Quick navigation links
- Contact details
- Social media links
- Privacy/Terms links

## Component Development Standards

### Navbar Component (`Navbar.tsx`)
- Glassmorphic effect with backdrop blur
- Logo and brand identity
- Responsive mobile menu with animation
- Search icon placeholder
- Smooth scroll handling
- Navigation links with underline animation

### MagazineCard Component (`MagazineCard.tsx`)
- Reusable container with glass effect option
- Hover-tilt animations via Framer Motion
- Scroll-reveal animation (`whileInView`)
- Customizable delay for staggered animations
- Click handler support
- Animated border glow on hover

## WhatsApp Integration

Use `src/lib/whatsapp.ts` utilities:

```typescript
openWhatsAppChat({
  phone: '+263777730936',
  businessName: 'Business Name',
  message: 'Custom message (optional)'
})
```

Current businesses in directory:
- Angwa City Butchery: +263 77 773 0936
- Mimi Hair Salon & Barber: 0777 650 978
- CocoBlue International School: +263 77 773 0936

## Animation Patterns

### Global Animations (in `globals.css`)
- `fade-in`: Basic opacity entrance
- `slide-in-left`: From left with easing
- `slide-in-up`: From bottom with easing
- `marquee`: Continuous scrolling text

### Framer Motion Patterns
```typescript
// Scroll Reveal
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-100px' }}

// Hover Effects
whileHover={{ scale: 1.05, y: -8 }}
transition={{ duration: 0.3 }}
```

## Styling Conventions

### Tailwind Utilities
- `glass-effect`: Glassmorphism container
- `glass-button`: Interactive glass button
- `gradient-text`: Multi-color text gradient
- `glass-dark`: Dark variant with blur

### Font Family
- **Body**: `font-geist-sans`
- **Headers**: Playfair Display (serif, via @import)

## Responsive Breakpoints
- Mobile-first approach
- `md:` for 768px tablets
- `lg:` for 1024px desktops
- Container width: `max-w-7xl`

## Development Workflow

1. **Component Creation**: Use MagazineCard as base for new sections
2. **Animations**: Add Framer Motion `whileInView` for scroll reveals
3. **Colors**: Reference `norton-*` classes from Tailwind config
4. **Typography**: Use Playfair Display for headings, Geist Sans for body
5. **Mobile**: Test all components at `sm`, `md`, `lg` breakpoints
6. **WhatsApp**: Always include WhatsApp integration for business features

## Performance Considerations

- Use `next/Image` for image optimization (when adding media)
- Lazy load components outside viewport
- Optimize Framer Motion animations (reduce simultaneous animations)
- Keep glass-effect blur minimal on mobile for performance

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Testing Checklist

Before committing:
- [ ] Navbar collapses properly on mobile
- [ ] Hero section responsive on all sizes
- [ ] Search/filter in Business Directory works
- [ ] WhatsApp links open correctly
- [ ] Animations smooth (60fps target)
- [ ] No console errors
- [ ] Accessibility: Can navigate with keyboard

## Common Customizations

### Add New Business
1. Update `BUSINESS_DIRECTORY` in `src/lib/whatsapp.ts`
2. Business appears automatically in Directory section

### Add New Event
1. Update `events` array in `src/app/page.tsx`
2. Adjust grid and animation delays

### Change Colors
1. Update hex values in `tailwind.config.ts`
2. Or use inline Tailwind classes

### Modify Hero Banner
1. Edit "Wrap it UP!" section in `src/app/page.tsx`
2. Update marquee content and styling

## Future Enhancements
- [ ] Blog/Article detail pages
- [ ] Advanced 404/error pages
- [ ] Dynamic content via CMS
- [ ] Email newsletter signup
- [ ] Social share buttons
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Analytics integration

## References
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Next.js: https://nextjs.org/docs
- Lucide Icons: https://lucide.dev
