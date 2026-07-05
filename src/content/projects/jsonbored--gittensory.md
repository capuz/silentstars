---
repo: "JSONbored/gittensory"
name: "gittensory"
description: "Backend intelligence and MCP tooling for Gittensor contributors and maintainers."
readmeQualityOk: true
url: "https://github.com/JSONbored/gittensory"
homepage: "https://gittensory.aethereal.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai", "automation", "autonomous-agents", "bittensor", "claude", "claude-code", "claudecode", "codex", "docker", "github-devops"]
stars: 15
forks: 60
openIssues: 233
closedIssues: 809
watchers: 0
contributors: 50
recentReleases: 10
createdAt: "2026-05-22T22:32:03Z"
lastCommitAt: "2026-07-05T20:56:26Z"
lastReleaseAt: "2026-07-05T05:48:49Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "funded", "release_machine", "fork_magnet"]
healthScore: 95
undervaluedScore: 68
maintainers: ["JSONbored", "jimcody1995", "kiannidev"]
openGraphImageUrl: "https://opengraph.githubassets.com/725d6dcf87b4b6f03460fe3828b9c7b3b9e6dd7e4696f43cb6d4db2af7a5f34e/JSONbored/gittensory"
fundingLinks: ["GITHUB:https://github.com/JSONbored", "KO_FI:https://ko-fi.com/jsonbored"]
discussionCount: 0
---

# Gittensory

</p>

Gittensory is a deterministic control plane for Gittensor OSS contribution work.

It helps contributors plan cleaner work, helps maintainers review with less public noise, and keeps private scoring, wallet, hotkey, and reviewability context out of public GitHub output.

It is also the single converged home of the native review system; the legacy separate reviewbot repo/runtime is not part of the active architecture described here.

It is not a Gittensor explorer, public leaderboard, reward-farming bot, wallet dashboard, or autonomous PR agent.

## Privacy Boundary

Gittensory keeps sensitive context private by default.

- MCP local branch analysis sends metadata, not source contents.
- Public GitHub comments never include wallet, hotkey, reward estimate, private ranking, raw trust score, or reviewability context.
- Optional AI summaries receive compact deterministic signal bundles, not raw source code.
- Maintainer packets and scoring context stay on protected API/MCP surfaces.

See [Privacy and security](https://gittensory.aethereal.dev/docs/privacy-security) for the full boundary.

## Review Capabilities

Gittensory CI and gittensory review score, gate, and…
