# Pages Specification

## Overview

6 pages that form an interactive Christmas experience journey.

---

## Page 1: Landing (`/`)

### Purpose
Welcome screen with MMM branding

### Requirements

| Element | Description |
|---------|-------------|
| Title | "MMM Christmas" in pixel font |
| Subtitle | "Michael + Meiko + Merry" |
| Decorations | Pixel trees, stars, snowfall animation |
| CTA | "START" button navigates to `/rps` |

### Layout

```
┌─────────────────────────────┐
│     ❄️ (snowfall)           │
│                             │
│    🎄  MMM Christmas  ⭐    │
│    Michael + Meiko + Merry  │
│                             │
│       [ START ]             │
│                             │
│    🎄              🎄       │
└─────────────────────────────┘
```

### Components Used
- `Snowfall` - Animated falling snow
- `PixelTree` - Christmas tree icon
- `PixelStar` - Star icon
- `Button` - 8bitcn button

### Acceptance Criteria
- [ ] Title displays in Press Start 2P font
- [ ] Snowfall animation runs continuously
- [ ] START button navigates to /rps
- [ ] Responsive on mobile devices

---

## Page 2: Rock Paper Scissors (`/rps`)

### Purpose
Game to decide who opens gifts first (Michael vs Meiko)

### Requirements

| Element | Description |
|---------|-------------|
| Mode | Same device, turn-based |
| Flow | Michael picks → handover → Meiko picks → result |
| Rule | Best of 1 (tie = replay) |
| Result | Winner "opens gift first" |

### Game States

1. **michael** - Michael's turn to choose
2. **handover** - Pass device to Meiko
3. **meiko** - Meiko's turn to choose
4. **result** - Show winner or tie

### State Flow

```
[michael] → select → [handover] → ready → [meiko] → select → [result]
                                                              ↓
                                                         tie? → [michael]
                                                         win → /vinyl
```

### Layout (Michael's Turn)

```
┌─────────────────────────────┐
│                             │
│    Michael's Turn           │
│                             │
│   [✊]   [✋]   [✌️]         │
│   Rock  Paper Scissors      │
│                             │
└─────────────────────────────┘
```

### Layout (Result)

```
┌─────────────────────────────┐
│                             │
│    Michael: ✊              │
│    Meiko: ✌️                │
│                             │
│    Michael Wins!            │
│    Opens gift first!        │
│                             │
│       [ Continue ]          │
└─────────────────────────────┘
```

### Components Used
- `PixelRock`, `PixelPaper`, `PixelScissors` - Custom icons
- `Button` - Selection buttons
- `Dialog` - Result display (optional)

### Acceptance Criteria
- [ ] Michael can select rock/paper/scissors
- [ ] Handover screen shows with "Ready" button
- [ ] Meiko can select rock/paper/scissors
- [ ] Result correctly determines winner
- [ ] Tie triggers replay
- [ ] Continue button navigates to /vinyl

---

## Page 3: Vinyl Player (`/vinyl`)

### Purpose
Christmas music player with visual vinyl record

### Requirements

| Element | Description |
|---------|-------------|
| Visual | Spinning vinyl record |
| Audio | Christmas music (loop) |
| Controls | Play/Pause on vinyl click |
| CTA | "Next" button navigates to `/cat` |

### Layout

```
┌─────────────────────────────┐
│                             │
│      ╭───────────╮          │
│     ╱ ╭───────╮  ╲         │
│    │  │   ●   │   │ ← vinyl │
│     ╲ ╰───────╯  ╱         │
│      ╰───────────╯          │
│                             │
│    Click to Play/Pause      │
│                             │
│       [ Next → ]            │
└─────────────────────────────┘
```

### Components Used
- `VinylRecord` - Animated spinning record
- `useAudio` hook - Audio playback control
- `Button` - Next button

### Acceptance Criteria
- [ ] Vinyl record displays centered
- [ ] Record spins when music plays
- [ ] Record stops when paused
- [ ] Click toggles play/pause
- [ ] Music loops continuously
- [ ] Next button navigates to /cat

---

## Page 4: Cat Display (`/cat`)

### Purpose
Dining time ambiance (Meiko loves cats)

### Requirements

| Element | Description |
|---------|-------------|
| Center | Cute pixel cat |
| Decorations | Christmas elements scattered around |
| Atmosphere | Festive, cozy |
| CTA | "Next" button navigates to `/photo` |

### Decoration Elements (pixel art)
- Christmas tree
- Gift box
- Star
- Snowflake
- Bell
- Gingerbread man
- Stocking
- Candle
- Candy cane

### Layout

```
┌─────────────────────────────┐
│  🎄          ⭐          🎁 │
│                             │
│  ❄️      🐱 (cat)      🔔  │
│                             │
│  🧦          🕯️          🍬 │
│                             │
│       [ Next → ]            │
└─────────────────────────────┘
```

### Components Used
- `PixelCat` - Cat illustration
- pixelarticons - Various Christmas decorations
- `Button` - Next button

### Acceptance Criteria
- [ ] Pixel cat displays centered
- [ ] At least 6 Christmas decorations visible
- [ ] Decorations have subtle animations (sparkle, float)
- [ ] Next button navigates to /photo

---

## Page 5: Photo Frame (`/photo`)

### Purpose
Display photo of Michael and Meiko together

### Requirements

| Element | Description |
|---------|-------------|
| Frame | Pixel-style photo frame |
| Image | Placeholder (replaceable later) |
| CTA | "Next" button navigates to `/ending` |

### Layout

```
┌─────────────────────────────┐
│                             │
│   ╔═══════════════════╗     │
│   ║                   ║     │
│   ║    [  Photo  ]    ║     │
│   ║                   ║     │
│   ╚═══════════════════╝     │
│                             │
│       [ Next → ]            │
└─────────────────────────────┘
```

### Components Used
- `Card` - 8bitcn card as frame
- `Button` - Next button

### Acceptance Criteria
- [ ] Photo frame has pixel border style
- [ ] Placeholder image displays
- [ ] Easy to replace with real photo later
- [ ] Next button navigates to /ending

---

## Page 6: Ending (`/ending`)

### Purpose
Final Christmas message and celebration

### Requirements

| Element | Description |
|---------|-------------|
| Logo | MMM in pixel style |
| Message | "Merry Christmas, Meiko!" |
| Animation | Confetti/fireworks celebration effects |
| CTA | "Restart" navigates to `/` |

### Layout

```
┌─────────────────────────────┐
│  🎊 (confetti falling)      │
│                             │
│         M M M               │
│                             │
│   Merry Christmas, Meiko!   │
│                             │
│      [ Restart ]            │
│                             │
│  🎊                    🎊   │
└─────────────────────────────┘
```

### Components Used
- `Confetti` - Celebration animation
- `Button` - Restart button

### Acceptance Criteria
- [ ] MMM logo displays prominently
- [ ] "Merry Christmas, Meiko!" message shows
- [ ] Confetti animation plays
- [ ] Restart button navigates to /
