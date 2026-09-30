---
repo: "unixwin/rubash"
name: "rubash"
description: "A from-scratch GNU Bash 5.3.0-compatible shell engine in Rust — embeddable, native Windows, no POSIX emulation layer. Byte-level compatibility is measured, not claimed, against GNU Bash's own 83-suite test corpus. MIT."
readmeQualityOk: true
url: "https://github.com/unixwin/rubash"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["bash", "cli", "compatibility", "parser", "posix", "rust", "shell", "shell-scripting", "windows", "windows-native"]
stars: 5
forks: 5
openIssues: 8
closedIssues: 310
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-06-10T16:35:09Z"
lastCommitAt: "2026-09-30T09:46:51Z"
lastReleaseAt: "2026-09-15T10:10:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 75
maintainers: ["caomengxuan666"]
openGraphImageUrl: "https://opengraph.githubassets.com/19b877c956a27492b18bfe4380c9bffbdf3e88a1401618d4a34f748b6cee0610/unixwin/rubash"
---

# Rubash

An embeddable GNU Bash-compatible shell engine, written from scratch in Rust.

[中文](https://github.com/unixwin/rubash/blob/HEAD/README.zh-CN.md)

## What Is Rubash

Rubash is a from-scratch reimplementation of GNU Bash semantics in Rust, packaged as an **embeddable, headless engine** — lexer, parser, expansion engine, executor, builtins, and all. It targets byte-level compatibility with GNU Bash 5.3.0 and runs on Windows natively.

Rubash itself is not a shell product. It ships with a reference CLI used by the compatibility harness and tooling, while interactive shells are built *on top of* the engine: niubash embeds Rubash for all bash semantics and owns line editing, prompt rendering, and completions itself.

**Measured, not claimed**: compatibility is verified against GNU Bash's own 83-suite upstream test corpus — 82 suites byte-identical today, every remaining diff line individually audited (ledger below).

**Why native matters**: shells billed as "bash on Windows" (Git Bash, MSYS2) ship a ported bash that rides on a POSIX emulation layer (`msys-2.0.dll`), with fork emulation and path translation that leak quirks into every script. Rubash has no such layer — one…
