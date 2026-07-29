---
repo: "xgo-dev/llar"
name: "llar"
description: "Cloud-based Package Management Service"
readmeQualityOk: true
url: "https://github.com/xgo-dev/llar"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 5
forks: 4
openIssues: 32
closedIssues: 21
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2025-09-22T01:52:26Z"
lastCommitAt: "2026-07-29T06:13:06Z"
lastReleaseAt: "2026-07-24T07:21:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 76
maintainers: ["MeteorsLiu", "xushiwei", "fennoai[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7946990fa5f9592707751ccb7b3c3a314eab25f062eff0aa05481ad38562ffd2/xgo-dev/llar"
---

# LLAR

LLAR is a cloud-based multi-language package manager built with [XGo](https://github.com/goplus/xgo). It resolves dependencies, downloads source code, and builds libraries from source using declarative formulas.

## Installation

```bash
go install -ldflags="-checklinkname=0" github.com/goplus/llar/cmd/llar@latest
```

## Usage

### Install a package

```bash
# Install zlib and its dependencies
llar install madler/zlib@v1.3.2

# Show remote build output
llar install -v madler/zlib@v1.3.2

# Install a selected build matrix
llar install --os linux --arch amd64 --option shared=ON madler/zlib@v1.3.2

# Print the installed module result as JSON
llar install --json madler/zlib@v1.3.2

# Install and copy the root artifact into a directory
llar install -o ./zlib-out madler/zlib@v1.3.2

# Install and export the root artifact as an archive
llar install -o zlib.tar.gz madler/zlib@v1.3.2
```

### Build a package

```bash
# Build zlib
llar make madler/zlib@v1.3.1

# Build with verbose output
llar make -v madler/zlib@v1.3.1

# Print the build result as JSON
llar make --json madler/zlib@v1.3.1

# Build and export to a directory
llar make -o ./output madler/zlib@v1.3.1

# Build and export…
