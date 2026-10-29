---
repo: "mkrueger/icy_tools"
name: "icy_tools"
description: "A collection of ansi/bbs related applications."
readmeQualityOk: true
url: "https://github.com/mkrueger/icy_tools"
homepage: "https://discord.gg/qx3n35W6c5"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 197
forks: 19
openIssues: 8
closedIssues: 155
watchers: 6
contributors: 10
recentReleases: 4
createdAt: "2024-04-10T11:02:56Z"
lastCommitAt: "2026-10-29T05:50:39Z"
lastReleaseAt: "2026-10-28T07:38:52Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 48
maintainers: ["mkrueger", "NuSkooler", "PerchAnton"]
openGraphImageUrl: "https://opengraph.githubassets.com/a54dc592fc83358e16e6075433c55e433edc161740387749b352c2a581dced76/mkrueger/icy_tools"
discussionCount: 11
---

# icy_tools

This repository contains tools releated to BBSing and Ansi in general. It contains:

[Icy Term](https://github.com/mkrueger/icy_tools/blob/master/crates/icy_term/README.md)
a terminal program for legacy BBS systems.

[Icy Draw](https://github.com/mkrueger/icy_tools/blob/master/crates/icy_draw/README.md)
a drawing tool supporting almost all ANSI formats.

[Icy View](https://github.com/mkrueger/icy_tools/blob/master/crates/icy_view/README.md)
a viewer to browse/view Ansi screens.

[Icy Play](https://github.com/mkrueger/icy_tools/blob/master/crates/icy_play/README.md)
a tool that shows icy draw animations on cmd line/bbs.

# Build instructions

## Windows

Install the Rust MSVC toolchain and Visual Studio (or Build Tools) with the
**Desktop development with C++** workload, including a Windows SDK and
**C++ CMake tools for Windows**.

Open **x64 Native Tools Command Prompt for Visual Studio**, then run:

```bat
cd C:\work\icy_tools
git submodule update --init --recursive
cargo build --workspace --locked
```

Debug executables are in `target\debug`. Add `--release` for optimized
executables in `target\release`.

The native Opus dependency requires CMake and Ninja. If the…
