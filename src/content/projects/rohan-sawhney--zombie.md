---
repo: "rohan-sawhney/zombie"
name: "zombie"
description: "Grid-Free Monte Carlo Solvers for Physics Simulations Involving Partial Differential Equations"
readmeQualityOk: true
url: "https://github.com/rohan-sawhney/zombie"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 298
forks: 20
openIssues: 3
closedIssues: 7
watchers: 8
contributors: 4
recentReleases: 0
createdAt: "2023-07-31T03:28:00Z"
lastCommitAt: "2026-07-10T07:01:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 32
maintainers: ["rohan-sawhney"]
openGraphImageUrl: "https://opengraph.githubassets.com/68dc4fe70d9cdc4f18ba3e1a9293642292af511aaffd498e95cf052c6847f8e8/rohan-sawhney/zombie"
---

</p>
<h1 align="center"><em></em></h1>

Zombie is a C++17 header-only library with Python bindings for solving partial
differential equations with [Walk on Spheres](https://en.wikipedia.org/wiki/Walk-on-spheres_method)-style
Monte Carlo methods. It is designed for problems where creating a volume mesh is
awkward, expensive, or unnecessary: the solver queries the original boundary
representation directly and estimates the solution only where values are needed.

For GPU implementations of these algorithms, see [WoSX](https://github.com/nv-tlabs/wosx),
which builds on Zombie with GPU support and additional 3D demo applications.

Zombie is research software. The algorithms are still an active area of research,
and the implementations are meant to be clear reference implementations rather
than final word on performance or variance reduction. For a broader introduction
to Walk on Spheres and its recent extensions, see this
[overview talk](https://www.youtube.com/watch?v=cmgNqCwaPYc) and this
[webpage](https://rohan-sawhney.github.io/mcgp-resources/) for in-depth resources
such as recent publications and tutorials.

## Getting Started

The best way to get started is through the demo…
