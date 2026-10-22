---
repo: "flightdeckhq/flightdeck"
name: "flightdeck"
description: "Observability and control plane for AI agents."
readmeQualityOk: true
url: "https://github.com/flightdeckhq/flightdeck"
homepage: "https://flightdeck-hq.com"
language: "TypeScript"
languages: ["TypeScript", "Python", "Go"]
languagePcts: [38, 35, 21]
topics: ["agent-observability", "ai-agents", "claude-code", "control-plane", "llm", "observability"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-04-07T08:13:31Z"
lastCommitAt: "2026-10-22T08:52:16Z"
lastReleaseAt: "2026-08-30T05:23:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 27
maintainers: ["pykul"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1203634173/8489b146-0c47-49e2-8271-1d0fe64c8380"
---

---

Flightdeck is a self-hosted observability and control plane for production and coding agents.

Every LLM call, MCP event, and tool call your agents make streams to the dashboard as it happens, surfaced as a per-agent timeline and as a live fleet-wide feed.

Set token budgets, MCP allow/block rules, and live directives on your production agents.

Coding agents attach via the Claude Code plugin in this repo.

Production agents add the `flightdeck-sensor` Python package to their entrypoint - `init()` + `patch()`, no other code changes.

Built and maintained by [Omri Arnon](https://github.com/pykul) ([LinkedIn](https://www.linkedin.com/in/omriarnon/)).

---

## Quickstart

Prerequisites: Docker Engine 28+ with Compose v2. Python 3.10+ for the sensor path; Claude Code for the plugin path.

Start the stack:

```bash
git clone https://github.com/flightdeckhq/flightdeck
cd flightdeck
make dev
```

Dashboard at http://localhost:4000. The dev stack seeds a test token `tok_dev` automatically.

### Coding agents (Claude Code)

Launch Claude Code, then install the plugin from this repo's marketplace inside the REPL:

```text
/plugin marketplace add flightdeckhq/flightdeck
/plugin install…
