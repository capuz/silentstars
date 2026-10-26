---
repo: "isaced/Aoxiang"
name: "Aoxiang"
description: "A lightweight HTTP server library written in Swift for iOS/macOS/tvOS."
readmeQualityOk: true
url: "https://github.com/isaced/Aoxiang"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["http", "server", "swift", "web"]
stars: 16
forks: 5
openIssues: 2
closedIssues: 12
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-06-29T15:29:18Z"
lastCommitAt: "2026-10-26T09:18:06Z"
lastReleaseAt: "2023-07-01T09:45:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 50
maintainers: ["isaced"]
openGraphImageUrl: "https://opengraph.githubassets.com/82da84329a5ce777945d663d9e0d3dfa7a0539ff9b116a1a5913475e28bb95d4/isaced/Aoxiang"
discussionCount: 0
---

# Aoxiang
Aoxiang(翱翔) is a lightweight HTTP server library written in Swift for iOS/macOS/tvOS.

## Features

- Lightweight, Zero-dependency
- Asynchronous handler API with per-connection concurrency
- Support HTTP/1.1
- Support HTTP chunked transfer encoding (streaming)
- Support SSE (Server-Sent Events)
- Middleware support
- Friendly API, keep it simple and easy to use

## Threading and limits

Aoxiang targets embedded/local servers, for example exposing a debug API or files from an app.

- The accept loop runs on a dedicated thread and connections are handled concurrently, but socket reads and writes are blocking. This is not a non-blocking (NIO-style) server.
- `res.send()` responds and closes the connection, so keep-alive and pipelining are not supported.
- Read timeouts are opt-in via `HTTPServer.readTimeout`; there is no write timeout or connection limit.
- Request lines are capped at 8 KiB, headers at 32 KiB / 100 fields, and request bodies at `HTTPServer.maxRequestBodySize` (10 MiB by default). Chunked request bodies are rejected with `501 Not Implemented`; chunked responses are supported.

## Hello World

```swift
import Aoxiang

let server = HTTPServer()…
