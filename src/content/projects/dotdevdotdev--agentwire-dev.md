---
repo: "dotdevdotdev/agentwire-dev"
name: "agentwire-dev"
description: "Talk to your AI coding agents. From anywhere. Push-to-talk voice control for Claude Code running in tmux — from your phone, tablet, or laptop."
url: "https://github.com/dotdevdotdev/agentwire-dev"
homepage: "https://agentwire.dev"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["agent", "ai", "claude", "cli", "tmux", "tts", "voice", "ai-coding", "speech-to-text"]
stars: 18
forks: 5
openIssues: 2
closedIssues: 183
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-31T01:15:40Z"
lastCommitAt: "2026-06-24T23:39:00Z"
lastReleaseAt: "2026-02-26T11:20:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 52
maintainers: ["dotdevdotdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0a3567d95ece74482625e886a86ed8bf4e088e9cb3a98dd03972c8c22fdda93/dotdevdotdev/agentwire-dev"
fundingLinks: ["GITHUB:https://github.com/dotdevdotdev"]
discussionCount: 0
---

</p>

  <strong>Talk to your AI coding agents. From anywhere.</strong>
</p>

</p>

---

## The Problem

You're on the couch. Your AI agent is on your workstation. You have an idea.

Old way: Get up. Walk to computer. Type.

**AgentWire way:** Pull out phone. Hold button. Talk. Done.

---

## What It Does

Push-to-talk voice control for [Claude Code](https://github.com/anthropics/claude-code) or any AI coding assistant running in tmux.

```
Phone → AgentWire Portal → tmux session → Claude Code
 🎤        (WebSocket)         📺           🤖
```

**From your phone, tablet, or laptop on your network:**
- Hold to speak, release to send
- Watch agents work in real-time
- Hear responses via TTS
- Manage multiple projects simultaneously

---

## Quick Start

```bash
# Install
pip install agentwire-dev

# Setup (interactive)
agentwire init
agentwire generate-certs

# Run
agentwire portal start
# Open http://127.0.0.1:8765 in Chrome — voice works immediately
```

**Requirements:** Python 3.10+, tmux, ffmpeg, Claude Code

**Honest setup time:** under a minute to a working voice portal with a genuinely good voice — Kokoro-82M runs on CPU out of the box (one-time ~200 MB model download in the…
