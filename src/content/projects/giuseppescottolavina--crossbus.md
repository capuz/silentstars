---
repo: "GiuseppeScottoLavina/crossbus"
name: "crossbus"
description: "Unified messaging for browser applications"
readmeQualityOk: true
url: "https://github.com/GiuseppeScottoLavina/crossbus"
homepage: "https://giuseppescottolavina.github.io/crossbus/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["ai-agents", "broadcast-channel", "browser", "cross-origin", "event-emitter", "iframe", "javascript", "messaging", "micro-frontends", "postmessage"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-02-02T09:37:32Z"
lastCommitAt: "2026-11-15T11:20:45Z"
lastReleaseAt: "2026-11-15T10:20:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 64
maintainers: ["GiuseppeScottoLavina", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aaa932010c6b05be6a03f6a3fc994b1ba47d61ed436d2d7f40b981375ab363a9/GiuseppeScottoLavina/crossbus"
---

# CrossBus

**Signals, RPC and bounded streams between browser windows, iframes, workers, tabs and native WebViews.**

You get one messaging API across postMessage, MessageChannel, BroadcastChannel, SharedWorker, ServiceWorker, WebSocket and WKWebView/AndroidX bridges. CrossBus requires explicit origin allowlists, binds each peer identity to its channel and enforces payload and request budgets. The npm package has no runtime dependencies and ships ESM, CommonJS and TypeScript declarations.

[Documentation](https://giuseppescottolavina.github.io/crossbus/) · [API](https://github.com/GiuseppeScottoLavina/crossbus/blob/HEAD/docs/API.md) · [Getting started](https://github.com/GiuseppeScottoLavina/crossbus/blob/HEAD/docs/GETTING_STARTED.md) · [Security](https://github.com/GiuseppeScottoLavina/crossbus/blob/HEAD/SECURITY.md) · [Benchmarks](https://github.com/GiuseppeScottoLavina/crossbus/blob/HEAD/docs/BENCHMARKS.md) · [Changelog](https://github.com/GiuseppeScottoLavina/crossbus/blob/HEAD/CHANGELOG.md)

## Highlights

- **One API, seven transports.** `request()`, `signal()` and `on()` work the same way over windows, iframes, workers, tabs, servers and native WebViews.
- **Explicit trust…
