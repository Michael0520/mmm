interface PixelSantaProps {
  className?: string
  style?: React.CSSProperties
}

export function PixelSanta({ className, style }: PixelSantaProps): React.ReactElement {
  return (
    <svg
      viewBox="0 0 32 48"
      className={className}
      style={{ ...style, imageRendering: 'pixelated' }}
    >
      {/* Hat */}
      <rect x="8" y="0" width="16" height="4" fill="#cc0000" />
      <rect x="6" y="4" width="20" height="4" fill="#cc0000" />
      <rect x="22" y="0" width="4" height="4" fill="#cc0000" />
      <rect x="24" y="2" width="4" height="4" fill="#ffffff" /> {/* pompom */}

      {/* Hat trim */}
      <rect x="4" y="8" width="24" height="4" fill="#ffffff" />

      {/* Face */}
      <rect x="6" y="12" width="20" height="16" fill="#ffcc99" />

      {/* Eyes */}
      <rect x="10" y="16" width="4" height="4" fill="#000000" />
      <rect x="18" y="16" width="4" height="4" fill="#000000" />
      <rect x="11" y="17" width="2" height="2" fill="#ffffff" /> {/* eye shine */}
      <rect x="19" y="17" width="2" height="2" fill="#ffffff" />

      {/* Nose */}
      <rect x="14" y="20" width="4" height="4" fill="#ff9966" />

      {/* Cheeks */}
      <rect x="8" y="22" width="4" height="2" fill="#ffaaaa" />
      <rect x="20" y="22" width="4" height="2" fill="#ffaaaa" />

      {/* Beard */}
      <rect x="4" y="24" width="24" height="4" fill="#ffffff" />
      <rect x="6" y="28" width="20" height="4" fill="#ffffff" />
      <rect x="8" y="32" width="16" height="4" fill="#ffffff" />
      <rect x="12" y="36" width="8" height="2" fill="#ffffff" />

      {/* Body */}
      <rect x="8" y="38" width="16" height="8" fill="#cc0000" />

      {/* Belt */}
      <rect x="8" y="40" width="16" height="4" fill="#333333" />
      <rect x="12" y="40" width="8" height="4" fill="#ffcc00" /> {/* buckle */}
    </svg>
  )
}
