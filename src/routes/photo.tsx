import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import { Snowfall } from '@/components/Snowfall'
import { Button } from '@/components/ui/8bit/button'

export const Route = createFileRoute('/photo')({
  component: PhotoPage,
})

function PhotoPage(): React.ReactElement {
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [photoUrl, setPhotoUrl] = useState<string | null>(null)

  const handleNext = (): void => {
    navigate({ to: '/ending' })
  }

  const handlePhotoClick = (): void => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPhotoUrl(url)
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

        {/* Photo Frame with Pixel Border */}
        <div
          className="relative"
          style={{
            padding: '12px',
            background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)',
            boxShadow: '0 0 20px #ffd700, 0 0 40px #ffd70050, 8px 8px 0 #5D3A1A',
          }}
        >
          {/* Inner frame border */}
          <div
            style={{
              padding: '8px',
              background: 'linear-gradient(135deg, #DAA520 0%, #FFD700 50%, #DAA520 100%)',
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
              className="relative flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
              style={{
                width: '320px',
                height: '400px',
                background: 'linear-gradient(180deg, #2a2a4a 0%, #1a1a2e 100%)',
                border: '4px solid #333',
              }}
              onClick={handlePhotoClick}
            >
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt="Our photo together"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 text-snow-white/60">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="opacity-50"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="font-pixel text-xs">Click to upload photo</p>
                </div>
              )}
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-christmas-gold" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-christmas-gold" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-christmas-gold" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }} />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-christmas-gold" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
        </div>

        {/* Caption */}
        <p
          className="font-pixel text-sm sm:text-base"
          style={{
            color: '#ff66cc',
            textShadow: '0 0 10px #ff66cc',
          }}
        >
          Merry Christmas 2025
        </p>

        {/* Next button */}
        <Button
          variant="default"
          size="lg"
          font="retro"
          onClick={handleNext}
          className="mt-2 px-10 sm:px-14 py-3 sm:py-4 text-base sm:text-lg"
          style={{
            background: 'linear-gradient(180deg, #ff4477 0%, #ff3366 50%, #cc0044 100%)',
            boxShadow: '0 0 15px #ff3366, 0 0 30px #ff336650, 0 6px 0 #990033',
            border: '2px solid #ff6699',
          }}
        >
          NEXT
        </Button>
      </div>
    </div>
  )
}
