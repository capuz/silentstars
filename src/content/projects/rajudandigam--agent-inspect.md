---
repo: "rajudandigam/agent-inspect"
name: "agent-inspect"
description: "Local execution trees for TypeScript AI agents.  agent-inspect helps you understand what happened inside an AI agent run — locally. It turns manual steps, tool calls, LLM calls, structured logs, failures, durations, and run metadata into readable execution trees you can inspect from the terminal.  It is built for TypeScript/Node.js developers.."
url: "https://github.com/rajudandigam/agent-inspect"
homepage: "https://www.npmjs.com/package/agent-inspect"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["agent-observability", "agentic-ai", "ai", "ai-agent", "ai-debugging", "ai-logging-library", "ai-observability", "ai-systems", "braintrust", "langfuse"]
stars: 95
forks: 82
openIssues: 17
closedIssues: 4
watchers: 71
contributors: 5
recentReleases: 10
createdAt: "2026-05-02T06:07:29Z"
lastCommitAt: "2026-06-28T06:57:07Z"
lastReleaseAt: "2026-06-24T19:23:03Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 83
undervaluedScore: 36
maintainers: ["rajudandigam", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f34823116822499ced18549cc1d1636b4e01fda483ba63ae4f725dc0ae96b0d1/rajudandigam/agent-inspect"
discussionCount: 4
---

# agent-inspect

**Trace, check, and safely share TypeScript AI agent runs locally.**

agent-inspect helps you understand what happened inside an AI agent run without sending traces to a hosted service. It turns framework events, observed objects/classes, manual steps, tool calls, LLM calls, structured logs, failures, durations, and run metadata into readable local execution trees.

It is built for TypeScript/Node.js developers and teams shipping real agentic products — not just toy demos. Use it for **local TypeScript agent debugging**, **eval iteration**, and **CI trace artifacts**. It **complements** production observability platforms; it does **not** replace them.

The default loop is local-first: capture a trace, inspect/report/diff it, run deterministic checks in CI, then export a redacted copy only when you choose to share.

**No account. No cloud upload. No dashboard required.**

**Visual demos:** [docs/SCREENSHOTS.md](docs/SCREENSHOTS.md) — curated terminal recordings (synthetic fixtures only).

## Why agent-inspect exists

AI agents are no longer single function calls. They plan, call tools, invoke LLMs, branch, retry, fail, and run work in parallel. **Console logs are…
