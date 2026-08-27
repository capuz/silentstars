---
repo: "dantte-lp/gobfd"
name: "gobfd"
description: "Production-grade BFD (Bidirectional Forwarding Detection) protocol daemon. RFC 5880/5881/5882/5883 compliant. Go 1.26."
readmeQualityOk: true
url: "https://github.com/dantte-lp/gobfd"
homepage: "https://github.com/dantte-lp/gobfd"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["bfd", "bgp", "go", "gobgp", "golang", "grpc", "networking", "prometheus", "protocol", "rfc5880"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-21T14:35:22Z"
lastCommitAt: "2026-08-27T14:25:40Z"
lastReleaseAt: "2026-05-08T23:38:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 53
maintainers: ["dantte-lp"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c8dd42379dc2e7d5356204fb3279a471ccb5ea39e470b7e68d4a243d1521970/dantte-lp/gobfd"
discussionCount: 0
---

<strong>GoBFD</strong><br>
  Production-grade BFD protocol daemon for Go
</p>

  <br>
</p>

---

GoBFD is a production-oriented [Bidirectional Forwarding Detection](https://datatracker.ietf.org/doc/html/rfc5880) (BFD) protocol daemon written in Go 1.27. It detects forwarding path failures between adjacent systems in milliseconds, enabling fast convergence for BGP, OSPF, and other routing protocols.

Four binaries: **gobfd** (daemon), **gobfdctl** (CLI), **gobfd-haproxy-agent** (HAProxy bridge), **gobfd-exabgp-bridge** (ExaBGP bridge).

## Why GoBFD

- **Standalone daemon, decoupled from any control plane.** GoBFD watches BFD state and drives external actuators (GoBGP `DisablePeer/EnablePeer`, HAProxy agent-check, ExaBGP route announcements) over a typed gRPC API. A daemon restart does not flap the routing control plane.
- **Measured allocation boundaries.** Micro-benchmarks report zero allocations
  for selected codec, FSM, timer, lookup, and caller-buffer paths. Allocating
  compatibility and authenticated receive paths are documented explicitly;
  benchmark results are not an end-to-end latency or GC guarantee.
- **Documented RFC coverage.** The asynchronous RFC 5880 core and…
