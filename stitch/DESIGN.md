---
name: Lumina Tech Persona
colors:
  surface: '#141218'
  surface-dim: '#141218'
  surface-bright: '#3b383e'
  surface-container-lowest: '#0f0d13'
  surface-container-low: '#1d1b20'
  surface-container: '#211f24'
  surface-container-high: '#2b292f'
  surface-container-highest: '#36343a'
  on-surface: '#e6e0e9'
  on-surface-variant: '#cbc4d2'
  inverse-surface: '#e6e0e9'
  inverse-on-surface: '#322f35'
  outline: '#948e9c'
  outline-variant: '#494551'
  surface-tint: '#cfbcff'
  primary: '#cfbcff'
  on-primary: '#381e72'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#6750a4'
  secondary: '#cdc0e9'
  on-secondary: '#342b4b'
  secondary-container: '#4d4465'
  on-secondary-container: '#bfb2da'
  tertiary: '#e7c365'
  on-tertiary: '#3e2e00'
  tertiary-container: '#c9a74d'
  on-tertiary-container: '#503d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0e9'
  on-secondary-fixed: '#1f1635'
  on-secondary-fixed-variant: '#4b4263'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#e7c365'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#141218'
  on-background: '#e6e0e9'
  surface-variant: '#36343a'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  code:
    fontFamily: monospace
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
This design system is engineered for a premium developer portfolio that balances high-end engineering precision with creative vibrancy. The brand personality is innovative, energetic, and sophisticated, targeting tech recruiters and collaborators who value both code quality and aesthetic finish.

The visual direction utilizes **Glassmorphism** and **Modern Corporate** aesthetics. It relies on deep background blurs, subtle mesh gradients that simulate light sources, and a "bento-box" layout philosophy. The interface should feel like a high-performance IDE blended with a premium editorial magazine—clean, functional, yet undeniably striking.

## Colors
The palette is built around a "High-Contrast Tech" logic. The dark mode utilizes deep slate tones to provide a stable foundation for the vibrant indigo and teal accents. In light mode, the primary indigo deepens to ensure accessibility while maintaining its energetic character.

Use the `primary_gradient` for high-impact elements like hero headlines, primary call-to-action buttons, and active state indicators. Mesh gradients should be used sparingly in the background of cards or sections, using low-opacity blurs of the primary and secondary colors to create a sense of depth and atmospheric light.

## Typography
The typographic system leverages **Geist** for its technical, monolinear precision in headings and UI labels, paired with **Inter** for optimized readability in long-form content. 

Display styles should use tight letter-spacing and heavy weights to command attention. For body text, maintain a generous line height to ensure clarity against potentially complex glassmorphic backgrounds. Code snippets should always be rendered in a monospaced font to reinforce the developer-centric nature of the portfolio.

## Layout & Spacing
The system follows a fluid 12-column grid for desktop, transitioning to a 4-column grid for mobile. Layouts should prioritize a "Bento-style" modularity—grouping related information into distinct cards of varying sizes.

Section vertical spacing should be aggressive (`xl`) to allow the design to breathe and to prevent the glassmorphic effects from feeling cluttered. Use `lg` for internal section padding and `md` for spacing between related components within a card.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and layered shadows rather than flat color changes. 

1.  **Base Layer:** The solid background color (Slate 950 or White).
2.  **Mid Layer (Cards):** Semi-transparent surfaces (80% opacity) with a 16px-24px `backdrop-filter: blur()`. Apply a 1px inner border (`glass_stroke`) to simulate a light-catching edge.
3.  **Top Layer (Modals/Popovers):** Higher opacity (95%) with a more aggressive drop shadow (0px 20px 50px rgba(0,0,0,0.3)) to create a floating effect.

Shadows should be "ambient"—long, soft, and slightly tinted with the primary indigo color in dark mode to simulate glowing light emission from the components.

## Shapes
The shape language is "Friendly-Tech." It avoids the harshness of sharp corners in favor of generous 16px radii for cards and containers. This softened geometry balances the technical feel of the typography and monospaced elements. 

Small UI elements like chips or badges should use the `pill` shape for maximum distinctness against rectangular cards. Buttons use a slightly tighter 12px radius to feel more precise and clickable.

## Components

### Buttons
- **Primary:** Uses the `primary_gradient` with white text (dark mode) or high-contrast indigo text (light mode). Includes a subtle outer glow on hover.
- **Secondary:** Glassmorphic background with a 1px border. On hover, the background opacity increases.
- **Ghost:** No background, only primary color text.

### Cards (Project/Experience)
- Use the glassmorphism specifications from the Elevation section. 
- Hover state: The 1px border brightness increases, and the card scales slightly (1.02x) with a smooth transition.
- Project cards should feature a blurred mesh gradient behind the featured image to make it "pop" off the surface.

### Inputs & Fields
- Dark background with a low-opacity white border.
- Focus state: The border color changes to the `secondary` teal, and a subtle glow is applied.

### Chips & Tags
- Small, pill-shaped elements with a low-opacity background of the `secondary` or `accent` color. 
- Used for tech stack icons and status labels.

### Progress Indicators
- Use the `secondary` teal for success/completion and the `primary` indigo for active/loading states. All bars should have rounded caps.