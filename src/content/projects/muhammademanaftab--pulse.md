---
repo: "muhammademanaftab/pulse"
name: "pulse"
description: "A memory layer for your Claude Code work. It captures every session and writes your daily notes into files you own."
readmeQualityOk: true
url: "https://github.com/muhammademanaftab/pulse"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["ai", "claude-code", "developer-tools", "knowledge-management", "obsidian", "productivity", "work-journal", "ai-memory", "anthropic", "claude"]
stars: 10
forks: 7
openIssues: 10
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-06-28T14:17:21Z"
lastCommitAt: "2026-11-15T13:55:39Z"
lastReleaseAt: "2026-11-15T13:56:00Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 82
undervaluedScore: 58
maintainers: ["muhammademanaftab", "dependabot[bot]", "ShahadatTest"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1283075117/809662ba-2a04-4160-a372-b1a7e977a424"
discussionCount: 1
---

# Pulse

A memory layer for your work with Claude Code. It quietly remembers every session and turns it into a knowledge base you own.

*Every session becomes a linked note. Over months it builds a connected map of what you have built, shown here as an Obsidian graph.*

You finish a week of building and most of it is already gone. What did I ship on Tuesday? Why did I redo that whole feature? It is buried in old chat history you will never scroll through again.

Pulse fixes that. It records every Claude Code session to a database you own, and each night it writes up your day, grouped by project, ready to open in Obsidian. It writes the way you would write a journal, plain and clear, so it still makes sense to you months later. Your work stops disappearing.

Your data lives in your own [Convex](https://convex.dev) deployment (free tier) and your own notes repo. There is no Pulse server, and no account to create with us. For what is captured and how it is protected, see [SECURITY.md](https://github.com/muhammademanaftab/pulse/blob/HEAD/SECURITY.md).

A day looks like this:

```markdown
---
date: "2026-06-02"
tags: [pulse, daily]
source: claude-code
projects:
  - "[[Web App]]"
  -…
