# Vercel Labs Agent Skills: React Best Practices & Vercel Deployment Optimization

This document outlines the elite rendering strategies and React 19 paradigms implemented for the **Moba Taxi** landing page.

## 1. React 19 Paradigm Shifts
- **Ref as a Prop**: React 19 supports `ref` as a normal prop, removing the need for legacy `forwardRef`.
- **Concurrent Features**: Leverage transitions and server action hooks to handle state safely during operations (e.g., driver signup/form submit).
- **TypeScript Strict Safety**: Strong typing for interactive maps, estimator modes, active status flags, states, and props. No lazy `any` types.

## 2. Web Layout & Performance Tuning
- **Layout Shift Mitigation**: Explicit image dimensions on assets, dynamic text sizing with layout-shift boundaries.
- **Font-Display Swap**: Used for Poppins and JetBrains font-face imports to ensure immediate system text rendering during web font load.
- **Hardware-Accelerated Animations**: Transform animations (`scale`, `translate`, `opacity`) run via Framer Motion, utilizing CSS composition layer to shield CPU cycles.

## 3. SEO & Vercel Deployment Optimization
- **Responsive Pre-rendering Ready**: Single-source stylesheet, Tailwind CSS bundling strategy.
- **Semantics**: Section tag structure (`<header>`, `<main>`, `<section>`, `<footer>`) to score 100 on accessibility and search engines.
- **Deferred Non-Critical Assets**: Lazy animation triggering for bottom-fold components via viewport triggers (`whileInView` and `viewport={{ once: true }}`).
