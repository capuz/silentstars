---
repo: "MarketDataApp/sdk-go"
name: "sdk-go"
description: "Official Go SDK for the Market Data API. Context-first access to real-time and historical stock, option, fund, and market-status data. Standard library only; requires Go 1.22+."
readmeQualityOk: true
url: "https://github.com/MarketDataApp/sdk-go"
homepage: "https://www.marketdata.app/docs/sdk/go"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "golang", "golang-library", "golang-package", "options", "options-api", "options-pricing", "options-trading", "rest-api", "restful-api"]
stars: 10
forks: 3
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2023-11-22T19:02:38Z"
lastCommitAt: "2026-11-02T13:38:39Z"
lastReleaseAt: "2026-09-02T16:45:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 68
maintainers: ["MarketDataApp", "MarketDataDev03", "marketdata-docs-sync[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/469d3c22f7ad8486327c3d52c440ea496d21aa2178dd826de54a6c6c26b8de5a/MarketDataApp/sdk-go"
---

# Market Data Go SDK v2
### Access Financial Data with Ease

> This is the official Go SDK for [Market Data](https://www.marketdata.app/). It provides developers with a powerful, easy-to-use interface to obtain real-time and historical financial data. Ideal for building financial applications, trading bots, and investment strategies.

#### Connect With The Market Data Community

## Features

- **Idiomatic Go** - Follows Go best practices and conventions (service structs, `context` first, `(T, *Response, error)` returns — like `google/go-github`)
- **Compile-time parameter safety** - Mutually-exclusive parameters are *unrepresentable*: illegal combinations (e.g. a date range plus a countback) do not compile. See [ADR-017](https://github.com/MarketDataApp/sdk-go/blob/HEAD/docs/adr/ADR-017-compile-time-exclusivity.md).
- **Context Support** - All methods accept `context.Context` for cancellation
- **Functional Options** - Clean, extensible configuration with sealed-union values
- **Automatic Retries** - Exponential backoff for transient errors
- **Rate Limit Tracking** - Proactive rate limit management
- **Hardened** - Untrusted symbols safely encoded; token never sent in cleartext…
