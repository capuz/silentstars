---
repo: "k3nfalt/longtails"
name: "longtails"
description: "A Lean 4 framework for automated research in mathematical optimization, with formally verified convergence guarantees and oracle complexity bounds."
readmeQualityOk: true
url: "https://github.com/k3nfalt/longtails"
language: "Lean"
languages: ["Lean"]
languagePcts: [91]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-10-14T11:52:22Z"
lastCommitAt: "2026-10-21T20:00:33Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 40
maintainers: ["k3nfalt"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e0d98a0a83b6124832983a84674d53651aa6777e57cb3d1d89fbeccd14b565a/k3nfalt/longtails"
---

More than 25 new results so far—and more to come.</h3>

## Preliminaries: Setup and Complexity

LongTails is a framework for **automatic research in numerical mathematics and optimization**.
Before presenting it, let's explain a typical protocol in mathematical optimization using the following example.

**Setup.** We want to minimize
```math
\min_{x\in ℝ^d} f(x).
```
The function $f$ is differentiable, convex, and $L$-smooth, and we can
query an exact gradient oracle. Starting from $x_0$, we want an output
$x_{\mathrm{out}}$ satisfying $f(x_{\mathrm{out}})-f(x^\star)\le\varepsilon$.

**Complexity.** A classical accelerated gradient method achieves this accuracy using
```math
\textbf{Complexity} = O\left(\sqrt{\frac{LR^2}{\varepsilon}}\right)
```
gradient queries. Here $L>0$, $\varepsilon>0$, and $R\ge0$ bounds the initial distance to a minimizer:
$\lVert x_0-x^\star\rVert\le R$.

Similarly, one can consider other **Setups** with different assumptions, oracles, and accuracy criteria, such as nonconvex optimization, stochastic gradients, monotone operators, and linear minimization oracles (LMOs).

**Ultimate goal:** Given a **Setup**, we want to design a method and prove that it…
