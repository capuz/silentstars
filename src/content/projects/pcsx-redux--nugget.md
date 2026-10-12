---
repo: "pcsx-redux/nugget"
name: "nugget"
description: "Bare-metal libraries and examples for the original PlayStation, including the PSYQo C++ SDK and OpenBIOS."
readmeQualityOk: true
url: "https://github.com/pcsx-redux/nugget"
homepage: "https://pcsx-redux.github.io/nugget/"
language: "C"
languages: ["C", "C++"]
languagePcts: [64, 27]
topics: ["bare-metal", "cpp", "homebrew", "mips", "openbios", "playstation", "ps1", "psx", "psyqo", "sdk"]
stars: 80
forks: 10
openIssues: 4
closedIssues: 6
watchers: 4
contributors: 29
recentReleases: 0
createdAt: "2021-05-29T06:39:22Z"
lastCommitAt: "2026-10-12T11:15:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 48
maintainers: ["rixnobis"]
openGraphImageUrl: "https://opengraph.githubassets.com/f55109ada8d3f865f0e70bdc46f425fbdfe689c724d2fc97b7ce959e7a166d2a/pcsx-redux/nugget"
---

# Nugget

Nugget is a collection of bare-metal libraries, runtime pieces, and example projects for
the original PlayStation. It is the home of [PSYQo](https://github.com/pcsx-redux/nugget/blob/HEAD/psyqo/README.md), an object-oriented
C++ SDK for the console, and of [OpenBIOS](https://github.com/pcsx-redux/nugget/blob/HEAD/openbios/README.md), a from-scratch
reimplementation of Sony's BIOS.

It is built to be consumed as a submodule, so a project can pull in only the parts it
needs without dragging along an emulator or a toolchain.
[PCSX-Redux](https://github.com/grumpycoders/pcsx-redux) uses it that way, and its
`src/mips` tree is this repository.

Read the [doc](https://github.com/pcsx-redux/nugget/blob/HEAD/doc/README.md) folder for what lives here, and
[PSYQo's Getting Started](https://github.com/pcsx-redux/nugget/blob/HEAD/psyqo/GETTING_STARTED.md) for toolchain setup. Generated API
documentation is at <https://pcsx-redux.github.io/nugget/>.

Issues and pull requests are welcome here. To talk about PlayStation development,
hacking and reverse engineering, join the PSX.Dev Discord server:

The code in this repository is MIT-licensed; see…
