import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Snowfall } from '@/components/Snowfall'
import { Button } from '@/components/ui/8bit/button'
import { PixelSanta, PixelSnowman } from '@/components/icons'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

// Pixel Art Christmas Tree - Beautiful layered design with star on top
function PixelTree({ className, style }: { className?: string; style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg viewBox="0 0 64 72" className={className} style={{ ...style, imageRendering: 'pixelated' }}>
      {/* Star on top - 5-pointed pixel star */}
      {/* Top point */}
      <rect x="30" y="0" width="4" height="2" fill="#ffff00" style={{ filter: 'drop-shadow(0 0 6px #ffff00)' }} />
      {/* Upper middle */}
      <rect x="28" y="2" width="8" height="2" fill="#ffd700" />
      {/* Horizontal bar with side points */}
      <rect x="24" y="4" width="16" height="2" fill="#ffff00" style={{ filter: 'drop-shadow(0 0 8px #ffff00)' }} />
      {/* Lower middle */}
      <rect x="26" y="6" width="12" height="2" fill="#ffd700" />
      {/* Bottom two points */}
      <rect x="26" y="8" width="4" height="2" fill="#ffff00" />
      <rect x="34" y="8" width="4" height="2" fill="#ffff00" />

      {/* Tree Layer 1 - Top */}
      <rect x="28" y="8" width="8" height="4" fill="#2ecc40" />
      <rect x="26" y="12" width="12" height="4" fill="#27ae35" />
      <rect x="24" y="16" width="16" height="4" fill="#229a2e" />

      {/* Tree Layer 2 - Middle */}
      <rect x="22" y="20" width="20" height="4" fill="#2ecc40" />
      <rect x="20" y="24" width="24" height="4" fill="#27ae35" />
      <rect x="18" y="28" width="28" height="4" fill="#229a2e" />

      {/* Tree Layer 3 - Bottom */}
      <rect x="16" y="32" width="32" height="4" fill="#2ecc40" />
      <rect x="14" y="36" width="36" height="4" fill="#27ae35" />
      <rect x="12" y="40" width="40" height="4" fill="#229a2e" />
      <rect x="10" y="44" width="44" height="4" fill="#1e8826" />
      <rect x="8" y="48" width="48" height="4" fill="#1a7520" />

      {/* Trunk */}
      <rect x="26" y="52" width="12" height="12" fill="#8b4513" />
      <rect x="28" y="52" width="8" height="12" fill="#a0522d" />
      <rect x="30" y="52" width="4" height="12" fill="#b8763e" />

      {/* Trunk base / pot */}
      <rect x="22" y="64" width="20" height="4" fill="#5a3510" />
      <rect x="24" y="68" width="16" height="4" fill="#4a2510" />

      {/* Ornaments - colorful balls */}
      <rect x="30" y="10" width="4" height="4" fill="#ff0066" />
      <rect x="24" y="14" width="4" height="4" fill="#00ffff" />
      <rect x="34" y="14" width="4" height="4" fill="#ffff00" />

      <rect x="22" y="22" width="4" height="4" fill="#ff6600" />
      <rect x="30" y="22" width="4" height="4" fill="#ff0066" />
      <rect x="38" y="22" width="4" height="4" fill="#00ffff" />

      <rect x="18" y="30" width="4" height="4" fill="#ffff00" />
      <rect x="26" y="30" width="4" height="4" fill="#00ff66" />
      <rect x="34" y="30" width="4" height="4" fill="#ff66cc" />
      <rect x="42" y="30" width="4" height="4" fill="#ff0066" />

      <rect x="14" y="38" width="4" height="4" fill="#00ffff" />
      <rect x="22" y="38" width="4" height="4" fill="#ffff00" />
      <rect x="30" y="38" width="4" height="4" fill="#ff6600" />
      <rect x="38" y="38" width="4" height="4" fill="#00ffff" />
      <rect x="46" y="38" width="4" height="4" fill="#ff66cc" />

      <rect x="12" y="46" width="4" height="4" fill="#ff0066" />
      <rect x="20" y="46" width="4" height="4" fill="#00ff66" />
      <rect x="28" y="46" width="4" height="4" fill="#ffff00" />
      <rect x="36" y="46" width="4" height="4" fill="#00ffff" />
      <rect x="44" y="46" width="4" height="4" fill="#ff6600" />
      <rect x="52" y="46" width="4" height="4" fill="#ff66cc" />
    </svg>
  )
}

