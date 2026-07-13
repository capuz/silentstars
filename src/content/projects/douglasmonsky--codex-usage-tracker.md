---
repo: "douglasmonsky/codex-usage-tracker"
name: "codex-usage-tracker"
description: "Local dashboard for understanding where your Codex tokens and usage credits are going."
readmeQualityOk: true
url: "https://github.com/douglasmonsky/codex-usage-tracker"
homepage: "https://github.com/douglasmonsky/codex-usage-tracker"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [58, 29]
topics: ["codex", "mcp", "openai", "python", "sqlite", "token-usage", "free", "open-source", "chatgpt", "codex-app"]
stars: 156
forks: 11
openIssues: 0
closedIssues: 22
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-17T19:20:06Z"
lastCommitAt: "2026-07-13T06:38:20Z"
lastReleaseAt: "2026-06-20T02:44:25Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 37
maintainers: ["douglasmonsky", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1241754264/ccecabfc-b399-4cf6-a01c-0f3edc56f932"
discussionCount: 0
---

</p>

# Codex Usage Tracker

Local-first dashboard, Codex plugin, and companion skill for understanding where your Codex tokens and usage credits are going.

> **Unofficial project:** Codex Usage Tracker is an independent open-source project. It is not made by, affiliated with, endorsed by, sponsored by, or supported by OpenAI. OpenAI and Codex are trademarks of OpenAI; this project only reads local log files from your machine.

Codex Usage Tracker reads the JSONL logs already written by Codex, indexes aggregate usage counters plus local content/tool/command/file-event evidence into SQLite, and gives you a dashboard, CLI, and MCP tools for investigating real usage patterns. The content index stays on your machine; CSV exports, generated dashboard HTML, support bundles, and shareable reports omit indexed content by default. Use `refresh --aggregate-only` or `rebuild-index --aggregate-only` when you want the older aggregate-only SQLite posture.

Built for developers using Codex locally who want to know which threads, models, subagents, and long chats are driving usage without uploading logs anywhere. The public PyPI package is…
