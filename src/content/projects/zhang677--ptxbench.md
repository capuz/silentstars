---
repo: "zhang677/PTXBench"
name: "PTXBench"
description: "PTXBench: an open-source environment to evaluate GPU kernel languages for LLM agents"
readmeQualityOk: true
url: "https://github.com/zhang677/PTXBench"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 38
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-07-27T00:57:29Z"
lastCommitAt: "2026-11-07T22:51:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 29
maintainers: ["zhang677"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa905c93188676cd1bb75450e47f97c810c9bfb9e501491662067da13a3ec0a9/zhang677/PTXBench"
---

# PTXBench

PTXBench contains one GPU profiling service and two ways to run kernel agents:
the multiturn model loop and the coding-agent gateway. Fixit SFT and KernelGen
use the same multiturn runner and prompt registry for source and final evaluation.
This repository gives the experiment process and a small set of runnable examples;
it does not include paper outputs, plots, or the full prepared experiment matrix.

| Directory | Purpose |
| --- | --- |
| `fib-profile/` | GPU profiling service |
| `multiturn/` | Model loop, CUDA/Triton evaluator tests, prompt registry, and runner |
| `ptxbench-eval/` | Coding-agent gateway, launcher, agent images, and examples |
| `experiments/prepared/configs/` | One multiturn config example |
| `experiments/fixit/` | Failed-kernel repair, reasoning, SFT, serving, evaluation |
| `experiments/kernelgen/` | Correct-kernel reasoning, SFT, serving, evaluation |
| `experiments/shared/` | Run manifests, turn export, and shared training/serving code |

🚧 This repository is still under construction.

## Setup

Use Python 3.12, Docker with NVIDIA GPU access, `tmux`, and an H100 host for the
bundled workloads. SFT runtime-SASS export also needs host…
