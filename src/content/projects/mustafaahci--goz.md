---
repo: "mustafaahci/goz"
name: "goz"
description: "Instant file-search engine for Windows NTFS. A fast, open-source alternative to voidtools Everything."
readmeQualityOk: true
url: "https://github.com/mustafaahci/goz"
homepage: "https://github.com/mustafaahci/goz/releases"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cli", "everything", "everything-search", "file-search", "filesystem", "mft", "ntfs", "rust", "search-engine", "usn-journal"]
stars: 22
forks: 5
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2026-07-16T21:44:31Z"
lastCommitAt: "2026-11-04T11:28:29Z"
lastReleaseAt: "2026-11-04T09:54:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 46
maintainers: ["mustafaahci"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0724d1228e80a43dde4dfca26168a31f14a0476cf7589a3a4c3a023ed463c84/mustafaahci/goz"
---

# goz

**goz** *(göz, pronounced /ɟøz/)* is an instant file-search engine for Windows NTFS, written in Rust. A fast, open-source alternative to voidtools Everything.

goz indexes every filename on your fixed NTFS volumes and answers substring queries in single-digit milliseconds, from the command line or from your own tools over a named pipe.

## Highlights

- **Fast.** 1.8x to 6.1x quicker than Everything across every query in our [benchmarks](https://github.com/mustafaahci/goz/blob/HEAD/docs/BENCHMARKS.md), on the same machine with the same result sets. Names are kept in sort order, so the first page of a name-sorted query over three million matches arrives in about 50 ms without sorting anything.
- **Light.** ~215 MB resident under heavy querying and ~12 MB idle, against a ~3.97M-entry index.
- **Live.** Tails the NTFS USN journal, so the index stays in sync as files change, including hard-link renames that Everything 1.4 misses. The journal is sized to the volume automatically (a 2 TB disk gets about four days of changes, not the 32 MB Windows default that Everything leaves you to raise by hand), and a tail thread that wedges on a sick disk or dies outright is cancelled or…
