---
repo: "Green0-0/propagate"
name: "propagate"
description: "Evolutionary strategies finetuning library for LLMs"
readmeQualityOk: true
url: "https://github.com/Green0-0/propagate"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 25
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-10-20T17:49:30Z"
lastCommitAt: "2026-09-12T08:04:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 41
maintainers: ["Green0-0"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4e387261cf01a929712e346b188b23394926ab98ab0e778bf0d5adbed471b38/Green0-0/propagate"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="graphics/headerdark.png">
    <source media="(prefers-color-scheme: light)" srcset="graphics/hl.png">
  </picture>
  <h2>Train thinking models using evolutionary strategies!</h2>
</div>

### 🏃 Quick Start:
1. Clone this repo: ``git clone https://github.com/Green0-0/propagate``

2. Setup your venv and install vllm: ``https://docs.vllm.ai/en/v0.11.2/getting_started/installation/``

3. Install the dependencies: ``cd propagate && pip install -e .``

*Propagate should work wherever vLLM does, including on windows! Look for a fork of https://github.com/SystemPanic/vllm-windows with the appropriate CUDA version, and remove ``distributed_executor_backend="ray",`` from ``vllm_backend.py``.*

4. Run ``python examples/demo_countdown.py``. You should be prompted to login to wandb, and then training will begin!

### 📖 [Guide](https://github.com/Green0-0/propagate/blob/HEAD/GUIDE.md)

### 🛠️ [Work in progress](https://github.com/Green0-0/propagate/blob/HEAD/TODO.md)

### 📜 Credits:
- https://openai.com/index/evolution-strategies/
- https://github.com/VsonicV/es-fine-tuning-paper
- https://github.com/ESHyperscale/HyperscaleES…
