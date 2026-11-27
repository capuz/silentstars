---
repo: "tinker495/JAxtar"
name: "JAxtar"
description: "JAxtar is a project with a JAX-native implementation of parallelizeable A* & Q* solver for neural heuristic search research."
readmeQualityOk: true
url: "https://github.com/tinker495/JAxtar"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["deep-learning", "graph-algorithms", "jax", "open-source", "puzzle", "reinforcement-learning", "search-algorithm", "gpu-acceleration", "gpu-computing"]
stars: 52
forks: 3
openIssues: 2
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2022-09-02T01:57:02Z"
lastCommitAt: "2026-11-27T16:25:25Z"
lastReleaseAt: "2026-11-25T23:13:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 54
maintainers: ["tinker495", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/84949365bf6619ce97326054947f099340a8d580e8c4d9404f76a7c05625695c/tinker495/JAxtar"
---

# JA<sup>xtar</sup>: GPU-accelerated Batched parallel A\* & Q\* solver in pure JAX!

JA<sup>xtar</sup> is a project with a JAX-native implementation of parallelizable a A\* & Q\* solver for neural heuristic search research.
This project is inspired by [mctx](https://github.com/google-deepmind/mctx) from Google DeepMind. If MCTS can be implemented entirely in pure JAX, why not A\*?

This project provides the following algorithms:
- **A\***: Standard A* Search
- **A\* Deferred**: A* Search with deferred node expansion (for heavy expansion costs)
- **Bi-A\***: Bidirectional A* Search
- **Bi-A\* Deferred**: Bidirectional A* Search with deferred node expansion
- **ID-A\***: Iterative Deepening A* Search
- **Beam Search**: Standard Beam Search
- **Q\***: Q* Search (A* with learned Q-values)
- **Bi-Q\***: Bidirectional Q* Search
- **ID-Q\***: Iterative Deepening Q* Search (Experimental)
- **Q-Beam**: Beam Search with learned Q-values
