# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MMM Christmas is an interactive Christmas web experience built for a personal gift. The app uses a pixel-art 8-bit aesthetic with animated shader backgrounds.

**Page Flow:** Landing (`/`) → Cat Video (`/cat`) → Photo (`/photo`) → Ending (`/ending`)

## Development Commands

```bash
pnpm dev          # Start dev server on port 3000
pnpm build        # Production build
pnpm test         # Run tests with Vitest
```

## Tech Stack

- **Framework:** React 19 + TanStack Start + TanStack Router
- **Styling:** Tailwind CSS v4 + Press Start 2P pixel font
- **Shaders:** `shaders` package from shaders.com for animated backgrounds
- **UI:** Custom 8-bit components (`src/components/ui/8bit/`)

## Architecture

### Routing

File-based routing via TanStack Router. Route files in `src/routes/`:
- `index.tsx` - Landing page with ASCII Christmas tree shader
- `cat.tsx` - Cat video page with pink gradient shader
- `photo.tsx` - Photo upload with warm wave shader
- `ending.tsx` - Photo gallery with warm blob shader

### 8-bit UI Components

Located in `src/components/ui/8bit/`:
- `Button` - Pixelated borders with hover/active effects
- `PixelFrame` - RPG-style container with stepped pixel borders (variants: default, gold, cyan, pink)

### Shader Pattern

Each page uses a full-screen fixed shader background:
```tsx
<Shader style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: 0 }}>
  {/* Shader layers */}
</Shader>
```

### Photo Persistence

`usePersistedPhoto` and `usePersistedPhotos` hooks in `src/hooks/` store uploaded photos in sessionStorage with image compression.

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json)

## Specifications

Detailed specs in `openspec/specs/`:
- `pages/spec.md` - Page requirements and layouts
- `components/spec.md` - Component APIs and shader configs
- `design/spec.md` - Color palette, typography, animations
