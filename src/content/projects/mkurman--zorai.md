---
repo: "mkurman/zorai"
name: "zorai"
description: "Zorai is a persistent, multi-agent, auditable, learning execution platform where the daemon owns work, memory, approvals, tools, and long-running goals."
readmeQualityOk: true
url: "https://github.com/mkurman/zorai"
homepage: "https://zorai.app/"
language: "Rust"
languages: ["Rust"]
languagePcts: [67]
stars: 326
forks: 25
openIssues: 0
closedIssues: 41
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-03-10T11:40:49Z"
lastCommitAt: "2026-11-09T11:59:27Z"
lastReleaseAt: "2026-04-02T18:42:03Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 32
maintainers: ["mkurman", "KGKallasmaa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1177801791/4a2d86a7-28aa-4f1f-b675-906a16a3cadc"
fundingLinks: ["GITHUB:https://github.com/mkurman"]
discussionCount: 1
---

# zorai

**Fully agentic daemon runtime for durable AI work.**

Zorai is a persistent, multi-agent, auditable, learning execution platform where the daemon owns work, memory, approvals, tools, and long-running goals.

Official website: [https://zorai.app](https://zorai.app)

Zorai keeps the agent runtime, operator surfaces, tools, memory, and governed execution in one place. Threads, workspace tasks, approvals, and goal runs live in the daemon, so work can keep moving even when the UI closes.

The name comes from **Zora**: mythic but clean, suggesting dawn, awakening, watchfulness, and beginnings. It nods to Slavic dawn and light motifs without leaning on a brittle one-to-one mythological claim. The final **i** completes the AI identity.

In practice that means:

- Electron GUI, the TUI, the CLI, MCP clients, and chat gateways all reconnect to the same daemon state
- the built-in runtime can plan work, run tools, spawn bounded sub-agents, pause for approval, and learn over time
- memory, workspace boards, execution queue state, and operational history stay durable instead of vanishing with a single terminal tab

## Best Practices

Before you jump into installation and setup, read…
