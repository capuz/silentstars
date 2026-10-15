---
repo: "stdware/qmsetup"
name: "qmsetup"
description: "CMake Modules and Basic Libraries for C/C++ projects."
readmeQualityOk: true
url: "https://github.com/stdware/qmsetup"
homepage: "https://stdware.github.io/qmsetup/"
language: "CMake"
languages: ["CMake"]
languagePcts: [57]
topics: ["cmake", "cmake-modules", "cmake-utils", "cpp"]
stars: 69
forks: 17
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 5
recentReleases: 3
createdAt: "2023-09-14T10:30:18Z"
lastCommitAt: "2026-10-15T08:30:44Z"
lastReleaseAt: "2026-08-20T09:16:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 58
maintainers: ["SineStriker", "wangwenx190"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c41c9c4847bdd14f69b5023ce1f093f1bf15155917ebb49472eabe85da8e1c3/stdware/qmsetup"
---

# QMSetup

**QMSetup** is a set of CMake Modules and Basic Libraries for C/C++ projects.

**This project is independent from Qt and other 3rdparty libraries.** It ships tools that have to be compiled and then run on the build machine, so adding it with `add_subdirectory` is strongly discouraged. Install it first, or let your project install it during configure, as described under [Integrate](#integrate).

## Features

### CMake Utilities
+ Path, Version functions
+ Target configuration functions
+ Qt related functions

### Generators
+ Generate Windows RC files, manifest files
+ Generate macOS bundle info files
+ Generate configuration header files
+ Generate Git information header files

### Filesystem Utilities
+ Reorganize header files
+ Copy files and directories after build

### Install Utilities
+ Deploy project dependencies and fix rpaths

### Extended Build Rules
+ Create translations with **Qt Linguist** tools
+ Create source files with **Protobuf** compiler
+ Create documentation with **Doxygen**

## Supported Platforms

+ Microsoft Windows
+ Apple macOS
+ GNU/Linux

## Dependencies

### Required Packages

#### Windows

The deploy command reads the import table out of…
