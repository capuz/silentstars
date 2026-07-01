---
repo: "klboke/kkRepo"
name: "kkRepo"
description: "kkRepo is a Nexus-compatible, self-hosted artifact repository for Maven, npm, PyPI, Go, Helm, NuGet, Cargo/Rust, Docker/OCI,RubyGems, and Yum artifacts. It supports one-click migration from Nexus to kkRepo."
url: "https://github.com/klboke/kkRepo"
language: "Java"
languages: ["Java"]
languagePcts: [88]
topics: ["nexus", "artifact", "cargo", "maven", "maven-repository", "npm", "nuget", "pypi", "pypi-mirror"]
stars: 57
forks: 6
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-06-12T11:12:47Z"
lastCommitAt: "2026-07-01T07:05:27Z"
lastReleaseAt: "2026-07-01T05:00:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 39
maintainers: ["klboke", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c15fff282a73cf5e1b81a82272d38701a5d7a869d6c3458e17a0d12e62d8573/klboke/kkRepo"
---

# kkRepo

[中文](README.cn.md)

kkRepo is an independent, self-hosted artifact repository for Maven, npm, PyPI, Go, Helm, Cargo/Rust, Docker/OCI, NuGet, RubyGems, Yum, and Raw artifacts.

The project implements client-visible compatibility and migration support for Sonatype Nexus Repository deployments, including the `/repository/<repo>/...` URL layout and compatible permission/authentication behavior where required for migration. kkRepo uses MySQL for metadata and shared runtime state, supports OSS/S3 blob storage, and is designed for multi-replica deployment.

</p>

## Trademark Notice

Sonatype, Nexus, and Nexus Repository are trademarks of Sonatype, Inc. kkRepo is an independent open source project and is not affiliated with, endorsed by, sponsored by, or connected to Sonatype, Inc. References to Sonatype Nexus Repository are used only to describe compatibility, migration, or interoperability.

## Quick Start

Start a local trial environment with the public release image and MySQL:

```bash
curl -fsSL https://raw.githubusercontent.com/klboke/kkrepo/main/scripts/quickstart.sh | bash
```

Open:

- Admin console: `http://127.0.0.1:19090/admin/`
- User browser:…
