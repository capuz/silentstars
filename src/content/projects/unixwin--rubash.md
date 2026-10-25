---
repo: "unixwin/rubash"
name: "rubash"
description: "A from-scratch GNU Bash 5.3-compatible shell engine in Rust — embeddable, byte-level compatibility measured against GNU's own 83-suite corpus. Native Windows, Linux & macOS builds; Android cross-compile checks in CI. No POSIX emulation layer."
readmeQualityOk: true
url: "https://github.com/unixwin/rubash"
homepage: "https://unixwin.dev/products/rubash/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["bash", "cli", "compatibility", "parser", "posix", "rust", "shell", "shell-scripting", "windows", "windows-native"]
stars: 13
forks: 8
openIssues: 16
closedIssues: 1060
watchers: 0
contributors: 11
recentReleases: 5
createdAt: "2026-06-10T16:35:09Z"
lastCommitAt: "2026-10-25T08:39:46Z"
lastReleaseAt: "2026-10-22T08:22:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 68
maintainers: ["caomengxuan666"]
openGraphImageUrl: "https://opengraph.githubassets.com/77f781f6b9cd8832fc2ccd4f3f282a1c5d577305414128a1542ff7ebd4715c80/unixwin/rubash"
---

# Rubash

An embeddable GNU Bash-compatible shell engine, written from scratch in Rust — a native-Windows bash and Git Bash/MSYS2 alternative with no POSIX emulation.

[中文](https://github.com/unixwin/rubash/blob/HEAD/README.zh-CN.md) · [unixwin.dev](https://unixwin.dev)

Docs & downloads: [unixwin.dev](https://unixwin.dev)

## What Is Rubash

Rubash is a from-scratch reimplementation of GNU Bash semantics in Rust, packaged as an **embeddable, headless engine** — lexer, parser, expansion engine, executor, builtins, and all. It targets byte-level compatibility with GNU Bash 5.3.x (the vendored upstream tree is at the Bash-5.3 patch 20 level, #957) and runs natively on Windows, Linux, and macOS.

Rubash itself is not a shell product. It ships with a reference CLI used by the compatibility harness and tooling, while interactive shells are built *on top of* the engine: niubash embeds Rubash for all bash semantics and owns line editing, prompt rendering, and completions itself.

**Measured, not claimed**: compatibility is verified against GNU Bash's own 83-suite upstream test corpus — 83/83 suites pass on the 2026-10-12 full re-run. Raw stdout equality on Windows is 62/83; the other 20…
