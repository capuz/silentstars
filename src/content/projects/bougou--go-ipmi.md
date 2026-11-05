---
repo: "bougou/go-ipmi"
name: "go-ipmi"
description: "IPMI library in pure Go"
readmeQualityOk: true
url: "https://github.com/bougou/go-ipmi"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["ipmi", "goipmi", "golang"]
stars: 153
forks: 46
openIssues: 1
closedIssues: 37
watchers: 3
contributors: 20
recentReleases: 0
createdAt: "2021-12-23T11:41:06Z"
lastCommitAt: "2026-11-05T11:23:58Z"
lastReleaseAt: "2024-05-20T03:36:23Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 45
maintainers: ["halfcrazy", "bougou", "ilyam8"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6c7ece1b1e2daf524103737f82dfafc5ca5bee7fed7c343aeee40e6b2ee99a9/bougou/go-ipmi"
---

# [go-ipmi](https://github.com/bougou/go-ipmi)

Native Go implementation of IPMI. It does not shell out to `ipmitool`.

The library provides an IPMI client (remote and in-band) and a reference IPMI
server (BMC) for local development and tests, plus the protocol types they share.
Public APIs live under `pkg/`. To use the client, start with `pkg/client`.

## Compatibility

This module has not reached `v1.0.0`. The public API may change between
versions, including renamed packages, types, functions, and constants.
Pin to a specific version or commit for production use.

`v0` releases carry no backward-compatibility promise, per the
[Go module versioning convention](https://go.dev/ref/mod#versions).

## Install

```bash
go get github.com/bougou/go-ipmi
```

## Client

```go
package main

import (
	"context"
	"fmt"

	"github.com/bougou/go-ipmi/pkg/client"
)

func main() {
	c, err := client.NewClient("10.0.0.1", 623, "root", "123456")
	if err != nil {
		panic(err)
	}
	// c.WithInterface(client.InterfaceLan) // IPMI v1.5; default is lanplus (v2.0)
	// openClient, err := client.NewOpenClient() // in-band on Linux / Windows

	ctx := context.Background()
	if err := c.Connect(ctx); err !=…
