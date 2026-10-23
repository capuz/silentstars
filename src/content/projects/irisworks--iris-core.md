---
repo: "irisworks/iris-core"
name: "iris-core"
description: "A self-hosted Slack/Telegram agent that extends itself by writing and deploying its own code at runtime."
readmeQualityOk: true
url: "https://github.com/irisworks/iris-core"
homepage: "https://irisflow.dev"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [52, 31]
topics: ["ai-agent", "firecracker", "llm-orchestration", "self-hosted", "slack-bot", "telegram-bot"]
stars: 13
forks: 3
openIssues: 8
closedIssues: 56
watchers: 0
contributors: 7
recentReleases: 7
createdAt: "2026-05-06T11:15:07Z"
lastCommitAt: "2026-10-23T08:47:17Z"
lastReleaseAt: "2026-08-19T10:37:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 60
maintainers: ["katrohit", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af092eeb7312840d3240326694dac530369ae7de65c618d54ccde5c49fd248ff/irisworks/iris-core"
discussionCount: 2
---

# Iris

**An AI operator that never clocks out.** Message it on Slack, Telegram, or its
built-in web UI and it
runs commands, writes its own skills on the fly, provisions infrastructure, and
spins up a fleet of specialized sub-agents — each one optionally sealed inside
its own Firecracker microVM — to get the work done.

One `curl | bash` on any Linux box turns it into a self-hosted, self-healing
AI teammate — no cloud account, no Kubernetes, no vendor lock-in required.

- **Self-extending** — Iris writes and hot-reloads her own skills; no redeploy to teach her something new
- **Fleet, not chatbot** — spins up specialized sub-agents on demand, each talking over an HTTP bridge
- **Defense in depth, opt-in** — Docker by default; flip a flag and every sub-agent runs in its own Firecracker microVM with a hardware KVM boundary
- **Provider-agnostic** — Anthropic, OpenAI, Azure AI Foundry, or AWS Bedrock, switchable via env vars
- **Three transports, one engine** — Slack, Telegram, and an optional built-in web UI (thread sidebar, live tool-call cards, attachments); adding a transport requires zero engine edits
- **MCP servers** — external toolsets (stdio or remote HTTP) plug in via…
