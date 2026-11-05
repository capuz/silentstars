---
repo: "pom11/hscc"
name: "hscc"
description: "Turn a DGX Spark GPU cluster into a self-running team of specialized AI agents — cluster control, role-specialized workers, and an autonomous review gate for Hermes"
readmeQualityOk: true
url: "https://github.com/pom11/hscc"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["agent-orchestration", "ai-agents", "autonomous-agents", "dgx-spark", "gb10", "gpu-cluster", "grace-blackwell", "hermes", "kanban", "llm"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-27T22:36:14Z"
lastCommitAt: "2026-11-05T11:24:59Z"
lastReleaseAt: "2026-06-30T20:18:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["pom11", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/109e7196d6dd521ac67a42894ce719a7643a23bb67bb4434f0590ea66770fef8/pom11/hscc"
---

# HSCC — Hermes Spark Cluster Control

**Turn a DGX Spark GPU cluster into a self-running team of specialized AI agents.**

Say *"build X"* in chat and a fleet of role-specialized agents brainstorms, decomposes, codes, reviews, and lands it — across multiple GPU nodes, hands-off.

HSCC runs on a cluster of DGX Spark (GB10 / Grace-Blackwell) nodes serving LLMs via vLLM, orchestrated by [Hermes](https://github.com/NousResearch/hermes-agent) agents. It is a pure-Python plugin set with three pinned dependencies (PyYAML, rich, psutil — see `requirements.txt`). Install it with Homebrew (or clone the repo, if you are editing it); `hscc bootstrap` then copies the plugins into the Hermes runtime (`~/.hermes/plugins/`), with runtime state in `~/.hscc/`.

The design is **native-Hermes-first**: agent work runs on Hermes' built-in kanban dispatcher and git worktrees. HSCC does not build a dispatcher — it *hooks into* the one Hermes already ships, adding the thin physical layer (cluster control, monitoring, model lifecycle), a role framework for specialized workers, and a review gate on the dispatch path. Why this shape (what stock Hermes lacks and HSCC adds):…
