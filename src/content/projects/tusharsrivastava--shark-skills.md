---
repo: "tusharsrivastava/shark-skills"
name: "shark-skills"
description: "Running Claude Code like an engineering team: one operator, parallel lanes, audited merges."
readmeQualityOk: true
url: "https://github.com/tusharsrivastava/shark-skills"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [60, 40]
topics: ["agent-orchestration", "agents-md", "ai-agents", "anthropic", "claude", "claude-code", "claude-code-plugin", "claude-code-skills", "debugging", "developer-tools"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-11-16T19:32:40Z"
lastCommitAt: "2026-11-17T14:43:07Z"
lastReleaseAt: "2026-11-17T14:44:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["tusharsrivastava"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1460474091/05fb47ac-8957-4524-98b1-9e5599a2e441"
discussionCount: 1
---

---

**My Claude Code setup for building real features with a team of agents.**

Using a single Claude Code session for a small fix works fine. Using it for a real feature usually turns into a mess
of conflicting edits, silently dropped rules during merges, half-baked bug patches, and a giant commit at the end.

Throwing more agents at it doesn't fix that on its own. Parallel agents with no shared plan just make code messier, faster.

**shark** is what I ended up with after building a production system this way.

The main session never writes code. It becomes the **operator**: it briefs the subagents, checks what they hand
back, and talks to you. Lanes build in parallel against one shared contract. Every merge gets audited, and every bug
gets a root cause before it gets a fix.

Every rule in here exists because breaking it cost me hours. Steal them. Change them. Make them stricter for your
project.

## See It in Action

## Installation (2-minute setup)

### 1. Get the plugin

In Claude Code:

```text
/plugin marketplace add tusharsrivastava/shark-skills
/plugin install shark@shark-skills
```

You'll also need git, and Node.js with `npx`. The debugger MCP server runs through it.…
