---
repo: "ComputationalPsychiatry/pyhgf"
name: "pyhgf"
description: "PyHGF: A neural network library for predictive coding"
readmeQualityOk: true
url: "https://github.com/ComputationalPsychiatry/pyhgf"
homepage: "https://computationalpsychiatry.github.io/pyhgf/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [76, 24]
topics: ["bayesian-inference", "computational-psychiatry", "reinforcement-learning", "active-inference", "bayesian-filter", "predictive-coding", "hierarchical-gaussian-filter", "belief-propagation", "jax", "graph-neural-networks"]
stars: 166
forks: 34
openIssues: 18
closedIssues: 69
watchers: 5
contributors: 17
recentReleases: 0
createdAt: "2020-11-14T06:54:52Z"
lastCommitAt: "2026-11-04T11:27:38Z"
lastReleaseAt: "2023-09-22T08:44:18Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 92
undervaluedScore: 44
maintainers: ["LegrandNico", "AxelNoun", "SylvainEstebe"]
openGraphImageUrl: "https://opengraph.githubassets.com/badac89540b2ca8fa319812e7c2e9b96f4fd537cd33a0b03fc7680d7187d64fe/ComputationalPsychiatry/pyhgf"
discussionCount: 5
---

PyHGF is a Python library for creating and manipulating dynamic probabilistic networks for predictive coding. These networks approximate Bayesian inference by optimising beliefs through the diffusion of predictions and precision-weighted prediction errors. The graph structure remains flexible during message-passing steps, allowing for dynamic adjustments. They can be used as a biologically plausible cognitive model in computational neuroscience or as a generalisation of Bayesian filtering for designing efficient, modular decision-making agents. With the current version you can:

- Build arbitrarily sized networks with the **generalised Hierarchical Gaussian Filters** ([Weber et al., 2026](https://doi.org/10.7554/eLife.110174.1 ))
- Use **generalised Bayesian filtering** with distributions from the exponential family ([Mathys & Weber, 2020](https://doi.org/10.1007/978-3-030-64919-7_7))
- Define custom **planning** and **action selection** functions throught trajectories sampling (e.g. sophisticated inference, [Friston et al., 2020](https://doi.org/10.1162/neco_a_01351))
- Learn in **deep predictive coding networks** using a fast and scalable rethinking of prospective configuration…
