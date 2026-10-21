---
repo: "climate-federation/legoESM"
name: "legoESM"
description: "A differentiable Earth System Model in JAX — atmosphere, ocean, land, sea ice, lakes, coupler, end-to-end gradients."
readmeQualityOk: true
url: "https://github.com/climate-federation/legoESM"
homepage: "https://github.com/climate-federation/legoESM/blob/main/docs/user-guide/getting_started.md"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 143
forks: 21
openIssues: 16
closedIssues: 358
watchers: 1
contributors: 39
recentReleases: 1
createdAt: "2026-02-28T17:57:45Z"
lastCommitAt: "2026-10-21T21:15:36Z"
lastReleaseAt: "2026-08-15T22:13:34Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 38
maintainers: ["gentine", "claude", "lesommer"]
openGraphImageUrl: "https://opengraph.githubassets.com/9565388060b367b6e6e2d197e30f414755e6227ffdcf27961b58e600d38a6083/climate-federation/legoESM"
discussionCount: 1
---

# legoESM 1.0

**A Differentiable Earth System Model in JAX**

legoESM is a fully differentiable Earth System Model spanning weather to
climate timescales. Built from scratch in JAX, it couples atmosphere, ocean,
land, sea ice, lakes and a tile-based surface coupler through one interface.
You can take `jax.grad` end to end through the coupled model, for variational
data assimilation, parameter estimation, sensitivity analysis and hybrid
AI–physics modelling. Dynamical cores, physics schemes, grids, vertical
coordinates and time integrators are swappable bricks, hence the "lego".

**Install** (Python ≥ 3.11):

```bash
pip install legoesm
```

This installs the model as a Python library (`import legoesm`). The `legoesm`
command-line test cases, experiment templates and the walkthrough below still
need a clone of this repository; [Getting started](#getting-started-about-one-hour)
sets one up with `uv`.

**New here? Follow [Getting started](#getting-started-about-one-hour) below.**
It takes you from `git clone` to your own 3-D atmosphere experiment, with the
results plotted, in well under an hour. The feature inventory and reference
material come after it.

## Getting started (about…
