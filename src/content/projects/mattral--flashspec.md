---
repo: "Mattral/FlashSpec"
name: "FlashSpec"
description: "Adaptive speculative-decoding inference engine with Triton-optimised verification and online bandit draft selection."
readmeQualityOk: true
url: "https://github.com/Mattral/FlashSpec"
homepage: "https://pypi.org/project/flashspec/"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["bandit-algorithms", "inference-optimization", "llm-inference", "machine-learning", "speculative-decoding", "triton", "production-inference"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2024-02-09T05:19:57Z"
lastCommitAt: "2026-10-24T08:07:57Z"
lastReleaseAt: "2026-10-16T03:17:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 71
maintainers: ["Mattral", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b185177d0df31efcdb7cf068e1a53743c49871c4b28e457f2a127a80e51527c/Mattral/FlashSpec"
---

Verification kernel and a pure-PyTorch reference · bandit draft selection · chi-squared output check

  

---

> **Project status: alpha 0.1.5.** Correctness tests, including a
> chi-squared check that emitted tokens follow the target when the draft
> and target differ, are in the suite. The engine is currently slower
> than plain decoding. A CPU float32 run at git `f59b5b4` loaded
> TinyLlama-1.1B-Chat and Felladrin/Llama-160M-Chat-v1, tokenized
> HumanEval/23, and generated 16 new tokens with no warmup and one
> thread. FlashSpec measured 1.75 tok/s and vanilla
> autoregressive decoding measured 4.30 tok/s
> (`speedup_vs_ar_mean` 0.407). Acceptance was
> 0.114 with one drafter, so the bandit did not adapt, and
> the draft-plus-verify step cost more wall time than the tokens it
> kept. The Colab Tesla T4 float16 pair is in
> `benchmarks/results/tinyllama_gpu_flashspec_ucb_cb02ca1.json` and
> `benchmarks/results/tinyllama_gpu_vanilla_ar_cb02ca1.json`. Every H100
> number in this README is a design target. This release is a single-device
> library plus a small HTTP server. It is not a production serving stack.

---

## What is FlashSpec?

Standard speculative decoding uses a small…
