---
repo: "gvozdetsky/ruxen"
name: "ruxen"
description: "Experimental nginx-compatible HTTP server and reverse proxy written in Rust"
readmeQualityOk: true
url: "https://github.com/gvozdetsky/ruxen"
homepage: "https://crates.io/crates/ruxen"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["http-server", "io-uring", "linux", "nginx", "reverse-proxy", "rust", "web-server"]
stars: 5
forks: 3
openIssues: 12
closedIssues: 338
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-04-30T19:47:05Z"
lastCommitAt: "2026-10-29T12:24:41Z"
lastReleaseAt: "2026-10-23T09:27:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 78
maintainers: ["gvozdetsky"]
openGraphImageUrl: "https://opengraph.githubassets.com/43d45f0932572b87a0914702cb557d27d1e60048eeb34d9221aa3cd73d9bc2b5/gvozdetsky/ruxen"
---

# ruxen

**An nginx-compatible HTTP server and reverse proxy written from scratch in Rust.**

ruxen takes an nginx configuration and serves it the way nginx would: TLS termination, reverse proxying with caching, and static files, over HTTP/1.1 and HTTP/2. It reimplements nginx's architecture and configuration semantics in idiomatic Rust instead of translating the C code line by line.

It is Linux-only and thread-per-core, on [monoio](https://github.com/bytedance/monoio) with `io_uring`, and on epoll where `io_uring` is unavailable.

ruxen covers a subset of nginx, not all of it (see [What works](#what-works) and [Limitations](#limitations)); `ruxen --compat` tells you whether your configuration is in that subset. It is pre-1.0, so the supported surface still grows from release to release.

## Why ruxen?

nginx serves a large share of the web, and edge servers parse untrusted input all day, which is where memory-safety bugs matter most. Rust servers exist, but they ask you to rewrite your configuration or are libraries for building your own proxy. ruxen keeps the nginx configuration and reproduces nginx's behaviour with Rust's ownership model and type system rather than its C…
