---
repo: "fau-advanced-separations/CADET-Process"
name: "CADET-Process"
description: "A Framework for Modelling and Optimizing Advanced Chromatographic Processes"
url: "https://github.com/fau-advanced-separations/CADET-Process"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 34
forks: 16
openIssues: 59
closedIssues: 70
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2019-11-23T13:21:43Z"
lastCommitAt: "2026-06-29T07:22:03Z"
lastReleaseAt: "2022-04-26T09:46:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 85
undervaluedScore: 56
maintainers: ["schmoelder", "dependabot[bot]", "hannahlanzrath"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5de3b4285904abade96ff7867ca471c00db0c77225283a70bbcf2ff0f9e16a4/fau-advanced-separations/CADET-Process"
---

# CADET-Process

The [**CADET**](https://cadet.github.io) core simulator is a very powerful numerical engine that can simulate a large variety of physico-chemical models used in chromatography and other biochemical processes.
However, the configuration files of **CADET** can be complex and difficult to work with.
This is especially relevant when multiple unit operations are involved which is often the case for complex integrated processes.
Moreover, the structure of the configuration file may change during process optimization, for example when the order of dynamic events changes, making the direct use of **CADET** impossible without another layer of abstraction.

In this context [**CADET-Process**](https://cadet-process.readthedocs.io/en/latest/) was developed.
The package facilitates modeling processes using an object oriented model builder.
This interface layer provides convenient access to all model parameters in the system.
It automatically checks validity of the parameter values and sets reasonable default values where possible.
This simplifies the setup of **CADET** simulations and reduces the risk of ill-defined configurations files.

Importantly, **CADET-Process** enables…
