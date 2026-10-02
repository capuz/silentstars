---
repo: "eavam/use-debouncy"
name: "use-debouncy"
description: "🌀 Small (~0.2kb) debounce effect hook for React with TypeScript support"
readmeQualityOk: true
url: "https://github.com/eavam/use-debouncy"
homepage: "https://npmjs.com/package/use-debouncy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["debounce", "react-hooks", "typescript", "hooks", "effects", "react", "support-typescript", "hook", "tiny", "requestanimationframe"]
stars: 46
forks: 3
openIssues: 1
closedIssues: 16
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2020-06-22T16:59:39Z"
lastCommitAt: "2026-10-02T09:59:50Z"
lastReleaseAt: "2020-06-24T06:59:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 52
maintainers: ["renovate[bot]", "eavam"]
openGraphImageUrl: "https://opengraph.githubassets.com/49564e1865a2853b3446fc607e00212d6b9976bce9c2a0cd98ca0f07c32b8a35/eavam/use-debouncy"
---

# useDebouncy

🌀 Small (~0.2kb) debounce effect hook for React with TypeScript support

## Features

- 👌 **No dependencies.**
- 🏋️‍ **Tiny.** ~0.2kb.
- 🦾 **Frame-aligned.** Driven by `requestAnimationFrame`.
- 📖 **Types.** Written in TypeScript, ships its own declarations.
- 🎣 **Three hooks.** Debounce an effect, a callback or a value.

## Installation

```sh
npm install use-debouncy
```

```sh
yarn add use-debouncy
```

```sh
pnpm add use-debouncy
```

Requires React 18 or 19 as a peer dependency.

## Usage

Three hooks, one idea: do the work only after things have stopped changing for a
while. Pick the one that fits what you already have.

### Debounce an effect

Reads like `useEffect`, but waits for the dependencies to settle. It does not
run on the initial render.

```tsx
import { useState } from 'react';
import { useDebouncyEffect } from 'use-debouncy';

const Search = () => {
  const [value, setValue] = useState('');

  useDebouncyEffect(
    () => fetchData(value), // called once typing stops
    400, // milliseconds to wait
    [value], // dependencies, like useEffect
  );

  return (
    <input value={value} onChange={(event) => setValue(event.target.value)} />
  );…
