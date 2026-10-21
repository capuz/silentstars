---
repo: "owenrumney/go-lsp"
name: "go-lsp"
description: "Write Language Servers that comply with 3.17 of the LSP Specification"
readmeQualityOk: true
url: "https://github.com/owenrumney/go-lsp"
homepage: "https://www.owenrumney.co.uk/go-lsp/"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["go", "golang", "language-server-protocol", "lsp"]
stars: 197
forks: 3
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-02-23T22:00:04Z"
lastCommitAt: "2026-10-21T08:49:05Z"
lastReleaseAt: "2026-06-10T09:22:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 17
maintainers: ["owenrumney", "thedaneeffect", "rhysyngsun"]
openGraphImageUrl: "https://opengraph.githubassets.com/9161e4d8c7a5de9a7ab56e67753e846c6da3eb61298b52aaa5730bf291cd44fb/owenrumney/go-lsp"
discussionCount: 1
---

# go-lsp

`go-lsp` is a Go library for building Language Server Protocol servers in Go without reimplementing JSON-RPC transport, handler dispatch, document sync, or protocol types.

## Why use go-lsp?

- **Typed LSP handlers** instead of hand-rolled JSON-RPC plumbing
- **Auto-detected capabilities** from the interfaces your handler implements
- **Built-in document store** with full and incremental sync support
- **`servertest` harness** for end-to-end LSP tests over in-memory pipes
- **Project scaffold generator** to bootstrap a server quickly
- **Optional debug UI** for inspecting live LSP traffic
- **LSP client** for driving other language servers from Go

## Install

```bash
go get github.com/owenrumney/go-lsp
```

## Minimal server

```go
package main

import (
    "context"
    "log"

    "github.com/owenrumney/go-lsp/lsp"
    "github.com/owenrumney/go-lsp/server"
)

type Handler struct{}

func (h *Handler) Initialize(_ context.Context, _ *lsp.InitializeParams) (*lsp.InitializeResult, error) {
    return &lsp.InitializeResult{
        ServerInfo: &lsp.ServerInfo{Name: "example", Version: "0.1.0"},
    }, nil
}

func (h *Handler) Shutdown(_ context.Context) error { return nil…
