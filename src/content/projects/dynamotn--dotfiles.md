---
repo: "dynamotn/dotfiles"
name: "dotfiles"
description: "My dotfiles and configuration for all devices"
readmeQualityOk: true
url: "https://github.com/dynamotn/dotfiles"
homepage: "https://gitlab.com/dynamo-config/dotfiles"
language: "Shell"
languages: ["Shell", "Go Template"]
languagePcts: [44, 36]
topics: ["dotfiles", "linux", "shell", "catppucin", "chezmoi", "firefox", "fish", "neovim", "archlinux", "gentoo"]
stars: 11
forks: 1
openIssues: 2
closedIssues: 27
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-09-10T09:47:06Z"
lastCommitAt: "2026-10-25T09:00:27Z"
lastReleaseAt: "2025-08-25T03:27:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 75
maintainers: ["dynamotn"]
openGraphImageUrl: "https://opengraph.githubassets.com/23e3f87ad2c1850a76a4932d3661279861059351d17c18fba6c61956f3598748/dynamotn/dotfiles"
---

### Dynamo's dotfiles :house:&nbsp;

#### \> Managed with chezmoi :robot:&nbsp;

- [:book:&nbsp; Overview](#booknbsp-overview)
- [:brain:&nbsp; Philosophy](#brainnbsp-philosophy)
- [:wrench:&nbsp; Rules](#wrenchnbsp-rules)
- [:camera:&nbsp; Screenshots](#cameranbsp-screenshots)
- [:inbox_tray:&nbsp; Installation](#inboxtraynbsp-installation)
- [:scroll:&nbsp; Cheatsheet](#scrollnbsp-cheatsheet)
- [:wrench:&nbsp; Tools & Packages](#wrenchnbsp-tools-packages)
  - [via OS package manager](#via-os-package-manager)
  - [via chezmoi external](#via-chezmoi-external)
  - [via Github Release binary](#via-github-release-binary)
  - [via mise](#via-mise)
  - [via Mason of neovim](#via-mason-of-neovim)

## :book:&nbsp; Overview

This repository contains all my dotfiles and
working configurations managed by [chezmoi](https://github.com/twpayne/chezmoi).

## 💻 Supported Platforms

|Key|Definition|
|-|-|
|✅|Fully supported|
|❔|Limited supported|
|❌|Not supported|
|🧪|Experimental|

### Architecture

|OS/Distro|amd64|armv8 (arm64)|armv7 (arm)|Note|
|-|-|-|-|-|
|Gentoo|✅|✅|❔| |
|Arch Linux|✅|✅|❔|Included ARM version|
|Ubuntu|✅|❔|❔|Only from 24.04 LTS version|
|Alpine|✅|✅|❔|Only for container|…
