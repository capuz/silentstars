---
repo: "vanillaspa/web-components"
name: "web-components"
description: "This is a lifecycle-implementation of a CustomElements registry for standards-conforming WebComponents."
readmeQualityOk: true
url: "https://github.com/vanillaspa/web-components"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-19T21:38:29Z"
lastCommitAt: "2026-10-19T09:14:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 29
maintainers: ["J4H20M3"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e23f62c59b83bac082f51bc35212c755348d0c36b8078d829d78f012a4c56e1/vanillaspa/web-components"
---

# @vanillaspa/web-components

> Register `.sfc.html` files as native custom elements with a tiny, dependency-free runtime.

Write a `.sfc.html` file. Get a custom element. That's it.

---

## Table of contents

- [How it works](#how-it-works)
- [Writing a component](#writing-a-component)
- [Installation](#installation)
- [Ways to load components](#ways-to-load-components)
  - [1. Vite: `import.meta.glob`](#1-vite-importmetaglob)
  - [2. No bundler: import map + `fetch`](#2-no-bundler-import-map--fetch)
  - [3. Other bundlers](#3-other-bundlers)
  - [4. Inline strings](#4-inline-strings)
  - [5. File picker, folder picker, drag and drop](#5-file-picker-folder-picker-drag-and-drop)
- [Import maps for component scripts](#import-maps-for-component-scripts)
- [Global stylesheets (Tailwind etc.)](#global-stylesheets-tailwind-etc)
- [Component lifecycle](#component-lifecycle)
- [API reference](#api-reference)
- [Behavior and limitations](#behavior-and-limitations)
- [Security and CSP](#security-and-csp)
- [Browser support](#browser-support)
- [Project setup (Vite)](#project-setup-vite)
- [Boilerplate](#boilerplate)
- [License](#license)

---

## How it works

`registerComponents()` takes…
