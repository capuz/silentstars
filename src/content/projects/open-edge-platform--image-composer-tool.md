---
repo: "open-edge-platform/image-composer-tool"
name: "image-composer-tool"
description: "This framework provides a general-purpose toolchain for composing OS images from pre-built artifacts of any Linux distribution that supports Debian or RPM packages. With Image Composer Tool, you can generate edge-optimized OS images using Intel's pre-curated YAML templates or your own customization."
readmeQualityOk: true
url: "https://github.com/open-edge-platform/image-composer-tool"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 15
forks: 24
openIssues: 23
closedIssues: 68
watchers: 1
contributors: 29
recentReleases: 0
createdAt: "2025-05-21T00:45:37Z"
lastCommitAt: "2026-10-15T08:32:48Z"
lastReleaseAt: "2026-03-11T22:29:12Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 78
maintainers: ["Shruti-Raj-Vansh-Singh", "arodage", "yktyagi"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce81a5e0cc40385019eb17bb69bcc68ba7f8a512f18c081e4f6b7d48ff91c504/open-edge-platform/image-composer-tool"
discussionCount: 9
---

# Image Composer Tool (ICT)

A command-line tool for building custom Linux images from pre-built packages. Define what you need in a YAML template, run one command, and get a bootable RAW or ISO image.

## How It Works

The diagram above illustrates the overall build flow and may show representative or planned provider/architecture
combinations. The table below lists the OS and architecture combinations that are currently supported.
## Supported Distributions

| OS | Distribution | Architecture |
|----|-------------|--------------|
| Azure Linux | azl3 | x86_64 |
| Edge Microvisor Toolkit | emt3 | x86_64 |
| Red Hat Compatible Distro | rcd10 | x86_64 |
| Wind River eLxr | elxr12 | x86_64 |
| Ubuntu | ubuntu24 | x86_64 |
| Ubuntu | ubuntu26 | x86_64 |

## Quick Start

### 1. Build the Tool

Requires Go 1.24+.
Recommended Ubuntu 24.04

```bash
git clone https://github.com/open-edge-platform/image-composer-tool.git
cd image-composer-tool
go build -buildmode=pie -ldflags "-s -w" ./cmd/image-composer-tool
```

This produces `./image-composer-tool` in the repo root.

Alternatively, use [Earthly](https://earthly.dev/) for reproducible production
builds (output:…
