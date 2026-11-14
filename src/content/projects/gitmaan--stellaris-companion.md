---
repo: "gitmaan/stellaris-companion"
name: "stellaris-companion"
description: "AI-powered Stellaris save analyzer with strategic advisor and empire chronicler. Not affiliated with Paradox Interactive. "
readmeQualityOk: true
url: "https://github.com/gitmaan/stellaris-companion"
homepage: "https://galacticfilingcabinet.com"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [62, 20]
topics: ["electron", "game-companion", "gaming", "gemini", "paradox", "rust", "save-parser", "stellaris", "jomini", "clausewitzengine"]
stars: 24
forks: 8
openIssues: 2
closedIssues: 33
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-01-12T22:44:10Z"
lastCommitAt: "2026-11-14T10:48:09Z"
lastReleaseAt: "2026-02-23T02:52:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 61
maintainers: ["gitmaan", "stellaris-agents-gitmaan[bot]", "will-o-matic"]
openGraphImageUrl: "https://opengraph.githubassets.com/db2dd50c2b69995837ad077d10ee6ef7defe31d5abf3a3135853cf63aa16c038/gitmaan/stellaris-companion"
discussionCount: 3
---

# Stellaris LLM Companion

Your empire's strategic council, on demand.

Stellaris LLM Companion reads your save, tracks what is changing across time, and gives actionable strategic advice in your empire's voice. Gemini is the default, with ChatGPT plan usage, Ollama, LM Studio, OpenRouter, and custom OpenAI-compatible endpoints also supported for both Advisor and Chronicle.

## Why use it

- **Actionable strategy, not generic tips**: Military, economy, diplomacy, leaders, planets, tech, and more.
- **Chronicle mode**: Turn your campaign into a narrative history with chaptered events.
- **Local AI app access**: Use the MCP Relay to bring your current campaign context into Claude Desktop, Codex, and other MCP-compatible clients.
- **In-game workflow**: Ask questions through Discord overlay with `/ask` while you play.
- **Privacy-first architecture**: Saves stay local. Connect your ChatGPT account or bring your own provider.

## Quick Start (Recommended)

### Requirements

- **Python 3.10+**
- **Rust toolchain** (required for `stellaris-parser`)
- **Node.js 22.12+** (for Electron app)
- **Gemini API key** from [Google AI Studio](https://aistudio.google.com/) when Gemini is selected…
