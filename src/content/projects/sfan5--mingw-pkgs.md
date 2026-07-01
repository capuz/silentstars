---
repo: "sfan5/mingw-pkgs"
name: "mingw-pkgs"
description: "A collection of scripts to cross-compile various libraries, tools, applications to Windows via MinGW."
url: "https://github.com/sfan5/mingw-pkgs"
language: "Shell"
languages: ["Shell"]
languagePcts: [92]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-04-23T14:35:26Z"
lastCommitAt: "2026-07-01T07:04:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 72
undervaluedScore: 48
maintainers: ["sfan5"]
openGraphImageUrl: "https://opengraph.githubassets.com/410bc6dad04d086928d7642f3f996910c5d01058ecc8c1ed78dc4a26e212668b/sfan5/mingw-pkgs"
---

mingw-pkgs
-----------

A collection of scripts to cross-compile various libraries, tools, applications to Windows via [MinGW](https://www.mingw-w64.org/).

Designed to run on Linux.
You will need MinGW itself, bash, wget, (un)zip, tar.
Builds are transparently sandboxed if you have [`bwrap`](https://github.com/containers/bubblewrap) installed.

Supports both `i686-w64-mingw32`, `x86_64-w64-mingw32` *and* `aarch64-w64-mingw32`.

**Note**: This is just something I maintain for my personal usage.
If you need something more serious take a look at [MSYS2](https://www.msys2.org/) or openSUSE's [ported packages](https://build.opensuse.org/project/show/windows:mingw:win64).

To build any package just run the script, it will produce a `name-X.Y.Z-win??.zip` archive upon completion.
These archives contain an Unix-like `bin`, `include`, `lib` folder structure (DLLs go in `bin`).
Usually both static and dynamic libraries are built.

Common flags for all scripts:
* `--clean`: Clean before building package
* `--needed`: Skip build if package already exists
* `--64`: Build for 64-bit, default is 32-bit
* `--arm64`: Build for aarch64
* `--clang`: Build with clang instead of gcc
* `--strip`:…
