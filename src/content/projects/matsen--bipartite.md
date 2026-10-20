---
repo: "matsen/bipartite"
name: "bipartite"
description: "Connecting research programs and the outside world"
readmeQualityOk: true
url: "https://github.com/matsen/bipartite"
homepage: "https://matsen.github.io/bipartite/"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 32
forks: 4
openIssues: 29
closedIssues: 109
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-12T16:03:07Z"
lastCommitAt: "2026-10-20T08:49:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 51
maintainers: ["matsen"]
openGraphImageUrl: "https://opengraph.githubassets.com/44746765dec36f7607ed0c6c1694c37f3ec91fcbbad0617ddef1c44170ce3b39/matsen/bipartite"
---

# bipartite

**Agentic hacking like a PI.**

> For motivation and a walkthrough of the workflow, see the blog post: [Bipartite: manuscript-driven development with a team of agents](https://matsen.group/general/2026/06/06/bipartite.html).

Computational PIs have always worked at a high level: directing teams of researchers, framing problems, choosing which experiments are worth running, and weaving the results into papers. Bipartite is a platform for bringing that workflow into the agentic age — a `bip` CLI and a library of Claude Code skills that coordinate teams of agents across GitHub issues, code repositories, manuscripts, and the literature.

The workflow runs as two coupled loops, **ideas** and **experiments**, with GitHub as the shared transport layer. On the ideas side, manuscript sessions surface new results, situate them in the literature, and turn them into well-scoped issues. On the experiments side, those issues are picked up by autonomous workers in dedicated clones, implemented, reviewed, and landed — surfacing fresh results back for discussion. Two human touchpoints anchor the otherwise-autonomous flow: high-level discussion of new findings on the ideas side, and…
