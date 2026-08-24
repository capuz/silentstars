---
repo: "Mikedan37/BlazeDB"
name: "BlazeDB"
description: "BlazeDB is a private, encrypted embedded database for Swift applications that runs without a separate server. It supports Apple platforms and Linux, with experimental Android support, and is distributed through Swift Package Manager."
readmeQualityOk: true
url: "https://github.com/Mikedan37/BlazeDB"
homepage: "https://github.com/Mikedan37/BlazeDB/blob/main/Docs/README.md"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["database", "embedded-database", "swift", "android", "encryption", "ios", "key-value-store", "linux", "macos", "wal"]
stars: 22
forks: 6
openIssues: 159
closedIssues: 50
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2025-08-03T18:27:00Z"
lastCommitAt: "2026-08-24T04:21:43Z"
lastReleaseAt: "2026-04-24T03:37:23Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 59
maintainers: ["Mikedan37", "Nitjsefnie", "yu010101"]
openGraphImageUrl: "https://opengraph.githubassets.com/863eb6436aa404c9901d300cf6c610e0f9d3d0cdf8cf6d1bedf35f99e89693ae/Mikedan37/BlazeDB"
fundingLinks: ["GITHUB:https://github.com/Mikedan37"]
---

# BlazeDB

BlazeDB is an encrypted, embedded database for Swift applications and services, with typed records, transactional writes, WAL-backed recovery, live queries, and Linux support.

It runs inside your process. No separate database server is required.

**Current release:** [v2.8.1](https://github.com/Mikedan37/BlazeDB/blob/HEAD/RELEASE.md) · [Changelog](https://github.com/Mikedan37/BlazeDB/blob/HEAD/CHANGELOG.md) · [Docs index](https://github.com/Mikedan37/BlazeDB/blob/HEAD/Docs/README.md) · [Compatibility](https://github.com/Mikedan37/BlazeDB/blob/HEAD/Docs/COMPATIBILITY.md)

---

## Try it

```swift
import BlazeDB

struct Bug: BlazeStorable {
    var id: UUID = UUID()
    var title: String
    var status: String
}

let db = try BlazeDB.open(name: "demo", password: "DemoPass123!")
let bug = Bug(title: "Crash on launch", status: "open")
try db.put(bug)

// Typed records use namespaced IDs internally (namespace:UUID).
let loaded: Bug? = try db.get("bug:\(bug.id.uuidString)")
let openBugs: [Bug] = try db.query("bug")
    .where("status", equals: "open")
    .all()
```

`"bug"` in `query("bug")` is a namespace label, not a SQL table.

```bash
git clone…
