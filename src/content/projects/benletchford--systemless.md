---
repo: "benletchford/systemless"
name: "systemless"
description: "System-free & ROM-free classic Macintosh high-level emulator / runtime for 68k+PPC games and apps on modern systems written in Rust"
readmeQualityOk: true
url: "https://github.com/benletchford/systemless"
homepage: "https://systemless.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 35
forks: 3
openIssues: 40
closedIssues: 393
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-31T08:16:44Z"
lastCommitAt: "2026-08-31T09:58:54Z"
lastReleaseAt: "2026-07-26T04:32:42Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 48
maintainers: ["benletchford", "github-actions[bot]", "rlanday"]
openGraphImageUrl: "https://opengraph.githubassets.com/d872876a376051adbf474717cbbed81ddd41640bcf3f2b7f29a123a823eec90a/benletchford/systemless"
---

</a>
</p>

<h1 align="center">systemless</h1>

  <strong>A high-level runtime for classic Macintosh applications and games.</strong><br>
  Run original Mac software without a ROM image, System installation, or hardware emulation.
</p>

</p>

</p>

Systemless reimplements the classic Mac Toolbox and operating-system APIs in
Rust, allowing original 68K and PowerPC Macintosh software to run without a ROM
image, a System installation, or hardware emulation. On macOS, classic
applications keep their own identity: guest menus appear in the native menu bar,
while the guest application name and icon integrate with the Dock.

## Quick Start

Install with Homebrew on macOS:

```sh
brew install benletchford/tap/systemless
systemless path/to/app-or-game.sit
```

Or install from crates.io:

```sh
cargo install systemless
systemless path/to/app-or-game.sit
```

Systemless accepts StuffIt archives, MacBinary files, and raw/macOS resource forks.
Archives may contain multiple files; Systemless populates the in-memory VFS and
selects an executable resource fork from the archive.

Systemless does not ship applications, games, Mac ROMs, or Apple system software.
Use legally obtained application…
