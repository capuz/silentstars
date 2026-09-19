---
repo: "ZaxbyHub/opencode-swarm"
name: "opencode-swarm"
description: "  Architect-centric agentic swarm plugin for OpenCode. Hub-and-spoke orchestration with SME consultation, code generation, and QA review."
readmeQualityOk: true
url: "https://github.com/ZaxbyHub/opencode-swarm"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent-swarm", "ai-agents", "ai-coding", "automation", "bun", "cli", "code-review", "coding-agent", "developer-tools", "github"]
stars: 475
forks: 52
openIssues: 41
closedIssues: 872
watchers: 5
contributors: 17
recentReleases: 0
createdAt: "2026-01-27T16:00:05Z"
lastCommitAt: "2026-09-19T01:14:33Z"
lastReleaseAt: "2026-02-20T09:22:09Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 27
maintainers: ["codex", "zaxbysauce", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe2c87af62a2779d4bb8e7574cdf75fb6f71d9296a4887b4b32a5466e8a37157/ZaxbyHub/opencode-swarm"
---

# OpenCode Swarm

# Your AI writes the code. Swarm proves it works.

**Closing the trust gap between "the model said it's done" and "this actually works in production."**

[Website](https://swarmai.site/) · [Getting Started](https://github.com/ZaxbyHub/opencode-swarm/blob/HEAD/docs/getting-started.md) · [Configuration](https://github.com/ZaxbyHub/opencode-swarm/blob/HEAD/docs/configuration.md) · [Architecture](https://github.com/ZaxbyHub/opencode-swarm/blob/HEAD/docs/architecture.md)

</div>

---

OpenCode Swarm is a plugin for [OpenCode](https://opencode.ai) that turns a single AI coding session into an **architect-led team of specialized core, optional, and conditional agents**. Run `/swarm agents` for the live roster; it is generated from the current plugin configuration. One agent writes the code. A different agent reviews it. Another writes and runs tests. Another checks security. **Nothing ships until every required gate passes.**

```bash
bunx opencode-swarm install
```

> This single command installs the package, registers it as an OpenCode plugin, disables conflicting default agents, and creates a ready-to-edit config at `~/.config/opencode/opencode-swarm.json`. Requires…
