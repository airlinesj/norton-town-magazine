'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MagazineCardProps {
  children: ReactNode
  className?: string
  delay?: number
  onClick?: () => void
  glassEffect?: boolean
}

export default function MagazineCard({
  children,
  className = '',
  delay = 0,
  onClick,
  glassEffect = true,
}: MagazineCardProps) {
  return (
    <motion.div
      className={`group relative ${glassEffect ? 'glass-effect' : 'bg-white rounded-2xl border border-slate-200'} overflow-hidden cursor-pointer transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -8,
        boxShadow: glassEffect
          ? '0 25px 50px -12px rgba(225, 29, 72, 0.25)'
          : '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
      }}
      onClick={onClick}
      style={{ perspective: 1000 }}
    >
      {/* Hover Tilt Effect Background */}
      {glassEffect && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-norton-red/5 to-norton-blue/5 transition-opacity duration-300 will-change-transform"
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Animated Border Glow on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'radial-gradient(circle at center, rgba(225, 29, 72, 0.1), transparent)',
        }}
      />
    </motion.div>
  )
}
