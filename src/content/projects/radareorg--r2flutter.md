---
repo: "radareorg/r2flutter"
name: "r2flutter"
description: "Dart/Flutter support for radare2"
readmeQualityOk: true
url: "https://github.com/radareorg/r2flutter"
language: "C"
languages: ["C", "Objective-C"]
languagePcts: [70, 22]
stars: 23
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 10
recentReleases: 3
createdAt: "2025-09-11T22:35:05Z"
lastCommitAt: "2026-10-01T10:23:36Z"
lastReleaseAt: "2026-09-08T11:42:04Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 72
maintainers: ["radare", "trufae", "fatalSec"]
openGraphImageUrl: "https://opengraph.githubassets.com/e731ef9b896b84dba1daead9ad76aba0bd64794018fbfe46593e2194d3ba98f2/radareorg/r2flutter"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/radareorg"]
---

# r2flutter

</p>

**r2flutter brings Dart and Flutter AOT awareness to [radare2](https://rada.re/).**
It reads the snapshots embedded in release builds and turns their metadata into
useful names, addresses, strings, classes, and references for reverse
engineering. It is available both as the `bin/r2flutter` command-line tool and
as an `r2flutter` command inside radare2.

Give it an extracted Android `libapp.so`, an Android directory containing one,
an iOS `.app` bundle, or a direct AOT binary. AArch64 is the primary analysis
target. The parser has in-tree layouts for Dart 2.10 through 3.12; see the
[support matrix](https://github.com/radareorg/r2flutter/blob/HEAD/doc/support.md) for platform and version details.

## What it can do

- Find Dart AOT snapshots in Flutter apps and supported standalone Dart
  containers.
- Recover snapshot headers, functions, classes, fields, type names, strings,
  ObjectPool values, instruction-table entries, and metadata references.
- Apply recovered names, flags, comments, classes, and code references to a
  radare2 session.
- Emit readable text, JSON for automation, or radare2 commands for importing
  into another session.
- Use Flutter's…
