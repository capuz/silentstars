---
repo: "spoorendonk/mcfcg"
name: "mcfcg"
description: "Column generation for minimum-cost multicommodity flow with path- and tree-based Dantzig-Wolfe decompositions"
readmeQualityOk: true
url: "https://github.com/spoorendonk/mcfcg"
homepage: "https://arxiv.org/abs/2509.24656"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [60, 33]
topics: ["column-generation", "linear-programming", "multicommodity-flow", "operations-research", "optimization", "branch-and-price", "network-flow", "dantzig-wolfe", "lagrangian-relaxation", "pricing-problem"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 46
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-03T15:25:58Z"
lastCommitAt: "2026-09-26T06:12:08Z"
lastReleaseAt: "2026-08-22T14:49:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 69
maintainers: ["spoorendonk"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc4e4542f4b5a55e2811eb1cc0c1b43bc812f6782c28fbd6ff7a37e916d607eb/spoorendonk/mcfcg"
---

# mcfcg

Column generation solver for the minimum-cost multicommodity flow (MCF)
problem with path-based and tree-based Dantzig-Wolfe decompositions.

The implementation accompanying: S. Spoorendonk and B. Petersen,
[Tree-based formulation for the multi-commodity flow problem](https://arxiv.org/abs/2509.24656),
arXiv:2509.24656, 2026 (v3, 25 Aug 2026).

## Problem and formulations

Given a directed graph $G=(V,A)$ with arc costs $c_a$ and capacities
$u_a$, and a set of commodities $K$ where commodity $k$ routes
$d_k$ units from source $o_k$ to sink $t_k$, find the min-cost feasible
multicommodity flow.

### Arc-flow (compact) formulation

$$
\begin{aligned}
\min\;& \sum_{k\in K}\sum_{a\in A} c_a\, x^k_a \\
\text{s.t.}\;& \sum_{a\in\delta^+(v)} x^k_a - \sum_{a\in\delta^-(v)} x^k_a
  = \begin{cases} d_k & v = o_k\\ -d_k & v = t_k\\ 0 & \text{otherwise}\end{cases}
  \quad\forall k\in K,\ v\in V\\
& \sum_{k\in K} x^k_a \le u_a \quad\forall a\in A\\
& x^k_a \ge 0
\end{aligned}
$$

### Path formulation (Dantzig-Wolfe)

Let $P_k$ be the set of $o_k \!\to\! t_k$ simple paths, with $\lambda^k_p \ge 0$
the flow on path $p \in P_k$ and $c_p = \sum_{a\in p} c_a$.  (This is the
flow convention…
