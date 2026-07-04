---
repo: "starhaven-io/macOSdb"
name: "macOSdb"
description: "A catalog of open-source components across macOS and Xcode releases for Apple silicon"
url: "https://github.com/starhaven-io/macOSdb"
homepage: "https://macosdb.com/"
language: "Swift"
languages: ["Swift"]
languagePcts: [69]
topics: ["ipsw", "macos", "open-source", "swift", "swiftui", "xcode", "apple-silicon", "arm64", "catalog", "sbom"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-11T03:45:30Z"
lastCommitAt: "2026-07-04T06:11:42Z"
lastReleaseAt: "2026-03-25T22:32:58Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 48
maintainers: ["p-linnane", "dependabot[bot]", "starhaven-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc11ed6b93a031f5a24a17e8df360ae236ee92fd0a8abc27c0ccd7a4510520b7/starhaven-io/macOSdb"
fundingLinks: ["GITHUB:https://github.com/p-linnane"]
---

# macOSdb

A CLI and website that catalog which versions of open-source components ship with each macOS and Xcode release.

macOSdb scans Apple's IPSW firmware files and Xcode `.xip` archives, extracts version strings from system binaries, the dyld shared cache, and SDK headers, and records what ships where. Browse releases, compare component versions across updates, and see which chip families and devices each release supports.

**Website:** [macosdb.com](https://macosdb.com)

## Tracked components

**Filesystem binaries:** curl, httpd, LibreSSL, OpenSSH, Ruby, sudo, SQLite, vim, zsh

**Dyld shared cache:** libbz2, libcurl, libexpat, libncurses, libpcap, libsqlite3, libssl, libxml2

**Xcode toolchain:** Apple Clang, cctools, Git, ld, lldb, Python, Swift

**SDK libraries:** bzip2, expat, libcurl, libexslt, libffi, libxml2, libxslt, ncurses, sqlite3, zlib

## Installation

Requires macOS 15.0+ and Apple Silicon.

### Homebrew

```bash
brew install starhaven-io/tap/macosdb
```

### Build from source

Requires the Swift 6.2 toolchain (Xcode 26+ or the matching Command Line Tools).

```bash
swift build -c release
```

## CLI usage

All commands default to macOS. Use `--product xcode`…
