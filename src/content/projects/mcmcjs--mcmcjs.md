---
repo: "mcmcjs/mcmcjs"
name: "mcmcjs"
description: "Command-line tools for Bayesian modelling, MCMC inference, and post-inference diagnostics across probabilistic programming languages."
readmeQualityOk: true
url: "https://github.com/mcmcjs/mcmcjs"
homepage: "https://mcmcjs.github.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["artificial-intelligence", "bayesian-inference", "bayesian-statistics", "julia", "julia-language", "machine-learning", "mcmc", "probabilistic-graphical-models", "probabilistic-inference", "probabilistic-models"]
stars: 8
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-06-04T12:46:32Z"
lastCommitAt: "2026-09-04T08:11:53Z"
lastReleaseAt: "2026-06-10T09:01:38Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 47
maintainers: ["shravanngoswamii", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2741c2b5fc59f8ac34766c3fe5be1e4c28d5bb75b1d1af4f8f8c8078803045ad/mcmcjs/mcmcjs"
---

# MCMC.js

Command-line tools for Bayesian modelling, MCMC inference, and post-inference diagnostics across probabilistic programming languages.

MCMC.js runs your model, checks whether the sampler converged, and shows you the result.
It works with Turing.jl, JuliaBUGS, and Stan, and it can install the toolchain for you.

> Early alpha: under active development. APIs and the CLI surface are not yet stable.

## Install

```bash
curl -fsSL https://mcmcjs.github.io/install.sh | sh   # single binary, no Node.js needed
npm i -g mcmcjs                                       # or from npm
```

Either way you get the `mcmc` command.
The libraries are published under the `@mcmcjs/*` scope on npm.

## Quickstart

```bash
mcmc setup                            # install the Julia toolchain
mcmc init demo                        # seed a directory with an example model
mcmc run demo/model.jl                # fit + diagnose, with live progress
mcmc plot --kind trace                # plot the latest run in the terminal
```

`mcmc run` records every run in a project-local `.mcmc/` store, so you can list, compare, and re-open runs later.
Every command supports `--json` and uses exit codes `0` (ok),…
