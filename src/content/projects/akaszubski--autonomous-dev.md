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
stars: 32
forks: 5
openIssues: 119
closedIssues: 1305
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-10-19T04:22:23Z"
lastCommitAt: "2026-08-08T04:34:01Z"
lastReleaseAt: "2025-12-15T08:58:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 51
maintainers: ["claude", "akaszubski", "Karim13014"]
openGraphImageUrl: "https://opengraph.githubassets.com/46c6f728586749ea7c490d1f6d3a873aee8e07dffe4c1ad6985de586c9b6a35b/akaszubski/autonomous-dev"
---

# autonomous-dev — A Development Harness for Claude Code

**A harness that wraps Claude Code with enforcement, specialist agents, and alignment gates to deliver consistent, production-grade software engineering outcomes.**

A *harness* is the software and structure that wraps an AI model to keep it on track — the prompts, tools, feedback loops, constraints, and validation that turn a capable but undisciplined model into a reliable system. Without a harness, the model is a wild horse with raw power but no direction. With one, that power is controlled, directed, and accountable.

---

## What Is This?

**The problem**: Claude Code is brilliant at execution but unreliable at process. It skips tests, declares "good enough" on failing code, bypasses security reviews, and drifts from your project's intent. Not out of malice — it's trained to complete tasks, not follow engineering discipline. Prompt-level instructions ("please run tests") get ignored under context pressure.

**The solution**: autonomous-dev is a harness that enforces the full software development lifecycle:

1. **You define your project** in a file called PROJECT.md - your goals, what's in/out of scope, constraints,…
