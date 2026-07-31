---
name: Luminous Intelligence
colors:
  surface: '#f9f9ff'
  surface-dim: '#d9d9e1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fa'
  surface-container: '#ededf5'
  surface-container-high: '#e8e7ef'
  surface-container-highest: '#e2e2e9'
  on-surface: '#1a1b21'
  on-surface-variant: '#424656'
  inverse-surface: '#2e3036'
  inverse-on-surface: '#f0f0f8'
  outline: '#737687'
  outline-variant: '#c2c6d8'
  surface-tint: '#EEF5FF'
  primary: '#004cca'
  on-primary: '#ffffff'
  primary-container: '#0062fe'
  on-primary-container: '#f2f3ff'
  inverse-primary: '#b4c5ff'
  secondary: '#7a5900'
  on-secondary: '#ffffff'
  secondary-container: '#fdbc00'
  on-secondary-container: '#6b4d00'
  tertiary: '#9e3100'
  on-tertiary: '#ffffff'
  tertiary-container: '#c84000'
  on-tertiary-container: '#fff1ed'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea7'
  secondary-fixed: '#ffdea2'
  secondary-fixed-dim: '#fdbc00'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5c4200'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59c'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832700'
  background: '#f9f9ff'
  on-background: '#1a1b21'
  surface-variant: '#e2e2e9'
  surface-white: '#FFFFFF'
  text-muted: '#5F6368'
typography:
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-md:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  container-padding: 24px
  gutter: 24px
---

## Brand & Style

This design system is built on the intersection of clarity and insight, reflecting an AI-focused ethos where data is transformed into "lightbulb moments." The aesthetic is rooted in **Modern Minimalism** with a focus on "floating" surfaces. 

The brand personality is intelligent, visionary, and highly efficient. By utilizing generous negative space and soft-edged containerization, the UI evokes a sense of weightlessness and cognitive ease. The visual narrative emphasizes structured intelligence through bold blue accents, while gold serves as the "spark" of insight—used exclusively for high-impact visual highlights and icons, never for body text.

## Colors

The palette is anchored by **Electric Blue**, which provides the structural framework for navigation, interaction, and primary typography. **Insight Gold** is reserved for status fills, primary icons, and progress indicators—it must not be used for text on light backgrounds to ensure accessibility.

The background strategy utilizes a "Layered White" approach: a pure white base (`#FFFFFF`) for the canvas, with pale blue accents (`#EEF5FF`) used for subtle section differentiation or "sunken" utility areas. Primary text remains a high-contrast near-black to maintain elite readability within an AI-centric information environment.

## Typography

We employ **Be Vietnam Pro** (as the closest available alternative to Poppins with enhanced contemporary geometric qualities) to establish a friendly yet technical tone. 

The type hierarchy is highly contrastive. Headings are bold and tightly tracked to feel architectural and authoritative. Body copy uses a generous line height (1.5x) to facilitate the reading of dense AI-generated insights. Labels utilize a slightly higher weight and increased letter spacing for immediate scanning in data-heavy views.

## Layout & Spacing

The system follows a **Fixed Grid** philosophy for desktop layouts to ensure "floating panes" remain balanced within the viewport. We use a 12-column grid with a 1200px max-width container. 

Margins and gutters are generous (24px) to emphasize the "clean and modern" aesthetic. For mobile, the grid collapses to 4 columns with 16px margins. Content is organized into modular panes with significant vertical spacing (80px between major sections) to prevent cognitive overload.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Ambient Shadows**. This design system avoids harsh borders in favor of depth. 

- **Level 0 (Canvas):** Pure white background.
- **Level 1 (Panes):** Surface-white containers with a "Luminous Shadow"—a very soft, wide-spread blur (24px-40px) using a low-opacity blue tint rather than gray. This makes the containers appear to float.
- **Level 2 (Popovers/Modals):** Increased shadow density to signify immediate interaction priority.

Interactive elements (buttons) use a subtle elevation lift on hover to reinforce the tactile nature of the interface.

## Shapes

The shape language is consistently **Rounded**, using an 8px (0.5rem) base radius for most components. This softens the technical nature of AI tools, making them feel more approachable. 

Larger containers and "floating panes" should utilize `rounded-xl` (24px) to emphasize their distinctness from the background canvas. Form inputs and buttons maintain the standard 8px radius for a crisp, professional look.

## Components

### Buttons
Primary buttons use the Blue (`#0062FE`) fill with white text. Secondary buttons are outlined in Blue or use a pale blue wash background. Gold is never used for primary buttons to maintain its status as a "highlight" color, but can be used for "Pro" or "Premium" feature triggers.

### Floating Panes (Cards)
The core organizational unit. These must have white backgrounds, 24px corner radius, and the signature "Luminous Shadow." Internal padding should be a minimum of 32px to maintain the brand’s airy feel.

### Input Fields
Inputs are minimal, featuring a subtle 1px border in a pale blue-gray. Upon focus, the border transitions to Primary Blue with a soft blue glow.

### Chips & Indicators
Used for AI tagging or status. These utilize the Gold (`#FFBD03`) for positive "insight" states and Blue for functional categories.

### Lists
Lists should be "unbound"—using white space and horizontal rules in the pale blue accent color rather than boxes to separate items, maintaining a light visual footprint.