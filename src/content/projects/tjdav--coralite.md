---
repo: "tjdav/coralite"
name: "coralite"
description: "Isomorphic Web Component framework for interactive SPAs and dynamic sites"
readmeQualityOk: true
url: "https://github.com/tjdav/coralite"
homepage: "https://coralite.dev/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [78, 21]
topics: ["html-css-javascript", "static-site-generator"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-09T07:13:56Z"
lastCommitAt: "2026-10-29T12:25:09Z"
lastReleaseAt: "2026-06-23T10:16:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 76
maintainers: ["tjdav"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/914221379/fd8c7f4e-ab7c-4894-8f51-1a0ed5e1475c"
---

# 🪸 Coralite

Coralite is a **Native-First**, **Isomorphic Web Component Framework** designed to build fast, interactive single-page applications (SPAs), dynamic websites, and static sites. It seamlessly blends the initial load speed of Server-Side Rendering (SSR) with robust, high-performance client-side hydration, giving you total flexibility over your rendering strategy using standard Web Components.

It leverages standard web technologies—HTML modules, Custom Elements, and standard ES modules—to eliminate framework-specific friction while providing a modern, reactive developer experience.

## Key Features

* **True Native Web Components (Without the Boilerplate)**: Abandon the verbose `class extends HTMLElement` syntax. Coralite uses a clean, ergonomic `defineComponent` flat-options API (`attributes`, `server`, `getters`, `client`) that outputs true native Custom Elements.
* **Scoped CSS without Shadow DOM**: Shadow DOM notoriously breaks global CSS systems and creates accessibility barriers. Coralite completely bypasses this by using compiler-generated instance identifiers to perfectly scope your CSS in the Light DOM.
* **Isomorphism Built-In (The Vanishing `server`…
