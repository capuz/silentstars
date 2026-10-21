---
repo: "morzhovets/momo"
name: "momo"
description: "C++ template containers with optimized memory consumption"
readmeQualityOk: true
url: "https://github.com/morzhovets/momo"
homepage: "https://morzhovets.github.io/momo"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["optimization", "data-structures", "hash-table", "b-tree", "memory-pool", "hash-container", "unordered-map", "hash-map"]
stars: 13
forks: 2
openIssues: 4
closedIssues: 6
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2015-07-19T15:14:21Z"
lastCommitAt: "2026-10-21T17:28:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 63
maintainers: ["morzhovets"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c1b27e4ca9d2dfa85b5e023a312dfa5f316756c04f39a722e6c9b98bc5a5182/morzhovets/momo"
---

#### momo (Memory Optimization is the Main Objective)

This project contains an implementation of the C++ containers, similar to the
[standard](https://en.cppreference.com/w/cpp/container) `set/map` and `unordered_set/map`,
but much more efficient in memory usage.
As for the operation speed, these containers are also better than the standard ones in most cases
([benchmark of unordered containers](https://morzhovets.github.io/hash_gcc_ubuntu16),
[benchmark of ordered containers](https://morzhovets.github.io/tree_gcc_ubuntu16),
[benchmark sources](https://github.com/morzhovets/hash-table-shootout)).

Classes are designed in close conformity with the standard C++20 including exception safety guarantees.
**The compiler only needs to support C++11**.

#### Deviations from the standard

- Container items must be movable (preferably without exceptions) or copyable, similar to items of `std::vector`.

- All iterators and references to items will become invalid after each addition or removal of the item and should not be used.

- In `map` and `unordered_map` type `reference` is a pair of references (same as in `std::flat_map`),
so `for (auto& p : map)` is illegal, but `for (auto p : map)`…
