---
repo: "xXRoxXeRXx/lymic"
name: "lymic"
description: "Lymic, high performance desktop app for Immich. Cross-platform synchronization client for Linux, Windows and macOS. Fast, reliable, and built with Rust, Tauri, and SvelteKit."
readmeQualityOk: true
url: "https://github.com/xXRoxXeRXx/lymic"
homepage: "https://xxroxxerxx.github.io/lymic/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [64, 21]
topics: ["backup", "cross-platform", "desktop", "gallery", "immich", "linux", "macos", "photo", "rust", "self-hosted"]
stars: 28
forks: 0
openIssues: 20
closedIssues: 86
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-04-23T19:44:49Z"
lastCommitAt: "2026-11-01T10:43:04Z"
lastReleaseAt: "2026-10-18T20:02:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 49
maintainers: ["xXRoxXeRXx", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/15b5866e7f778e98770b7fee42a482bb885948d1f61716d1515cc8d12e48afab/xXRoxXeRXx/lymic"
discussionCount: 0
---

# Lymic — Desktop upload client for Immich

**Lymic** is an unofficial, cross-platform desktop client for uploading and synchronizing local media with [Immich](https://immich.app/). It watches selected local folders, detects supported media, avoids uploading assets that already exist on Immich, and streams missing files from disk.

> Lymic is an upload-oriented client, not a two-way filesystem mirror. It does not download remote assets, mirror remote deletions, rename local files, or manage albums as part of its normal synchronization workflow.

---

## Features

- **Efficient synchronization** — Unchanged files reuse their cached SHA-1/Base64 after a current size-and-mtime check; only changed or uncached files are streamed for hashing, while Immich bulk checks prevent unnecessary transfers.
- **Folder watching** — Recursively monitors watched folders, handles changes with a debounce, and rescans after watcher overflow.
- **Large-file support** — Streams multipart uploads directly from disk without retaining full files in memory.
- **Durable queue** — Persists synchronization work, pause state, progress, and failures locally; failed items can be retried.
- **Secure credentials** —…
