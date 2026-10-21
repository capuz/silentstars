---
repo: "digimezzo/knowte"
name: "knowte"
description: "Cross platform note taking application"
readmeQualityOk: true
url: "https://github.com/digimezzo/knowte"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
stars: 319
forks: 35
openIssues: 9
closedIssues: 183
watchers: 9
contributors: 7
recentReleases: 0
createdAt: "2018-10-13T16:32:45Z"
lastCommitAt: "2026-10-21T17:31:21Z"
lastReleaseAt: "2021-04-29T04:37:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 33
maintainers: ["digimezzo"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ef90f6ba4745fced47e85634833e4c5535bbc1964e731408f5e34ca7b838dca/digimezzo/knowte"
---

# Knowte

Knowte is a note taking application that allows you to quickly and easily organize and find your notes. This version is written using Electron, Angular and Typescript. The original Knowte (for Windows), which is written in WPF and C#, remains available <a href="https://github.com/digimezzo/knowte-windows">here</a>.

## Screenshot

## Build prerequisites

-   wine: required to build Windows package
-   rpm: required to build rpm package
-   libarchive-tools: contains bsdtar, which is required to build pacman package.

**To install the prerequisites on Ubuntu:**

sudo apt install wine rpm libarchive-tools

**To install the prerequisites on Arch Linux and Manjaro:**

sudo pacman -S wine rpm-tools

## Build instructions

```bash
$ git clone https://github.com/digimezzo/knowte.git
$ cd knowte
$ npm install            # Download dependencies
$ npm start              # Start Knowte
$ npm run electron:windows   # Build for Windows
$ npm run electron:linux     # Build for Linux
$ npm run electron:mac       # Build for Mac
```

## Pacman installation notes

The pacman package can be installed using this command (replace x.y.z with the correct version number):

`$ sudo pacman -U…
