---
repo: "bnsmb/binaries-for-Android"
name: "binaries-for-Android"
description: "This repository contains binaries that I compiled for Android on arm64 CPUs "
readmeQualityOk: true
url: "https://github.com/bnsmb/binaries-for-Android"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 59
forks: 7
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-27T17:52:13Z"
lastCommitAt: "2026-11-24T14:09:44Z"
lastReleaseAt: "2026-07-19T12:19:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 47
maintainers: ["bnsmb"]
openGraphImageUrl: "https://opengraph.githubassets.com/14b27b69dd708588bc53181f328158a90490cbd16d8120e0a7d4a60b5097ae94/bnsmb/binaries-for-Android"
---

# binaries-for-Android

This repository contains binaries I compiled for Android running on **arm64** CPUs (well, most of them)

The binaries in the directory **binaries** are all either static linked or dynamically linked for only the standard libraries from Android. They should therefore run on any Android OS
The binaries run on Android 13 and newer Android versions (most probably also on older versions)

Binaries in this repository as of **08.09.2026** are

| Binary | version | source code | comment |
| ---| ---| ---| ---|
| gdb18.1/*  | 18.1 | https://sourceware.org/gdb/ | | 
| static_gdb18.1/*  | 18.1 | https://sourceware.org/gdb/ | statically linked gdb binaries |
| 7zz_26.06_static  | 26.06 | https://www.7-zip.org | this is a statically linked binary |
| 7zz_26.06 | 26.06 | https://www.7-zip.org | |
| aapt2 | | |
| bash | 5.2.37|  https://www.gnu.org/software/bash/ | dynamically linked for the <br>Android OS libraries |
| bash-static | 5.2.37|  https://www.gnu.org/software/bash/ | this is a statically linked binary |
| bash-static-stripped  | 5.2.37|  https://www.gnu.org/software/bash/ | This is statically linked and stripped <br>binary |
