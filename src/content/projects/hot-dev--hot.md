---
repo: "hot-dev/hot"
name: "hot"
description: "Hot Dev: Hot Language and AI Workflow/Agents Platform"
readmeQualityOk: true
url: "https://github.com/hot-dev/hot"
homepage: "https://hot.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["ai", "ai-agents", "ai-memory", "automation", "event-driven", "language", "mcp", "mcp-server", "queues", "rag"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-29T20:57:28Z"
lastCommitAt: "2026-11-09T00:53:14Z"
lastReleaseAt: "2026-05-25T20:03:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["csummers"]
openGraphImageUrl: "https://opengraph.githubassets.com/22722ada2d76b8a0ca3d08fd52120167b82beebd651eb5f174e55b33c2984300/hot-dev/hot"
---

# Hot Dev

Hot Dev is an open source language, runtime, and set of services for event
handlers, schedules, AI agents, MCP tools, and long-running tasks. It includes
execution tracing, a local development runtime, and deployment through
`hot deploy`.

This repository contains the Hot compiler, VM, standard library, `hot` CLI,
API, web app, scheduler, event worker, task worker, and LSP server. Public Hot
packages are under `hot/pkg`, including `hot-std` and provider/tool integrations.

Hot Dev Cloud hosts Hot deployments. Its deployment infrastructure and private
operational tooling are outside this repository.

- Website: [hot.dev](https://hot.dev)
- Download: [hot.dev/download](https://hot.dev/download)
- Documentation: [hot.dev/docs](https://hot.dev/docs)
- License: [Apache-2.0](https://github.com/hot-dev/hot/blob/HEAD/LICENSE)

## Example

This example shows how Hot wires webhooks, events, schedules, and MCP tools with
the same `meta` mechanism:

```hot
::myapp ns
::http ::hot::http
::uri ::hot::uri

// Receive a webhook, then fan out through an event.
on-signup
meta {
    webhook: {service: "leads", path: "/signup"},
}
fn (request) {
    send("lead:new", request.body)
    {ok:…
