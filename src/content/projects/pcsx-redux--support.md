---
repo: "pcsx-redux/support"
name: "support"
description: "A reduced export of the PCSX-Redux tools and support libraries, small enough to pull in as a submodule."
readmeQualityOk: true
url: "https://github.com/pcsx-redux/support"
homepage: "https://pcsx-redux.consoledev.net/"
language: "C++"
languages: ["C++"]
languagePcts: [71]
topics: ["homebrew", "pcsx-redux", "playstation", "ps1", "psx", "tools"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 44
recentReleases: 0
createdAt: "2023-11-13T16:12:42Z"
lastCommitAt: "2026-10-09T17:32:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 76
maintainers: ["rixnobis", "nicolasnoble"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f27577b67d07b33f8b904923cec28f4ac7d4ef75801c3d7e8808ac8ea681a07/pcsx-redux/support"
---

# PCSX-Redux's Support & Tools

This repository is a read-only reduced mirror of
[the PCSX-Redux project](https://github.com/grumpycoders/pcsx-redux). It only contains the necessary parts to build the [tools](https://github.com/grumpycoders/pcsx-redux/tree/main/tools) only, as well as the [support libraries](https://github.com/grumpycoders/pcsx-redux/tree/main/support).
Its purpose is to be used as a submodule for projects that want to use the tools and libraries
contained herein without bringing the whole of PCSX-Redux's codebase.

Building the tools is simply done using the `make` command. It is possible to install them on your system using `make install`. There is no build system set for the libraries as they are meant to be used as a pick-and-choose buffet.

Please consult [the upstream repository](https://github.com/grumpycoders/pcsx-redux) and [its documentation](https://pcsx-redux.consoledev.net) for more information. There is also some documentation nested within the folders.

This repository will be updated periodically to match the upstream repository, and its history will be rewritten to remove all commits that are not related to the tools. While care is taken to try…
