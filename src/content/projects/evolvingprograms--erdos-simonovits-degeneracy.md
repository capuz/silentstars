---
repo: "EvolvingPrograms/erdos-simonovits-degeneracy"
name: "erdos-simonovits-degeneracy"
description: "Connected bipartite graphs of degeneracy exactly r with ex(n,H) ≥ c·n^(2−1/r+1/(28r²)), refuting the Erdős–Simonovits degeneracy conjecture (Erdős problem #146) for every r ≥ 2, with the exact limits of the method. Machine-checked in Lean 4."
readmeQualityOk: true
url: "https://github.com/EvolvingPrograms/erdos-simonovits-degeneracy"
language: "Lean"
languages: ["Lean"]
languagePcts: [99]
topics: ["combinatorics", "erdos-problems", "extremal-graph-theory", "formalization", "lean4", "mathlib"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-01T23:37:24Z"
lastCommitAt: "2026-08-14T05:15:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 40
maintainers: ["ctjlewis"]
openGraphImageUrl: "https://opengraph.githubassets.com/56cb4f66edd45ea1f1cef03d1ddcfb8e0b3f424b0fdff9a6aedc0bc012de07ac/EvolvingPrograms/erdos-simonovits-degeneracy"
---

# The Erdős–Simonovits degeneracy conjecture is false for all r ≥ 2

Fable 5, Opus 5 · Christian Lewis<sup>\*</sup> · August 1, 2026

<sub><sup>\*</sup>Evolving Programs, in partnership with High Signal.&nbsp;&nbsp;Last revised August 6, 2026.</sub>

## Introduction

The **extremal number** $\mathrm{ex}(n,H)$ is the largest number of edges in an
$n$-vertex graph that contains no copy of $H$.

<br>
<sub><em>At n&nbsp;=&nbsp;8 with H the 4-cycle: 11 edges, no copy of H.</em></sub>
</p>

**Degeneracy** is one measure of how dense a graph is. A graph is $r$-degenerate
if its vertices can be deleted one at a time, in some order, so that each
deletion removes at most $r$ edges.

<br>
<sub><em>No vertex leaves with more than two neighbors, thus r&nbsp;=&nbsp;2.</em></sub>
</p>

A graph is **bipartite** if its vertices can be divided into two parts $U$ and
$V$, and every edge connects a vertex of $U$ to a vertex of $V$. A triangle is
not bipartite because an edge will inevitably form a $\{U, U\}$ or $\{V, V\}$
pair. Graphs are bipartite if they do not contain an odd cycle.

<br>
<sub><em>The vertices of a bipartite graph with 12 edges are sorted into two sides $U$ and $V$.</em></sub>
</p>…
