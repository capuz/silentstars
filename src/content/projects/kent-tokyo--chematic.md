---
repo: "kent-tokyo/chematic"
name: "chematic"
description: "A pure-Rust cheminformatics library targeting RDKit feature parity — zero C/C++ by default."
readmeQualityOk: true
url: "https://github.com/kent-tokyo/chematic"
homepage: "https://kent-tokyo.github.io/chematic/"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["cheminformatics", "chemistry", "drug-discovery", "fingerprints", "mcp", "molecular-descriptor", "python", "rdkit", "rust", "smiles"]
stars: 19
forks: 0
openIssues: 14
closedIssues: 15
watchers: 2
contributors: 2
recentReleases: 6
createdAt: "2026-05-26T12:32:40Z"
lastCommitAt: "2026-07-29T06:13:55Z"
lastReleaseAt: "2026-07-26T08:55:28Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 90
undervaluedScore: 47
maintainers: ["kent-tokyo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/edbb84dc2466ef59674d62e411574c8eaccc0520af3e4af4eb8aa2da0d3a51d7/kent-tokyo/chematic"
discussionCount: 0
---

# chematic

[Open in Colab](https://colab.research.google.com/github/kent-tokyo/chematic/blob/main/notebooks/quickstart.ipynb)

[日本語](https://github.com/kent-tokyo/chematic/blob/HEAD/README_ja.md) | [中文](https://github.com/kent-tokyo/chematic/blob/HEAD/README_zh.md)

A cheminformatics library for Python, Rust, and the browser.

**Cheminformatics that's fast by default, safe by design.**  
Pure Rust · Zero C/C++ · Python · WebAssembly · [Live Demo](https://kent-tokyo.github.io/chematic/playground/)

| | chematic | RDKit (Python) | RDKit.js (WASM) |
|---|---|---|---|
| **Get started** | `pip install chematic` | conda / cmake required | no Python bindings |
| **Browser bundle** | **719 KB** | not available | ~30 MB (~42× larger) |
| **Batch fingerprints** | **~78 µs/mol** (2–3× faster) | ~160–235 µs/mol | — |
| **Memory safety** | compiler-enforced (Rust) | C++ | C++ |
| **Build from source** | `cargo build` only | cmake + clang + Boost | Emscripten SDK |

All numbers are reproducible — see [benchmark details](https://kent-tokyo.github.io/chematic/benchmark/).  
WASM sizes: chematic **719 KB** · RDKit.js ~30 MB · Indigo WASM ~40 MB

**Feature maturity at a glance:**

| Feature |…
