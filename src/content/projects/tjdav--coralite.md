---
repo: "tjdav/coralite"
name: "coralite"
description: "Isomorphic Web Component framework for interactive SPAs and dynamic sites"
readmeQualityOk: true
url: "https://github.com/tjdav/coralite"
homepage: "https://coralite.dev/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [79, 20]
topics: ["html-css-javascript", "static-site-generator"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-09T07:13:56Z"
lastCommitAt: "2026-11-07T22:51:08Z"
lastReleaseAt: "2026-06-23T10:16:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 76
maintainers: ["tjdav"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/914221379/fd8c7f4e-ab7c-4894-8f51-1a0ed5e1475c"
---

# 🪸 Coralite

Coralite is a static-first Web Component framework that compiles HTML modules into static HTML at build time with zero client JavaScript by default. When interactivity or dynamic data is required, Coralite progressively adds server-side rendering (SSR), fine-grained client-side hydration, and single-page application (SPA) routing using standard native Web Components.

## Key Features

* **Static HTML by Default**: Components without client logic emit pure static HTML and scoped CSS at build time with zero browser JavaScript overhead.
* **Native Web Components via Named Exports**: Author components in `.html` files using standard ES module exports (`export const`, `export function`) rather than boilerplate class syntax.
* **Light DOM Scoped CSS**: Scoped styling using compiler-generated instance identifiers and CSS `@layer` without requiring Shadow DOM boundaries.
* **Isomorphic Server Execution**: Fetch data or compute state at build/SSR time in `server()`. Initial state serializes to the client while server code is stripped from the browser bundle.
* **Opt-Out Hydration**: Mark components with `no-hydration` to render markup statically and bypass client runtime…
