import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/8bit/button'
import {
  Shader,
  Ascii,
  FilmGrain,
  ImageTexture,
  LinearGradient,
  WaveDistortion,
} from 'shaders/react'

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
    <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Shader Background - Full Screen */}
      <Shader
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
        }}
      >
        <LinearGradient
          colorA="#940320"
          colorB="#082400"
          angle={70}
          maskType="alpha"
          center={{ x: 0.5, y: 0.5 }}
          transform={{ offsetX: 0, offsetY: 0, rotation: 0, scale: 1, anchorX: 0.5, anchorY: 0.5, edges: 'transparent' }}
        />
        <ImageTexture
          url="https://rgqpsgmnzmniyzelfbfx.supabase.co/storage/v1/object/public/user-uploaded-images/user_33kMNZeyYNC9dfiqvewNDBmfp9P/7zxKS6TnrrGO.png"
          opacity={0.05}
          maskType="alpha"
          blendMode="linearDodge"
        />
        <Ascii
          characters="✦★*+●○✦★*+●○"
          cellSize={8}
          fontFamily="Space Mono"
          maskType="alpha"
          transform={{ offsetX: 0, offsetY: 0, rotation: 0, scale: 1, anchorX: 0.5, anchorY: 0.5, edges: 'transparent' }}
        >
          <ImageTexture
            url="https://rgqpsgmnzmniyzelfbfx.supabase.co/storage/v1/object/public/user-uploaded-images/user_371SSmuyvPIZMnezOmT35Vi0hiw/nqb0FCxf95me.png"
            objectFit="contain"
            maskType="alpha"
            transform={{ offsetX: 0, offsetY: 0, rotation: 0, scale: 1, anchorX: 0.5, anchorY: 0.5, edges: 'transparent' }}
          />
          <WaveDistortion
            angle={180}
            edges="mirror"
            speed={1.5}
            maskType="alpha"
            strength={0.02}
            waveType="square"
            frequency={1.9}
          />
        </Ascii>
        <FilmGrain
          maskType="alpha"
          strength={0.03}
        />
      </Shader>

      {/* Title - Top Left Corner with dark mask */}
      <div
        className="fixed top-6 left-6 z-10 flex flex-col gap-0 px-5 py-4 rounded-sm"
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-pixel tracking-wider animate-glow-cyan"
          style={{
            color: '#ffffff',
            textShadow: `
              0 0 10px #00ffff,
              0 0 20px #00ffff,
              0 0 40px #00ffff,
              0 0 60px #00ffff,
              4px 4px 0 #006666
            `,
          }}
        >
          MMM
        </h1>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-pixel animate-glow-pink"
          style={{
            color: '#ffffff',
            textShadow: `
              0 0 10px #ff66cc,
              0 0 20px #ff66cc,
              0 0 40px #ff66cc,
              3px 3px 0 #660033
            `,
          }}
        >
          Christmas
        </h2>
        <p
          className="text-xs sm:text-sm font-pixel tracking-wider mt-2 animate-glow-gold"
          style={{
            color: '#ffd700',
            textShadow: '0 0 8px #ffd700, 0 0 16px #ffd700',
          }}
        >
          ✦ 2025 ✦
        </p>
      </div>

      {/* Subtitle - Bottom Left */}
      <p
        className="fixed bottom-8 left-6 z-10 text-xs sm:text-sm font-pixel tracking-wide px-3 py-2 rounded-sm"
        style={{
          color: '#ffd700',
          textShadow: '0 0 8px #ffd700, 0 0 16px #ffcc00, 2px 2px 0 #553300',
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4px)',
        }}
      >
        A SPECIAL GIFT FOR YOU
      </p>

      {/* Start button - Bottom Right */}
      <Button
        variant="default"
        size="lg"
        font="retro"
        onClick={handleStart}
        className="fixed bottom-6 right-6 z-10 px-10 sm:px-14 py-3 sm:py-4 text-base sm:text-lg"
        style={{
          background: 'linear-gradient(180deg, #ff4477 0%, #ff3366 50%, #cc0044 100%)',
          boxShadow: '0 0 15px #ff3366, 0 0 30px #ff3366, 0 0 45px #ff336650, 0 6px 0 #990033',
          border: '2px solid #ff6699',
        }}
      >
        START
      </Button>
    </div>
  )
}
