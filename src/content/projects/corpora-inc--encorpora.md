---
repo: "corpora-inc/encorpora"
name: "encorpora"
description: "Corpora for k-12 and beyond"
readmeQualityOk: true
url: "https://github.com/corpora-inc/encorpora"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [61]
stars: 5
forks: 3
openIssues: 98
closedIssues: 90
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-11-10T17:05:23Z"
lastCommitAt: "2026-07-14T06:50:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 78
maintainers: ["skyl", "Umanistan"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3568e68da6ac38a046bdafeb9b8e81a2ff7ae9d5055c5366632c6eca64671c1/corpora-inc/encorpora"
postedAt: "2026-07-04T19:31:10.093Z"
---

# encorpora

**encorpora** (“on corpora”) is Corpora Inc’s experimental lab.
The core software lives at `https://github.com/corpora-inc/corpora`.

This repo houses experiments that depend on Corpora. When something becomes stable and broadly useful, it graduates to the main `corpora` monorepo.

## Current focus

- **Corpán app**: the main product experience.
- **Corpán Packs**: SDK experiments + new interactive learning formats.
- **Hover Runner**: 3D fun that locks in correct translations with the All-Hearing Ear.
- **Books & publishing**

## Live Demos

Browse packs and content at:
**https://encorpora.io/**

- [Corpán Packs](https://encorpora.io/corpan/packs/)
- [Hover Runner](https://encorpora.io/corpan/packs/hover-runner/)

## Local Development

### Quick Start

```bash
# One-command setup
./web/scripts/setup.sh

# Start development server with hot reload
npm run dev
```

Visit **http://localhost:8000** - all changes auto-rebuild:
- web/io/ site (Next.js hot reload)
- Corpan pages (auto rebuild)
- Packs (auto rebuild)

See [DEVELOPMENT.md](https://github.com/corpora-inc/encorpora/blob/HEAD/DEVELOPMENT.md) for detailed development guide.

### Production Build

```bash
npm run…