// Pixel Art Gift Box
function PixelGift({ color, ribbonColor, className, style }: {
  color: string
  ribbonColor: string
  className?: string
  style?: React.CSSProperties
}): React.ReactElement {
  return (
    <svg viewBox="0 0 16 16" className={className} style={{ ...style, imageRendering: 'pixelated' }}>
      <rect x="2" y="0" width="4" height="2" fill={ribbonColor} />
      <rect x="10" y="0" width="4" height="2" fill={ribbonColor} />
      <rect x="4" y="2" width="2" height="2" fill={ribbonColor} />
      <rect x="10" y="2" width="2" height="2" fill={ribbonColor} />
      <rect x="6" y="0" width="4" height="4" fill={ribbonColor} />
      <rect x="0" y="4" width="16" height="12" fill={color} />
      <rect x="6" y="4" width="4" height="12" fill={ribbonColor} />
      <rect x="2" y="6" width="2" height="2" fill="rgba(255,255,255,0.4)" />
    </svg>
  )
}

// Pixel Candy Cane
function PixelCandyCane({ className, style }: { className?: string; style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg viewBox="0 0 12 24" className={className} style={{ ...style, imageRendering: 'pixelated' }}>
      <rect x="4" y="0" width="4" height="4" fill="#ffffff" />
      <rect x="8" y="0" width="4" height="4" fill="#cc0000" />
      <rect x="8" y="4" width="4" height="4" fill="#ffffff" />
      <rect x="4" y="4" width="4" height="4" fill="#cc0000" />
      <rect x="0" y="4" width="4" height="4" fill="#ffffff" />
      <rect x="0" y="8" width="4" height="4" fill="#cc0000" />
      <rect x="4" y="8" width="4" height="4" fill="#ffffff" />
      <rect x="4" y="12" width="4" height="4" fill="#cc0000" />
      <rect x="4" y="16" width="4" height="4" fill="#ffffff" />
      <rect x="4" y="20" width="4" height="4" fill="#cc0000" />
    </svg>
  )
}

// Pixel Star
function PixelStar({ className, style }: { className?: string; style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg viewBox="0 0 16 16" className={className} style={{ ...style, imageRendering: 'pixelated' }} fill="currentColor">
      <rect x="6" y="0" width="4" height="4" />
      <rect x="0" y="4" width="16" height="4" />
      <rect x="2" y="8" width="12" height="2" />
      <rect x="4" y="10" width="8" height="2" />
      <rect x="2" y="12" width="4" height="4" />
      <rect x="10" y="12" width="4" height="4" />
    </svg>
  )
}

// Pixel Bell
function PixelBell({ className, style }: { className?: string; style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg viewBox="0 0 16 20" className={className} style={{ ...style, imageRendering: 'pixelated' }}>
      <rect x="6" y="0" width="4" height="2" fill="#ffd700" />
      <rect x="4" y="2" width="8" height="2" fill="#ffd700" />
      <rect x="2" y="4" width="12" height="4" fill="#ffd700" />
      <rect x="0" y="8" width="16" height="6" fill="#ffd700" />
      <rect x="0" y="14" width="16" height="2" fill="#ffaa00" />
      <rect x="6" y="16" width="4" height="4" fill="#cc0000" />
    </svg>
  )
}

// Pixel Treasure Chest
function PixelChest({ className, style }: { className?: string; style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg viewBox="0 0 20 16" className={className} style={{ ...style, imageRendering: 'pixelated' }}>
      {/* Chest body */}
      <rect x="0" y="6" width="20" height="10" fill="#8b4513" />
      <rect x="2" y="8" width="16" height="6" fill="#a0522d" />
      {/* Chest lid */}
      <rect x="0" y="2" width="20" height="6" fill="#a0522d" />
      <rect x="2" y="0" width="16" height="4" fill="#cd853f" />
      {/* Gold trim */}
      <rect x="8" y="4" width="4" height="4" fill="#ffd700" style={{ filter: 'drop-shadow(0 0 3px #ffd700)' }} />
      <rect x="0" y="6" width="20" height="2" fill="#ffd700" />
      {/* Keyhole */}
      <rect x="9" y="10" width="2" height="4" fill="#333" />
    </svg>
  )
}

