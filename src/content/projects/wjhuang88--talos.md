---
repo: "wjhuang88/talos"
name: "talos"
description: "A safety-first, minimal-core agent runtime in Rust. CLI-first, evolving into a full agent platform with built-in self-evolution."
readmeQualityOk: true
url: "https://github.com/wjhuang88/talos"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 6
forks: 0
openIssues: 55
closedIssues: 122
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-05-29T17:04:06Z"
lastCommitAt: "2026-11-27T16:22:54Z"
lastReleaseAt: "2026-07-11T17:24:09Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 48
maintainers: ["wjhuang88"]
openGraphImageUrl: "https://opengraph.githubassets.com/865b25a21b078b549f1061d8d018bcf2faab65f4866237c0a49972c11257ff6e/wjhuang88/talos"
---

# Talos

### SQLite migration (development candidate)

The SQLite upgrade candidate uses bundled SQLite 3.54.1 and rusqlite 0.43.
Rust consumers that directly use rusqlite errors must migrate to the same version;
recovery index operations now require a mutable index. See [ADR-106](https://github.com/wjhuang88/talos/blob/HEAD/docs/decisions/106-sqlite-native-upgrade-and-error-type-migration.md)
for API, data compatibility and rollback requirements. This breaking dependency-type
change requires the next minor release; it is not a 0.10 patch upgrade or an
instruction to rewrite existing session data. Native and installed-host acceptance
remain required before delivery.

### Process memory policy (I316 development)

Foreground shell output on Unix and Windows retains up to 1 MiB of raw bytes per stream,
reports truncation, and exposes an owner for process-group or Job cleanup confirmation.
It displays stdout followed by stderr; arrival ordering between streams is not retained.
