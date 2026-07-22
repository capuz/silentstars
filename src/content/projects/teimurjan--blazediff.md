---
repo: "teimurjan/blazediff"
name: "blazediff"
description: "Blazing-fast diff ecosystem for JavaScript applications"
readmeQualityOk: true
url: "https://github.com/teimurjan/blazediff"
homepage: "https://blazediff.dev"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [33, 33]
topics: ["comparison", "diff", "image", "pixel", "object", "codec", "png-decoder", "png-encoder"]
stars: 316
forks: 3
openIssues: 0
closedIssues: 11
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-08-29T10:59:23Z"
lastCommitAt: "2026-07-22T06:11:22Z"
lastReleaseAt: "2025-08-31T08:30:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 36
maintainers: ["teimurjan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d90d7aa5e10c28aad2a51fc83156b9ea034ba5dee1f5e83b90a7575bc360f6b/teimurjan/blazediff"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/teimurjan/blazediff/main/assets/logo-dark.png">
  </picture>
</a>

------

</div>

**BlazeDiff** is a high-performance diff ecosystem. Originally built in JavaScript as a pixel-perfect image comparison library that's 1.5x faster than [pixelmatch](https://github.com/mapbox/pixelmatch). Now, BlazeDiff has evolved into a comprehensive suite of blazing-fast diff tools including image comparison, image diff analysis deterministically + agent-in-the-loop verdict, object diffing, perceptual quality metrics, framework-agnostic UI renderers, and React components for visualizing differences.

## Available Packages

### Core Libraries
- **[@blazediff/core-native](https://github.com/teimurjan/blazediff/blob/HEAD/packages/core-native#readme)** - The fastest single-threaded image diff in the world (Rust + SIMD, 3-4x faster than odiff on 4K images)
- **[@blazediff/core-wasm](https://github.com/teimurjan/blazediff/blob/HEAD/packages/core-wasm#readme)** - WebAssembly build of the same Rust algorithm (wasm32 + v128 SIMD, ~58% faster than pixelmatch). For browsers, edge runtimes, and any wasm host.
-…