// Pixel Potion Bottle
function PixelPotion({ color, className, style }: { color: string; className?: string; style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg viewBox="0 0 10 16" className={className} style={{ ...style, imageRendering: 'pixelated' }}>
      {/* Bottle neck */}
      <rect x="3" y="0" width="4" height="2" fill="#aaa" />
      <rect x="4" y="2" width="2" height="2" fill="#888" />
      {/* Bottle body */}
      <rect x="2" y="4" width="6" height="2" fill="#ddd" />
      <rect x="0" y="6" width="10" height="10" fill={color} style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
      {/* Highlight */}
      <rect x="2" y="8" width="2" height="4" fill="rgba(255,255,255,0.4)" />
    </svg>
  )
}

// Pixel Ornament Ball
function PixelOrnament({ color, className, style }: { color: string; className?: string; style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg viewBox="0 0 10 12" className={className} style={{ ...style, imageRendering: 'pixelated' }}>
      {/* Hook */}
      <rect x="4" y="0" width="2" height="2" fill="#ffd700" />
      {/* Ball */}
      <rect x="2" y="2" width="6" height="2" fill={color} />
      <rect x="0" y="4" width="10" height="6" fill={color} style={{ filter: `drop-shadow(0 0 3px ${color})` }} />
      <rect x="2" y="10" width="6" height="2" fill={color} />
      {/* Highlight */}
      <rect x="2" y="4" width="2" height="2" fill="rgba(255,255,255,0.5)" />
    </svg>
  )
}

// Pixel Snowball
function PixelSnowball({ className, style }: { className?: string; style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg viewBox="0 0 12 12" className={className} style={{ ...style, imageRendering: 'pixelated' }}>
      <rect x="2" y="0" width="8" height="2" fill="#ffffff" />
      <rect x="0" y="2" width="12" height="8" fill="#ffffff" style={{ filter: 'drop-shadow(0 0 4px rgba(200,230,255,0.8))' }} />
      <rect x="2" y="10" width="8" height="2" fill="#e8e8e8" />
      {/* Highlight */}
      <rect x="2" y="2" width="4" height="4" fill="rgba(255,255,255,0.9)" />
      <rect x="2" y="2" width="2" height="2" fill="#ffffff" style={{ filter: 'drop-shadow(0 0 2px #ffffff)' }} />
      {/* Shadow */}
      <rect x="6" y="6" width="4" height="4" fill="#d8d8d8" />
    </svg>
  )
}

// Pixel Snow Pile
function PixelSnowPile({ className, style }: { className?: string; style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg viewBox="0 0 24 12" className={className} style={{ ...style, imageRendering: 'pixelated' }}>
      {/* Main snow pile */}
      <rect x="4" y="4" width="16" height="8" fill="#ffffff" />
      <rect x="2" y="6" width="20" height="6" fill="#f0f0f0" />
      <rect x="0" y="8" width="24" height="4" fill="#e8e8e8" />
      {/* Snow bumps on top */}
      <rect x="6" y="2" width="4" height="4" fill="#ffffff" style={{ filter: 'drop-shadow(0 0 3px rgba(200,230,255,0.6))' }} />
      <rect x="14" y="2" width="4" height="4" fill="#ffffff" style={{ filter: 'drop-shadow(0 0 3px rgba(200,230,255,0.6))' }} />
      <rect x="10" y="0" width="4" height="6" fill="#ffffff" style={{ filter: 'drop-shadow(0 0 3px rgba(200,230,255,0.6))' }} />
      {/* Highlight */}
      <rect x="8" y="4" width="2" height="2" fill="#ffffff" />
    </svg>
  )
}

