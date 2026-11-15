---
repo: "VLR-CVC/vlm-training"
name: "vlm-training"
description: "Large-scale VLM pre-training and finetuning on HPC. Designed and tested for MareNostrum, Leonardo and JUPITER."
readmeQualityOk: true
url: "https://github.com/VLR-CVC/vlm-training"
homepage: "https://www.vlr.ai/home"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 25
forks: 4
openIssues: 2
closedIssues: 17
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-01-13T10:51:11Z"
lastCommitAt: "2026-11-15T11:22:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["tomiock"]
openGraphImageUrl: "https://opengraph.githubassets.com/47b85db01b6ed418927f385402396c352973b53b74b91d4a7195b15a87a3fccf/VLR-CVC/vlm-training"
---

# Visual Language Models Large-Scale Training
**Computer Vision Center | VLR Group**

> Contact: [tockier@cvc.uab.cat](mailto:tockier@cvc.uab.cat)

Massive-scale VLM pre-training and finetuning on HPC. Designed and tested for
**MareNostrum 5**, **Leonardo** and **JUPITER**.

Works like torchtitan: pure-torch model definitions, native torch distributed,
no `transformers` in the training path. Architectures are read from an HF-format
`config.json` and weights load straight from an HF snapshot directory into the
already-sharded state dict.

## Documentation

| Document | What is in it |
|---|---|
| [docs/ARCHITECTURE.md](https://github.com/VLR-CVC/vlm-training/blob/HEAD/docs/ARCHITECTURE.md) | how models are defined, how parallelism is applied |
| [docs/USAGE.md](https://github.com/VLR-CVC/vlm-training/blob/HEAD/docs/USAGE.md) | configuring and launching a run |
| [docs/METRICS.md](https://github.com/VLR-CVC/vlm-training/blob/HEAD/docs/METRICS.md) | what tokens/s, TFLOP/s and MFU actually count |
| [INSTALL.md](https://github.com/VLR-CVC/vlm-training/blob/HEAD/INSTALL.md) | the environment, and why each pin exists |
|…
