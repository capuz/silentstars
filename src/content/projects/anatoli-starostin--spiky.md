---
repo: "anatoli-starostin/spiky"
name: "spiky"
description: "An experimental CUDA-enabled, PyTorch-compatible Python library inspired by the Spiking Manifesto (E. Izhikevich), implementing differentiable lookup tables as a simple instrument to model spike polychronization."
readmeQualityOk: true
url: "https://github.com/anatoli-starostin/spiky"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [52, 30]
stars: 18
forks: 1
openIssues: 38
closedIssues: 14
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-11-14T07:48:30Z"
lastCommitAt: "2026-09-26T08:47:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 48
maintainers: ["spikyclaudebot", "anatoli-starostin", "nucstarbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d35331809a8108f014206f4f62e6433560fb9176623853a40631864a44a89e5/anatoli-starostin/spiky"
---

# Spiky

**Version 1.0**

An experimental CUDA-enabled, PyTorch-compatible Python library inspired by the [Spiking Manifesto](https://arxiv.org/pdf/2512.11843) (E. Izhikevich), implementing differentiable lookup tables as a simple instrument to model spike polychronization.

**Author:** Anatoly Starostin

## Resources

- **Spiking Manifesto:** [arXiv Paper](https://arxiv.org/pdf/2512.11843)
- **Project Presentation:** [Google Slides](https://docs.google.com/presentation/d/16ZdLnLGjpVy9oCk1FHdEsVbEQv1eOe_jI-SrzM3srmc/edit?usp=sharing)
- **LUTGPT research report:** [`doc/lutorch/lutgpt_research_report.pdf`](https://github.com/anatoli-starostin/spiky/blob/HEAD/doc/lutorch/lutgpt_research_report.pdf) — full write-up of the LUTGPT model (vanilla baseline, architecture, primitive math, training recipe, efficiency analysis, experiments).

## LUTGPT

The LUTGPT model — a six-layer transformer whose Q / K / V / out projections and per-layer residuals are all `FastMultiHeadLut` tables — ships in two end-to-end entry points:

- **`examples/lutgpt/`** — published reference configuration (narrow backbone, `E=192`, `D=384`, hybrid-smooth all 16K steps; matches `exp755` of the research report at…
