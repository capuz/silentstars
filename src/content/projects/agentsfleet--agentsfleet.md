---
repo: "agentsfleet/agentsfleet"
name: "agentsfleet"
description: "Open-source runtime for AI agents that wake on production events, investigate with your logs, metrics and code, and prepare a fix you approve."
readmeQualityOk: true
url: "https://github.com/agentsfleet/agentsfleet"
homepage: "https://agentsfleet.net"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [71, 26]
topics: ["agents", "autonomous-agents", "nullclaw", "zig", "agentic-ai", "openclaw", "agent-runtime", "rust-api", "rust-lang", "rustlang"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 23
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-04T10:19:29Z"
lastCommitAt: "2026-11-25T13:17:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 72
maintainers: ["indykish"]
openGraphImageUrl: "https://opengraph.githubassets.com/6574c54bfafa329a99f67c02569ecc1ff806ed7839e100937bbb25fa7c459564/agentsfleet/agentsfleet"
discussionCount: 0
---

# AI agents that wake when production breaks.

**[agentsfleet](https://agentsfleet.net)** is an open-source runtime for agents that do recurring jobs. Each fleet has a model, tools, pinned memory, triggers, schedules, and the access a person approved for it. Events or messages wake the fleet; runners investigate with its permitted tools and save the results.

- **Controlled access** — tools and network rules determine which actions a fleet can perform.
- **Durable results** — event history records requests, outcomes, and reports; live activity shows work in progress.
- **Model choice** — use the platform model or an account model configured with your own provider key.
- **Separate working instances** — each fleet keeps its own history and memory.

You start a fleet by sending it your first message, in the app or with `agentsfleet fleet create`. You keep talking to it in that chat or with `agentsfleet fleet steer`.

It asks before it uses a secret or an integration, and you approve once. See [the user flow](https://github.com/agentsfleet/agentsfleet/blob/HEAD/docs/architecture/user_flow.md).

---
