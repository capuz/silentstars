---
repo: "mkienitz/brother_ql"
name: "brother_ql"
description: "Generate Brother QL Raster Command data from images"
readmeQualityOk: true
url: "https://github.com/mkienitz/brother_ql"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 13
forks: 8
openIssues: 0
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 5
createdAt: "2024-03-07T20:17:46Z"
lastCommitAt: "2026-08-11T04:48:28Z"
lastReleaseAt: "2026-08-11T04:50:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 84
undervaluedScore: 61
maintainers: ["mkienitz"]
openGraphImageUrl: "https://opengraph.githubassets.com/db2d43f0cc407ac81a7b222ca5b81fc87533ffe629db668c740f3d6c9633a697/mkienitz/brother_ql"
---

# Brother QL Rust Tools

Rust tools for Brother QL series label printers. This project provides both a [Rust library crate](https://crates.io/crates/brother_ql) for programmatic label printing and a [command-line tool](https://crates.io/crates/brother-label) for easy printing from the terminal.

## 📦 Components

### 📚 `brother_ql` - Rust Library

A Rust library to convert images to Brother QL raster command data and print labels directly via USB or kernel connections.

**Features:** Image to raster conversion, USB printing with status monitoring, two-color printing support, 28+ media types

**Links:**
- [README →](https://github.com/mkienitz/brother_ql/blob/HEAD/crates/brother_ql/README.md)
- [API Docs (docs.rs) →](https://docs.rs/brother_ql)
- [crates.io →](https://crates.io/crates/brother_ql)

**Quick example:**
```rust
use brother_ql::{connection::*, media::Media, printjob::PrintJobBuilder};

let mut conn = UsbConnection::open(UsbConnectionInfo::discover()?.unwrap())?;
let job = PrintJobBuilder::new(Media::C62)
    .add_label(image::open("label.png")?)
    .build()?;
conn.print(job)?;
```

### 🔧 `brother-label` - CLI Tool

A command-line application for printing labels to…
