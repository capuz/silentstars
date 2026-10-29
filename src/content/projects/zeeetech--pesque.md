---
repo: "zeeetech/pesque"
name: "pesque"
description: "a minimal, self-hostable, and simple - kinda, atproto PDS implementation"
readmeQualityOk: true
url: "https://github.com/zeeetech/pesque"
homepage: "https://pds.zeetech.io"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [97]
topics: ["atproto", "atproto-pds", "elixir"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-07T00:41:59Z"
lastCommitAt: "2026-10-29T12:25:24Z"
lastReleaseAt: "2026-10-10T20:45:51Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: ["zoedsoupe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a77bba72c8424d0f808d3bb66d53c1401057b1f8efb33c0f3facfc1a344c9c0/zeeetech/pesque"
---

# pesque

[English](https://github.com/zeeetech/pesque/blob/HEAD/README.md) | [Português (BR)](https://github.com/zeeetech/pesque/blob/HEAD/README.pt-BR.md)

A Personal Data Server for ATProto, written in Elixir.

It does account creation, OAuth (PAR, PKCE, DPoP), legacy sessions, signed
repositories, public reads, blob storage, a firehose, and `did:web` server
identity with account identities chosen at creation. A PDS stores records,
signs commits, hands those commits to anyone who asks, and answers
`describeServer` well enough that a client can decide to talk to it. No
feed, no ranking, no moderation queue.

State is one SQLite file and one directory of blobs. No Postgres, no S3, no
cluster. The protocol primitives (CIDs, DAG-CBOR, the Merkle Search Tree,
CAR archives, TIDs, JWTs, secp256k1) are implemented here rather than pulled
in, because a reference implementation that hides its protocol code behind a
dependency is not showing you anything.

The name sounds like PDS and means "go fish" in Portuguese.

## Deploy it

On any Docker host, get the Compose bundle from the
[latest release](https://github.com/zeeetech/pesque/releases/latest) (verify
it against `SHA256SUMS`), then:…
