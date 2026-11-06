---
repo: "SUSE/release-notes"
name: "release-notes"
description: "SUSE release notes"
readmeQualityOk: true
url: "https://github.com/SUSE/release-notes"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [47, 40]
topics: ["release-notes", "suse", "sl-micro"]
stars: 11
forks: 13
openIssues: 4
closedIssues: 9
watchers: 9
contributors: 24
recentReleases: 0
createdAt: "2024-11-01T08:28:44Z"
lastCommitAt: "2026-11-06T11:24:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 74
maintainers: ["KucharczykL", "github-actions[bot]", "lkocman"]
openGraphImageUrl: "https://opengraph.githubassets.com/21d2bdad2eb9ea664a45f79a5303fbdd35a4da153cc6d66fd3b0ddcd2c23a3f2/SUSE/release-notes"
---

# SUSE Release Notes

This repository contains release notes for SUSE products.
They are written in [AsciiDoc](https://docs.asciidoctor.org/asciidoc/latest/).

Currently the repository contains release notes for these products:
* SL Micro
  * 6.0
  * 6.1
  * 6.2
  * 6.3
* SLE Server/High Availability/for SAP applications
  * 16.0
* openSUSE Leap
  * 16.0

## How to contribute

See [CONTRIBUTING.md](https://github.com/SUSE/release-notes/blob/HEAD/CONTRIBUTING.md).
The latest pre-production build of release-notes can be viewed [here](https://susedoc.github.io/#release-notes).

## Where to add note

The repository structure is like this:

```
adoc/
├── micro/
│   ├── version60.adoc
│   └── version61.adoc
└── another-product/
    ├── versionX.adoc
    └── versionY.adoc
```

If the file for the version doesn't exist, feel free to submit an issue/PR.
