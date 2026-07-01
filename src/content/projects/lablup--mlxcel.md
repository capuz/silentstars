---
repo: "lablup/mlxcel"
name: "mlxcel"
description: "MLX-based experimental inference engine"
url: "https://github.com/lablup/mlxcel"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
stars: 103
forks: 21
openIssues: 59
closedIssues: 190
watchers: 2
contributors: 5
recentReleases: 10
createdAt: "2026-01-30T15:07:23Z"
lastCommitAt: "2026-07-01T07:05:05Z"
lastReleaseAt: "2026-05-28T15:28:05Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 95
undervaluedScore: 36
maintainers: ["inureyes", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/06f70c9046e80800f49137526799faab70a1586478751873650a2736d4919d7a/lablup/mlxcel"
discussionCount: 0
---

# mlxcel

High-performance LLM/VLM inference runtime and server for Apple Silicon. The CLI and server are implemented in Rust and execute models through native MLX C++ bindings. Linux/CUDA builds are supported as a secondary target.

## New in v0.3.3

### v0.3.3

- **Multi-node disaggregated routing.** The server drives multi-node disaggregated prefill/decode routing with worker health checks and failover, and the router serves `/v1/completions` alongside the chat and responses endpoints.
- **Two new model capabilities.** Mellum 2, a hybrid-attention MoE text model, and video input for Gemma 4 Unified (`gemma4_unified`).
- **Python client package.** A first-phase Python client wraps the server API for use from Python code.
- **Faster Apertus and Seed-OSS decode.** A fused single-launch xIELU Metal kernel replaces the multi-op activation path and is on by default after M5 Max validation.
- **N-gram loop detection.** Generation can detect and break degenerate n-gram repetition loops, on by default for the Gemma 4 family.
- **Prefill correctness under KV-cache limits.** Prefilling a prompt longer than a model's sliding window is fixed across gemma3, gemma4, and other sliding-window…
