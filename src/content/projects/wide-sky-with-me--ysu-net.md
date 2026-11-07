---
repo: "wide-sky-with-me/ysu_net"
name: "ysu_net"
description: "Campus network management tool for Yanshan University: Linux CLI, automatic reconnection, and Windows/Ubuntu desktop beta"
originalDescription: "燕山大学校园网管理工具：Linux CLI、自动重连与 Windows/Ubuntu 桌面测试版"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wide-sky-with-me/ysu_net"
homepage: "https://github.com/wide-sky-with-me/ysu_net/wiki"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [43, 42]
topics: ["campus-network", "cli", "desktop-app", "linux", "python", "systemd", "windows", "yanshan-university"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-02-26T12:05:49Z"
lastCommitAt: "2026-11-07T16:12:28Z"
lastReleaseAt: "2026-11-06T13:26:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 80
maintainers: ["wide-sky-with-me"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d5a216f93893620d359163578bbe44c0fecc7fb7260b86d71b7e42f9cbbac28/wide-sky-with-me/ysu_net"
discussionCount: 3
---

# ysu-net · Yanshan University Campus Network Management Tool

Campus network login, carrier switching, account query, and automatic reconnection, with a cross-platform desktop app and a Linux command-line version.

[Download desktop app](https://github.com/wide-sky-with-me/ysu_net/releases/latest) · [Command-line install](#快速开始) · [Usage guide](https://github.com/wide-sky-with-me/ysu_net/blob/HEAD/docs/usage.md) · [Changelog](https://github.com/wide-sky-with-me/ysu_net/blob/HEAD/packaging/release-notes.md)

Screenshots are from a v0.2.3 cloud interface demo; accounts, addresses, and quotas are synthetic data. [Screenshot source](https://github.com/wide-sky-with-me/ysu_net/blob/HEAD/docs/screenshots/README.md)

## Choosing a version

| Version | Use case | How it runs |
| --- | --- | --- |
| **Desktop** | Daily use on Windows, Linux, macOS | Tauri + Svelte + Rust, supports system tray and autostart at user login, no Python / Node authentication runtime required |
| **Command line** | Linux servers, terminals, and systemd background services | Python 3.12, unified under `ysu`; can run as a foreground daemon without systemd |

The two sides keep configuration and authentication…
