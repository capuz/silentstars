---
repo: "V1ki/dsh-plugin-subscriptions"
name: "dsh-plugin-subscriptions"
description: "Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers — OAuth login in the web UI, no API keys"
readmeQualityOk: true
url: "https://github.com/V1ki/dsh-plugin-subscriptions"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-agent", "chatgpt", "claude", "codex", "deepseek-harness", "dsh-plugin", "grok", "llm", "oauth", "typescript"]
stars: 371
forks: 53
openIssues: 9
closedIssues: 47
watchers: 0
contributors: 16
recentReleases: 0
createdAt: "2026-08-14T08:27:11Z"
lastCommitAt: "2026-09-19T01:16:53Z"
status: "newborn"
tags: []
healthScore: 95
undervaluedScore: 25
maintainers: ["V1ki", "prgrmrwy", "delef"]
openGraphImageUrl: "https://opengraph.githubassets.com/910fa708a59cd33240fc6ab866331638828eabdcda3f8851d1b8a1ea5ce3cd4e/V1ki/dsh-plugin-subscriptions"
---

# dsh-plugin-subscriptions [](https://awesome-dsh-plugin.com)

English | [中文](https://github.com/V1ki/dsh-plugin-subscriptions/blob/HEAD/README.zh.md)

Use your **ChatGPT (Codex)**, **Claude**, **Grok (X Premium)**, **GitHub Copilot**, and **Google Antigravity** subscriptions as LLM providers in [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) — no API keys. Codex, Grok, and Antigravity log in via OAuth in the dsh web UI (Settings → Subscriptions), while Copilot uses the GitHub OAuth device flow; Claude imports credentials from an existing Claude Code session when there is one (macOS Keychain or `~/.claude/.credentials.json`) and otherwise falls back to the same browser OAuth flow, so the Claude Code CLI is not required. Tokens live at `~/.dsh/plugins/subscriptions/auth.json` (mode 0600) and refresh automatically.

## Demo

Settings → **Subscriptions**: per-provider login/logout, no API keys. Claude imports credentials from Claude Code when available and otherwise uses OAuth, as Codex and Grok always do (settings screenshots use demo accounts and catalog data):

Configure visibility, default reasoning effort, and context together in **Edit model list**, with…
