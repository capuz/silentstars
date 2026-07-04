---
repo: "willyfh/visualtorch"
name: "visualtorch"
description: "VisualTorch aims to help visualize Torch-based neural network architectures."
readmeQualityOk: true
url: "https://github.com/willyfh/visualtorch"
homepage: "https://visualtorch.readthedocs.io/en"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["architecture-diagram", "architecture-visualization", "neural-network", "pytorch", "torch", "visualization", "visualtorch", "artificial-intelligence", "deep-learning", "machine-learning"]
stars: 195
forks: 7
openIssues: 1
closedIssues: 13
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2024-02-18T14:45:24Z"
lastCommitAt: "2026-07-04T22:52:03Z"
lastReleaseAt: "2026-07-03T16:48:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 45
maintainers: ["willyfh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/759418356/549f7492-4a3c-4090-9a83-831102744869"
discussionCount: 0
---

<h1>🔥 VisualTorch 🔥</h1>

</div>

**VisualTorch** aims to help visualize Torch-based neural network architectures. It currently supports generating flow-style, graph-style, and LeNet-style architectures for PyTorch Sequential and Custom models. Its original visual styles were inspired by [visualkeras](https://github.com/paulgavrikov/visualkeras), [pytorchviz](https://github.com/szagoruyko/pytorchviz), [pytorch-summary](https://github.com/sksq96/pytorch-summary), and [torchview](https://github.com/mert-kurttutan/torchview); since then, it has grown its own unified tracing backend and architecture-handling logic well beyond its origins.

**Note:** `1.0+` is a major release with breaking API changes, but with significantly better features and algorithms - upgrading is recommended. For the old API, use `0.2.5` or older.

**Limitation:** VisualTorch traces a real forward pass to build the diagram, which has an inherent
limitation shared by any tracing-based approach (not a bug, and not fixable without full symbolic
execution): models with **data-dependent control flow** (e.g. a branch only taken if a tensor
value crosses some threshold) only show whichever branch the traced dummy…
