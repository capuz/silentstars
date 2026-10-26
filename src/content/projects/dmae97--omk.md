---
repo: "dmae97/omk"
name: "omk"
description: "Open-source multi-agent coding CLI for the terminal (TypeScript, MIT). Switch models mid-session; finish goals only when your test passes."
readmeQualityOk: true
url: "https://github.com/dmae97/omk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["cli", "coding-agent", "developer-tools", "mcp", "multi-agent", "typescript", "code-review", "local-llm", "ai-agents", "terminal"]
stars: 149
forks: 16
openIssues: 5
closedIssues: 14
watchers: 1
contributors: 113
recentReleases: 0
createdAt: "2026-04-30T01:41:12Z"
lastCommitAt: "2026-10-26T21:01:02Z"
lastReleaseAt: "2026-05-09T13:16:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 95
undervaluedScore: 28
maintainers: ["dmae97", "HangMine", "nova-loop"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1225139405/c148f826-fa8b-4451-862f-c8ffab154782"
discussionCount: 17
---

<img
    src="readmeasset/omk-hero.svg"
    alt="OMK, Open Multi-Agent Kit. Make done pass a check. The mark shows a four-stage control loop with three routed lanes."
    width="100%"
  />

  Make “done” pass a check.

  An open-source multi-agent coding CLI for your terminal: switch models in one
  session and finish a goal only when your test passes.

---

OMK is a lightweight, MIT-licensed AI coding agent for your terminal, written in
TypeScript. Switch models in one session, add subagents when you need them, and
mark a goal done only when your own check passes. It is a standalone CLI, so it
can serve as an open-source alternative to a single-provider agent such as
Claude Code.

Requires Node.js 22.19 or newer:

```bash
npm install -g open-multi-agent-kit --ignore-scripts
cd your-project
omk
```

The first run opens `/login` (subscription, API key, or local model). To try it
without a global install: `npx --ignore-scripts open-multi-agent-kit`.
Details in [Quick start](#quick-start).

## Why OMK

An AI saying “done” is not an acceptance check. With `/goal verify`, you choose
the command that checks your goal. OMK runs it after each settled turn and
completes the goal only when…
