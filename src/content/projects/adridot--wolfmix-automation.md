---
repo: "Adridot/wolfmix-automation"
name: "wolfmix-automation"
description: "Reverse-engineered .wpj format for the Wolfmix W1 DMX lighting controller: byte-level spec, offline stdlib-only tools, every claim backed by an experiment."
readmeQualityOk: true
url: "https://github.com/Adridot/wolfmix-automation"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["binary-format", "cli", "dmx", "dmx512", "file-format", "lighting-control", "nicolaudie", "protobuf", "python", "reverse-engineering"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-08-25T07:23:49Z"
lastCommitAt: "2026-09-01T08:51:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["Adridot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1345818751/875e3272-3ebb-47c2-b4e8-a9ba9de3e3df"
---

# wolfmix-automation

**Read, decode, diff and rebuild Wolfmix `.wpj` project files — and drive a Wolfmix W1 over USB — from the command line.**

*Offline. Python standard library only. No dependencies, no uploads, no guessing.*

[**What is this?**](#what-is-this) · [**Quick start**](#quick-start) · [**Tools**](#the-tools) · [**The rules**](#the-rules-that-shape-the-code) · [**Docs**](#documentation)

</div>

---

## What is this?

The Wolfmix W1 is a standalone DMX lighting controller. Its projects are `.wpj`
files, and **the manufacturer does not publish that format**. So you cannot
generate a show from a script, diff two versions of a rig, or check a project
into version control in any meaningful way.

This repository is the result of taking that format apart — by reading files we
own, changing one parameter at a time in the vendor's own editor, and watching
what our own controller does on its USB link and on its DMX output.

**📄 A specification.** [`SPEC.md`](https://github.com/Adridot/wolfmix-automation/blob/HEAD/SPEC.md) describes the format byte by byte:
three container variants, 20  record types, the patch
model, presets, FX,
the static palettes and the USB protocol.…
