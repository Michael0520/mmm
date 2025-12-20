import { cn } from '@/lib/utils'

export interface PixelFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'gold' | 'cyan' | 'pink'
}

function PixelFrame({
  children,
  className,
  variant = 'default',
  style,
  ...props
}: PixelFrameProps): React.ReactElement {
  const borderColors = {
    default: {
      outer: '#333333',
      inner: '#555555',
      bg: 'rgba(0, 0, 0, 0.7)',
    },
    gold: {
      outer: '#8b4513',
      inner: '#ffd700',
      bg: 'rgba(0, 0, 0, 0.6)',
    },
    cyan: {
      outer: '#006666',
      inner: '#00ffff',
      bg: 'rgba(0, 0, 0, 0.6)',
    },
    pink: {
      outer: '#660033',
      inner: '#ff66cc',
      bg: 'rgba(0, 0, 0, 0.6)',
    },
  }

  const colors = borderColors[variant]

  return (
    <div
      className={cn('relative', className)}
      style={{
        background: colors.bg,
        backdropFilter: 'blur(4px)',
        ...style,
      }}
      {...props}
    >
      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* 8-bit Pixel Border */}
      {/* Top border */}
      <div
        className="absolute -top-1 left-2 right-2 h-1"
        style={{ background: colors.inner }}
      />
      <div
        className="absolute -top-2 left-3 right-3 h-1"
        style={{ background: colors.outer }}
      />

      {/* Bottom border */}
      <div
        className="absolute -bottom-1 left-2 right-2 h-1"
        style={{ background: colors.inner }}
      />
      <div
        className="absolute -bottom-2 left-3 right-3 h-1"
        style={{ background: colors.outer }}
      />

      {/* Left border */}
      <div
        className="absolute top-2 bottom-2 -left-1 w-1"
        style={{ background: colors.inner }}
      />
      <div
        className="absolute top-3 bottom-3 -left-2 w-1"
        style={{ background: colors.outer }}
      />

      {/* Right border */}
      <div
        className="absolute top-2 bottom-2 -right-1 w-1"
        style={{ background: colors.inner }}
      />
      <div
        className="absolute top-3 bottom-3 -right-2 w-1"
        style={{ background: colors.outer }}
      />

      {/* Corner pixels - Top Left */}
      <div
        className="absolute top-0 left-0 w-2 h-2"
        style={{ background: colors.inner }}
      />
      <div
        className="absolute -top-1 left-1 w-1 h-1"
        style={{ background: colors.outer }}
      />
      <div
        className="absolute top-1 -left-1 w-1 h-1"
        style={{ background: colors.outer }}
      />

      {/* Corner pixels - Top Right */}
      <div
        className="absolute top-0 right-0 w-2 h-2"
        style={{ background: colors.inner }}
      />
      <div
        className="absolute -top-1 right-1 w-1 h-1"
        style={{ background: colors.outer }}
      />
      <div
        className="absolute top-1 -right-1 w-1 h-1"
        style={{ background: colors.outer }}
      />

      {/* Corner pixels - Bottom Left */}
      <div
        className="absolute bottom-0 left-0 w-2 h-2"
        style={{ background: colors.inner }}
      />
      <div
        className="absolute -bottom-1 left-1 w-1 h-1"
        style={{ background: colors.outer }}
      />
      <div
        className="absolute bottom-1 -left-1 w-1 h-1"
        style={{ background: colors.outer }}
      />

      {/* Corner pixels - Bottom Right */}
      <div
        className="absolute bottom-0 right-0 w-2 h-2"
        style={{ background: colors.inner }}
      />
      <div
        className="absolute -bottom-1 right-1 w-1 h-1"
        style={{ background: colors.outer }}
      />
      <div
        className="absolute bottom-1 -right-1 w-1 h-1"
        style={{ background: colors.outer }}
      />
    </div>
  )
}

export { PixelFrame }
