---
repo: "heavyball-research/flywheel-tpu"
name: "flywheel-tpu"
description: "Fast, open-source Pallas kernels for TPU inference and training."
readmeQualityOk: true
url: "https://github.com/heavyball-research/flywheel-tpu"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 20
forks: 6
openIssues: 2
closedIssues: 7
watchers: 0
contributors: 5
recentReleases: 5
createdAt: "2026-09-29T03:59:12Z"
lastCommitAt: "2026-11-25T03:16:36Z"
lastReleaseAt: "2026-11-04T15:27:50Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 52
maintainers: ["DavidBao03", "lk-chen", "Deepolar"]
openGraphImageUrl: "https://opengraph.githubassets.com/d241d4cbac31528a248ec735d443dd9ca417c5017774b367fd40f1b45fb4df4a/heavyball-research/flywheel-tpu"
---

| <a href="docs/"><b>Documentation</b></a> | <a href="https://arxiv.org/abs/2611.01426"><b>Paper</b></a> | <a href="https://heavyball-research.github.io/blog/2026-09-29-attention-tpu/"><b>Blog</b></a> | <a href="https://github.com/heavyball-research/flywheel-tpu/releases/latest"><b>Latest Release</b></a> | <a href="https://pypi.org/project/flywheel-tpu/"><b>PyPI</b></a> |

**FlyWheel** is a kernel library for TPU, written in JAX Pallas by
[heavyball-research](https://github.com/heavyball-research). It implements
softmax attention (MHA and MQA/GQA) behind flash-attn's API, the fused
linear attention layers of hybrid models (GDN and KDA), DeepSeek sparse
attention (DSA), and the routed experts of MoE layers as one fused MLP
kernel, on TPU v6e and v7x.
