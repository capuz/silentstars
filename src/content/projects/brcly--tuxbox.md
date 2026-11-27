---
repo: "brcly/TuxBox"
name: "TuxBox"
description: "TuxBox is a new, native-first compatibility layer for running unpacked, decrypted Xbox Series X|S games on x86-64 Linux and Windows."
readmeQualityOk: true
url: "https://github.com/brcly/TuxBox"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [54, 26]
stars: 395
forks: 50
openIssues: 10
closedIssues: 22
watchers: 6
contributors: 31
recentReleases: 0
createdAt: "2026-11-21T12:07:28Z"
lastCommitAt: "2026-11-27T16:25:37Z"
status: "newborn"
tags: []
healthScore: 93
undervaluedScore: 23
maintainers: ["brcly", "NickStallman", "Jerkin42"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e87378388b2840382de975b81899449c174a837e025cbd38bff7d885fb7d91f/brcly/TuxBox"
discussionCount: 4
---

# TuxBox

TuxBox is an experimental compatibility layer that aims to run Xbox Series X|S games on Linux and Windows PCs. It is Linux-first: Windows has a native Direct3D 12 backend, and game support there is still in development.

## How it works

An Xbox Series game mostly calls the same APIs a Windows game does. Windows handles those itself, and Valve's Proton provides them on Linux. TuxBox supplies the part that is specific to the console:

- **Graphics:** the Xbox version of Direct3D 12, plus ray tracing and texture layouts.
- **Shaders:** a translator that turns the console's GPU code into shaders a PC graphics card can run.
- **Other libraries:** the memory, input, storage and audio calls a game actually uses.

We measure progress by what works in real games, not by how many functions exist. [Architecture](https://github.com/brcly/TuxBox/blob/HEAD/docs/ARCHITECTURE.md) · [Library coverage](https://github.com/brcly/TuxBox/blob/HEAD/docs/LIBRARIES.md)

## Status

TuxBox is early. No retail game is playable yet.
