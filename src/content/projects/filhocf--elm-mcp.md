---
repo: "filhocf/elm-mcp"
name: "elm-mcp"
description: "MCP server for IBM Engineering Lifecycle Management (ELM) — OSLC REST API client for DOORS Next (RM), RTC (CCM), and ETM (QM)"
readmeQualityOk: true
url: "https://github.com/filhocf/elm-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 3
openIssues: 0
closedIssues: 20
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-05-18T14:00:43Z"
lastCommitAt: "2026-11-23T12:19:56Z"
lastReleaseAt: "2026-11-23T07:51:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 60
maintainers: ["filhocf", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f1ee5072841eb29b84d3d6f516ef363d73c4ab26a6887b685f8cbcb94c9f8d1/filhocf/elm-mcp"
---

An MCP server that reads and writes requirements, work items and test cases in IBM ELM
over the open OSLC REST protocol — so an agent can work the ALM as a first-class tool.</p>

---

**elm-mcp** exposes IBM ELM's three OSLC domains — **DOORS Next (RM)**, **EWM/RTC (CCM)** and
**ETM (QM)** — as MCP tools. An AI assistant (Kiro, Claude, OpenCode, Hermes, …) can then list
projects, query and create requirements, work items and test cases, and move them through their
workflow, without a human clicking through the Jazz web UI.

It is an **independent implementation** over the open [OSLC](https://open-services.net/) REST
protocol — **not a fork** of IBM software, and it does **not** bundle any IBM client library.
The package is **vendor-neutral**: no organization-specific host, project or namespace is baked in;
those come from your own configuration at runtime.
