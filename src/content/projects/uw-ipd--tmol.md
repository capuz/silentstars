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
stars: 92
forks: 10
openIssues: 4
closedIssues: 32
watchers: 15
contributors: 37
recentReleases: 0
createdAt: "2018-02-13T23:36:42Z"
lastCommitAt: "2026-09-10T08:20:04Z"
lastReleaseAt: "2026-03-02T07:10:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 48
maintainers: ["kierandidi", "fdimaio"]
openGraphImageUrl: "https://opengraph.githubassets.com/f77cc7b1bdd7c4aba71b5fcda7f6e3a3fe92ad9e1dd7a8007f41ed354642b2cd/uw-ipd/tmol"
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

Four ways in:

- 🚀 **Start scoring** → [quick start](#quick-start), then the full **[Quickstart](https://uw-ipd.github.io/tmol/latest/quickstart.html)**.
- 🧬 **Build a workflow** → **[scoring, packing, minimization, FastRelax, and ligand recipes](https://uw-ipd.github.io/tmol/latest/workflows/index.html)**.
- 🤖 **Guide an agent** → **[portable TMol skills](https://github.com/uw-ipd/tmol/blob/HEAD/skills/README.md)** for setup, scoring, packing/relax, and development.
- 🛠️ **Develop TMol** → **[contributor guide](https://uw-ipd.github.io/tmol/latest/contributor_guide.html)**.

## Install

The shortest path is:

```bash
pip install tmol
```

TMol first looks for a matching prebuilt wheel and otherwise builds locally.
For a deterministic…
