---
repo: "pedrofraca/scrcpyui"
name: "scrcpyui"
description: "Small project to provide UI access for the scrcpy tool in macOS"
readmeQualityOk: true
url: "https://github.com/pedrofraca/scrcpyui"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 13
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2021-01-27T23:58:06Z"
lastCommitAt: "2026-10-29T21:24:52Z"
lastReleaseAt: "2025-03-15T10:51:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 44
maintainers: ["pedrofraca"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8ce4225cc360b16efbe39e5358e2b0417b6ce173289aff27b65bf24bfc516fb/pedrofraca/scrcpyui"
---

# scrcpyui
Small project :to provide UI access to the [scrcpy](https://github.com/Genymobile/scrcpy) tool in macOS

## Install
`brew tap pedrofraca/brew; brew install scrcpyui`

`adb` and `scrcpy` must be available in `PATH`. Add the directories containing them to `PATH` in `~/.bashrc` or `~/.zshrc`, whichever matches your configured shell. scrcpyui loads that file before running either command.

 `brew install --cask android-platform-tools`

## Usage
Once installed you just need to open it from Applications folder (you have to accept it from the security options).
And you'll get a status bar icon where you can see your devices connected, clicking on them will launch scrcpy
