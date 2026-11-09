---
repo: "Dicklesworthstone/franken_threed"
name: "franken_threed"
description: "Three.js-compatible application specializer with a Rust/Wasm + WebGPU execution core: compiles ordinary Three.js apps into specialized update kernels, packed GPU state, and persistent render schedules. Full r186 compatibility, zero feature cuts, honest 2x/3x benchmark gates."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_threed"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
topics: ["3d-graphics", "ahead-of-time-compilation", "browser", "compiler", "computer-graphics", "gpu", "gpu-computing", "javascript", "optimizing-compiler", "performance"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-09T15:41:03Z"
lastCommitAt: "2026-11-09T03:30:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0355fdf960d16d0d86ed88580ab92ce4bc114fa55b1b15b5c607fc05b97af68/Dicklesworthstone/franken_threed"
---

# FrankenThreeD

**FrankenThreeD is a Three.js-compatible application specializer with a Rust/Wasm
and WebGPU execution core.**

You give it an ordinary Three.js project. It gives you back a full-compatibility
application package — a self-contained HTML file when the code and resource graph
closes, or a normal networked/module build when it does not — in which the
expensive, provably-closed parts of the frame loop have been compiled into
specialized Rust kernels, packed GPU state, and a persistent render schedule.

Existing authoring knowledge stays useful. You keep writing Three.js.

---

## Honest status

**Phase 0/1 work is in progress: a general new-WebGPU renderer route runs ordinary Three.js apps for an admitted feature subset; Rust/Wasm specialization is limited to numeric islands; no speedup has been measured.**

| Question | Answer |
|---|---|
| Is there a Cargo workspace? | **Yes** — workspace with `f3d-core` and `f3d-runtime` crates (`b43f846`, `4ab9611`, `8910299`) |
| Is the upstream oracle pinned? | **Yes** — Three.js r186 pinned at commit `148ef33ecb6d2502ff796d4554abd1549c95d519` with package reconciliation evidence (`5c2776d`, `7a0ad38`) |
| Are test evidence…
