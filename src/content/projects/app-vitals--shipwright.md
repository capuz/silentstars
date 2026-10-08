---
repo: "app-vitals/shipwright"
name: "shipwright"
description: "The open-source autonomous delivery agent for Claude Code."
readmeQualityOk: true
url: "https://github.com/app-vitals/shipwright"
homepage: "https://shipwrightharness.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["ai", "claude-code", "cli", "coding-agent", "mcp", "typescript", "ai-agents", "autonomous-agents", "ci-cd", "claude"]
stars: 14
forks: 3
openIssues: 1
closedIssues: 384
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-06T14:10:22Z"
lastCommitAt: "2026-10-08T10:53:43Z"
lastReleaseAt: "2026-06-18T06:50:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 54
maintainers: ["dmcaulay", "dodizzle"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1261308038/fd25ee1d-9dda-49e7-8421-147e27306d7c"
discussionCount: 0
---

# Shipwright Harness -- autonomous delivery agent for Claude Code

**The open-source autonomous delivery agent for Claude Code.** A deployable cloud agent and the autonomous coding system that powers it — built on the Shipwright plugin, running on your own codebase.

### It builds itself, and the numbers are public

Shipwright's own delivery pipeline runs on Shipwright. Cycle time, CI first-pass rate,
review verdicts and estimation accuracy for this repository are public:

**[→ proof.shipwrightharness.com](https://proof.shipwrightharness.com/public/dashboard)**

As of 2026-09-25, trailing 30 days: **336 tasks completed, 60 PRs merged, 85.7% CI
first-pass rate, ~4.4h median cycle time.** No other autonomous coding agent publishes its
own delivery metrics — you can check our work before installing anything.

## What is Shipwright Harness?

Two faces, one product:

- **The agent** — deploy it to your cloud (GitHub Actions or self-hosted). It does autonomous coding on your codebase, held to the **same review and test bar as human code**.
- **The system** — the autonomous coding system, built on the Claude Code **`shipwright` plugin**: plan · build · review · metrics. Use it…
