---
repo: "ciresnave/auth-framework"
name: "auth-framework"
description: "A comprehensive, authentication and authorization framework for Rust applications"
readmeQualityOk: true
url: "https://github.com/ciresnave/auth-framework"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 44
forks: 8
openIssues: 3
closedIssues: 40
watchers: 1
contributors: 3
recentReleases: 9
createdAt: "2025-07-09T02:22:37Z"
lastCommitAt: "2026-10-31T19:00:53Z"
lastReleaseAt: "2026-10-27T06:43:28Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 62
maintainers: ["ciresnave-bot", "ciresnave"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5c4559f479b98328021bb4aafe0779b7c7b6eda40aa113e469bd5286f9e68a7/ciresnave/auth-framework"
---

# Auth Framework

## 🏆 The Most Complete Authentication & Authorization Framework for Rust

Security-first • Feature-rich • Batteries-included • Release candidate

## ⚡ Quick Start - Get Running in Seconds

**No Rust installation required!** Use our precompiled binaries:

```bash
# Linux/macOS - One-line installation
curl -sSL https://raw.githubusercontent.com/ciresnave/auth-framework/main/scripts/install.sh | bash

# Windows PowerShell - One command
iwr -useb https://raw.githubusercontent.com/ciresnave/auth-framework/main/scripts/install.ps1 | iex

# Docker - Instant deployment
# No `:latest` tag is published (every release so far has been a pre-release,
# which the image-tagging workflow doesn't tag `latest`), and an image is not
# published for every crate release. Replace <tag> with the newest tag listed at
# https://github.com/ciresnave/auth-framework/pkgs/container/auth-framework
# and never use a tag older than 0.6.0-rc85: earlier ones fall inside published
# security advisories (see SECURITY.md).
docker run -p 8080:8080 ghcr.io/ciresnave/auth-framework:<tag>
```

**That's it!** Server running at `http://localhost:8080` 🎉

The `auth-framework` executable now starts the…
