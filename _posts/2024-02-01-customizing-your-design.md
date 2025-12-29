---
layout: post
title: "Customizing Your Design"
date: 2024-02-01
author: "Your Name"
excerpt: "Learn how to personalize the colors, typography, and components of your website."
---

One of the best parts of owning your website is making it uniquely yours. This template uses Tailwind CSS with custom theme variables, making customization straightforward.

## The Color System

All colors are defined in `assets/css/tailwind.css` using the OKLCH color format. This modern color space provides more perceptually uniform colors and wider gamut support.

### Changing Your Primary Color

To change your primary brand color, edit the `@theme` block:

```css
@theme {
  --color-primary-500: oklch(0.58 0.22 265);
  --color-primary-600: oklch(0.50 0.22 265);
  /* ... */
}
```

The three values represent:
- **Lightness** (0-1): How light or dark the color is
- **Chroma** (0-0.4): Color intensity/saturation
- **Hue** (0-360): The color angle (red=0, green=145, blue=265)

## Typography

The template uses the Public Sans font family, a clean and modern typeface. You can swap this for any other web font by updating the `@font-face` declarations.

## Components

Visit the [design system page](/design) to see all available components:

- Buttons in various styles and sizes
- Cards and containers
- Form elements
- Alerts and notifications
- Spacing and shadow scales

## Building Your CSS

After making changes, rebuild the CSS:

```bash
npm run build:css
```

This compiles your Tailwind styles and includes only the classes you're actually using, keeping your CSS file small and fast.

## Tips for Good Design

1. **Stick to your palette** - Use your defined colors consistently
2. **Maintain hierarchy** - Use size and weight to show importance
3. **Whitespace matters** - Don't be afraid of empty space
4. **Test on mobile** - Most visitors will be on phones

Happy customizing!
