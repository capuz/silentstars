---
repo: "go-logr/zapr"
name: "zapr"
description: "A logr implementation using Zap"
readmeQualityOk: true
url: "https://github.com/go-logr/zapr"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 137
forks: 31
openIssues: 2
closedIssues: 22
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2018-06-29T17:12:05Z"
lastCommitAt: "2026-11-17T12:17:52Z"
lastReleaseAt: "2021-12-15T16:21:27Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 73
undervaluedScore: 31
maintainers: ["pohly", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/907b94c7339a3fe9e0047ff9df2b32ad7b6ed41c38320593a477a3a54df649f8/go-logr/zapr"
---

Zapr :zap:
==========

A [logr](https://github.com/go-logr/logr) implementation using
[Zap](https://github.com/uber-go/zap). Can also be used as
[slog](https://pkg.go.dev/log/slog) handler.

Usage
-----

Via logr:

```go
package main

import (
    "fmt"

    "go.uber.org/zap"
    "github.com/go-logr/logr"
    "github.com/go-logr/zapr"
)

func main() {
    var log logr.Logger

    zapLog, err := zap.NewDevelopment()
    if err != nil {
        panic(fmt.Sprintf("who watches the watchmen (%v)?", err))
    }
    log = zapr.NewLogger(zapLog)

    log.Info("Logr in action!", "the answer", 42)
}
```

Via slog:

```go
package main

import (
	"fmt"
	"log/slog"

	"github.com/go-logr/logr/slogr"
	"github.com/go-logr/zapr"
	"go.uber.org/zap"
)

func main() {
	var log *slog.Logger

	zapLog, err := zap.NewDevelopment()
	if err != nil {
		panic(fmt.Sprintf("who watches the watchmen (%v)?", err))
	}
	log = slog.New(slogr.NewSlogHandler(zapr.NewLogger(zapLog)))

	log.Info("Logr in action!", "the answer", 42)
}
```

Increasing Verbosity
--------------------

Zap uses semantically named levels for logging (`DebugLevel`, `InfoLevel`,
`WarningLevel`, ...).  Logr uses arbitrary numeric levels.  By…
