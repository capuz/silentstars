---
repo: "dotkoval/xpeccy-plus"
name: "xpeccy-plus"
description: "ZX Spectrum all-rounder: run-ahead for low-latency play, accurate ULA timing for demos, a proper Z80 debugger for development."
readmeQualityOk: true
url: "https://github.com/dotkoval/xpeccy-plus"
language: "C++"
languages: ["C++", "C"]
languagePcts: [55, 39]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 10
createdAt: "2024-01-20T14:16:05Z"
lastCommitAt: "2026-10-24T00:05:00Z"
lastReleaseAt: "2026-09-26T12:53:40Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 66
maintainers: ["dotkoval"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ed3df853a1a1ba7dd55022d96d254a4def4e959f1305e198b55c656996b996b/dotkoval/xpeccy-plus"
fundingLinks: ["KO_FI:https://ko-fi.com/oleksandrkovalkovalchuk25949"]
---

# Xpeccy+

A ZX Spectrum emulator with a built-in debugger.

Xpeccy+ is a fork of [Xpeccy](https://github.com/samstyle/Xpeccy) by SAM style. All the
emulation code comes from that project. This fork does not claim authorship of it.

Current version: **2026.7**. Forked from upstream build `20260807`.

Windows, Linux and macOS are built by CI on every nightly and off every release tag. The
macOS build is arm64 only and carries no developer signature, so a downloaded DMG has to be
allowed through Gatekeeper by hand.

## Why a fork

Upstream Xpeccy is a multi-platform emulator: ZX Spectrum and clones, plus MSX, Game Boy,
NES, Commodore 64, BK0010, IBM PC and more. Its focus is to support more machines.

This fork narrows the focus to the ZX Spectrum, and spends the effort on the parts a user
touches every day. That is a different plan for the same code, so it is easier to follow it
in a separate project than to steer one project in two directions.

Xpeccy+ is also open to other people's work. The aim is a good ZX emulator built together,
so patches, ideas and bug reports are welcome.

## Goals

- **ZX Spectrum only.** Since 2026.4 the other machines are not built, and since 2026.5…
