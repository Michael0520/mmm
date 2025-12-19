interface PixelTreeProps {
  className?: string
  style?: React.CSSProperties
}

export function PixelTree({ className, style }: PixelTreeProps): React.ReactElement {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      style={style}
    >
      {/* Star on top */}
      <rect x="14" y="0" width="4" height="4" fill="#ffd700" />

      {/* Tree layers */}
      <rect x="12" y="4" width="8" height="4" fill="#228b22" />
      <rect x="10" y="8" width="12" height="4" fill="#228b22" />
      <rect x="8" y="12" width="16" height="4" fill="#228b22" />
      <rect x="6" y="16" width="20" height="4" fill="#228b22" />
      <rect x="4" y="20" width="24" height="4" fill="#228b22" />

      {/* Trunk */}
      <rect x="12" y="24" width="8" height="6" fill="#8b4513" />

      {/* Ornaments */}
      <rect x="14" y="10" width="2" height="2" fill="#c41e3a" />
      <rect x="10" y="14" width="2" height="2" fill="#ffd700" />
      <rect x="18" y="14" width="2" height="2" fill="#c41e3a" />
      <rect x="8" y="18" width="2" height="2" fill="#ffd700" />
      <rect x="14" y="18" width="2" height="2" fill="#c41e3a" />
      <rect x="20" y="18" width="2" height="2" fill="#ffd700" />
      <rect x="6" y="22" width="2" height="2" fill="#c41e3a" />
      <rect x="12" y="22" width="2" height="2" fill="#ffd700" />
      <rect x="18" y="22" width="2" height="2" fill="#c41e3a" />
      <rect x="22" y="22" width="2" height="2" fill="#ffd700" />
    </svg>
  )
}
