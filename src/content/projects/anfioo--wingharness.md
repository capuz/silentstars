---
repo: "Anfioo/WingHarness"
name: "WingHarness"
description: "A good steed needs a good harness — meet WingHarness."
readmeQualityOk: true
url: "https://github.com/Anfioo/WingHarness"
homepage: "https://wingharness.anfioo.com/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [50, 49]
topics: ["database", "desktop-app", "developer-tools", "file-preview", "git", "react", "rust", "shadcn-ui", "svn", "tailwindcss"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-10-22T10:03:33Z"
lastCommitAt: "2026-11-11T11:24:26Z"
lastReleaseAt: "2026-11-11T06:15:33Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 63
maintainers: ["Anfioo", "LuoMuya314"]
openGraphImageUrl: "https://opengraph.githubassets.com/40bc4e8816056624ccadcfc59c682408706c54b3760f61643143e67308f3029e/Anfioo/WingHarness"
---

# WingHarness

English | [简体中文](https://github.com/Anfioo/WingHarness/blob/HEAD/README.zh-CN.md)

A Tauri v2 desktop template: the shell and the native plumbing are already wired,
so the first feature you write is a feature and not a window frame.

## What's in it

More than `create-tauri-app` hands you, but nothing that belongs to a particular
product:

- **Frameless window with a custom title bar** — drag, minimize, maximize, close and a window context menu, on a transparent rounded window
- **In-app router** — pathname-based, pages load lazily, and window routes bring their own frame. Navigating swaps the page and keeps the sidebar mounted instead of reloading the document
- **Light / dark / system theme, plus font presets** — a preset brings its own fonts, downloaded on first use and cached locally
- **System tray** — icon, themed right-click menu, and a popup window
- **Global shortcuts** — registered with the OS, changeable at runtime and kept across restarts
- **Internationalization** — i18next with English and Chinese, one key set, no untranslated keys
- **Local terminal** — a real pseudo-console (`portable-pty`) rendered in the webview
- **Notes** — a Markdown store under…
