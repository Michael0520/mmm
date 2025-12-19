interface PixelSnowmanProps {
  className?: string
  style?: React.CSSProperties
}

export function PixelSnowman({ className, style }: PixelSnowmanProps): React.ReactElement {
  return (
    <svg
      viewBox="0 0 32 48"
      className={className}
      style={{ ...style, imageRendering: 'pixelated' }}
    >
      {/* Hat */}
      <rect x="8" y="0" width="16" height="4" fill="#333333" />
      <rect x="10" y="4" width="12" height="8" fill="#333333" />
      <rect x="6" y="8" width="20" height="4" fill="#333333" /> {/* brim */}
      <rect x="10" y="4" width="12" height="2" fill="#cc0000" /> {/* ribbon */}

      {/* Head */}
      <rect x="8" y="12" width="16" height="12" fill="#ffffff" />
      <rect x="6" y="14" width="2" height="8" fill="#ffffff" />
      <rect x="24" y="14" width="2" height="8" fill="#ffffff" />

      {/* Eyes */}
      <rect x="10" y="16" width="4" height="4" fill="#000000" />
      <rect x="18" y="16" width="4" height="4" fill="#000000" />

      {/* Carrot nose */}
      <rect x="14" y="20" width="4" height="2" fill="#ff6600" />
      <rect x="16" y="20" width="4" height="2" fill="#ff6600" />
      <rect x="18" y="20" width="2" height="2" fill="#ff8833" />

      {/* Smile */}
      <rect x="10" y="22" width="2" height="2" fill="#000000" />
      <rect x="12" y="24" width="8" height="2" fill="#000000" />
      <rect x="20" y="22" width="2" height="2" fill="#000000" />

      {/* Scarf */}
      <rect x="6" y="26" width="20" height="4" fill="#cc0000" />
      <rect x="4" y="28" width="4" height="8" fill="#cc0000" /> {/* hanging part */}
      <rect x="4" y="34" width="6" height="2" fill="#cc0000" />

      {/* Body */}
      <rect x="6" y="30" width="20" height="14" fill="#ffffff" />
      <rect x="4" y="32" width="2" height="10" fill="#ffffff" />
      <rect x="26" y="32" width="2" height="10" fill="#ffffff" />

      {/* Buttons */}
      <rect x="14" y="34" width="4" height="4" fill="#333333" />
      <rect x="14" y="40" width="4" height="4" fill="#333333" />

      {/* Arms (sticks) */}
      <rect x="0" y="34" width="4" height="2" fill="#8b4513" />
      <rect x="28" y="34" width="4" height="2" fill="#8b4513" />
    </svg>
  )
}
