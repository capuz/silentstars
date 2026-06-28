---
repo: "groundcover-com/groundcover-sdk-go"
name: "groundcover-sdk-go"
description: "Go SDK Library for Interacting with the groundcover API"
url: "https://github.com/groundcover-com/groundcover-sdk-go"
homepage: "https://groundcover.com"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 7
forks: 3
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2025-05-04T18:29:02Z"
lastCommitAt: "2026-06-28T06:55:25Z"
lastReleaseAt: "2025-05-22T11:43:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 65
maintainers: ["groundcover-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/634a9fc24ab4ab804579688bf6bf7c1caa424f140716c2be9cb741ea4835695f/groundcover-com/groundcover-sdk-go"
---

# groundcover Go SDK

This is the official Go SDK for interacting with the groundcover API. It provides convenient access to groundcover's services, including metrics queries and policy management.
See our docs for details: [groundcover API Docs](https://docs.groundcover.com/use-groundcover/remote-access-and-apis/api-examples)

## Prerequisites

*   Go 1.24 or higher.

## Installation

To use the SDK in your Go project, you can install it using `go get`:

```bash
go get github.com/groundcover-com/groundcover-sdk-go
```

## Configuration

### Environment Variables

The SDK reads the following environment variables for authentication and endpoint configuration:

*   `GC_API_KEY`: Your groundcover API key (required, unless `option.AllowUnauthenticated` is used).
*   `GC_BACKEND_ID`: Your groundcover Backend ID (required, unless `option.AllowUnauthenticated` is used).
*   `GC_BASE_URL`: The base URL of the groundcover API (optional, defaults to `https://api.groundcover.com`).

By default the API key and backend ID are required. You can opt out with `option.AllowUnauthenticated`, in which case the SDK does not set their headers; the server will reject the request if it requires…
