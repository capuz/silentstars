---
repo: "cutefishos/terminal"
name: "terminal"
description: "A terminal emulator for Cutefish"
readmeQualityOk: true
url: "https://github.com/cutefishos/terminal"
homepage: "https://cutefish.org"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 54
forks: 35
openIssues: 0
closedIssues: 12
watchers: 2
contributors: 47
recentReleases: 0
createdAt: "2021-03-16T03:20:08Z"
lastCommitAt: "2026-11-12T11:32:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 62
maintainers: ["reionwong"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb4643da65d5b70cb6a3e24df972142e4c036bd2192048e632118bd53bf78eb9/cutefishos/terminal"
fundingLinks: ["GITHUB:https://github.com/cutefishos"]
---

# CutefishOS Terminal

A terminal emulator for Cutefish.

### Third Party Code

The emulator core comes from Konsole by way of
[qmltermwidget](https://github.com/Swordfish90/qmltermwidget).

## Dependencies

Terminal is built on [cutefish-toolkit](https://github.com/cutefishos/cutefish-toolkit);
install it first.

Debian/Ubuntu Dependencies:
```sh
sudo apt install cmake pkg-config libicu-dev libpcre2-dev libxkbcommon-dev
```

## Build and install
```sh
mkdir build
cd build
cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
make
sudo make install
```

## License

This project has been licensed by GPLv3.
