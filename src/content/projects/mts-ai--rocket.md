---
repo: "mts-ai/ROCKET"
name: "ROCKET"
description: "This is an effective compression method achevies SOTA results against different benchmarks"
readmeQualityOk: true
url: "https://github.com/mts-ai/ROCKET"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 25
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2025-12-11T18:32:22Z"
lastCommitAt: "2026-10-27T12:39:25Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 27
maintainers: ["ammarali32"]
openGraphImageUrl: "https://opengraph.githubassets.com/a59c6bb3363b087f6dbbe125e9e2f70d721115af1717ba9e27c6226995f73843/mts-ai/ROCKET"
---

# 🚀 ROCKET: Rapid Optimization via Calibration-guided Knapsack Enhanced Truncation for Efficient Model Compression

In a quiet corner of the AI research lab, a cartoon rocket stood on the launchpad—bright red, cheerful, and boldly labeled “LLM.” At the control console sat a scientist, fingers hovering over a single, enormous red button marked “Solve MCKP.”
With a deep breath and a flicker of hope, they pressed it.
The rocket roared to life. Flames erupted, scattering clouds of sparse matrices like confetti made of zeros. As the LLM blasted into the stratosphere of efficient inference, it left behind on the pad a humble knapsack overflowing not with gold, but with perfectly balanced (rank, sparsity) pairs: the optimal solutions to the Multiple-Choice Knapsack Problem, handpicked for model compression.
Up it soared lighter, faster, smarter carrying only what truly mattered.
```
rocket/
├── setup.py
├── rocket/
│   ├── __init__.py
│   ├── config/
│   │   └── default.yaml
│   ├── data/
│   │   ├── __init__.py
│   │   └── prepare_data.py          # prepare_data logic (calibration data activations)
│   ├── calib/
│   │   ├── __init__.py
│   │   └── calib.py                 # Calib…
