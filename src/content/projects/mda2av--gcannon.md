---
repo: "MDA2AV/gcannon"
name: "gcannon"
description: "TCP HTTP Load generator for linux (liburing)"
readmeQualityOk: true
url: "https://github.com/MDA2AV/gcannon"
homepage: "https://gcannon.org"
language: "C"
languages: ["C"]
languagePcts: [77]
stars: 38
forks: 2
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-03-04T15:50:25Z"
lastCommitAt: "2026-11-23T13:29:42Z"
lastReleaseAt: "2026-11-18T22:41:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 53
maintainers: ["MDA2AV", "qicosmos"]
openGraphImageUrl: "https://opengraph.githubassets.com/02aff902836ea0a304414b700f6aca63bbafb76a0d6d89ab0dac96bcb99673fc/MDA2AV/gcannon"
---

# Glass Cannon

High-performance load generator built on Linux io_uring. Supports HTTP/1.1, WebSocket and HTTPS (TLS 1.3 over kernel TLS).

## [Http Arena](https://www.http-arena.com/) official Http/1.1 load generator

## Install

```bash
# Requires liburing-dev and libssl-dev (OpenSSL 3)
git clone https://github.com/MDA2AV/gcannon.git && cd gcannon
make
sudo cp gcannon /usr/local/bin/
```

## Quick Start

```bash
# HTTP benchmark
gcannon http://localhost:8080/ -c 512 -t 8 -d 10s

# HTTP with pipelining
gcannon http://localhost:8080/ -c 512 -t 8 -d 10s -p 16

# WebSocket echo
gcannon http://localhost:8080/ws --ws -c 512 -t 8 -d 10s

# HTTPS (TLS 1.3)
gcannon https://localhost:8443/ -c 512 -t 8 -d 10s

# Raw request files (multiple templates)
gcannon http://localhost:8080 --raw get.raw,post.raw -c 256 -t 4 -d 5s
```
