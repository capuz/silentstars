---
repo: "michaelperrin/randonavigo"
name: "randonavigo"
description: "RandoNavigo - Randonnées accessibles en transport autour de Paris"
readmeQualityOk: true
url: "https://github.com/michaelperrin/randonavigo"
homepage: "https://www.randonavigo.fr/"
language: "MDX"
languages: ["MDX", "Astro"]
languagePcts: [56, 30]
topics: ["hiking", "react", "astro"]
stars: 14
forks: 1
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2017-05-07T12:06:48Z"
lastCommitAt: "2026-09-04T08:08:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 45
maintainers: ["michaelperrin"]
openGraphImageUrl: "https://opengraph.githubassets.com/d990c08a94bb282f49d34c6f3f7a28d9d8bf0680e83c0edc92bb8ef131044e5e/michaelperrin/randonavigo"
---

# RandoNavigo

RandoNavigo helps you find the perfect hike around Paris:

- All hikes can be accessed with public transportation. All you need is a ticket or a monthly/yearly Navigo pass. Just hop on a train (RER or Transilien) and you will get to the starting point.
- All hike routes are carefully crafted to maximize time spending in nature.

## Tech stack

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Leaflet](https://leafletjs.com/) for maps.
- [PhotoSwipe](https://photoswipe.com/) for galleries.
- [Cloudflare D1](https://developers.cloudflare.com/d1/) + [Drizzle ORM](https://orm.drizzle.team/) for on-page comments and reactions (served by [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/) in `functions/`).

## Getting Started

Run the development server:

```bash
npm run dev
```

### Comments & reactions (D1) — why not only `npm run dev`?

The site is built as **static HTML** with Astro. The **API** (`/api/comments`, `/api/reactions`) lives in **Cloudflare Pages Functions**, not in the Astro dev server.

| Command | What it does |
| :------ | :----------- |
| `npm run dev` | Astro + Vite only. Fast editing and HMR.…
