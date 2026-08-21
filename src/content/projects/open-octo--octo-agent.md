---
repo: "open-octo/octo-agent"
name: "octo-agent"
description: "Private, self-hosted AI agent — your models and data stay on your machine. A feature-rich coding + assistant toolset across eight interfaces (CLI, Web, desktop, IM, VS Code, Obsidian, SDK, Mobile), all in one fast, zero-dependency Go binary."
readmeQualityOk: true
url: "https://github.com/open-octo/octo-agent"
homepage: "https://octo-agent.dev/"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [61, 21]
topics: ["agent", "ai-agent", "anthropic", "chatbot", "claude", "cli", "golang", "llm", "openai", "tool-use"]
stars: 93
forks: 16
openIssues: 4
closedIssues: 141
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-05-25T03:09:29Z"
lastCommitAt: "2026-08-21T04:11:47Z"
lastReleaseAt: "2026-06-07T03:59:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 99
undervaluedScore: 41
maintainers: ["Leihb", "dependabot[bot]", "linauror"]
openGraphImageUrl: "https://opengraph.githubassets.com/add2e88426e352f58d1427f1d9cdb48513c7f660f227c4e28372090019528030/open-octo/octo-agent"
discussionCount: 1
---

</p>

# octo-agent

**An open-source, single-binary, self-hosted AI agent.**

A coding agent on par with Claude Code; as a personal assistant, lighter than OpenClaw — one MIT-licensed Go binary, no Node / Python / Ruby, running on **any model** (DeepSeek, Kimi, Anthropic, OpenAI, or anything compatible), with the server and your data staying on your own machine.

[Website](https://octo-agent.dev) · [简体中文](https://github.com/open-octo/octo-agent/blob/HEAD/README_CN.md) · [Install Guide](https://octo-agent.dev/docs/getting-started/install/) · [Documentation](https://octo-agent.dev/docs/) · [Community](#community)

If you find octo useful, give it a ⭐ on GitHub!

</div>

## Why octo

octo isn't another agent framework you have to "raise." Projects like OpenClaw or Hermes often need environment tuning, rule writing, and skill configuration before the agent runs smoothly. octo sits closer to Codex or WorkBuddy: **download and use, user-friendly**, while keeping model choice, data ownership, and the runtime firmly in your hands.

```bash
curl -fsSL https://octo-agent.dev/install.sh | sh     # single binary — no Node / Ruby / Python
octo config…
