---
repo: "petekp/tw-fade"
name: "tw-fade"
description: "Elegant, CSS-driven scroll-edge fade masking for Tailwind CSS v4. Zero JavaScript."
url: "https://github.com/petekp/tw-fade"
homepage: "https://pete.design/tw-fade"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
topics: ["css", "fade", "masking", "plugin", "scroll", "tailwind", "tailwind-plugin", "tailwindcss-plugin", "tailwindcss-v4", "css-mask"]
stars: 71
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-17T04:12:38Z"
lastCommitAt: "2026-06-30T06:51:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 37
maintainers: ["petekp"]
openGraphImageUrl: "https://opengraph.githubassets.com/abab6e1ebb533738202ada145f9fe3df34ca4d7052e06414395728e853c56bae/petekp/tw-fade"
---

# tw-fade

Scroll-aware edge fades for Tailwind CSS v4. Mask the edges of any scroll container so content dissolves into the surface behind it. All CSS. No runtime JavaScript.

**[Live demo](https://pete.design/tw-fade)**

```html
  
</div>
```

The fade appears only when there is content beyond that edge, then recedes again when you reach the start or end.

## Why

A static gradient overlay is always on. It dims content even when nothing is hidden beyond the edge, and it sits in front of your content as another layer.

`tw-fade` uses a CSS mask on the scroll container itself:

- **Scroll-aware.** The fade is gated by the element's own scroll position.
- **No extra DOM.** The mask lives on the scroll container.
- **Surface-neutral.** The mask reveals whatever is behind the element instead of painting a fake background color.
- **Composable.** Direction, size, travel distance, and clear zones are separate utilities.
- **Graceful fallback.** Browsers without scroll-driven animations get a static fade instead of a broken mask.

## Install

### Tailwind v4 source path

Use this when your app already builds with Tailwind v4. This path supports arbitrary values like `fade-size-[2rem]`.…
