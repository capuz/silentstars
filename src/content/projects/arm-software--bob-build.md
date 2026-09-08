---
repo: "ARM-software/bob-build"
name: "bob-build"
description: "Meta-build system using Blueprint and ninja"
readmeQualityOk: true
url: "https://github.com/ARM-software/bob-build"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [65, 24]
topics: ["build-system", "ninja-build", "build-tool", "build-tool-linux", "build-tool-android"]
stars: 33
forks: 15
openIssues: 0
closedIssues: 5
watchers: 10
contributors: 24
recentReleases: 0
createdAt: "2018-10-11T14:24:53Z"
lastCommitAt: "2026-09-07T16:30:35Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 47
maintainers: ["BrandonThomasJonesARM", "jordan-bonser", "afpedersen"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f7c329d35b505de38a66e46d3baca25e834185ad4e174d31223a7762ecb2cd7/ARM-software/bob-build"
---

# ⚠ Deprecation Notice ⚠

_Bob will be deprecated_ when [Android moves to Bazel][aosp-bazel].

We recommend that new projects use [Bazel][bazel] instead.

We will be introducing stricter build rules in Bob to improve Bazel alignment.

This may cause existing builds to break.

[aosp-bazel]: https://developers.googleblog.com/2020/11/welcome-android-open-source-project.html
[bazel]: https://bazel.build/

# Bob Build System

## Introduction

Bob is a declarative build system intended to build C/C++ software for
both Linux and Android.

Bob has a configuration system that works in a similar way to the
[Linux Kernel](https://www.kernel.org)'s
[Kconfig](https://www.kernel.org/doc/Documentation/kbuild/kconfig-language.txt).

Build definitions use a JSON-like syntax to describe the modules to
build.

Bob uses Google's [Blueprint](https://github.com/google/blueprint) to
do the heavy lifting. As such it has similarities with
[Soong](https://android.googlesource.com/platform/build/soong).

## Requirements

To use Bob you will need:

- golang (>=1.18)
- ninja-build (>=1.8)
- python3 (>=3.6)
- python3-ply

## License

The software is provided under the Apache 2.0 license. Contributions
to this…
