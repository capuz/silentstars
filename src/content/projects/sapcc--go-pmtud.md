---
repo: "sapcc/go-pmtud"
name: "go-pmtud"
description: "go-pmtud is a simplified implementation of cloudflare/pmtud in Go."
readmeQualityOk: true
url: "https://github.com/sapcc/go-pmtud"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["bpg", "ecmp", "kubernetes", "path-mtu-discovery"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 1
watchers: 36
contributors: 25
recentReleases: 0
createdAt: "2019-12-19T17:14:32Z"
lastCommitAt: "2026-11-05T14:05:01Z"
lastReleaseAt: "2026-03-11T15:58:26Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 84
undervaluedScore: 50
maintainers: ["renovate[bot]", "defo89", "rkschamer"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed0dc16785c675951b1c40ee0449a349715bed66361bf3752df10126b4b09197/sapcc/go-pmtud"
---

# go-pmtud

`go-pmtud` is a simplified implementation of [cloudflare/pmtud](https://github.com/cloudflare/pmtud) in Go.

## Problem

Using ECMP (Equal Cost Multi Path) on bare metal Kubernetes clusters makes load sharing of traffic possible (e.g. by using service addresses of type `ExternalIP`).

Hosts (and Pods) try to leverage full MTU size that is derived from their interface configuration (e.g. 9000 bytes).

If `(1)` MTU is smaller somewhere in the path between sender and receiver and `(2)` packet has a DF (do-not-fragment) bit set, router sends ICMP Destination Unreachable message (type 3 code 4 message) to sender (originator of too large packets).

In case of ECMP it may not reach the original sender, thus breaking the communication.

More details in this blog post by Cloudflare: [Path MTU discovery in practice](https://blog.cloudflare.com/path-mtu-discovery-in-practice/).

go-pmtud replicates ICMP Destination Unreachable packets to all nodes in same Kubernetes cluster, so that the sender gets awareness that it has to use smaller packets for a particular destination.

## Architecture

```
iptables (NFLOG group 33)
        │
        ▼
  nflog controller          ← captures…
