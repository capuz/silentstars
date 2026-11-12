---
repo: "cutefishos/filemanager"
name: "filemanager"
description: "The file manager of the Cutefish desktop"
readmeQualityOk: true
url: "https://github.com/cutefishos/filemanager"
homepage: "https://cutefish.org"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 127
forks: 42
openIssues: 1
closedIssues: 38
watchers: 4
contributors: 53
recentReleases: 0
createdAt: "2021-03-16T03:18:52Z"
lastCommitAt: "2026-11-12T11:37:44Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 49
maintainers: ["reionwong"]
openGraphImageUrl: "https://opengraph.githubassets.com/afcb29a0ba258cd982544ff73e94ea5b29217b3ca76498cdd78bd3664d40ec74/cutefishos/filemanager"
fundingLinks: ["GITHUB:https://github.com/cutefishos"]
---

# File Manager

Cutefish File Manager, simple to use, beautiful, and retain the classic PC interactive design.

## Dependencies

File Manager is built on [cutefish-toolkit](https://github.com/cutefishos/cutefish-toolkit) and
the files library of [cutefish-framework](https://github.com/cutefishos/cutefish-framework);
install them first. The mount service needs FUSE, libssh, libsmbclient, libmtp and
libudev, and zlib, bzip2, liblzma and LZFSE for disk images; archives need libarchive
and libzip. GoogleTest for the tests.

Debian/Ubuntu:

```shell
sudo apt install build-essential cmake pkg-config libicu-dev libarchive-dev libzip-dev \
    libfuse3-dev libssh-dev libsmbclient-dev libmtp-dev libudev-dev zlib1g-dev libbz2-dev \
    liblzma-dev liblzfse-dev libgtest-dev
```

## Build

```shell
cmake -S . -B build -DCMAKE_INSTALL_PREFIX=/usr
cmake --build build
sudo cmake --install build
```

## Tests

```shell
cmake -S . -B build -DBUILD_TESTING=ON
cmake --build build
ctest --test-dir build --output-on-failure
```

## License

BSD-3-Clause; see [LICENSE](https://github.com/cutefishos/filemanager/blob/HEAD/LICENSE).
