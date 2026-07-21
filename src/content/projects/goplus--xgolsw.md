---
repo: "goplus/xgolsw"
name: "xgolsw"
description: "XGo Language Server that runs in the browser using WebAssembly"
readmeQualityOk: true
url: "https://github.com/goplus/xgolsw"
homepage: "https://builder.goplus.org"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["goplus", "language-server", "wasm", "webassembly", "lsp"]
stars: 8
forks: 10
openIssues: 4
closedIssues: 11
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2025-03-05T04:33:46Z"
lastCommitAt: "2026-07-21T06:12:02Z"
lastReleaseAt: "2025-06-27T05:39:08Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 73
maintainers: ["aofei", "dependabot[bot]", "go-wyvern"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1657fc7da2789e0cc5c608da6db7efb108607687e23409277e03a63e532eb9f/goplus/xgolsw"
---

# xgolsw

A lightweight XGo language server that runs in the browser using WebAssembly.

This project follows the
[Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/)
using [JSON-RPC 2.0](https://www.jsonrpc.org/specification) for message exchange. However, unlike traditional LSP
implementations that require a network transport layer, this project operates directly in the browser's memory space
through its API interfaces.

## Difference between [`xgols`](https://github.com/goplus/xgols) and `xgolsw`

- `xgols` runs locally, while `xgolsw` runs in the browser using WebAssembly.
- `xgols` supports a workspace (multiple projects), while `xgolsw` supports a single project.
- `xgols` supports mixed programming of Go and XGo, while `xgolsw` only supports a pure XGo project.

## Building from source

1. [Optional] Generate required package data:

  ```bash
  go generate ./internal/pkgdata
  ```

2. Build the project:

  ```bash
  GOOS=js GOARCH=wasm go build -trimpath -ldflags "-s -w" -o xgolsw.wasm
  ```

## Usage

This project is a standard Go WebAssembly module. You can use it like any other Go WebAssembly…
