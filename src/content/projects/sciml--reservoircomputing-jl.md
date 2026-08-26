---
repo: "SciML/ReservoirComputing.jl"
name: "ReservoirComputing.jl"
description: "Reservoir computing utilities for scientific machine learning (SciML)"
readmeQualityOk: true
url: "https://github.com/SciML/ReservoirComputing.jl"
homepage: "https://docs.sciml.ai/ReservoirComputing/stable/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["reservoir-computing", "echo-state-networks", "rnn", "machine-learning", "differential-equations", "scientific-machine-learning", "sciml", "julia"]
stars: 232
forks: 51
openIssues: 40
closedIssues: 68
watchers: 9
contributors: 53
recentReleases: 0
createdAt: "2020-01-16T14:21:10Z"
lastCommitAt: "2026-08-26T04:17:26Z"
lastReleaseAt: "2021-06-21T23:16:01Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 40
maintainers: ["MartinuzziFrancesco", "Saswatsusmoy", "ChrisRackauckas-Claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/234336689/1d1a4108-7cdf-4c68-9df5-92adcf0ec4c0"
fundingLinks: ["GITHUB:https://github.com/SciML"]
---

</p>

</div>

# ReservoirComputing.jl

ReservoirComputing.jl provides an efficient, modular and easy to use
implementation of Reservoir Computing models such as Echo State Networks (ESNs).
For information on using this package please refer to the
[stable documentation](https://docs.sciml.ai/ReservoirComputing/stable/).
Use the
[in-development documentation](https://docs.sciml.ai/ReservoirComputing/dev/)
to take a look at not yet released features.

## Features

ReservoirComputing.jl provides layers, models, and functions to help build and train
reservoir computing models. More specifically the software offers:

- Base layers for reservoir computing model construction
  such as `ReservoirComputer` and `ReservoirChain`.
- Additional, lower level building blocks for custom reservoir computers,
  such as `Collect`, `ESNCell`, `DelayLayer`, `NonlinearFeaturesLayer`,
  `MemoryESNCell`, `LinearReadout`, `SVMReadout`, and more
- Fully built models:
    + [Echo state networks](https://doi.org/10.1126/science.1091277) `ESN`
    + [Deep echo state networks](https://doi.org/10.1016/j.neunet.2018.08.002) `DeepESN`
    + [Echo state networks with delays](https://doi.org/10.1063/5.0258250)…
