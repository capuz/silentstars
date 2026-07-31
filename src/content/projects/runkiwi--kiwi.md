---
repo: "RunKiwi/kiwi"
name: "kiwi"
description: "Kiwi turns a task into a swarm of coding agents that fix your code and open a pull request."
readmeQualityOk: true
url: "https://github.com/RunKiwi/kiwi"
homepage: "https://app.runkiwi.dev/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [76, 20]
topics: ["ai", "ai-agents", "coding-agent", "llm", "llm-orchestration", "sandbox"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 84
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-05T20:13:54Z"
lastCommitAt: "2026-07-31T06:29:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["ibreakthecloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/33437d5aefd55633f1c095ad3438223325ff39c5b92e854f22d415000d80f34b/RunKiwi/kiwi"
---

</p>

# Kiwi

**Kiwi runs coding agents inside infrastructure you control, and shows its work.**

A SaaS **Control Plane** decomposes a task into a DAG of workers. A **Data Plane** runs each worker in an isolated sandbox through an **Actor–Critic loop** — editing files and re-running your test command until it passes — then opens a PR. Run it **managed** (Kiwi operates the execution) or **BYOC** (the Data Plane runs in your own cloud, where code and credentials never leave your VPC).

Two properties hold on every task, in both modes:

- **The execution is contained.** Model-generated code only ever runs as your test command, inside a sandbox with default-deny networking, and never sees an API key — the Actor and Critic run in the daemon process, not in the sandbox.
- **The execution is on the record.** Every proposed edit, every Critic verdict and its reasons, and every test run is persisted per phase with its model, token counts, cost and duration — so a merged diff can be traced back to what produced it and what proved it.

## Try it

**[Sign up or log in at app.runkiwi.dev →](https://app.runkiwi.dev)** — the fastest way to run Kiwi, no setup required. Sign in with GitHub or…
