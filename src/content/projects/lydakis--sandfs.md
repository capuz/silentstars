---
repo: "lydakis/sandfs"
name: "sandfs"
description: "A copy-on-write sandbox filesystem for agents: mount any data lazily, fork it instantly, and see exactly what changed."
readmeQualityOk: true
url: "https://github.com/lydakis/sandfs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["ai-agents", "copy-on-write", "filesystem", "fuse", "mcp", "rust", "sandbox", "virtual-filesystem"]
stars: 9
forks: 0
openIssues: 31
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2025-11-16T16:20:05Z"
lastCommitAt: "2026-10-26T09:17:09Z"
lastReleaseAt: "2026-10-26T06:05:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 84
undervaluedScore: 65
maintainers: ["lydakis", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf68071bcfc59266f0ac1422364200eb2212221aa0c392568cfa929202c1b33a/lydakis/sandfs"
---

# sandfs

sandfs gives an agent a private copy of your files to work in, without copying anything. Point it at a folder, a git commit or any data you can list and read. The agent reads and writes as it likes, your originals never change, and when it's done you get the list of files it added, changed or deleted, so you decide what to keep.

- **Nothing is copied up front.** Files are fetched from their source as they are needed, so mounting a huge folder or repository is instant.
- **Every attempt gets its own copy, for free.** Forking a workspace in Python or Rust takes constant time however much data is mounted (a fork mounted as a folder costs a few milliseconds more), so ten agents can try ten things side by side without seeing each other's changes.
- **You see exactly what changed.** `changes()` lists the files, and you write back only the ones you want.

Files are bytes of any kind: documents, spreadsheets, images, data sets and code alike.

> **Status**: early. The core is Rust, the Python package is a thin binding over it, and APIs may still change.

## Install

```bash
pip install sandfs             # Python 3.11+, prebuilt for Linux, macOS and Windows
```

The `sandfs`…
