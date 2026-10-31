---
repo: "KDE/marknote"
name: "marknote"
description: "A simple markdown note management app"
readmeQualityOk: true
url: "https://github.com/KDE/marknote"
homepage: "https://invent.kde.org/office/marknote"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 82
forks: 15
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 39
recentReleases: 0
createdAt: "2023-04-25T00:51:54Z"
lastCommitAt: "2026-10-31T01:59:50Z"
status: "thriving"
tags: ["funded"]
healthScore: 79
undervaluedScore: 47
maintainers: ["Prayag2", "mbruchert", "loisspitz"]
openGraphImageUrl: "https://opengraph.githubassets.com/c49ecefa8d3dd81556ba0c120fb1f39abcf636f44bd0d71c890535ca2dab4649/KDE/marknote"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

#  <img src="https://invent.kde.org/mbruchert/marknote/-/raw/master/logo.png">  Marknote

Write down your thoughts.

Marknote supports a wide range of formatting options useful for taking everyday notes, like bold, italic, underlined and strike through fonts as well as headings, lists, check boxes, images and more.

## Installation

## Build Instructions

### flatpak builder (with kde sdk)
```
flatpak-builder tmp --force-clean --ccache --install --user org.kde.marknote.json
```
### cmake
```
mkdir build
cd build
cmake ..
make
```
### kdesrc-build
```
kdesrc-build marknote
```
