---
repo: "spboyer/pycontainer-build"
name: "pycontainer-build"
description: "Docker-free OCI image builder for Python projects"
readmeQualityOk: true
url: "https://github.com/spboyer/pycontainer-build"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 10
forks: 1
openIssues: 93
closedIssues: 48
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-19T17:23:13Z"
lastCommitAt: "2026-11-23T13:29:41Z"
lastReleaseAt: "2025-11-20T22:46:38Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 75
undervaluedScore: 62
maintainers: ["spboyer", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6793c80d088a5bbf5fa59e75445301c6c33f3506329c5c0977ebc7e44acf4e72/spboyer/pycontainer-build"
---

# 🐍 pycontainer-build

> **Build OCI container images from Python projects — no Docker required**

A native, Docker-free container image builder for Python, inspired by .NET's `PublishContainer`. Create production-ready OCI images using pure Python, without Dockerfiles or Docker daemon.

---

## 🎯 Why This Exists

Today, containerizing Python applications requires:
- Writing and maintaining Dockerfiles
- Installing Docker Desktop or Docker Engine
- Understanding Docker-specific concepts and commands
- Managing multi-stage builds for dependencies

**pycontainer-build** provides a simpler path:

```bash
pycontainer build
```

That's it. No Dockerfile. No Docker daemon. Just pure Python creating OCI-compliant container images.

This mirrors the elegant developer experience that .NET provides with its SDK's native container publishing — now available for Python.

---

## 🚀 Quick Start

### Installation

Requires Python 3.11 or newer. Until a package release is available, install
from a repository checkout:
