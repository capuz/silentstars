---
repo: "tenstorrent/tt-forge-onnx"
name: "tt-forge-onnx"
description: "The TT-Forge ONNX is a graph compiler designed to optimize and transform computational graphs for deep learning models, enhancing their performance and efficiency."
url: "https://github.com/tenstorrent/tt-forge-onnx"
homepage: "https://docs.tenstorrent.com/tt-forge-onnx/"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [64, 35]
stars: 64
forks: 29
openIssues: 304
closedIssues: 1033
watchers: 7
contributors: 413
recentReleases: 0
createdAt: "2024-07-19T16:06:19Z"
lastCommitAt: "2026-07-02T06:32:55Z"
lastReleaseAt: "2025-07-02T06:46:23Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 55
maintainers: ["vmilosevic", "chandrasekaranpradeep", "vvukomanTT"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccb51bd3b457183766fcfcefd7e0419845504fc1fec71da1c0659fa9f83ca056/tenstorrent/tt-forge-onnx"
discussionCount: 0
---

<h1>

[Hardware](https://tenstorrent.com/cards/) | [Documentation](https://docs.tenstorrent.com/tt-forge-onnx/) | [Discord](https://discord.gg/tenstorrent) | [Join Us](https://boards.greenhouse.io/tenstorrent?gh_src=22e462047us) | [Bounty $](https://github.com/tenstorrent/tt-forge-onnx/issues?q=is%3Aissue%20state%3Aopen%20label%3Abounty)

</h1>

<br>

**TT-Forge-ONNX** is a graph compiler for running **ONNX**, **TensorFlow**, and **PaddlePaddle** models on Tenstorrent hardware, optimizing computational graphs for performance and efficiency.

> **Part of the [TT-Forge](https://github.com/tenstorrent/tt-forge) AI compiler ecosystem.**

</div>

<br>

-----
# Run a Model

Install TT-Forge-ONNX and run an ONNX model on Tenstorrent hardware:

```bash
# Install uv if you don't have it yet
curl -LsSf https://astral.sh/uv/install.sh | sh

uv pip install tt_forge_onnx --extra-index-url https://pypi.eng.aws.tenstorrent.com/
uv pip install tt_tvm --extra-index-url https://pypi.eng.aws.tenstorrent.com/
```

```python
import torch, onnx, forge

# Load any ONNX model
onnx_model = onnx.load("resnet50.onnx")
input_tensor = torch.randn(1, 3, 224, 224)

# Compile and run on Tenstorrent…
