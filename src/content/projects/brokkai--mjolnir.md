---
repo: "BrokkAi/mjolnir"
name: "mjolnir"
description: "Manage Codex, Claude Code, Muse Code, Kimi Code, Grok Build, and DeepSeek Harness with durable sessions, isolated environments, quotas, and remote control. A Rust terminal and web control plane for Agent Client Protocol (ACP) coding agents."
readmeQualityOk: true
url: "https://github.com/BrokkAi/mjolnir"
homepage: "https://mjolnir.brokk.ai/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["acp", "agent-client-protocol", "ai-agent", "automation", "code-review", "coding-agent", "headless", "multi-agent", "rust", "tui"]
stars: 105
forks: 9
openIssues: 82
closedIssues: 553
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-05-18T11:35:20Z"
lastCommitAt: "2026-10-25T08:40:55Z"
lastReleaseAt: "2026-06-04T09:09:38Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 34
maintainers: ["jbellis", "foundev"]
openGraphImageUrl: "https://opengraph.githubassets.com/14727f77058b5eeab50dd79f2152adbffcc8bb4debb3398d887eb88ed4e50e77/BrokkAi/mjolnir"
---

# Mjolnir

**One control plane for all your coding agents.**

Mjolnir (`mj`) runs Claude Code, Codex, Kimi Code, Grok Build, Muse Code,
OpenCode, MiMo Code, and DSH sessions side by side, on your laptop, in containers,
over SSH, or on EC2, and
keeps them running after you close the terminal. You can move a session to
another account, another harness, or a compatible target without starting over.
Bare SSH sessions stay on their original host.

By default Mjolnir sends recent prompt and reply text and help-search text to TypeSafe's hosted Jev classifier through a public proxy. When a sub-agent uses adaptive effort, it also sends the clipped task name and instructions plus the child model ID. `[jev] enabled = false` in `config.toml` stops all Jev requests ([details](https://mjolnir.brokk.ai/security/#what-leaves-this-machine-by-default)).

[Documentation](https://mjolnir.brokk.ai/) ·
[Quickstart](https://mjolnir.brokk.ai/quickstart/) ·
[Releases](https://github.com/BrokkAi/mjolnir/releases)

## Why Mjolnir

If you use one agent, in one terminal, on one machine, you don't need Mjolnir.
It's for the point where that stops scaling: several subscriptions, several
repositories, several…
