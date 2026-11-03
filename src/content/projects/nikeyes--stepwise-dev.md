---
repo: "nikeyes/stepwise-dev"
name: "stepwise-dev"
description: "Dev workflow for Claude Code"
readmeQualityOk: true
url: "https://github.com/nikeyes/stepwise-dev"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [49, 38]
stars: 24
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-11-09T15:45:42Z"
lastCommitAt: "2026-11-03T19:05:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 42
maintainers: ["nikeyes"]
openGraphImageUrl: "https://opengraph.githubassets.com/009fb56083483d45290d9a2c74323aa798faeabd931122a1b3ef902607de11cd/nikeyes/stepwise-dev"
---

# Stepwise Dev - Multi-Plugin Suite

A modular development workflow suite for Claude Code inspired by [Ashley Ha's workflow](https://medium.com/@ashleyha/i-mastered-the-claude-code-workflow-145d25e502cf), adapted to work 100% locally with thoughts.

**📖 Read more**: [Tu CLAUDE.md no funciona sin Context Engineering](https://nikeyes.github.io/tu-claude-md-no-funciona-sin-context-engineering-es/) (Spanish article about Stepwise-dev)

## 🎯 What This Is

Solves the context management problem: LLMs lose attention after 60% context usage.

Implements **Research → Plan → Implement → Validate** with frequent `/clear` and persistent `thoughts/` storage.

### Philosophy

- Keep context < 60% (attention threshold)
- Split work into phases
- Clear between phases, save to `thoughts/`
- Never lose research or decisions

### Why This Workflow With AI

**More generated code = more risk if you don't have a solid feedback loop.**

The faster AI generates code, the more these practices matter:

- **Story Splitting** — AI can produce a lot in little time. If scope isn't cut, chaos scales just as fast.
- **Hamburger Method** — Deliver value end-to-end continuously by slicing features into thin…
