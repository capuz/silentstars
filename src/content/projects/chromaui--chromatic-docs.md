---
repo: "chromaui/chromatic-docs"
name: "chromatic-docs"
description: "Chromatic documentation site "
readmeQualityOk: true
url: "https://github.com/chromaui/chromatic-docs"
homepage: "https://www.chromatic.com/docs/"
language: "MDX"
languages: ["MDX", "TypeScript"]
languagePcts: [72, 20]
stars: 5
forks: 22
openIssues: 5
closedIssues: 25
watchers: 11
contributors: 47
recentReleases: 0
createdAt: "2020-03-11T05:01:10Z"
lastCommitAt: "2026-11-02T15:17:07Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 96
undervaluedScore: 82
maintainers: ["deandre", "winkerVSbecks", "obvious-autobuild[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c204f978825a211563c20fa29f1b26d11d44241bddd69d3136ea5b57c243fdfb/chromaui/chromatic-docs"
---

# Chromatic docs

The main branch is automatically deployed to https://www.chromatic.com/docs/

### Deployment

Available at docs.chromatic.com and via Netlify's build previews on branches/PRs. The 'website' proxies this to https://www.chromatic.com/docs/

To configure, access the Netlify [dashboard](https://app.netlify.com/sites/chromatic2-docs/overview).

Deploy previews are set up for PRs.

### 🚀 Project Structure

This project uses Astro. Inside, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   ├── getStarted/
│   │   └── introduction.md
│   ├── notInNavigation/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm…
