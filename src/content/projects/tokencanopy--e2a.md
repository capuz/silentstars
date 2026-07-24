---
repo: "tokencanopy/e2a"
name: "e2a"
description: "Authenticated email gateway for AI agents — SPF/DKIM verified inbound, HMAC-signed delivery, webhook + WebSocket fan-out, CLI + SDKs"
readmeQualityOk: true
url: "https://github.com/tokencanopy/e2a"
homepage: "https://e2a.dev"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [47, 32]
topics: ["ai-agents", "email", "email-api", "go", "hitl", "human-in-the-loop", "smtp", "webhook", "mail-gateway"]
stars: 176
forks: 17
openIssues: 17
closedIssues: 16
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-04-25T03:40:24Z"
lastCommitAt: "2026-07-24T06:07:41Z"
lastReleaseAt: "2026-07-24T05:58:28Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 32
maintainers: ["jiashuoz", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/6818527989bedbc5058f4da9683f23ad0c6fa3b9c04e2b0d1a757cf8988fa379/tokencanopy/e2a"
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
> **The `/v1` API and SDKs are release candidates and are not yet stable. GA is planned by July 31, 2026; stable compatibility guarantees begin only with the explicitly announced GA release tag.** Existing `v1.0.x` application/cherry-pick tags predate the API freeze and are not `/v1` compatibility baselines. Pin your SDK versions and watch [Releases](https://github.com/tokencanopy/e2a/releases).

e2a is an **authenticated email gateway for AI agents**. It receives inbound mail, evaluates SPF, every DKIM signature, and DMARC, and delivers structured authentication evidence over whichever channel fits your runtime. Outbound goes back out through an HTTP API, with an…
