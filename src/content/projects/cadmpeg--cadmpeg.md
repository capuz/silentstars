---
repo: "cadmpeg/cadmpeg"
name: "cadmpeg"
description: "Convert all CAD formats"
readmeQualityOk: true
url: "https://github.com/cadmpeg/cadmpeg"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["brep", "cad", "nurbs"]
stars: 245
forks: 44
openIssues: 57
closedIssues: 19
watchers: 8
contributors: 12
recentReleases: 3
createdAt: "2026-07-10T12:27:25Z"
lastCommitAt: "2026-10-30T10:22:55Z"
lastReleaseAt: "2026-08-15T01:12:37Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 26
maintainers: ["raykholo", "pcurve", "deece"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e27bb4de4f13a92d949fd246534fd965b749c9fde75c81b78b2135dfaec4001/cadmpeg/cadmpeg"
---

# cadmpeg

Inspect and convert native CAD files from the command line. Add native CAD import to an application.

## Purpose

Native CAD formats are proprietary, sparsely documented and cumbersome to work with.
Building applications that support these formats requires navigating a maze of translator and SDK services without any open source options. cadmpeg aims to offer an open source solution for this problem.

Format knowledge comes from legally possessed CAD files and public documentation. Vendor SDKs, decompiled binaries, and confidential material are prohibited ([LEGAL.md](https://github.com/cadmpeg/cadmpeg/blob/HEAD/LEGAL.md)).

## Install

Build from source with Rust 1.88 or later:

```sh
git clone https://github.com/cadmpeg/cadmpeg
cd cadmpeg
cargo install --path crates/cadmpeg
```

Homebrew (macOS):

```sh
brew install cadmpeg/tap/cadmpeg
```

Installer script (macOS, Linux):

```sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/cadmpeg/cadmpeg/releases/latest/download/cadmpeg-installer.sh | sh
```

Windows:

```powershell
powershell -ExecutionPolicy Bypass -c "irm https://github.com/cadmpeg/cadmpeg/releases/latest/download/cadmpeg-installer.ps1 | iex"
```

##…
