---
repo: "ZJU-PL/pyflow"
name: "pyflow"
description: "A static analysis framework for Python"
readmeQualityOk: true
url: "https://github.com/ZJU-PL/pyflow"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ifds", "pointer-analysis", "security", "static-analysis", "python-static-analysis", "dataflow-analysis"]
stars: 13
forks: 6
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-09-19T15:19:28Z"
lastCommitAt: "2026-10-26T03:02:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 62
maintainers: ["cutelimination", "rainoftime", "q0ppa"]
openGraphImageUrl: "https://opengraph.githubassets.com/2eab285a53160faf29750a7cb92bd22242ddd3c08a6ba9d2722d69212d3211c9/ZJU-PL/pyflow"
---

# PyFlow: Static Analysis for Python

PyFlow is a program analysis framework for Python. It combines
program analysis infrastructure, experimental optimization passes, and security
checking in a single research-oriented toolkit.

Current status: **alpha**. The project already contains substantial analysis
and testing infrastructure, but APIs, pass behavior, and CLI details are still
evolving.

If you use pyflow in your research or work, please cite the following:
~~~~
@misc{pyflow2026,
  title         = {PyFlow: An Inter-procedural Static Analysis Framework for Python},
  author        = {Gu, Zinan and Yan, Haoxiang and Yao, Peisen},
  year          = {2026},
  eprint        = {2608.07026},
  archivePrefix = {arXiv},
  doi           = {10.48550/arXiv.2608.07026},
  url           = {https://arxiv.org/abs/2608.07026}
}
~~~~

## What PyFlow includes

- **Intermediate representations**: seven-instruction MIR, CFG, CDG, DDG, PDG,
  CPG, lowered data flow IR, and a shared store graph model
- **Program analysis**: call graph, IFDS, alias, IPA, CPA, shape, lifetime,
  and type-analysis infrastructure
- **Optimization pipeline**: modular passes such as simplify, method-call
  optimization,…
