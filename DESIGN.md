---
name: Zéta Narrative
colors:
  surface: '#121314'
  surface-dim: '#121314'
  surface-bright: '#393939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e4e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e4e2e2'
  inverse-on-surface: '#303031'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#121212'
  on-primary-container: '#7e7d7d'
  inverse-primary: '#5f5e5e'
  secondary: '#c7c6c4'
  on-secondary: '#2f312f'
  secondary-container: '#464745'
  on-secondary-container: '#b5b5b2'
  tertiary: '#e9c349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#181100'
  on-tertiary-container: '#987a00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e3e2e0'
  secondary-fixed-dim: '#c7c6c4'
  on-secondary-fixed: '#1a1c1a'
  on-secondary-fixed-variant: '#464745'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#121314'
  on-background: '#e4e2e2'
  surface-variant: '#343535'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 80px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  container-max: 1440px
  section-gap: 128px
  element-gap: 24px
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 32px
---

## Brand & Style

This design system embodies the quiet confidence of high-end perfumery. The brand personality is rooted in **Editorial Minimalism**—a philosophy where every element must justify its existence. The aesthetic is cinematic and moody, prioritizing atmosphere over utility. 

The design evokes an emotional response of exclusivity and sensory immersion. By utilizing high-contrast visuals and vast expanses of negative space, the interface mimics the physical experience of a luxury boutique: spacious, quiet, and meticulously curated. The style blends the precision of modern minimalism with the dramatic flair of a high-fashion editorial, creating a digital environment that feels more like a physical gallery than a typical storefront.

## Colors

The palette is defined by a high-contrast relationship between **Deep Obsidian** and **Alabaster**. The default mode is **Dark**, establishing a "nighttime" cinematic depth that allows product photography to emerge from the shadows.

- **Deep Obsidian (#121212):** The primary canvas. Used for backgrounds and deep overlays to provide an infinite, moody depth.
- **Alabaster (#FAF9F6):** The primary light source. Used for typography and primary UI lines to ensure stark legibility against the dark void.
- **Muted Champagne Gold (#D4AF37):** Used sparingly as a "prestige accent." Reserved for high-value calls to action, active states, or subtle dividers.
- **Ash Gray (#707070):** Used for secondary metadata and disabled states to maintain the low-noise environment.

## Typography

The typographic hierarchy relies on the tension between the classic elegance of **Playfair Display** and the utilitarian precision of **Inter**.

- **Display Text:** Large-scale headlines use Playfair Display with slight negative letter-spacing to emphasize its high-contrast serifs. These should be treated as graphic elements within the layout.
- **Body Copy:** Inter is utilized in its lighter weights (300/400) to maintain a modern, airy feel. Increased line heights (1.6) are mandatory to ensure the text feels uncrowded and premium.
- **Micro-Copy:** Functional labels and small headers should be set in Inter with increased letter-spacing and uppercase styling to evoke the labeling found on fragrance vials.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach for desktop to control the composition like a printed magazine spread. 

- **Macro-Whitespace:** A standard section gap of 128px ensures that product stories remain distinct. 
- **The 12-Column Grid:** Elements should often span fewer columns than expected (e.g., a single image spanning 6 columns centered), leaving wide margins to frame the content.
- **Reflow:** On mobile, margins tighten to 24px, and typography scales down aggressively. Content should stack vertically while maintaining the 80px+ vertical gap between distinct modules to preserve the feeling of "room to breathe."

## Elevation & Depth

This design system eschews traditional shadows in favor of **Tonal Layers** and **Hairline Outlines**.

- **Surfaces:** Depth is created by placing Alabaster elements or semi-transparent Ash Gray overlays on top of the Deep Obsidian background.
- **Glassmorphism:** Use subtle backdrop blurs (20px+) for navigation bars and overlays to maintain the cinematic background visibility.
- **Borders:** Instead of shadows, use 1px solid borders in Ash Gray or Champagne Gold to define interactive zones. This creates a "technical-luxe" look that feels architectural rather than organic.
- **Depth through Imagery:** Layers are primarily established through overlapping images and text, creating a collage-like depth without the use of artificial drop shadows.

## Shapes

The shape language is strictly **Sharp (0)**. 

Every interactive element—buttons, input fields, image containers—must feature 90-degree corners. This evokes the silhouette of high-end fragrance bottles and architectural glass. Any rounding would soften the brand's sophisticated edge and is to be avoided. The only exception is the use of circular elements for iconography or decorative "scent profile" charts.

## Components

### Buttons
Primary buttons are rectangular with a 1px Alabaster border and no fill. On hover, they transition to a full Alabaster fill with Deep Obsidian text. The "Prestige" variant uses the Champagne Gold for the border.

### Input Fields
Fields consist of a single 1px Ash Gray bottom border. Labels use the `label-caps` style, positioned above the line. The focus state transitions the bottom border to Alabaster.

### Cards
Product cards are "Border-free." They rely on high-quality photography against the Deep Obsidian background. Typography is left-aligned or centered beneath the image using `headline-md`.

### Chips & Tags
Used for scent notes (e.g., "Oud," "Bergamot"). These are small, uppercase labels with a 1px Ash Gray border, keeping them secondary to the main product imagery.

### Lists
Lists of ingredients or scent pyramids should be presented with generous vertical padding (32px+) between items, separated by 1px wide Ash Gray dividers that do not span the full width of the container.