---
repo: "bywayhq/phantom"
name: "phantom"
description: "Experimental Rust HTTP client with explicit control over TLS, HTTP/2 and HTTP/3 fingerprints."
readmeQualityOk: true
url: "https://github.com/bywayhq/phantom"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["browser-fingerprinting", "http-client", "http2", "http3", "quic", "rust", "tls"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-18T00:11:46Z"
lastCommitAt: "2026-10-03T20:23:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 45
maintainers: ["0xARYA"]
openGraphImageUrl: "https://opengraph.githubassets.com/3430d9229524122f1594b8bf4f776c499c6cd1c3378b0eb0906be963c094bdae/bywayhq/phantom"
---

# Phantom

Phantom is a Rust HTTP client that connects the way a chosen browser does.

A server can tell which program sent a request without reading its
`User-Agent`. The TLS handshake, the HTTP/2 settings, the order of header
fields, and the QUIC parameters of an HTTP/3 connection all differ between
Chrome, Firefox, curl, and a typical Rust library. Copying Chrome's headers
changes none of them. [How servers recognize a client](https://github.com/bywayhq/phantom/blob/HEAD/docs/fingerprinting.md)
explains each signal in a few minutes of reading.

Phantom reproduces those layers from
[captures](https://github.com/bywayhq/phantom/blob/HEAD/docs/reference/glossary.md#capture) of real browsers, and tests
compare its output with the captures. It never falls back to another
protocol or route. Phantom is maintained by
[Byway](https://github.com/bywayhq).

> Phantom is experimental and pre-1.0. It is not on crates.io, and its API can
> change between commits, so pin a git revision. It matches the layers listed
> below, not every way a browser can be told apart.

## What Phantom matches

Phantom carries…
