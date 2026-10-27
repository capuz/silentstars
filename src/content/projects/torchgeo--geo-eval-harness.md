---
repo: "torchgeo/geo-eval-harness"
name: "geo-eval-harness"
description: "Benchmark harness/toolkit for evaluating Geospatial Foundation Models (GFM). Independently developed with long-term updates and maintenance."
readmeQualityOk: true
url: "https://github.com/torchgeo/geo-eval-harness"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 34
forks: 11
openIssues: 44
closedIssues: 55
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2025-10-07T03:50:06Z"
lastCommitAt: "2026-10-27T12:40:12Z"
lastReleaseAt: "2026-06-30T02:11:48Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 55
maintainers: ["calebrob6", "dependabot[bot]", "nilsleh"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf96207959a8493be2b39dc1c068739dcaa0c716b781e1d20343967b51b6cf3c/torchgeo/geo-eval-harness"
fundingLinks: ["GITHUB:https://github.com/torchgeo"]
---

# geo-eval-harness

A lightweight benchmarking framework for evaluating **frozen** geospatial
foundation models on GeoBench V1/V2 and location encoders on CoordBench. Plug
in a backbone or coordinate encoder and run consistent downstream probes through
explicit CLI flags and strictly validated Pydantic YAML configuration.

- **Frozen-backbone evaluation** — KNN-5, L-BFGS logistic regression, and
  linear / conv / FPN / DPT segmentation probes.
- **GeoBench V1 + V2 built in** — classification and segmentation, RGB or
  full multispectral / multi-modal stacks.
- **CoordBench built in** — coordinate-only regression and classification with
  random, spatial-block, and official holdouts.
- **Config-driven** — sweep models, datasets, partitions, image sizes, and
  bands without code changes.
- **Resumable** — `--resume` skips already-computed `(dataset, method, model, …)` rows. Atomic CSV appends are safe across parallel jobs.
- **Bring your own model** — copy
  [`contrib_template.py`](https://github.com/torchgeo/geo-eval-harness/blob/HEAD/src/geo_eval_harness/models/contrib_template.py),
  implement `_forward_patch_features`, and add a one-file model config.
  See the [Stage 1…
