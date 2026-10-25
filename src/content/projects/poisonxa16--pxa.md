---
repo: "poisonxa16/pxa"
name: "pxa"
description: "The set-and-forget LLM engine for Pascal and Volta: PXQ codec + kernels, auto-tuned per card. Ready-to-run PXQ models in MODELS.md; benchmarks vs llama.cpp in the README."
readmeQualityOk: true
url: "https://github.com/poisonxa16/pxa"
homepage: "https://pxanetwork.com"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [40, 25]
topics: ["cuda", "gguf", "llama-cpp", "p100", "pascal", "quantization", "speculative-decoding", "v100", "vllm", "volta"]
stars: 88
forks: 15
openIssues: 1
closedIssues: 6
watchers: 2
contributors: 4
recentReleases: 2
createdAt: "2026-09-07T20:18:19Z"
lastCommitAt: "2026-10-25T02:47:01Z"
lastReleaseAt: "2026-10-10T23:11:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 37
maintainers: ["poisonxa16", "poisonxa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1360632640/fa9f979b-d9dc-4eef-9713-2126b5d138dd"
discussionCount: 0
---

```bash
tar xzf pxa-v3.1-linux-x86_64-cuda12.8-sm60_61_70.tar.gz && cd pxa-v3.1-linux-x86_64-cuda12.8-sm60_61_70    # 1. unpack the release tarball
./pxa                                                                  # 2. PXA Control opens in your browser
# 3. pick your cards, pick a model, press Start.  No browser? Run ./pxa --tui for the same steps in the terminal.
```

No build tools, no CUDA toolkit, no account. Prefer a container? See [Quick start](#quick-start).

The speed work targets [PXA quants](#use-pxa-quants) (PXQ and PXQN). A standard GGUF file loads and runs on the same server.

**On this page:** [What PXA is](#what-pxa-is) · [Use PXA quants](#use-pxa-quants) · [Why it is fast](#why-it-is-fast-on-these-cards) · [Features](#features) · [Supported hardware](#supported-hardware) · [Quick start](#quick-start) · [Models](#models) · [Speed](#speed) · [FAQ](#faq) · [Docs](#docs) · [Community](#community-and-support) · [Credits](#credits) · [Licence](#licence)

---

## What PXA is

PXA is a language-model server for NVIDIA Pascal and Volta cards: Tesla P100, Tesla V100, GTX 1080 Ti and their relatives. You give it a model file and one or more cards. It starts a local…
