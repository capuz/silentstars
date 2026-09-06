---
repo: "lloydrichards/effect-boxes"
name: "effect-boxes"
description: "A functional layout system for terminal applications built with EffectTS. Create TUIs with composable boxes, ANSI styling, and reactive components."
readmeQualityOk: true
url: "https://github.com/lloydrichards/effect-boxes"
homepage: "https://effect-boxes.lloydrichards.dev"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [74, 24]
topics: ["ansi", "box-layout", "effect", "terminal", "text-rendering", "typescript"]
stars: 30
forks: 0
openIssues: 14
closedIssues: 25
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-09-07T07:43:25Z"
lastCommitAt: "2026-09-06T08:04:41Z"
lastReleaseAt: "2026-04-27T13:21:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 84
undervaluedScore: 38
maintainers: ["lloydrichards", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f075e23b994bbb44b3a9c82e9f6c79b707016b99eaa35c46aa4f3dfef381024/lloydrichards/effect-boxes"
---

# Effect Boxes

A functional layout system for terminal applications built with Effect.js.
Create TUIs with composable boxes, ANSI styling, and reactive components.

## What is Effect Boxes?

Effect Boxes is a TypeScript library inspired by Haskell's
`Text.PrettyPrint.Boxes`, providing a flex-style layout system for terminal applications within the Effect ecosystem. Think of it as CSS flexbox, but built for functional composition of elements in terminal UIs, ASCII art, and structured text output.

## Features

- **Flex-y Layout System** — Horizontal and vertical composition with alignment
  control
- **Text Flow** — Automatic paragraph wrapping and column layout
- **ANSI Color Support** — Rich terminal styling with colors and text attributes
- **Reactive Components** — Dynamic UIs with efficient partial updates
- **Effect Integration** — Pipeable, Equal, Hash, and dual-function APIs
- **Unicode Aware** — Correct width calculations for full-width characters and
  emoji

## Installation

```bash
npm install effect-boxes
# or
bun add effect-boxes
# or
pnpm add effect-boxes
```

## Quick Example

```typescript
import { Box, Ansi } from "effect-boxes";

const myBox = Box.hsep(
  […
