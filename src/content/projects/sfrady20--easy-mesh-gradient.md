---
repo: "sFrady20/easy-mesh-gradient"
name: "easy-mesh-gradient"
description: "A tiny utility to create mesh gradients with customizable easing functions"
readmeQualityOk: true
url: "https://github.com/sFrady20/easy-mesh-gradient"
homepage: "https://easy-mesh-gradient.stevenfrady.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["easing", "mesh-gradient", "vite-lib"]
stars: 22
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-01-03T16:51:41Z"
lastCommitAt: "2026-07-14T05:53:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 38
maintainers: ["sFrady20"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/584842906/2ade8122-64bd-4b00-9cae-f627dc7bee6c"
---

# Easy Mesh Gradient

A lightweight, zero-dependency library for generating beautiful CSS mesh gradients with TypeScript support.

## Quick Links

- [NPM Package](https://www.npmjs.com/package/easy-mesh-gradient)
- [Live Editor](https://easy-mesh-gradient.stevenfrady.com)
- [Library Documentation](https://github.com/sFrady20/easy-mesh-gradient/blob/HEAD/lib/README.md)

## Quick Start

```bash
npm install easy-mesh-gradient
```

```ts
import easyMeshGradient from "easy-mesh-gradient";

const gradient = easyMeshGradient();
document.body.style.backgroundImage = gradient;
```

## Repository Structure

This is a Bun workspace monorepo containing:

- **`lib/`** — the `easy-mesh-gradient` npm package ([documentation](https://github.com/sFrady20/easy-mesh-gradient/blob/HEAD/lib/README.md))
- **`pages/`** — the website: a landing page and a visual gradient editor with multi-format export
- **`promo/`** — a promo video built with [Remotion](https://www.remotion.dev)

## Development

```bash
# Install dependencies (all workspaces)
bun install

# Run the website dev server (bundles the library from source with HMR)
bun run dev

# Build the library
bun run build

# Build the website
bun run…
