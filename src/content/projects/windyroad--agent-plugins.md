---
repo: "windyroad/agent-plugins"
name: "agent-plugins"
description: "Claude Code plugins for architecture governance, risk management, TDD, and delivery quality by Windy Road Technology"
readmeQualityOk: true
url: "https://github.com/windyroad/agent-plugins"
language: "Shell"
languages: ["Shell"]
languagePcts: [90]
stars: 6
forks: 1
openIssues: 88
closedIssues: 48
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-07T00:33:58Z"
lastCommitAt: "2026-10-03T22:04:24Z"
lastReleaseAt: "2026-04-10T12:47:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 46
maintainers: ["tompahoward", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f23e98559dbdb61bed01ae42a36630499d237796035ed3343f736924414e4195/windyroad/agent-plugins"
---

# Windy Road Agent Plugins

**Governance guardrails for AI coding agents.** Architecture reviews, risk scoring, TDD enforcement, and delivery quality gates that run automatically inside [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

Built by [Windy Road Technology](https://windyroad.com.au).

## The Problem

AI coding agents are fast. Sometimes too fast. They skip architecture reviews, introduce risk without assessment, ignore your design system, and write implementation before tests. The same governance that keeps human teams shipping safely gets bypassed when an agent writes code.

These plugins bring that governance back -- automatically. They hook into Claude Code's plugin system and enforce your team's standards on every edit, commit, and push. No manual checks. No hoping the agent remembers.

## Quick Start

Install all plugins with one command:

```bash
npx @windyroad/agent-plugins
```

Restart Claude Code. That's it. The plugins activate automatically based on what they find in your project.

**Install only what you need:**

```bash
npx @windyroad/agent-plugins --plugin architect tdd risk-scorer
```

**Or install a single plugin directly:**

```bash
npx…
