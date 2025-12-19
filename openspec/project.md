# MMM Christmas - Project Conventions

## Overview

A pixel-art Christmas interactive web application for **Meiko** by **Michael**.

**MMM** = **M**ichael + **M**eiko + **M**erry Christmas

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | TanStack Start |
| UI Library | 8bitcn/ui (pixel-style shadcn) |
| Icons | pixelarticons (@nsmr/pixelart-react) + custom pixel art |
| Styling | Tailwind CSS v4 |
| Font | Press Start 2P (pixel font) |
| Animation | CSS Animations |
| Language | TypeScript |
| Package Manager | pnpm |

## Design System

### Style Rules

- **No rounded corners** - Use `rounded-none` everywhere
- **Pixel borders** - 4px solid borders
- **Pixel shadows** - Box shadows with hard edges `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
- **Step animations** - Use `step-start` timing for pixel feel

### Color Palette

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Christmas Red | `#c41e3a` | `--christmas-red` | Primary, buttons |
| Christmas Green | `#228b22` | `--christmas-green` | Secondary, trees |
| Christmas Gold | `#ffd700` | `--christmas-gold` | Accents, stars |
| Snow White | `#fffafa` | `--snow-white` | Text, snow |
| Dark Background | `#1a1a2e` | `--bg-dark` | Page backgrounds |

### Typography

```css
font-family: 'Press Start 2P', cursive;
```

## File Structure

```
src/
├── components/
│   ├── ui/8bit/          # 8bitcn components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── dialog.tsx
│   ├── icons/            # Custom pixel icons
│   │   ├── PixelTree.tsx
│   │   ├── PixelStar.tsx
│   │   ├── PixelCat.tsx
│   │   ├── PixelRock.tsx
│   │   ├── PixelPaper.tsx
│   │   └── PixelScissors.tsx
│   ├── Snowfall.tsx
│   ├── Confetti.tsx
│   └── VinylRecord.tsx
├── hooks/
│   └── useAudio.ts
├── routes/
│   ├── index.tsx         # Landing
│   ├── rps.tsx           # Rock Paper Scissors
│   ├── vinyl.tsx         # Vinyl Player
│   ├── cat.tsx           # Cat Display
│   ├── photo.tsx         # Photo Frame
│   └── ending.tsx        # Ending
├── lib/
│   └── utils.ts          # cn() helper
├── assets/
│   ├── images/
│   └── audio/
├── styles.css
└── router.tsx
```

## Coding Standards

### Component Patterns

```typescript
// Always use explicit return types
function ComponentName(): React.ReactElement {
  return <div>...</div>
}

// Use cn() for conditional classes
className={cn("base-class", condition && "conditional-class")}
```

### Imports

```typescript
// Path aliases
import { Button } from "@/components/ui/8bit/button"
import { cn } from "@/lib/utils"
```

### State Management

- Use React useState for local state
- Use TanStack Router for navigation
- No global state needed for this project

## Navigation Flow

```
/ (Landing)
    ↓ START
/rps (Rock Paper Scissors)
    ↓ Continue (after game)
/vinyl (Vinyl Player)
    ↓ Next
/cat (Cat Display)
    ↓ Next
/photo (Photo Frame)
    ↓ Next
/ending (Ending)
    ↓ Restart
/ (Landing)
```
