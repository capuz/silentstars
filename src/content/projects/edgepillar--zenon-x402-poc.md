---
repo: "edgepillar/zenon-x402-poc"
name: "zenon-x402-poc"
description: "This experimental project explores how Zenon can serve as a settlement rail  for HTTP-native payments between AI agents, APIs, and autonomous  services."
readmeQualityOk: true
url: "https://github.com/edgepillar/zenon-x402-poc"
homepage: "https://zenon.network"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["x402", "x402-agent", "x402-api", "x402-demo", "x402-facilitator", "x402-payment", "x402-payments", "x402-protocol", "x402-services", "x402protocol"]
stars: 5
forks: 2
openIssues: 4
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T09:17:51Z"
lastCommitAt: "2026-10-19T09:13:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 59
maintainers: ["edgepillar"]
openGraphImageUrl: "https://opengraph.githubassets.com/12e4f522e1c63ce1850cc901e64038b1901b9efabc031a11cb52499abded0fd7/edgepillar/zenon-x402-poc"
---

# Zenon x402 Prototype

A research proof of concept that maps x402 v2 `exact` payments to payer-signed Zenon account blocks.

The buyer prepares and signs a normal Zenon `UserSend` account block without publishing it. The x402 payload carries that exact signed block. The facilitator validates it against the selected payment requirement, journals the attempt, publishes it, observes Momentum inclusion, and only then authorizes the protected resource.

This is not an official Zenon integration, not an official x402 network implementation, and not production software. Mock mode is the default. No stablecoin or production security guarantee is bundled.

## Current architecture status

The current `main` branch contains the v0.3 architecture checkpoint; this is not a v0.3 package or production release. The planner, wallet, Plasma, payment-mechanism, chain-profile, settlement-repository, and prepaid service-credit interfaces are additive design boundaries. They document intended ownership and separation but are not wired into the active transaction path.

Package semantic versioning is intentionally independent of architecture-checkpoint and payload-generation labels; those labels do not…
