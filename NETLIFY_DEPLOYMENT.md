# Netlify Deployment Guide

## Quick Deploy to Netlify

### Option 1: Git-Based Deployment (Recommended)

1. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize
   - Find `norton-town-magazine` repository
   - Click "Deploy site"

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18+ (set in Site settings → Build & deploy)

3. **Auto-Deploys**
   - Every push to `main` branch triggers automatic deployment
   - Preview URLs for pull requests

### Option 2: Manual Deployment

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   npm run build
   netlify deploy --prod
   ```

## Environment Variables

If needed, configure in Netlify UI:
1. Site settings → Build & deploy → Environment
2. Add any variables from `.env.example`

**Common variables:**
- `NEXT_PUBLIC_APP_URL` - Your site URL
- Analytics IDs, API endpoints, etc.

## Pre-Deployment Checklist

- [ ] Project pushed to GitHub
- [ ] `netlify.toml` exists in root
- [ ] `npm run build` works locally
- [ ] No TypeScript errors (`npm run lint`)
- [ ] All features tested
- [ ] Environment variables configured

## Build Settings Verification

**Netlify should detect:**
- Framework: Next.js
- Build command: `npm run build`
- Publish directory: `.next`

**If not detected automatically:**
1. Go to Site settings → Build & deploy → Build settings
2. Edit build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## Post-Deployment

1. **Verify Site**
   - Load live URL
   - Check all sections load (Hero, Directory, Events, etc.)
   - Test search/filter functionality
   - Verify WhatsApp links work

2. **Monitor Performance**
   - Check Netlify Analytics
   - Monitor Core Web Vitals
   - Review error logs in Netlify UI

3. **Custom Domain** (Optional)
   - Domain settings → Add custom domain
   - Configure DNS records
   - Enable HTTPS (automatic with Netlify)

## Troubleshooting

### Build Fails
```bash
# Check build locally
npm run build

# Check for errors
npm run lint
npm run type-check  # if available
```

### Port/Dependency Issues
- Clear cache: `netlify cache:clean`
- Reinstall: `rm -rf node_modules && npm install`

### Deployment Won't Start
- Check Node.js version in Netlify (set to 18+)
- Verify build command in `netlify.toml`
- Check environment variables are set

## Rollback

In Netlify UI:
1. Go to Deploys
2. Find the previous successful deploy
3. Click "Restore" to rollback

## What's Included

✅ **netlify.toml** - Build configuration
✅ **Performance optimizations** - Image optimization ready
✅ **.netlifyignore** - Files to exclude from deploy
✅ **Next.js Plugin** - Auto-configured for Netlify

## Next.js on Netlify

The `@netlify/plugin-nextjs` handles:
- Automatic image optimization
- API routes → functions conversion
- Middleware support
- Incremental Static Regeneration (ISR)

## Support

- [Netlify Docs](https://docs.netlify.com)
- [Next.js on Netlify](https://docs.netlify.com/frameworks/next-js/overview/)
- [Troubleshoot Common Issues](https://docs.netlify.com/frameworks/next-js/troubleshooting/)
