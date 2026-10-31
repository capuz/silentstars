---
repo: "imjiaoyuan/yak"
name: "yak"
description: "A plugin-based harness for LLMs in Rust."
readmeQualityOk: true
url: "https://github.com/imjiaoyuan/yak"
homepage: "http://jiaoyuan.org/yak/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-15T14:28:51Z"
lastCommitAt: "2026-10-31T15:57:45Z"
lastReleaseAt: "2026-09-11T17:02:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 63
maintainers: ["imjiaoyuan"]
openGraphImageUrl: "https://opengraph.githubassets.com/188a9db649db81d47ea724faa45b1ad405e90e12aaea3d685e575a4889580f2d/imjiaoyuan/yak"
---

# yak

A plugin-based harness for LLMs in Rust that lives in your terminal: `yak "fix the failing test"` runs one task with tools (reading, editing, searching, running commands) and bare `yak` opens an interactive session. Sessions are stored as thread files and can be resumed anytime.

One binary, ~3 dependencies (`ureq`, `serde_json`, `unicode-width`), no async runtime, every other piece handwritten in-tree. Linux, macOS and Windows.

## Install

Linux and macOS download the prebuilt binary, verify its sha256 and install it with:

```bash
curl -fsSL https://jiaoyuan.org/yak/install.sh | sh
```

It lands in `~/.local/bin`, no root needed, and adds that directory to your `PATH` when missing. Windows does the same from PowerShell:

```powershell
irm https://jiaoyuan.org/yak/install.ps1 | iex
```

It lands in `%USERPROFILE%\.local\bin`, no admin needed, and appends that directory to the user `Path`. Re-running either line is the updater: it checks the latest GitHub release, prints `updating 0.2.1 -> 0.2.2` when it moves and leaves an unchanged version alone. `YAK_FORCE=1` reinstalls anyway; `YAK_VERSION` pins a release tag, `YAK_REPO` installs from a fork and `YAK_INSTALL_DIR` picks…
