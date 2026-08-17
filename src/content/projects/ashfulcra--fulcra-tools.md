---
repo: "ashfulcra/fulcra-tools"
name: "fulcra-tools"
description: " Long-running AI agents coordinating over their human's own Fulcra account — shared bus, cross-model reviews, session continuity, load balancing. Unofficial, MIT."
readmeQualityOk: true
url: "https://github.com/ashfulcra/fulcra-tools"
homepage: "https://fulcradynamics.com"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["agent-coordination", "ai-agents", "chatgpt", "claude", "claude-code", "claude-code-plugin", "claude-skills", "codex", "context", "context-engineering"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-05-21T16:04:57Z"
lastCommitAt: "2026-08-17T04:18:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["ashfulcra", "claude", "FulcraBot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1245848189/49360a77-700c-4124-9882-67ac0415af34"
---

# Ash's Fulcra Tools

Vibe-coded by Fulcra's lawyer on Fulcra's own primitives — unofficial,
unsupported, and a genuinely useful thing to point your agents at.

## Note from the human: this is how I use Fulcra

I use Fulcra to build stuff and get stuff done by coordinating long-running
agents across multiple platforms — Claude Code (desktop and cloud), Claude
Cowork, OpenClaw, ChatGPT, and Codex. That includes having long-running
coding-agent sessions capture my ideas, plan together, assign work to each
other, and review each other's changes across model vendors (my review loop
requires author and approver to be different models).

The agents [coordinate](https://github.com/ashfulcra/fulcra-tools/blob/HEAD/COORDINATION-PROTOCOL.md) all of that over
[Fulcra](https://fulcradynamics.com) — a user-owned context backend that my
agents and I use as a shared bus of typed events and documents — capturing
what they're doing and
[session checkpoints](https://github.com/ashfulcra/fulcra-tools/blob/HEAD/skills/fulcra-agent-continuity/SKILL.md) along the way.
Which means I can do things like review everything all the bots did over the
past few days from my Fulcra dashboard, ask any of the bots…
