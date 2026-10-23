---
repo: "elliottech/lighter-go"
name: "lighter-go"
description: "Public Go SDK for Lighter"
readmeQualityOk: true
url: "https://github.com/elliottech/lighter-go"
language: "HTML"
languages: ["HTML"]
languagePcts: [96]
stars: 95
forks: 71
openIssues: 7
closedIssues: 10
watchers: 2
contributors: 17
recentReleases: 0
createdAt: "2025-04-17T13:13:33Z"
lastCommitAt: "2026-10-23T09:33:08Z"
lastReleaseAt: "2026-03-09T18:00:46Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 77
undervaluedScore: 38
maintainers: ["mihaimarcu2004", "rturtu", "lavrric"]
openGraphImageUrl: "https://opengraph.githubassets.com/5dc8981d1e0f8a6398e598d15e4d8681bb6024ba046b7a090cb4d8319b7da0c7/elliottech/lighter-go"
---

# lighter-go

This repository serves as the reference implementation of signing & hashing of Lighter transactions.
The sharedlib is compiled for a variety of platforms.
- macOS (darwin) dynamic library (.dylib) for arm architecture (M processor, not Intel)
- linux shared object (.so) for both amd64 and arm architectures
- windows .ddl (dynamic-link library) for amd64 architecture

The go SDK implements just the core signing, as well as a small HTTP client so that users can:
- not specify the nonce of the transaction (this will result in an HTTP call, so beware)
- check that a client was initialized correctly, by verifying that the given API key matches the one on the server 

The [Python SDK](https://github.com/elliottech/lighter-python) offers support for HTTP and WebSocket functionality as well as [examples](https://github.com/elliottech/lighter-python/tree/main/examples) on how to generate the API keys, how to create and cancel orders, generate AUTH tokens for various HTTP/WS endpoints which require them.       

All generated shared libraries follow the naming convention `lighter_signer_{os}_{arch}` where os is linux/windows/darwin and arch is amd64(x86) or arm64.\
The build &…
