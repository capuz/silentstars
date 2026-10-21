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
stars: 168
forks: 30
openIssues: 47
closedIssues: 8
watchers: 6
contributors: 7
recentReleases: 3
createdAt: "2026-07-10T12:27:25Z"
lastCommitAt: "2026-10-21T20:01:15Z"
lastReleaseAt: "2026-08-15T01:12:37Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 27
maintainers: ["pcurve", "dependabot[bot]", "raykholo"]
openGraphImageUrl: "https://opengraph.githubassets.com/200ca1437478b912071de9579f1e4549c29e8cc2ce369b6c4bca8af0764fc13c/cadmpeg/cadmpeg"
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
