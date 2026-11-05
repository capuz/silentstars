---
repo: "raphaeltm/simple-agent-manager"
name: "simple-agent-manager"
description: "Run multiple coding agents in parallel on your own cloud VMs."
readmeQualityOk: true
url: "https://github.com/raphaeltm/simple-agent-manager"
homepage: "https://www.simple-agent-manager.org/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["acp", "ai", "claude-code", "coding-agent", "infra", "orchestration"]
stars: 69
forks: 9
openIssues: 4
closedIssues: 39
watchers: 1
contributors: 10
recentReleases: 10
createdAt: "2026-01-24T12:50:08Z"
lastCommitAt: "2026-11-05T11:24:39Z"
lastReleaseAt: "2026-09-30T11:37:22Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 50
maintainers: ["simple-agent-manager[bot]", "raphaeltm", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfe94c0b23a16606cd611c4634e52b7de82ee0ac26713b66b1239f2f512d11fd/raphaeltm/simple-agent-manager"
---

Every task gets its own agent and dev environment, on machines you own.<br />
  Agents can start helper agents, message them, and review what they send back.<br />
  Mix Claude Code, Codex, and other agents, and steer the whole fleet from your browser or phone.

## Built for more than a few agents

Running a few agents in terminal tabs works until your laptop becomes the bottleneck. They compete for ports, Docker, and memory. Your laptop has to stay awake. And each one stops to ask you something the moment you step away.

SAM moves the fleet off your laptop.

- **A workspace for every task.** On VMs in your cloud account, each agent gets its own dev container, built from your repo's `.devcontainer` by default, with Docker, git, and its own branch. Several agents share a VM when they fit, and VMs that SAM manages are removed after sitting idle for a while. For quick jobs, Instant sessions start in seconds on Cloudflare Containers, with no VM provider needed.
- **Agents that run agents.** An agent can start helpers, send them instructions, wait for them, and stop them. Ask a lead agent to split a job, hand out the pieces, and review what comes back.
- **The agents you already use.**…
