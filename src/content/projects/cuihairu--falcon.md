---
repo: "cuihairu/falcon"
name: "falcon"
description: "A blazing-fast, secure download manager."
readmeQualityOk: true
url: "https://github.com/cuihairu/falcon"
homepage: "https://cuihairu.github.io/falcon/"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["aria2", "bittorrent", "cloud-storage", "cpp", "cross-platform", "download-manager", "downloader", "ftp", "hls", "http"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-11-02T12:43:38Z"
lastCommitAt: "2026-10-11T10:15:49Z"
lastReleaseAt: "2026-05-01T03:07:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 73
maintainers: ["cuihairu"]
openGraphImageUrl: "https://opengraph.githubassets.com/c81ea1b627193bb0f4b42008b3795a25ef903999520a3bc48a6e40a3e9a0b0ac/cuihairu/falcon"
discussionCount: 1
---

# Falcon

  **The Universal Resource Transfer Engine**

  A cross-platform C++ engine for downloading and accessing resources across
  HTTP, FTP, SFTP, WebDAV, object storage, and P2P networks — packaged as a
  CLI, a daemon, and a desktop app. The transfer stack is built on open-source
  components: libcurl, OpenSSL, libtorrent, and libssh2 carry the protocol data
  planes; the event-driven V2 engine and the aria2-compatible CLI/RPC surface
  follow aria2's architecture.

  [中文](https://github.com/cuihairu/falcon/blob/HEAD/README.zh.md) | [English](https://github.com/cuihairu/falcon/blob/HEAD/README.md)

Screenshots and design prototypes are showcased on the
[docs site](https://cuihairu.github.io/falcon/); the full gallery (52 shots)
lives in [docs/design/ui-sandbox/](https://github.com/cuihairu/falcon/blob/HEAD/docs/design/ui-sandbox/README.md).

## Features

- **Dual Download Engines**
  - **V1 engine** (default): libcurl-based, multi-threaded segmented downloading, resume, per-task speed limits
  - **V2 engine** (experimental, `--http-engine v2`): aria2-style event-driven rewrite —
    non-blocking I/O over epoll/kqueue/poll/WSAPoll, command pattern with connection
    reuse,…
