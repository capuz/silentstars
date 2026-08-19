---
repo: "ZaparooProject/zaparoo-frontend"
name: "zaparoo-frontend"
description: "Frontend UI for Zaparoo Core"
readmeQualityOk: true
url: "https://github.com/ZaparooProject/zaparoo-frontend"
language: "Rust"
languages: ["Rust", "QML"]
languagePcts: [52, 41]
stars: 34
forks: 10
openIssues: 29
closedIssues: 144
watchers: 0
contributors: 10
recentReleases: 7
createdAt: "2026-04-21T09:18:46Z"
lastCommitAt: "2026-08-19T04:06:57Z"
lastReleaseAt: "2026-07-01T08:53:46Z"
status: "thriving"
tags: ["funded", "release_machine"]
healthScore: 94
undervaluedScore: 47
maintainers: ["wizzomafizzo", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f88fb4bf18e2c10caaa39e34b9ab4f30305b75395bcd22cbcf0d3d966a5c9a7/ZaparooProject/zaparoo-frontend"
fundingLinks: ["GITHUB:https://github.com/ZaparooProject", "PATREON:https://patreon.com/wizzo"]
discussionCount: 0
---

# Zaparoo Frontend

Zaparoo Frontend is the game frontend for
[Zaparoo Core](https://zaparoo.org).

## Build

Start with [docs/building.md](https://github.com/ZaparooProject/zaparoo-frontend/blob/HEAD/docs/building.md). It covers the packages you
need on a fresh machine and the MiSTer cross-build path.

Most commands go through the [`justfile`](https://github.com/ZaparooProject/zaparoo-frontend/blob/HEAD/justfile). Run `just --list` if you
need the full menu.

```bash
just build && just run    # desktop
./scripts/build-arm32.sh  # MiSTer ARM32 cross-build (Docker-only)
just test                 # ctest + cargo nextest
just lint                 # clang-format, clang-tidy, qmllint, rustfmt, clippy, cargo-deny
```

The MiSTer ARM32 path uses the official Docker Buildx toolchain image and does
not need Qt, CMake, Rust, or `just` installed on the host.

## Customize

You can override system artwork, the Hub menu icons, and system display names
without rebuilding. See [docs/customization.md](https://github.com/ZaparooProject/zaparoo-frontend/blob/HEAD/docs/customization.md).

`just test` and `just lint` need `cargo-nextest` and `cargo-deny`:

```bash
cargo install --locked cargo-nextest…
