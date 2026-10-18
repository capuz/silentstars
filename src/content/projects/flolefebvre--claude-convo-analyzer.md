---
repo: "flolefebvre/claude-convo-analyzer"
name: "claude-convo-analyzer"
description: "A local-only web app that analyzes your Claude Code conversation logs for per-conversation token usage and cost."
readmeQualityOk: true
url: "https://github.com/flolefebvre/claude-convo-analyzer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["anthropic", "claude", "claude-code", "cost-analysis", "nextjs", "token-usage"]
stars: 5
forks: 1
openIssues: 2
closedIssues: 45
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-21T08:42:10Z"
lastCommitAt: "2026-10-18T08:17:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 45
maintainers: ["prezbar", "GavrocheGusty"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f3d7fc52f5e94684a37a23a7c71bf1a388c4edd358eaeefc509923acbb33263/flolefebvre/claude-convo-analyzer"
---

# Claude Conversation Analyzer

A local-only web app that reads the Claude Code conversation logs stored on your
machine, parses them deterministically into a SQLite database, and shows you
per-conversation token usage and cost — broken down by project, model, skill,
and sub-agent.

**Everything stays on your machine.** The app only reads `~/.claude/projects`
and writes a local SQLite file (`./data/analyzer.db`); both paths are
configurable. Nothing is ever sent anywhere.

> **About the cost figure:** the cost shown is always _"what these tokens would
> cost through the public API"_. If you're on a Pro or Max subscription you
> don't actually pay per token — so treat the number as the equivalent API
> value of your usage, not a bill.

## Screenshots

The conversation list — total cost, tokens, and a per-folder breakdown across
every project, sortable by any column:

Expand any row for the per-model, per-skill, and per-sub-agent cost breakdown:

Work rarely fits in one sitting. When you resume a session (or fork it), Claude
Code starts a new conversation linked to the previous one — so the app groups
them into a **continuation family**: rows that belong to one show a badge with
the…
