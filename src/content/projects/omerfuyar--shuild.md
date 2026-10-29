---
repo: "omerfuyar/shuild"
name: "shuild"
description: "A C build tool allowing you to build projects without leaving C programming language"
readmeQualityOk: true
url: "https://github.com/omerfuyar/shuild"
language: "C"
languages: ["C"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 27
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-06T10:55:36Z"
lastCommitAt: "2026-10-29T10:36:43Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 74
maintainers: ["omerfuyar", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0b54b22c277cb78d50c2af414d1b6a327ad83fcd36f733b1a16efd79aa4e357/omerfuyar/shuild"
---

# Shuild
Shuild (SHU buILD) is a portable, cross platform project builder library.

It uses the [SHU](https://github.com/omerfuyar/shu) system. By defining `SHU` you can tell the library where to find `shu.h` or include it yourself  before any shu... library to prevent any complication. See [SHU](https://github.com/omerfuyar/shu) repo for more information.

Goal is to create a system that is easy to use without leaving the development environment of C. A system that does not require any new syntax or concept to learn. Similar to the build system of Zig. 

Be aware that Shuild is still in early development phase. Expect breaking changes and incomplete features.

Thanks to people who come up with the name of this project and encourage me to improve it:
[bedwen](https://github.com/bedwen)
[ETCKK](https://github.com/ETCKK)

## Setup

To use Shuild, simply download the `shuild.h` file and include it in your project. You can just place the header and your build source file (like `shuild.c`) together in your project directory. It is recommended to place the executable `shuild` at the top of the project tree, beside `shuild.c`, because the paths that shuild takes are relative to the build…
