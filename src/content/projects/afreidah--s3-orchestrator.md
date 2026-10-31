---
repo: "afreidah/s3-orchestrator"
name: "s3-orchestrator"
description: "Storage orchestration layer presenting many S3/blob providers as a single S3 endpoint, keeping a configurable number of copies across them with read failover, plus optional per-backend byte, request, ingress and egress limits, zstd compression and envelope encryption"
readmeQualityOk: true
url: "https://github.com/afreidah/s3-orchestrator"
homepage: "https://s3-orchestrator.munchbox.cc/"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["backup-tool", "cloud-storage", "data-replication", "devops", "failover", "golang", "homelab", "minio", "multi-cloud", "object-storage"]
stars: 45
forks: 10
openIssues: 68
closedIssues: 800
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-02-18T01:48:24Z"
lastCommitAt: "2026-10-31T15:59:23Z"
lastReleaseAt: "2026-03-06T23:33:32Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 48
maintainers: ["afreidah", "dependabot[bot]", "jabbott-iii"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a42f780c45514c317e8360b1ca386d9d7af57fde232d9e5eebe22914a0279aa/afreidah/s3-orchestrator"
discussionCount: 2
---

# s3-orchestrator

Most applications talk to one S3 backend, which ties them to that provider's uptime, pricing, and limits. s3-orchestrator puts a single S3 endpoint in front of any number of S3-compatible backends - OCI Object Storage, Backblaze B2, AWS S3, MinIO, Wasabi, Cloudflare R2, anything that speaks S3 - and presents them as one or more virtual buckets. It tracks where every object lives in its own database, which is what lets it enforce per-backend byte quotas, keep N copies across providers, fail reads over when one goes dark, and take a backend out of the fleet without downtime.

Clients see one endpoint and one namespace. The backends never learn the orchestrator exists - they see ordinary S3 calls, so any provider the AWS SDK can talk to works.

## Who this is for

| Audience | Use case |
|---|---|
| **Homelabbers** | Stack free-tier allocations from multiple providers into usable storage without paying for a single plan. |
| **Self-hosters running MinIO** | Add automatic cloud backups to a local MinIO instance with one config change - no sync scripts or extra tooling. |
| **Small teams and startups** | Multi-cloud redundancy and encryption without the cost or…
