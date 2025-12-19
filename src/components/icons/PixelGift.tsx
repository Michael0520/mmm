interface PixelGiftProps {
  className?: string
  style?: React.CSSProperties
}

export function PixelGift({ className, style }: PixelGiftProps): React.ReactElement {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      style={style}
    >
      {/* Ribbon bow */}
      <rect x="6" y="2" width="4" height="4" fill="#ffd700" />
      <rect x="22" y="2" width="4" height="4" fill="#ffd700" />
      <rect x="10" y="4" width="4" height="4" fill="#ffd700" />
      <rect x="18" y="4" width="4" height="4" fill="#ffd700" />
      <rect x="14" y="2" width="4" height="6" fill="#ffd700" />

      {/* Ribbon vertical */}
      <rect x="14" y="8" width="4" height="22" fill="#ffd700" />

      {/* Box top */}
      <rect x="4" y="8" width="24" height="4" fill="#c41e3a" />

      {/* Box body */}
      <rect x="4" y="12" width="10" height="18" fill="#c41e3a" />
      <rect x="18" y="12" width="10" height="18" fill="#c41e3a" />

      {/* Box bottom edge */}
      <rect x="4" y="28" width="24" height="2" fill="#8b0000" />
    </svg>
  )
}