// Pixel Christmas Stocking
function PixelStocking({ color, className, style }: { color: string; className?: string; style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg viewBox="0 0 16 24" className={className} style={{ ...style, imageRendering: 'pixelated' }}>
      {/* White cuff */}
      <rect x="2" y="0" width="12" height="6" fill="#ffffff" />
      <rect x="4" y="2" width="8" height="2" fill="#f8f8f8" />
      {/* Main stocking body */}
      <rect x="2" y="6" width="12" height="10" fill={color} />
      <rect x="4" y="8" width="2" height="4" fill="rgba(255,255,255,0.3)" />
      {/* Foot part */}
      <rect x="0" y="16" width="16" height="6" fill={color} />
      <rect x="0" y="22" width="12" height="2" fill={color} />
      {/* Toe */}
      <rect x="12" y="18" width="4" height="4" fill={color} />
      {/* Heel shadow */}
      <rect x="2" y="18" width="4" height="4" fill="rgba(0,0,0,0.15)" />
    </svg>
  )
}

// Pixel Mini Snowman - cute small snowman with earmuffs and green scarf
function PixelMiniSnowman({ className, style }: { className?: string; style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg viewBox="0 0 24 32" className={className} style={{ ...style, imageRendering: 'pixelated' }}>
      {/* Earmuff band */}
      <rect x="6" y="0" width="12" height="2" fill="#ff66cc" />
      {/* Left earmuff */}
      <rect x="2" y="2" width="4" height="6" fill="#ff66cc" />
      <rect x="4" y="4" width="2" height="2" fill="#ff99dd" />
      {/* Right earmuff */}
      <rect x="18" y="2" width="4" height="6" fill="#ff66cc" />
      <rect x="18" y="4" width="2" height="2" fill="#ff99dd" />

      {/* Head */}
      <rect x="6" y="2" width="12" height="10" fill="#ffffff" />
      <rect x="4" y="4" width="2" height="6" fill="#ffffff" />
      <rect x="18" y="4" width="2" height="6" fill="#ffffff" />

      {/* Eyes */}
      <rect x="8" y="6" width="2" height="2" fill="#000000" />
      <rect x="14" y="6" width="2" height="2" fill="#000000" />

      {/* Carrot nose */}
      <rect x="11" y="8" width="2" height="2" fill="#ff6600" />
      <rect x="13" y="8" width="2" height="2" fill="#ff8833" />

      {/* Smile */}
      <rect x="8" y="10" width="2" height="2" fill="#333333" />
      <rect x="10" y="11" width="4" height="1" fill="#333333" />
      <rect x="14" y="10" width="2" height="2" fill="#333333" />

      {/* Green scarf */}
      <rect x="4" y="12" width="16" height="4" fill="#00cc66" />
      <rect x="2" y="14" width="4" height="6" fill="#00cc66" />
      <rect x="2" y="18" width="6" height="2" fill="#00cc66" />

      {/* Body */}
      <rect x="4" y="16" width="16" height="12" fill="#ffffff" />
      <rect x="2" y="18" width="2" height="8" fill="#ffffff" />
      <rect x="20" y="18" width="2" height="8" fill="#ffffff" />

      {/* Buttons */}
      <rect x="10" y="20" width="4" height="2" fill="#333333" />
      <rect x="10" y="24" width="4" height="2" fill="#333333" />

      {/* Stick arms */}
      <rect x="0" y="20" width="2" height="2" fill="#8b4513" />
      <rect x="22" y="20" width="2" height="2" fill="#8b4513" />
    </svg>
  )
}

// Pixel String Lights
function PixelLights({ className }: { className?: string }): React.ReactElement {
  const colors = ['#ff0066', '#00ffff', '#ffff00', '#00ff66', '#ff66cc', '#ff9900']
  return (
    <svg viewBox="0 0 200 20" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Wire */}
      <rect x="0" y="8" width="200" height="2" fill="#333" />
      {/* Bulbs */}
      {colors.map((color, i) => (
        <g key={i}>
          <rect x={10 + i * 32} y="10" width="4" height="4" fill="#333" />
          <rect x={8 + i * 32} y="14" width="8" height="6" fill={color} style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
        </g>
      ))}
    </svg>
  )
}

