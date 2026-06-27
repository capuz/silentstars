---
repo: "coo-quack/sensitive-canary"
name: "sensitive-canary"
description: "Claude Code hooks that guard secrets and PII before they reach the Anthropic API"
url: "https://github.com/coo-quack/sensitive-canary"
homepage: "https://coo-quack.github.io/sensitive-canary/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["claude-code", "hooks", "pii", "secrets", "security", "ai-tools"]
stars: 19
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-22T06:45:49Z"
lastCommitAt: "2026-06-27T06:26:43Z"
lastReleaseAt: "2026-03-12T09:29:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 35
maintainers: ["chataclaw", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/62c7eb6020f01e2e2f3e06244d456d60a579c23ed9e9cd3da491693278b76762/coo-quack/sensitive-canary"
---

# Sensitive Canary

A security plugin that prevents unintended data leaks from Claude Code. Automatically detects and blocks secrets and PII — in prompts, file reads, and command executions — before they are sent to the Anthropic API.

No proxy server. No background process. Native Claude Code hooks only.

📖 **[Documentation](https://coo-quack.github.io/sensitive-canary/)** — Installation guide, detection rules reference, and allow tag details.

---

## Why sensitive-canary?

Claude Code is a powerful development tool, but file reads and command executions can inadvertently send secrets and personal information to the Anthropic API. API keys in `.env` files, tokens embedded in config files, credentials pasted into the terminal — once sent to the API, they leave your machine.

**sensitive-canary intercepts them before they are sent, preventing unintended data leaks.**

| Without sensitive-canary | With sensitive-canary |
|--------------------------|----------------------|
| `cat .env` → full contents sent to Claude ❌ | Blocked by name before Claude reads it ✅ |
| Paste `AKIAIOSFODNN7EXAMPLE` in prompt ❌ | Blocked before the API call is made ✅ |
| Tool result contains…
