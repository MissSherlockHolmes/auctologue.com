# Auctologue design specs (for HTML)

Use this when building comparison pages or other on-brand HTML. Copy the starter CSS into your file and reuse the tokens below.

## Fonts

Load once in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Pinyon+Script&display=swap" rel="stylesheet" />
```

| Role | Font | Weights | Notes |
|------|------|---------|--------|
| Body / UI | **Inter** | 400, 500, 600, 700 | Default for almost everything |
| Brand wordmark | **Pinyon Script** | regular | Logo text “Auctologue” only |

Fallback stack for body: `"Inter", system-ui, -apple-system, "Segoe UI", sans-serif`

---

## Color tokens

### Core

| Token | Hex | Use |
|-------|-----|-----|
| `--bg` | `#0b1220` | Deep page background |
| `--panel` | `#111827` | Cards / panels / control bars |
| `--border` | `#1f2937` | Dividers, panel edges |
| `--nav-bg` | `#1b3760` | Sticky top nav |
| `--text-primary` | `#e5e7eb` | Headings, main text |
| `--text-secondary` | `#cbd5e1` | Supporting copy |
| `--text-muted` | `#94a3b8` | Labels, lot badges, captions |
| `--link-color` / `--brand-blue` | `#93c5fd` | Links (default) |
| `--accent-blue` | `#60a5fa` | Link hover, accents |
| `--primary-blue` | `#3b82f6` | Button gradient start |
| `--dark-blue` | `#2563eb` | Button gradient end |
| `--auct-accent` / laser green | `#4ade80` | Auctologue wins, brand highlights, “good” |

### Semantic (comparisons)

| Meaning | Color | Notes |
|---------|-------|--------|
| Auctologue / correct brand | `#4ade80` | Soft glow optional: `text-shadow: 0 0 10px rgba(74, 222, 128, 0.45)` |
| Incomplete / missing brand | `#ff5c5c` | Angry but readable; optional glow `0 0 12px rgba(255, 40, 40, 0.35)` |
| Competitor column accent | `#93c5fd` | Labels only |
| Button text on blue | `#f8fafc` | Primary CTAs |

### Signature gradient text

Green → blue → soft indigo (hero / section titles):

```css
background: linear-gradient(90deg, #4ade80 0%, #60a5fa 55%, #818cf8 100%);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
```

### Page background

Dark blue atmosphere (not flat black):

```css
background:
  radial-gradient(circle at 8% 0%, rgba(59, 130, 246, 0.22), transparent 42%),
  radial-gradient(circle at 92% 12%, rgba(59, 130, 246, 0.15), transparent 38%),
  linear-gradient(180deg, #162744 0%, #111f35 26%, #0f1a2d 55%, #0b1220 100%);
```

---

## Layout & shape

| Spec | Value |
|------|--------|
| Content max width | `1120px` (site) / `1180px` (compare) |
| Side padding | `20px` |
| Large radius | `18px` (hero panels) |
| Control / button radius | `10px`–`12px` |
| Line height (body) | `1.6` |
| Heading letter-spacing | about `-0.02em` to `-0.03em` |

Mobile-first: stack columns under ~820px; side-by-side on desktop for comparisons.

---

## Type scale (typical)

| Element | Size |
|---------|------|
| Page title | `clamp(1.85rem, 4.5vw, 2.75rem)`, weight 700 |
| Hero (marketing) | `clamp(2.3rem, 8.2vw, 4.4rem)`, weight 700 |
| Brand script | `clamp(1.9rem, 2.8vw, 2.4rem)` |
| Section label (uppercase) | `0.75rem`–`0.8rem`, tracking `0.06em`, muted color |
| Listing title | `~1rem`, weight 600 |
| Body / description | `0.88rem`–`1.02rem`, secondary color |

---

## Components to mimic

### Primary button (filled blue)

