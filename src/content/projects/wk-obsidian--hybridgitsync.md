---
repo: "wk-obsidian/HybridGitSync"
name: "HybridGitSync"
description: "Hybrid Git Sync plugin"
readmeQualityOk: true
url: "https://github.com/wk-obsidian/HybridGitSync"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 10
forks: 1
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-04T11:20:14Z"
lastCommitAt: "2026-09-04T08:08:55Z"
lastReleaseAt: "2026-08-04T07:03:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 85
undervaluedScore: 57
maintainers: ["walkskyer"]
openGraphImageUrl: "https://opengraph.githubassets.com/d03c8ed6836cca604f29774ec7b3d6522bad2bb9d182c041e3fff68b48b7efd5/wk-obsidian/HybridGitSync"
fundingLinks: ["KO_FI:https://ko-fi.com/walkskyer"]
---

# Hybrid Git Sync for Obsidian

[English](https://github.com/wk-obsidian/HybridGitSync/blob/main/README.md)｜[中文](https://github.com/wk-obsidian/HybridGitSync/blob/main/README_ZH.md)

> 🚀 **An adaptive, cross-platform Git synchronization solution for Obsidian.**  
> Enjoy high-performance Native Git execution on Desktop alongside a lightweight, zero-dependency Git Provider API on Mobile.

---

## 🌟 Introduction & Design Philosophy

Managing an Obsidian vault with Git across different operating systems usually requires distinct synchronization strategies due to platform-specific constraints. **Hybrid Git Sync** bridges this gap seamlessly by implementing an **Adaptive Sync Engine**.

Instead of applying a single approach to all environments, this plugin intelligently splits the synchronization workload based on the device you are currently using:

* **💻 On Desktop (Windows/Mac/Linux):** It invokes your local **Native Git client**. This guarantees maximum execution speed, reliability, and full support for complex repository histories or large assets.
* **📱 On Mobile (iOS/Android):** It bypasses mobile OS limitations by interacting directly with cloud **REST APIs (GitHub / GitLab…
