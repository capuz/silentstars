---
repo: "hw-native-sys/pypto-lib"
name: "pypto-lib"
description: "PyPTO kernels and end-to-end LLM models for Ascend NPUs."
readmeQualityOk: true
url: "https://github.com/hw-native-sys/pypto-lib"
homepage: "http://www.pypto.ai/pypto-lib/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 25
forks: 75
openIssues: 37
closedIssues: 133
watchers: 0
contributors: 42
recentReleases: 0
createdAt: "2026-03-10T08:52:27Z"
lastCommitAt: "2026-10-23T08:47:36Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 95
undervaluedScore: 60
maintainers: ["zhangqi-chen", "lwDavid", "high-cloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2d42d5f4f627b4b7949128c2089fdb7ff3b9e51f48d8e1ea8a563aafe4b96c3/hw-native-sys/pypto-lib"
---

# PyPTO-Lib

**PyPTO** kernels and end-to-end LLM models for Ascend NPUs.

**Documentation:** [www.pypto.ai/pypto-lib](https://www.pypto.ai/pypto-lib/)

```
examples/        Self-contained kernels for learning the DSL
  beginner/        hello_world, matmul, etc.
  intermediate/    softmax, rms_norm, rope, etc.
  advanced/        Multi-stage fused + instruction-combo kernels (gemm_eltwise, multi_proj, topk)
models/          End-to-end LLM kernels, one flat directory per model build
  qwen3_14b/                   Qwen3-14B prefill + decode, BF16, serving contract
  deepseek_v4_flash_mtp/       DeepSeek V4-Flash, INT8 W8A8, MTP=1, serving contract
  (other directories are kernel harnesses — see the model pages)
golden/          Test harness — compile, run on device, validate against torch
tests/           Lint checks and golden-fn unit tests
docs/            Coding-style and workflow reference
```

Files ending in `_draft.py` are works-in-progress and excluded from CI. The
[model pages](https://github.com/hw-native-sys/pypto-lib/blob/HEAD/docs/models/index.md) list every model directory, whether it is
wired to `pypto-serving`, and — for the full model trees — its deployment…
