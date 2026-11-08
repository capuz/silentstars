---
repo: "hrydgard/pspautotests"
name: "pspautotests"
description: "A test suite based on the pspautotests svn."
readmeQualityOk: true
url: "https://github.com/hrydgard/pspautotests"
language: "C"
languages: ["C", "C++"]
languagePcts: [76, 21]
stars: 63
forks: 49
openIssues: 3
closedIssues: 8
watchers: 16
contributors: 15
recentReleases: 0
createdAt: "2012-11-09T08:18:35Z"
lastCommitAt: "2026-11-08T10:40:45Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 54
maintainers: ["hrydgard"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fb3551b4844966966ca17cae9d411ff06b99ba472fd9d07df32964c8d9e6f12/hrydgard/pspautotests"
---

# pspautotests

* Original and outdated svn repository: http://code.google.com/p/pspautotests/
* New and updated git repository: https://github.com/hrydgard/pspautotests

A repository of PSP programs performing several tests on the PSP platform.

* It will allow people to see how to use some obscure-newly-discovered APIs and features
* It will allow PSP emulators to avoid some regressions while performing refactorings and to have a reference while implementing APIs

The main idea behind this is having several files per test unit:

* `_file_*.expected*` - File with the expected Kprintf's output, preferably from a real PSP
* `_file_*.prx*` - The program that will call Kprintf syscall in order to generate an output
* `_file_*.input*` - Optional file specifying automated actions that should simulate user interaction: pressing a key, releasing a key, selecting a file on the save selector, waiting for a function (for example a vsync) to call before continuing...

## How to build and use

If you just want to run the tests, you just need to run your emulator on the PRX files and compare with the .expected
files. PPSSPP has a convenient script for this called test.py.…
