---
repo: "dsadsasdaddas/rwkv7-hf-adapter"
name: "rwkv7-hf-adapter"
description: "First-stage Hugging Face adapter and converter for official RWKV-7 checkpoints"
url: "https://github.com/dsadsasdaddas/rwkv7-hf-adapter"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 8
forks: 3
openIssues: 10
closedIssues: 5
watchers: 1
contributors: 7
recentReleases: 4
createdAt: "2026-06-30T08:36:43Z"
lastCommitAt: "2026-07-04T06:12:58Z"
lastReleaseAt: "2026-07-03T23:54:13Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 54
maintainers: ["dsadsasdaddas", "tangyubin", "aierwiki"]
openGraphImageUrl: "https://opengraph.githubassets.com/aabf95a46a2bfd5a3a89ded2fdd157b1603d6229bd527bfb3f6f05c91e4a67e9/dsadsasdaddas/rwkv7-hf-adapter"
---

# RWKV-7 HF Adapter

First-stage Hugging Face adapter for official RWKV-7 `.pth` checkpoints.
Current scope is HF adapter delivery only: Transformers loading/generation,
PEFT/TRL/Trainer compatibility, HF state-cache serving primitives, quantized
inference, and HF-compatible speculative decoding.

The current performance phase is tracked in [`docs/performance/FUSED_BACKEND.md`](docs/performance/FUSED_BACKEND.md):
keep the HF wrapper as the public compatibility layer, then add native fused
fp16 and native W8/W4 backends behind `rwkv7_forward_token()` and `generate()`
to close the Albatross and quantized-decode speed gaps.

Contributor status and roadmap docs:

- [`CONTRIBUTING.md`](CONTRIBUTING.md): how to pick an issue, run card validation, report environment/results, and prepare focused PRs.
- [`HF_STATUS.md`](HF_STATUS.md): what is already done, current evidence, hardware/card adaptation status, and production-readiness gaps.
- [`HF_TODO.md`](HF_TODO.md): prioritized HF-only TODO list for contributors, including large-model training, ZeRO resume, one-click acceptance scripts, card validation, and productionization tasks.
-…
