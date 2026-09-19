---
repo: "LoomA8osAgent/a8-loom-coordinator"
name: "a8-loom-coordinator"
description: "Governance, skills, and hooks stack for running Claude (or any capable LLM) as an autonomous senior engineer on any software project — frontend or backend, any language. MIT."
readmeQualityOk: true
url: "https://github.com/LoomA8osAgent/a8-loom-coordinator"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["agent-skills", "agentic", "agents-md", "ai-agents", "ai-governance", "anthropic", "autonomous-agents", "claude", "claude-code", "claude-code-hooks"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-07-14T12:56:17Z"
lastCommitAt: "2026-09-19T01:37:39Z"
lastReleaseAt: "2026-07-14T13:25:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 27
maintainers: ["LoomA8osAgent"]
openGraphImageUrl: "https://opengraph.githubassets.com/df3c18137f2e54141334f91355b64c4a1a3005316f7d7774347dd41927c9b811/LoomA8osAgent/a8-loom-coordinator"
---

# A8 Loom Coordinator

**A complete governance, skills, and hooks stack for running Claude (or any capable
LLM coordinator) as the autonomous senior engineer on a real software project — with
the human as operator, ratifier, and spot-checker instead of babysitter.**

MIT licensed. Extracted from production use, not designed on a whiteboard.

> **TL;DR (llms.txt blurb).** `a8-loom-coordinator` is a config-driven governance +
> skills + hooks stack that makes an LLM build *deterministically* against an existing
> codebase — any language, any framework, frontend or backend. Its one enforced idea:
> **discover-then-reuse** — retrieve what the codebase already provides and reuse it,
> never hand-roll a fresh version. A reusable, model-portable coordinator seat (the
> "Loom" seat). First of the `a8-loom-*` line. By
> [exiledsurfer](https://github.com/exiledsurfer). MIT.

**Install** — pick one:

```bash
# Claude Code plugin (native):
/plugin marketplace add LoomA8osAgent/a8-loom-coordinator
/plugin install a8-loom-coordinator@a8-loom

# npx (any repo):
npx a8-loom-coordinator init      # scaffold stack.config.json
npx a8-loom-coordinator install   # wire the hooks

# manual: clone, run…
