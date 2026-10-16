---
repo: "jackielii/structpages"
name: "structpages"
description: "Organise Go http routes using structs"
readmeQualityOk: true
url: "https://github.com/jackielii/structpages"
homepage: "https://jackielii.github.io/structpages/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "htmx", "routing", "templ", "urlfor", "gsx"]
stars: 24
forks: 0
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-05-30T10:17:41Z"
lastCommitAt: "2026-10-16T08:26:58Z"
lastReleaseAt: "2025-09-29T10:54:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 45
maintainers: ["jackielii"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b1c53f81f0ab255db4f28002cf3bd712ecfdedc462a229949d5c820a7a254bd/jackielii/structpages"
---

# structpages

**Documentation:** <https://jackielii.github.io/structpages/>

Struct Pages provides a way to define routing using struct tags and methods. It integrates with Go's `http.ServeMux`, allowing you to quickly build web applications with minimal boilerplate.

**Status**: **Beta** - The API has settled and the library is battle-tested in production, carrying medium-to-large applications. Remaining breaking changes before v1 will be rare and called out in release notes.

## Features

- **Struct-based routing** - Define routes using struct tags
- **Templ support** - Built-in integration with [Templ](https://templ.guide/)
- **HTMX-friendly** - Automatic partial rendering support
- **Middleware** - Standard Go middleware pattern
- **Type-safe URLs** - Generate URLs from struct references
- **Dependency injection** - Pass dependencies to handlers via options

## Installation

```shell
go get github.com/jackielii/structpages
```

## Quick Start

Define your page structure using struct tags:

```go
package main

import (
    "log"
    "net/http"
    "github.com/jackielii/structpages"
)

type index struct {
    product `route:"/product Product"`
    team    `route:"/team Team"`…
