---
repo: "lexfrei/cloudflare-tunnel-gateway-controller"
name: "cloudflare-tunnel-gateway-controller"
description: "Kubernetes controller for Cloudflare Tunnel Gateway"
readmeQualityOk: true
url: "https://github.com/lexfrei/cloudflare-tunnel-gateway-controller"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 33
forks: 9
openIssues: 20
closedIssues: 157
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2025-11-23T11:31:36Z"
lastCommitAt: "2026-08-14T05:15:48Z"
lastReleaseAt: "2025-11-28T14:15:48Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 49
maintainers: ["renovate[bot]", "lexfrei", "kernelpanic888"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bf50bd5610073e91c2a4a459a087d6db2a7261d5f125a3caa0386e46d06a1a0/lexfrei/cloudflare-tunnel-gateway-controller"
fundingLinks: ["GITHUB:https://github.com/lexfrei"]
discussionCount: 0
---

# Cloudflare Tunnel Gateway Controller

Kubernetes controller implementing Gateway API for Cloudflare Tunnel.

Expose in-cluster services through a Cloudflare Tunnel using standard Gateway API resources (Gateway, HTTPRoute, GRPCRoute), with no public load balancer or inbound firewall rule.

## Features

- Standard Gateway API: GatewayClass, Gateway, HTTPRoute, GRPCRoute, ListenerSet
- In-process L7 reverse proxy embeds the cloudflared transport — a single data plane handles routing and tunnel egress
- Hot reload of routing configuration (no cloudflared restart on route changes)
- Path matching (prefix, exact, regex), header / query-parameter / HTTP-method matching
- Request and response header modification, URL rewrite, request redirect, request mirror
- Weighted traffic splitting across backends
- HTTPRoute CORS filter
- Cross-namespace backend references gated by ReferenceGrant
- Backend TLS (`BackendTLSPolicy`) and backend WebSocket via `appProtocol`
- Multi-tenant isolation: per-namespace hostname-ownership enforcement (admission policy + controller), route-collision detection, and optional per-Gateway data planes (a dedicated proxy and tunnel per Gateway)
- Request-level…
