---
repo: "unixwin/niubash"
name: "niubash"
description: "AI-native bash for humans and AI agents: real bash syntax, real Unix commands (winuxcmd), real git via niu-git. Native Windows/Linux/Android/macOS/harmony - no WSL, no MSYS, no fork()."
readmeQualityOk: true
url: "https://github.com/unixwin/niubash"
homepage: "https://unixwin.dev/products/niubash/"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["cli", "command-line", "repl", "rust", "shell", "terminal", "unix", "windows", "windows-terminal", "agent"]
stars: 220
forks: 11
openIssues: 25
closedIssues: 429
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-03-28T14:05:55Z"
lastCommitAt: "2026-11-04T11:28:22Z"
lastReleaseAt: "2026-08-01T07:26:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 32
maintainers: ["caomengxuan666"]
openGraphImageUrl: "https://opengraph.githubassets.com/e048cb89488e946998107c25894fbe80fe9a7a7f462537dc46b82b8daa0408cb/unixwin/niubash"
discussionCount: 0
---

# Niubash — native Bash for Windows (Git Bash alternative)

> **Real Bash, native on Windows, Linux, and macOS.** No WSL. No VM. No `/mnt/c`. No cmdlet dialect. One binary: the shell your fingers already know — and the one your AI agent actually speaks.

[English](https://github.com/unixwin/niubash/blob/HEAD/README.md) · [中文](https://github.com/unixwin/niubash/blob/HEAD/README-zh.md)

Docs & downloads: [unixwin.dev](https://unixwin.dev)

**[Install](#quick-start) · [Niubash vs Git Bash](#niubash-vs-git-bash) · [Why not Git Bash / MSYS2 / Cygwin](#why-not-git-bash--msys2--cygwin) · [AI agents](#built-for-ai-agents) · [Compatibility](#compatibility--testing) · [Performance](#performance) · [Limitations](#known-limitations-stated-plainly)**

**niubash** is a Bash-compatible shell implemented natively in Rust — a Git Bash alternative. On Windows, the flagship platform, one `niu.exe` carries the whole stack:

- the [rubash](https://github.com/unixwin/rubash) language engine — GNU Bash 5.3 semantics with no emulation layer;
- real Unix commands from [WinuxCmd](https://github.com/unixwin/winuxcmd), native builds designed for shell use;
- a git-aware prompt and a permission-modeled plugin…
