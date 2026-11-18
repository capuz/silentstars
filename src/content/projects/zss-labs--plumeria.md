---
repo: "zss-labs/plumeria"
name: "plumeria"
description: "Plumeria brings predictable overrides to React styling."
readmeQualityOk: true
url: "https://github.com/zss-labs/plumeria"
homepage: "https://plumeria.dev"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [76, 22]
topics: ["atomic-css", "css-in-js", "zero-runtime", "react", "esbuild", "nextjs", "rolldown", "rollup", "vite", "compiler"]
stars: 25
forks: 7
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-01-05T06:39:59Z"
lastCommitAt: "2026-11-18T12:07:28Z"
lastReleaseAt: "2025-01-25T02:18:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 68
maintainers: ["refirst11", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/39b5b29116d73646654244a75df4e632c1ed9d0724174b1e30156af9d059ce14/zss-labs/plumeria"
fundingLinks: ["GITHUB:https://github.com/refirst11", "GITHUB:https://github.com/Anionix"]
discussionCount: 10
---

# Plumeria

**Plumeria** brings predictable overrides to React styling. When you combine styles in an array, the rightmost style wins for each property, regardless of import or load order. The compiler merges styles at build time, and an overridden property never reaches the element. What ships is class names and CSS. A value the compiler cannot resolve stops the build until it is fixed.

> The compiler is written in Rust with oxc, so builds are fast — see the [benchmark](#benchmark). The CSS types and the property list the linter checks against are both generated from MDN data.

## Example

Pass styles to the `sx` prop as an array of static and dynamic styles. At build time, the compiler resolves `sx` into a static `className`; dynamic values are passed as CSS variables through the `style` attribute — no runtime library is involved.
