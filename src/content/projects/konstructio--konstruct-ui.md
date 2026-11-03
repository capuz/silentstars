---
repo: "konstructio/konstruct-ui"
name: "konstruct-ui"
description: "This repository contains a set of reusable and customizable React components built for Konstruct's infrastructure."
readmeQualityOk: true
url: "https://github.com/konstructio/konstruct-ui"
homepage: "https://konstructio.github.io/konstruct-ui/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2024-09-26T18:25:07Z"
lastCommitAt: "2026-11-03T19:05:46Z"
lastReleaseAt: "2025-01-29T17:37:43Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 75
maintainers: ["futjesus", "konstruct-bot", "CristhianF7"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b8693a2bb01b3d6f23436ab6b7a24bfa48de31e0fde0388be7e4d5d7085ef4e/konstructio/konstruct-ui"
---

# @konstructio/ui

A React component library for [Konstruct](https://konstruct.io) infrastructure products (Kubefirst, Colony) and the Civo dashboard. Built with React, TypeScript, Tailwind CSS v4, and Radix UI primitives.

> **Note**: This library is in active development (alpha). APIs may change between releases.

## Features

- **40+ components** — forms, tables, modals, charts, navigation, and more
- **Accessible** — built on Radix UI primitives, tested with jest-axe
- **Themeable** — light, dark, and brand themes switchable at runtime
- **Tree-shakeable** — ESM build with component-level code splitting
- **Broad React support** — compatible with React 16.8+, 17, 18, and 19

## Requirements

| Peer dependency         | Version                    |
| ----------------------- | -------------------------- |
| `react` / `react-dom`   | `^16.8 \|\| ^17 \|\| ^18 \|\| ^19` |
| `tailwindcss`           | `^4`                       |
| `@tanstack/react-query` | `^5.90`                    |
| `react-router-dom`      | `^7`                       |

## Installation

```bash
npm install @konstructio/ui
```

## Setup

### 1. Import the styles

In your global CSS file, import Tailwind, the…
