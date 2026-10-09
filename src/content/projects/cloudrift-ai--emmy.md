---
repo: "cloudrift-ai/emmy"
name: "emmy"
description: "Optimized GPU compiler for LLM inference. Choose from a list of optimized recipes or optimize your own model via kernel fusion, autotuning, and advanced scheduling. Run benchmarks across different GPU types and configurations, track results and share experiments with the community."
readmeQualityOk: true
url: "https://github.com/cloudrift-ai/emmy"
homepage: "https://riftstack.ai/emmy"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["compilers", "gpu-computing", "inference", "llm-inference", "llmops"]
stars: 83
forks: 11
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 9
recentReleases: 7
createdAt: "2025-08-02T04:46:17Z"
lastCommitAt: "2026-10-09T10:51:25Z"
lastReleaseAt: "2026-09-17T14:45:32Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 55
maintainers: ["Slonegg", "gnull", "6erun"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2e3f0151e897ad7d1880f021b7af7aef439e258df7e7288bd88ad77b636bd65/cloudrift-ai/emmy"
---

**Compile → Benchmark → Deploy** any LLM on any GPU. Optimized compiler, LLM benchmarking, and deployment stack. Optimize inference via kernel fusion, autotuning, and advanced scheduling. See the blog post: [*Outperforming vLLM (cuBLAS and FlashAttention) on Gemma4-12B*](https://www.cloudrift.ai/blog/optimizing-gemma-4-12b-rtx).

## Install

```bash
pip install emmy-ml          # the CLI, with the recommended recipes bundled
emmy --version
```

The compiler needs its own extra (`pip install "emmy-ml[compile]"` — torch, transformers, cppyy). The wheel carries
the runtime extension that launches its kernels (`emmy.emmy_runtime`, built from `crates/emmy-runtime-py`) for Linux
x86_64; on another platform the sdist builds it when a Rust toolchain is present and installs pure without one,
which keeps every command that needs no GPU working. To hack on emmy itself, clone instead:

```bash
git clone https://github.com/cloudrift-ai/emmy.git
cd emmy && make setup
```

Kernels compile with the CUDA toolkit's `nvcc` and launch through the Rust runtime (`make setup` builds it into the
venv, so a Rust toolchain is a prerequisite). On a pre-Turing GPU (V100 `sm_70`, P100 `sm_60`) the toolkit…
