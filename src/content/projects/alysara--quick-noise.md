---
repo: "Alysara/Quick-Noise"
name: "Quick-Noise"
description: "High performance batched processing noise library. Made in Rust."
readmeQualityOk: true
url: "https://github.com/Alysara/Quick-Noise"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-14T00:26:21Z"
lastCommitAt: "2026-07-15T05:54:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 49
maintainers: ["Alysara"]
openGraphImageUrl: "https://opengraph.githubassets.com/b102bb06574a4a9960cad53b0ea12f14957ab7ae015a0c516cd2f5c8e849de2b/Alysara/Quick-Noise"
---

Maximum performance SIMD-accelerated procedural noise library 
with up to 10x+ performance on uniform grids. Works on stable Rust.

# Performance

### 2D Noise
Time taken to produce 3 octaves of FBM noise for 1024x1024 (1,048,576) samples.
| Library              | Perlin  | Value   | Simplex | Cellular |
|----------------------|---------|---------|---------|----------|
| quick-noise (grid)   | 0.66 ms | 0.50 ms |    X    |    X     |
| quick-noise (batch)  | 4.19 ms | 3.79 ms | 5.84 ms | 7.48 ms  |
| fastnoise2           | 6.22 ms | 5.01 ms | 7.33 ms | 21.4 ms  |
| simd-noise           | 9.70 ms |    X    |    X    |          |
| noise-rs             | 30.1 ms | 29.2 ms | 49.4 ms | 96.3 ms  |
| noiz                 | 32.0 ms | 32.0 ms | 32.0 ms | 32.0 ms  |
| libnoise             | 87.8 ms | 27.9 ms | 117 ms  | 176 ms   |

### 3D Noise
Time taken to produce 3 octaves of FBM noise for 128x128x128 (2,097,152) samples.
| Library              | Perlin  | Value   | Simplex | Cellular |
|----------------------|---------|---------|---------|----------|
| quick-noise (grid)   | 0.87 ms | 0.62 ms |    X    |    X     |
| quick-noise (batch)  | 27.2 ms | 12.0 ms | 24.1 ms | 39.0 ms  |
|…
