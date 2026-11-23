---
repo: "cramt/m365-copilot-proxy"
name: "m365-copilot-proxy"
description: "OpenAI-compatible proxy for Microsoft 365 Copilot — use the Copilot licence you already have as a backend for pi, openclaw and other coding agents. Prompt-emulated tool calling, no extra licence, no MCP."
readmeQualityOk: true
url: "https://github.com/cramt/m365-copilot-proxy"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [67, 29]
topics: ["coding-agent", "llm", "m365-copilot", "microsoft-copilot", "openai-compatible-api", "proxy", "reverse-engineering", "typescript"]
stars: 185
forks: 50
openIssues: 7
closedIssues: 48
watchers: 6
contributors: 16
recentReleases: 0
createdAt: "2026-03-26T21:28:59Z"
lastCommitAt: "2026-11-23T13:33:02Z"
lastReleaseAt: "2026-04-02T19:48:46Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 33
maintainers: ["cramt", "m365coder", "aldoeliacim"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb9776394bb043362eda8f9fcaefda202bb6ebfc516e7cf95ea3acc716e08e8d/cramt/m365-copilot-proxy"
---

# m365-copilot-proxy

Use Microsoft 365 Copilot as an LLM backend for OpenAI-compatible coding agents like [pi](https://pi.dev/) and [OpenClaw](https://docs.openclaw.ai/). Wraps M365 Copilot's WebSocket/SignalR API in an OpenAI-compatible interface with tool calling support.

> **Want the gory protocol details?** See [docs/m365-copilot-api.md](https://github.com/cramt/m365-copilot-proxy/blob/HEAD/docs/m365-copilot-api.md) — a full write-up of M365 Copilot's undocumented WebSocket API: auth, SignalR frames, tones/models, throttling, the "Disengaged" filter, and the Copilot Studio agent trick that makes tool calling work.

## How it works

M365 Copilot uses a SignalR WebSocket protocol, not the OpenAI API. This project translates between the two:

1. **Standalone proxy** — HTTP server with `/v1/chat/completions` and `/v1/models` endpoints. Works with any OpenAI-compatible client (pi, OpenClaw, etc.).
2. **OpenClaw plugin** — Config generator + setup CLI for OpenClaw's provider system.
