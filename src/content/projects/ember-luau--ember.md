---
repo: "ember-luau/ember"
name: "ember"
description: "One CLI for your Luau dependencies, tools, and scripts."
readmeQualityOk: true
url: "https://github.com/ember-luau/ember"
homepage: "https://emberpm.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 14
forks: 1
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-14T02:54:03Z"
lastCommitAt: "2026-11-03T12:47:23Z"
lastReleaseAt: "2026-08-05T02:44:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 48
maintainers: ["savruun", "ryancundiff"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1d1fa885f80f2264a8066031cd5478dd03c3975dd714d07346ffad69b635311/ember-luau/ember"
---

# ember

**A package manager built for Luau.** The command is `embr`.

[Browse packages](https://emberpm.dev/search) · [Docs](https://emberpm.dev/docs) · [Policies](https://emberpm.dev/policies)

---

The CLI for [emberpm.dev](https://emberpm.dev): install Luau packages from the
ember registry (plus wally, pesde, and Forest indices), publish your own, pin your
project's tools, and run its scripts — one manifest, one lockfile, one binary.

## Install

Grab the binary for your platform from the
[latest release](https://github.com/ember-luau/ember/releases/latest), then let embr
install itself:

```sh
# macOS / Linux
chmod +x embr-macos-aarch64
./embr-macos-aarch64 self install
```

```powershell
# Windows
.\embr-windows-x86_64.exe self install
```

`self install` copies embr to `~/.ember/bin`. On Windows it adds that folder to
your PATH for you; elsewhere it prints the line to add to your shell profile.
Restart your terminal, then:

```sh
embr --version
embr self update    # pulls the newest release when there is one
```

### With cargo

```sh
cargo install embr    # crate and binary share the name
embr self install     # still worth running: tool shims live in ~/.ember/bin
```

###…
