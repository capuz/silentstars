---
repo: "Pat-Laub/DeepLearningForActuaries"
name: "DeepLearningForActuaries"
description: "The lecture slides from my recent \"Deep Learning for Actuaries\" courses (coded ACTL3143 & ACTL5111) at UNSW."
url: "https://github.com/Pat-Laub/DeepLearningForActuaries"
homepage: "https://laub.au/DeepLearningForActuaries/"
language: "SCSS"
languages: ["SCSS"]
languagePcts: [69]
stars: 10
forks: 7
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-28T01:12:21Z"
lastCommitAt: "2026-07-02T06:32:42Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 93
undervaluedScore: 83
maintainers: ["Pat-Laub"]
openGraphImageUrl: "https://opengraph.githubassets.com/80045991e20136d7023bbdb0f1deb3848960fb27ece1e343b62afb07862187a5/Pat-Laub/DeepLearningForActuaries"
---

# Deep Learning for Actuaries

This repository hosts the lecture materials for my "AI & Deep Learning for Actuaries" courses (coded ACTL3143 & ACTL5111) at UNSW.
Go to [the main website](https://pat-laub.github.io/DeepLearningForActuaries/) to view the generated website and slides.

To render these slides yourself, you'll need [Quarto](https://quarto.org) and Python (e.g. the [Anaconda](https://www.anaconda.com/download) installation, or similar).

Firstly, create a Python environment with all the packages from `requirements.in` installed.
From the repository root, create the environment and install the Python dependencies from `requirements.in`:

```shell
uv venv --python 3.13
source .venv/bin/activate
uv pip install -r requirements.in
```

If you prefer not to activate the environment in your shell, you can still run commands through it with `uv run ...`.

The [reveal-auto-agenda](https://github.com/andrie/reveal-auto-agenda#readme) extension (which automatically generates the `agenda` slides inside the reveal.js slides from the header structure) is bundled in `_extensions/`, so there's no install step. To refresh it to the latest upstream version, run `quarto update…
