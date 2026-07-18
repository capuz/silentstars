---
repo: "tokencanopy/e2a"
name: "e2a"
description: "Authenticated email gateway for AI agents — SPF/DKIM verified inbound, HMAC-signed delivery, webhook + WebSocket fan-out, CLI + SDKs"
readmeQualityOk: true
url: "https://github.com/tokencanopy/e2a"
homepage: "https://e2a.dev"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [45, 33]
topics: ["ai-agents", "email", "email-api", "go", "hitl", "human-in-the-loop", "smtp", "webhook", "mail-gateway"]
stars: 174
forks: 16
openIssues: 14
closedIssues: 15
watchers: 0
contributors: 9
recentReleases: 6
createdAt: "2026-04-25T03:40:24Z"
lastCommitAt: "2026-07-18T05:48:24Z"
lastReleaseAt: "2026-06-30T22:14:34Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 32
maintainers: ["jiashuoz", "XueyanZhang", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfb3619cde447b4995df391ee7fba6d66d2dd29eca80b3af66a26b5d44570c50/tokencanopy/e2a"
discussionCount: 0
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/e2a-wordmark-dark.svg">
</picture>

### Give your AI agents a real, authenticated email address.

Receive inbound over **webhook · WebSocket · REST · MCP**. Send through an **HTTP API**. Every sender — human or agent — **identity-verified**.

[Hosted (e2a.dev)](https://e2a.dev) · [Quickstart](#quickstart) · [Concepts](#concepts) · [API](#api) · [SDKs](#sdks) · [MCP](#mcp-server) · [Deploy](#deployment) · [FAQ](#faq)

</div>

---

> [!IMPORTANT]
> **The `/v1` API and SDKs are contract-frozen release candidates.** GA begins only with an explicitly announced GA release tag; after that, the stable interface evolves additively. Existing `v1.0.x` application/cherry-pick tags predate the API freeze and are not `/v1` compatibility baselines. Pin your SDK versions and watch [Releases](https://github.com/tokencanopy/e2a/releases).

e2a is an **authenticated email gateway for AI agents**. It receives inbound mail, verifies the sender (SPF/DKIM), and delivers it to your agent as structured data with HMAC-signed `X-E2A-Auth-*` headers — over whichever channel fits your runtime. Outbound goes back out through an HTTP API,…
