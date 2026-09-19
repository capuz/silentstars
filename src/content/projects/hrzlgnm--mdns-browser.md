---
repo: "hrzlgnm/mdns-browser"
name: "mdns-browser"
description: "A cross platform mDNS-Browser app written in Rust using tauri and SvelteKit"
readmeQualityOk: true
url: "https://github.com/hrzlgnm/mdns-browser"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [42, 23]
topics: ["mdns-sd", "rust", "tauri", "aur", "android-app", "debian-packages", "rpm-packages", "ubuntu-packages", "macos-application", "auto-update"]
stars: 182
forks: 3
openIssues: 3
closedIssues: 299
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-03-03T20:06:23Z"
lastCommitAt: "2026-09-19T01:37:41Z"
lastReleaseAt: "2024-04-02T19:04:21Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 42
maintainers: ["hrzlgnm", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/766639586/de223731-a812-4aeb-a999-c94ad5025066"
discussionCount: 6
---

# mDNS-Browser

This application allows you to browse services using mDNS. Built with a Rust/Tauri backend and a SvelteKit frontend; the frontend was migrated from Leptos to SvelteKit in [v2.0.0](https://github.com/hrzlgnm/mdns-browser/releases/tag/v2.0.0). For a force-directed graph visualizer of the same services, check out [zux](https://github.com/hrzlgnm/zux). For an alternative running in a terminal, check out [mDNS-TUI-Browser](https://github.com/hrzlgnm/mdns-tui-browser)

Screenshots from [v0.11.28](https://github.com/hrzlgnm/mdns-browser/releases/tag/mdns-browser-v0.11.28)

### Startup

### Browsing for \_ssh.\_tcp

### Details of a resolved service having many IPs

### Details of a resolved service having a subtype and TXT records

### Checking for updates on Windows

### Response if no update is available

- [mDNS-Browser Overview](#mdns-browser)
    - [How to Build](#building)
    - [Command line options](#command-line-options)
    - [Where to find the executables?](#where-to-find-the-executables)
        - [GitHub Release](#github-releases)
        - [Winget Installation](#winget-installation)
        - [Arch Linux (AUR)](#arch-linux-aur)
        - [Homebrew…
