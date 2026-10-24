---
repo: "mango6i/iOSForge"
name: "iOSForge"
description: "Build IPA and .deb, .dylib plugins online in the cloud without a Mac; supports iOS 15+"
originalDescription: "无需Mac在线云端编译打包IPA  .deb  .dylib插件，支持iOS15+ "
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mango6i/iOSForge"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-08T11:49:38Z"
lastCommitAt: "2026-10-24T00:17:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["github-actions[bot]", "mango6i"]
openGraphImageUrl: "https://opengraph.githubassets.com/961be339b2bfc7b9ee91b730ce1ad720df7ab2ea2d4c8f17734418b0058bde17/mango6i/iOSForge"
---

# iOSForge

A GitHub build tool for projects targeting iOS 15.0 and above. Source code lives on GitHub, builds run on a macOS Runner, and outputs can be `.dylib`, `.deb`, or `.ipa`.


[Web workbench](https://mango6i.github.io/iOSForge/)

## What you can do with it

- Compile your own rootless dynamic library plugins using Theos/Logos;
- Generate `.deb` when you need a plugin package;
- Compile `.ipa` from your own Xcode project without a certificate, to be handled by TrollStore or a self-signing tool; the Apple certificate export mode is also retained;
- On the same web page, upload source ZIP files or folders, trigger builds, view recent builds, and directly download or delete the real IPA, DEB, and DYLIB files.

## Simplest way to use it

**Each person uses their own personal repository.** The web page no longer pre-fills the author's `mango6i/iOSForge` by default. Before operating, use the Token to verify the current account, repository ownership, and visibility; organization and cross-account collaborative repositories are not yet supported. For private source code, set up a separate **Private repository**; a public repository will make its source public even if it belongs to…
