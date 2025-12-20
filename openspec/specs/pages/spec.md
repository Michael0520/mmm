# Pages Specification

## Overview

4 pages that form an interactive Christmas experience journey for Meiko.

**Flow:** Landing → Cat (Video) → Photo → Ending

---

## Page 1: Landing (`/`)

### Purpose
Welcome screen with MMM branding and ASCII Christmas tree shader animation.

### Requirements

| Element | Description |
|---------|-------------|
| Title | "MMM Christmas" with neon glow effect |
| Subtitle | "A SPECIAL GIFT FOR YOU" in gold |
| Background | ASCII Christmas tree shader animation |
| CTA | "START" button navigates to `/cat` |

### Layout

```
┌─────────────────────────────────┐
│ ┌─────────────────┐             │
│ │ MMM             │  (cyan glow)│
│ │ Christmas       │  (pink glow)│
│ │ ✦ 2025 ✦       │  (gold)     │
│ └─────────────────┘             │
│                                 │
│    ★✦*+●○ ASCII Christmas Tree  │
│    (Shader animation)           │
│                                 │
│ [A SPECIAL GIFT FOR YOU]        │
│                        [START]  │
└─────────────────────────────────┘
```

### Components Used
- `PixelFrame` (cyan) - Title container
- `PixelFrame` (gold) - Subtitle container
- `Button` - 8bitcn button (pink gradient)
- Shader: `Ascii`, `ImageTexture`, `LinearGradient`, `WaveDistortion`, `FilmGrain`

### Acceptance Criteria
- [x] Title displays with animated neon glow
- [x] ASCII shader Christmas tree animates
- [x] Pixel frames have 8-bit RPG style borders
- [x] START button navigates to /cat
- [x] Responsive on mobile devices

---

## Page 2: Cat Video (`/cat`)

### Purpose
Christmas video featuring a cute cat (Meiko loves cats)

### Requirements

| Element | Description |
|---------|-------------|
| Title | "Time to Unwrap!" with pink pixel frame |
| Video | Christmas cat video (autoplay, loop) |
| Background | Pink/magenta gradient shader with dither effect |
| CTA | "NEXT" button navigates to `/photo` |

### Layout

```
┌─────────────────────────────────┐
│      (pink gradient shader)     │
│                                 │
│    ┌─────────────────────┐      │
│    │ Time to Unwrap!     │      │
│    └─────────────────────┘      │
│                                 │
│    ┌─────────────────────┐      │
│    │                     │      │
│    │   🐱 Cat Video      │      │
│    │                     │      │
│    └─────────────────────┘      │
│                                 │
│                        [NEXT]   │
└─────────────────────────────────┘
```

### Components Used
- `PixelFrame` (pink) - Title container
- `Button` - Next button (pink gradient)
- Shader: `LinearGradient`, `Dither`, `SineWave`
- HTML5 Video player

### Acceptance Criteria
- [x] Video autoplays and loops
- [x] Pink shader background displays
- [x] Pixel frame on title
- [x] NEXT button navigates to /photo

---

## Page 3: Photo Frame (`/photo`)

### Purpose
Display photo of Michael and Meiko together with warm gold theme

### Requirements

| Element | Description |
|---------|-------------|
| Title | "Photo Time" with gold pixel frame |
| Frame | Gold gradient photo frame with glow |
| Image | Click to upload photo (persisted in sessionStorage) |
| Decorations | Two cat images at bottom corners |
| Caption | "- 2025 -" with gold pixel frame |
| Background | Warm wave shader (orange/gold ASCII pattern) |
| CTA | "NEXT" button navigates to `/ending` |

### Layout

```
┌─────────────────────────────────┐
│   (warm wave ASCII shader)      │
│                                 │
│    ┌───────────────────┐        │
│    │ Photo Time        │        │
│    └───────────────────┘        │
│                                 │
│    ┌═══════════════════┐        │
│    ║                   ║        │
│    ║    [  Photo  ]    ║        │
│    ║                   ║        │
│    └═══════════════════┘        │
│                                 │
│    ┌───────────────────┐        │
│    │ - 2025 -          │        │
│    └───────────────────┘        │
│                                 │
│ 🐱                        🐱    │
│                        [NEXT]   │
└─────────────────────────────────┘
```

### Components Used
- `PixelFrame` (gold) - Title and caption containers
- `Button` - Next button (pink gradient)
- `usePersistedPhoto` hook - Photo persistence
- Shader: `SolidColor`, `Group`, `SineWave`, `Ascii`, `FilmGrain`

### Acceptance Criteria
- [x] Photo frame has gold gradient border with glow
- [x] Click to upload photo functionality
- [x] Photo persists across page reloads (sessionStorage)
- [x] Warm shader background displays
- [x] Cat decorations at corners
- [x] NEXT button navigates to /ending

---

## Page 4: Ending (`/ending`)

### Purpose
Final Christmas message with photo gallery

### Requirements

| Element | Description |
|---------|-------------|
| Photos | 3 portrait photo slots (3:4 ratio) |
| Message | "Merry Christmas" with gold pixel frame |
| Subtitle | "- M & M" |
| Background | Warm blob/swirl shader (burgundy edges, gold center) |
| CTA | "RESTART" navigates to `/` |

### Layout

```
┌─────────────────────────────────┐
│   (warm blob shader)            │
│                                 │
│  ┌──────┐ ┌──────┐ ┌──────┐    │
│  │      │ │      │ │      │    │
│  │Photo1│ │Photo2│ │Photo3│    │
│  │      │ │      │ │      │    │
│  └──────┘ └──────┘ └──────┘    │
│                                 │
│    ┌───────────────────┐        │
│    │ Merry Christmas   │        │
│    │ - M & M           │        │
│    └───────────────────┘        │
│                                 │
│ [RESTART]                       │
└─────────────────────────────────┘
```

### Components Used
- `PixelFrame` (gold) - Message container
- `Button` - Restart button (cyan gradient)
- `usePersistedPhotos` hook - Multi-photo persistence
- Shader: `Swirl`, `Blob`, `ProgressiveBlur`, `WaveDistortion`, `FilmGrain`

### Acceptance Criteria
- [x] 3 photo slots with gold borders
- [x] Click to upload photos (persisted)
- [x] Warm shader background with blur effect
- [x] RESTART button navigates to /
- [x] Message displays with pixel frame
