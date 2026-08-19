---
repo: "atoonk/go-afxdp"
name: "go-afxdp"
description: "An easy, concurrency safe AF_XDP library for Go"
readmeQualityOk: true
url: "https://github.com/atoonk/go-afxdp"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 58
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-28T05:38:28Z"
lastCommitAt: "2026-08-19T04:07:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 19
maintainers: ["atoonk"]
openGraphImageUrl: "https://opengraph.githubassets.com/319da61e01f7b40ed6e9863b1fd2aefafad9cbaaedfc511737a8029d222b4753/atoonk/go-afxdp"
---

# go-afxdp

A small, easy to use Go library for **AF_XDP** sockets. It moves packets between
a NIC and userspace at high rates, bypassing the kernel network stack, for
DPDK-like speeds with the convenience of ordinary Go.

```go
import "github.com/atoonk/go-afxdp"
```

It binds every rx queue for you, installs an in-kernel filter so you only take
the traffic you want, auto-selects zero copy where the driver supports it, and is
safe to drive from a receive and a transmit goroutine at once. It is a
friendlier, concurrency-safe fork of [`asavie/xdp`](https://github.com/asavie/xdp).

New to AF_XDP? It is a different beast from `net.UDPConn`. Read
[How AF_XDP works](#how-af_xdp-works-and-why-theres-a-filter) for the one-minute
mental model (especially *why there is a filter*), then come back.

**Performance:** about 13 Mpps transmitting 64-byte frames from
userspace Go on one Intel ixgbe NIC, roughly 92% of 10G line rate.

**Status:** validated on Intel ixgbe (zero copy) and AWS ENA. The API is still
settling, so expect minor changes before a v1.0 tag.

## Install

```
go get github.com/atoonk/go-afxdp
```

Linux, Go 1.22+, and `CAP_NET_RAW` (or root) with enough locked memory
(`ulimit…
