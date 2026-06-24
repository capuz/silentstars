---
repo: "marovira/lua"
name: "lua"
description: "The Lua Programming Language with Modern CMake"
url: "https://github.com/marovira/lua"
language: "C"
languages: ["C"]
languagePcts: [99]
stars: 19
forks: 9
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-05-24T22:41:41Z"
lastCommitAt: "2026-06-24T00:23:28Z"
lastReleaseAt: "2025-08-01T00:18:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 47
maintainers: ["marovira"]
openGraphImageUrl: "https://opengraph.githubassets.com/c69b2cb5e3c7a4317f794eb711ced3bb26e728ef52deb6abfa00f05694a90da8/marovira/lua"
---

# The Lua Programming Language with Modern CMake

## Introduction

This repository contains the CMake files for the Lua Programming Language aimed for those
that wish to use the library in [Modern CMake](https://cliutils.gitlab.io/modern-cmake/README.html).

> [!NOTE]
> The bundle provided here is aimed at *modern* CMake. CMake has come a long way as a
> build generation tool and most modern systems now ship with CMake versions 3.20+ by
> default. As a result, this bundle **requires** a minimum CMake version of 3.30+.

![logo](https://github.com/marovira/lua/blob/master/logo.png)

## Usage Instructions

There are a couple of ways to integrate this bundle into your project. All of
them will use the same linking code, so let's discuss how to include it first.

### As a Subdirectory

The easiest way is to clone this repository directly into your source tree (i.e.
under `./external/lua` for example) and then adding this to your
`CMakelists.txt` file

```cmake
add_subdirectory(<path-to-lua-dir>)
```

You can also add this repository as a submodule using git.

### Using `FetchContent`

An alternative use is to have CMake deal with downloading the code via `FetchContent`. To
add this,…
