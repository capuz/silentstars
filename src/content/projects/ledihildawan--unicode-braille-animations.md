---
repo: "ledihildawan/unicode-braille-animations"
name: "unicode-braille-animations"
description: "⠿ A collection of ultra-lightweight, zero-dependency, and accessible loading spinners built entirely with Unicode Braille characters and pure CSS. High-performance, infinitely scalable, and OKLCH-ready."
readmeQualityOk: true
url: "https://github.com/ledihildawan/unicode-braille-animations"
homepage: "https://ledihildawan.github.io/unicode-braille-animations/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [56, 25]
topics: ["accessibility", "braille", "copy-paste", "css", "css-animations", "frontend", "loaders", "loading-spinner", "pure-css", "ui-library"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-21T09:40:07Z"
lastCommitAt: "2026-08-01T06:16:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 17
maintainers: ["ledihildawan"]
openGraphImageUrl: "https://opengraph.githubassets.com/df004c2f8b07a262d8d9081d960f33782134ad60b5b9e84125848b4d3814a595/ledihildawan/unicode-braille-animations"
---

# Braille Spinners ⠿ | Pure CSS Loading Animations

A zero-dependency collection of ultra-lightweight, pure CSS loading indicators built entirely with Unicode Braille characters.

**Zero SVGs. Zero Dependencies. Infinitely Scalable.**

---

## ✨ Features

- **Pure CSS Animations:** Zero dependencies. Zero required JavaScript for the loader engine—optional JS only for enhanced interactions.
- **Modern Color Space:** Powered by `OKLCH` for consistent luminance and vibrant "HDR-like" colors.
- **Physical Bloom Effect:** Multi-layered shadows and non-linear gradients for a premium hardware feel.
- **Ultra Lightweight:** Uses native browser text rendering—smaller than the tiniest SVG.
- **SEO & A11y Optimized:** Fully accessible with semantic `role="status"` and screen-reader support.

## 🚀 Quick Start

### 1. Global Configuration
Add these design tokens to your `:root` or global stylesheet:

```css
:root {
  --loader-shimmer-base: rgba(255, 255, 255, 0.3);
  --loader-shimmer-peak: #ffffff;
  --loader-glow-color: #ffffff;
  --loader-glow-sm: 0.125rem;
  --loader-glow-lg: 0.375rem;
  --loader-intensity: 1;
  --loader-size: 1em;
}

.braille-loader {
  display: inline-flex;…
