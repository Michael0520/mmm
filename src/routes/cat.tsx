import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Snowfall } from '@/components/Snowfall'
import { Button } from '@/components/ui/8bit/button'

export const Route = createFileRoute('/cat')({
  component: CatPage,
})

function CatPage(): React.ReactElement {
  const navigate = useNavigate()

  const handleNext = (): void => {
    navigate({ to: '/photo' })
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d0d1a]">
      {/* Snowfall background */}
      <Snowfall count={60} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 px-4 text-center">
        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-pixel"
          style={{
            color: '#ff66cc',
            textShadow: `
              0 0 10px #ff66cc,
              0 0 20px #ff66cc,
              0 0 40px #ff00aa
            `,
          }}
        >
          Time to Unwrap!
        </h1>

        {/* Video Player - Larger */}
        <div
          className="relative rounded-none overflow-hidden"
          style={{
            maxWidth: '720px',
            width: '90vw',
            boxShadow: '0 0 20px #ff66cc, 0 0 40px #ff66cc50',
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
