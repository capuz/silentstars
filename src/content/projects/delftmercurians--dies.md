---
repo: "DelftMercurians/Dies"
name: "Dies"
description: "The Delft Mercurian's RoboCup SSL framework"
url: "https://github.com/DelftMercurians/Dies"
homepage: "https://delftmercurians.nl/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [71, 21]
topics: ["ai", "python", "robocup", "robocup-ssl", "robotics", "rust"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2023-10-05T13:49:07Z"
lastCommitAt: "2026-07-01T07:04:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 67
maintainers: ["mablin7"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf8adaef20c7d4050cdb367b78341ce845564759864b7e45485836060a9b13bd/DelftMercurians/Dies"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://delftmercurians.nl/images/logo_dark.svg">
</picture>
</p>

<h1 align="center">🌩 Dies 🌩</h1>

In Roman mythology [Dies](<https://en.wikipedia.org/wiki/Dies_(mythology)>) (_dai-ez_) was the personification of day and the mother of Mercury.

Dies is the framework powering the [Delft Mercurian](https://delftmercurians.nl/)'s RoboCup AI. It consists of a core written in Rust, which includes a physics simulator, networking, vision data processing, game state management, and a Python API and executor. Strategies -- the high-level logic that governs the player's behaviors -- are written in Python and can be run in a separate process, allowing for hot reloading and easy debugging.

See [http://docs.delftmercurians.nl/](http://docs.delftmercurians.nl/) for the latest documentation.

## Getting Started

You'll need the following dependencies on your system:

- Stable [Rust](https://www.rust-lang.org/tools/install) toolchain. Use rustup if you can.
- On Linux, you'll need to install the `pkg-config`, `clang`, `libudev-dev` and `libssl-dev` packages: `sudo apt install libudev-dev libssl-dev pkg-config clang`.

To run…
