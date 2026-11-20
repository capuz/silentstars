---
repo: "rimusz/codex-gateway"
name: "codex-gateway"
description: "Mac Menu bar Codex Gateway for third-party models in Codex App and CLI"
readmeQualityOk: true
url: "https://github.com/rimusz/codex-gateway"
language: "Swift"
languages: ["Swift"]
languagePcts: [93]
topics: ["codex", "codex-gateway"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-05T12:21:58Z"
lastCommitAt: "2026-11-20T12:03:41Z"
lastReleaseAt: "2026-07-24T08:44:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 19
maintainers: ["rimusz", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2990a115f3819f9a4cc38eed0a78bb51cb584578f3c9f627c9e4cc747c55156/rimusz/codex-gateway"
---

# CodexGateway

**Use any OpenAI-compatible model in Codex Desktop and Codex CLI — from a macOS menu bar app.**

Codex Desktop and the Codex CLI normally talk only to OpenAI's own models. CodexGateway sits quietly in your menu bar and runs a tiny local gateway that lets both route to **third-party providers** (Cursor via a local bridge, Anthropic Console API key or Claude Code login, xAI API key, Grok OAuth via the official Grok CLI, DeepSeek, Google Gemini, OpenRouter, Z.ai, Kimi, Qwen, MiniMax, Cline Pass, …) or **local models** (Ollama). You keep those providers and models in a native **Settings** window. **Update Gateway Config** writes only your custom models into Codex's picker and restarts the Codex app and CLI daemon. **Reset Gateway Config** puts Codex's own models back in the picker and takes the custom models out. The picker shows one of those lists at a time: ChatGPT rejects native Codex model ids when the request comes through the gateway. A custom entry whose upstream id matches a native slug still works when you select that entry (for example `cursor/gpt-5.5` goes to Cursor). Desktop and CLI share the choice through `~/.codex/config.toml`.
