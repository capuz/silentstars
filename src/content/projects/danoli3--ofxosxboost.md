---
repo: "danoli3/ofxOSXBoost"
name: "ofxOSXBoost"
description: "OSX Boost Library 1.60.0 (i386, x86_64) Pre-compiled with (libc++ and libstdc++ branches) - Boost OSX"
readmeQualityOk: true
url: "https://github.com/danoli3/ofxOSXBoost"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 22
forks: 9
openIssues: 2
closedIssues: 5
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2013-12-11T05:21:10Z"
lastCommitAt: "2026-09-22T08:44:48Z"
lastReleaseAt: "2016-03-28T22:02:17Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 72
undervaluedScore: 38
maintainers: ["danoli3"]
openGraphImageUrl: "https://opengraph.githubassets.com/213f6d14e4ea91baa2a26d44a2425801cbc23d121d16931655f3f78e3802ed4e/danoli3/ofxOSXBoost"
---

# ofxOSXBoost for Boost 1.92.0 — macOS 10.15+

## Boost C++ Libraries — pre-compiled XCFramework for macOS

**Deploy target**: macOS 10.15 (Catalina)  
**Architectures**: x86_64 + arm64 (universal)  
**C++ Standard**: C++20

### What is this?

Boost C++ libraries packaged as a static XCFramework for macOS (x86_64 + arm64) using the macOS 10.15+ deployment target. Designed as an openFrameworks addon, but also usable in any C++ project.

### Supported Versions

| Version | Deployment Target | Highlights |
|---------|------------------|------------|
| 1.61.0 | macOS 10.9+ | Original library set |
| 1.62.0 | macOS 10.9+ | Adds `filesystem3` |
| 1.63.0 | macOS 10.9+ | Same libraries |
| 1.64.0 | macOS 10.9+ | Adds `regex_extended`, `signals2` |
| 1.65.0 | macOS 10.15+ | Adds `context`, `coroutine`, `coroutine2`, `call_traits`, `mp11` |
| 1.66.0 | macOS 10.15+ | Adds `callable_traits`, `beast` (experimental HTTP library) |
| 1.67.0 | macOS 10.15+ | Last historical release in the original automation |
| 1.92.0 | macOS 10.15+ | C++20 universal XCFramework, SwiftPM, CocoaPods, and Homebrew |

### Installation

The package structure is flat and relocatable:

-…
