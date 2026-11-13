---
repo: "hookdeck/mcp-events-bridge"
name: "mcp-events-bridge"
description: "Turn webhooks into MCP Events for AI agents, with the hosted Hookdeck Event Gateway receiving and delivering them. Sources include Resend, GitHub, Stripe, Slack and any signed webhook. Poll tools and a Claude Code plugin cover clients without MCP Events support."
readmeQualityOk: true
url: "https://github.com/hookdeck/mcp-events-bridge"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agents", "chatgpt", "event-gateway", "github-webhooks", "hookdeck", "mcp", "mcp-events", "mcp-server", "model-context-protocol", "resend"]
stars: 9
forks: 0
openIssues: 15
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-06T09:10:38Z"
lastCommitAt: "2026-11-13T18:36:14Z"
lastReleaseAt: "2026-10-28T13:31:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 85
undervaluedScore: 48
maintainers: ["leggetter"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1407013647/277ef9d4-696d-473c-8df3-9b5a3f1489ee"
---

# MCP Events bridge

Turn webhooks into [MCP Events](https://developers.openai.com/plugins/build/mcp-events), so AI agents can act the moment something happens: an email arrives, an issue is opened, a workflow fails. [Hookdeck Event Gateway](https://hookdeck.com) receives, verifies and delivers every event.

For example, an email arrives at a Resend address, and ChatGPT, subscribed through the bridge, acts on it:

## Why

MCP Events is an experimental MCP extension that lets an agent subscribe to events instead of polling for them, and ChatGPT supports it. But an agent can only subscribe to MCP servers that implement it, and almost none do yet, while nearly every service already sends webhooks.

The bridge closes that gap:

- **Webhooks become MCP Events.** Sources: Resend inbound email, GitHub, any of 163 Event Gateway source types (Stripe, Slack, Shopify and more), and webhooks from any HTTP sender, such as a service you've built, verified with HMAC, Standard Webhooks, Basic auth or an API key. Add others with `defineSource`.
- **Subscribers choose what wakes them.** Events have filters, such as an email's sender, or a GitHub repository and action.
- **Every event verified,…
