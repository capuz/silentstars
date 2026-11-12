---
repo: "cutefishos/text-editor"
name: "text-editor"
description: "A plain-text editor for Cutefish"
readmeQualityOk: true
url: "https://github.com/cutefishos/text-editor"
homepage: "https://cutefish.org"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 16
forks: 19
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2021-06-30T10:33:52Z"
lastCommitAt: "2026-11-12T11:37:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 98
undervaluedScore: 74
maintainers: ["reionwong"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0a44fde8bbda8c17e47d4db1fcce6e217c3abe75fc2516f8343bed165ff087c/cutefishos/text-editor"
fundingLinks: ["GITHUB:https://github.com/cutefishos"]
---

# Text Editor

A plain-text editor for Cutefish, with tabs, session restore, encoding
detection and syntax highlighting for common languages.

## Dependencies

cutefish-toolkit, ICU and PCRE2; GoogleTest for the tests.

```shell
sudo apt install cmake libicu-dev libpcre2-dev libgtest-dev
```

## Build

```shell
mkdir build
cd build
cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
make
```

## Install

```shell
sudo make install
```

## Tests

```shell
cmake -DBUILD_TESTING=ON ..
make
ctest
```

## License

BSD-3-Clause; see [LICENSE](https://github.com/cutefishos/text-editor/blob/HEAD/LICENSE).
