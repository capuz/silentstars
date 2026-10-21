---
repo: "basecamp/basecamp-sdk"
name: "basecamp-sdk"
description: "Basecamp software dev kit"
readmeQualityOk: true
url: "https://github.com/basecamp/basecamp-sdk"
homepage: "https://basecamp.com/sdk"
language: "Go"
languages: ["Go"]
languagePcts: [25]
topics: ["basecamp"]
stars: 53
forks: 11
openIssues: 43
closedIssues: 157
watchers: 3
contributors: 31
recentReleases: 0
createdAt: "2026-01-25T20:54:57Z"
lastCommitAt: "2026-10-21T20:00:56Z"
lastReleaseAt: "2026-03-26T04:52:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 45
maintainers: ["jeremy", "dependabot[bot]", "robzolkos"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ddc44d03636e7b3f288bd495f0a4ba24bbe7e8deed7b91d2d9966d325f42f82/basecamp/basecamp-sdk"
discussionCount: 3
---

# <img src="assets/basecamp-badge.svg" height="28" alt="Basecamp"> Basecamp SDK

Official [Basecamp](https://basecamp.com) [API](https://github.com/basecamp/bc3-api) clients, runtimes, and software development kits for Go, Ruby, TypeScript, Swift, Kotlin, Python, and Rust.

OpenAPI 3.1 spec included.

**Upgrading?** Read [MIGRATING.md](https://github.com/basecamp/basecamp-sdk/blob/HEAD/MIGRATING.md) *before* you bump the version. v0.14.0 breaks all six SDKs: `ListUploadVersions` now returns version events instead of uploads — the four typed SDKs catch that at compile time, Ruby and Python just start seeing different keys — and every 507 now reports the new `limit_exceeded` code instead of a retryable `api_error`, which silently reroutes any error handling that branches on the old code. Coming from v0.12.0 or earlier? v0.13.0's section still applies, and 61 of its breaks survive a clean build.

## Languages

| Language | Path | Status | Package |
|----------|------|--------|---------|
| [Go](https://github.com/basecamp/basecamp-sdk/blob/HEAD/go/) | `go/` | Active | `github.com/basecamp/basecamp-sdk/go` |
| [Ruby](https://github.com/basecamp/basecamp-sdk/blob/HEAD/ruby/) | `ruby/` |…
