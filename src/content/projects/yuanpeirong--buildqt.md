---
repo: "yuanpeirong/buildQt"
name: "buildQt"
description: "Automatically build Qt from source code"
originalDescription: "从源代码自动构建Qt"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yuanpeirong/buildQt"
language: "Batchfile"
languages: ["Batchfile", "C++"]
languagePcts: [49, 48]
topics: ["qt", "qt5", "qt6", "release", "static"]
stars: 266
forks: 76
openIssues: 2
closedIssues: 17
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2025-02-12T07:00:20Z"
lastCommitAt: "2026-11-06T13:20:10Z"
lastReleaseAt: "2025-04-11T03:14:25Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 85
undervaluedScore: 25
maintainers: ["yuanpeirong", "yprnet"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b82346837d141254352416d6916d002b2e638008fc4f418c09b8f001260415f/yuanpeirong/buildQt"
---

# buildQt: Automatically build Qt from source

## Description
1. The main purpose of this project is to build binary versions of Qt from source code (automatically built with GitHub Actions)
2. Mainly targets the open-source versions of Qt5 and Qt6
3. Mainly builds the `Windows版本` (using the three major compilers `MSVC`, `MinGW64`, and `LLVM-MinGW`)

## Branch Descriptions
| Branch | static/shared | debug/release | Notes
| :----- | :----- | :----- | :-----
| main | static | release | Mainly builds the 64-bit version
| shared-release | shared | release | Mainly builds the 64-bit version
| shared-debug | shared | debug | Mainly builds the 64-bit version
| shared-debug-and-release | shared | debug-and-release | Mainly builds the 64-bit version

## Versions
1. Versions without "RP": built from the complete Qt source code, building the vast majority of components
2. Versions with "RP": built from Qt component source code; currently only builds qtbase, qttools, qttranslations, and qtsvg (4 components in total)

## Repository Address
1. GitHub: https://github.com/yuanpeirong/buildQt

## Qt6.11.3 Full Versions
1. Qt6.11.3 msvc2022_64
2. Qt6.11.3 msvc2026_64
3. Qt6.11.3 MinGW1310_64…
