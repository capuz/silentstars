---
repo: "mango6i/iOSForge"
name: "iOSForge"
description: "Compile and package IPA, .deb, and .dylib plugins online in the cloud without a Mac, supporting iOS 15+"
originalDescription: "无需Mac在线云端编译打包IPA  .deb  .dylib插件，支持iOS15+ "
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mango6i/iOSForge"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [38]
stars: 10
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-08T11:49:38Z"
lastCommitAt: "2026-10-25T02:47:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 35
maintainers: ["github-actions[bot]", "mango6i"]
openGraphImageUrl: "https://opengraph.githubassets.com/e033a23b90bea79ac70df66d95a657042a7632b16c6314a33e1403d460d6b001/mango6i/iOSForge"
---

# iOSForge

A GitHub build tool for projects targeting iOS 15.0 and above. Source code lives on GitHub, builds run on a macOS Runner, and outputs can be `.dylib`, `.deb`, or `.ipa`.


[Web Workbench](https://mango6i.github.io/iOSForge/)

## What you can do with it

- Compile your own rootless dynamic library plugins with Theos/Logos;
- Generate `.deb` when you need a plugin package;
- Compile `.ipa` from your own Xcode project without a certificate, for handling with TrollStore or self-signing tools; the Apple certificate export mode is also retained;
- On the same web page, upload source ZIP / folders, trigger builds, view recent builds, and directly download or delete the real IPA, DEB, and DYLIB files.

## The simplest way to use it

**Each person uses their own personal repository.** The web page no longer defaults to the author's `mango6i/iOSForge`. Before operating, use a Token to verify the current account, repository ownership, and visibility. Organization and cross-account collaboration repositories are not yet supported. For private source code, create a separate **Private repository**; even a public repository you own will make its source public. Uploading to a public…
