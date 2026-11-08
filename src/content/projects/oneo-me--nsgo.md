---
repo: "oneo-me/nsgo"
name: "nsgo"
description: "A cross-platform native UI engine with a Go backend: write apps in Go with signals, memos and flexbox layout, and each platform draws with its own native views — iOS, macOS, Windows, Android, Linux and the web"
readmeQualityOk: true
url: "https://github.com/oneo-me/nsgo"
homepage: "https://oneo-me.github.io/nsgo/"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["android", "cross-platform", "desktop", "flexbox", "go", "golang", "gui", "ios", "linux", "macos"]
stars: 232
forks: 9
openIssues: 1
closedIssues: 17
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-10-21T13:55:59Z"
lastCommitAt: "2026-11-08T10:41:29Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 29
maintainers: ["oneo-me"]
openGraphImageUrl: "https://opengraph.githubassets.com/61b93380bf828f2648504c1155e435e528f128a95861c12583a77b98889cac14/oneo-me/nsgo"
---

A cross-platform native UI engine with a Go backend: app logic, the reactive graph and layout run in Go, and each platform draws with its own native UI.<br>
  It follows the design of <a href="https://nsh.dev">Native Shell (NSH)</a>, for teams that want NSH's model without writing Rust.

## Status

NSGo is early, with no release or stable API yet. It runs on macOS, iOS, Windows, Linux, the web and Android, and apps embed in iOS, Android and Go desktop apps of their own; [ARCHITECTURE.md](https://github.com/oneo-me/nsgo/blob/HEAD/ARCHITECTURE.md#platforms) tracks each target.

## Getting started

With Go 1.26 or later, and Xcode for iOS, create an app and run it with hot reload:

```sh
go mod init example.com/hello
go get github.com/oneo-me/nsgo
go get -tool github.com/oneo-me/nsgo/cmd/nsgo
go tool nsgo init   # -template tsx for a TSX app
go tool nsgo dev    # -target web, ios_simulator or android to run elsewhere
```

An app is Go components that return elements, with signals updating what reads them:

```go
func Root(cx *core.Scope) core.Node {
	count := core.NewSignal(cx, 0)
	return core.View{Style: core.Style{Padding: core.All(24), Gap: 12}, Children: []core.Node{…
