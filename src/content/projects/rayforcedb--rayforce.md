---
repo: "RayforceDB/rayforce"
name: "rayforce"
description: "SIMD-accelerated columnar database for analytics — pure C, zero dependencies"
readmeQualityOk: true
url: "https://github.com/RayforceDB/rayforce"
homepage: "https://rayforcedb.com/"
language: "C"
languages: ["C"]
languagePcts: [91]
topics: ["analytics", "columnar", "database", "financial", "market-data", "simd", "timeseries"]
stars: 293
forks: 31
openIssues: 34
closedIssues: 654
watchers: 10
contributors: 23
recentReleases: 0
createdAt: "2023-02-23T11:42:28Z"
lastCommitAt: "2026-11-25T02:14:53Z"
lastReleaseAt: "2026-06-24T12:28:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 41
maintainers: ["singaraiona", "ser-vasilich", "vbmithr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/605546193/b273a017-e241-4102-bf5f-ee12d09681a7"
---

Columnar analytics and graph traversal in one fused pipeline.

---

Rayforce is a pure C zero-dependency embeddable engine where columnar
analytics and graph traversals share a single operation DAG, pass through a
multi-pass optimizer, and execute as morsel-driven bytecode compiled at
execution time. No malloc.

## Install

**Homebrew** (macOS & Linux):

```bash
brew install rayforcedb/tap/rayforce
```

**Debian / Ubuntu** (`.deb`, x86-64) — grab the `.deb` from the
[latest release](https://github.com/RayforceDB/rayforce/releases/latest):

```bash
curl -LO https://github.com/RayforceDB/rayforce/releases/download/vX.Y.Z/rayforce_X.Y.Z_amd64.deb
sudo dpkg -i rayforce_X.Y.Z_amd64.deb
```

**Prebuilt tarball** (Linux x86-64 / macOS arm64) is also attached to each
release. Or build [from source](#quick-start) below — zero dependencies, just
`make`.

## Quick Start

```bash
make            # debug build (ASan + UBSan)
make release    # optimized build
make test       # fast suite: no sanitizers, parallel (dev loop, PRs into dev)
make test-full  # every test under ASan + UBSan (release PRs)
./rayforce      # start the Rayfall REPL
```
