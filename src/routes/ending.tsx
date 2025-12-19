import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useRef } from 'react'
import { Snowfall } from '@/components/Snowfall'
import { Button } from '@/components/ui/8bit/button'
import { usePersistedPhotos } from '@/hooks/usePersistedPhoto'

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
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d0d1a]">
      {/* Snowfall background */}
      <Snowfall count={80} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 text-center">
        {/* Bento Grid - 3 Portrait Photos (Maximized) */}
        <div
          className="grid gap-2 sm:gap-3"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            width: '95vw',
            maxWidth: '960px',
          }}
        >
          {[0, 1, 2].map((index) => (
            <div key={index}>
              {/* Hidden file input */}
              <input
                ref={fileInputRefs[index]}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(index, e)}
                className="hidden"
              />

              {/* Photo slot */}
              <div
                className="relative flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  maxHeight: '55vh',
                  background: '#1a1a2e',
                  border: '4px solid #ff66cc',
                  boxShadow: '0 0 15px #ff66cc50',
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
                  <div className="flex flex-col items-center justify-center gap-3 text-snow-white/40">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="0" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <p className="font-pixel text-xs">Click</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Message */}
        <p
          className="font-pixel text-lg sm:text-xl md:text-2xl mt-2"
          style={{
            color: '#ff66cc',
            textShadow: `
              0 0 10px #ff66cc,
              0 0 20px #ff66cc
            `,
          }}
        >
          Merry Christmas, Meiko!
        </p>
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
