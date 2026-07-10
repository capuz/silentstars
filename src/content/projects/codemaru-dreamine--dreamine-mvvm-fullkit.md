---
repo: "CodeMaru-Dreamine/Dreamine.MVVM.FullKit"
name: "Dreamine.MVVM.FullKit"
description: "The complete Dreamine package for building WPF MVVM applications with DI, navigation, and source generators."
readmeQualityOk: true
url: "https://github.com/CodeMaru-Dreamine/Dreamine.MVVM.FullKit"
homepage: "https://dreamine.kr/"
language: "C#"
languages: ["C#", "HTML"]
languagePcts: [52, 30]
topics: ["csharp", "di", "dotnet", "dreamine", "framework", "mvvm", "navigation", "source-generator", "wpf", "fullkit"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-05-26T13:34:59Z"
lastCommitAt: "2026-07-10T06:59:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 73
maintainers: ["CodeMaru-Dreamine"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d74e463d999fe76526cfb47cff12a1a10964934c2774c69e870c756fe62b64b/CodeMaru-Dreamine/Dreamine.MVVM.FullKit"
---

# Dreamine.MVVM.FullKit

All-in-One package set for building WPF MVVM applications with the Dreamine architecture.

> Dreamine.MVVM.FullKit is a meta-package/repository concept that brings together the core Dreamine MVVM modules used for WPF applications: DI, ViewModel infrastructure, source generators, locator wiring, WPF runtime integration, behaviors, extensions, and optional hybrid hosting.

[➡️ 한국어 문서 보기](https://github.com/CodeMaru-Dreamine/Dreamine.MVVM.FullKit/blob/HEAD/README_KO.md)

## Architecture at a Glance

The FullKit meta-package bundles **49 libraries** across **9 architectural categories** — from MVVM foundation to UI, hosting, identity, data access, communication, I/O, and PLC drivers. Every category has an entry-point package you can add à la carte, or grab everything through the FullKit bundle.

---

## Repository Quick Start

This repository uses Git submodules for the individual Dreamine libraries. Clone it recursively:

```powershell
git clone --recursive https://github.com/CodeMaru-Dreamine/Dreamine.MVVM.FullKit.git
cd Dreamine.MVVM.FullKit
```

If you already cloned the repository without submodules:

```powershell
git submodule update --init --recursive…
