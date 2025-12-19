# MMM Christmas - Project Specification

## Overview

A Christmas-themed interactive web application built for **Meiko** by **Michael**, showcasing web development skills with pixel art aesthetics.

**MMM Meaning:**
- **M**ichael (creator)
- **M**eiko (recipient)
- **M**erry Christmas

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | TanStack Start |
| UI Library | 8bitcn/ui (pixel-style shadcn) |
| Icons | pixelarticons + custom pixel art |
| Styling | Tailwind CSS v4 |
| Font | Press Start 2P (pixel font) |
| Animation | CSS Animations |

---

## Pages (6 total)

### Page 1: Landing (`/`)

**Purpose:** Welcome screen with MMM branding

| Element | Description |
|---------|-------------|
| Title | "MMM Christmas" in pixel font |
| Decorations | Pixel trees, stars, snowfall animation |
| Subtitle | "Michael + Meiko + Merry" |
| CTA | "START" button → navigates to `/rps` |

**Components:**
- `Landing.tsx`
- `Snowfall.tsx`
- `PixelTree`, `PixelStar` icons

---

### Page 2: Rock Paper Scissors (`/rps`)

**Purpose:** Game to decide who opens gifts first

| Element | Description |
|---------|-------------|
| Mode | Same device, turn-based |
| Flow | Michael picks → handover → Meiko picks → result |
| Rule | Best of 1 (tie = replay) |
| Result | Winner "opens gift first" |

**Game States:**
1. `michael` - Michael's turn to choose
2. `handover` - Pass phone to Meiko
3. `meiko` - Meiko's turn to choose
4. `result` - Show winner or tie

**Components:**
- `RockPaperScissors.tsx`
- `PixelRock`, `PixelPaper`, `PixelScissors` icons

---

### Page 3: Vinyl Player (`/vinyl`)

**Purpose:** Christmas music player

| Element | Description |
|---------|-------------|
| Visual | Spinning vinyl record |
| Audio | Christmas music (loop) |
| Controls | Play/Pause on click |
| CTA | "Next" button → `/cat` |

**Components:**
- `VinylPlayer.tsx`
- `useAudio.ts` hook

---

### Page 4: Cat Display (`/cat`)

**Purpose:** Dining time ambiance (Meiko loves cats)

| Element | Description |
|---------|-------------|
| Center | Cute pixel cat |
| Decorations | Christmas elements scattered around |
| Atmosphere | Festive, cozy |
| CTA | "Next" button → `/photo` |

**Decorations (pixel art):**
- Christmas tree
- Gift box
- Star
- Snowflake
- Bell
- Gingerbread man
- Stocking
- Candle
- Candy cane

**Components:**
- `CatDisplay.tsx`
- `PixelCat`, decoration icons

---

### Page 5: Photo Frame (`/photo`)

**Purpose:** Display photo together

| Element | Description |
|---------|-------------|
| Frame | Pixel-style photo frame |
| Image | Placeholder (replaceable) |
| CTA | "Next" button → `/ending` |

**Components:**
- `PhotoFrame.tsx`

---

### Page 6: Ending (`/ending`)

**Purpose:** Final Christmas message

| Element | Description |
|---------|-------------|
| Logo | MMM in pixel style |
| Message | "Merry Christmas, Meiko!" |
| Animation | Celebration effects (confetti/fireworks) |
| CTA | "Restart" → `/` |

**Components:**
- `Ending.tsx`
- `Confetti.tsx`

---

## Design Guidelines

### Style: 100% Pixel Art (8bitcn)

| Rule | Implementation |
|------|----------------|
| No rounded corners | `rounded-none` everywhere |
| Pixel borders | 4px solid borders |
| Pixel shadows | Box shadows with hard edges |
| Step animations | Use `step-start` timing |

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Christmas Red | `#c41e3a` | Primary, buttons |
| Christmas Green | `#228b22` | Secondary, trees |
| Christmas Gold | `#ffd700` | Accents, stars |
| Snow White | `#fffafa` | Text, snow |

### Typography

```css
font-family: 'Press Start 2P', cursive;
```

---

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
├── styles.css
└── router.tsx
```

---

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

---

## Assets Required

### Images (placeholder first)
- [ ] Vinyl record image
- [ ] Cat image (pixel style)
- [ ] Photo placeholder
- [ ] MMM logo

### Audio
- [ ] Christmas music (MP3)

### Fonts
- [x] Press Start 2P (Google Fonts)

---

## Implementation Checklist

- [ ] Project setup (TanStack Start)
- [ ] Install 8bitcn/shadcn
- [ ] Setup Tailwind + pixel styles
- [ ] Create 8bit components (Button, Card)
- [ ] Create pixel icons
- [ ] Page 1: Landing
- [ ] Page 2: Rock Paper Scissors
- [ ] Page 3: Vinyl Player
- [ ] Page 4: Cat Display
- [ ] Page 5: Photo Frame
- [ ] Page 6: Ending
- [ ] Test all pages
- [ ] Deploy

---

*Last updated: 2025-12-20*
