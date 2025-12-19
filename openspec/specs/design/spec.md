# Design System Specification

## Overview

100% pixel-art aesthetic using 8bitcn component library with Christmas theme.

---

## Color Palette

### Primary Colors

| Name | Hex | RGB | CSS Variable | Usage |
|------|-----|-----|--------------|-------|
| Christmas Red | `#c41e3a` | 196, 30, 58 | `--christmas-red` | Primary buttons, accents |
| Christmas Green | `#228b22` | 34, 139, 34 | `--christmas-green` | Secondary, trees |
| Christmas Gold | `#ffd700` | 255, 215, 0 | `--christmas-gold` | Stars, highlights |
| Snow White | `#fffafa` | 255, 250, 250 | `--snow-white` | Text on dark, snow |

### Background Colors

| Name | Hex | Usage |
|------|-----|-------|
| Dark Blue | `#1a1a2e` | Page backgrounds |
| Darker Blue | `#16213e` | Cards, containers |
| Night | `#0f0f23` | Deep backgrounds |

### Utility Colors

| Name | Hex | Usage |
|------|-----|-------|
| Black | `#000000` | Borders, shadows |
| White | `#ffffff` | Light backgrounds |
| Gray | `#4a4a4a` | Disabled states |

---

## Typography

### Font Family

```css
font-family: 'Press Start 2P', cursive;
```

**Google Fonts URL:**
```
https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap
```

### Font Sizes

| Size | Pixels | Tailwind | Usage |
|------|--------|----------|-------|
| xs | 8px | `text-xs` | Small labels |
| sm | 10px | `text-sm` | Body text |
| base | 12px | `text-base` | Default |
| lg | 16px | `text-lg` | Subheadings |
| xl | 20px | `text-xl` | Headings |
| 2xl | 24px | `text-2xl` | Page titles |
| 3xl | 32px | `text-3xl` | Hero titles |

### Line Height

- Use generous line-height: `leading-relaxed` or `leading-loose`
- Pixel fonts need more vertical space

---

## Spacing

### Base Unit

8px grid system for pixel-perfect alignment.

### Scale

| Name | Value | Tailwind |
|------|-------|----------|
| 1 | 4px | `p-1`, `m-1` |
| 2 | 8px | `p-2`, `m-2` |
| 4 | 16px | `p-4`, `m-4` |
| 6 | 24px | `p-6`, `m-6` |
| 8 | 32px | `p-8`, `m-8` |
| 12 | 48px | `p-12`, `m-12` |
| 16 | 64px | `p-16`, `m-16` |

---

## Borders

### Style

- **Width:** 4px solid
- **Color:** Black (`#000000`)
- **Radius:** None (`rounded-none`)

```css
border: 4px solid black;
border-radius: 0;
```

### Tailwind Classes

```html
<div class="border-4 border-black rounded-none">
```

---

## Shadows

### Pixel Shadow

Hard-edge shadow for 8-bit effect.

```css
box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 1);
```

### Tailwind Classes

```html
<div class="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
```

### Active State

Remove shadow and translate down on click.

```css
.active {
  transform: translateY(4px);
  box-shadow: none;
}
```

---

## Animation

### Principles

1. **Step-based motion** - Use `steps()` or `step-start` for pixel feel
2. **Discrete changes** - Avoid smooth gradients
3. **8-bit timing** - Snappy, game-like responses

### Keyframe Patterns

**Snowfall:**
```css
@keyframes snowfall {
  0% {
    transform: translateY(-100vh) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
  }
}

animation: snowfall 8s linear infinite;
```

**Spin (Vinyl):**
```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

animation: spin 3s linear infinite;
```

**Confetti:**
```css
@keyframes confetti-fall {
  0% {
    transform: translateY(-100%) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}
```

**Blink (8-bit style):**
```css
@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

animation: blink 1s step-start infinite;
```

---

## Responsive Design

### Breakpoints

| Name | Min Width | Usage |
|------|-----------|-------|
| sm | 640px | Small tablets |
| md | 768px | Tablets |
| lg | 1024px | Laptops |
| xl | 1280px | Desktops |

### Mobile-First

All pages designed for mobile first (portrait orientation).

```css
/* Mobile default */
.container {
  padding: 16px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 32px;
  }
}
```

### Layout Constraints

- Max content width: 640px
- Centered horizontally
- Full viewport height: `min-h-screen`

---

## Z-Index Scale

| Layer | Z-Index | Usage |
|-------|---------|-------|
| Background | 0 | Page background, decorations |
| Content | 10 | Main content |
| Floating | 20 | Floating elements, tooltips |
| Overlay | 30 | Modal overlays |
| Modal | 40 | Modal content |
| Toast | 50 | Notifications |

---

## CSS Custom Properties

```css
:root {
  /* Colors */
  --christmas-red: #c41e3a;
  --christmas-green: #228b22;
  --christmas-gold: #ffd700;
  --snow-white: #fffafa;
  --bg-dark: #1a1a2e;
  --bg-darker: #16213e;

  /* Shadows */
  --pixel-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 1);

  /* Borders */
  --pixel-border: 4px solid black;

  /* Font */
  --font-pixel: 'Press Start 2P', cursive;
}
```
