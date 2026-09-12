---
repo: "AliceGoto/nighthawk"
name: "nighthawk"
description: "NightHawk — security-first coding agent (渗透测试与代码安全审计 CLI/TUI)"
readmeQualityOk: true
url: "https://github.com/AliceGoto/nighthawk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-08-25T12:55:36Z"
lastCommitAt: "2026-09-12T08:03:59Z"
lastReleaseAt: "2026-08-29T20:06:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 50
maintainers: ["AliceGoto"]
openGraphImageUrl: "https://opengraph.githubassets.com/513084ca2e8f5efd9602788abfeac6b0d81c5cbcebeac59f824e53d8b3936b49/AliceGoto/nighthawk"
---

# NightHawk

**A security-first AI agent for the terminal — penetration testing, code audit, and full-strength coding in one loop.**

NightHawk is built around a simple thesis: offensive security and serious engineering belong in the same agent. It pairs a modern coding agent core (Turn/Step loop, sub-agents, MCP, skills, persistent memory) with a native security engine — 116 vulnerability rules mapped to OWASP Top 10 and CWE, Shannon-entropy secret detection, cross-file taint analysis, and dependency auditing (offline, OSV, and host package-manager) — all exposed as first-class tools the agent can invoke mid-session.

[中文文档](https://github.com/AliceGoto/nighthawk/blob/HEAD/README.zh-CN.md)

---

## Why NightHawk

Most AI coding agents help you write code faster. NightHawk helps you **break it, prove it, and fix it**:

- **Audit as a first-class workflow.** Ask "audit this repo for injection risks" and the agent runs `SecurityScan`, triages findings by severity, confirms exploitability with `TaintTrace`, and proposes fixes — in one turn.
- **Offensive-security oriented.** Secret hunting, dependency risk, dangerous-sink tracing, and configuration flaws are surfaced by the same loop…
