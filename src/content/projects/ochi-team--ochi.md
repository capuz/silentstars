---
repo: "ochi-team/ochi"
name: "ochi"
description: "Ochi is a fast, cost-effective, Loki compatible database for logs."
readmeQualityOk: true
url: "https://github.com/ochi-team/ochi"
homepage: "https://ochi.dev"
language: "Zig"
languages: ["Zig"]
languagePcts: [91]
topics: ["database", "elasticsearch", "logging", "logs", "loki", "observability"]
stars: 66
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-09-29T20:05:41Z"
lastCommitAt: "2026-10-27T12:39:41Z"
lastReleaseAt: "2026-07-23T12:33:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 54
maintainers: ["dennypenta", "tenyoru"]
openGraphImageUrl: "https://opengraph.githubassets.com/d09d96e486d894a1b64007d5fbff58316f97de9176040324ffb835042cd11ff5/ochi-team/ochi"
---

## Introduction

We are creating a more efficient alternative for storing logs.

## Install

#### Download pre-built binary

```sh
VERSION=v0.6.7 &&
curl -Ls "https://github.com/ochi-team/ochi/releases/download/${VERSION}/Ochi-${VERSION}-linux-x86_64.tar.gz" | tar -xz
```

#### Build from source

- install [zig](https://ziglang.org/learn/getting-started/#managers) 0.16.0
- compile with `zig build -Doptimize=ReleaseSafe -Drelease=true`

## Documentation

https://ochi.dev/docs/guides/installation/

## Roadmap

- [x] store persists the data, working simple API queries
- [x] Grafana datasource available
- [x] home made query language
- [x] installation scripts
- [x] Ochi starts emitting logs to itself, [dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) Ochi
- [x] Home made UI
- [ ] Disk snapshots and recovery
- [ ] Replication to a secondary mount
- [ ] aarch64 release target
- [ ] full support of Loki ingestion protocol (snappy, zstd, protobuf encoding, etc.)
- [ ] docker-compose with configured datasource to grafana
- [ ] OTEL collector API support
- [ ] configuration support
- [ ] windows devevlopment support
- [ ] cost analysis
- [ ] GDPR compliance

## Goals
-…
