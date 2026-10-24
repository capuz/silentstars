---
repo: "jwnle31/emptyspaceheart.com"
name: "emptyspaceheart.com"
description: "A minimalist hub for Celeste"
readmeQualityOk: true
url: "https://github.com/jwnle31/emptyspaceheart.com"
homepage: "https://emptyspaceheart.com/"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [78, 21]
topics: ["celeste", "celestegame"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-09T23:38:47Z"
lastCommitAt: "2026-10-24T08:20:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 53
maintainers: ["jwnle31"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbf7f88b56be458286aca121925f482a14435e6a1551dc78f21b0bc08b599be4/jwnle31/emptyspaceheart.com"
---

# emptyspaceheart.com

emptyspaceheart.com is a minimalist hub for [Celeste](https://www.celestegame.com).

If you come across any useful resources missing from the website, please feel free to open an issue.

## Localization

The header's EN / 한국어 toggle changes the language without changing the URL.
The choice is saved in local storage. English is the default on a new visit.

Homepage copy is in `src/i18n/home.ts`, and shared footer copy is in
`src/i18n/common.ts`. Both are typed against the supported locales. To translate
another page, put its copy in a page-specific translation file and use
`useLocale()` from `src/i18n/locale.ts` to select it. Resource names and URLs
in `src/data/links.json` are proper names and stay the same across languages.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses…
