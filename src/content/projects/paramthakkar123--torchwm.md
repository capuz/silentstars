---
repo: "ParamThakkar123/torchwm"
name: "torchwm"
description: "A modular PyTorch library designed for learning, training, and deploying world models across various environments."
readmeQualityOk: true
url: "https://github.com/ParamThakkar123/torchwm"
homepage: "https://paramthakkar123.github.io/torchwm/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["pytorch", "reinforcement-learning", "world-models", "ai-agents", "dreamer", "generative-ai", "latent-dynamics", "model-based-rl", "pytorch-implementation", "research"]
stars: 24
forks: 3
openIssues: 67
closedIssues: 14
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2025-11-14T20:20:26Z"
lastCommitAt: "2026-07-10T07:01:12Z"
lastReleaseAt: "2026-06-06T14:16:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 81
undervaluedScore: 48
maintainers: ["ParamThakkar123"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ac3921657ac23349242dbea35323bd0eb1a9510659587bfe673109c66f6d098/ParamThakkar123/torchwm"
discussionCount: 1
---

# TorchWM

  <p>
  </p>
  <p><strong>Modular PyTorch library for world models, latent dynamics, and representation learning.</strong></p>
</div>

TorchWM provides reusable PyTorch components and training utilities for Dreamer-style agents, JEPA representations, IRIS, DiT, and related world-model workflows.

## Quick Start

```bash
# Install the core package from PyPI.
# This keeps environment integrations and experiment logging optional.
pip install torchwm

# With extras
pip install torchwm[gym]       # Gym/Gymnasium environments (runnable quick start)
pip install torchwm[dmc]       # DeepMind Control Suite (walker-walk, cheetah-run, ...)
pip install torchwm[procgen]   # Procgen benchmark environments
pip install torchwm[ml-agents] # Unity ML-Agents
pip install torchwm[ml]        # TensorBoard, W&B logging
pip install torchwm[viz]       # FastAPI visualization
pip install torchwm[dev]       # Testing and linting

# Or add it to a uv-managed project.
uv add torchwm
```

TorchWM depends on PyTorch but does not force a single PyTorch wheel index. If you need a specific PyTorch build, install or add the PyTorch packages with the index recommended for your platform by the [PyTorch…
