---
repo: "alexeyw/lot-map"
name: "lot-map"
description: "A live map beside the chat that shows what Claude Code is doing: tool calls, model steps, hooks, skills and subagents light up as they happen. Local only, in five languages."
readmeQualityOk: true
url: "https://github.com/alexeyw/lot-map"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-observability", "ai-agents", "claude", "claude-code", "claude-code-plugin", "developer-tools", "svg-animation", "typescript", "visualization"]
stars: 331
forks: 33
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-11-09T19:13:52Z"
lastCommitAt: "2026-11-11T19:43:14Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 14
maintainers: ["alexeyw", "davidkinsler"]
openGraphImageUrl: "https://opengraph.githubassets.com/92451daa2bfe792c11edb72f808cb420d9c891118c14babbee2831ea6bea9c80/alexeyw/lot-map"
---

# lot-map

A mod for Claude Code: a live map of the work, in a pane beside the chat. Every tool call, model step, hook and skill sends a pulse from the centre to its station, so you see memory, files, shell, web and agents at work instead of reading a list of commands.

*A made-up session replayed through the mod's own drawing code. [Video (MP4)](https://github.com/alexeyw/lot-map/blob/HEAD/docs/demo.mp4).*

## Install

At the prompt of a terminal session:

```
/plugin install lot-map --marketplace alexeyw/lot-map
```

Answer `y` to add the marketplace, then choose a scope. From a shell:

```bash
claude plugin install lot-map --marketplace alexeyw/lot-map
```

In the desktop app: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `alexeyw/lot-map`, then **Add plugin**.

The pane opens by itself when a session starts. In a terminal it needs at least 144 columns and draws text only; otherwise type `/lot-map`. Built and tested on Claude Code 2.1.321 on macOS; users report it working on Windows as well.

## Updating

From a shell:

```bash
claude plugin marketplace update lot-map
claude plugin update lot-map@lot-map
```

Then start a new session. The first…
