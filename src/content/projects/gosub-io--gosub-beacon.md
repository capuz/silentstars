---
repo: "gosub-io/gosub-beacon"
name: "gosub-beacon"
description: "A browser based on the Gosub engine"
readmeQualityOk: true
url: "https://github.com/gosub-io/gosub-beacon"
homepage: "https://beacon.gosub.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 8
forks: 1
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-11-21T10:18:08Z"
lastCommitAt: "2026-08-30T09:25:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 80
maintainers: ["jaytaph", "JeroenBoersma"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/891990587/e4ca9ed5-3466-4549-a0a8-f5d23240982f"
fundingLinks: ["GITHUB:https://github.com/gosub-io"]
---

# Gosub Beacon — GTK browser

Beacon is a GTK4 browser built on the [Gosub engine](https://github.com/gosub-io/gosub-engine).
The engine does the actual work (networking, cookies, storage, history, rendering); Beacon
is the native chrome around it. It exists to test the engine in a real application, so
don't expect a daily driver — but basic browsing works.

Currently working:

- page loading and rendering (Skia rasterization, GPU compositing via GtkGLArea)
- tabs, back/forward with a tree-shaped session history
- session restore: the previous session's tabs reopen on start; Ctrl+Shift+T
  reopens a closed tab
- bookmarks and visited history in sqlite, with a bookmarks bar and URL-bar completion
- downloads with a save dialog and a progress popover
- keyboard: Tab focus traversal, Enter on links, scrolling keys
- right-click context menu (open/copy link, image, save link as)
- internal pages: gosub://home, help, version, history, bookmarks and a settings
  editor on gosub://config
- favicons, cursor shapes, error pages, a JSON viewer
- view-source: with syntax highlighting and line numbers, in a tab
- file:// URLs: local pages load their own subresources, directories get an index…
