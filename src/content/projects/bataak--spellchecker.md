---
repo: "bataak/spellchecker"
name: "spellchecker"
description: "Offline-mode Mongolian word spell-checker web app"
originalDescription: "Офлайн горимд ажиллах монгол үгийн алдаа шалгагч веб ап"
descriptionLang: "mn"
readmeQualityOk: true
url: "https://github.com/bataak/spellchecker"
homepage: "https://aldaa.bichig.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["pwa", "pwa-app", "wasm"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 59
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-16T07:02:20Z"
lastCommitAt: "2026-10-26T09:15:39Z"
lastReleaseAt: "2026-06-18T02:30:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["bataak"]
openGraphImageUrl: "https://opengraph.githubassets.com/93f2f73b0a44501549dfdefe4439006241548170d61c52a2d17789f90219f47a/bataak/spellchecker"
---

# Mongolian word spell checker

A Mongolian and English word spell checker for web browsers that works in offline mode — <https://aldaa.bichig.dev>

Spell checking is done only on your device, so no data is sent to a third-party server. No installation or registration is required. It is free to use and open source.

## Development

The source code is written in TypeScript (`src/`, `tests/`). Vite transpiles during the build, while `tsc --noEmit` only performs type checking. Tests run `.ts` files directly using Node's type stripping.

Requirements: Node.js 22.18+.

```sh
npm ci             # install required packages (first time)
npm test           # type check + unit tests
npm run test:e2e   # check the whole app in a browser (Playwright)
npm run typecheck  # type check only (tsc --noEmit)
npm run dev        # development server (localhost)
npm run preview    # production build and preview
npm run build      # production build (dist/)
```

The `dev`, `preview`, and `build` commands run type and unit checks before starting (`predev`/`prepreview`/`prebuild` hook)

`npm run test:e2e` starts the Vite server itself, and browser…