// Pixel Reindeer - standing with red nose
function PixelReindeer({ className, style }: { className?: string; style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg viewBox="0 0 24 32" className={className} style={{ ...style, imageRendering: 'pixelated' }}>
      {/* Antlers */}
      <rect x="2" y="0" width="2" height="6" fill="#8b4513" />
      <rect x="0" y="2" width="2" height="2" fill="#8b4513" />
      <rect x="4" y="2" width="2" height="2" fill="#8b4513" />
      <rect x="20" y="0" width="2" height="6" fill="#8b4513" />
      <rect x="18" y="2" width="2" height="2" fill="#8b4513" />
      <rect x="22" y="2" width="2" height="2" fill="#8b4513" />

      {/* Head */}
      <rect x="6" y="4" width="12" height="10" fill="#8b6914" />

      {/* Ears */}
      <rect x="4" y="6" width="2" height="4" fill="#8b6914" />
      <rect x="18" y="6" width="2" height="4" fill="#8b6914" />

      {/* Eyes */}
      <rect x="8" y="8" width="2" height="2" fill="#000" />
      <rect x="14" y="8" width="2" height="2" fill="#000" />

      {/* Nose */}
      <rect x="10" y="12" width="4" height="4" fill="#ff0000" style={{ filter: 'drop-shadow(0 0 4px #ff0000)' }} />

      {/* Body */}
      <rect x="4" y="16" width="16" height="12" fill="#8b6914" />

      {/* Legs */}
      <rect x="6" y="28" width="4" height="4" fill="#8b6914" />
      <rect x="14" y="28" width="4" height="4" fill="#8b6914" />
    </svg>
  )
}

// Pixel Baby Reindeer - smaller, cuter, with bell collar
function PixelBabyReindeer({ className, style }: { className?: string; style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg viewBox="0 0 20 24" className={className} style={{ ...style, imageRendering: 'pixelated' }}>
      {/* Small antlers */}
      <rect x="2" y="0" width="2" height="4" fill="#a0522d" />
      <rect x="0" y="2" width="2" height="2" fill="#a0522d" />
      <rect x="16" y="0" width="2" height="4" fill="#a0522d" />
      <rect x="18" y="2" width="2" height="2" fill="#a0522d" />

      {/* Head - rounder, cuter */}
      <rect x="4" y="2" width="12" height="10" fill="#c4a35a" />
      <rect x="2" y="4" width="2" height="6" fill="#c4a35a" />
      <rect x="16" y="4" width="2" height="6" fill="#c4a35a" />

      {/* Big cute eyes */}
      <rect x="6" y="6" width="2" height="2" fill="#000" />
      <rect x="12" y="6" width="2" height="2" fill="#000" />
      <rect x="6" y="6" width="1" height="1" fill="#fff" />
      <rect x="12" y="6" width="1" height="1" fill="#fff" />

      {/* Small red nose */}
      <rect x="8" y="9" width="4" height="3" fill="#ff0000" style={{ filter: 'drop-shadow(0 0 3px #ff0000)' }} />

      {/* Bell collar */}
      <rect x="4" y="12" width="12" height="2" fill="#cc0000" />
      <rect x="8" y="14" width="4" height="2" fill="#ffd700" style={{ filter: 'drop-shadow(0 0 2px #ffd700)' }} />

      {/* Body */}
      <rect x="4" y="14" width="12" height="8" fill="#c4a35a" />

      {/* Short legs */}
      <rect x="4" y="22" width="4" height="2" fill="#c4a35a" />
      <rect x="12" y="22" width="4" height="2" fill="#c4a35a" />
    </svg>
  )
}

