---
repo: "GeniePod/genie-claw"
name: "genie-claw"
description: "🦞 Low-latency, limited-context AI harness for private on-device homes."
url: "https://github.com/GeniePod/genie-claw"
homepage: "https://genieclaw.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["ai-agent", "harness", "local-first", "privacy-first", "security-first", "home-automation", "smart-home", "limited-context", "openclaw", "ai-agent-at-home"]
stars: 50
forks: 40
openIssues: 14
closedIssues: 167
watchers: 0
contributors: 24
recentReleases: 4
createdAt: "2026-04-15T12:34:22Z"
lastCommitAt: "2026-06-23T23:27:03Z"
lastReleaseAt: "2026-06-23T19:21:49Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 53
maintainers: ["ai-hpc", "kiannidev", "jakearmstrong59"]
openGraphImageUrl: "https://opengraph.githubassets.com/a779aa38b0c1de1c35989c94f2047ac3270d9da7f00e333e12087c3e34d6a9f1/GeniePod/genie-claw"
discussionCount: 5
---

# GenieClaw

**Low-latency, limited-context AI harness for private on-device homes.**

GenieClaw is the Rust agent layer native to NVIDIA Jetson Orin 8GB. It is built
for small local models, tight VRAM budgets, and a 4096-token Jetson baseline.
This repo owns prompt assembly, memory, tool routing, smart-home intent, safety
policy, audit, and channel/session adapters.

The product goal is a private household agent that is fast because it receives
the right family memory, room/device state, and safety context, not because it
sends large prompts to a remote model.

This is a real engineering project, not a toy demo or token-burning issue
target. The OpenClaw engineering posture here is simple: make the local agent
more native, deterministic, measurable, and reliable on Jetson-class hardware.

The default agent contract is intentionally small: the Jetson profile uses
`[agent].context_window_tokens = 4096`. Larger adaptive contexts can exist for
stronger models, but provider/runtime paths must pass the 4096-token harness
first.

## The Edge Bet

The hard version of "edge AI" is delivering — on one private device, with no
cloud — the bundle the industry says needs a data center:

-…
