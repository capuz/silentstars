---
repo: "thirawat27/Ruvyxa"
name: "Ruvyxa"
description: "Ruvyxa is a production-minded web framework built around clarity, speed, and control. It keeps routing, server logic, validation, builds, and runtime output in one predictable workflow."
readmeQualityOk: true
url: "https://github.com/thirawat27/Ruvyxa"
homepage: "https://ruvyxa.vercel.app/"
language: "Rust"
languages: ["Rust", "JavaScript", "TypeScript"]
languagePcts: [57, 21, 21]
topics: ["bundler", "compiler", "component", "framework", "node", "react", "rust", "ssg", "ssr", "universal"]
stars: 11
forks: 2
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-06-17T05:56:08Z"
lastCommitAt: "2026-08-01T06:13:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["thirawat27"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b069f62c705fbac3b7412b6950a74089f0f2e64ccc855db403d93d6f85c6ff7/thirawat27/Ruvyxa"
---

</p>

<h1 align="center">Ruvyxa</h1>

  <strong>R</strong>obust <strong>U</strong>niversal <strong>V</strong>alidation & <strong>Y</strong>ielding e<strong>X</strong>perience <strong>A</strong>pplication
</p>

  Ruvyxa is a production-minded web framework built around clarity, speed, and control.<br/>
  It keeps routing, server logic, validation, builds, and runtime output in one predictable workflow.
</p>

</p>

---

## Why Ruvyxa

### Rust core

- **Ruvyxa Bundler** — TypeScript/JSX/Markdown/MDX compilation, module resolution, tree-shaking,
  Oxc-backed minification, and source map generation in one self-contained binary.
- **Radix-trie routing** — O(path-depth) route resolution regardless of the number of registered
  routes. Duplicate and ambiguous routes are rejected at graph validation time.
- **Persistent JavaScript worker pool** — eliminates 100–500 ms per-request subprocess overhead for
  SSR. Shared across requests with layout nesting and route-level hydration bundles.
- **LRU render cache** — SSR pages and client bundles cached in-memory (capacity 1024 dev / 512
  prod, TTL 5 min dev / 30 min prod), invalidated automatically on file change. Configurable via…
