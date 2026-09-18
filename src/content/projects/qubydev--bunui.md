---
repo: "qubydev/bunui"
name: "bunui"
description: "Playful react UI library "
readmeQualityOk: true
url: "https://github.com/qubydev/bunui"
homepage: "https://bunui.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["react", "shadcn", "ui"]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-23T19:46:46Z"
lastCommitAt: "2026-09-18T08:27:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 35
maintainers: ["qubydev"]
openGraphImageUrl: "https://opengraph.githubassets.com/12b5f64cc6feaf1b1aeeba81d6d7eb38ec6bc9117e8103f408b968570772351c/qubydev/bunui"
---

# Bun UI

A shadcn registry and demo site for Bun UI components.

## Development

```bash
npm install
npm run dev
```

## Registry

Components live in `components/ui`. Add each installable item to `registry.json`, then rebuild the static registry payloads:

```bash
npm run registry:build
```

The generated files are written to `public/r`.
