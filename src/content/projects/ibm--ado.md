---
repo: "IBM/ado"
name: "ado"
description: "A framework for designing, executing  and analysing experiment campaigns "
readmeQualityOk: true
url: "https://github.com/IBM/ado"
homepage: "https://ibm.github.io/ado/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["discovery", "exploration", "optimization", "orchestration", "ray", "performance-optimization", "foundation-models", "experimentation", "agents"]
stars: 66
forks: 11
openIssues: 96
closedIssues: 436
watchers: 4
contributors: 20
recentReleases: 0
createdAt: "2025-08-25T13:34:19Z"
lastCommitAt: "2026-10-22T08:24:29Z"
lastReleaseAt: "2025-12-10T16:55:06Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 52
maintainers: ["AlessandroPomponio", "michael-johnston", "DRL-NextGen"]
openGraphImageUrl: "https://opengraph.githubassets.com/6362e302c471e2929fbf511db97cc07f9a58807b036a22db38837eb46cbe9b3a/IBM/ado"
discussionCount: 5
---

# ado — accelerated discovery orchestrator

**`ado`** provides tools for **executing computational experiment
campaigns**. Coding Agents can use `ado` to **autonomously formulate, run, and
analyze your experiments**.

## Why ado?

- **Declarative Experiment Campaigns:** Provides flexible,
  cross-domain schemas for defining experiment campaigns. A valid campaign
  definition has strong execution guarantees.
- **Simplifies Execution** : Handles the complex setup and
  distributed plumbing of scale-out campaign execution.
- **Persistent Storage:** Automatically captures campaign definitions and
  measurements in local or shared SQL databases.
- **Adapt to Any Domain:** Its flexible plugin model allows extending these core
  capabilities to your specific research field.
- **Empowers Agent-Driven Research**: The verifiable schemas, executable APIs,
  and persistent storage enable coding agents to treat experimentation as a coding
  problem.

## At its _core_

**ado** is built on three concepts:

| Concept             | Role                                                                                                                                         |
| ------------------- |…
