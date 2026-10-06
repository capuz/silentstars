---
repo: "airas-org/airas"
name: "airas"
description: "AIRAS - an open-source project for research automation"
readmeQualityOk: true
url: "https://github.com/airas-org/airas"
homepage: "https://airas-org.github.io/airas/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [71, 29]
topics: ["ai-research", "research-automation"]
stars: 35
forks: 1
openIssues: 44
closedIssues: 314
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2025-05-01T15:23:41Z"
lastCommitAt: "2026-10-06T10:42:30Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 59
maintainers: ["genga6", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/48024958565fb486ce1ccc2538c606eb24afa1c34b86fb2a0b0a5998c6786663/airas-org/airas"
discussionCount: 1
---

# AIRAS - an open-source project for research automation

AIRAS is open-source software for automated research. It gives a coding agent (Claude Code, Cursor, or any MCP client) everything it needs to take a research topic through literature survey, hypothesis, experiments, and a finished paper, and it makes the paper's claims **verifiable**: the paper is preregistered in git before any experiment runs, every reported number is realized from run outputs, and CI re-checks all of it before the PDF of record is produced.

AIRAS ships as one PyPI package (`airas`) that provides:

- an **MCP server** with the research tools the flow needs (paper search, hypothesis and experimental design, experiment results, figure rendering, LaTeX, Overleaf, and the record/verification tools),
- a **Claude Code plugin** that bundles the server with the `auto-research` workflow skills,
- a small **CLI** (`airas verify-record`, `airas verify-paper`) that the experiment repository's CI uses as the verification gate.

Currently, it focuses on the automation of machine learning research.

## Quick Start

No clone, no Docker. Only [uv](https://docs.astral.sh/uv/) is required; `uvx` fetches the package on…
