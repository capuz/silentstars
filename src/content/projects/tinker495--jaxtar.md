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
stars: 51
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-09-02T01:57:02Z"
lastCommitAt: "2026-07-17T05:12:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["tinker495"]
openGraphImageUrl: "https://opengraph.githubassets.com/31f9a1653e9fdb1a5cf8cdada771374a2afc527772b55511a1286cff708ab971/tinker495/JAxtar"
---

</div>

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

MCTS, or tree search, is used in many RL algorithmic techniques, starting with AlphaGo, but graph search (not tree search) doesn't seem to have received much attention. Nevertheless, there are puzzle‐solving algorithms that use neural heuristics…
