---
repo: "vibe-code-tours/vibe-code-tours.github.io"
name: "vibe-code-tours.github.io"
description: "Vibe Code Tours — public site (bilingual). vibecode.tours"
url: "https://github.com/vibe-code-tours/vibe-code-tours.github.io"
homepage: "https://vibecode.tours"
language: "Astro"
languages: ["Astro", "JavaScript"]
languagePcts: [63, 25]
stars: 15
forks: 176
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 175
recentReleases: 0
createdAt: "2026-05-25T14:18:58Z"
lastCommitAt: "2026-07-03T12:41:06Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 89
undervaluedScore: 57
maintainers: ["vibecode-team-repos[bot]", "kaykhaingmyint6170", "vibecode-ting"]
openGraphImageUrl: "https://opengraph.githubassets.com/6874473835ce4fc447310578aa58aa7b594a45bfec6611d7db2a5c3c784372cd/vibe-code-tours/vibe-code-tours.github.io"
---

# Vibe Code Tours — public site

Bilingual (English + Burmese) static site for **Vibe Code Tours**, a Myanmar AI
coding tour. Tagline: _"A guided journey into AI-paired coding."_

Built with **Astro 5 + Tailwind CSS**, zero client JS by default, output is a
static site that deploys free to GitHub Pages.

## Quick start

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:4321/vibe-code-tours-site
npm run build      # static build into dist/
npm run preview    # preview the built dist/ locally
```

## Project layout

```
src/
  i18n/
    en.json        # English copy (source of truth for UI strings)
    my.json        # Burmese copy — values prefixed "[MY] " need translation
    utils.ts       # locale detection + base-aware link helpers
  data/
    chapters.ts    # curriculum card data (Ch0-Ch8)
  layouts/Base.astro      # <head>, SEO/OG meta, header + footer wrapper
  components/             # Header, Footer, ChapterCard + one *Body per page
  pages/                  # routes (English at /, Burmese mirrored under /my)
public/            # favicon.svg, og-default.svg, robots.txt
scripts/gen-my.mjs # regenerates my.json…
