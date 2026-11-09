---
repo: "yu314-coder/afm-ifp-teardown"
name: "afm-ifp-teardown"
description: "Static teardown + validated decode pipeline for Apple's on-device afmplus-v11.0-ifp MoE model (paper + code, no weights)"
readmeQualityOk: true
url: "https://github.com/yu314-coder/afm-ifp-teardown"
language: "Python"
languages: ["Python", "TeX"]
languagePcts: [48, 47]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-07-11T07:06:23Z"
lastCommitAt: "2026-11-09T04:35:20Z"
lastReleaseAt: "2026-11-08T22:48:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 34
maintainers: ["yu314-coder"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9e6e1ad8a2960f0c228af7ee5141888daa2e7bf9d22e7602d377ba302707a8e/yu314-coder/afm-ifp-teardown"
---

# afm-ifp-teardown — Apple's on-device foundation model in llama.cpp

A from-weights reconstruction of the language model behind Apple Intelligence on macOS 27
(`SystemLanguageModel`, display version **`afmplus-v11.2-ifp`**, the sparse on-device model, "AFM 3 Core Advanced"),
packaged as a GGUF that runs in llama.cpp on macOS, Windows and Linux.

This repository contains **code only**. It does not contain, and will never contain, Apple's weights, tokenizer, decoded
assets or a GGUF. The converter rebuilds the GGUF from the model files Apple Intelligence has already installed on
your own Mac.

| | |
|---|---|
| Model | 56 layers (12 dense + 44 IFP-sparse), d=1536, 16 Q / 8 KV heads × 128, KV sharing in the last 21 layers, 20.3 B parameters stored |
| Weights | Apple's 2-bit codes and fp16 scales carried into Q2_K **bit-exactly**; int4 embedding as Q4_0 (exact) |
| Prompt format | Apple's `afm_cider_v2` template, decoded from the runtime and verified against `SystemLanguageModel.tokenCount` |
| Expert routing | Apple's schedule: experts picked from the last prompt token, re-picked every 32 positions |
| Fidelity | **97.0%** teacher-forced next-token agreement with Apple's live model…
