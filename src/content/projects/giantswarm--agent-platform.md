---
repo: "giantswarm/agent-platform"
name: "agent-platform"
description: "Giant Swarm Agent Platform - MCP gateway deploy unit (app-of-apps meta-package)"
readmeQualityOk: true
url: "https://github.com/giantswarm/agent-platform"
language: "Python"
languages: ["Python", "Makefile"]
languagePcts: [50, 28]
stars: 8
forks: 1
openIssues: 29
closedIssues: 243
watchers: 0
contributors: 20
recentReleases: 0
createdAt: "2026-05-19T21:10:44Z"
lastCommitAt: "2026-10-13T10:57:42Z"
lastReleaseAt: "2026-06-05T10:28:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 52
maintainers: ["teemow", "QuentinBisson", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/400204a7dc2ebe2dca696e4d19e1bd5d49270d601a3a9ab8ab0a72a1b0878873/giantswarm/agent-platform"
---

# agent-platform

The Agent Platform is Giant Swarm's MCP gateway deploy unit. It ships [muster](https://github.com/giantswarm/muster) (MCP gateway / aggregator) and [agentgateway](https://github.com/agentgateway/agentgateway) (MCP data plane) together, plus the consumer-side `Gateway`, `AgentgatewayParameters`, and network policies that wire them up.

Owner: team-bumblebee.

This repo publishes **two** charts:

| Chart | What it is |
|---|---|
| `agent-platform` | the **meta-package** — an app-of-apps that renders each component and the connectivity layer as Flux `OCIRepository` + `HelmRelease`. The single thing you install. |
| `agent-platform-connectivity` | the consumer-side **wiring** the meta-package renders as a child release: the public muster route, the agentgateway data-plane `Gateway` + `AgentgatewayParameters` + `HTTPRoute`s + `BackendTrafficPolicy`s, the `NetworkPolicy`s, the kagent controller `GRPCRoute` with its JWT policy, the klaus-gateway/model-manager/agent-manager routes, the admin-owned kagent catalog (`ModelConfig`s and operator `RemoteMCPServer`s at `kagent.dev/v1alpha3`; the per-agent muster `RemoteMCPServer` is the agent chart's), the `kagent-flux` tenant…
