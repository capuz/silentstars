---
repo: "mapron/Wuild"
name: "Wuild"
description: "Distributed compilation system"
readmeQualityOk: true
url: "https://github.com/mapron/Wuild"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["ninja", "build", "distributed-builds"]
stars: 60
forks: 9
openIssues: 3
closedIssues: 13
watchers: 8
contributors: 2
recentReleases: 0
createdAt: "2017-01-06T13:50:43Z"
lastCommitAt: "2026-08-29T17:27:57Z"
lastReleaseAt: "2024-01-19T00:57:51Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 27
maintainers: ["mapron"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad662769098800faac0814e4a2b18318c6e06a862a8c671710fdfdd2ae49c57a/mapron/Wuild"
---

# About Wuild
Wuild (derived from "wild build") is a distributed compilation system, inspired by Distcc project. Main goals:
- Cross-platform builds (for example, Linux guests and Windows hosts);
- Simplicity;
- Fast integration and usability.

Wuild is written in C++, using Ninja (<https://github.com/ninja-build>) as main frontend. WuildNinja aims to be drop-in replacement for ninja, without need to change your project.  

# Wuild features
What's Wuild good for?  
- It provides drop-in support for ninja tool - for the best case it's just one line in your build scripts with CMake parameter;
- It supports fast incremental build same way ninja does - you don't need to switch to WuildNinja when you need to build whole project and back to ninja when you need to compile 2 files;
- It supports distributed builds and crosscompilation for clang, msvc and gcc (gcc is not highly tested though);
- Crosscompilation support means you can use same server for msvc and clang, for example;
- Support for macOS, Windows and Linux hosts;
- It does not require installation on clients - you can place WuilNinja and Wuild.ini in conan package and automatically provide setup for clients;
- Main approach…
