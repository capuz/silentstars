---
repo: "StepfenShawn/qwen_inference_in_rust"
name: "qwen_inference_in_rust"
description: "Run the Qwen3.8 27B LLM on one laptop CPU at ~3~5 tok/s. Written in pure rust: no BLAS, no framework, no GPU!"
readmeQualityOk: true
url: "https://github.com/StepfenShawn/qwen_inference_in_rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["llm-inference", "rust", "qwen3", "simd"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-09-13T15:36:46Z"
lastCommitAt: "2026-10-18T08:15:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 25
maintainers: ["StepfenShawn"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd670aa3601805f4c359167e5bc896ab373f93ae8931b2df25176b13b9ab4016/StepfenShawn/qwen_inference_in_rust"
---

# qwen3.8_27b_in_rust
**Run the Qwen3.8 27B LLM on one laptop CPU at ~3~5 tok/s. Written in pure rust.**

No GPU, no BLAS, no ML framework: the quantized GEMM/GEMV kernels, the hybrid linear/full attention,
the MTP speculative decoder and the sampler are all hand-written, and the whole model is a single
16.5 GB GGUF file mapped straight off the disk.  

# Requirements
| | |
| --- | --- |
| OS  | Linux/x86-64, Windows/x86-64, MacOS/arm64 is coming soon! |
| CPU | AVX2 + FMA on x86-64 is better, NEON on arm64 is coming soon! |
| GPU | NO |
| RAM | >=8GB |
| Storage | ~20GB free |

# Usage
```
qwen38_27b_in_rust --model MODEL.gguf [--prompt TEXT] [options]
  --prompt TEXT       run one request
  --system TEXT       system instruction
  --max-tokens N      maximum generated tokens (default: 1024)
  --context N         context capacity (default: 4096)
  --temperature N     0 for greedy; default: 1.0
  --top-k N           sample from the best N tokens (default: 20)
  --top-p N           nucleus probability (default: 0.95)
  --presence-penalty N
  --no-thinking       answer directly instead of showing reasoning
  --reasoning-effort N  low, medium, or xhigh (default: xhigh)
  --threads N…
