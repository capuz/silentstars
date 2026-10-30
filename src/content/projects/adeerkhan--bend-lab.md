---
repo: "adeerkhan/bend-lab"
name: "bend-lab"
description: "Experiments in machine learning written in Bend: models trained from scratch, verified against NumPy twins and the PyTorch reference."
readmeQualityOk: true
url: "https://github.com/adeerkhan/bend-lab"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["bend", "diffusion", "machine-learning", "numpy", "reproducible-research", "transformers", "bendtorch"]
stars: 5
forks: 0
openIssues: 7
closedIssues: 8
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-19T20:03:23Z"
lastCommitAt: "2026-10-30T11:02:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 47
maintainers: ["adeerkhan"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ac51c1f8320548324674109e8cd896651de8421c1ffa5acd5b74ec7d87d41e4/adeerkhan/bend-lab"
---

# bend-lab

**Machine learning, built in Bend.** Models are written from scratch in
[Bend](https://github.com/bendlang/bend) and trained on
[BendTorch](https://github.com/nuxyel/BendTorch). The repository is an
experiment corpus, not a library. bend-ml owns the tensors and the laws,
BendTorch owns the training, and this repository uses them, measures them and
records the results.

Every number comes from a program in the repository and is checked three ways:
against a NumPy twin written at the same operation order, against an outside
implementation where one exists (scikit-learn, PyTorch, the lucidrains UNet),
and against an earlier version of itself through frozen probes. When the three
disagree, the disagreement is the result. A number that was not measured is not
written down.

## Results

The diffusion track is complete through a ViT denoiser: 2×2 patches, 16 tokens,
three pre-LN blocks, 100,736 parameters and 3000 steps on the first 1024
optdigits images. Legibility is the mean best absolute correlation of a sample
with any training digit. Random images score 0.326, the digits MLP scores 0.408,
and the gate is 0.75.

| arm (same data, sampler and starting noise) | DDIM 16 |…
