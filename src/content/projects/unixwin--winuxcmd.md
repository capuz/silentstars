---
repo: "unixwin/WinuxCmd"
name: "WinuxCmd"
description: "Lightweight, native Windows implementation of Linux commands | 3.0MB only | AI-friendly"
readmeQualityOk: true
url: "https://github.com/unixwin/WinuxCmd"
homepage: "https://dl.caomengxuan666.com/"
language: "C++"
languages: ["C++"]
languagePcts: [92]
topics: ["ai", "command", "coreutils", "shell", "powershell"]
stars: 271
forks: 10
openIssues: 2
closedIssues: 921
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2026-01-23T09:58:22Z"
lastCommitAt: "2026-10-03T09:23:52Z"
lastReleaseAt: "2026-02-20T19:03:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 33
maintainers: ["caomengxuan666", "daiaji", "Uarz"]
openGraphImageUrl: "https://opengraph.githubassets.com/b636a844f9136e5745a0210c04e0051ad33be483623f0369a28dee14c8dbca5e/unixwin/WinuxCmd"
---

**Real Unix commands. Real Windows paths. One ~3 MB executable.**
No WSL · No Cygwin · No MSYS2 · No path-translation pain
**v1.0.0 stable is out.** 🎉

[💾 Install](#-install) · [⚡ Demo](#-unix-muscle-memory-on-windows) · [🐂 niubash](#-better-together-the-niubash-shell) · [📦 WPM](#-wpm-package-manager) · [🆚 Compare](#-how-it-compares) · [📚 Docs](#-documentation) · [中文](https://github.com/unixwin/WinuxCmd/blob/HEAD/README-zh.md)

</div>

---

## The problem, in one sentence

You're on Windows and you need `grep -rn`, `sed -i`, `find -exec`, `xargs -0` — and every option so far is a compromise:

- **WSL** — 1 GB+ install, and a VM filesystem boundary between you and your files
- **Cygwin** — path-translation gymnastics and a 2–5 s startup
- **GnuWin32** — abandoned in 2012, stuck at 60% compatibility
- **uutils** — a great Rust project, but ~100 commands and ~600 options

**WinuxCmd skips the compromise.** A single native Win32 executable that speaks GNU syntax on Windows paths: **176 commands, 1,924 options** — with ongoing differential testing against a GNU coreutils 9.7 oracle (178 cases, 165 pass, 13 tracked platform diffs).

| | | | | |
|:---:|:---:|:---:|:---:|:---:|
|…
