---
repo: "AaronDJohnson/coppuccino"
name: "coppuccino"
description: "Copula flows to fit and sample from distributions"
readmeQualityOk: true
url: "https://github.com/AaronDJohnson/coppuccino"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-10-02T22:59:12Z"
lastCommitAt: "2026-10-31T18:41:49Z"
lastReleaseAt: "2026-06-16T23:51:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 54
maintainers: ["AaronDJohnson"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ee6123e80ba75f76f4b9d644288cc51e6f04a63c9c8f6d1d36099f3514d6466/AaronDJohnson/coppuccino"
---

---

**coppuccino** fits and samples from complex multivariate probability
distributions by combining two classical ideas: *copulas*, which separate a
joint distribution into its one-dimensional marginals and a dependency
structure, and *normalizing flows*, which learn that dependency structure
flexibly. It is designed for — though not limited to — density estimation on
**MCMC posterior samples**, where it enables fast resampling, density
evaluation, importance weighting, and calibration diagnostics.

## The idea

Any continuous joint distribution can be decomposed into its marginals and a
*copula* that couples them. This is **Sklar's theorem**: for a joint density
$p(\mathbf{x})$ on $\mathbb{R}^d$ with marginal CDFs $F_i$ and marginal
densities $p_i$,

$$
p(\mathbf{x}) = \underbrace{c\big(F_1(x_1), \dots, F_d(x_d)\big)}_{\text{copula density}} \prod_{i=1}^{d} \underbrace{p_i(x_i)}_{\text{marginals}}.
$$

The copula density $c$ captures *all* of the dependence between dimensions; the
$p_i$ capture the shape of each dimension on its own. Estimating these two
pieces separately is often much easier than estimating $p(\mathbf{x})$
directly — especially when the marginals are sharp,…
