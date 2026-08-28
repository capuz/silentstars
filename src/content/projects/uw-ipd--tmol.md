---
repo: "uw-ipd/tmol"
name: "tmol"
description: "TMol - Rosetta on the GPU"
readmeQualityOk: true
url: "https://github.com/uw-ipd/tmol"
homepage: "https://uw-ipd.github.io/tmol/"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [60, 35]
stars: 88
forks: 9
openIssues: 4
closedIssues: 32
watchers: 15
contributors: 35
recentReleases: 0
createdAt: "2018-02-13T23:36:42Z"
lastCommitAt: "2026-08-28T12:22:46Z"
lastReleaseAt: "2026-03-02T07:10:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 49
maintainers: ["kierandidi", "aleaverfay", "fdimaio"]
openGraphImageUrl: "https://opengraph.githubassets.com/30a738bd3af6b31dcf7b63a9437ca4d94f46df3fcb70c7973f962608cf14790f/uw-ipd/tmol"
---

<h1 align="center">TMol</h1>

</p>

TMol scores, packs, minimizes, and relaxes all-atom molecular structures as
batched PyTorch tensors—on CPU or GPU, with gradients. It provides fast
C++/CUDA kernels and modeling primitives for proteins, nucleic acids, ligands,
and their complexes.

Explore the **[TMol documentation](https://uw-ipd.github.io/tmol/)** for
complete installation guidance, executable tutorials, workflows, and the API
reference.

Three ways in:

- 🚀 **Start scoring** → [quick start](#quick-start), then the full **[Quickstart](https://uw-ipd.github.io/tmol/latest/quickstart.html)**.
- 🧬 **Build a workflow** → **[scoring, packing, minimization, FastRelax, and ligand recipes](https://uw-ipd.github.io/tmol/latest/workflows/index.html)**.
- 🛠️ **Develop TMol** → **[contributor guide](https://uw-ipd.github.io/tmol/latest/contributor_guide.html)**.

## Install

The shortest path is:

```bash
pip install tmol
```

TMol first looks for a matching prebuilt wheel and otherwise builds locally.
For a deterministic CPU/GPU binary install, supported Python/PyTorch/CUDA
combinations, Colab, macOS, and HPC troubleshooting, see the
**[installation…
