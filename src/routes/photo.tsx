import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useRef } from 'react'
import { Button } from '@/components/ui/8bit/button'
import { PixelFrame } from '@/components/ui/8bit/pixel-frame'
import { usePersistedPhoto } from '@/hooks/usePersistedPhoto'
import {
  Shader,
  Ascii,
  FilmGrain,
  Group,
  SineWave,
  SolidColor,
} from 'shaders/react'

export const Route = createFileRoute('/photo')({
  component: PhotoPage,
})

function PhotoPage(): React.ReactElement {
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [photoUrl, setPhoto] = usePersistedPhoto('mmm-photo')

  const handleNext = (): void => {
    navigate({ to: '/ending' })
  }

  const handlePhotoClick = (): void => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      setPhoto(file)
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Shader Background - Warm Wave */}
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
        <SolidColor
          color="#1a0f2e"
          maskType="alpha"
          transform={{ offsetX: 0, offsetY: 0, rotation: 0, scale: 1.01, anchorX: 0.5, anchorY: 0.5, edges: 'transparent' }}
        />
        <Group
          maskType="alpha"
          blendMode="normal-oklch"
          transform={{ edges: 'transparent', scale: 1, anchorX: 0.5, anchorY: 0.5, offsetX: 0, offsetY: 0, rotation: 0 }}
        >
          <SolidColor
            color="#ff6b35"
            visible={true}
            maskType="alpha"
            transform={{ edges: 'transparent', scale: 1, anchorX: 0.5, anchorY: 0.5, offsetX: 0, offsetY: 0, rotation: 0 }}
          />
          <SineWave
            id="waveMask"
            angle={288}
            color="#ffd700"
            visible={true}
            maskType="alpha"
            position={{ x: 0.2, y: 0.15 }}
            softness={0.52}
            amplitude={0.42}
            frequency={0.51}
            thickness={0.99}
            transform={{ edges: 'transparent', scale: 1, anchorX: 0.5, anchorY: 0.5, offsetX: 0, offsetY: 0, rotation: 0 }}
          />
          <Ascii
            characters="〜*"
            cellSize={21}
            fontFamily="Space Mono"
            maskType="alpha"
            visible={true}
            maskSource="waveMask"
            transform={{ offsetX: 0, offsetY: 0, rotation: 0, scale: 1, anchorX: 0.5, anchorY: 0.5, edges: 'transparent' }}
          />
        </Group>
        <FilmGrain
          maskType="alpha"
          strength={0.12}
          transform={{ edges: 'transparent', scale: 1, anchorX: 0.5, anchorY: 0.5, offsetX: 0, offsetY: 0, rotation: 0 }}
        />
      </Shader>

      {/* My Cat 1 - bottom left decoration (facing right) */}
      <img
        src="/my-cat.png"
        alt="My cat"
        className="fixed bottom-0 left-0 z-10 w-56 sm:w-72 md:w-80 opacity-95"
        style={{
          filter: 'drop-shadow(0 0 15px rgba(255,102,204,0.6))',
        }}
      />

      {/* My Cat 2 - bottom right decoration (facing left) */}
      <img
        src="/my-cat-2.png"
        alt="My cat 2"
        className="fixed bottom-0 right-0 z-10 w-56 sm:w-72 md:w-80 opacity-95"
        style={{
          filter: 'drop-shadow(0 0 15px rgba(0,255,255,0.6))',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 text-center">
        {/* Title with pixel frame */}
        <PixelFrame variant="gold" className="px-6 py-3">
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-pixel"
            style={{
              color: '#fffacd',
              textShadow: '0 0 8px rgba(255, 215, 0, 0.6)',
            }}
          >
            Photo Time
          </h1>
        </PixelFrame>

        {/* Photo Frame - Warm Gold Style */}
        <div
          className="relative"
          style={{
            padding: '6px',
            background: 'linear-gradient(135deg, #ffd700 0%, #ff6b35 100%)',
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 107, 53, 0.3)',
            width: 'min(50vw, calc((70vh * 3) / 4))',
          }}
        >
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Clickable photo area */}
          <div
            className="relative flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity w-full"
            style={{
              aspectRatio: '3/4',
              background: '#1a1a2e',
            }}
            onClick={handlePhotoClick}
          >
            {photoUrl ? (
              <img
                src={photoUrl}
                alt="Our photo together"
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 text-snow-white/50">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="opacity-40"
                >
                  <rect x="3" y="3" width="18" height="18" rx="0" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p className="font-pixel text-xs">Click to upload photo</p>
              </div>
            )}
          </div>
        </div>

        {/* Caption with pixel frame */}
        <PixelFrame variant="gold" className="px-4 py-2">
          <p
            className="font-pixel text-xs sm:text-sm"
            style={{
              color: '#ffcc99',
            }}
          >
            - 2025 -
          </p>
        </PixelFrame>

      </div>

      {/* Next button - bottom right */}
      <Button
        variant="default"
        size="lg"
        font="retro"
        onClick={handleNext}
        className="fixed bottom-6 right-6 z-20 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg"
        style={{
          background: 'linear-gradient(180deg, #ff4477 0%, #ff3366 50%, #cc0044 100%)',
          boxShadow: '0 0 15px #ff3366, 0 0 30px #ff336650, 0 6px 0 #990033',
          border: '2px solid #ff6699',
        }}
      >
        NEXT
      </Button>
    </div>
  )
}
