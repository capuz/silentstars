---
repo: "topkernel/Rux"
name: "Rux"
description: "Yet another Linux-like kernel in Rust—fully AI-generated.Full POSIX & Linux ABI compatible: run any Linux binary directly, no recompile.Not reinventing the wheel, just a fun experiment to test AI & Rust."
readmeQualityOk: true
url: "https://github.com/topkernel/Rux"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 18
forks: 3
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-02T02:42:42Z"
lastCommitAt: "2026-11-19T11:44:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["topkernel"]
openGraphImageUrl: "https://opengraph.githubassets.com/b336debef58c4aca38d141ef074408db14719809ebd4a5f24c0e9abd2c0e0348/topkernel/Rux"
discussionCount: 1
---

# Rux

**A Linux-compatible operating-system kernel, written from scratch in Rust.**

Reports & documentation: **<https://topkernel.github.io/Rux/>** (中文 / EN)

---

## Why

Rust reached the Linux kernel in 2022, one driver at a time. A decade of
advocacy bought a handful of drivers and an ocean of C; the memory-safety
statistics that motivated the language kept pointing at the code that
stayed C. Rux inverts that ratio by starting from zero: ~392,000 lines in
which 89% is safe Rust and the remaining ~44,000 lines (10.6%) are `unsafe`
under written contract — a kernel where memory safety is the default and unsafety is a
licensed exception, rather than the reverse.

A new kernel is worthless, however, if nothing runs on it. So the second
founding decision was made before the first line of code: **the Linux ABI
is the contract** — syscall numbers and semantics, ELF and auxv, futex,
POSIX/SysV IPC, binder, on-disk ext4, the procfs/sysfs/debugfs/tracefs
layouts, down to the `uname` strings glibc's dynamic loader keys on. No
porting, no patches, no recompilation. The software the world already
ships is the acceptance test, and it is applied literally:
