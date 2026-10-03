---
repo: "tuxevil/tuxevil-rotator"
name: "tuxevil-rotator"
description: "Multi-provider, multi-account AI proxy rotator with per-model routing, quota tracking, and provider compatibility."
readmeQualityOk: true
url: "https://github.com/tuxevil/tuxevil-rotator"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["ai", "ai-agent", "ai-agents", "antigravity", "claude-code", "codex", "hermes-agent", "openai-api", "openclaw", "pi-agent"]
stars: 67
forks: 14
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-04-22T01:33:34Z"
lastCommitAt: "2026-10-03T22:04:37Z"
lastReleaseAt: "2026-04-29T00:32:21Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 37
maintainers: ["tuxevil", "CyR1en", "toRolex"]
openGraphImageUrl: "https://opengraph.githubassets.com/52bbdaa3e8ee47ea18dfefa52b8d72b839f3b6778573c802ab92e38b71dec77b/tuxevil/tuxevil-rotator"
fundingLinks: ["KO_FI:https://ko-fi.com/tuxevil"]
discussionCount: 2
---

[View live telemetry stats](https://telemetry.tuxevil.com/stats)

# tuxevil-rotator

**Production-ready OpenAI-compatible gateway for multiple free-tier LLM providers.**

> **Container migration notice:** `ghcr.io/tuxevil/pi-antigravity-rotator` is deprecated. Use [`ghcr.io/tuxevil/tuxevil-rotator:latest`](https://github.com/tuxevil/tuxevil-rotator/pkgs/container/tuxevil-rotator) for new deployments. The legacy image remains available as a frozen compatibility reference; see the [migration guide](https://github.com/tuxevil/tuxevil-rotator/blob/HEAD/docs/migrating-from-pi-antigravity-rotator.md).

Multi-account load balancing, per-model quota routing, account health scoring, access control with Virtual Keys, and cost auditing — via a single local endpoint that any agent can use. Even with a single account.

Originally built as a multi-account rotator for Google Antigravity. It now generalizes that rotation layer across free-tier LLM providers with per-account credentials: Google Antigravity, Ollama Cloud, OpenAI Codex, and OpenCode Zen, designed so new providers slot in without modifying core engine logic.

> **⚠️ WARNING:** Using this proxy may put connected accounts at risk of…
