# Components Specification

## Overview

All UI components follow 8bitcn pixel-art style with shader backgrounds. Components are organized into:
- **UI Components** - Reusable 8bit-styled base components
- **Shader Backgrounds** - Full-screen animated shader effects
- **Hooks** - State management utilities

---

## UI Components (`src/components/ui/8bit/`)

### Button

8-bit styled button with pixel borders, shadow, and hover/active effects.

```typescript
interface BitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  font?: "normal" | "retro"
  asChild?: boolean
}
```

**Styling:**
- Pixelated border corners (absolute positioned divs)
- Gradient backgrounds with neon glow
- Font: Press Start 2P (retro variant)

**Hover/Active Effects:**
```css
hover:brightness-110 hover:scale-[1.02] hover:-translate-y-0.5
active:translate-y-1 active:scale-[0.98] active:brightness-90
```

**Button Styles Used:**
| Color | Gradient | Usage |
|-------|----------|-------|
| Pink | `#ff4477 → #ff3366 → #cc0044` | START, NEXT (forward) |
| Cyan | `#00cccc → #00aaaa → #008888` | RESTART (back) |

---

### PixelFrame

8-bit RPG-style frame with stepped pixel borders.

```typescript
interface PixelFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'gold' | 'cyan' | 'pink'
}
```

**Variants:**
| Variant | Inner Color | Outer Color | Usage |
|---------|-------------|-------------|-------|
| default | `#555555` | `#333333` | Generic containers |
| gold | `#ffd700` | `#8b4513` | Photo/ending pages |
| cyan | `#00ffff` | `#006666` | Landing title |
| pink | `#ff66cc` | `#660033` | Cat page |

**Structure:**
- Dark semi-transparent background with backdrop blur
- Stepped pixel border (2-layer effect)
- Corner pixels for authentic 8-bit look

---

## Shader Backgrounds

Using `shaders` npm package from shaders.com for animated backgrounds.

### Landing Page Shader
ASCII Christmas tree with wave distortion.

```typescript
<Shader>
  <LinearGradient colorA="#940320" colorB="#082400" />
  <ImageTexture url="..." opacity={0.05} blendMode="linearDodge" />
  <Ascii characters="✦★*+●○">
    <ImageTexture url="christmas-tree.png" objectFit="contain" />
    <WaveDistortion speed={1.5} strength={0.02} />
  </Ascii>
  <FilmGrain strength={0.03} />
</Shader>
```

### Cat Page Shader
Pink/magenta gradient with dither effect.

```typescript
<Shader>
  <LinearGradient colorA="#2d0a1a" colorB="#8b2942" />
  <Dither pixelSize={5} threshold={0.24}>
    <SineWave speed={1.9} amplitude={0.02} />
  </Dither>
  <LinearGradient colorA="#ff66cc" colorB="#cc0066" maskSource="dither" />
</Shader>
```

### Photo Page Shader
Warm wave with ASCII pattern.

```typescript
<Shader>
  <SolidColor color="#1a0f2e" />
  <Group>
    <SolidColor color="#ff6b35" />
    <SineWave color="#ffd700" />
    <Ascii characters="〜*" maskSource="sineWave" />
  </Group>
  <FilmGrain strength={0.12} />
</Shader>
```

### Ending Page Shader
Warm blob/swirl with progressive blur.

```typescript
<Shader>
  <FilmGrain strength={0.3}>
    <ProgressiveBlur intensity={1000}>
      <Swirl colorA="#8b2942" colorB="#2d0a1a" colorC="#a03050" />
      <Blob colorA="#ffd700" colorB="#ff6b35" highlightColor="#fffacd" />
      <WaveDistortion speed={3.4} strength={0.01} />
    </ProgressiveBlur>
  </FilmGrain>
</Shader>
```

---

## Pixel Art Icons (`src/routes/index.tsx`)

Inline SVG components with pixelated styling.

| Icon | Size | Usage |
|------|------|-------|
| PixelTree | 64x72 | Landing decoration |
| PixelGift | 16x16 | Landing decoration |
| PixelStar | 16x16 | Landing decoration |
| PixelBell | 16x20 | Landing decoration |
| PixelCandyCane | 12x24 | Landing decoration |
| PixelChest | 20x16 | Landing decoration |
| PixelPotion | 10x16 | Landing decoration |
| PixelOrnament | 10x12 | Landing decoration |
| PixelSnowball | 12x12 | Landing decoration |
| PixelSnowPile | 24x12 | Landing decoration |
| PixelStocking | 16x24 | Landing decoration |
| PixelMiniSnowman | 24x32 | Landing decoration |
| PixelReindeer | 24x32 | Landing decoration |
| PixelBabyReindeer | 20x24 | Landing decoration |
| PixelLights | 200x20 | Landing decoration |

---

## Hooks (`src/hooks/`)

### usePersistedPhoto

Single photo persistence with image compression.

```typescript
function usePersistedPhoto(
  storageKey: string
): [string | null, (file: File) => void]
```

**Features:**
- Compresses images to max 800px width
- Stores as base64 in sessionStorage
- Automatic cleanup on unmount

### usePersistedPhotos

Multiple photo persistence for gallery.

```typescript
function usePersistedPhotos(
  storageKey: string,
  count: number
): [(string | null)[], (index: number, file: File) => void]
```

**Features:**
- Manages array of photos
- Same compression as single photo
- Index-based updates

---

## Animation Classes (`src/styles.css`)

### Glow Animations

```css
.animate-glow-cyan {
  animation: glow-cyan 2.5s ease-in-out infinite;
}

.animate-glow-pink {
  animation: glow-pink 2.5s ease-in-out infinite;
  animation-delay: 0.4s;
}

.animate-glow-gold {
  animation: glow-gold 2.5s ease-in-out infinite;
  animation-delay: 0.8s;
}
```

### Snowfall (Legacy)

```css
.animate-snowfall-slow { animation: snowfall-slow linear infinite; }
.animate-snowfall-medium { animation: snowfall-medium ease-in-out infinite; }
.animate-snowfall-fast { animation: snowfall-fast ease-in-out infinite; }
```

### Other Animations

- `.animate-blink` - 8-bit style blink
- `.animate-twinkle` - Star twinkle
- `.animate-float` - Floating effect
