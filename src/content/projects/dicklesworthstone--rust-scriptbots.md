---
repo: "Dicklesworthstone/rust_scriptbots"
name: "rust_scriptbots"
description: "Deterministic artificial-life simulator in Rust: agent-based evolution with pluggable brain implementations, GPU-accelerated UI, DuckDB analytics, and LLM-in-the-loop experimentation"
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/rust_scriptbots"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["artificial-life", "evolution", "gpu", "rust", "simulation"]
stars: 11
forks: 1
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2025-10-21T16:01:38Z"
lastCommitAt: "2026-11-04T02:57:10Z"
lastReleaseAt: "2026-10-14T16:15:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 77
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbfd21052c724f88d7342d435b4af87bb7f9d0d2c3fbbb549b8a3cf48939bd54/Dicklesworthstone/rust_scriptbots"
---

## Rust ScriptBots

ScriptBots is a modern Rust reimagining of Andrej Karpathy’s classic agent-based evolution simulator. Our goal is a faithful, deterministic port with a GPU-accelerated UI, pluggable brain implementations, and first-class analytics. This is a multi-crate Cargo workspace separating simulation core, renderer-neutral runtime protocol, brains, storage, rendering, and the application shell.

The authoritative roadmap is `PLAN_TO_REARCHITECT_AND_REVIVE_RUST_SCRIPTBOTS.md`. The older GPUI port plan is retained as historical design evidence, and a sibling WebAssembly plan lives in `PLAN_TO_CREATE_SIBLING_APP_CRATE_TARGETING_WASM.md`.

### Philosophy & purpose
- **Why this exists**: ScriptBots is a minimalist artificial life laboratory. By rebuilding the original simulator with rigorously deterministic Rust systems, we can observe, measure, and reproduce emergent behavior at scale—without undefined behavior or global state muddying results.
- **What we learn**: How simple sensory channels and local rules produce complex population dynamics—cooperation vs. predation, resource gradients shaping migration, lineage divergence under different mutation schedules, and the role…
