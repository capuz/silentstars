---
repo: "birdayz/fdb-go"
name: "fdb-go"
description: "FoundationDB Ecosystem for Go."
readmeQualityOk: true
url: "https://github.com/birdayz/fdb-go"
homepage: "http://fdb.dev"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["foundationdb", "foundationdb-client", "sql", "fdb-recordlayer"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2025-08-04T09:48:44Z"
lastCommitAt: "2026-10-24T08:20:37Z"
lastReleaseAt: "2026-08-26T13:04:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 84
maintainers: ["birdayz"]
openGraphImageUrl: "https://opengraph.githubassets.com/d12e596fcfcd3d198aa3feb2396bebb721c3e65912963c2ba401538de21e463c/birdayz/fdb-go"
---

# fdb-go - FoundationDB Ecosystem for Go

A native [FoundationDB](https://www.foundationdb.org/) client, a testcontainer, the
[Record Layer](https://github.com/FoundationDB/fdb-record-layer) and an embedded SQL
engine for Go, without cgo. Requires a FoundationDB 7.3 cluster.

```sh
go get fdb.dev@master
```

Or run the examples from a clone, against a disposable cluster in Docker.
Install the `frl` CLI:

```sh
curl -fsSL https://fdb.dev/install.sh | sh
```

Then:

```sh
export FDB_CLUSTER_FILE=$(frl fdb up)
go run ./example/sql
go run ./example
```

`frl fdb down` removes the cluster.

Pre-1.0; expect API changes. [Status and known gaps](https://github.com/birdayz/fdb-go/blob/HEAD/STATUS.md). Independent project,
not affiliated with Apple or the FoundationDB project.

## Native Go Client

[`fdb.dev/pkg/fdbgo/fdb`](https://github.com/birdayz/fdb-go/blob/HEAD/pkg/fdbgo/fdb) implements FoundationDB's 7.3 client
protocol without cgo or `libfdb_c`, with an API modeled on Apple's Go binding.
[Differential tests](https://github.com/birdayz/fdb-go/blob/HEAD/pkg/fdbgo/bench/) compare results, stored bytes and error codes
against libfdb_c 7.3.77 on every pull request.

```go
import…
