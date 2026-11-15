---
repo: "lance0/prefixd"
name: "prefixd"
description: "BGP FlowSpec policy daemon for automated DDoS mitigation"
readmeQualityOk: true
url: "https://github.com/lance0/prefixd"
homepage: "https://prefixd.io"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [75, 22]
topics: ["bgp", "ddos", "ddos-mitigation", "fastnetmon", "flowspec", "gobgp", "netops", "network-automation", "rust", "rtbh"]
stars: 88
forks: 4
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-16T15:13:44Z"
lastCommitAt: "2026-11-15T08:19:28Z"
lastReleaseAt: "2026-02-22T04:58:54Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 43
maintainers: ["lance0", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/841d6ad1b8f4a78d864e54eb3b20a88a362ea1c12d0bddd5fc6fcc24ae4f533b/lance0/prefixd"
fundingLinks: ["KO_FI:https://ko-fi.com/lance0"]
---

# prefixd

**Turn DDoS detector signals into guarded BGP FlowSpec mitigations.**

Detectors post attack events over HTTP. prefixd maps the target to your
inventory, picks a playbook, checks guardrails, and asks a separate BGP speaker
to announce a FlowSpec rule with a mandatory TTL. No detector speaks BGP.

[Documentation](https://github.com/lance0/prefixd/blob/HEAD/docs/README.md) · [Quickstart](https://github.com/lance0/prefixd/blob/HEAD/docs/tutorials/quickstart.md) ·
[Cookbook](https://github.com/lance0/prefixd/blob/HEAD/docs/cookbook/README.md) · [Releases](https://github.com/lance0/prefixd/releases)

> **Preferred speaker: [rustbgpd](https://github.com/lance0/rustbgpd)**, "an
> API-first BGP daemon in Rust for route servers, route reflectors, and network
> automation." prefixd drives it over gRPC, and the `rustbgpd` Compose profile
> is the default path. GoBGP stays maintained and selectable.
> [Why rustbgpd](#pairs-with-rustbgpd)

**Status:** pre-1.0. The `/v1/` API is stable within 0.x: a breaking change is
called out in its release's upgrade notes
([API versioning](https://github.com/lance0/prefixd/blob/HEAD/docs/reference/api-versioning.md)). The latest release,…
