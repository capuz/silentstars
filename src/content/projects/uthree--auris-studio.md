---
repo: "uthree/auris-studio"
name: "auris-studio"
description: "A DAW for the AI ​​Era"
readmeQualityOk: true
url: "https://github.com/uthree/auris-studio"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 19
forks: 3
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-02T03:30:01Z"
lastCommitAt: "2026-10-25T08:40:05Z"
lastReleaseAt: "2026-10-24T01:47:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 39
maintainers: ["uthree", "Lenqth"]
openGraphImageUrl: "https://opengraph.githubassets.com/4df54c4b1d964fd1aada2f5af9c01292a715a3a8a23cd5297fe2ccde08bd1cbf/uthree/auris-studio"
---

[日本語](https://github.com/uthree/auris-studio/blob/HEAD/README.ja.md)

# Auris Studio

A digital audio workstation written in Rust with a GPU-rendered
[gpui](https://crates.io/crates/gpui) interface for macOS and Windows. Arrange and edit
music, compose from text specifications, record audio, host CLAP and VST3 plugins,
and render singing voices. CLI, MCP and agent frontends share the desktop's editing commands.

## Install

Download the Windows installer or macOS disk image from the
[releases page](https://github.com/uthree/auris-studio/releases). The desktop, `auris` CLI and
`auris-mcp` ship together. Linux has a CLI archive. See [Installation](https://github.com/uthree/auris-studio/blob/HEAD/docs/installation.md)
for portable downloads and command-line paths. Built-in physical instruments are ready to play.

To build from source with Rust 1.95 or newer:

```sh
cargo run --release
```

Windows also requires Visual Studio C++ Build Tools and LLVM. Run
`.\tools\setup-windows.ps1 -InstallLlvm` in a Visual Studio developer PowerShell terminal
before building. See [Development](https://github.com/uthree/auris-studio/blob/HEAD/docs/development.md#building-on-each-platform) for
platform…
