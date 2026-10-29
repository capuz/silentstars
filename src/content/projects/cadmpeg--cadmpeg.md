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
stars: 238
forks: 43
openIssues: 57
closedIssues: 16
watchers: 8
contributors: 11
recentReleases: 3
createdAt: "2026-07-10T12:27:25Z"
lastCommitAt: "2026-10-29T13:51:29Z"
lastReleaseAt: "2026-08-15T01:12:37Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 26
maintainers: ["raykholo", "pcurve", "yishinli"]
openGraphImageUrl: "https://opengraph.githubassets.com/b81b0bef480e7ade65dce2fd99181a8e89511ff6524f38d967b83192b03fd010/cadmpeg/cadmpeg"
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
