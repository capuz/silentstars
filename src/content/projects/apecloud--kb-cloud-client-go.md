---
repo: "apecloud/kb-cloud-client-go"
name: "kb-cloud-client-go"
description: "Golang client for the KubeBlocks Cloud API"
readmeQualityOk: true
url: "https://github.com/apecloud/kb-cloud-client-go"
homepage: "https://pkg.go.dev/github.com/apecloud/kb-cloud-client-go"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["golang", "kubeblocks", "kb-cloud", "kubeblocks-cloud", "kbcloud-api"]
stars: 5
forks: 4
openIssues: 0
closedIssues: 5
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2024-10-21T03:07:36Z"
lastCommitAt: "2026-10-20T08:49:55Z"
lastReleaseAt: "2025-03-20T08:53:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 90
maintainers: ["apecloud-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa10ba2ba53e3537d7c738c27d0fd1856d74e52edf9ae6ca6b2f992df729e13e/apecloud/kb-cloud-client-go"
---

# kb-cloud-client-go

This repository contains a Go API client for the KubeBlocks Cloud API.

## Requirements

* Go 1.22+

## Installation

```bash
go get github.com/apecloud/kb-cloud-client-go
```

## Layout

The client library contains the following packages:

### The KubeBlocks Cloud API Client

The main API client is located in the `api/kbcloud` directory. Import it with:

```go
import "github.com/apecloud/kb-cloud-client-go/api/kbcloud"
```

### The Admin API Client 

The admin API client is located in the `api/kbcloud/admin` directory. Import it with:

```go
import "github.com/apecloud/kb-cloud-client-go/api/kbcloud/admin" 
```

### The Data API Client

The data API client is located in the `api/kbcloud/data` directory. Import it with:

```go
import "github.com/apecloud/kb-cloud-client-go/api/kbcloud/data"
```

## Authentication

The client supports authentication via API Key & Secret. The recommended way is to use environment variables with NewDefaultContext:

```go
// Use environment variables:
// KB_CLOUD_API_KEY_NAME - API key name
// KB_CLOUD_API_KEY_SECRET - API key secret
// KB_CLOUD_SITE - Optional site configuration
ctx :=…
