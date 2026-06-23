---
repo: "dank/rlapi"
name: "rlapi"
description: "Reverse engineered Rocket League internal HTTP & WebSocket API"
url: "https://github.com/dank/rlapi"
homepage: "https://rlshop.gg"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["rocketleague"]
stars: 49
forks: 3
openIssues: 5
closedIssues: 4
watchers: 3
contributors: 2
recentReleases: 2
createdAt: "2025-08-30T20:33:19Z"
lastCommitAt: "2026-06-23T23:28:52Z"
lastReleaseAt: "2026-06-23T23:29:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 32
maintainers: ["dank", "github-actions[bot]", "ktiedt"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6581bf516d7ce99fe2fd6326c59e922f2bada465811da6e9fd1c01bacc951a1/dank/rlapi"
---

# _rlapi_
![GitHub Release](https://img.shields.io/github/v/tag/dank/rlapi)
![GitHub License](https://img.shields.io/github/license/dank/rlapi)

### [ITEM SHOP DEMO](https://rlshop.gg)

_rlapi_ is a reverse engineered collection of Rocket League's internal APIs with a Go SDK. It provides a full end-to-end flow, from authentication to accessing the item shop, player stats, inventory, match history, replays, and more. This repository also contains resources for reverse engineering and analyzing Rocket League network traffic, serving as a foundation for further exploration. Not all endpoints are fully documented—do not ask about specific ones, as I probably don't know.

### Contributions
All contributions are welcome! If you discover new endpoints, extend the Go SDK, or add additional functionality, please submit a PR.

## Getting Started
Refer to the [godoc](https://pkg.go.dev/github.com/dank/rlapi) for detailed documentation on the Go SDK.

Comprehensive examples are available in the [`examples`](examples) directory.

### Usage
```bash
go get github.com/dank/rlapi
```

### Authentication
Rocket League authentication always goes through [Epic Online Services…
