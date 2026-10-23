---
repo: "cutefishos/cutefish-compositor"
name: "cutefish-compositor"
description: "The Cutefish Wayland compositor, with window management, the desktop shell and the lock screen"
readmeQualityOk: true
url: "https://github.com/cutefishos/cutefish-compositor"
homepage: "https://cutefish.org"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 104
forks: 40
openIssues: 0
closedIssues: 15
watchers: 3
contributors: 52
recentReleases: 0
createdAt: "2021-03-16T02:56:03Z"
lastCommitAt: "2026-10-23T08:00:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 52
maintainers: ["reionwong"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd68cc7cb8d69192967b1205fbc0fe6552a235d556bca9c14317d11008dcfdf7/cutefishos/cutefish-compositor"
fundingLinks: ["GITHUB:https://github.com/cutefishos"]
---

# Cutefish Compositor

The Cutefish Wayland compositor, with window management, the desktop shell,
the lock screen and Xwayland in one process. Much of it is ported from
Chromium's Exo and Ash.

## Dependencies

cutefish-toolkit, the cutefish-framework clients and libwayland 1.23 or newer.
At runtime it needs `adwaita-icon-theme` and `xwayland`. Tests also need
`libgtest-dev`.

## Build

```bash
mkdir build
cd build
cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
make
sudo make install
```

Pass `-DBUILD_TESTING=ON` to build the tests.

## License

BSD-3-Clause; see [LICENSE](https://github.com/cutefishos/cutefish-compositor/blob/HEAD/LICENSE). Code ported from Chromium keeps its
original notice in [LICENSE.chromium](https://github.com/cutefishos/cutefish-compositor/blob/HEAD/LICENSE.chromium), and code from
sommelier in [LICENSE.sommelier](https://github.com/cutefishos/cutefish-compositor/blob/HEAD/LICENSE.sommelier).