function LandingPage(): React.ReactElement {
  const navigate = useNavigate()

  const handleStart = (): void => {
    navigate({ to: '/cat' })
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d0d1a]">
      {/* Snowfall background */}
      <Snowfall count={80} />

      {/* Subtle corner stars */}
      <PixelStar className="absolute top-16 left-6 w-4 h-4 text-yellow-400 animate-twinkle opacity-60" style={{ filter: 'drop-shadow(0 0 4px #ffff00)' }} />
      <PixelStar className="absolute top-24 right-8 w-3 h-3 text-cyan-400 animate-twinkle opacity-50" style={{ animationDelay: '0.5s', filter: 'drop-shadow(0 0 4px #00ffff)' }} />
      <PixelStar className="absolute bottom-24 left-10 w-3 h-3 text-pink-400 animate-twinkle opacity-50" style={{ animationDelay: '0.7s', filter: 'drop-shadow(0 0 4px #ff66cc)' }} />
      <PixelStar className="absolute bottom-32 right-12 w-4 h-4 text-yellow-400 animate-twinkle opacity-60" style={{ animationDelay: '1s', filter: 'drop-shadow(0 0 4px #ffff00)' }} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 px-4 text-center">

        {/* Neon Pixel Title - MEGA SIZE */}
        <div className="space-y-2">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-pixel tracking-wider"
            style={{
              color: '#00ffff',
              textShadow: `
                0 0 10px #00ffff,
                0 0 20px #00ffff,
                0 0 40px #00ffff,
                0 0 60px #0099ff,
                0 0 80px #0066ff
              `,
            }}
          >
            MMM
          </h1>
          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-pixel"
            style={{
              color: '#ff66cc',
              textShadow: `
                0 0 10px #ff66cc,
                0 0 20px #ff66cc,
                0 0 40px #ff66cc,
                0 0 60px #ff00aa,
                0 0 80px #cc0088
              `,
            }}
          >
            Christmas
          </h2>
        </div>

        {/* Center scene - Characters + Tree + Items on glowing platform - MAXIMUM VISUAL IMPACT */}
        <div className="relative flex flex-col items-center mt-4">
          {/* Scene container - characters and tree */}
          <div className="relative flex items-end justify-center gap-0 mb-[-6px]">
            {/* Santa on far left - HUGE */}
            <div className="flex flex-col items-center z-10 -mr-4">
              <PixelSanta className="w-24 h-36 sm:w-32 sm:h-48" style={{ filter: 'drop-shadow(0 0 12px rgba(255,50,50,0.7)) drop-shadow(0 0 20px rgba(255,0,0,0.4))' }} />
            </div>

            {/* Left items group - baby reindeer and items on ground */}
            <div className="relative w-28 sm:w-36 h-28 sm:h-36 z-10">
              <PixelBabyReindeer className="absolute bottom-0 left-0 w-10 h-12 sm:w-12 sm:h-14 z-30" style={{ filter: 'drop-shadow(0 0 4px rgba(196,163,90,0.5))' }} />
              <PixelChest className="absolute bottom-0 left-10 w-12 h-10 sm:w-14 sm:h-12 z-20" style={{ filter: 'drop-shadow(0 0 6px #ffd700)' }} />
              <PixelGift color="#ff9900" ribbonColor="#ffffff" className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 z-30" />
              <PixelSnowPile className="absolute bottom-0 left-8 w-12 h-6 sm:w-14 sm:h-7 z-0" />
            </div>

            {/* Center Tree - MASSIVE - positioned on platform */}
            <div className="relative z-20 flex flex-col items-center mb-[-14px]">
              <PixelTree className="w-40 h-48 sm:w-52 sm:h-64" style={{ filter: 'drop-shadow(0 0 10px rgba(34,238,34,0.5)) drop-shadow(0 0 20px rgba(0,200,0,0.3))' }} />
              {/* Gifts at tree base - organic overlapping, closer to tree */}
              <div className="relative -mt-14 w-28 sm:w-36 h-10 sm:h-12">
                <PixelGift color="#00cc66" ribbonColor="#ff66cc" className="absolute bottom-0 left-2 w-8 h-8 sm:w-10 sm:h-10 z-30" />
                <PixelGift color="#ffcc00" ribbonColor="#cc0000" className="absolute bottom-1 left-0 w-5 h-5 sm:w-6 sm:h-6 z-20" />
                <PixelGift color="#ff3399" ribbonColor="#00ffcc" className="absolute bottom-0 right-2 w-7 h-7 sm:w-9 sm:h-9 z-30" />
                <PixelGift color="#0099ff" ribbonColor="#ffff00" className="absolute bottom-2 right-0 w-4 h-4 sm:w-5 sm:h-5 z-20" />
                <PixelSnowball className="absolute bottom-0 left-10 w-3 h-3 sm:w-4 sm:h-4 z-10" />
                <PixelSnowPile className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-5 sm:w-14 sm:h-6 z-0" />
              </div>
            </div>

            {/* Right items group - mini snowman and reindeer with gifts */}
            <div className="relative w-32 sm:w-40 h-28 sm:h-36 z-10">
              <PixelMiniSnowman className="absolute bottom-0 left-0 w-12 h-16 sm:w-14 sm:h-20 z-40" style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.6))' }} />
              <PixelReindeer className="absolute bottom-0 left-10 w-10 h-14 sm:w-12 sm:h-16 z-30" style={{ filter: 'drop-shadow(0 0 6px rgba(255,100,100,0.5))' }} />
              <PixelGift color="#ff3366" ribbonColor="#ffcc00" className="absolute bottom-0 right-4 w-8 h-8 sm:w-10 sm:h-10 z-20" />
              <PixelGift color="#6633ff" ribbonColor="#ffff00" className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 z-20" />
              <PixelSnowPile className="absolute bottom-0 right-8 w-8 h-4 sm:w-10 sm:h-5 z-0" />
            </div>

            {/* Snowman on far right - HUGE */}
            <div className="flex flex-col items-center z-10 -ml-4">
              <PixelSnowman className="w-24 h-36 sm:w-32 sm:h-48" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' }} />
            </div>
          </div>

          {/* MEGA glowing ice platform with depth - WIDER */}
          <div
            className="relative w-[520px] sm:w-[720px] h-10 sm:h-12 -mt-1"
            style={{
              background: 'linear-gradient(180deg, #00eeff 0%, #00aaff 30%, #0066cc 70%, #003366 100%)',
              boxShadow: '0 0 20px #00ccff, 0 0 40px #00ccff, 0 0 60px #0099ff, 0 0 80px #0066ff, 0 8px 0 #002244',
              imageRendering: 'pixelated',
            }}
          >
            {/* Platform ice texture lines */}
            <div
              className="absolute top-2 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[2px]"
              style={{ background: 'rgba(255,255,255,0.2)' }}
            />
            <div
              className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-[480px] sm:w-[680px] h-[2px]"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            />
            <div
              className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[460px] sm:w-[660px] h-[2px]"
              style={{ background: 'rgba(0,0,0,0.3)' }}
            />
            {/* Platform top edge MEGA glow */}
            <div
              className="absolute -top-2 left-0 w-full h-2"
              style={{
                background: 'linear-gradient(90deg, transparent, #00ffff, #88ffff, #00ffff, transparent)',
                boxShadow: '0 0 15px #00ffff, 0 0 30px #00ffff, 0 0 45px #00ffff, 0 0 60px #00ffff',
              }}
            />
          </div>
        </div>

        {/* Subtitle with yellow glow - BIGGER */}
        <p
          className="text-xs sm:text-sm md:text-base font-pixel tracking-wide mt-18"
          style={{
            color: '#ffff00',
            textShadow: '0 0 8px #ffff00, 0 0 16px #ffcc00, 0 0 24px #ff9900',
          }}
        >
          A SPECIAL GIFT FOR YOU
        </p>

        {/* Start button - MEGA */}
        <Button
          variant="default"
          size="lg"
          font="retro"
          onClick={handleStart}
          className="mt-4 px-14 sm:px-20 py-4 sm:py-5 text-lg sm:text-xl"
          style={{
            background: 'linear-gradient(180deg, #ff4477 0%, #ff3366 50%, #cc0044 100%)',
            boxShadow: '0 0 15px #ff3366, 0 0 30px #ff3366, 0 0 45px #ff336650, 0 6px 0 #990033',
            border: '2px solid #ff6699',
          }}
        >
          START
        </Button>
      </div>

    </div>
  )
}
