---
repo: "runkora/kora"
name: "kora"
description: "The open source control plane for running agent factories in production"
readmeQualityOk: true
url: "https://github.com/runkora/kora"
homepage: "https://runkora.io"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [61, 36]
topics: ["agent-orchestration", "agents", "ai", "control-plane", "engineering", "agent-factory", "factory", "software-factory"]
stars: 62
forks: 5
openIssues: 51
closedIssues: 186
watchers: 3
contributors: 15
recentReleases: 10
createdAt: "2026-02-16T08:35:41Z"
lastCommitAt: "2026-11-04T02:56:43Z"
lastReleaseAt: "2026-09-30T11:29:13Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 47
maintainers: ["justinwilkin", "runkora[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/89f2d2272194923ca04fb8fb902b7dc1bfd4d739be6e96d48a4d380b53f1d7b5/runkora/kora"
---

kora is an open source control plane for running agent factories in production. An agent on a laptop runs with its developer's credentials and leaves no audit trail of what it did. kora makes those agents safe to run at scale.

kora is not an agent framework, a model router, or an LLM wrapper. It runs the agent harnesses you already use, such as Claude Code, Codex and OpenCode, on Kubernetes, and governs everything they do.

- **Agent execution.** Every agent works in a durable run inside its own sandbox, started by a webhook, queue, schedule, the API or a person.
- **Identity.** Every agent has its own identity. Autonomous agents act with their own access, and delegated agents act for the person who started the run and can never do more than that person can.
- **Policy.** Every action by a person or an agent is evaluated against policy before it runs.
- **Connectivity.** Agents never handle credentials. kora intercepts outbound calls and injects a scoped, just-in-time credential.

## Getting started

- **Try kora locally:** [`make up`](https://github.com/runkora/examples/tree/main/quickstart) in [runkora/examples](https://github.com/runkora/examples) installs kora on a local k3d…
