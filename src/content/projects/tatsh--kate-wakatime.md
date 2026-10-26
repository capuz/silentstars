---
repo: "Tatsh/kate-wakatime"
name: "kate-wakatime"
description: "Kate plugin to interface with WakaTime."
readmeQualityOk: true
url: "https://github.com/Tatsh/kate-wakatime"
homepage: "https://tatsh.github.io/kate-wakatime/"
language: "C++"
languages: ["C++"]
languagePcts: [82]
topics: ["wakatime", "kate", "kde", "plasma"]
stars: 15
forks: 10
openIssues: 0
closedIssues: 32
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2014-11-16T06:53:11Z"
lastCommitAt: "2026-10-26T18:06:27Z"
lastReleaseAt: "2026-05-07T15:28:07Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 81
maintainers: ["dependabot[bot]", "Tatsh", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/26706543/322acc7b-5504-44fe-ac10-b640e85a4ed3"
fundingLinks: ["GITHUB:https://github.com/Tatsh", "KO_FI:https://ko-fi.com/tatsh2", "LIBERAPAY:https://liberapay.com/tatsh2", "PATREON:https://patreon.com/tatsh2"]
---

# kate-wakatime

Kate plugin to interface with WakaTime.

## Note

This is for Kate 6 (KTextEditor from KF 6).

If you need a version for Kate 5, use the [v1.3.10 release](https://github.com/Tatsh/kate-wakatime/releases).

If you need a version for Kate 4, use the [v0.6 release](https://github.com/Tatsh/kate-wakatime/releases).

Older versions are not supported.

## Dependencies

- [CMake](https://cmake.org/)
- [Extra CMake Modules](https://invent.kde.org/frameworks/extra-cmake-modules)
- [KF6:TextEditor](https://develop.kde.org/products/frameworks/)
- [wakatime-cli](https://github.com/wakatime/wakatime-cli)

How to install these on your distro is beyond the scope of this document. Generally, install the
Kate text editor, CMake, KDE framework development packages, and Qt development packages.

## How to use

`wakatime-cli` or `wakatime` must be in `PATH` or located in `~/.wakatime`. Any Linux/macOS/Windows
binary [listed in the releases](https://github.com/wakatime/wakatime-cli/releases) can be placed as
is in `~/.wakatime`.

1. Get an account at [WakaTime](https://wakatime.com).
1. Get your [API key](https://wakatime.com/settings).
1. Install with your package manager or clone…
