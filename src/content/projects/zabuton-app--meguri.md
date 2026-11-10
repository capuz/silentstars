---
repo: "zabuton-app/meguri"
name: "meguri"
description: "🎬 A local-first media library for your videos & photos — scan, browse, search, and play. No cloud, no account."
readmeQualityOk: true
url: "https://github.com/zabuton-app/meguri"
homepage: "https://zabuton-app.github.io/meguri/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["desktop-app", "electron", "image-viewer", "local-first", "media-library", "react", "sqlite", "thumbnails", "typescript", "ffmpeg"]
stars: 14
forks: 7
openIssues: 48
closedIssues: 75
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-12T13:20:07Z"
lastCommitAt: "2026-11-10T14:49:12Z"
lastReleaseAt: "2026-08-12T12:53:42Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 91
undervaluedScore: 52
maintainers: ["amgsk", "jeffreylm", "shounakjoshi88-a11y"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1298298509/4992b31d-7d93-4f49-9401-103949aed77b"
discussionCount: 2
---

# Meguri

**Redefining what a media manager is supposed to be.**

A local-first media library for your videos and photos — scan, browse,
search, and play, all offline.

Meguri is a personal desktop app for browsing, searching, and playing local
videos and images with thumbnails. It recursively scans any folder you point it at,
generates thumbnails, tags, and metadata, and lets you browse the collection in
a native window.

The name **Meguri** comes from the Japanese word *巡り* — "going around,
coming back around" — with the sentiment of wandering back through your
memories and rediscovering them.

Built with **Electron + Node/TypeScript + React**. Chromium is bundled, so video
playback and rendering are largely insulated from the host environment. The only
native dependency is SQLite (better-sqlite3); ffmpeg/ffprobe ship as static
binaries, so no system-side ffmpeg is required.

## Philosophy

Meguri exists to redefine what a media manager is supposed to be. The
category has settled into a set of assumptions — an account to sign up for, a
cloud your files are uploaded to, a subscription to keep paying, a catalog
that quietly reports what you watch. Meguri starts from the opposite…
