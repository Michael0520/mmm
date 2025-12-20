# Design System Specification

## Overview

Pixel-art aesthetic using 8bitcn components with animated shader backgrounds and neon glow effects.

---

## Color Palette

### Neon Glow Colors

| Name | Hex | Usage |
|------|-----|-------|
| Cyan | `#00ffff` | Landing title "MMM", restart button |
| Pink | `#ff66cc` | Landing subtitle, cat page, forward buttons |
| Gold | `#ffd700` | Subtitles, photo/ending elements |

### Warm Theme Colors

| Name | Hex | Usage |
|------|-----|-------|
| Cream | `#fffacd` | Main text on warm backgrounds |
| Light Gold | `#ffcc99` | Secondary text |
| Orange | `#ff6b35` | Shader accents |
| Burgundy | `#8b2942` | Shader backgrounds |
| Dark Burgundy | `#2d0a1a` | Deep backgrounds |

### Background Colors

| Name | Hex | Usage |
|------|-----|-------|
| Deep Purple | `#1a0f2e` | Photo page shader base |
| Dark Blue | `#1a1a2e` | Photo frame inner |

### Button Gradients

| Name | Colors | Usage |
|------|--------|-------|
| Pink Button | `#ff4477 → #ff3366 → #cc0044` | START, NEXT |
| Cyan Button | `#00cccc → #00aaaa → #008888` | RESTART |

---

## Typography

### Font Family

```css
font-family: 'Press Start 2P', cursive;
```

### Utility Class
```css
.font-pixel {
  font-family: 'Press Start 2P', cursive;
}
```

### Text Glow Effects

**Cyan Glow:**
```css
text-shadow:
  0 0 10px #00ffff,
  0 0 20px #00ffff,
  0 0 40px #00ffff,
  4px 4px 0 #006666;
```

**Pink Glow:**
```css
text-shadow:
  0 0 10px #ff66cc,
  0 0 20px #ff66cc,
  0 0 40px #ff66cc,
  3px 3px 0 #660033;
```

**Gold Glow:**
```css
text-shadow:
  0 0 8px rgba(255, 215, 0, 0.6),
  2px 2px 0 #8b4513;
```

---

## PixelFrame Styling

8-bit RPG window style with stepped corners.

### Structure

```
  ┌──────────────────┐  ← outer border
 ┌┘                  └┐ ← inner border
 │                    │
 │     Content        │
 │                    │
 └┐                  ┌┘
  └──────────────────┘
```

### CSS Implementation

```css
/* Dark background with blur */
background: rgba(0, 0, 0, 0.6);
backdrop-filter: blur(4px);

/* 2-layer pixel border using absolute positioned divs */
/* Inner layer: accent color */
/* Outer layer: darker accent color */
/* Corner pixels for stepped effect */
```

---

## Shader Backgrounds

### Shared Properties

All shaders use:
```typescript
style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 0,
}}
```

### Page-specific Themes

| Page | Primary | Secondary | Effect |
|------|---------|-----------|--------|
| Landing | Red/Green gradient | ASCII pattern | Christmas tree wave |
| Cat | Burgundy/Pink | Dither wave | Retro gradient |
| Photo | Purple/Orange | Gold sine wave | Warm ASCII pattern |
| Ending | Burgundy | Gold/Orange blob | Swirl with blur |

---

## Animation System

### Glow Animation Pattern

```css
@keyframes glow-[color] {
  0%, 100% {
    text-shadow: [dim glow];
    opacity: 0.85;
    transform: scale(1);
  }
  50% {
    text-shadow: [bright glow];
    opacity: 1;
    transform: scale(1.02);
  }
}

animation: glow-[color] 2.5s ease-in-out infinite;
```

### Staggered Delays

```css
.animate-glow-cyan { animation-delay: 0s; }
.animate-glow-pink { animation-delay: 0.4s; }
.animate-glow-gold { animation-delay: 0.8s; }
```

---

## Button Styling

### Base Styles

```css
/* No border radius */
border-radius: 0;

/* Pixelated border corners using absolute divs */
/* Gradient background */
/* Neon glow box-shadow */
/* Press Start 2P font */
```

### Hover State

```css
hover:brightness-110
hover:scale-[1.02]
hover:-translate-y-0.5
```

### Active State

```css
active:translate-y-1
active:scale-[0.98]
active:brightness-90
```

---

## Photo Frame Styling

### Single Photo (Photo Page)

```css
padding: 6px;
background: linear-gradient(135deg, #ffd700 0%, #ff6b35 100%);
box-shadow: 0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 107, 53, 0.3);
```

### Gallery Photos (Ending Page)

```css
border: 3px solid #ffd700;
box-shadow: 0 0 20px rgba(255, 215, 0, 0.4), 0 0 40px rgba(255, 107, 53, 0.2);
backdrop-filter: blur(4px);
background: rgba(0, 0, 0, 0.3);
```

---

## Responsive Design

### Mobile-First

- All pages designed for mobile portrait
- Max content width varies by page
- Fixed position buttons at corners

### Breakpoints

| Name | Width | Adjustments |
|------|-------|-------------|
| sm | 640px | Larger text, wider frames |
| md | 768px | Desktop optimizations |

---

## Z-Index Scale

| Layer | Z-Index | Usage |
|-------|---------|-------|
| Shader Background | 0 | Full-screen shaders |
| Content | 10 | Main content, photos |
| Decorations | 10 | Cat images |
| Buttons | 20 | Fixed position CTAs |
