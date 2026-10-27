---
repo: "R3n3r0/Nexo"
name: "Nexo"
description: "Self-hosted S3-compatible object storage in Go: single binary with web console and CLI, erasure coding, clustering, IAM, presigned URLs, CloudFront-style custom domains with caching. A MinIO alternative under AGPL-3.0."
readmeQualityOk: true
url: "https://github.com/R3n3r0/Nexo"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["backup", "cdn", "cloud-storage", "distributed-storage", "docker", "golang", "helm", "homelab", "iam", "kubernetes"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-10-07T20:05:11Z"
lastCommitAt: "2026-10-27T09:17:07Z"
lastReleaseAt: "2026-10-27T09:18:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 61
maintainers: ["R3n3r0"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8e851e84597a837a9df1cfafa97e1ff600a00eb85892e4529a2d7d0fd4deb1c/R3n3r0/Nexo"
---

One binary: S3 server, Admin API and web console. From one drive to a multi-node cluster.

## ✨ Why Nexo

- **One binary, no moving parts.** `nexo` is the S3 server, the Admin API and the web console; there is no
  external metadata database. The same binary runs on one drive, on several drives with erasure coding, or as a
  cluster of nodes.
- **Really S3.** It passes all 451 applicable tests of Ceph's `s3-tests` and the 638 of MinIO's `mint` SDK
  suites, on one drive, several drives and in a cluster: your SDKs, `aws`, `rclone` and backup tools just work.
- **Your videos play the moment they land.** An uploaded MP4 streams as HLS straight away, and a media worker
  can add every quality from 240p to 4K, a poster and seek-bar thumbnails, with no ffmpeg anywhere.
- **Every photo in the format and size each screen needs.** The same worker turns every uploaded image into
  AVIF, WebP, JPEG and PNG at every width, and one URL serves the most compact one the browser accepts, on the
  S3 endpoint or on your own domain.
- **Built for operators.** A console for everything, Prometheus metrics with a ready-made Grafana dashboard,
  live traces and logs, and packages for every platform.…
