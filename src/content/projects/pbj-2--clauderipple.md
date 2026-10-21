---
repo: "PBJ-2/clauderipple"
name: "clauderipple"
description: "Use GPT, DeepSeek, GLM, Gemini, Kimi and 400+ models in Claude Desktop's own model picker and in Claude Code, while staying signed in to your Claude subscription (1P, no gateway mode). Auto reasoning effort per prompt, subagents routed by difficulty, cache and limit warnings. Claude inside Codex too."
readmeQualityOk: true
url: "https://github.com/PBJ-2/clauderipple"
homepage: "https://www.npmjs.com/package/clauderipple"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["claude-code", "claude-desktop", "deepseek", "kimi", "model-router", "openrouter", "claude-code-proxy", "codex-cli", "glm", "anthropic-proxy"]
stars: 64
forks: 16
openIssues: 6
closedIssues: 39
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-09-13T11:06:55Z"
lastCommitAt: "2026-10-21T17:31:42Z"
lastReleaseAt: "2026-09-28T06:15:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 44
maintainers: ["PBJ-2", "csa906"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1368306073/eb9a5533-9db3-4a5b-b8e0-55657f701238"
discussionCount: 0
---

Claude Desktop's own setting for other models switches the <b>whole app</b> — chat, phone Remote
  Control and connectors go with it.<br>ClaudeRipple turns nothing off: you stay signed in to your
  Claude subscription while GPT, DeepSeek, Kimi, Grok<br>or 400+ other models answer in the

---

## 1P, not 3P: the difference this whole project exists for

Claude Desktop already ships an official way to use other models — the **inference
gateway** setting, what the app calls third-party or **3P** mode. Turning it on is
not a per-session choice. It switches the **whole app** into a different deployment
mode at launch, and that mode is a different product:

- The window stops loading `claude.ai` and loads a local bundle instead. claude.ai
  `/api/` and `/v1/` calls answer `custom_3p_not_available` 503.
- "Chat" is no longer claude.ai chat. It is a Claude Code local-agent session.
- Remote Control and side sessions are switched off outright
  (`shouldEnableSessionsBridge()` returns false).
- Anthropic's own claude.ai connectors, Claude Design, mobile continuity and chat
  search go with it.

There is no middle setting. "Chat on Claude, Code on the gateway" is impossible for
anyone,…
