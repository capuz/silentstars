---
repo: "vivaui/viva"
name: "viva"
description: "A Go-first, GPU-native desktop framework. No WebView, no bundled runtime."
readmeQualityOk: true
url: "https://github.com/vivaui/viva"
homepage: "https://vivaui.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["desktop", "direct3d", "framework", "golang", "gpu", "gui", "metal", "native", "ui", "vulkan"]
stars: 354
forks: 46
openIssues: 12
closedIssues: 108
watchers: 1
contributors: 29
recentReleases: 10
createdAt: "2026-10-22T09:54:32Z"
lastCommitAt: "2026-11-17T14:43:08Z"
lastReleaseAt: "2026-11-05T18:28:55Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 31
maintainers: ["t8y2", "caichangqing1120", "xiaoyumuxi"]
openGraphImageUrl: "https://opengraph.githubassets.com/f421a4473e8add232060dd0bf97b184377ac4d78be37ecbe4032f9f1f3291801/vivaui/viva"
discussionCount: 0
---

Viva is a Go-first, GPU-native desktop framework. Applications draw through
the platform's own window and GPU APIs — Cocoa and Metal, Win32 and Direct3D 11,
XCB and Vulkan — with no WebView, no browser engine, and no bundled runtime. It
is aimed at small binaries, low idle resource usage, and direct access to native
platform capabilities. An application that needs web content can host the
system's own web view beside Viva's drawing (WebKitGTK, WKWebView, WebView2): it
is opt-in, loaded when the first page opens, and nothing is bundled.

The status list below is what runs today.

## Quick start

Viva is a Go module, `github.com/vivaui/viva`. The `viva` command builds,
packages and live-reloads applications; nothing in it is linked into the program
you ship.

```sh
brew install vivaui/tap/viva        # macOS, Linux
scoop bucket add vivaui https://github.com/vivaui/homebrew-tap && scoop install viva   # Windows
viva doctor                         # is this machine ready?
viva init hello
cd hello
viva dev .        # hot reload: save a file, the window updates and keeps its state
```

Prebuilt archives (with `SHA256SUMS`) are on each release from `v0.1.3` on; with Go
already installed,…
