# UIPro Init (Claude): Premium UI/UX Scaffolding & Design System

This system initialization document lays the groundwork for Moba Taxi's custom, luxury glassmorphic dark interface.

## 1. Visual Hierarchy & Color Token Pairings
- **Primary Accent (Taxi Gold)**: `#F5B800` (Main gold/yellow, conveying speed, opportunity, and safety) and `#FFD54F`.
- **Secondary Accent (Canadian Crimson)**: `#E31C23` (Representing proudly Made in Canada, used in accents, tags, and small maple leafs).
- **Background (Deep Obsidian)**: Radial dark gradient `#090A0C` fading into `#111317` to allow high-contrast elements to shine.
- **Glassmorphic Surface**: Frosted backdrops `bg-neutral-900/40 backdrop-blur-md` with 20% opacity amber borders for premium glowing contours.

## 2. Typographic Scale (Poppins & JetBrains Mono)
- **Headings**: `font-sans` Poppins with heavy character weights (`font-bold`, `font-extrabold`) and narrow tracking (`tracking-tight`) to evoke a trusted yet modern transport brand.
- **Technical & Utility Data**: `font-mono` JetBrains Mono with small uppercase letters for indicators (e.g. `LIVE STATUS: NEWFOUNDLAND & LABRADOR`).

## 3. Micro-Interactions & Hover Dynamics
- **Framer Motion Micro-Springs**: Soft tactile hover bounces (`type: "spring"`, `stiffness: 400`, `damping: 15`).
- **Interactive Ride Request & Earnings Estimators**: Direct, continuous reactive slide state. Shows immediate mathematical payout and fare previews without reload.
- **Card-Level Glow Borders**: Understated border transitions from standard charcoal to active warm amber.
