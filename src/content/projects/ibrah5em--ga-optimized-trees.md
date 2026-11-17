---
repo: "ibrah5em/ga-optimized-trees"
name: "ga-optimized-trees"
description: "Evolve transparent decision trees with multi-objective genetic algorithms."
readmeQualityOk: true
url: "https://github.com/ibrah5em/ga-optimized-trees"
homepage: "https://ibrah5em.github.io/ga-optimized-trees/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["decision-trees", "genetic-algorithm", "ml", "multi-objective-optimization"]
stars: 9
forks: 3
openIssues: 15
closedIssues: 8
watchers: 1
contributors: 5
recentReleases: 3
createdAt: "2025-11-22T20:15:39Z"
lastCommitAt: "2026-11-17T12:20:33Z"
lastReleaseAt: "2026-11-13T01:33:40Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 82
undervaluedScore: 72
maintainers: ["ibrah5em"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1102097813/1d25272e-9bff-402f-8d4b-d5368bbe5a3b"
---

# 🌳 GA-Optimized Decision Trees

A Python framework for evolving decision trees with a genetic algorithm.

CART grows a tree one greedy split at a time and prunes it afterwards. This framework
searches over whole trees instead, so the objective can be anything you can compute from a
tree: accuracy, node count, features used, path length, or your own metric. Run it with one
weighted objective, or with NSGA-II to get the whole accuracy–size trade-off from a single
run and pick the tree you want.

## What's in the box

- **Two search modes.** A weighted single-objective GA, and NSGA-II multi-objective search
  that returns a Pareto front.
- **Fitness on held-out data.** Pass a validation split and the search scores trees on data
  it didn't fit the leaves on, so it doesn't reward memorisation.
- **Splits that come from the data.** Given the training data, thresholds are drawn from
  values that actually reach a node, so a mutation always changes how the data is split.
- **Four mutation operators and subtree crossover:** nudge a threshold, swap a split's
  feature, prune a subtree to a leaf, grow a leaf into a split.
- **Constraint repair** (optional) that keeps `min_samples_split` /…
