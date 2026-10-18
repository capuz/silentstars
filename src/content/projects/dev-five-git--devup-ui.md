---
repo: "dev-five-git/devup-ui"
name: "devup-ui"
description: "JSX Zero-Runtime UI Styling Library"
readmeQualityOk: true
url: "https://github.com/dev-five-git/devup-ui"
homepage: "https://devup-ui.com"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [61, 31]
topics: ["css", "css-in-js", "react", "rust", "zero-runtime", "hacktoberfest"]
stars: 359
forks: 31
openIssues: 20
closedIssues: 48
watchers: 3
contributors: 16
recentReleases: 0
createdAt: "2024-12-31T05:15:33Z"
lastCommitAt: "2026-10-18T08:17:42Z"
lastReleaseAt: "2025-01-16T05:59:24Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 93
undervaluedScore: 37
maintainers: ["owjs3901"]
openGraphImageUrl: "https://opengraph.githubassets.com/50adb63d8c8ec81b1902595d9df964b910100f79f7b373801a61d6c61bd32c13/dev-five-git/devup-ui"
fundingLinks: ["GITHUB:https://github.com/dev-five-git", "PATREON:https://patreon.com/JeongMinOh", "OPEN_COLLECTIVE:https://opencollective.com/devup-ui"]
discussionCount: 1
---

The Future of CSS-in-JS — Zero Runtime, Full Power

---

---

English | [한국어](https://github.com/dev-five-git/devup-ui/blob/HEAD/README_ko.md)

## Why Devup UI?

**Devup UI isn't just another CSS-in-JS library — it's the next evolution.**

Traditional CSS-in-JS solutions force you to choose between developer experience and performance. Devup UI eliminates this trade-off entirely by processing all styles at build time using a Rust-powered preprocessor.

- **Broad Syntax Coverage**: Variables, conditionals, responsive arrays, pseudo-selectors, `styled()`, Emotion's `css` prop and more compile at build time; anything the build cannot know is a [located build error](https://devup-ui.com/docs/build-errors), never a silent miss ([supported syntax & limitations](https://devup-ui.com/docs/limitations))
- **Familiar API**: `styled()` API compatible with styled-components and Emotion patterns
- **True Zero Runtime**: No JavaScript execution for styling at runtime. Period.
- **Smallest Bundle Size**: Optimized class names (`a`, `b`, ... `aa`, `ab`) minimize CSS output
- **Fastest Build Times**: Rust + WebAssembly delivers unmatched preprocessing speed

## Install

```sh
npm install…
