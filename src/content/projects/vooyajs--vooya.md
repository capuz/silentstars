---
repo: "vooyajs/vooya"
name: "vooya"
description: "A Rust-first WASM islands runtime for existing JavaScript applications."
readmeQualityOk: true
url: "https://github.com/vooyajs/vooya"
homepage: "https://vooyajs.com/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [45, 41]
topics: ["frontend", "island", "rust", "web", "framework", "javascript"]
stars: 8
forks: 9
openIssues: 11
closedIssues: 50
watchers: 0
contributors: 7
recentReleases: 8
createdAt: "2026-07-21T19:17:21Z"
lastCommitAt: "2026-09-29T10:04:15Z"
lastReleaseAt: "2026-08-23T11:54:31Z"
status: "thriving"
tags: ["needs_contributors", "release_machine", "fork_magnet"]
healthScore: 93
undervaluedScore: 77
maintainers: ["CoderSerio", "XBearH"]
openGraphImageUrl: "https://opengraph.githubassets.com/c30638ec8f8bf184829e49ee8f47b6b666c06a8418576f346f87a7b0735cfa74/vooyajs/vooya"
discussionCount: 2
---

<h1 align="center">Vooya</h1>

  <strong>Write Rust-powered components for web applications.</strong>
</p>

</p>

Vooya compiles Rust component and store files into WebAssembly and exposes
them through host-framework adapters for use in web applications. Rust-file
authoring uses ordinary `.rs` files. The retired `.voo` path remains in a few
repository regression fixtures but is no longer a supported authoring format. The application shell keeps
routing and surrounding UI; Rust owns one isolated component surface. Vue and
React are supported first-party adapters. Solid and Svelte are experimental
and currently have evidence on the Vite 7 Rust-file path.

```vue
<script setup lang="ts">
import RustChart from "./RustChart.rs";
</script>

<template>
  <RustChart :points="150000" @select="handleSelect" />
</template>
```

The component contract, Rust implementation, and scoped styles live together.
Vooya generates the framework adapter, TypeScript declarations, WASM lifecycle,
event forwarding, and diagnostic mappings.

> [!IMPORTANT]
> Vooya is a public alpha. Rust-file (`.rs`) authoring targets Vite `>=7 <9`, with
> Rspack `>=2.1.10` and Webpack `>=5` currently have transitional…
