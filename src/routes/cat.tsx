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
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 text-center">
        {/* Title */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-pixel"
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

        {/* Video Player */}
        <div
          className="relative rounded-none overflow-hidden"
          style={{
            maxWidth: '560px',
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

        {/* Next button */}
        <Button
          variant="default"
          size="lg"
          font="retro"
          onClick={handleNext}
          className="mt-4 px-10 sm:px-14 py-3 sm:py-4 text-base sm:text-lg"
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
