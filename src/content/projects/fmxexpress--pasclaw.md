---
repo: "FMXExpress/PasClaw"
name: "PasClaw"
description: "Ultra-lightweight native AI agent framework written entirely in Object Pascal for Delphi and Free Pascal, designed for performance, portability, and extensibility."
readmeQualityOk: true
url: "https://github.com/FMXExpress/PasClaw"
homepage: "https://pasclaw.dev/"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [91]
topics: ["agentic-ai", "ai", "delphi", "object-pascal", "openclaw", "agent", "fpc", "openclaw-alternative", "windows", "ai-agent"]
stars: 45
forks: 7
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 2
recentReleases: 1
createdAt: "2026-05-26T19:02:07Z"
lastCommitAt: "2026-08-10T05:07:28Z"
lastReleaseAt: "2026-07-17T13:34:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 43
maintainers: ["claude", "FMXExpress"]
openGraphImageUrl: "https://opengraph.githubassets.com/dedfb4c5ae3506bbfeb94c131f16ef310de525aa606cdc9b44b68551b01a9d5e/FMXExpress/PasClaw"
---

# PasClaw

PasClaw is an ultra-lightweight personal AI agent written in Delphi Object Pascal. It is a Delphi/FPC port inspired by picoclaw, with a command-line assistant, tool calling, MCP integration, an HTTP gateway, an OpenAI-compatible API surface, a small embedded web UI, scheduled tasks, skills, and channel integrations.

The main program lives at `src/pasclaw/PasClaw.dpr`. It initializes terminal color handling, prints the banner, applies timezone configuration, and dispatches into the command tree implemented under `src/cmd/`.

## Quick start

**Docker** — the fastest way to try PasClaw without building anything locally:

```sh
docker pull fmxexpress/pasclaw

# HTTP gateway + web UI on http://localhost:8088 -- onboard right in the browser.
# The image's default command already runs the gateway, so no arguments needed.
docker run -p 8088:8088 fmxexpress/pasclaw

# Interactive CLI agent (run `pasclaw onboard` inside, or set a provider key)
docker run -it fmxexpress/pasclaw agent
```

The image's entrypoint runs `pasclaw` for you, so pass only the subcommand (`agent`, `serve`, …) — or nothing, which starts the gateway. The gateway's web UI has a first-boot onboarding wizard,…
