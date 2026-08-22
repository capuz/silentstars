---
repo: "basecamp/hey-sdk"
name: "hey-sdk"
description: "HEY software dev kit"
readmeQualityOk: true
url: "https://github.com/basecamp/hey-sdk"
language: "Go"
languages: ["Go"]
languagePcts: [71]
stars: 17
forks: 8
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 29
recentReleases: 7
createdAt: "2026-03-04T22:46:42Z"
lastCommitAt: "2026-08-22T04:06:23Z"
lastReleaseAt: "2026-08-21T08:19:22Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 57
maintainers: ["robzolkos", "monorkin", "jeremy"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a332a8abd96b572f1b3a3483a35591ffb98d644910eac5b6c602a9cc47146c1/basecamp/hey-sdk"
---

# HEY SDK

The Go SDK for the [HEY](https://www.hey.com) API. It is the library behind
[hey-cli](https://github.com/basecamp/hey-cli), and it is generated from a Smithy model of
the API in `spec/`, so what the SDK offers is what HEY actually serves.

Today the repository ships a single Go module, `github.com/basecamp/hey-sdk/go`.

TypeScript, Ruby, Swift and Kotlin SDKs will be added in future updates, generated from the
same Smithy model; the Makefile already reserves targets for them (`ts-`, `rb-`, `swift-`,
`kt-`), which fail until those SDKs exist.

## Install

```bash
go get github.com/basecamp/hey-sdk/go@latest
```

Requires Go 1.26 or newer.

## Authenticate

Static token (scripts, agents, anything that already holds a token):

```go
import hey "github.com/basecamp/hey-sdk/go/pkg/hey"

cfg := hey.DefaultConfig() // https://app.hey.com
client := hey.NewClient(cfg, &hey.StaticTokenProvider{Token: os.Getenv("HEY_TOKEN")})
```

OAuth 2.0 with PKCE (user-facing apps): `hey.NewAuthManager` handles the token lifecycle
and refresh, and the `oauth` subpackage provides discovery, PKCE and the code exchange.
Anything else can plug in with `hey.WithAuthStrategy`, which sets headers on…
