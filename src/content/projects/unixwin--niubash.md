---
repo: "unixwin/niubash"
name: "niubash"
description: "AI-native bash for humans and AI agents: real bash syntax, real Unix commands (winuxcmd), real git via niu-git. Native Windows/Linux/macOS - no WSL, no MSYS, no POSIX emulation."
readmeQualityOk: true
url: "https://github.com/unixwin/niubash"
homepage: "https://unixwin.dev/products/niubash/"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["cli", "command-line", "repl", "rust", "shell", "terminal", "unix", "windows", "windows-terminal", "agent"]
stars: 192
forks: 10
openIssues: 31
closedIssues: 286
watchers: 0
contributors: 8
recentReleases: 6
createdAt: "2026-03-28T14:05:55Z"
lastCommitAt: "2026-10-26T09:17:45Z"
lastReleaseAt: "2026-08-01T07:26:12Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 36
maintainers: ["caomengxuan666", "Catapult291", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/643ba2f15ea434e466aaa02130e102eae992372fb1c8547f79e5a70781f8aff1/unixwin/niubash"
discussionCount: 0
---

# Niubash — native Bash for Windows (Git Bash alternative)

> **Real Bash, native on Windows, Linux, and macOS.** "Windows-only" is the
> old story: five platforms build from this tree now, and Windows remains
> the flagship — no WSL. No VM. No `/mnt/c`. No cmdlet dialect. One binary:
> the shell your fingers already know, and the one your AI agent actually
> speaks.

[English](https://github.com/unixwin/niubash/blob/HEAD/README.md) · [中文](https://github.com/unixwin/niubash/blob/HEAD/README-zh.md)

Docs & downloads: [unixwin.dev](https://unixwin.dev)

**niubash** is a Bash-compatible shell implemented natively in Rust, a Git Bash alternative. On
Windows, the flagship platform, one `niu.exe` bundles everything: the
[rubash](https://github.com/unixwin/rubash) language engine, real Unix
commands from [winuxcmd](https://github.com/unixwin/winuxcmd), a git-aware
prompt, and a permission-modeled plugin system. Git comes from
[niu-git](https://github.com/unixwin/niu-git): the real git-for-windows C
source built with MSVC, so the `git` on PATH *is* the git binary — no MSYS
runtime, no launcher hop, no bundled perl. `git --version` starts in **~14
ms** (13.7 ms avg / 11.5 ms min measured;…
