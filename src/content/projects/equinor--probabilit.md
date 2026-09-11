---
repo: "equinor/probabilit"
name: "probabilit"
description: "A Python package for Monte Carlo sampling."
readmeQualityOk: true
url: "https://github.com/equinor/probabilit"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 51
forks: 5
openIssues: 6
closedIssues: 5
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-06-26T09:41:36Z"
lastCommitAt: "2026-09-11T08:15:39Z"
status: "thriving"
tags: []
healthScore: 73
undervaluedScore: 36
maintainers: ["larsevj", "dependabot[bot]", "tommyod"]
openGraphImageUrl: "https://opengraph.githubassets.com/c23dc863f72cd6eb00400a7402186b7229a7a1fef845ab2081e8fae58de6e1e1/equinor/probabilit"
---

# probabilit

A small Python package for Monte Carlo modeling.

- User friendly API with a modeling language.
- Built on scipy and numpy.
- Supports composite distributions (e.g. the mean of a distribution can be a distribution).
- Supports Quasi-Monte Carlo sampling, e.g. Sobol, Halton and LHS.
- Supports inducing correlations with Iman-Conover.

You can install it from [PyPI](https://pypi.org/project/probabilit/).

## Modeling

The modeling API lets you create a computational graph, where each node is either a distribution, a constant or a transformation.
Once the method `.sample()` is called on a node, each ancestor node is sampled in turn.

**Example 1 - Height.**
What is the probability that a man is taller than a woman?

```pycon
>>> from probabilit.modeling import Distribution
>>> male_height = Distribution("norm", loc=176, scale=7.1)
>>> female_height = Distribution("norm", loc=162.5, scale=7.1)
>>> statistic = male_height > female_height
>>> samples = statistic.sample(999, random_state=0)
>>> float(samples.mean())
0.9039...

```

When `statistic` is sampled in the code above, the ancestor nodes `male_height` and `female_height` are sampled too.
In each node, results are…
