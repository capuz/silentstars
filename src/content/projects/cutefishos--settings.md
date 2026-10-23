---
repo: "cutefishos/settings"
name: "settings"
description: "The System Settings application of the Cutefish desktop"
readmeQualityOk: true
url: "https://github.com/cutefishos/settings"
homepage: "https://cutefish.org"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 63
forks: 37
openIssues: 0
closedIssues: 62
watchers: 4
contributors: 83
recentReleases: 0
createdAt: "2021-03-16T03:18:02Z"
lastCommitAt: "2026-10-21T00:42:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 59
maintainers: ["reionwong"]
openGraphImageUrl: "https://opengraph.githubassets.com/e811ffc7f4bad06f85a9dc111cc7e95912a46bcee6547ec1cd35ce8843f5f8e0/cutefishos/settings"
fundingLinks: ["GITHUB:https://github.com/cutefishos"]
---

# Settings

The System Settings application for Cutefish Desktop.

## Dependencies

Settings is built on [cutefish-toolkit](https://github.com/cutefishos/cutefish-toolkit)
and the clients of [cutefish-framework](https://github.com/cutefishos/cutefish-framework);
install those first.

Arch/Manjaro Dependencies:
```shell
sudo pacman -S cmake pkgconf icu libxcrypt fontconfig libxcursor libxkbcommon expat systemd-libs
```

Debian/Ubuntu Dependencies:
```shell
sudo apt install cmake pkg-config libicu-dev libcrypt-dev libfontconfig-dev libxcursor-dev libxkbcommon-dev libexpat1-dev libsystemd-dev
```

## Build

```shell
mkdir build
cd build
cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
make
sudo make install
```

## License

BSD-3-Clause; see [LICENSE](https://github.com/cutefishos/settings/blob/HEAD/LICENSE).
