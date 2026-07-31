---
repo: "wushilin/rust-s3-server"
name: "rust-s3-server"
description: "An S3 compatible Object Storage written in Rust. Ideal for local test environment"
readmeQualityOk: true
url: "https://github.com/wushilin/rust-s3-server"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 18
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-08-13T03:30:48Z"
lastCommitAt: "2026-07-31T06:19:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 60
maintainers: ["wushilin"]
openGraphImageUrl: "https://opengraph.githubassets.com/377ef82c23646ae2b2bdbcae6f921a62c5c183ddce14936e85fcd9a18cd4e054/wushilin/rust-s3-server"
---

# rusts3 — single-node S3-compatible server

A lightweight, single-node S3-compatible server in Rust, with a built-in
management console. The core AWS S3 API — authentication, bucket/object CRUD,
listings, multipart, copy, presigning, browser POST, and both path-style and
virtual-hosted-style addressing — is verified continuously against the MinIO
Mint suite and real AWS SDKs.

Good fit for local development, integration tests, CI, and small trusted
production deployments. Features that only make sense at AWS scale (versioning,
ACLs, replication, S3 Select) are [deliberately out of scope](#intentional-limits).

## Quick start

```bash
cargo build --release
target/release/rusts3 init      # writes config.yaml with every option at its default
target/release/rusts3 run
```

Or with Docker — the image runs with no configuration at all:

```bash
docker build -t rusts3:latest .
docker run -d --name rusts3 \
  -p 8002:8002 -p 8003:8003 \
  -v rusts3-data:/data \
  -e RUSTS3_ADMIN_PASSWORD=change-me \
  -e RUSTS3_ACCESS_KEY=myaccesskey -e RUSTS3_SECRET_KEY=mysecretkey \
  rusts3:latest
```

- **S3 API** → `http://127.0.0.1:8002` (point the AWS CLI/SDKs, `mc`, `s3cmd`, rclone here)
-…
