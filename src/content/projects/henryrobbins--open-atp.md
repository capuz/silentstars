---
repo: "henryrobbins/open-atp"
name: "open-atp"
description: "OpenATP is an open-source Python package providing a common interface for Automated Theorem Proving (ATP)"
readmeQualityOk: true
url: "https://github.com/henryrobbins/open-atp"
homepage: "https://open-atp.henryrobbins.com"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["automated-theorem-proving", "lean4", "mathlib", "formal-verification", "llm-agents", "theorem-proving"]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-06-22T19:16:10Z"
lastCommitAt: "2026-07-21T06:12:05Z"
lastReleaseAt: "2026-07-02T17:14:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 48
maintainers: ["henryrobbins", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7383dbc3eebfca34dbdf972bcbeeb28de61e21446464d6b82b2c9baac0ad549/henryrobbins/open-atp"
---

</p>

**OpenATP** is an open-source Python package providing a common interface for **Automated Theorem Proving (ATP)**. OpenATP focuses on recent **agentic ATP methods** that prove formal statements in [Lean](https://lean-lang.org/). Each method runs in an isolated sandbox, either locally with Docker or remotely with [Modal](https://modal.com/). OpenATP also provides benchmarking utilities to run methods on **common datasets**.

</div>

## Installation

```bash
pip install open-atp
```

`OpenATP` runs each prover (e.g., Claude Code, Codex, OpenCode) in a
Docker container. The image must be built before running any prover:

```bash
open-atp build-docker-image
```

Each prover has its own authentication requirements. See each [prover](https://open-atp.readthedocs.io/en/latest/provers/index.html) page for its authentication instructions.

## Quickstart

Complete the `sorry`s in a lake project (or a `.lean` file) from the CLI:

```bash
open-atp prove path/to/project runs/example claude
```

Or programmatically, here on a simple example theorem:

```python
from open_atp import standard_prover
from open_atp.backends import DockerBackend
from open_atp.examples import EXAMPLE,…
