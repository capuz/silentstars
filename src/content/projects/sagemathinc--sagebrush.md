---
repo: "sagemathinc/sagebrush"
name: "sagebrush"
description: "Fast, certified, parallel engines for research mathematics in Rust, usable from Python and JavaScript (early experiment)"
readmeQualityOk: true
url: "https://github.com/sagemathinc/sagebrush"
homepage: "https://sagebrush.space/"
language: "Python"
languages: ["Python", "JavaScript", "TypeScript"]
languagePcts: [35, 26, 25]
topics: ["jupyter", "jupyter-notebook", "katex", "magma", "math", "mathematical-programming", "python", "sagemath"]
stars: 6
forks: 0
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-02T04:07:06Z"
lastCommitAt: "2026-11-01T10:45:09Z"
lastReleaseAt: "2026-10-24T08:25:47Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 57
maintainers: ["williamstein"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1f9b55040a70217086c12d543ebbeba0c6df20252a151acb7d19390730c452b/sagemathinc/sagebrush"
---

# Sagebrush

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
2. **Permissive licenses.** Sagebrush is MIT OR Apache-2.0, so anyone,
   and any agent, can use it, embed it or ship it, with no conditions on
   the code it ends up in. Serious…
