---
repo: "longcw/home-assistant-mcp-agent"
name: "home-assistant-mcp-agent"
description: "LiveKit Agent integrated with MCP server of Home Assistant"
readmeQualityOk: true
url: "https://github.com/longcw/home-assistant-mcp-agent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 22
forks: 8
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-04-20T15:29:26Z"
lastCommitAt: "2026-07-19T06:12:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 35
maintainers: ["longcw"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1fbfe96273ed4296140922ba2db1cbfda2b27ef8129227d6f772f9339b85458/longcw/home-assistant-mcp-agent"
---

# Home Assistant Voice Agent (LiveKit)

A voice assistant for [Home Assistant](https://www.home-assistant.io/), built on
[LiveKit Agents](https://github.com/livekit/agents). The agent connects to Home
Assistant's native [MCP Server](https://www.home-assistant.io/integrations/mcp_server/)
using the framework's built-in `MCPToolset`, and a push-to-talk web UI (based on
[agent-starter-react](https://github.com/livekit-examples/agent-starter-react)) lets you
talk to it from the browser.

- **Native MCP** — Home Assistant tools (`HassTurnOn`, `HassLightSet`, `GetLiveContext`, …)
  are exposed to the LLM directly through LiveKit's `MCPToolset`. No custom MCP client code.
- **LiveKit Inference** — STT, LLM, and TTS are served by LiveKit's inference gateway; no
  per-provider API keys required.
- **Push-to-talk** — the agent uses manual turn detection; the UI drives it with
  `start_turn` / `end_turn` / `cancel_turn` RPCs.
- **Helper tools** — a few function tools (`get_areas`, `get_device_domains`, `get_devices`,
  `get_environment_info`) pre-process `GetLiveContext` into compact, area/domain-filtered
  views so the LLM isn't flooded with the full home state.

## Structure

```
.
├──…
