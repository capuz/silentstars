---
repo: "qwertycxz/ContextMenu-mklink"
name: "ContextMenu-mklink"
description: "Create symbolic link and hard link in context menu. (Windows 11 context menu supported)"
readmeQualityOk: true
url: "https://github.com/qwertycxz/ContextMenu-mklink"
language: "C++"
languages: ["C++"]
languagePcts: [87]
topics: ["context-menu", "hard-link", "link", "msix", "symbolic-link", "symlink", "windows", "windows11"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-07-22T03:27:14Z"
lastCommitAt: "2026-11-09T04:35:04Z"
lastReleaseAt: "2026-11-09T04:11:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 53
maintainers: ["qwertycxz", "dependabot[bot]", "thewerthon"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1023999023/e614af7f-8fec-491f-b2f5-8155e80e34b1"
discussionCount: 2
---

# Context Menu mklink

Create symbolic link, hard link (and more!) in context menu. Windows 11 context menu supported.

Fully i18n support! (Now support over 17 languages)

This software is still in the early development stage.

## Install

1. Enable [Developer Mode](https://learn.microsoft.com/en-us/windows/apps/get-started/developer-mode-features-and-debugging) in Windows Settings
2. Download the latest .7z from [Releases](https://github.com/qwertycxz/ContextMenu-mklink/releases)
3. Extract the .7z file to a folder of your choice
4. Start PowerShell and navigate to the extracted folder
5. Run `Add-AppxPackage AppxManifest.xml -Register`
6. If the context menu item isn't showing up, try restarting Windows Explorer.

To uninstall, please head to Windows Settings.

## Usage

1. Copy any files or folders in explorer.
2. Right-click in the directory background. You can see a *Create Link* menu.
3. Choose the link type you want to create. And here you go! A link is successfully created!

## Contributor

[@qwertycxz](https://github.com/qwertycxz)

## How could I contribute?

[Issue](https://github.com/qwertycxz/ContextMenu-mklink/issues) and…
