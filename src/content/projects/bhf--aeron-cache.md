---
repo: "bhf/aeron-cache"
name: "aeron-cache"
description: "A KV store with counters and PATCH support. RAFT clustered or single node. HTTP, WS, SSE & Aeron Transport APIs. UI, CLI & Polyglot Client Libs. K8s deployable, Brew installable."
readmeQualityOk: true
url: "https://github.com/bhf/aeron-cache"
homepage: "https://aeron-cache.pages.dev/"
language: "Java"
languages: ["Java"]
languagePcts: [89]
topics: ["aeron", "cache", "low-latency", "sbe", "agrona", "kv-store", "helm", "k8s", "cloud-sympathy", "high-availability"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-09-21T13:32:03Z"
lastCommitAt: "2026-10-25T09:02:01Z"
lastReleaseAt: "2026-05-16T14:06:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 84
maintainers: ["bhf"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5fb0cbc7edf556309a8fca96e687e4729eca6dd3fea1b40d7abd63ce2289057/bhf/aeron-cache"
---

# Aeron Cache

A key value store with counters built using Aeron, Agrona and SBE. RAFT clustered or single node - fast by design. UI with NextJS, Shadcn and Tailwind. 
Includes HTTP, WS, SSE and Aeron transport (UDP and IPC) interfaces.

Deployable on Kubernetes with ```helm``` or locally with ```brew```.

* [Features](#features)
* [How To Run - Brew](#brew)
* [How To Run - K8s/Helm](#k8s-and-helm)
* [API Specs](#api-specs)
* [Demo Videos](https://aeron-cache.pages.dev/see-it-in-action/)

## Features

* Key-value and counter caches with item level TTL support
* Bulk atomic operations across caches and counters
* Streaming multi-cache (and key) subscriptions
* PATCH support for writing partial updates to JSON values including partial streaming subscriptions (JSON Merge Patch RFC 7386)
* Near cache implementation (read ahead)

* HTTP (Request-Response), WS (UniDi and BiDi), SSE (UniDi) and SBE-Aeron (BiDi) APIs
* Embedded cache [polyglot clients](https://github.com/bhf/aeron-cache-embedded):
  * Aeron Transport (BIDI) - Java and Rust
  * HTTP and WS - Java, Rust, Typescript and Python
* Rust based [CLI](https://github.com/bhf/aeron-cache-cli)

## How To Run

### Brew
```bash
brew…
