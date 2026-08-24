---
repo: "hw-native-sys/pypto-lib"
name: "pypto-lib"
description: "Tensor-level kernels and end-to-end LLM model implementations built on the PyPTO programming framework"
readmeQualityOk: true
url: "https://github.com/hw-native-sys/pypto-lib"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 12
forks: 55
openIssues: 24
closedIssues: 82
watchers: 0
contributors: 65
recentReleases: 0
createdAt: "2026-03-10T08:52:27Z"
lastCommitAt: "2026-08-24T04:22:22Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 60
maintainers: ["zhangqi-chen", "lwDavid", "wangqin1723-max"]
openGraphImageUrl: "https://opengraph.githubassets.com/74b7f5fe5c995017c6cb933d0419f285381aed34038bdb89ecef8f61077823ef/hw-native-sys/pypto-lib"
---

# PyPTO-Lib

Tensor-level kernels and model implementations built on the **pypto**
programming framework, targeting Ascend NPUs (910B/C, 950).

**Documentation:** [www.pypto.ai/pypto-lib](https://www.pypto.ai/pypto-lib/)

```
examples/        Self-contained kernels for learning the DSL
  beginner/        hello_world, matmul, etc.
  intermediate/    softmax, rms_norm, rope, etc.
  advanced/        Multi-stage fused + instruction-combo kernels (gemm_eltwise, multi_proj, topk)
models/          End-to-end LLM kernels, one flat directory per model build
  qwen3_14b/                   Qwen3-14B prefill + decode, BF16, serving contract
  deepseek_v4_flash_mtp/       DeepSeek V4-Flash, INT8 W8A8, MTP=1, serving contract
  deepseek_v4_pro/             DeepSeek V4-Pro with an optional Flash preset, A5 variant
  (other directories are kernel harnesses — see the model pages)
golden/          Test harness — compile, run on device, validate against torch
tests/           Lint checks and golden-fn unit tests
docs/            Coding-style and workflow reference
```

Files ending in `_draft.py` are works-in-progress and excluded from CI. The
[model…
