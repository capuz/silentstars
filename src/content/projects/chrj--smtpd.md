---
repo: "chrj/smtpd"
name: "smtpd"
description: "Go SMTP server library"
readmeQualityOk: true
url: "https://github.com/chrj/smtpd"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["smtp", "golang"]
stars: 78
forks: 38
openIssues: 0
closedIssues: 6
watchers: 7
contributors: 8
recentReleases: 6
createdAt: "2017-08-17T18:20:16Z"
lastCommitAt: "2026-09-19T08:13:18Z"
lastReleaseAt: "2026-09-07T10:50:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 91
undervaluedScore: 58
maintainers: ["chrj", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ab123bc1f21fb4d84412952f34038d81fb54e90350a295ffa5054846e8e48ae/chrj/smtpd"
---

Go smtpd v2 [](https://pkg.go.dev/github.com/chrj/smtpd/v2)
========

Package `smtpd` implements an SMTP server in Go.

Versions
--------

| Version | Status | Branch | Tag | Docs |
|---------|--------|--------|-----|------|
| v1 | stable | [`v1`](https://github.com/chrj/smtpd/tree/v1) | [`v1.0.1`](https://github.com/chrj/smtpd/releases/tag/v1.0.1) | [godoc](https://pkg.go.dev/github.com/chrj/smtpd) |
| v2 | stable | [`main`](https://github.com/chrj/smtpd/tree/main) | [`v2.5.1`](https://github.com/chrj/smtpd/releases/tag/v2.5.1) | [godoc](https://pkg.go.dev/github.com/chrj/smtpd/v2) |

v1 is the original battle-tested API.

```go
import "github.com/chrj/smtpd"
```

v2 is a ground-up rewrite of the v1 API. It keeps the same wire behavior but
restructures the programming model around `context.Context`, a streaming
`Envelope`, structured logging, and composable middleware.

```go
import "github.com/chrj/smtpd/v2"
```

> [!NOTE]
> This README covers the v2 API only. [Click here for the v1 README](https://github.com/chrj/smtpd/tree/v1#go-smtpd--)

Features
--------

* STARTTLS and implicit TLS
* PLAIN/LOGIN authentication (after STARTTLS), with a limit on the failed
  attempts of a…
