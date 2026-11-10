---
repo: "czg86389-hub/ACP-Ant"
name: "ACP-Ant"
description: "OpenAI / Anthropic compatible API for Google's official Antigravity CLI over ACP: multi-account, per-account proxy, tool calling for agents (Codex, LangChain, Cline...)"
originalDescription: "OpenAI / Anthropic compatible API for Google's official Antigravity CLI over ACP: multi-account, per-account proxy, tool calling for agents (Codex, LangChain, Cline...)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/czg86389-hub/ACP-Ant"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 34
forks: 3
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-07T09:16:43Z"
lastCommitAt: "2026-11-10T11:38:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 10
maintainers: ["czg86389-hub"]
openGraphImageUrl: "https://opengraph.githubassets.com/713e6a7f9f5c31b686e169d0b316d9e4f8c599ff8c45c898ae5e3889a45d8f76/czg86389-hub/ACP-Ant"
---

# ACP-Ant

Turns Google's official **Antigravity CLI (`agy`)** into a standard LLM interface via the **ACP protocol (Agent Client Protocol)**:
**OpenAI Chat Completions, OpenAI Responses, and Anthropic Messages** formats are all supported, with **tool calling (function calling)**, so agents and applications can connect directly.
Supports **multiple Google accounts used in rotation, with each account using its own proxy node**.

- Uses Google's official command-line program and official protocol. It does not capture packets or reverse-proxy web login credentials.
- Codex CLI, OpenAI SDK, LangChain, Dify, Cline, OpenCode… As long as it supports the OpenAI or Anthropic interface, just enter the address, key, and model name to use it.
- With more accounts, traffic is distributed automatically. If an account runs out of quota, is rate-limited, or requires verification, it automatically switches to the next account.
- **Web control panel**: add accounts, log in to Google, change proxies, view each account's quota, enable or disable accounts, and run automatic inspections. Everything is done by clicking in the web page, with no commands to type.

[English](#english)

## 🎬 Recommended:…
