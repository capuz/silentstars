---
repo: "ferrix-os/ferrix"
name: "ferrix"
description: "Experimental Rust operating system running unmodified Linux apps on its own kernel, with restartable userland drivers and a Wayland desktop."
readmeQualityOk: true
url: "https://github.com/ferrix-os/ferrix"
homepage: "https://ferrix-os.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["aarch64", "ai-agents", "btrfs", "kernel", "linux-compatibility", "operating-system", "osdev", "qemu", "rust", "wayland"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-09-12T11:58:12Z"
lastCommitAt: "2026-10-30T05:44:36Z"
lastReleaseAt: "2026-10-29T13:50:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 59
maintainers: ["SetZero"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1367256325/ca252e00-d5ff-4e8b-be64-1a5e32141fcb"
discussionCount: 0
---

# Ferrix

**An operating system written by a fleet of Claude Code sessions.**

Claude Code sessions write Ferrix: its Rust kernel,
its drivers, its compositor, its shell and its tests. A person, the
customer, decides what is built, in what order, and what is good enough.
The sessions plan the work, write the code, review each other's changes and
land them once their tests pass. [How the fleet works](#how-the-fleet-works)
says who does what.

**Linux apps without Linux.** Ferrix runs tested, unchanged Linux programs
on its own kernel: Chrome, `git`, `curl`, `rustc`, Valve's Steam client and,
through Proton, a Windows game. Disk, network, graphics, input and power
drivers run as separate processes that Ferrix can restart when they crash.

Ferrix is experimental. Logins, `su` and the lock screen check passwords,
but it is not ready to be your everyday operating system, and most of its
tests run in QEMU.

[See what works](#what-works) · [Download the live ISO](https://github.com/ferrix-os/ferrix/releases/latest) ·
[Try it without building](#try-it-without-building) ·
[Boot Ferrix](#boot-ferrix) · [Read the technical guide](https://github.com/ferrix-os/ferrix/blob/HEAD/docs/GUIDE.md) ·…
