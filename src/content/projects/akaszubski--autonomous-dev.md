---
repo: "akaszubski/autonomous-dev"
name: "autonomous-dev"
description: "Production-ready Claude Code 2.0 setup for autonomous development"
readmeQualityOk: true
url: "https://github.com/akaszubski/autonomous-dev"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-agents", "autonomous-development", "claude-code", "claude-code-plugin", "code-quality", "javascript", "knowledge-base", "project-management", "python", "security-scanning"]
stars: 31
forks: 5
openIssues: 93
closedIssues: 1277
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-10-19T04:22:23Z"
lastCommitAt: "2026-07-24T06:09:29Z"
lastReleaseAt: "2025-12-15T08:58:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 50
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/31573279d02314b30872a2dcf8e3e9f5f7b9296c882bb323c6b6a1715dd0ecc7/akaszubski/autonomous-dev"
---

# autonomous-dev — A Development Harness for Claude Code

**A harness that wraps Claude Code with enforcement, specialist agents, and alignment gates to deliver consistent, production-grade software engineering outcomes.**

A *harness* is the software and structure that wraps an AI model to keep it on track — the prompts, tools, feedback loops, constraints, and validation that turn a capable but undisciplined model into a reliable system. Without a harness, the model is a wild horse with raw power but no direction. With one, that power is controlled, directed, and accountable.

---

## What Is This?

**The problem**: Claude Code is brilliant at execution but unreliable at process. It skips tests, declares "good enough" on failing code, bypasses security reviews, and drifts from your project's intent. Not out of malice — it's trained to complete tasks, not follow engineering discipline. Prompt-level instructions ("please run tests") get ignored under context pressure.

**The solution**: autonomous-dev is a harness that enforces the full software development lifecycle:

1. **You define your project** in a file called PROJECT.md - your goals, what's in/out of scope, constraints,…
