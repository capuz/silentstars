---
repo: "goncharik/hermes-mobile"
name: "hermes-mobile"
description: "Mobile companion for Hermes Agent"
readmeQualityOk: true
url: "https://github.com/goncharik/hermes-mobile"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 85
forks: 18
openIssues: 17
closedIssues: 68
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-06-09T15:24:28Z"
lastCommitAt: "2026-11-07T13:55:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 33
maintainers: ["goncharik", "netera-michael"]
openGraphImageUrl: "https://opengraph.githubassets.com/39ed492673636f54327c16a74b520559d47e78a2fba51a4cec86623c11190ef3/goncharik/hermes-mobile"
---

# Hermes Agent Mobile Companion

**Drive your self-hosted Hermes agent from your iPhone or iPad.**

Chat with sessions, watch the agent work in real time, and approve or clarify its
actions — all on the go, while the real runtime stays on your Mac or server.

**[Join the public TestFlight beta →](https://testflight.apple.com/join/SyHGvf9n)**

Native SwiftUI · [The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture) · no agent logic on the device

## What it does

Hermes Mobile is a thin remote client for a self-hosted
**[Hermes Agent](https://github.com/NousResearch/hermes-agent)**. The agent
keeps running on your machine; your iPhone or iPad is a window into it — so you can step
away from your desk and still keep your agent moving.

- **Connect once.** Enter your server URL and sign in the way your agent is configured:
  a username and password when the server runs gated auth (the recommended setup), your
  identity provider via OAuth (Nous Research or your own OIDC server — it opens in Safari,
  so your existing session and passkeys just work), or a static token
  (loopback/`--insecure`). The app detects which methods the server offers and…
