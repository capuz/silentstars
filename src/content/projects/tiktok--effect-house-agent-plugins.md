---
repo: "tiktok/effect-house-agent-plugins"
name: "effect-house-agent-plugins"
description: "EffectHouse AI (ehai): make, preview and publish TikTok Effect House effects from Claude Code and Codex. Plugin marketplace for both hosts."
readmeQualityOk: true
url: "https://github.com/tiktok/effect-house-agent-plugins"
homepage: "https://effecthouse.tiktok.com/"
language: "JavaScript"
languages: ["JavaScript", "PowerShell", "Shell"]
languagePcts: [48, 28, 20]
topics: ["claude-code", "codex", "effect-house", "marketplace", "mcp", "plugin", "tiktok"]
stars: 15
forks: 0
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 14
recentReleases: 8
createdAt: "2026-10-28T02:14:55Z"
lastCommitAt: "2026-11-26T12:58:50Z"
lastReleaseAt: "2026-11-25T14:14:25Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 55
maintainers: ["ZPei0808", "Zhiyuxxxxiao", "xinyuhuang29"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce04c5b0767d6d789d7b15dca419962bfa1a934f1ad91b523bae51c48b2b128a/tiktok/effect-house-agent-plugins"
---

# EffectHouse AI (`ehai`)

A Claude Code and Codex plugin for TikTok Effect House. Describe the effect you
want and the agent builds it in the real Effect House engine, shows it in a live
preview, lets you tune it with sliders, and publishes it to your Effect House
account. It runs on macOS, with Apple silicon or an Intel processor (macOS 13 or
later), and on Windows x64. You do not need to install Node.js.

Projects open in Effect House 5.16.1 and later.
A project the plugin saves no longer opens in an older Effect House; before it
upgrades an older project, it keeps a copy of the original in the project's `.ehai` folder.

## Install

In the Codex app or the Claude app, choose or create a workspace folder and trust it
when asked; we recommend switching to Full access before your first message, so you
do not approve every step. Then paste the prompt for your host (in Codex, not
ChatGPT; in Claude Code, not a Claude chat). It installs or updates the plugin
and runs the first-time setup (about 600 MB, once); start a new session when it
finishes, so the plugin loads. Pasted into a chat page, the prompt only tells
you to come back to Codex or Claude Code.

Codex:
