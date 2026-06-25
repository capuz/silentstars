---
repo: "Tooltip-Focus/Installway"
name: "Installway"
description: "Exe installer in the style of MSI - but written in Rust and built around a BLAKE3 + HDiffPatch manifest format."
url: "https://github.com/Tooltip-Focus/Installway"
homepage: "https://tooltip-focus.github.io/Installway/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["installer"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-07T19:43:19Z"
lastCommitAt: "2026-06-25T06:41:37Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["gaetandezeiraud", "WatzTheLeaf"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f9ae05aa0acef744df8c6d2235581c04797c1e4a202a662643c108892d20f6c/Tooltip-Focus/Installway"
---

# Installway

Local, single-file `.exe` installer for Windows in the style of InstallShield /
MSI — but written in Rust and built around a BLAKE3 + HDiffPatch manifest
format. No network, no admin elevation, no MSI runtime.

Each output `.exe` carries its own payload: the file zip is appended as a PE
**overlay** (no size ceiling, streamed on at build, `mmap`-read at install),
while the signed manifest, the uninstaller and the payload length ride as small
`RT_RCDATA` resources.

## Screenshots

## Documentation

Full guide: **<https://tooltip-focus.github.io/Installway/>**

Jump to:

- [Build the builder](https://tooltip-focus.github.io/Installway/getting-started/build-the-builder.html)
- [With vs. without the Rust toolchain](https://tooltip-focus.github.io/Installway/building/toolchain.html)
- [Install modes](https://tooltip-focus.github.io/Installway/running/install.html)
- [CLI reference](https://tooltip-focus.github.io/Installway/reference/cli.html)

## Highlights

- **Single self-contained `.exe`** — payload as a PE overlay; multi-GB capable
  at roughly constant working memory.
- **Signed & verified** — Ed25519 over the exact manifest bytes (public key
  compiled into the…
