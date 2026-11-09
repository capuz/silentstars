---
repo: "BurnoutDecomp/BP-Decomp_Workflow"
name: "BP-Decomp_Workflow"
description: "The orchestration repository for the Burnout 5 / Burnout Paradise decompilation. Includes tools, IDA databases, and reference files to assist agentic reconstruction of the game's C++ source code."
readmeQualityOk: true
url: "https://github.com/BurnoutDecomp/BP-Decomp_Workflow"
language: "C++"
languages: ["C++"]
languagePcts: [86]
topics: ["agentic-workflow", "decompilation", "reverse-engineering"]
stars: 24
forks: 1
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2026-06-11T16:34:38Z"
lastCommitAt: "2026-11-09T03:30:26Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 42
maintainers: ["Adriwin06", "macadelic80"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdc18c6e2cb161f8e1af65da21aa91709866f71d30d8c9f21d82b938c0e7c74f/BurnoutDecomp/BP-Decomp_Workflow"
---

# Burnout Paradise Decompilation Workflow

This repository is the orchestration workspace for reverse-engineering Burnout 5 /
Burnout Paradise. It is not the decompilation source tree itself. It holds the
analysis databases, reference material, work ledger, and automation that let agents
reconstruct the Xbox 360 build as compilable PC C++.

Recovered C++ lives in the [`b5-decomp`](https://github.com/BurnoutDecomp/b5-decomp) submodule. This repo answers:

- which functions exist in the X360 target build;
- which translation unit owns each function;
- what reference evidence is available for each unit;
- which units are todo, in progress, compiled, reviewed, blocked, or done;
- how to claim, reconstruct, verify, review, and coordinate work.

## Bugs and public roadmap

Report game bugs and crashes in [b5-decomp issues](https://github.com/BurnoutDecomp/b5-decomp/issues/new/choose).
Start with its [reporting guide](https://github.com/BurnoutDecomp/b5-decomp/blob/dev/CONTRIBUTING.md)
for build details, reproduction steps and screenshots. Its
[milestones](https://github.com/BurnoutDecomp/b5-decomp/milestones) track public outcomes;
the ledger here continues to track individual TUs and…
