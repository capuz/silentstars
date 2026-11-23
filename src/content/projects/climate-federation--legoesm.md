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
stars: 166
forks: 33
openIssues: 23
closedIssues: 412
watchers: 1
contributors: 42
recentReleases: 0
createdAt: "2026-02-28T17:57:45Z"
lastCommitAt: "2026-11-23T12:24:31Z"
lastReleaseAt: "2026-08-15T22:13:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 38
maintainers: ["gentine", "dhruvbalwada"]
openGraphImageUrl: "https://opengraph.githubassets.com/f48e1fe75f762198230343deae3f03ea80bb798305c30cf63008c0d551582160/climate-federation/legoESM"
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
