---
repo: "nsgo-dev/nsgo"
name: "nsgo"
description: "A cross-platform native UI engine with a Go backend: write apps in Go with signals, memos and flexbox layout, and each platform draws with its own native views — iOS and its App Clips, tvOS, watchOS, macOS, Windows, Android, Linux, the web and WeChat, QQ, Alipay and Douyin mini programs"
readmeQualityOk: true
url: "https://github.com/nsgo-dev/nsgo"
homepage: "https://nsgo.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["android", "cross-platform", "desktop", "flexbox", "go", "ios", "linux", "macos", "native", "nsh"]
stars: 486
forks: 28
openIssues: 107
closedIssues: 83
watchers: 3
contributors: 8
recentReleases: 1
createdAt: "2026-10-21T13:55:59Z"
lastCommitAt: "2026-11-16T11:52:09Z"
lastReleaseAt: "2026-11-16T09:34:05Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 23
maintainers: ["houko", "oneo-me"]
openGraphImageUrl: "https://opengraph.githubassets.com/30f5be98e701e15141e5c2561b0633b1687b1fdda71975e1d11f80f49b24cc82/nsgo-dev/nsgo"
discussionCount: 1
---

A cross-platform native UI engine with a Go backend: app logic, the reactive graph and layout run in Go, and each platform draws with its own native UI.<br>
  It follows the design of <a href="https://nsh.dev">Native Shell (NSH)</a>, for teams that want NSH's model without writing Rust.

## Status

NSGo is early: 0.1.0 is its first release, and its API is not stable yet. It runs on macOS, iOS and its App Clips, tvOS, watchOS, Windows, Linux, the web, Android, and experimentally in WeChat, QQ, Alipay and Douyin mini programs, which hold an app to 2 MB, and apps embed in iOS, Android and Go desktop apps of their own; [ARCHITECTURE.md](https://github.com/nsgo-dev/nsgo/blob/HEAD/ARCHITECTURE.md#platforms) tracks each target.

## Getting started

With Go 1.27.3 or later, and Xcode for iOS, tvOS and watchOS, create an app and run it with hot reload:

```sh
go mod init example.com/hello
go get github.com/nsgo-dev/nsgo
go get -tool github.com/nsgo-dev/nsgo/cmd/nsgo
go tool nsgo init   # -template tsx for a TSX app
go tool nsgo dev    # -target web, ios_simulator, tvos_simulator, watchos_simulator, android or miniprogram_wechat to run elsewhere
```

An app is Go components that return…
