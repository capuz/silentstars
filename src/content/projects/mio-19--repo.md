---
repo: "mio-19/repo"
name: "repo"
description: "build script for android applications and operating system based on android"
readmeQualityOk: true
url: "https://github.com/mio-19/repo"
language: "Nix"
languages: ["Nix"]
languagePcts: [96]
topics: ["aosp", "grapheneos", "lineageos", "nix", "android", "android-application", "fdroid", "fdroid-repos", "help-wanted", "kernelsu"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-11T02:45:17Z"
lastCommitAt: "2026-08-08T04:34:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 67
maintainers: ["mio-19"]
openGraphImageUrl: "https://opengraph.githubassets.com/875a8b953a23f69b219f05bba54363069b53a6fbc5a960239e6ea12d07adc1b1/mio-19/repo"
discussionCount: 2
---

# repo

I want the following freedom on my devices: `The freedom to study how the program works, and change it so it does your computing as you wish (freedom 1). Access to the source code is a precondition for this.` F-Droid does not help. I need to build apps myself. I cannot figure out how to set up a fdroid build server properly to re-use their build scripts without errors, and I want more repeatable results, so I now have my nix build scripts.

This repository contains build scripts for android applications, operating systems based on android, and full source code bootstrapping of gradle/maven/openjdk.

This repository implemented a build system for gradle and maven to replace prebuilt jar with versions built with source code. Of couse the versions built with source code still have their own prebuilt dependencies jar. But now it is possible to gradually work towards the goal of fully building from source code.

For a probably redistribution-safe subset, use [`fdroid-repo-oss`](https://github.com/mio-19/repo/blob/HEAD/app/by-name/fdroid-repo-oss/README.md).

android devices rom configurations

modifications include kernelsu and pixel8 pro pwm mod.

command examples:

```zsh
nix…
