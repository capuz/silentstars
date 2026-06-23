---
repo: "experimaestro/experimaestro-python"
name: "experimaestro-python"
description: "Experimaestro (python version)"
url: "https://github.com/experimaestro/experimaestro-python"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["experiment-manager", "experiments", "scheduler", "python", "python3"]
stars: 8
forks: 6
openIssues: 0
closedIssues: 89
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2019-02-20T11:00:36Z"
lastCommitAt: "2026-06-23T06:41:51Z"
lastReleaseAt: "2023-12-12T10:43:26Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 86
maintainers: ["bpiwowar", "VictorMorand", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cce214988af6b9e785a6202a122b9ac5ad9512d738b643d100130ae45eac7af0/experimaestro/experimaestro-python"
discussionCount: 2
---

**Experimaestro** is a Python framework designed for researchers and engineers who need to manage complex, large-scale experimental workflows without losing track of reproducibility.

Unlike traditional schedulers, Experimaestro focuses on the **experimental logic**: how configurations relate to each other and how results are organized.

### Why Experimaestro?

- **🧩 Configuration-as-Code:** Define your experiments using strongly-typed Python objects. Forget about fragile JSON/YAML files; benefit from IDE autocompletion, type checking, and recursive parameter management.
- **🛡️ Deduplication & Reproducibility:** Every task is assigned a unique identifier based on its parameters. If you try to run the same experiment twice, Experimaestro knows—ensuring you never waste compute time on results you already have.
- **📁 Organized by Design:** Results are automatically cached in a predictable directory structure derived from task identifiers. No more "results_v2_final_fixed.pt"—your file system stays as clean as your code.
- **🏗️ Built-in Scalability:** Seamlessly transition from local testing to high-performance clusters. Use **Connectors** (Local, SSH) and **Launchers** (Direct,…
