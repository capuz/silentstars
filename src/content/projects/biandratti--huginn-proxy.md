---
repo: "biandratti/huginn-proxy"
name: "huginn-proxy"
description: "High-performance reverse proxy forwarding TLS (JA4), HTTP/2 (Akamai), and TCP-SYN (eBPF-powered) fingerprints as HTTP headers"
readmeQualityOk: true
url: "https://github.com/biandratti/huginn-proxy"
homepage: "https://biandratti.github.io/huginn-proxy/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["akamai", "akamai-fingerprint", "reverse-proxy", "fingerprint", "http2-fingerprint", "tcp-syn", "bot-detection", "ebpf", "ebpf-programs", "ja4-tls"]
stars: 62
forks: 3
openIssues: 10
closedIssues: 54
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-06T10:14:24Z"
lastCommitAt: "2026-10-24T08:19:45Z"
lastReleaseAt: "2026-06-21T12:54:29Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 47
maintainers: ["biandratti", "dependabot[bot]", "ganna-loyik"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1111122969/2b8a9b60-1c16-4e0b-ac4f-2202c8c7281c"
discussionCount: 0
---

# Húginn Prøxy

**`ghcr.io/biandratti/`** — `huginn-proxy`, `huginn-proxy-plain`,
`huginn-proxy-ebpf-agent` ([images & layout](#architecture))

**High-performance reverse proxy with passive fingerprinting capabilities powered by Huginn Net.**

## Overview

**Huginn Proxy** is a reverse proxy built on [Tokio](https://tokio.rs), [Hyper](https://hyper.rs),
and [Rustls](https://github.com/rustls/rustls). It routes incoming connections to backend services while passively
extracting TLS (JA4), HTTP/2 (Akamai), and TCP SYN (p0f-style) fingerprints and injecting them as headers. TCP SYN
fingerprinting is implemented via an XDP/TC eBPF program using [Aya](https://aya-rs.dev). Fingerprinting libraries are
provided by [Huginn Net](https://github.com/biandratti/huginn-net).

Inspired by production-grade proxies like [Pingora](https://github.com/cloudflare/pingora)
and [rust-rpxy](https://github.com/junkurihara/rust-rpxy).

## Quick Start

See [`examples/`](https://github.com/biandratti/huginn-proxy/blob/HEAD/examples/).

## Features

- **Configuration** - One file, **[TOML or YAML](https://github.com/biandratti/huginn-proxy/blob/HEAD/SETTINGS.md)** (picked from the extension). **Dynamic**…
