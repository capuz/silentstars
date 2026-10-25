---
repo: "gujial/re3"
name: "re3"
description: "Sin City is my hometown"
originalDescription: "大罪城，是我的家乡"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/gujial/re3"
language: "C++"
languages: ["C++", "Scala"]
languagePcts: [61, 33]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 47
recentReleases: 0
createdAt: "2025-11-02T03:26:16Z"
lastCommitAt: "2026-10-25T02:46:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 66
undervaluedScore: 42
maintainers: ["gujial"]
openGraphImageUrl: "https://opengraph.githubassets.com/b51a9b667e2c305e6a390b139f5686814859830dd0986f7166d307c76d78fa90/gujial/re3"
---

# reVC-Improved

**Languages:** [English] | [中文 (Chinese)](https://github.com/gujial/re3/blob/HEAD/docs/README.zh_CN.md)

## Introduction

This repository makes the following changes to the original re3 repository:

- Removed canon build
- Added nix flake build and packaging
- Fixed workflows to make them work properly

For easy installation and running on NixOS, a Nix wrapper has been written in [re3-flake](https://github.com/gujial/re3-flake).

> The wrapper can automatically configure re3, reVC, reLCS, but you still need the original game files. By default, it uses Steam's default installation path to find the original game files (except for reLCS).

Compared to other branches, the reVC branch has made more changes:

- Built-in Chinese support
- Added related tools for unpacking, translating, and packing text
- Added tool for automatically generating character tables
- Added tool for generating Chinese font texture maps based on character tables and custom fonts
- Support for rendering Emoji
- Enabled Japanese and Polish settings options, but not yet fully implemented
- Modified the poster when exiting
- Fix some bugs
  - Wrong cursor position when use functional scale…
