---
repo: "oneo-me/nsgo"
name: "nsgo"
description: "A cross-platform native UI engine with a Go backend: write apps in Go with signals, memos and flexbox layout, and each platform draws with its own native views — iOS, macOS, Windows, Android, Linux and the web"
readmeQualityOk: true
url: "https://github.com/oneo-me/nsgo"
homepage: "https://oneo-me.github.io/nsgo/"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["android", "cross-platform", "desktop", "flexbox", "go", "golang", "gui", "ios", "linux", "macos"]
stars: 48
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-10-21T13:55:59Z"
lastCommitAt: "2026-10-28T09:57:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 40
maintainers: ["oneo-me", "Heyana"]
openGraphImageUrl: "https://opengraph.githubassets.com/9084adb962984f872578f1dd7df653a54d6f0d52039adaa19378e8daaa6fa465/oneo-me/nsgo"
---

# NSGo

**English** | [简体中文](https://github.com/oneo-me/nsgo/blob/HEAD/README.zh-CN.md)

NSGo is a cross-platform native UI engine with a Go backend. App logic, the reactive graph and layout run in Go, and each platform draws with its own native UI.

NSGo follows the design of [Native Shell (NSH)](https://nsh.dev), which does the same in Rust. It exists for teams that want NSH's model without writing Rust.

## Status

NSGo is early. It has NSH's reactive model, layout, text, images, canvas, shaders, animations, services and unstyled base components on macOS, iOS, Windows, Linux, the web and Android, and apps embed in iOS, Android and Go desktop apps of their own. There is no release or stable API yet. [ARCHITECTURE.md](https://github.com/oneo-me/nsgo/blob/HEAD/ARCHITECTURE.md#platforms) tracks each target.

## Goals

- Write apps and components in Go, with signals, memos and effects.
- Lay out with flexbox and grid, and render with each platform's own views and text.
- Target iOS, Android, macOS, Windows, Linux and the web, as NSH does.
- Embed NSGo apps in existing native apps, or package them as standalone apps.

## Usage

An app is a Go main package that calls `nsgo.Run`.…
