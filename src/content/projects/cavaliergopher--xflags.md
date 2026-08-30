---
repo: "cavaliergopher/xflags"
name: "xflags"
description: "Expressive flags for Go"
readmeQualityOk: true
url: "https://github.com/cavaliergopher/xflags"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "command-line", "cli", "golang"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2021-10-06T09:38:25Z"
lastCommitAt: "2026-08-30T00:35:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 67
maintainers: ["cavaliercoder", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2a3b002dc1ca6248e1b46036981ec2c56e1e8343d27dc3c3f97346d763867cd/cavaliergopher/xflags"
---

# Expressive flags for Go

Package xflags implements command-line flag parsing and is a compatible
alternative to Go's flag package. This package provides higher-order features
such as subcommands, positional arguments, required arguments, validation,
support for environment variables and others.

Package xflags aims to make composing large, full-featured command line tools as
simple and clean as possible. Chained setters are employed to configure
commands and flags declaratively. There are no dependencies beyond the standard
library, and no code generation or struct tags.

## Install

```
go get github.com/cavaliergopher/xflags
```

## Usage

```go
package main

import (
	"context"
	"fmt"
	"os"

	"github.com/cavaliergopher/xflags"
)

var flagName string

var App = xflags.NewCommand("greet", "Print a greeting").
	Flags(
		xflags.String(&flagName, "name", "World", "Who to greet"),
	).
	HandleFunc(func(ctx context.Context, inv *xflags.Invocation) error {
		fmt.Fprintf(inv.Stdout, "Hello, %s!\n", flagName)
		return nil
	})

func main() {
	ctx, stop := xflags.NotifyContext(context.Background())
	defer stop()
	os.Exit(xflags.Run(ctx, App))
}
```

Flag values are stored in variables you…
