---
repo: "luizomf/otaviomiranda.com.br"
name: "otaviomiranda.com.br"
description: "My personal site and blog. All code, posts, and history are open."
readmeQualityOk: true
url: "https://github.com/luizomf/otaviomiranda.com.br"
homepage: "https://www.otaviomiranda.com.br/"
language: "HTML"
languages: ["HTML"]
languagePcts: [77]
topics: ["otaviomiranda"]
stars: 39
forks: 0
openIssues: 6
closedIssues: 46
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-08-12T13:30:02Z"
lastCommitAt: "2026-09-16T08:47:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "community_hub"]
healthScore: 97
undervaluedScore: 58
maintainers: ["luizomf"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5e2895681a5b36b94689f8bb25f7ea87d33183145e84f009b3ca5e51f559a6b/luizomf/otaviomiranda.com.br"
fundingLinks: ["GITHUB:https://github.com/luizomf"]
discussionCount: 128
---

# Otávio Miranda — Blog & Personal Site

Source code for the [otaviomiranda.com.br](https://otaviomiranda.com.br)
website.

This is an open lab. Read the code, open issues, submit posts.

---

## Stack

- **[Astro](https://astro.build)** — Static Site Generation
- **GitHub Pages** — hosting
- **GitHub Actions** — deploy (manual trigger)
- **Shiki** — syntax highlighting
- **Vite** — asset optimization

---

## Running locally

```bash
git clone https://github.com/luizomf/otaviomiranda.com.br.git
cd otaviomiranda.com.br
npm install
npm run dev
```

Visit `http://localhost:4321`.

### Common commands

```bash
npm run dev        # dev server
npm run build      # production build
npm run preview    # preview the build locally
npm run lint       # Astro check + Prettier
npm run test:search # search-output guard fixtures
```

The production build removes only the previous `dist/pagefind` output before
building, then checks the generated browser bundle, entry manifest, language
metadata/WASM, and nonempty index/fragments. A successful Astro exit alone does
not establish a working search build. Missing search output fails the build; it
must not be replaced with placeholder files or…
