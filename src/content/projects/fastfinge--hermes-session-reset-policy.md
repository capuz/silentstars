---
repo: "fastfinge/hermes-session-reset-policy"
name: "hermes-session-reset-policy"
description: "Hermes Agent plugin: re-arm the session_reset policy (idle/daily/both) removed in upstream v2026.9.11, as an opt-in pre_gateway_dispatch hook"
readmeQualityOk: true
url: "https://github.com/fastfinge/hermes-session-reset-policy"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hermes-agent"]
stars: 9
forks: 15
openIssues: 0
closedIssues: 9
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2026-09-26T21:56:03Z"
lastCommitAt: "2026-11-24T14:08:23Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 61
maintainers: ["fastfinge", "claude", "mikerotenberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/f05a724e4f41687073b7815731c3a0ed5279a63ecba078e232f49c362680ae07/fastfinge/hermes-session-reset-policy"
---

# hermes-session-reset-policy

Re-arm Hermes Agent's `session_reset` policy (idle / daily / both) as a plugin.

## Why

Upstream Hermes v2026.9.11 (commit `1d5d059410`, "stop time-triggered conversation
rotation") removed the background reset timers and made the `session_reset`
config block inert: only explicit suspension (`/stop`, `/new`) replaces a routed
conversation. If you want time-based conversation rotation back — fresh context
after an hour of inactivity, or once per day at 04:00 — this plugin restores it
without patching the core.

## How it works

The plugin registers a `pre_gateway_dispatch` hook. On every inbound gateway
message — before dispatch, and before the gateway's own sender authorization,
so it asks that question itself first (see *Authorization* below) — it:
