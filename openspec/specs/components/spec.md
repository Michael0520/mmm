# Components Specification

## Overview

All UI components follow 8bitcn pixel-art style. Components are organized into:
- **UI Components** - Reusable 8bit-styled base components
- **Icons** - Custom pixel art icons
- **Feature Components** - Page-specific animated components

---

## UI Components (`src/components/ui/8bit/`)

### Button

8-bit styled button with pixel borders and shadow.

```typescript
interface ButtonProps {
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive"
  size?: "default" | "sm" | "lg" | "xl" | "icon"
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
}
```

**Styling:**
- Border: 4px solid black
- Shadow: `4px 4px 0px 0px rgba(0,0,0,1)`
- Active state: translate-y-1, shadow-none
- Font: Press Start 2P

**Variants:**
| Variant | Background | Usage |
|---------|------------|-------|
| default | Christmas Red | Primary actions |
| secondary | Christmas Green | Secondary actions |
| outline | Transparent | Tertiary actions |
| ghost | Transparent | Subtle actions |

---

### Card

8-bit styled container with pixel border.

```typescript
interface CardProps {
  children: React.ReactNode
  className?: string
}
```

**Styling:**
- Border: 4px solid black
- Background: white or semi-transparent
- Shadow: `4px 4px 0px 0px rgba(0,0,0,1)`
- No border-radius (rounded-none)

---

### Dialog

8-bit styled modal dialog.

```typescript
interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  children: React.ReactNode
}
```

**Styling:**
- Overlay: semi-transparent black
- Content: Card-style with pixel border
- Close button: top-right corner

---

## Custom Icons (`src/components/icons/`)

All icons are SVG-based React components with pixel-art styling.

### Common Props

```typescript
interface PixelIconProps {
  size?: number        // Default: 32
  className?: string
}
```

### Icon List

| Icon | File | Usage |
|------|------|-------|
| PixelTree | `PixelTree.tsx` | Christmas tree decoration |
| PixelStar | `PixelStar.tsx` | Star decoration, accents |
| PixelCat | `PixelCat.tsx` | Cat display page |
| PixelRock | `PixelRock.tsx` | RPS game |
| PixelPaper | `PixelPaper.tsx` | RPS game |
| PixelScissors | `PixelScissors.tsx` | RPS game |
| PixelSnowflake | `PixelSnowflake.tsx` | Snow, decorations |
| PixelGift | `PixelGift.tsx` | Gift box decoration |
| PixelBell | `PixelBell.tsx` | Bell decoration |
| PixelCandy | `PixelCandy.tsx` | Candy cane decoration |

### Design Guidelines

- Use 32x32 or 64x64 pixel grid
- Limited color palette (Christmas colors)
- No anti-aliasing (crisp edges)
- Simple, recognizable shapes

---

## Feature Components (`src/components/`)

### Snowfall

Animated falling snowflakes.

```typescript
interface SnowfallProps {
  count?: number       // Number of snowflakes (default: 50)
  speed?: number       // Fall speed multiplier (default: 1)
}
```

**Animation:**
- CSS keyframes for falling
- Random horizontal drift
- Random sizes (small, medium, large)
- Continuous loop

---

### VinylRecord

Spinning vinyl record for music player.

```typescript
interface VinylRecordProps {
  isPlaying: boolean
  onClick?: () => void
}
```

**Animation:**
- CSS rotate animation when playing
- Stops on pause (animation-play-state)
- Smooth transition

**Visual:**
- Black/dark gray vinyl
- Grooves as concentric circles
- Center label (can be customized)

---

### Confetti

Celebration confetti animation.

```typescript
interface ConfettiProps {
  active?: boolean     // Whether to show confetti
  count?: number       // Number of particles (default: 100)
}
```

**Animation:**
- Random colors (Christmas palette)
- Falling with rotation
- Random horizontal spread
- Fade out at bottom

---

## Hooks (`src/hooks/`)

### useAudio

Audio playback hook for vinyl player.

```typescript
interface UseAudioReturn {
  isPlaying: boolean
  play: () => void
  pause: () => void
  toggle: () => void
}

function useAudio(src: string): UseAudioReturn
```

**Features:**
- Handles browser autoplay restrictions
- Loop support
- Play/pause state management
