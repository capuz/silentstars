---
repo: "AmanoTeam/android-gcc-cross"
name: "android-gcc-cross"
description: "A GCC cross-compiler targeting Android"
readmeQualityOk: true
url: "https://github.com/AmanoTeam/android-gcc-cross"
language: "Shell"
languages: ["Shell", "CMake"]
languagePcts: [48, 42]
topics: ["android", "c", "cobol", "cpp", "fortran", "gcc-complier", "objective-c", "objective-c-plus-plus", "termux"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 14
recentReleases: 2
createdAt: "2025-06-03T02:16:21Z"
lastCommitAt: "2026-07-15T05:53:14Z"
lastReleaseAt: "2026-04-30T00:16:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 67
maintainers: ["Kartatz"]
openGraphImageUrl: "https://opengraph.githubassets.com/dba6efccc3803ab225c6291c4eb2fcf00d4a19f771764c54818e2ac6b2ee2f56/AmanoTeam/android-gcc-cross"
---

# android-gcc-cross

This version of GCC uses the patchset from the [TUR](https://github.com/termux-user-repository/tur/tree/master/tur/gcc-15) port of GCC for Android, with additional patches to improve cross-compilation support and enable its usage in Gradle projects as a replacement for Clang.

## Installation

### Termux

<details>
Although the toolchain is mainly intended for cross-compilation, you can also install it on Termux and use it as a native compiler:

```bash
curl \
    --silent \
    --show-error \
    --fail \
    --url 'https://cdn.jsdelivr.net/gh/AmanoTeam/android-gcc-cross@master/tools/termux-install.sh' \
        | bash
```

This will download the GCC toolchain and install it to `/data/data/com.termux/files/usr/lib/android-gcc-cross`. After that, you can use the usual `gcc` and `g++` to compile code directly from Termux.
</details>

### Other platforms

* [Windows](https://github.com/AmanoTeam/android-gcc-cross/releases/latest/download/x86_64-w64-mingw32.7z)
* [macOS](https://github.com/AmanoTeam/android-gcc-cross/releases/latest/download/aarch64-apple-darwin.tar.xz)
*…
