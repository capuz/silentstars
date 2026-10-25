---
repo: "bbockelm/golang-htcondor"
name: "golang-htcondor"
description: "Implementation of the HTCondor client libraries in pure Go"
readmeQualityOk: true
url: "https://github.com/bbockelm/golang-htcondor"
language: "Go"
languages: ["Go"]
languagePcts: [83]
stars: 5
forks: 5
openIssues: 3
closedIssues: 69
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-12T00:07:47Z"
lastCommitAt: "2026-10-25T22:10:37Z"
lastReleaseAt: "2026-03-11T02:32:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 91
maintainers: ["bbockelm", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/71690e3bafcf2e440cad38085c8c93de130fc5ec8076fc2f294ca9c111aa166e/bbockelm/golang-htcondor"
---

# golang-htcondor

A Go client library for HTCondor — collector queries, schedd
submission and management, file transfer, sandbox handling, and pool
metrics — plus two long-running servers built on top of it.

## What's in this repo

- **Go library** (`github.com/bbockelm/golang-htcondor`) — idiomatic
  Go bindings mirroring the HTCondor Python bindings. Submit jobs,
  query the schedd/collector, transfer files, build sandboxes,
  collect pool metrics. See [docs/library.md](https://github.com/bbockelm/golang-htcondor/blob/HEAD/docs/library.md).
- **`htcondor-api`** — RESTful HTTP API server with a bundled SPA,
  OAuth2/OIDC support, API-key auth, an embedded IDP, admin UI, and
  an LLM-powered chat assistant. Runs standalone, under
  `condor_master`, or in Docker. See [docs/server.md](https://github.com/bbockelm/golang-htcondor/blob/HEAD/docs/server.md).
- **`htcondor-mcp`** — [Model Context Protocol](https://modelcontextprotocol.io/)
  server that exposes the same engine to LLM agents (Claude Code,
  etc.) over stdio. See [docs/server.md](https://github.com/bbockelm/golang-htcondor/blob/HEAD/docs/server.md).

## Install

As a Go module:

```bash
go get…
