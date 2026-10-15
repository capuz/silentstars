---
repo: "xvzemin/tace"
name: "tace"
description: "Tensor Atomic/Edge Cluster Expansion"
readmeQualityOk: true
url: "https://github.com/xvzemin/tace"
homepage: "https://arxiv.org/abs/2607.10664"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 72
forks: 6
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2025-09-19T06:48:57Z"
lastCommitAt: "2026-10-15T08:32:54Z"
lastReleaseAt: "2026-10-06T14:58:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 58
maintainers: ["xvzemin"]
openGraphImageUrl: "https://opengraph.githubassets.com/63d89bbd4c7b49f5f10ac387597f6fbd5ecd2e131380df44d6281b27f4021a47/xvzemin/tace"
---

# Tensor Atomic/Edge Cluster Expansion (TACE/TECE)

TACE is designed with physical priors and strong inductive biases to enhance extrapolation capability. 
It performs Atomic Cluster Expansion and Edge Cluster Expansion based on spherical tensors 
or irreducible Cartesian tensors, with an optional attention architecture.

## O(3) Cartesian Architecture

```math
(A\otimes_k^\delta B)_{\boldsymbol i\boldsymbol j}
=\frac{1}{\sqrt{3^k}}\sum_{\boldsymbol a}
A_{\boldsymbol i\boldsymbol a}B_{\boldsymbol a\boldsymbol j},
\qquad l_3=l_1+l_2-2k,
````

```math
(A\otimes_k^\epsilon B)_{\boldsymbol i w\boldsymbol j}
=\frac{1}{\sqrt{2}}\frac{1}{\sqrt{3^k}}\sum_{\boldsymbol a,u,v}
A_{\boldsymbol i u\boldsymbol a}\epsilon_{wuv}
B_{\boldsymbol a v\boldsymbol j},
\qquad l_3=l_1+l_2-2k-1.
````

## Time-reversal O(3) Spherical/O(2)/Magnetic Architecture

The SO(2) implementation in TACE will be gradually replaced by an O(2) formulation 
to ensure complete parity support for O(3). Backward compatibility will be maintained for the SO(2) implementation, 
while backward compatibility for the O(2) implementation is not currently guaranteed.

```math
\left.(l,p,t)_{O(3)\times\mathbb Z_2^{\mathcal T}}…
