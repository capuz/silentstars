---
repo: "mandiant/macos-UnifiedLogs"
name: "macos-UnifiedLogs"
description: "A cross platform parser for Apple UnifiedLogs!"
readmeQualityOk: true
url: "https://github.com/mandiant/macos-UnifiedLogs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["apple", "dfir", "forensics", "macos", "rust"]
stars: 360
forks: 44
openIssues: 8
closedIssues: 37
watchers: 12
contributors: 24
recentReleases: 0
createdAt: "2022-08-18T17:33:30Z"
lastCommitAt: "2026-07-04T23:15:19Z"
lastReleaseAt: "2026-02-01T20:39:33Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 29
maintainers: ["puffyCid", "jrouaix", "vee1e"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c18cbc450a9945a44c4ded0227e92f9a4d36bd354c2ca1f271a7029f1f2aef9/mandiant/macos-UnifiedLogs"
---

# macos-unifiedlogs

A simple and high-performance Rust library that can help parse Apple's Unified Log files.

Unified Logs were introduced in macOS 10.12 (Sierra, 2016) as part of Apple's unified logging system across macOS, iOS, watchOS, and tvOS. This library can parse the binary tracev3 files and emit structured log entries.

Data that is currently extracted includes:

- Process ID
- Thread ID
- Activity ID
- Parent Activity ID
- Log Message
- Timestamp (Intel and ARM supported)
- Effective User ID (EUID)
- Log Type
- Event Type
- Library
- Subsystem
- Category
- Process
- Raw message
- Raw log items
- Library UUID
- Process UUID
- Boot UUID
- Timezone

## Running

An example binary is available to download

- `unifiedlog_iterator` - Can parse a logarchive into a JSOL or CSV file. It can also parse the logs
  on a live system. The output file will be quite large

## Rewrite Design

Starting with version 0.7.0, the library received a large rewrite to speed up the parsing of Unified Log data.  
The rewrite parser is available with the `rewrite` feature. Its core type is
`LogEntry<'a, 'b>` — a zero-copy log entry that borrows directly from the parsed
file buffers. Messages are…
