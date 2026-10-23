---
repo: "adapt-toolkit/ours-fleet"
name: "ours-fleet"
description: "Run a fleet of persistent, identity-bound AI agents across harnesses (Claude Code first, more coming). Declarative fleet.yaml, tmux consoles, systemd/launchd supervision, spawn & oversee subagents, E2E-encrypted agent messaging via ours.network."
readmeQualityOk: true
url: "https://github.com/adapt-toolkit/ours-fleet"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 6
forks: 2
openIssues: 10
closedIssues: 20
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-07-02T13:27:56Z"
lastCommitAt: "2026-10-23T08:46:31Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 54
maintainers: ["shakhvit", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1b3c981f9fa827b1d9045b621d0cbfc488ebe730f773b18be9335f76713827f/adapt-toolkit/ours-fleet"
fundingLinks: ["CUSTOM:https://github.com/adapt-toolkit/ours-donate"]
---

# ours-fleet

**Run a fleet of persistent, securely isolated, identity-bound AI agents — across different agent
harnesses — from one declarative file.**

## What is this?

An AI coding agent in a terminal dies when you close the laptop. `ours-fleet`
turns such sessions into **roles**: long-lived agents that

- **run through structured managed sessions** behind one provider-neutral
  agent-session interface, which you can inspect or prompt,
- are **supervised** — one Fleet systemd service (Linux) or LaunchAgent (macOS)
  runs their existing agent runners, restarts them on crash, and restores the
  desired running roster at boot or login,
- **resume their context** across restarts (when the harness supports it),
- **bind an ours.network identity**, so you — and every other agent — can message
  them by name over an end-to-end-encrypted channel
  ([ours.network](https://ours.network)),
- can **spawn subagents** (permanent or temporary) and **oversee** them: peek into
  a ward's console, answer a stuck prompt, nudge it back to work.

The fleet uses a v2 manifest plus typed documents: `~/fleet.yaml` holds
fleet-wide operational policy and automation, while `~/fleet/agents`,…
