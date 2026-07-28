---
repo: "go-faster/fs"
name: "fs"
description: "S3-compatible storage"
readmeQualityOk: true
url: "https://github.com/go-faster/fs"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["go", "golang", "s3", "storage"]
stars: 5
forks: 0
openIssues: 14
closedIssues: 21
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2025-10-27T04:33:07Z"
lastCommitAt: "2026-07-28T14:57:19Z"
lastReleaseAt: "2026-07-24T00:57:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 67
maintainers: ["ernado", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac2525611506dde0ef7d4d1a77e7189461d521e22a81c5fc9027270abb0f8a30/go-faster/fs"
---

# fs [](https://pkg.go.dev/github.com/go-faster/fs#section-documentation) [](https://codecov.io/gh/go-faster/fs) [](https://go-faster.org/docs/projects/status#experimental)

S3-compatible object storage that scales from a single binary to a replicated
cluster. It began as a lightweight server for development and testing, and now
also runs as a distributed, failure-domain-aware object store — while staying a
single static binary and an embeddable Go library.

> **Status: experimental.** The single-node server is mature and heavily
> conformance-tested; the distributed cluster mode (M3) is functional but still
> hardening. Pin a version and read [COMPATIBILITY.md](https://github.com/go-faster/fs/blob/HEAD/COMPATIBILITY.md) and
> [docs/FAILURE-MODEL.md](https://github.com/go-faster/fs/blob/HEAD/docs/FAILURE-MODEL.md) before trusting production data
> to it.

## Features

### Core S3 server

- Bucket operations (create, delete, list) and object operations (put, get,
  delete, list, copy, tagging, metadata, `x-amz-meta-*`).
- Multipart uploads, presigned URLs (≤7-day expiry) and streaming (chunked)
  uploads.
- **AWS Signature V4** auth by default: multiple credentials, per-bucket…
