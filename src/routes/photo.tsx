import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useRef } from 'react'
import { Snowfall } from '@/components/Snowfall'
import { Button } from '@/components/ui/8bit/button'
import { usePersistedPhoto } from '@/hooks/usePersistedPhoto'

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
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d0d1a]">
      {/* Snowfall background */}
      <Snowfall count={60} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 text-center">
        {/* Title */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-pixel"
          style={{
            color: '#ffd700',
            textShadow: `
              0 0 10px #ffd700,
              0 0 20px #ffd700,
              0 0 40px #ffaa00
            `,
          }}
        >
          Our Moment
        </h1>

        {/* Photo Frame - Clean Neon Style */}
        <div
          className="relative"
          style={{
            padding: '6px',
            background: '#ff66cc',
            boxShadow: '0 0 20px #ff66cc, 0 0 40px #ff66cc50',
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

        {/* Caption */}
        <p
          className="font-pixel text-base sm:text-lg md:text-xl"
          style={{
            color: '#ff66cc',
            textShadow: '0 0 10px #ff66cc',
          }}
        >
          Merry Christmas 2025
        </p>

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
