---
repo: "MechaFauna-ai/Falcata"
name: "Falcata"
description: "GPU-first gradient boosted decision trees. Fastest-growing tree."
readmeQualityOk: true
url: "https://github.com/MechaFauna-ai/Falcata"
homepage: "https://pypi.org/project/falcata/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [48, 24]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 3
createdAt: "2026-05-03T15:39:30Z"
lastCommitAt: "2026-08-30T09:25:26Z"
lastReleaseAt: "2026-08-15T14:53:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 56
maintainers: ["BelixRogner", "SalimELMARDI"]
openGraphImageUrl: "https://opengraph.githubassets.com/10cad1c6a26870972162b07daa7d9b3c61cee2f9b120d7c774836f4c11c5ab47/MechaFauna-ai/Falcata"
---

</p>

Falcata
=======

GPU-first gradient boosted decision trees.

*Falcataria moluccana* — the falcata — is one of the fastest-growing trees on
earth. This one grows them faster too.

Falcata is a CUDA-native GBDT library: a leaf-wise learner whose training loop
was rebuilt around batched, level-parallel GPU kernels rather than one split at
a time.

What makes it fast
------------------

- **Hybrid level-batched growth.** Whole levels of sibling pairs are scored,
  synchronized, and applied in one launch each instead of per split — turning a
  latency-bound loop into a throughput-bound one, with leaf-wise-identical
  trees.
- **CUDA-graph level loops.** The per-level launch sequence is captured once and
  replayed by a device-side controller, removing host round-trips from the
  inner loop on shallow trees.
- **NVRTC runtime JIT.** Construct kernels are specialized at runtime to the
  actual data shape (bin count, column layout), self-tested against the
  ahead-of-time kernel, and promoted only if bit-identical.
- **Per-tree compact column view.** With any `feature_fraction < 1`, only the
  sampled columns are materialized and gathered for histogram construction.
  The win scales…
