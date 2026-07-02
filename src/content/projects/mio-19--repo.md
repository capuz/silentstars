---
repo: "mio-19/repo"
name: "repo"
description: "build script for android applications and operating system based on android"
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
lastCommitAt: "2026-07-02T06:21:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 63
maintainers: ["mio-19"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb1e8f4b0bdd715f89bf71063b749be1467cf8742f41aa78a20c6b3ac3e692dc/mio-19/repo"
discussionCount: 2
---

# repo

This repository contains build scripts for android applications, operating systems based on android, and full source code bootstrapping of gradle/maven/openjdk.

This repository shall be treated only as a proof of concept / toy project as the code quality is affected negatively by llm.

Warning: This repository contains many llm generated glue code. They might be written on false assumptions but happen to work. Don't trust them. See later section LLM for more details.

This repository implemented a build system for gradle and maven to replace prebuilt jar with versions built with source code. Of couse the versions built with source code still have their own prebuilt dependencies jar. But now it is possible to gradually work towards the goal of fully building from source code. A problem is bootstrapping. For example gradle uses old gradle to build. Expect long build time when build cache is not available.

Warning: Using this repository may result in data loss, boot loops, bricked devices, injuries due to exploded devices, dead SD cards, thermonuclear war, lawsuit, banned account, money loss, or you getting fired because the alarm app failed. By proceeding, you accept full…
