---
repo: "scaleapi/mcp-atlas"
name: "mcp-atlas"
description: "MCP Atlas"
readmeQualityOk: true
url: "https://github.com/scaleapi/mcp-atlas"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [75, 20]
stars: 163
forks: 40
openIssues: 14
closedIssues: 0
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2025-12-01T22:45:23Z"
lastCommitAt: "2026-10-29T05:49:26Z"
status: "thriving"
tags: []
healthScore: 68
undervaluedScore: 31
maintainers: ["dependabot[bot]", "geobio", "jigsaw2212"]
openGraphImageUrl: "https://opengraph.githubassets.com/83d0e523219053a927a51291588ba96281e8e16358ef7c4a0f5d1a6c9247a265/scaleapi/mcp-atlas"
---

# MCP-Atlas: A Large-Scale Benchmark for Tool-Use Competency with Real MCP Servers

MCP-Atlas evaluates how well AI agents use tools to complete real-world tasks, across 36 Model Context Protocol (MCP) servers in a reproducible Docker sandbox, scored with an LLM-as-judge.

- Paper: [arxiv.org/abs/2602.00933](https://arxiv.org/abs/2602.00933) ([local copy](https://github.com/scaleapi/mcp-atlas/blob/HEAD/assets/MCP_Atlas.pdf))
- Leaderboard: [scale.com/leaderboard/mcp_atlas](https://scale.com/leaderboard/mcp_atlas)
- Dataset: [huggingface.co/datasets/ScaleAI/MCP-Atlas](https://huggingface.co/datasets/ScaleAI/MCP-Atlas)

## Overview

- **36 real MCP servers** spanning search, code execution, databases, APIs, and productivity tools — 20 need no setup, 11 require API keys, and 5 require API keys plus data setup (see [`data_exports/README.md`](https://github.com/scaleapi/mcp-atlas/blob/HEAD/data_exports/README.md)). All are open-source and version-pinned for reproducibility.
- **500 tasks** with ground-truth expected tool calls and answers.
- **LLM-as-judge scoring** reporting pass rate and coverage, plus per-task failure-mode diagnostics.

Server definitions are in…
