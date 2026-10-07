---
repo: "firedrakeproject/gusto"
name: "gusto"
description: "Three dimensional atmospheric dynamical core using the Gung Ho numerics."
readmeQualityOk: true
url: "https://github.com/firedrakeproject/gusto"
homepage: "http://firedrakeproject.org/gusto/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 20
forks: 13
openIssues: 41
closedIssues: 151
watchers: 17
contributors: 32
recentReleases: 0
createdAt: "2016-01-13T09:51:17Z"
lastCommitAt: "2026-10-07T10:31:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 49
maintainers: ["tommbendall", "dependabot[bot]", "JHopeCollins"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9b26ca0852d0b04603c68b3c2039ce97a48ecde0b4afe59348f029bf0f57fa8/firedrakeproject/gusto"
discussionCount: 16
---

# Gusto

Gusto is a Python code library, providing a toolkit of finite element methods for modelling geophysical fluids, such as the atmosphere and ocean.
The methods used by Gusto are underpinned by the [Firedrake](http://firedrakeproject.org) finite element code generation software.

Gusto is particularly targeted at the numerical methods used by the dynamical cores used in numerical weather prediction and climate models.
Gusto focuses on compatible finite element discretisations, in which variables lie in function spaces that preserve the underlying geometric structure of the equations.
These compatible methods underpin the Met Office's next-generation model, [LFRic](https://www.metoffice.gov.uk/research/approach/modelling-systems/lfric).

### Gusto is designed to provide:
- a testbed for **rapid prototyping** of novel numerical methods
- a **flexible framework** for exploring different modelling choices for geophysical fluid dynamics
- a **simple environment** for setting up and running test cases

## Installing

Before installing Gusto you should first install Firedrake using the instructions found [here](https://firedrakeproject.org/install).
Once this is done Gusto can then…
