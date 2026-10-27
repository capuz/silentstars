---
repo: "l0ng-ai/openidea"
name: "openidea"
description: "The IDE you know, rebuilt in Rust. IntelliJ IDEA–style keymap, tool windows and search-everywhere in a fast native app: editor, code insight, debugger, Git, terminal, database and HTTP clients for 60+ languages."
readmeQualityOk: true
url: "https://github.com/l0ng-ai/openidea"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [63, 33]
topics: ["code-editor", "cross-platform", "dap", "database-client", "debugger", "desktop-app", "developer-tools", "git", "http-client", "ide"]
stars: 167
forks: 18
openIssues: 6
closedIssues: 29
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-10-21T12:23:14Z"
lastCommitAt: "2026-10-27T09:16:47Z"
lastReleaseAt: "2026-10-24T07:22:33Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 33
maintainers: ["l0ng-ai", "zzxzz12345", "kevinh458"]
openGraphImageUrl: "https://opengraph.githubassets.com/57171f3a5c128541c5b3804bf40faee98c4b3e2720446ae59a624b5ac58b55d8/l0ng-ai/openidea"
---

The IDE you know, rebuilt in Rust.

  &nbsp;·&nbsp;
  &nbsp;·&nbsp;

https://github.com/user-attachments/assets/234dd54c-1255-4b3a-b35c-533d78d737c0

OpenIDEA brings the IntelliJ IDEA way of working — its keymap, its tool windows,
its search-everything habits — to a native app with a Rust core.

Editor, code insight, debugger, Git, terminal, database and HTTP clients,
for 60+ languages. Builds for macOS, Windows and Linux.

## Benchmark

Opening [freqtrade](https://github.com/freqtrade/freqtrade) (Python, ~770 files)
with warm caches, median of 5 runs:

| | OpenIDEA | IntelliJ IDEA 2026.2.3 |
|---|---|---|
| Window with the project | **0.9 s** | 3.1 s |
| Ready (CPU settled) | **1.1 s** | 13.2 s |
| Memory (USS, all processes) | **169 MB** | 2011 MB |
| CPU time until ready | **2.4 s** | 47.9 s |
| Idle CPU | **4 %** of a core | 7 % of a core |
| Quit | **0.3 s** | 5.9 s |

A release build of OpenIDEA from `main` and IDEA with default settings and plugins, on
Windows 11, 32-core AMD, 62 GB RAM.
IDEA analyses Python more deeply, so "ready" doesn't mean the same work on
both sides. Both are measured from the outside, the same way: see…
