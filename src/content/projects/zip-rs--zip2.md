---
repo: "zip-rs/zip2"
name: "zip2"
description: "Zip implementation in Rust"
readmeQualityOk: true
url: "https://github.com/zip-rs/zip2"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 389
forks: 140
openIssues: 26
closedIssues: 176
watchers: 4
contributors: 173
recentReleases: 0
createdAt: "2023-04-23T19:26:38Z"
lastCommitAt: "2026-11-09T11:13:11Z"
lastReleaseAt: "2024-05-24T06:14:53Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 97
undervaluedScore: 38
maintainers: ["Pr0methean", "ByGh00st", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfc7770ccb43ab5ff10db98ef44ab4fdb70a0610951750394143092eadbb64d8/zip-rs/zip2"
fundingLinks: ["GITHUB:https://github.com/Pr0methean", "GITHUB:https://github.com/ByGh00st"]
discussionCount: 8
---

# zip [](https://crates.io/crates/zip)  [](https://docs.rs/zip) [](https://github.com/zip-rs/zip2/actions?query=branch%3Amaster+workflow%3ACI) [](https://www.bestpractices.dev/projects/11847)

A zip library for rust which supports reading and writing of simple ZIP files. Currently hosted at
<https://github.com/zip-rs/zip2>.

The current implementation is based on [PKWARE's APPNOTE.TXT v6.3.9](https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT)

Supported compression formats:

| Formats                             | Reading | Writing |
| ----------------------------------- | ------- | ------- |
| Stored (i.e. none)                  | ✅      | ✅      |
| Implode, Shrink, Reduce             | ✅      |         |
| Deflate                             | ✅      | ✅      |
| `Deflate64`                         | ✅      |         |
| `Bzip2`                             | ✅      | ✅      |
| `ZStandard`                         | ✅      | ✅      |
| `LZMA`                              | ✅      |         |
| `XZ`                                | ✅      | ✅      |
| `PPMd`                              | ✅      | ✅      |
| AES encryption                      | ✅      | ✅      |
|…
