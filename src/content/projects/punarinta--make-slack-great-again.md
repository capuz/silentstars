---
repo: "punarinta/make-slack-great-again"
name: "make-slack-great-again"
description: "Native, pure C++, Slack client for Linux, macOS and Windows. Lightweight alternative to the official Electron app."
readmeQualityOk: true
url: "https://github.com/punarinta/make-slack-great-again"
homepage: "https://msga.app"
language: "C++"
languages: ["C++"]
languagePcts: [93]
topics: ["slack", "slack-client", "desktop-app", "lightweight", "native", "cplusplus", "cross-platform", "electron-alternative", "im-client", "linux"]
stars: 168
forks: 14
openIssues: 6
closedIssues: 50
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-06-05T20:08:33Z"
lastCommitAt: "2026-10-29T14:07:21Z"
lastReleaseAt: "2026-06-24T14:16:19Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub"]
healthScore: 97
undervaluedScore: 31
maintainers: ["punarinta", "DAcodedBEAT", "abu-matterize"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8de6e82487c8e8d98653b0d6689c96968f6634dbbe07cd3eb0dc82182d33107/punarinta/make-slack-great-again"
fundingLinks: ["GITHUB:https://github.com/punarinta"]
discussionCount: 36
---

# Make Slack Great Again

A fast native Slack client built in C++, on its own platform, network and graphics layers: no Electron, no web view, no GUI toolkit.

## About

msga is a Slack client first and foremost. Channels, DMs, threads, reactions, files and notifications all work the way you expect from Slack, in a window that starts instantly and needs a fraction of the memory of the official app. As a side feature, msga can also show your Claude Code sessions in the same workspace rail, each one as a direct message.

Everything below the UI is msga's own code: a thin OS layer for windows, input and desktop services (Wayland and X11 on Linux, AppKit on macOS, Win32 on Windows), an HTTP and WebSocket client (WinHTTP on Windows, NSURLSession on macOS, msga's own client over Mbed TLS on Linux), and a CPU renderer with FreeType and HarfBuzz for text. The first goal is a small binary that uses few resources.

## Demo

## Download

Each download is a single self-contained file. The Linux binary is fully static and runs on any x86_64 distribution, on Wayland or X11. The macOS app needs macOS 14 or later. msga checks for updates itself. On Linux and Windows it swaps in the new version…
