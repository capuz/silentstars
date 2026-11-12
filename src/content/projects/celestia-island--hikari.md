---
repo: "celestia-island/hikari"
name: "hikari"
description: "A Rust UI framework built on WASI."
readmeQualityOk: true
url: "https://github.com/celestia-island/hikari"
homepage: "https://hikari.docs.celestia.world"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [47, 37]
topics: ["engine", "rust", "frontend", "website"]
stars: 25
forks: 3
openIssues: 3
closedIssues: 1
watchers: 6
contributors: 4
recentReleases: 1
createdAt: "2023-01-12T14:26:16Z"
lastCommitAt: "2026-11-12T05:37:42Z"
lastReleaseAt: "2026-11-09T16:03:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 56
maintainers: ["langyo"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e1733551b9d6abcbb2d01e7fd4171fa3e24602e35be05e64e04179591fcd069/celestia-island/hikari"
---

The Frontend of Everything

  
      alt="CI Status" />
  
  
  
  
  

      Website
      Quick Start
      Documentation
      Architecture

> One design system, two runtimes — production-grade UI components for Vue 3 and Rust/WASM

**Hikari** (光, "light") is a next-generation UI library built around a single design system that ships to two first-class runtimes: the `hikari-*` crates for Rust/WASM (on the [tairitsu](https://github.com/celestia-island/tairitsu) framework — `tairitsu-vdom`, `tairitsu-hooks`, `tairitsu-macros`, `tairitsu-style` ^0.5.18) and `@celestia-island/hikari` for Vue 3. Both runtimes share the same SCSS design core, theming model, and motion vocabulary, so a product keeps one visual language whether it renders in a Vue application or a Rust/WASM target. The same core is designed to grow further — toward powering standalone applications beyond the browser.

## Vision

Hikari is built for the next generation of application interfaces:

- **One design system, two runtimes** - The same components, tokens, and themes render in Vue 3 (TypeScript) and Rust/WASM alike, driven by a shared SCSS core
- **Production-grade components** - Layout, forms, data-heavy tables…
