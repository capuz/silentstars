---
repo: "usesofar/sofar"
name: "sofar"
description: "Event-sourced initiative memory for coding agents"
readmeQualityOk: true
url: "https://github.com/usesofar/sofar"
homepage: "https://sofar.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agent-memory", "claude-code", "mcp"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-03T11:13:02Z"
lastCommitAt: "2026-09-22T08:46:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["jithinio"]
openGraphImageUrl: "https://opengraph.githubassets.com/4277540df0d77f09f9ba00f14305ea06031fc96579b01cd0633e13808851da22/usesofar/sofar"
---

# sofar

Memory for AI coding assistants, kept inside your project.

Works with Claude Code, the Claude desktop app, Codex, Cursor, OpenCode, and
any other tool that reads `AGENTS.md` or speaks MCP.

## The problem

Every new chat starts from nothing. You explain the project again. You explain
what you already tried and why it did not work. Sooner or later the assistant
suggests the exact approach you ruled out last week, and you spend another
afternoon finding out again that it does not work.

## What sofar does

sofar keeps a written record of the work in your project folder. Your assistant
reads it when a session starts, adds to it while it works, and leaves a
handover note before it stops. The next session picks up where the last one
left off, even in a different tool, on a different machine, weeks later.

The record holds four things:

* **The goal.** What this piece of work is for.
* **The plan.** Tasks grouped into phases, with what is done and what is not.
* **The decisions.** What was chosen, what it was chosen over, and why.
* **The sessions.** What each one did, and the single next action.

The decisions matter most. Knowing that an idea was already tried and rejected…
