---
repo: "czg86389-hub/ACP-Ant"
name: "ACP-Ant"
description: "OpenAI / Anthropic compatible API for Google's official Antigravity CLI over ACP, plus Google AI Studio as an optional second source: multi-account, per-account proxy, tool calling for agents (Codex, LangChain, Cline...)"
originalDescription: "OpenAI / Anthropic compatible API for Google's official Antigravity CLI over ACP, plus Google AI Studio as an optional second source: multi-account, per-account proxy, tool calling for agents (Codex, LangChain, Cline...)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/czg86389-hub/ACP-Ant"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["aistudio", "antigravity", "gemini", "google-ai-studio", "openai-compatible"]
stars: 57
forks: 12
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-11-07T09:16:43Z"
lastCommitAt: "2026-11-20T12:21:17Z"
lastReleaseAt: "2026-11-20T12:23:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 41
maintainers: ["czg86389-hub", "XingXiaoWu", "wangbingnan728628-netizen"]
openGraphImageUrl: "https://opengraph.githubassets.com/e32e717a5734507f5d3baa68506da24ad931a794da7fbf1173fc188b2a363f64/czg86389-hub/ACP-Ant"
---

# ACP-Ant

Turns Google's official **Antigravity CLI (`agy`)** into a standard LLM interface via the **ACP protocol (Agent Client Protocol)**. **OpenAI Chat Completions, OpenAI Responses, and Anthropic Messages** formats are all supported, including **tool calling (function calling)**, so agents and applications can connect directly.
Supports **multiple Google accounts used in rotation, with each account going through its own proxy node**.
Starting with 1.5.0, you can also connect **Google AI Studio as a second source**: same address, same key. `aistudio/<模型名>` goes to AI Studio and everything else goes to Antigravity. The quota of the same Google account can be used on both sides.
