---
repo: "huangy7/lokii"
name: "lokii"
description: "Blazingly fast, native macOS file search powered by Rust and AppKit — like Everything for Mac"
readmeQualityOk: true
url: "https://github.com/huangy7/lokii"
homepage: "https://lokii.huangy.top"
language: "Swift"
languages: ["Swift", "Rust"]
languagePcts: [54, 40]
topics: ["appkit", "everything", "everything-alternative", "file-search", "macos", "rust", "swift"]
stars: 90
forks: 8
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-10-02T11:13:06Z"
lastCommitAt: "2026-10-24T08:09:08Z"
lastReleaseAt: "2026-10-20T15:20:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 29
maintainers: ["huangy7"]
openGraphImageUrl: "https://opengraph.githubassets.com/32a438d9412f9a193ca9239b20b2aabb536133eeecd70e01ee9a606af9f23d9a/huangy7/lokii"
discussionCount: 0
---

Lokii is a native macOS instant file search tool engineered for developer-grade speed and desktop ergonomics — bringing the beloved, lightning-fast "Everything" file search experience to macOS. Powered by a high-performance in-memory index engine in Rust (`lokii-core`) bridged to a native Swift/AppKit user interface via UniFFI, Lokii delivers sub-millisecond query latency across hundreds of thousands of files with real-time FSEvents filesystem synchronization.

## Features

| Feature | Description |
| :--- | :--- |
| **Instant As-You-Type Search** | Sub-millisecond response latency across 500,000+ files with low memory footprint (under 100MB). |
| **Multi-Mode Query Engine** | Intelligent mode detection supporting substring, wildcard (`*`, `?`), regular expression (`^...$`), and fuzzy matching. |
| **Real-Time FSEvents Stream** | Multi-channel FSEvents event stream with dirty-queue debouncing to keep the index in sync without high CPU overhead. |
| **Native AppKit Density** | High-density virtualized table view, native macOS file icons, zebra striping, and spring-damped micro-interactions. |
| **Keyboard-First Workflow** | Global shortcut toggle (`⌘⇧Space`), arrow navigation,…
