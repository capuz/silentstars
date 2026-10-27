---
repo: "JuliaServices/CloudBase.jl"
name: "CloudBase.jl"
description: "A simple, yet comprehensive foundation for interacting with common cloud providers in Julia (GCP, Azure, AWS)."
readmeQualityOk: true
url: "https://github.com/JuliaServices/CloudBase.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 20
forks: 6
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2022-07-28T23:19:57Z"
lastCommitAt: "2026-10-27T09:16:50Z"
lastReleaseAt: "2022-11-21T19:08:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 53
maintainers: ["quinnj"]
openGraphImageUrl: "https://opengraph.githubassets.com/462254030514f58117a77a1536ba3aa70f35432b14be495df63ecb4dc1a6fd2e/JuliaServices/CloudBase.jl"
discussionCount: 0
---

# CloudBase

*A simple, yet comprehensive foundation for interacting with common cloud providers in Julia.*

Current provider status on `main`:
- AWS: mature
- Azure: mature
- GCP: request client supports explicit bearer tokens, `service_account`, `authorized_user`, and file/url-based `external_account` credentials, plus metadata-server credentials and Cloud Storage XML HMAC interop via `AWS4-HMAC-SHA256`

## Installation

The package is registered in the [`General`](https://github.com/JuliaRegistries/General) registry and so can be installed at the REPL with `] add CloudBase`.

## Documentation

- [**STABLE**][docs-stable-url] &mdash; **most recently tagged version of the documentation.**
- [**LATEST**][docs-latest-url] &mdash; *in-development version of the documentation.*

## Project Status

The package is tested against Julia 1.10, the current stable release, and nightly on Linux.
Default CI stays fully local/mock-based. There is also an opt-in live GCP smoke test in `test/runtests.jl` that exercises one real object write/read/delete round-trip against an existing bucket.

Live test environment:
- `CLOUDBASE_RUN_GCP_LIVE_TESTS=1`
- `CLOUDBASE_GCP_LIVE_BUCKET=<existing-bucket>`…
