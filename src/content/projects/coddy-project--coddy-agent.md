---
repo: "coddy-project/coddy-agent"
name: "coddy-agent"
description: "General-purpose agent in one static Go binary: console TUI, ACP server for editors, OpenAI-compatible API with embedded web UI, Telegram gateway, cron scheduler, swarm relay, remote mode. Rules, skills, subagents, hooks, MCP, background tasks, long-term memory, context compaction. Any OpenAI-compatible provider, distroless-ready."
readmeQualityOk: true
url: "https://github.com/coddy-project/coddy-agent"
homepage: "https://coddy.dev"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["acp", "agent-client-protocol", "cli", "llm", "mcp", "openai", "skills", "ai-agent", "anthropic", "coding-agent"]
stars: 146
forks: 15
openIssues: 21
closedIssues: 62
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-03-23T06:37:12Z"
lastCommitAt: "2026-09-19T01:37:06Z"
lastReleaseAt: "2026-05-24T11:08:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 30
maintainers: ["EvilFreelancer"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1189273325/1ef3b3a1-c0f4-4737-a69d-098d0850adf6"
---

</p>

</p>

  <strong>A general-purpose agent in one static Go binary.</strong><br />
  A console TUI, an ACP server for editors, an OpenAI-compatible API with an embedded web UI, a Telegram gateway, a cron scheduler, a swarm relay for fleets of nodes and a remote mode, all over the same sessions.<br />
  ReAct loop, filesystem and shell tools, MCP, rules, skills, subagents, hooks, background tasks, long-term memory, context compaction and project trust for what arrives with a checkout.
</p>

| Desktop (1920×1080) | Mobile (390×844) |
|---|---|
|  |  |

Coddy is a **harness**: the same agent core is reachable from a terminal through the console TUI, from an editor over the [Agent Client Protocol](https://agentclientprotocol.com/), from a browser or any OpenAI client over HTTP, from Telegram through the messenger gateway, and from cron through the scheduler. Every surface shares the sessions under `~/.coddy`, so a conversation started in a chat is live in the browser and can be continued in either. It runs in `scratch` and distroless images with a read-only root filesystem, needs no runtime, and is built for fleets of containers as much as for one laptop.

## Install

```bash
curl…
