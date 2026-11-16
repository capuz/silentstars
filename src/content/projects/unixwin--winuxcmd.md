---
repo: "unixwin/WinuxCmd"
name: "WinuxCmd"
description: "Lightweight, native Windows implementation of Linux commands | 3.0MB only | AI-friendly"
readmeQualityOk: true
url: "https://github.com/unixwin/WinuxCmd"
homepage: "https://unixwin.dev/products/winuxcmd/"
language: "C++"
languages: ["C++", "Rust"]
languagePcts: [58, 32]
topics: ["ai", "command", "coreutils", "shell", "powershell"]
stars: 274
forks: 13
openIssues: 7
closedIssues: 1215
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2026-01-23T09:58:22Z"
lastCommitAt: "2026-11-16T04:16:26Z"
lastReleaseAt: "2026-02-20T19:03:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 35
maintainers: ["caomengxuan666"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7cbcbb16c643864a4679015652d3422791d64c5cb53e11aef3062a8e3e39454/unixwin/WinuxCmd"
---

**Real Unix commands. Real Windows paths. One native executable.**
No WSL · No Cygwin · No MSYS2 · No path-translation pain
**v2.0.0 — the Rust command core is here.** 🎉

**[unixwin.dev](https://unixwin.dev) — Docs & downloads**

[💾 Install](#install) · [🚀 What's new in 2.0](#-whats-new-in-20) · [⚡ Quickstart](#-quickstart) · [🔁 1.x → 2.0](#-upgrading-from-1x) · [📚 Docs](#-documentation) · [中文](https://github.com/unixwin/WinuxCmd/blob/HEAD/README-zh.md)

---

## The problem, in one sentence

You're on Windows and you need `grep -rn`, `sed -i`, `find -exec`, `xargs -0` — and every option so far is a compromise:

- **WSL** — 1 GB+ install, and a VM filesystem boundary between you and your files
- **Cygwin** — path-translation gymnastics and a 2–5 s startup
- **GnuWin32** — abandoned in 2012, stuck at 60% compatibility
- **uutils** — a great Rust project, but ~100 commands and ~600 options

**WinuxCmd skips the compromise.** One native Win32 executable that speaks
GNU syntax on Windows paths: **176 commands**, no runtime, no VM. 2.0 moves
the command core to Rust — behavior still measured against a GNU oracle,
byte for byte.

## 🚀 What's new in 2.0

2.0 is an **implementation**…
