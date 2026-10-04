---
repo: "raphaeltm/simple-agent-manager"
name: "simple-agent-manager"
description: "Run multiple coding agents in parallel on your own cloud VMs."
readmeQualityOk: true
url: "https://github.com/raphaeltm/simple-agent-manager"
homepage: "https://www.simple-agent-manager.org/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["acp", "ai", "claude-code", "coding-agent", "infra", "orchestration"]
stars: 60
forks: 7
openIssues: 0
closedIssues: 36
watchers: 2
contributors: 9
recentReleases: 10
createdAt: "2026-01-24T12:50:08Z"
lastCommitAt: "2026-10-04T10:01:26Z"
lastReleaseAt: "2026-09-30T11:37:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 50
maintainers: ["raphaeltm", "simple-agent-manager[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8ab01ca8ac01c94dfd3240fd4b214cea989225d933c8aff23b6bd57559ad840/raphaeltm/simple-agent-manager"
---

Every agent gets its own isolated container on a VM billed to <em>your</em> cloud account — full Linux, Docker + git, reachable in the browser. Run 5 or 500 at once.

---

## What You Get

**Agents in parallel, each in a real environment.** Every agent runs in its own isolated Docker container on a VM you own — full Linux, Docker, and git, reachable from any browser. Run a handful or hundreds at once, each in a clean workspace.

**Bring your own cloud.** VMs are provisioned in your own Hetzner, Scaleway, GCP, Vultr, or UpCloud account and billed directly to you. SAM never stores your cloud provider credentials as platform env vars — they're encrypted per-user. Your agents, your infra, your data.

**Bring your own agent.** Six harnesses work today: [Claude Code](https://www.anthropic.com/claude-code), Codex, Gemini, Mistral, OpenCode, and Amp. Use your own API key, your OAuth/subscription token, or the platform proxy.

**Chat-first, and it outlives workspaces.** Link a GitHub repo, describe a task in natural language, and watch every tool call stream back. Conversations persist at the project level — stop a workspace, spin up a new one weeks later, and your full history is still…
