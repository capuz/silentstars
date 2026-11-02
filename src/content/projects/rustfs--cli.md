---
repo: "rustfs/cli"
name: "cli"
description: "A S3-compatible command-line client written in Rust."
readmeQualityOk: true
url: "https://github.com/rustfs/cli"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["rustfs", "s3-client", "s3-cli"]
stars: 174
forks: 26
openIssues: 13
closedIssues: 58
watchers: 2
contributors: 18
recentReleases: 0
createdAt: "2026-01-11T13:01:15Z"
lastCommitAt: "2026-11-02T15:17:26Z"
lastReleaseAt: "2026-04-19T16:29:28Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 35
maintainers: ["cxymds", "overtrue", "houseme"]
openGraphImageUrl: "https://opengraph.githubassets.com/6583e8342540f2c6d302310a62f80ce85d8a21bcb8f08470623d607906db1910/rustfs/cli"
---

# rc - Rust S3 CLI Client

A S3-compatible command-line client written in Rust.

Migrating from MinIO `mc`? See the
[mc compatibility and server-blocker matrix](https://github.com/rustfs/cli/blob/HEAD/docs/reference/rc/mc-compatibility.md).

## Features

- 🚀 **High Performance** - Written in Rust with async concurrent operations
- 🔧 **S3 Compatible** - Data operations support RustFS, MinIO, AWS S3, and other S3-compatible services
- 📦 **Cross-Platform** - Supports Linux, macOS, and Windows
- 🎨 **Friendly Output** - Human-readable and JSON format output
- 🔒 **Secure** - Secure credential storage, no sensitive data in logs

## Installation

### Binary Download

Download the appropriate binary for your platform from the [Releases](https://github.com/rustfs/cli/releases) page.
On Linux, use the default `linux-amd64` / `linux-arm64` artifacts for maximum compatibility (`musl` static build).
If you specifically need glibc-linked builds, use `linux-amd64-gnu` / `linux-arm64-gnu`.

### DEB/RPM Packages

Debian and RPM packages are published as GitHub release assets for each tagged release.
They contain the default statically linked Linux binaries, so installation does not
impose a…
