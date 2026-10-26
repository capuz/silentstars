---
repo: "theking90000/WD40-S3"
name: "WD40-S3"
description: "Turn Discord into high-performance S3 object storage"
readmeQualityOk: true
url: "https://github.com/theking90000/WD40-S3"
homepage: "https://console.6700067.xyz"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [73, 26]
topics: ["async-rust", "discord", "discord-storage", "encryption", "file-storage", "object-storage", "rust", "s3", "s3-compatible", "self-hosted"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-05T19:01:00Z"
lastCommitAt: "2026-10-26T18:05:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 50
maintainers: ["theking90000"]
openGraphImageUrl: "https://opengraph.githubassets.com/509c15be28ce495c28f77368b6bd5ca572ea1e0f286510baa5c7a237fa1116c3/theking90000/WD40-S3"
---

## ⚡ Turn Discord into high-performance S3 object storage

Ever thought about storing your data on Discord? People have tried it before. With WD40-S3, the goal is to make it fast, keep memory usage low, and let you use the storage tools you already have.

WD40-S3 is an object storage system written in Rust, with Discord as its storage backend and S3 support for existing applications. Want to use it for backups? Point your S3 client at it. Want to mount it as a drive? Use a tool like rclone. Prefer a web interface? It comes with a console, and you can build your own on top of the API.

It has reached **200 MB/s (1.6 Gbps)** download speed on a cheap **2-vCPU VPS**, using **80 MB of RAM** in total.

Under the hood, it uses async Rust, parallel uploads, URL prefetching and pipelining. Large files are split into chunks, with on-the-fly block encryption that still allows random access.

You also get:

- S3 support tested with the AWS CLI, rclone and JuiceFS. Full S3 API coverage is still a work in progress.
- A single executable with embedded components, or separate components you can run independently.
- An integrated cloud console where users manage their buckets, access keys and…
