---
repo: "zackees/zccache"
name: "zccache"
description: "Blazing Fast cpp / rust / emscripten drop in replacement for sccache and ccache"
readmeQualityOk: true
url: "https://github.com/zackees/zccache"
homepage: "https://zackees.github.io/zccache/"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["build-cache", "ccache", "compiler-cache", "cpp", "emscripten", "rust", "sccache"]
stars: 23
forks: 8
openIssues: 43
closedIssues: 626
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-03-08T18:23:35Z"
lastCommitAt: "2026-10-22T08:51:51Z"
lastReleaseAt: "2026-05-11T22:34:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["zackees", "klimkin"]
openGraphImageUrl: "https://opengraph.githubassets.com/d654c730aa75e8e0ea653e1371451f5dcbbde87195a897ee9b7294aba3b605a3/zackees/zccache"
---

# zccache

### A blazing fast compiler cache for C/C++ and Rust

Inspired by [sccache](https://github.com/mozilla/sccache), but optimized for local-first use
with aggressive file metadata caching and filesystem watching.

## Quick Install

```bash
curl -LsSf https://github.com/zackees/zccache/releases/latest/download/install.sh | sh
```

```powershell
powershell -ExecutionPolicy Bypass -c "irm https://github.com/zackees/zccache/releases/latest/download/install.ps1 | iex"
```

Verify:

```bash
zccache --version
```

## Performance

All benchmark rows run with `ZCCACHE_MODE=REFLINK_OR_LINK_OR_COPY`: each
cache hit is delivered by reflink where the volume supports it, else by a
hardlink to the cache, else by a copy. Each image header names the mode.
Standalone zccache defaults to `AUTO` (reflink, else copy; no shared inodes),
and soldr probes its cache/target volume once and passes the explicit
mode that fits (`REFLINK`, else `LINK`, else `COPY`). See
[Materialization mode](https://github.com/zackees/zccache/blob/HEAD/docs/architecture/artifact-store.md#materialization-mode-zccache_mode-1683).

The benchmark images show the latest **successful** benchmark run, whether
scheduled or…
