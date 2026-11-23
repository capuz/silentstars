---
repo: "asterisk-labs/cozip"
name: "cozip"
description: "Open a ZIP like table!"
readmeQualityOk: true
url: "https://github.com/asterisk-labs/cozip"
homepage: "https://asterisk.coop/cozip/"
language: "C++"
languages: ["C++", "C"]
languagePcts: [56, 24]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-05-14T03:23:55Z"
lastCommitAt: "2026-11-23T05:42:22Z"
lastReleaseAt: "2026-09-27T17:38:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 51
maintainers: ["csaybar", "github-actions[bot]", "mikonvergence"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1b85506687184b88061686190dab0a5e710af52310c266496fed0a71c8bf3ab/asterisk-labs/cozip"
---

---

cozip opens a ZIP like a table. It stores a Parquet manifest with one row per file
inside an ordinary ZIP, and a small index at byte 0 that says where the manifest
is, so a reader filters the manifest and fetches only the files it needs.

## Features

- **Still a ZIP**, with every file stored as it is, so `unzip`, `zipfile` and any ZIP
  tool list and extract it.
- **An index at byte 0** that gives the offset and size of the manifest, so readers
  never parse the Central Directory.
- **A Parquet manifest** with `name`, `offset` and `size` for every file, plus any
  columns you add, compressed and ready for DuckDB, pandas or Polars.
- **One range per file**, since each row gives the exact bytes of its file.
  `cozip:location` writes that range in
  [GDAL VSI](https://gdal.org/en/stable/user/virtual_file_systems.html) syntax.
- **Reads from anywhere** through [Karu](https://github.com/asterisk-labs/karu),
  whether the archive sits on a local disk, behind HTTP, in S3, GCS, Azure, Hugging
  Face or Source Cooperative.
- **An integrity hash** over the index and the end of the archive, so a truncated or
  rewritten archive fails before any offset is used.
