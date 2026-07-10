---
repo: "eugenehp/llama-cpp-rs"
name: "llama-cpp-rs"
description: "A wrapper around the llama-cpp library for rust, including new Sampler API from llama-cpp."
readmeQualityOk: true
url: "https://github.com/eugenehp/llama-cpp-rs"
homepage: "https://crates.io/crates/llama-cpp-4"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["ggml", "llamacpp", "rust"]
stars: 33
forks: 11
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 38
recentReleases: 0
createdAt: "2024-11-23T08:30:15Z"
lastCommitAt: "2026-07-10T07:02:23Z"
lastReleaseAt: "2026-03-30T03:11:07Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 65
maintainers: ["eugenehp", "dependabot[bot]", "Lavmee"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b867f935f860073f9576e7779d9cc193f2633f40488f4caec0e2cec8bd0b12b/eugenehp/llama-cpp-rs"
---

# 🦙 llama-cpp-rs

Safe Rust bindings to [llama.cpp](https://github.com/ggml-org/llama.cpp), tracking upstream closely.

| Crate | Description | crates.io |
|---|---|---|
| [`llama-cpp-4`](https://github.com/eugenehp/llama-cpp-rs/blob/HEAD/llama-cpp-4/) | Safe high-level API | [](https://crates.io/crates/llama-cpp-4) |
| [`llama-cpp-sys-4`](https://github.com/eugenehp/llama-cpp-rs/blob/HEAD/llama-cpp-sys-4/) | Raw bindgen bindings | [](https://crates.io/crates/llama-cpp-sys-4) |

**llama.cpp version:** `4fc4ec5 (b9859)` (Jun 2026) — includes
[TurboQuant (PR #21038)](#turboQuant--attention-rotation),
[MTP / multi-token-prediction speculative decoding (PR #22673)](https://github.com/ggml-org/llama.cpp/pull/22673), and
upstream **next-n** embedding hooks used by MTP (`llama_set_embeddings_nextn`).

---

## Using the library

```toml
[dependencies]
llama-cpp-4 = "0.4.0"
```

Import the common types with the prelude:

```rust
use llama_cpp_4::prelude::*;
```

Core types are also at the crate root (`llama_cpp_4::LlamaModel`, …). See
[`llama-cpp-4/README.md`](https://github.com/eugenehp/llama-cpp-rs/blob/HEAD/llama-cpp-4/README.md) for the full API guide and
[`prelude` on…
