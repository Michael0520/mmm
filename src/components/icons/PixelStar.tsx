interface PixelStarProps {
  className?: string
  style?: React.CSSProperties
}

export function PixelStar({ className, style }: PixelStarProps): React.ReactElement {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      style={style}
      fill="currentColor"
    >
      {/* 5-pointed pixel star */}
      <rect x="14" y="2" width="4" height="4" />
      <rect x="14" y="6" width="4" height="4" />
      <rect x="2" y="10" width="28" height="4" />
      <rect x="6" y="14" width="20" height="4" />
      <rect x="8" y="18" width="16" height="4" />
      <rect x="10" y="22" width="4" height="4" />
      <rect x="18" y="22" width="4" height="4" />
      <rect x="6" y="26" width="4" height="4" />
      <rect x="22" y="26" width="4" height="4" />
    </svg>
  )
}
