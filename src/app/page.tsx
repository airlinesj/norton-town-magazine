'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Calendar, Image as ImageIcon } from 'lucide-react'
import MagazineCard from '@/components/MagazineCard'
import { openWhatsAppChat, BUSINESS_DIRECTORY } from '@/lib/whatsapp'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-100px' },
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const businesses = Object.values(BUSINESS_DIRECTORY)
  const categories = ['All', ...new Set(businesses.map((b) => b.category))]
  const filteredBusinesses = businesses.filter((biz) => {
    const matchesSearch = biz.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || biz.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const events = [
    {
      id: 1,
      name: 'New Life Covenant Word Fest 2026',
      date: 'April 11-12',
      description: 'Spiritual gathering and community celebration',
      color: 'from-norton-red to-pink-500',
    },
    {
      id: 2,
      name: 'MatonGate Holiday Lessons',
      date: 'April 25-30',
      description: 'Educational workshops and training sessions',
      color: 'from-norton-blue to-cyan-500',
    },
    {
      id: 3,
      name: 'Norton Business Summit',
      date: 'May 10-12',
      description: 'Networking and enterprise development forum',
      color: 'from-norton-gold to-yellow-500',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background - Optimized */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-norton-red/10 rounded-full blur-2xl md:blur-3xl will-change-transform"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-norton-blue/10 rounded-full blur-2xl md:blur-3xl will-change-transform"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 z-10">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Week Badge */}
            <motion.div
              className="inline-block glass-effect px-6 py-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-sm font-semibold gradient-text">✨ WEEK 126</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block mb-4">Discover Norton</span>
              <span className="gradient-text">Your Digital Magazine</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-xl text-slate-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Explore the rich tapestry of our community, from thriving businesses to inspiring events
            </motion.p>

            {/* "Wrap it UP!" Banner */}
            <motion.div
              className="inline-block glass-effect border-2 border-norton-red px-8 py-6 rounded-3xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-norton-red mb-2">
                🌯 WRAP IT UP! 🌯
              </div>
              <div className="text-sm md:text-base font-semibold text-slate-700">
                $5 Crispinn&apos; Chicken Wraps & Pepsi
              </div>
              <div className="text-xs text-norton-gold mt-2">
                Exclusive Delivery Offer - Order Now!
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-norton-red to-pink-600 text-white rounded-full font-bold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(225, 29, 72, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Read This Week's Issue
              </motion.button>
              <motion.button
                className="px-8 py-4 glass-effect text-slate-900 rounded-full font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Directory
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-semibold text-slate-600">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-slate-400 rounded-full mt-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============ STICKY DEAL BAR ============ */}
      <motion.section
        className="sticky top-20 z-40 glass-effect border-y border-white/20 py-4 overflow-hidden"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="space-y-3">
          <div className="text-xs font-bold text-norton-gold uppercase tracking-widest text-center">
            ⚡ Exclusive Offer ⚡
          </div>

          {/* Marquee Content */}
          <div className="flex overflow-hidden">
            <motion.div
              className="marquee flex gap-8 whitespace-nowrap"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-lg md:text-2xl font-bold gradient-text">
                  🌯 $5 Crispinn&apos; Chicken Wraps & Pepsi • Free Delivery •
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ============ NOTAS '26 PORTAL ============ */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Norton Town Awards <span className="gradient-text">&apos;26</span>
          </h2>
          <p className="text-xl text-slate-600">
            Celebrating excellence and imagination across our community
          </p>
        </motion.div>

        <MagazineCard className="p-12 md:p-16" delay={0.1}>
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.div
                className="inline-block px-4 py-2 bg-gradient-to-r from-norton-gold to-yellow-400 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                <span className="font-bold text-sm uppercase tracking-widest">Theme</span>
              </motion.div>
              <h3 className="text-5xl md:text-6xl font-bold">IMAGINE</h3>
              <p className="text-xl text-slate-600 max-w-2xl">
                Honoring visionary leaders, innovators, and community champions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {[
                { label: 'Days', value: '242' },
                { label: 'Hours', value: '05:23' },
                { label: 'Target Date', value: 'Dec 5' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="glass-effect p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl font-bold gradient-text mb-2">{item.value}</div>
                  <div className="text-sm font-semibold text-slate-600">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-norton-red to-pink-600 text-white rounded-full font-bold text-lg transition-all duration-300 mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nominate Today
            </motion.button>
          </div>
        </MagazineCard>
      </section>

      {/* ============ COMMUNITY BUSINESS DIRECTORY ============ */}
      <section id="directory" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Community <span className="gradient-text">Business Directory</span>
          </h2>
          <p className="text-xl text-slate-600">
            Connect with local businesses featured in The Norton Town Magazine
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-8 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search businesses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 glass-effect border-white/20 text-slate-900 placeholder:text-slate-500 rounded-full focus:outline-none focus:ring-2 focus:ring-norton-red transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-norton-red to-pink-600 text-white'
                    : 'glass-effect text-slate-700 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Business Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBusinesses.map((business, idx) => (
            <MagazineCard key={business.name} delay={idx * 0.1}>
              <div className="p-8 h-full flex flex-col">
                {/* Category Badge */}
                <div className="inline-block mb-4 w-fit">
                  <span className="glass-effect px-4 py-2 text-xs font-bold uppercase rounded-full">
                    {business.category}
                  </span>
                </div>

                {/* Business Name */}
                <h3 className="text-2xl font-bold mb-2 flex-grow">{business.name}</h3>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-6">{business.description}</p>

                {/* Contact Details */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() =>
                      openWhatsAppChat({
                        phone: business.phone,
                        businessName: business.name,
                      })
                    }
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:shadow-lg transition-all duration-300 group"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="flex-1">Contact via WhatsApp</span>
                    <span className="text-xs opacity-75 group-hover:opacity-100">→</span>
                  </button>

                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>{business.phone}</span>
                  </div>
                </div>
              </div>
            </MagazineCard>
          ))}
        </div>

        {filteredBusinesses.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-lg text-slate-500">
              No businesses found. Try a different search.
            </p>
          </motion.div>
        )}
      </section>

      {/* ============ EVENT HUB ============ */}
      <section id="events" className="py-20 px-6 bg-gradient-to-r from-slate-900/5 to-norton-blue/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="text-xl text-slate-600">
              Stay connected with the pulse of Norton
            </p>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <motion.div
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {events.map((event, idx) => (
              <motion.div
                key={event.id}
                className={`flex-shrink-0 w-96 snap-center rounded-2xl overflow-hidden bg-gradient-to-br ${event.color} p-8 text-white shadow-lg`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <Calendar className="w-8 h-8" />
                  <span className="text-sm font-bold backdrop-blur px-3 py-1 rounded-full bg-black/20">
                    {event.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{event.name}</h3>
                <p className="text-white/90 mb-6">{event.description}</p>

                <button className="w-full px-4 py-2 bg-white text-slate-900 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200">
                  Learn More
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ NORTON INFRASTRUCTURE GALLERY ============ */}
      <section id="gallery" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Norton <span className="gradient-text">Development</span>
          </h2>
          <p className="text-xl text-slate-600">
            Showcasing the infrastructure and growth of our community
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
          {[
            { title: 'Twinlakes Mall', category: 'Commerce' },
            { title: 'New Road Networks', category: 'Infrastructure' },
            { title: 'Community Center', category: 'Development' },
            { title: 'Business Park', category: 'Commerce' },
            { title: 'Technology Hub', category: 'Innovation' },
            { title: 'Green Spaces', category: 'Environment' },
          ].map((item, idx) => (
            <MagazineCard key={idx} delay={idx * 0.1}>
              <div className="relative group overflow-hidden bg-gradient-to-br from-norton-red/10 to-norton-blue/10 rounded-2xl p-8 min-h-64 flex flex-col justify-center">
                {/* Placeholder Image Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-norton-blue/20 to-norton-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <ImageIcon className="w-12 h-12 text-norton-gold mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm font-semibold text-norton-gold">{item.category}</p>
                </div>
              </div>
            </MagazineCard>
          ))}
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Norton Magazine</h3>
              <p className="text-slate-400">
                Celebrating the vibrant community of Norton, Zimbabwe
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                {['Stories', 'Directory', 'Events', 'Gallery'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-norton-red transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-slate-400 mb-2">📧 info@ntmag.zw</p>
              <p className="text-slate-400">📱 +263 77 XXX XXXX</p>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-slate-400 hover:text-norton-red transition-colors text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>&copy; 2026 The Norton Town Magazine. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-norton-red transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-norton-red transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
