---
repo: "MechaFauna-ai/Falcata"
name: "Falcata"
description: "GPU-first gradient boosted decision trees. Fastest-growing tree."
readmeQualityOk: true
url: "https://github.com/MechaFauna-ai/Falcata"
homepage: "https://pypi.org/project/falcata/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [43, 29]
stars: 11
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2026-05-03T15:39:30Z"
lastCommitAt: "2026-11-15T11:21:54Z"
lastReleaseAt: "2026-10-21T19:09:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["maxwbuckley"]
openGraphImageUrl: "https://opengraph.githubassets.com/40710b6a0144c1234d6e753ab8a99ee4af3caf10cac42ebc5c51d7afbe41bcd9/MechaFauna-ai/Falcata"
---

Falcata
=======

GPU-first gradient boosted decision trees.

*Falcataria moluccana* — the falcata — is one of the fastest-growing trees on
earth. This one grows them faster too.

Falcata is a CUDA-native GBDT library: a leaf-wise learner whose training loop
was rebuilt around batched, level-parallel GPU kernels rather than one split at
a time.

For the story behind the design, see [Falcata: GPU gradient boosting](https://mechafauna.ai/blog/falcata-gpu-gradient-boosting)
on the MechaFauna blog.

What makes it fast
------------------

- **Hybrid level-batched growth.** Whole levels of sibling pairs are scored,
  synchronized, and applied in one launch each instead of per split — turning a
  latency-bound loop into a throughput-bound one, with leaf-wise-identical
  trees.
- **CUDA-graph level loops.** The per-level launch sequence is captured once and
  replayed by a device-side controller, removing host round-trips from the
  inner loop on shallow trees.
- **Per-tree compact column view.** With any `feature_fraction < 1`, only the
  sampled columns are materialized and gathered for histogram construction.
  The win scales with the excluded fraction: on the Numerai deep regime…
