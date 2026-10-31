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
stars: 258
forks: 45
openIssues: 59
closedIssues: 22
watchers: 7
contributors: 12
recentReleases: 3
createdAt: "2026-07-10T12:27:25Z"
lastCommitAt: "2026-10-31T18:51:03Z"
lastReleaseAt: "2026-08-15T01:12:37Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 26
maintainers: ["raykholo", "oursland", "deece"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2e26d5d00431f5973012190eacedc8fcddc0a3ae9fa0a6e8fcce6bf995f63d6/cadmpeg/cadmpeg"
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
