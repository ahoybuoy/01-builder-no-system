# Startup Landing Page

A simple startup landing page built with Next.js.

## What This Test Repo Tests

This repo represents a **project with NO design system** - the classic "just ship it" startup approach.

### Characteristics:
- **No tokens or CSS variables** - everything is hardcoded
- **Inconsistent styling** - mix of inline styles and arbitrary Tailwind values
- **No design patterns** - each component styles itself differently
- **Random color choices** - different blues, greens scattered throughout

### Expected Buoy Behavior:
- Should detect **maturity score < 50**
- Should trigger **BUILDER MODE**
- Should NOT try to surface patterns (there aren't any)
- Should offer to help establish a design system foundation

### Hardcoded Values Found:
- Colors: `#3B82F6`, `#10B981`, `#EF4444`, `#F59E0B`, `#6366F1`, `#8B5CF6`
- Spacing: `24px`, `16px`, `8px`, `32px`, `12px`
- Border radius: `8px`, `4px`, `12px`
- Font sizes: `14px`, `16px`, `18px`, `24px`, `32px`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