```css
background: linear-gradient(180deg, #3b82f6, #2563eb);
color: #f8fafc;
border-radius: 12px;
padding: 12px 24px;
font-weight: 600;
border: 0;
```

### Secondary button (thin blue outline)

```css
background: transparent;
color: #e5e7eb;
border: 1px solid rgba(147, 197, 253, 0.45);
border-radius: 12px;
padding: 11px 24px;
font-weight: 600;
```

### Green outline button (e.g. Watch Now)

```css
background: transparent;
color: #4ade80;
border: 1px solid rgba(74, 222, 128, 0.65);
border-radius: 12px;
padding: 11px 24px;
font-weight: 600;
```

### Dark CTA (homepage “Try Auctologue”)

```css
background: #060b13;
color: #fff;
border-radius: 12px;
padding: 12px 26px;
font-weight: 600;
```

### Panel / sticky bar

```css
background: rgba(17, 24, 39, 0.72); /* or solid #111827 */
border: 1px solid #1f2937;
border-radius: 14px;
```

### Thumbnails (compare rows)

- Size: ~80px mobile / ~112px desktop
- `object-fit: cover`
- `border-radius: 10px`
- `border: 1px solid #1f2937`
- Background behind image: `#0b1220`

---

## Comparison page patterns

- **Left** = Auctologue (green accents when calling out good brands)
- **Right** = competitor (blue labels; red title if brands/essentials missing)
- Lot label: small uppercase muted text (`Lot 40`)
- Prefer clean rows with a bottom border `#1f2937` over heavy card chrome
- Keep the look dark, calm, and readable — not neon-heavy

---

## Starter snippet (paste into new HTML)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your title — Auctologue</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Pinyon+Script&display=swap" rel="stylesheet" />
  <style>
    :root {
      --primary-blue: #3b82f6;
      --dark-blue: #2563eb;
      --accent-blue: #60a5fa;
      --brand-blue: #93c5fd;
      --text-primary: #e5e7eb;
      --text-secondary: #cbd5e1;
      --text-muted: #94a3b8;
      --bg: #0b1220;
      --border: #1f2937;
      --panel: #111827;
      --link-color: #93c5fd;
      --auct-accent: #4ade80;
      --page-bg:
        radial-gradient(circle at 8% 0%, rgba(59, 130, 246, 0.22), transparent 42%),
        radial-gradient(circle at 92% 12%, rgba(59, 130, 246, 0.15), transparent 38%),
        linear-gradient(180deg, #162744 0%, #111f35 26%, #0f1a2d 55%, var(--bg) 100%);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
      color: var(--text-primary);
      background: var(--page-bg);
      line-height: 1.6;
    }
    .wrap { max-width: 1180px; margin: 0 auto; padding: 32px 20px 80px; }
    h1 {
      font-size: clamp(1.85rem, 4.5vw, 2.75rem);
      font-weight: 700;
      letter-spacing: -0.03em;
      margin-bottom: 10px;
      background: linear-gradient(90deg, #4ade80 0%, #60a5fa 55%, #818cf8 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .lede { color: var(--text-secondary); max-width: 640px; margin-bottom: 28px; }
    .brand-good {
      color: var(--auct-accent);
      font-weight: 700;
      text-shadow: 0 0 10px rgba(74, 222, 128, 0.45);
    }
    .title-incomplete {
      color: #ff5c5c;
      font-weight: 700;
      text-shadow: 0 0 12px rgba(255, 40, 40, 0.35);
    }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>Your comparison title</h1>
    <p class="lede">Short supporting sentence.</p>
    <!-- comparison content -->
  </div>
</body>
</html>
```

---

## Private invite pages

If this HTML is for a **code-gated private invite**, send Auto:

1. The HTML file (content can use the starter above)
2. Slug (e.g. `midwest-auction`)
3. Access code (e.g. `AUCT-MWA1`)

You do **not** need to build the access-code screen — that wrapper is added automatically.
