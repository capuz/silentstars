---
repo: "JSONbored/gittensory"
name: "gittensory"
description: "Backend intelligence and MCP tooling for Gittensor contributors and maintainers."
url: "https://github.com/JSONbored/gittensory"
homepage: "https://gittensory.aethereal.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai", "automation", "autonomous-agents", "bittensor", "claude", "claude-code", "claudecode", "codex", "docker", "github-devops"]
stars: 14
forks: 57
openIssues: 293
closedIssues: 696
watchers: 0
contributors: 48
recentReleases: 7
createdAt: "2026-05-22T22:32:03Z"
lastCommitAt: "2026-07-04T06:13:03Z"
lastReleaseAt: "2026-07-03T20:26:44Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "funded", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 68
maintainers: ["JSONbored", "jeffrey701", "jony376"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3abdfa56e3560c9b36b35c4356cd046add6be9744b648cee2621e019b1946c1/JSONbored/gittensory"
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
