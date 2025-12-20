import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/8bit/button'
import { PixelFrame } from '@/components/ui/8bit/pixel-frame'
import {
  Shader,
  Dither,
  LinearGradient,
  SineWave,
} from 'shaders/react'

export const Route = createFileRoute('/cat')({
  component: CatPage,
})

function CatPage(): React.ReactElement {
  const navigate = useNavigate()

  const handleNext = (): void => {
    navigate({ to: '/photo' })
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Shader Background - Warm Pink/Magenta Gradient */}
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
          end={{ x: 0.895, y: 0.82 }}
          angle={180}
          edges="mirror"
          start={{ x: 0.236, y: 0.026 }}
          center={{ x: 0.5, y: 0.5 }}
          colorA="#2d0a1a"
          colorB="#8b2942"
          endColor="#1a0a2d"
          maskType="alpha"
          transform={{ edges: 'transparent', scale: 1, anchorX: 0.5, anchorY: 0.5, offsetX: 0, offsetY: 0, rotation: 0 }}
          colorSpace="oklab"
          startColor="#1a2d0a"
        />
        <Dither
          id="ditherWave"
          opacity={0}
          visible={false}
          pixelSize={5}
          threshold={0.24}
        >
          <SineWave
            angle={198}
            speed={1.9}
            maskType="alpha"
            amplitude={0.02}
            frequency={1.6}
            thickness={0.83}
            transform={{ edges: 'transparent', scale: 1, anchorX: 0.5, anchorY: 0.5, offsetX: 0, offsetY: 0, rotation: 0 }}
          />
        </Dither>
        <LinearGradient
          end={{ x: 0.924, y: 0.714 }}
          angle={48}
          edges="mirror"
          center={{ x: 0.5, y: 0.5 }}
          colorA="#ff66cc"
          colorB="#cc0066"
          endColor="#660033"
          maskType="alpha"
          transform={{ edges: 'transparent', scale: 1, anchorX: 0.5, anchorY: 0.5, offsetX: 0, offsetY: 0, rotation: 0 }}
          colorSpace="oklch"
          maskSource="ditherWave"
          startColor="#ff99dd"
        />
      </Shader>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4 text-center">
        {/* Title with pixel frame */}
        <PixelFrame variant="pink" className="px-6 py-3">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-pixel"
            style={{
              color: '#fffacd',
              textShadow: '0 0 8px rgba(255, 102, 204, 0.6)',
            }}
          >
            Time to Unwrap!
          </h1>
        </PixelFrame>

        {/* Video Player with pink border */}
        <div
          className="relative rounded-none overflow-hidden"
          style={{
            maxWidth: '720px',
            width: '90vw',
            boxShadow: '0 0 20px rgba(255, 102, 204, 0.5), 0 0 40px rgba(255, 102, 204, 0.3)',
            border: '4px solid #ff66cc',
          }}
        >
          <video
            src="/christmas-video.mp4"
            controls
            autoPlay
            loop
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>

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
