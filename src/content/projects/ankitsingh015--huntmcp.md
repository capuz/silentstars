---
repo: "ankitsingh015/HuntMCP"
name: "HuntMCP"
description: "Multi-level AI agent orchestration for autonomous bug bounty hunting. Built on OpenCode + MCP. Covers 30+ vulnerability classes across OWASP WSTG."
readmeQualityOk: true
url: "https://github.com/ankitsingh015/HuntMCP"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 7
forks: 0
openIssues: 7
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-06T09:58:04Z"
lastCommitAt: "2026-10-05T10:47:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: ["ankitsingh015"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4bdcedd88d370c717757f3f6721fc0cb237488322e2b594e6aef693a038a909/ankitsingh015/HuntMCP"
---

A single orchestrator (<b>HuntBrain</b>) delegates to specialist agents — Recon, Scan, Exploit,
Chain-Planner, Report, plus unlimited dynamic specialists spawned on demand — that drive real
security tools through MCP, validate their own findings before calling anything "confirmed,"
and write back what they learn after every engagement.

**New to bug bounty?** Skip to [Quick Start](#quick-start) and run one command against a legal test target.
**Here for the architecture?** Jump to [Architecture](#architecture) for the full agent/data-flow diagram.

> [!IMPORTANT]
> **For authorized security testing only.** Every engagement is bound to an `engagement.yaml`
> scope file — read [Scope & Authorization](#scope--authorization) before pointing this at anything.

## 🎯 Why HuntMCP

Most agentic pentest tooling picks one of two extremes: a fixed scan-and-report pipeline
with no real judgment, or a single do-everything LLM loop with no guardrails. HuntMCP sits
in between, on three deliberate decisions:

**🔬 A validator, not a self-grader**

Scan-agent output is always a *candidate* — nothing is "confirmed" until exploit-agent
independently reproduces it. No hallucinated finding ever…
