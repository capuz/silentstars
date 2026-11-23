---
repo: "azerozero/saragossa"
name: "saragossa"
description: "Fast pure-Rust Metal LLM inference engine for Apple Silicon — beats mlx_lm on MoE"
readmeQualityOk: true
url: "https://github.com/azerozero/saragossa"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
stars: 8
forks: 0
openIssues: 4
closedIssues: 12
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-06-11T20:03:38Z"
lastCommitAt: "2026-11-23T09:20:20Z"
lastReleaseAt: "2026-11-17T01:14:04Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 56
maintainers: ["Destynova2"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dcb3f487761718a12060b4be63e81ad4f73eb1c69ee150c500643dc4eb89bd8/azerozero/saragossa"
---

# saragossa

**Pure-Rust Metal inference engine for Apple Silicon.** Raw `metal-rs` kernels,
no Python, no MLX, no CoreML. LLM, speech-to-text and text-to-speech in a single
binary — usable as a library or behind the OpenAI-compatible HTTP server
`saragossa serve`.

## CPU builds on Linux and Windows

Linux and Windows support the CPU reference backend (correctness first, slow
for large models). No GPU backend is provided there. The default `metal`
feature stays enabled for compatibility with macOS, but its dependency and
implementation are compiled only on macOS. Existing Apple Silicon builds keep
their Metal path.

```sh
cargo build
cargo build --no-default-features                     # library only
cargo build --no-default-features --features devtools # library and CLI
cargo test --lib --no-default-features --features devtools
```
