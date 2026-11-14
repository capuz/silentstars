---
repo: "sagemathinc/sagebrush"
name: "sagebrush"
description: "Fast, certified, parallel engines for research mathematics in Rust, usable from Python and JavaScript (early experiment)"
readmeQualityOk: true
url: "https://github.com/sagemathinc/sagebrush"
homepage: "https://sagebrush.space/"
language: "Python"
languages: ["Python", "TypeScript", "JavaScript"]
languagePcts: [37, 24, 23]
topics: ["jupyter", "jupyter-notebook", "katex", "magma", "math", "mathematical-programming", "python", "sagemath"]
stars: 8
forks: 1
openIssues: 22
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-02T04:07:06Z"
lastCommitAt: "2026-11-14T09:48:35Z"
lastReleaseAt: "2026-10-24T08:25:47Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 85
undervaluedScore: 54
maintainers: ["wstein-agents", "sagebrush"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ef59aca757b2fbf481f7b75d6f143c30e966b74d173bd1b5b9f15b55983fd82/sagemathinc/sagebrush"
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
