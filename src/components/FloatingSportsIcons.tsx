'use client'

import { useEffect, useState } from 'react'

export default function FloatingSportsIcons() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Iconos SVG de fútbol
  const icons = [
    // Balón de fútbol
    {
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.5"/>
          <polygon points="12,7 14.5,10.5 12,14 9.5,10.5" fill="currentColor" opacity="0.4"/>
        </svg>
      ),
      size: 'w-8 h-8',
    },
    // Portería
    {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1.5">
          <rect x="3" y="6" width="18" height="14" rx="1" opacity="0.3"/>
          <line x1="3" y1="10" x2="21" y2="10" opacity="0.2"/>
          <line x1="8" y1="6" x2="8" y2="20" opacity="0.2"/>
          <line x1="16" y1="6" x2="16" y2="20" opacity="0.2"/>
        </svg>
      ),
      size: 'w-10 h-10',
    },
    // Trofeo
    {
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H8v2h8v-2h-3v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" opacity="0.4"/>
        </svg>
      ),
      size: 'w-7 h-7',
    },
    // Zapato de fútbol
    {
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M13.5 5.5c1 0 3 1.5 3 2.5 0 1-2 2-3 2s-3-1-3-2 2-2.5 3-2.5zm-3.5 9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm3.5-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm2 1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z" opacity="0.4"/>
          <path d="M21.5 13c0 3-2.5 5-6 5H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.5c.28 0 .5-.22.5-.5S7.78 9 7.5 9H6c-2.76 0-5 2.24-5 5s2.24 5 5 5h9.5c4.14 0 7-2.5 7-6 0-1.5-.5-2.5-1-3z" opacity="0.3"/>
        </svg>
      ),
      size: 'w-9 h-9',
    },
    // Estrella
    {
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.4"/>
        </svg>
      ),
      size: 'w-6 h-6',
    },
    // Silbato
    {
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <circle cx="17" cy="12" r="5" opacity="0.3"/>
          <path d="M2 12h10M17 7v10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2"/>
        </svg>
      ),
      size: 'w-8 h-8',
    },
    // Medalla
    {
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <circle cx="12" cy="15" r="6" opacity="0.3"/>
          <path d="M9 2l1.5 4h3L15 2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4"/>
          <path d="M12 12l1 2 2 .5-1.5 1.5.5 2-2-1-2 1 .5-2L9 14.5l2-.5 1-2z" opacity="0.5"/>
        </svg>
      ),
      size: 'w-7 h-7',
    },
    // Campo de fútbol
    {
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" strokeWidth="1">
          <rect x="2" y="4" width="20" height="16" rx="1" opacity="0.3"/>
          <line x1="12" y1="4" x2="12" y2="20" opacity="0.2"/>
          <circle cx="12" cy="12" r="3" opacity="0.3"/>
        </svg>
      ),
      size: 'w-10 h-10',
    },
  ]

  // Posiciones predefinidas para los iconos flotantes
  const positions = [
    { top: '5%', left: '3%', delay: '0s', duration: '20s' },
    { top: '15%', right: '5%', delay: '2s', duration: '25s' },
    { top: '30%', left: '8%', delay: '4s', duration: '22s' },
    { top: '45%', right: '3%', delay: '1s', duration: '28s' },
    { top: '60%', left: '5%', delay: '3s', duration: '24s' },
    { top: '75%', right: '8%', delay: '5s', duration: '26s' },
    { top: '85%', left: '10%', delay: '2s', duration: '21s' },
    { top: '20%', left: '92%', delay: '4s', duration: '23s' },
    { top: '50%', left: '2%', delay: '0s', duration: '27s' },
    { top: '35%', right: '2%', delay: '3s', duration: '19s' },
    { top: '70%', right: '12%', delay: '1s', duration: '30s' },
    { top: '10%', left: '15%', delay: '5s', duration: '18s' },
    { top: '90%', right: '6%', delay: '2s', duration: '25s' },
    { top: '40%', left: '12%', delay: '4s', duration: '22s' },
    { top: '55%', right: '10%', delay: '0s', duration: '28s' },
    { top: '25%', left: '6%', delay: '3s', duration: '24s' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {positions.map((pos, index) => {
        const icon = icons[index % icons.length]
        return (
          <div
            key={index}
            className={`absolute ${icon.size} text-pachuca-blue/10 floating-icon`}
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              animationDelay: pos.delay,
              animationDuration: pos.duration,
            }}
          >
            {icon.svg}
          </div>
        )
      })}
      
      {/* Iconos adicionales con color dorado */}
      {positions.slice(0, 8).map((pos, index) => {
        const icon = icons[(index + 3) % icons.length]
        return (
          <div
            key={`gold-${index}`}
            className={`absolute ${icon.size} text-pachuca-gold/8 floating-icon-reverse`}
            style={{
              bottom: pos.top,
              left: pos.right,
              right: pos.left,
              animationDelay: `${Number.parseFloat(pos.delay) + 1}s`,
              animationDuration: `${Number.parseFloat(pos.duration) + 5}s`,
            }}
          >
            {icon.svg}
          </div>
        )
      })}
    </div>
  )
}
