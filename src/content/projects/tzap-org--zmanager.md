---
repo: "tzap-org/zmanager"
name: "zmanager"
description: "The universal file archiver built for high-performance compression, strong security, and seamless extraction of virtually any archive format."
readmeQualityOk: true
url: "https://github.com/tzap-org/zmanager"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["7zip", "android", "archiver", "compression", "extraction", "ios", "linux", "macos", "osx", "rar"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-05-16T12:52:08Z"
lastCommitAt: "2026-09-15T08:55:32Z"
lastReleaseAt: "2026-08-07T10:14:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 64
maintainers: ["frankmanzhu", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba8e712706bfbcbc8c3f61a50eaf5be94332d07b9eb6fb073f15908e417d92a1/tzap-org/zmanager"
fundingLinks: ["GITHUB:https://github.com/frankmanzhu", "OPEN_COLLECTIVE:https://opencollective.com/tzap-org", "KO_FI:https://ko-fi.com/tzaporg"]
discussionCount: 0
---

# ZManager CLI

`zm` is a universal file archiver for macOS, Linux, and Windows, built for
high-performance compression, safe extraction, and seamless handling of
virtually any archive format.

The CLI is the open-source part of ZManager. It shares the Rust archive engine
with the desktop GUI app, but it is useful on its own: create clean project
archives, extract a broad set of formats safely, inspect archive contents, and
script archive workflows without opening a GUI.

## Install

Release builds are published on the
[latest release page](https://github.com/tzap-org/zmanager/releases/latest).
Each release ships two flavors:

- **full** — all commands, including the online identity features behind
  `zm auth` (default install)
- **offline** — the same archive commands with no network features

`zm --version` reports which flavor is installed (`zm 2.1.3 (full)` or
`zm 2.1.3 (offline)`). For full installation details and checksum examples,
see [docs/INSTALL.md](https://github.com/tzap-org/zmanager/blob/HEAD/docs/INSTALL.md).

### macOS

Install the full build from the Homebrew tap:

```sh
brew install tzap-org/zmanager/zmanager
```

For the offline build, install the offline…
