---
repo: "rngtng/NabaztagHackKit"
name: "NabaztagHackKit"
description: "A simple SDK to get your hands dirty with Nabaztag"
readmeQualityOk: true
url: "https://github.com/rngtng/NabaztagHackKit"
language: "C"
languages: ["C"]
languagePcts: [81]
topics: ["nabaztag", "metal", "mtl"]
stars: 33
forks: 5
openIssues: 5
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2012-01-04T00:40:58Z"
lastCommitAt: "2026-07-05T21:00:29Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 52
maintainers: ["claude", "rngtng"]
openGraphImageUrl: "https://opengraph.githubassets.com/163f76018547092a2262e7dddd210566fcab2dd42716d3cf912f4f9cd47cb0e5/rngtng/NabaztagHackKit"
---

# Nabaztag Hack Kit

A complete MTL firmware and SDK for the Nabaztag v1/v2 IoT rabbit — including a dockerized toolchain, a reusable MTL standard library, a Forth interpreter, and a full application stack for WiFi, audio, RFID, LEDs, and ears.

## Getting Started

The only host requirements are [Docker](https://www.docker.com/) and [Task](https://taskfile.dev). Every build runs inside Docker — no toolchain to install locally.

## Architecture

The project is split into three components: a toolchain and build system (`tools/`), a reusable standard library (`lib/`), and applications which integrates those. These are either the initial boot image (`src/boot/`), or main applications (`src/app-**`) loaded from remote.

```
 ┌─ Layer 3  Forth scripts (vl/*.forth)        edit-at-runtime, REPL      ← nabaztag-piper/vl
 │              ▲ interpreted by
 ├─ Layer 2  MTL app  (src/app-**/*.mtl)       incl. a Forth interpreter  ← nabaztag-piper/firmware
 │           + MTL stdlib (lib/*.mtl)          written in MTL             ← mtl_library/lib
 │              ▲ compiled to bytecode by
 │           MTL toolchain (mtl_comp/simu)     host-side                  ← nabgcc(mtl_linux)
 │…
