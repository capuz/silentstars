---
repo: "praxis-proxy/grid"
name: "grid"
description: "AI Grid Network"
readmeQualityOk: true
url: "https://github.com/praxis-proxy/grid"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["rust", "networking", "ai", "multi-cluster", "distributed-systems", "agentic", "inference"]
stars: 13
forks: 34
openIssues: 63
closedIssues: 141
watchers: 0
contributors: 24
recentReleases: 7
createdAt: "2026-05-26T12:38:22Z"
lastCommitAt: "2026-11-06T13:20:08Z"
lastReleaseAt: "2026-10-29T14:18:40Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 92
undervaluedScore: 65
maintainers: ["hexfusion", "evacchi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f20385afa5b0bfa6ebb5702d25baf302917cd51360d9e79e47cde3547b6dff2a/praxis-proxy/grid"
---

# AI Grid Network (AGN)

AI Grid Network (AGN) connects inference providers across Kubernetes clusters,
cloud services, and external APIs. Its operator discovers participating sites,
tracks provider availability, and publishes routing state for [Praxis AI]
gateways. Gateways select a provider for each request from that local state.

AGN is a technical preview. Start with the [scope and limitations] before
choosing a topology or planning an upgrade. You supply the clusters, inference
backends, credentials, gateway deployments, and connectivity between sites.

[Praxis AI]: https://github.com/praxis-proxy/ai
[scope and limitations]: docs/technical-preview-scope.md

## Architecture

The operator watches Kubernetes custom resources and exchanges membership and
provider state with peer operators over SWIM. For Praxis AI gateways, it
publishes a routing overlay in a ConfigMap. The `overlay-sync` sidecar watches
that ConfigMap and delivers a file that the Praxis AI gateway can reload
without restarting.

For the project-owned `grid-gateway`, cross-site routing uses a separate
serving ConfigMap. With `praxisConfig.render.gridServing.enabled`, the chart mounts this file and
sets…
