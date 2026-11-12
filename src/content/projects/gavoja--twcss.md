---
repo: "gavoja/twcss"
name: "twcss"
description: "A tiny Tailwind alternative"
readmeQualityOk: true
url: "https://github.com/gavoja/twcss"
language: "CSS"
languages: ["CSS"]
languagePcts: [97]
stars: 14
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-02-26T11:36:17Z"
lastCommitAt: "2026-11-12T11:39:38Z"
lastReleaseAt: "2025-04-07T12:17:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 45
maintainers: ["gavoja"]
openGraphImageUrl: "https://opengraph.githubassets.com/e92fed4dcc431b2601e76d8cac7e9d68d5578ff1196234219045e16bcdfc997d/gavoja/twcss"
discussionCount: 0
---

# TWCSS

A fast minimalist utility-first CSS runtime inspired by Tailwind and Twind.

## Motivation

Tailwind is awesome, but it requires a build setup. Twind exists, but the project appears to be inactive.

## Features

- **Zero setup, zero dependencies.** One import does it all. It just works.
- **Library agnostic.** Works with vanilla JavaScript and any modern framework. Works with Shadow DOM too.
- **Lightweight and fast.** Minified and gzipped, it's less than 11 kB.

## Usage

Node, Deno, Bun:

```js
import 'twcss' // Initialises TWCSS automatically on the document.
```

Directly in browser:

```html
<script src="https://cdn.jsdelivr.net/npm/twcss/target/twcss.min.js"></script>
```

Then, somewhere in the markup:

```html
<div tw="p-4 bg-indigo-800 text-slate-50 rounded-xl">Hello, world!</div>
```

React example:

```jsx
function Wrapper ({ children, isRounded }) {
  // Supports array syntax for convenient conditional styling.
  return (
    <div tw={['p-4 bg-indigo-800 text-slate-50', isRounded && 'rounded-xl']}>
      {children}
    </div>
  )
}
```

If you prefer Twind's approach, use:

```jsx
import { init } from 'twcss/compiler'

// Explicit manual initialisation - pass…
