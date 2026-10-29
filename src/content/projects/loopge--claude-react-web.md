---
repo: "LoopGe/claude-react-web"
name: "claude-react-web"
description: "Local browser UI for @anthropic-ai/claude-agent-sdk — multi-session, 3-panel grid, persistence"
readmeQualityOk: true
url: "https://github.com/LoopGe/claude-react-web"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai-agent", "anthropic", "claude", "claude-agent-sdk", "mcp", "react", "web-ui"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-05-08T03:08:12Z"
lastCommitAt: "2026-10-29T04:24:29Z"
lastReleaseAt: "2026-09-16T04:33:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 59
maintainers: ["LoopGe"]
openGraphImageUrl: "https://opengraph.githubassets.com/4efab638eb479343ecf6d634fdbaf5f248c37f7556087f076eeab44e3aa3b61d/LoopGe/claude-react-web"
discussionCount: 0
---

A local browser UI for [`@anthropic-ai/claude-agent-sdk`](https://www.npmjs.com/package/@anthropic-ai/claude-agent-sdk). Ships as a single `npx` binary that serves both the API and a built React client — a full Claude Code-style experience, in a real browser.

Each chat session holds its own stateful SDK `Query` on the server, so multi-turn conversations, mid-run interruption, model switching, and permission-mode changes all drive a live `claude` CLI subprocess. What you do in the browser is reflected in a real agent process.

## Why claude-react-web?

- **Sessions that outlive the terminal.** Conversations persist across restarts and resume from disk. Keep up to three side-by-side, and come back to any of them later.
- **Not a chat wrapper.** It drives the real agent loop — tool calls, subagents, background tasks, plan mode, MCP, hooks — rather than reimplementing a chatbot. A few CLI capabilities are deliberately not surfaced yet; the [manual appendix](https://github.com/LoopGe/claude-react-web/blob/HEAD/docs/manual.en.md#appendix-capabilities-not-yet-exposed-in-the-ui) tracks them.
- **Safety you can see.** In the default mode every tool call is a reviewable dialog — allow…
