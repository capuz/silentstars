---
repo: "naughtygopher/webgo"
name: "webgo"
description: "A microframework to build web apps; with handler chaining, middleware support, and most of all; standard library compliant HTTP handlers(i.e. http.HandlerFunc)."
readmeQualityOk: true
url: "https://github.com/naughtygopher/webgo"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["golang", "go", "web-framework", "api-server", "api-rest", "middleware", "webframework", "multiplexer", "awesome-go", "router"]
stars: 309
forks: 34
openIssues: 1
closedIssues: 24
watchers: 11
contributors: 6
recentReleases: 0
createdAt: "2015-12-16T07:35:02Z"
lastCommitAt: "2026-11-13T18:34:39Z"
lastReleaseAt: "2018-10-09T11:32:59Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 23
maintainers: ["bnkamalesh", "hippi345", "bensynapse"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/48094950/a69b6180-a1a8-11ea-860f-32cc0caa3d5f"
fundingLinks: ["GITHUB:https://github.com/bnkamalesh"]
---

# WebGo v7

WebGo is a minimalistic router for [Go](https://golang.org) to build web applications (server side) with no 3rd party dependencies. WebGo will always be Go standard library compliant; with the HTTP handlers having the same signature as [http.HandlerFunc](https://golang.org/pkg/net/http/#HandlerFunc).

### Contents

1. [Router](https://github.com/naughtygopher/webgo#router)
2. [Handler chaining](https://github.com/naughtygopher/webgo#handler-chaining)
3. [Middleware](https://github.com/naughtygopher/webgo#middleware)
4. [Error handling](https://github.com/naughtygopher/webgo#error-handling)
5. [Helper functions](https://github.com/naughtygopher/webgo#helper-functions)
6. [HTTPS ready](https://github.com/naughtygopher/webgo#https-ready)
7. [Server timeouts](https://github.com/naughtygopher/webgo#server-timeouts)
8. [Graceful shutdown](https://github.com/naughtygopher/webgo#graceful-shutdown)
9. [Logging](https://github.com/naughtygopher/webgo#logging)
10. [Server-Sent Events](https://github.com/naughtygopher/webgo#server-sent-events)
11. [Usage](https://github.com/naughtygopher/webgo#usage)

## Router

Webgo has a simplistic, linear path matching router and supports…
