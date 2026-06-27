---
repo: "fpt/go-dev-mcp"
name: "go-dev-mcp"
description: "A MCP server for Golang development"
url: "https://github.com/fpt/go-dev-mcp"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 14
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-04-12T15:28:24Z"
lastCommitAt: "2026-06-27T00:36:16Z"
lastReleaseAt: "2026-02-10T12:14:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 43
maintainers: ["fpt"]
openGraphImageUrl: "https://opengraph.githubassets.com/570c6ee9f9073a1301affb5abadaec65bfc1cbc697c997be261a2c2c0ccde3d1/fpt/go-dev-mcp"
---

# GoDevMCP

## Introduction

GoDevMCP is a Model Context Protocol (MCP) server that provides development tools with a focus on Go, and additional support for Rust and Python. It offers documentation lookup, code search, project navigation, and more.

## Installation

### Prerequisites

- GitHub authentication is required **only for the GitHub tools** (code search, content,
  diffs, issues, pull requests, workflow runs). The other tools (Go/Rust/Python docs,
  directory tree, local search, outline, markdown, validation) work without it.
- The server resolves a GitHub token in this order:
  1. The `GITHUB_TOKEN` or `GH_TOKEN` environment variable, if set.
  2. Otherwise, the locally-installed and authenticated [`gh` CLI](https://cli.github.com/)
     (`gh auth login`).

### Using go install

You can install GoDevMCP directly using Go's install command:

```bash
go install github.com/fpt/go-dev-mcp/godevmcp@latest
```

This will download, compile, and install the binary to your `$GOPATH/bin` directory (typically `~/go/bin`). Make sure this directory is in your system's PATH.

### Building from Source

1. Clone the repository
2. Run `make build` to build the application and `make…
