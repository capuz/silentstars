---
repo: "strahe/synapse-go"
name: "synapse-go"
description: "Go SDK for Filecoin Onchain Cloud (FOC), ported from the @filoz/synapse-sdk."
readmeQualityOk: true
url: "https://github.com/strahe/synapse-go"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["curio", "filecoin", "foc", "lotus", "pdp", "synapse"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-04-19T10:50:49Z"
lastCommitAt: "2026-09-15T08:55:20Z"
lastReleaseAt: "2026-07-20T03:10:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 51
maintainers: ["strahe", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/88112be29ba8ea9b4f0ceee55230f8a0749dbb5e2147b621546982deeae9c30f/strahe/synapse-go"
---

# synapse-go

Go SDK for Filecoin Onchain Cloud (FOC).

> **Status:** Beta - API may change.

**Docs:** [getting started](https://github.com/strahe/synapse-go/blob/HEAD/docs/GETTING_STARTED.md) |
[API reference](https://pkg.go.dev/github.com/strahe/synapse-go) |
[examples](https://github.com/strahe/synapse-go/blob/HEAD/examples/)

## Install

```bash
go get github.com/strahe/synapse-go
```

Requires Go 1.26.3+.

## Quick Start

```go
client, err := synapse.New(ctx,
    synapse.WithPrivateKeyHex("0x..."),
    synapse.WithRPCURL("https://api.calibration.node.glif.io/rpc/v1"),
    synapse.WithSource("my-app"),
)
if err != nil { return err }
defer client.Close()

// file is an io.Reader over the payload to upload.
upload, err := client.Storage().Upload(ctx, file, &storage.UploadOptions{Copies: 2})
if err != nil { return err }

fmt.Println("piece:", upload.PieceCID)
fmt.Printf("copies: %d/%d\n", upload.SuccessCount(), upload.RequestedCopies)
fmt.Println("retrieve:", upload.Copies[0].RetrievalURL)
```

Use real values from your config or secret manager. Mainnet and Calibration
are detected from the RPC chain ID.

Single uploads must be at least 127 bytes and fit the PDP cap, about 1…
