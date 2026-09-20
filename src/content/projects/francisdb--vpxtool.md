---
repo: "francisdb/vpxtool"
name: "vpxtool"
description: "Terminal based frontend and utilities for Visual Pinball"
readmeQualityOk: true
url: "https://github.com/francisdb/vpxtool"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["virtual-pinball", "visual-pinball", "vpin", "vpx"]
stars: 53
forks: 12
openIssues: 20
closedIssues: 116
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2023-05-10T15:00:53Z"
lastCommitAt: "2026-09-20T08:46:50Z"
lastReleaseAt: "2023-09-26T18:42:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 53
maintainers: ["dependabot[bot]", "francisdb", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/042863ff74e6ae147994e855801ed239bd2201f5f0bcaf2c6826cbcfbe2f1581/francisdb/vpxtool"
---

# vpxtool

Cross-platform utility for the vpinball ecosystem

Join [#vpxtool on "Virtual Pinball Chat" discord](https://discord.gg/ugFR9tCf2p) for support and questions.

## Install

Download the latest release for your operating system at https://github.com/francisdb/vpxtool/releases, extract it and
if wanted copy or symlink the binary to `$HOME/bin` to put in on your path

### macOS

After extracting the archive you will have to remove the quarantine flag through
`System Settings / Privacy & Security / Allow Anyway button` or on the command line as shown below.

```
xattr -d com.apple.quarantine vpxtool
```

### Homebrew

@gitfool set up a homebrew tap for vpxtool. Installation instructions on his repo:

https://github.com/gitfool/homebrew-vpinball

### Using cargo

If you have [cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) installed you can install
vpxtool with the following command:

```
cargo install vpxtool
```

## Usage

### Command Line Interface (CLI)

Show help

```shell
> vpxtool --help
```

```
Vpxtool v0.16.0

Terminal based frontend and utilities for Visual Pinball

Usage: vpxtool [COMMAND]

Commands:
  info            Vpx table info…
