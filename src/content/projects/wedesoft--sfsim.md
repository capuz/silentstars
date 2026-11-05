---
repo: "wedesoft/sfsim"
name: "sfsim"
description: "Space flight simulator (under development)"
readmeQualityOk: true
url: "https://github.com/wedesoft/sfsim"
homepage: "https://github.com/wedesoft/sfsim"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [90]
topics: ["3d", "clojure", "lwjgl", "opengl", "simulation", "space", "spaceflight"]
stars: 95
forks: 8
openIssues: 41
closedIssues: 210
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2020-09-21T21:36:54Z"
lastCommitAt: "2026-11-05T00:21:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 96
undervaluedScore: 48
maintainers: ["wedesoft"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/297466815/57fab6f0-deee-4d02-80f1-575b04b7c5c1"
discussionCount: 0
---

# [sfsim][1] [](https://www.eclipse.org/legal/epl/epl-v10.html) [](https://github.com/wedesoft/sfsim/actions/workflows/sfsim.yml) [](https://thewaterproject.org/)

This is a work in progress.
Aim is to simulate take off, space station docking, and moon landing with a futuristic space plane.
Requires OpenGL 4.5 (glClipControl for reversed-z rendering)
See [sfsim homepage][1] for more details.

**[Note: Official binary releases are strictly distributed through Steam. Do not download sfsim binaries from third-party sources!](https://store.steampowered.com/app/3687560/sfsim/)**

## Dependencies

* Tested on Debian 13 and Windows 11
* Install [Java Temurin for Linux](https://adoptium.net/en-GB/installation/linux) or [Java Temurin for Windows](https://adoptium.net/en-GB/installation/windows). For maximum compatibility on Windows, I use the 25 LTS release.
* [Install Clojure 1.12](https://clojure.org/guides/install_clojure)
* Download [Packr](https://github.com/libgdx/packr) Jar file for creating Windows executable
* Install [Python 3.13](https://www.python.org/) if you are using GNU/Linux
* Install [PyTorch](https://pytorch.org/) if you are using GNU/Linux (couldn't get the Pytorch to…
