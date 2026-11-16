---
repo: "pyrddlgym-project/rddlrepository"
name: "rddlrepository"
description: "Hosts domain and instance RDDL files, covering problems from a wide range of disciplines, integration with the pyRDDLGym ecosystem."
readmeQualityOk: true
url: "https://github.com/pyrddlgym-project/rddlrepository"
homepage: "https://pyrddlgym.readthedocs.io/en/latest/rddlrepo.html"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["benchmarks", "mdp", "rddl-domains", "planning", "rddl", "gym", "gym-environments", "gymnasium", "benchmark-suite", "benchmarking-suite"]
stars: 14
forks: 5
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-02-10T21:22:08Z"
lastCommitAt: "2026-11-16T04:26:48Z"
lastReleaseAt: "2026-02-10T22:01:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 68
maintainers: ["mike-gimelfarb"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b28757c353035bb086de66ccfd0071a4ffaac0cb03a129b3ad057259ec85f8d/pyrddlgym-project/rddlrepository"
---

# rddlrepository

**A library of planning and reinforcement learning problems written in RDDL, ready to run in [pyRDDLGym](https://github.com/pyRDDLGym-project/pyRDDLGym).**

[Installation](#installation) | [Quick start](#quick-start) | [Finding problems](#finding-problems) | [Adding your own](#adding-your-own-problems) | [Domain gallery](#domain-gallery)

## Why rddlrepository?

- **Scalable.** Every domain is written in RDDL, so an instance can grow from a handful of objects to a million with just a few lines of RDDL code.
- **Diverse.** Domains come from many disciplines and showcase the latest official RDDL syntax, which makes them good starting points for learning the language.
- **Visual.** Many domains come with custom visualizers for pyRDDLGym.
- **Plug and play.** Everything works out of the box with the [pyRDDLGym ecosystem](https://github.com/pyRDDLGym-project/pyRDDLGym).

## Installation

Install the latest release with pip:

```shell
pip install rddlrepository
```

Or get the pre-release version from GitHub:

```shell
git clone https://github.com/pyRDDLGym-project/rddlrepository.git
```

The visualizers need [pyRDDLGym](https://github.com/pyRDDLGym-project/pyRDDLGym)…
