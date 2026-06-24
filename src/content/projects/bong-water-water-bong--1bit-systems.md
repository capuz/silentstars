---
repo: "bong-water-water-bong/1bit-systems"
name: "1bit-systems"
description: "Local OpenAI-compatible inference workbench for AMD Strix Halo. One endpoint while the control plane is rebuilt."
url: "https://github.com/bong-water-water-bong/1bit-systems"
homepage: "https://1bit.systems"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [45, 32]
topics: ["1-58-bit", "1-bit", "amd", "bitnet", "gfx1151", "hip", "inference-engine", "llm", "llm-inference", "local-ai"]
stars: 10
forks: 3
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-04-19T20:11:06Z"
lastCommitAt: "2026-06-24T00:25:24Z"
lastReleaseAt: "2026-04-23T17:56:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 53
maintainers: ["bong-water-water-bong", "dzltron"]
openGraphImageUrl: "https://opengraph.githubassets.com/845ea2b2c6c51fbb1d7995afb1134173c945b0aacb832be9b615eaa724541d5e/bong-water-water-bong/1bit-systems"
discussionCount: 1
---

# Local 1-bit inference, wired for Strix Halo.

### Pure Rust. Zero Python.

**[→ Project Wiki](docs/wiki/README.md)** — architecture, decisions, and agent onboarding.

`1bit.systems` is a 1-bit inference engine for AMD Strix Halo (gfx1151). The
runtime is a Rust HTTP server that wraps [rocm-cpp](https://github.com/bong-water-water-bong/rocm-cpp)
HIP kernels, delivering 4.9–7.2× faster decode than rocBLAS FP16 at 1/4 the memory.

</div>

---

## Architecture

```
onebit (:13305)   axum (Rust)
  └── bitnet_decode --server   rocm-cpp (C++/HIP)
       └── librocm_cpp.so      ternary GEMV/GEMV
            └── gfx1151        Strix Halo iGPU
```

**Zero Python. Zero C++ at the server layer.** One Rust binary spawns one
C++/HIP subprocess. Streaming passthrough, health checks, CORS — minimal.

## Install

```bash
# Prerequisites: ROCm 7.x, Rust 1.88+
git clone https://github.com/bong-water-water-bong/1bit-engine
cd 1bit-engine
cargo build --release

# Run
./target/release/onebit --model path/to/model.h1b --port 13305
```

## Connect Apps

```python
from openai import OpenAI
client = OpenAI(base_url="http://127.0.0.1:13305/v1", api_key="any")
print(client.chat.completions.create(…
