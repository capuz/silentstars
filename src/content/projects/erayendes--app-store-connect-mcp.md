---
repo: "erayendes/app-store-connect-mcp"
name: "app-store-connect-mcp"
description: "Heimdall — MCP server for the Apple App Store Connect API & App Store Server API (StoreKit 2). 982 tools from Apple's official OpenAPI spec, AI review triage and reply drafting, confirm-before-write safety. Works with Claude, Codex, Cursor, and any MCP client."
readmeQualityOk: true
url: "https://github.com/erayendes/app-store-connect-mcp"
homepage: "https://npmjs.com/package/@erayendes/asc-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["app-store-connect", "apple", "claude", "ios", "mcp", "model-context-protocol", "storekit", "testflight", "app-store-server-api", "appstoreconnect"]
stars: 43
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-07-19T14:37:40Z"
lastCommitAt: "2026-07-28T15:00:40Z"
lastReleaseAt: "2026-07-28T06:05:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 39
maintainers: ["erayendes"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1305780550/9d5cf447-7e56-4da1-9f22-19c2c184ce6f"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/erayendes"]
---

# Heimdall — App Store Connect MCP

🇬🇧 [English](#english) · 🇹🇷 [Türkçe](#türkçe)

## English

**Manage your entire App Store Connect account from your AI client.**
One MCP for all of it: apps and metadata, versions and phased releases, TestFlight, subscriptions and in-app purchases, pricing, reviews, Game Center, Xcode Cloud, provisioning, webhooks, and sales and finance reports.

> - *"Summarise this week's 1-star reviews and draft replies."*
> - *"Which builds are stuck in review?"*
> - *"Raise this subscription's price in every territory."*

Heimdall is an MCP server for the **App Store Connect API** and the **App Store Server API (StoreKit 2)**; every tool is generated from Apple's own OpenAPI specification — **982 operations across 17 domains**. Where other servers wrap a hand-picked slice of the API, Heimdall gives you all of it. And anything that changes your data asks you to confirm first.

### Quick start

```bash
npx -y @erayendes/asc-mcp setup
```

The setup wizard collects your API key once, stores it securely, and registers the profiles you choose. Full walkthrough in the [Guide](https://github.com/erayendes/app-store-connect-mcp/blob/HEAD/docs/GUIDE.md).

>…
