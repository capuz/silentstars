---
repo: "CefasDB/cefasdb-core"
name: "cefasdb-core"
description: "High-performance NoSQL key-value and document database designed for millisecond-class access."
url: "https://github.com/CefasDB/cefasdb-core"
homepage: "https://cefasdb.com"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 25
forks: 2
openIssues: 27
closedIssues: 264
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-06-09T23:40:26Z"
lastCommitAt: "2026-06-23T06:42:40Z"
lastReleaseAt: "2026-06-21T23:05:24Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 52
maintainers: ["osvaldoandrade", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab39b39ad006d790720cb4f825d97afd83854fc01945a5d80fa40c7714be4867/CefasDB/cefasdb-core"
---

# CefasDB

CefasDB is a NoSQL document database written in Go. It exposes
HTTP/JSON and gRPC APIs, accepts SQL through `ExecuteStatement`, and
can run as a single binary or as a Raft multi-shard cluster for
horizontal scale. It targets teams that need predictable
millisecond-class reads on operational data and prefer to run the
binary themselves.

The project ships two binaries:

- `cefasdb` — the database server.
- `cefas` — the CLI client, mirroring the AWS DynamoDB CLI surface.

User and operator documentation lives at [docs.cefasdb.com].

[docs.cefasdb.com]: https://docs.cefasdb.com

## Install

The fastest path is to run the server in a container and install the
CLI on the host.

### Server (Docker)

```sh
docker run --rm -p 8080:8080 -p 9090:9090 \
  ghcr.io/cefasdb/cefasdb:latest \
  -http :8080 -grpc :9090 -grpc-reflection
```

Images are published per release with the tags `<version>`,
`v<version>`, and `latest`. Pin to a specific release:

```sh
docker pull ghcr.io/cefasdb/cefasdb:0.8.5
```

### CLI (npm)

```sh
npm install -g @cefasdb/cefas
cefas --help
```

Node.js 18+ is required only for the installer wrapper; the installed
command is the native Go binary.

### From…
