import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useRef } from 'react'
import { Button } from '@/components/ui/8bit/button'
import { PixelFrame } from '@/components/ui/8bit/pixel-frame'
import { usePersistedPhotos } from '@/hooks/usePersistedPhoto'
import {
  Shader,
  Blob,
  FilmGrain,
  ProgressiveBlur,
  Swirl,
  WaveDistortion,
} from 'shaders/react'

export const Route = createFileRoute('/ending')({
  component: EndingPage,
})

function EndingPage(): React.ReactElement {
  const navigate = useNavigate()
  const fileInputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]
  const [photoUrls, setPhoto] = usePersistedPhotos('mmm-ending-photos', 3)

  const handleRestart = (): void => {
    navigate({ to: '/' })
  }

  const handlePhotoClick = (index: number): void => {
    fileInputRefs[index].current?.click()
  }

  const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      setPhoto(index, file)
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Warm Christmas Shader Background */}
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
        <FilmGrain animated={0} strength={0.3}>
          <ProgressiveBlur
            angle={90}
            center={{ x: 0.5, y: 0.5 }}
            falloff={0.47}
            maskType="alpha"
            intensity={1000}
          >
            <Swirl
              blend={5}
              scale={3}
              speed={0.3}
              colorA="#8b2942"
              colorB="#2d0a1a"
              colorC="#a03050"
              detail={0.5}
              maskType="alpha"
              transform={{ edges: 'transparent', scale: 1, anchorX: 0.5, anchorY: 0.5, offsetX: 0, offsetY: 0, rotation: 0 }}
              colorSpace="oklch"
              complexity={5.5}
            />
            <Blob
              colorA="#ffd700"
              colorB="#ff6b35"
              maskType="alpha"
              softness={0.43}
              blendMode="normal-oklch"
              transform={{ edges: 'transparent', scale: 1, anchorX: 0.5, anchorY: 0.5, offsetX: 0, offsetY: 0, rotation: 0 }}
              colorSpace="oklab"
              highlightX={0.11}
              highlightY={-0.01}
              highlightZ={0.13}
              deformation={0}
              highlightColor="#fffacd"
              highlightIntensity={0.35}
            />
            <WaveDistortion
              angle={360}
              edges="mirror"
              speed={3.4}
              maskType="alpha"
              strength={0.01}
              frequency={10}
              transform={{ edges: 'transparent', scale: 1, anchorX: 0.5, anchorY: 0.5, offsetX: 0, offsetY: 0, rotation: 0 }}
            />
          </ProgressiveBlur>
        </FilmGrain>
      </Shader>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-2 text-center w-full">
        {/* Bento Grid - 3 Portrait Photos (iPhone portrait ratio) */}
        <div
          className="flex gap-3 sm:gap-4 justify-center items-center w-full"
          style={{
            maxWidth: '95vw',
          }}
        >
          {[0, 1, 2].map((index) => (
            <div key={index} style={{ flex: '1 1 0', maxWidth: 'calc((70vh * 3) / 4)' }}>
              {/* Hidden file input */}
              <input
                ref={fileInputRefs[index]}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(index, e)}
                className="hidden"
              />

              {/* Photo slot - warm gold border */}
              <div
                className="relative flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-all duration-300 w-full"
                style={{
                  aspectRatio: '3/4',
                  maxHeight: '65vh',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '3px solid #ffd700',
                  boxShadow: '0 0 20px rgba(255, 215, 0, 0.4), 0 0 40px rgba(255, 107, 53, 0.2)',
                  backdropFilter: 'blur(4px)',
                }}
                onClick={() => handlePhotoClick(index)}
              >
                {photoUrls[index] ? (
                  <img
                    src={photoUrls[index]!}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffd700"
                      strokeWidth="1"
                      style={{ opacity: 0.6 }}
                    >
                      <rect x="3" y="3" width="18" height="18" rx="0" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <p
                      className="font-pixel text-xs"
                      style={{ color: '#ffd700', opacity: 0.6 }}
                    >
                      Click
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Main Message with pixel frame */}
        <PixelFrame variant="gold" className="mt-6 px-6 py-4">
          <h1
            className="font-pixel text-xl sm:text-2xl md:text-3xl"
            style={{
              color: '#fffacd',
              textShadow: '0 0 8px rgba(255, 215, 0, 0.6)',
            }}
          >
            Merry Christmas
          </h1>
          <p
            className="font-pixel text-xs sm:text-sm mt-2"
            style={{
              color: '#ffcc99',
            }}
          >
            - M & M
          </p>
        </PixelFrame>
      </div>

      {/* Restart button - bottom left */}
      <Button
        variant="default"
        size="lg"
        font="retro"
        onClick={handleRestart}
        className="fixed bottom-6 left-6 z-20 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg"
        style={{
          background: 'linear-gradient(180deg, #00cccc 0%, #00aaaa 50%, #008888 100%)',
          boxShadow: '0 0 15px #00cccc, 0 0 30px #00cccc50, 0 6px 0 #006666',
          border: '2px solid #00ffff',
        }}
      >
        RESTART
      </Button>
    </div>
  )
}
