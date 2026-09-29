---
repo: "SuzukiHonoka/spaceship"
name: "spaceship"
description: "The spaceship project."
readmeQualityOk: true
url: "https://github.com/SuzukiHonoka/spaceship"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["golang", "grpc", "proxy"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2022-05-25T10:56:49Z"
lastCommitAt: "2026-09-29T08:11:00Z"
lastReleaseAt: "2022-07-13T07:53:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 77
maintainers: ["SuzukiHonoka", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/33342e91e6956b329f30cd5a0c71a1b4fa3e9c7a997b2cdd6d81a0c55f1b7fcf/SuzukiHonoka/spaceship"
---

# Spaceship

Spaceship is a tool designed to create secure tunnels to remote networks.

# Technologies Used

- gRPC
- Protocol Buffers (protobuf)

## Build

Building Spaceship requires Go 1.27.0 or later. Go 1.27 Darwin binaries target
macOS 13 Ventura or later.

```shell
go build ./cmd/spaceship
```

## Usage

```shell
# spaceship -h
Usage of spaceship:
  -c string
        config path (default "./config.json")
  -interval duration
        show stats interval in seconds (default 1s)
  -s    show stats
  -v    show spaceship version
```

## SOCKS Resource Limits

SOCKS listeners bound both pending handshakes and established sessions. Defaults
are 4096 connections per listener and a 15-second deadline covering the greeting,
authentication, and request. Excess connections are closed immediately; shutdown
closes and drains accepted connections, including clients that sent no bytes.
The handshake deadline is cleared before tunneling, so it is not a session TTL.

```json
"socks": {"max_connections": 4096, "handshake_timeout": 15}
```

Both settings use their defaults when zero; `handshake_timeout` is in seconds.
The maximum accepted connection limit is 65536. TCP and Unix SOCKS…
