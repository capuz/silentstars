---
repo: "sagemathinc/sagebrush"
name: "sagebrush"
description: "Fast, certified, parallel engines for research mathematics in Rust, usable from Python and JavaScript (early experiment)"
readmeQualityOk: true
url: "https://github.com/sagemathinc/sagebrush"
homepage: "https://sagebrush.space/"
language: "Python"
languages: ["Python", "JavaScript", "TypeScript"]
languagePcts: [34, 26, 23]
topics: ["jupyter", "jupyter-notebook", "katex", "magma", "math", "mathematical-programming", "python", "sagemath"]
stars: 8
forks: 0
openIssues: 19
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-02T04:07:06Z"
lastCommitAt: "2026-11-09T04:35:19Z"
lastReleaseAt: "2026-10-24T08:25:47Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 85
undervaluedScore: 53
maintainers: ["williamstein", "sagebrush"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5f5b61b22e9f933677f50b8e398a08d19aab532c22f5b1da6bd69fae296843f/sagemathinc/sagebrush"
---

# Sagebrush

*What Sagebrush is, in one page: [PRODUCT.md](https://github.com/sagemathinc/sagebrush/blob/HEAD/PRODUCT.md) (Sagebrush Space, the Sagebrush app and the Sagebrush engine).*

Fast, certified, parallel engines for research mathematics, written in Rust
and usable from Python and JavaScript.

Sagebrush is an early experiment from the founder of SageMath. The idea:
mathematicians, and the AI agents working with them, should be able to ask
large questions (thousands of levels, millions of objects) and get results
in seconds. Every result should come with a status saying whether it is
*proven* or only heuristic. The design is many small, strong engines that
share one core, not one huge system.

Status: early, unpublished. Engines for modular symbols and newforms, a_p
of elliptic curves, polynomials over Z, and class groups and units of number
fields; a Python front end in the browser with Sage and Magma modes.

## Principles

These define what Sagebrush is.

1. **Rust at the core.** The mathematics is written in Rust: fast,
   memory-safe, and one code base from a browser tab to a 64-core server.
   Python, JavaScript, Sage and Magma are thin interfaces over it.
2.…
