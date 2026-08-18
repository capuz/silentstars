---
repo: "strahe/SynapS3"
name: "SynapS3"
description: "SynapS3 is an open-source, self-hosted S3-compatible gateway for Filecoin storage."
readmeQualityOk: true
url: "https://github.com/strahe/SynapS3"
homepage: "https://synaps3.strahe.com/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [79, 20]
topics: ["curio", "filecoin", "gateway", "pdp", "s3"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-19T11:23:41Z"
lastCommitAt: "2026-08-18T04:09:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 40
maintainers: ["strahe"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bfcbe2e19e4ab87a726cf9cd905ff648e429a67c0e18e75dfa3c287bd8d7846/strahe/SynapS3"
---

# SynapS3

SynapS3 is an open-source, self-hosted S3-compatible gateway for Filecoin storage.

## Documentation

- [Documentation](https://synaps3.strahe.com/en/)
- [中文文档](https://synaps3.strahe.com/zh/)

## Highlights

- S3-compatible bucket, object, versioning, and multipart APIs.
- Cache-first reads and writes, with Filecoin upload handled in the background.
- Admin dashboard for objects, wallet, tasks, topology, settings, and health.
- Docker Compose or source build for single-node deployments.

Coming soon: replica repair for provider outages.

## Dashboard

## Architecture

Writes commit to local cache and metadata before returning success. Reads use local cache first, then committed Filecoin copies when available.

## Core S3 Compatibility

| Area | Operation | Status | Notes |
| --- | --- | --- | --- |
| Bucket | `CreateBucket` | ✅ | Creates a bucket |
| Bucket | `HeadBucket` | ✅ | Checks bucket metadata |
| Bucket | `ListBuckets` | ✅ | Lists active buckets |
| Bucket | `DeleteBucket` | ❌ | Bucket deletion is not supported |
| Bucket | `GetBucketVersioning` | ✅ | Buckets are always versioning-enabled |
| Bucket | `PutBucketVersioning` | ⚠️ | Accepts `Enabled`; `Suspended`…
