---
repo: "BrokkAi/mjolnir"
name: "mjolnir"
description: "Manage Codex, Claude Code, Muse Code, Kimi Code, Grok Build, and DeepSeek Harness with durable sessions, isolated environments, quotas, and remote control. A Rust terminal and web control plane for Agent Client Protocol (ACP) coding agents."
readmeQualityOk: true
url: "https://github.com/BrokkAi/mjolnir"
homepage: "https://mjolnir.slopcop.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["acp", "agent-client-protocol", "ai-agent", "automation", "code-review", "coding-agent", "headless", "multi-agent", "rust", "tui"]
stars: 118
forks: 11
openIssues: 110
closedIssues: 697
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-05-18T11:35:20Z"
lastCommitAt: "2026-11-16T04:25:19Z"
lastReleaseAt: "2026-06-04T09:09:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 33
maintainers: ["jbellis"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b3ac00ea3eef3fc4e1dc7994eca66ce9baa6b01aee4d43f9a717ed1bdeaddcd/BrokkAi/mjolnir"
---

# Mjolnir

**One control plane for all your coding agents.**

Mjolnir (`mj`) runs Claude Code, Codex, Kimi Code, Grok Build, Muse Code,
OpenCode, and DSH sessions side by side, on your laptop, in containers, over
SSH, or on EC2, and
keeps them running after you close the terminal. You can move a session to
another account, another harness, or a compatible target without starting over.
Bare SSH sessions stay on their original host.

By default Mjolnir sends classifier evidence to GLiDE (Fastino) through its hosted proxy. `[jev] enabled = false` in `config.toml` stops all classifier requests ([details](https://mjolnir.brokk.ai/security/#what-leaves-this-machine-by-default)).

GitHub relevance sends every classification to the public proxy by default.
Local inference is opt-in: set `local_inference = true` under `[github.watch]`
in `config.toml`. When enabled, it downloads a pinned local model and native inference runtime
when the first GitHub item needs classification, verifies their checksums, and caches them in the
Mjolnir data directory. GLiDE handles classification while preparation runs or
local scoring is unavailable. Native license texts are kept beside the cached
runtime; no…
