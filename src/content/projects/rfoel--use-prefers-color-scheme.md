---
repo: "rfoel/use-prefers-color-scheme"
name: "use-prefers-color-scheme"
description: "React hook for determining the preferred color scheme"
readmeQualityOk: true
url: "https://github.com/rfoel/use-prefers-color-scheme"
homepage: "https://rfoel.github.io/use-prefers-color-scheme"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["react", "hooks", "dark-mode", "dark-theme", "prefers-color-scheme", "hacktoberfest"]
stars: 32
forks: 4
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2020-05-11T16:47:19Z"
lastCommitAt: "2026-11-17T14:35:22Z"
lastReleaseAt: "2023-01-31T22:27:42Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 30
maintainers: ["rfoel"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3b85b223546a13ede8bd21ec86cf7099f24dcef48edf95b48b4f023cd63bf91/rfoel/use-prefers-color-scheme"
---

# use-prefers-color-scheme

> React hook for determining the preferred color scheme

## Features

- Updates live when the user changes their system theme
- SSR and hydration safe (Next.js, Remix, etc.)
- Zero dependencies, < 1 kB
- Written in TypeScript, ships ESM and CommonJS

## Install

```bash
npm install use-prefers-color-scheme
```

Requires React 18 or newer.

## Usage

```tsx
import usePrefersColorScheme from 'use-prefers-color-scheme'

const App = () => {
  const colorScheme = usePrefersColorScheme()
  const isDarkMode = colorScheme === 'dark'

  return (
    <div>You are using {isDarkMode ? 'Dark Mode 🌚' : 'Light Mode 🌞'}!</div>
  )
}
```

The hook returns one of `'dark'`, `'light'` or `'no-preference'`. The `ColorScheme`
type and a named `usePrefersColorScheme` export are also available:

```ts
import {
  usePrefersColorScheme,
  type ColorScheme,
} from 'use-prefers-color-scheme'
```

## Server-side rendering

The server can't know the user's preference, so the hook returns `'no-preference'`
on the server and during hydration, then re-renders with the real value right
after. This keeps server and client markup identical and avoids hydration
mismatch errors.

If the…
