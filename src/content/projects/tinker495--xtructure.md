---
repo: "tinker495/Xtructure"
name: "Xtructure"
description: "Xtructure is datastructure for using in JAX"
readmeQualityOk: true
url: "https://github.com/tinker495/Xtructure"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["datastructures", "jax", "gpu-acceleration", "gpu-computing"]
stars: 24
forks: 0
openIssues: 2
closedIssues: 8
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2025-05-07T01:19:48Z"
lastCommitAt: "2026-11-27T16:24:32Z"
lastReleaseAt: "2026-11-25T14:54:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 63
maintainers: ["tinker495", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c92bcf8649bc8638c2af8910a0f21c7e6c8a7b6726f11e9ef4b41bec6e9b37b5/tinker495/Xtructure"
---

# Xtructure

A Python package providing JAX-optimized data structures, including a batched priority queue and a bucketed double hash table.

## Features

- Stack (`Stack`): A LIFO (Last-In, First-Out) data structure.
- Queue (`Queue`): A FIFO (First-In, First-Out) data structure.
- Batched GPU Priority Queue (`BGPQ`): A batched priority queue optimized for GPU operations.
- Bucketed Double Hash Table (`HashTable`): A hash table optimized for GPU operations using double hashing and bucketed storage.
- Xtructure NumPy (`xtructure_numpy`): JAX-compatible operations for dataclass manipulation including concatenation, stacking, padding, conditional selection, deduplication, and element selection.
- Optimized for JAX.

## Structure Layout Flexibility

Xtructure stores every `Xtructurable` instance in **Structure of Arrays (SoA)**
form for JAX performance, yet exposes **Array of Structures (AoS)** semantics to
callers. See [Structure Layout Flexibility](https://tinker495.github.io/Xtructure/layout_flexibility.html) for the
full rationale, breakdown of supporting utilities, and a worked example.
