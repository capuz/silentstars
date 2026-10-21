---
repo: "hodgesds/narf"
name: "narf"
description: "Not Another Rust Framekernel"
readmeQualityOk: true
url: "https://github.com/hodgesds/narf"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 7
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-24T01:00:30Z"
lastCommitAt: "2026-10-21T21:15:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 42
maintainers: ["hodgesds", "hodgesds-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a79beed546e09ff03d59aa5ee7b14a7231fff8c3b3c8daff4c459ee05656e62/hodgesds/narf"
---

# NARF

**A framekernel with first-class Linux compatibility.**

**Not Another Rust Frame Kernel** is a `no_std` Rust operating system
for x86_64 and aarch64. NARF combines a small Ring-0 trusted computing
base (TCB) with a kernel organized into protection domains, then
exposes both a native interface and a Linux-compatible userspace
interface. The goal is to contain kernel faults without giving up the
shared-memory performance of a monolithic kernel or the software
ecosystem built around the Linux ABI.

GPL-2.0-or-later. See [`LICENSE`](https://github.com/hodgesds/narf/blob/HEAD/LICENSE).

---

## What is a framekernel?

A **framekernel** is a kernel architecture in which a small trusted
core — the *frame* — establishes the system's protection rules, while
the rest of the kernel runs in hardware-isolated domains. The frame
handles the operations that must be globally trusted: bootstrapping
the machine, entering and leaving protection domains, dispatching
traps, scheduling work, and managing memory protection.

A framekernel occupies a middle ground between familiar kernel models:

| Model | Where kernel services run | What must be trusted |
|---|---|---|
| Monolithic kernel | One…
