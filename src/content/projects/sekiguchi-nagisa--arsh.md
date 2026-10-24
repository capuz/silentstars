---
repo: "sekiguchi-nagisa/arsh"
name: "arsh"
description: "A statically typed scripting language with shell-like features"
readmeQualityOk: true
url: "https://github.com/sekiguchi-nagisa/arsh"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["shell", "cpp", "scripting-language"]
stars: 30
forks: 2
openIssues: 51
closedIssues: 776
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2015-01-12T07:31:09Z"
lastCommitAt: "2026-10-24T08:20:32Z"
lastReleaseAt: "2018-04-30T12:35:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 88
undervaluedScore: 59
maintainers: ["sekiguchi-nagisa"]
openGraphImageUrl: "https://opengraph.githubassets.com/e13ad5d3026db972242ded2a0feaf1ab4ce90a409157a0c4841a1b0c7ce6cfda/sekiguchi-nagisa/arsh"
---

# arsh

A statically typed scripting language with shell-like features.

Currently, under heavy development. Language specification is subject to change without notice.

## Build Requirement

* Linux x86-64
* cmake 3.15 or later
* git (for fetching external projects)
* Python 3.7 or later (for building `re2c`)
* make/ninja
* gcc/clang (need gnu++17 support)

### Optional Requirement

* fzf (for history search)
* bash-completion (for tab-completion)

### Tested Compiler

* gcc (9, 10, 11, 12, 13, 14, 15)
* clang (11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22)

### Other Tested Platforms

* Linux
    * Arm64
* macOS
    * Arm64
* Windows x64
    * Cygwin
    * MSYS2
    * WSL

## How to use

### 1. build and install

* install from source

```sh
$ git clone https://github.com/sekiguchi-nagisa/arsh.git
$ cd arsh && mkdir build && cd build
$ cmake ..    # default install dir is /usr/local/bin
$ make -j4
$ sudo make install
```

* [install from package](https://software.opensuse.org//download.html?project=home%3Ansekiguchi&package=arsh)
    * Debian 11, 12, 13
    * Ubuntu 22.04, 24.04, 26.04
    * Fedora 40, 41, 42, 43, 44
    * openSUSE 16, Tumbleweed

### 2. run in interactive mode…
