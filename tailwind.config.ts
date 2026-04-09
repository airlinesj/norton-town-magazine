import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'norton-red': '#E11D48',
        'norton-blue': '#0EA5E9',
        'norton-gold': '#F59E0B',
      },
      fontFamily: {
        'geist-sans': ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        'geist-serif': ['var(--font-geist-serif)', 'Georgia', 'serif'],
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.17), inset 0 8px 32px 0 rgba(255, 255, 255, 0.1)',
        'glass-hover': '0 8px 32px 0 rgba(225, 29, 72, 0.25), inset 0 8px 32px 0 rgba(255, 255, 255, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
