---
repo: "RingKoAI/ringko-harness"
name: "ringko-harness"
description: "Provider-neutral Agent Harness for coding agents. Gated tools, sandboxed execution, event-sourced sessions."
readmeQualityOk: true
url: "https://github.com/RingKoAI/ringko-harness"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agent", "agent-harness", "ai", "ai-agents", "bun", "cli", "coding-agent", "developer-tools", "llm", "mcp"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-09-27T13:15:37Z"
lastCommitAt: "2026-11-04T13:05:10Z"
lastReleaseAt: "2026-11-04T12:37:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 54
maintainers: ["KaguyaRing"]
openGraphImageUrl: "https://opengraph.githubassets.com/9146c60a63bdf517009e1114f41857312d7c1f339392d929efda4bf324d9d33a/RingKoAI/ringko-harness"
---

RingKo is an Agent Harness. It runs a model against a workspace through a gated
tool registry and an append-only session log. It ships with a terminal UI and a
browser UI; both use the same local server.

## Run

Node.js 24+ and Bun 1.2+ must be on `PATH`. The published executable is a Bun
bundle, so Bun is not optional.

```sh
npm install -g @ringko-ai/rkh
ringko          # terminal UI (default)
ringko serve    # browser UI, prints its URL (port 8787)
```

`ringko help` lists all commands. `npx @ringko-ai/rkh` runs the terminal UI
without a global install. Prereleases publish under the `next` tag:
`npm install -g @ringko-ai/rkh@next`.

From a checkout:

```sh
pnpm install
pnpm dev:tui    # terminal UI
pnpm build      # code, tui and webui
```

## Features

- **Tools.** `read`, `write`, `edit`, `glob`, `grep`, `tree`, `shell`,
  `webfetch`, `websearch`, `ask`, `plan`, `update_plan`, `task` and `job`.
  `read` handles text, images, PDFs and notebooks.
- **Approval.** Every tool call is risk-classified, and risky calls wait for the
  host. With no approval handler they are denied. Network and shell tools are
  registered separately from workspace tools.
- **Sandbox.** `read-only`,…
