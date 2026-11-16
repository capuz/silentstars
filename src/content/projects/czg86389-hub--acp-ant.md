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
languagePcts: [77]
topics: ["aistudio", "antigravity", "gemini", "google-ai-studio", "openai-compatible"]
stars: 46
forks: 6
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-11-07T09:16:43Z"
lastCommitAt: "2026-11-16T11:50:15Z"
lastReleaseAt: "2026-11-16T11:48:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 34
maintainers: ["czg86389-hub", "wangbingnan728628-netizen"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e8390c74dc5a8d8cf94d5063ba1991a215ad0a10881b2e4d0b77e839619eb6d/czg86389-hub/ACP-Ant"
---

# ACP-Ant

Turn Google's official **Antigravity CLI (`agy`)** into a standard large-model interface via the **ACP protocol (Agent Client Protocol)**: **OpenAI Chat Completions, OpenAI Responses, and Anthropic Messages** formats are all supported, with **tool calling (function calling)**, so agents and applications can connect directly.
Supports **multiple Google accounts used in rotation, with each account going through its own proxy node**.
Starting from 1.5.0, you can also connect **Google AI Studio as a second source**: same address, same key, `aistudio/<model name>` goes to AI Studio, and the rest go to Antigravity. The quotas of the same Google account on both sides can be used.

- Uses Google's official command-line program and official protocol. No packet capture, no reverse-proxying of web login credentials.
- Codex CLI, OpenAI SDK, LangChain, Dify, Cline, OpenCode… anything that supports an OpenAI or Anthropic interface works once you fill in the address, key, and model name.
- With multiple accounts, traffic is distributed automatically. When an account runs out of quota, is rate-limited, or requires verification, it automatically switches to the next account.
- **AI…
