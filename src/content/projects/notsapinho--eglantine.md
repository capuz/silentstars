---
repo: "notsapinho/Eglantine"
name: "Eglantine"
description: "Experimental, open-source NS2 emulator based on Eden."
readmeQualityOk: true
url: "https://github.com/notsapinho/Eglantine"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["cpp", "eden", "emulator", "nintendo-switch-2", "switch-2", "vulkan"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 475
recentReleases: 6
createdAt: "2026-11-01T14:13:22Z"
lastCommitAt: "2026-11-07T10:36:54Z"
lastReleaseAt: "2026-11-07T00:45:40Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["notsapinho", "PastaLaPate", "rdenno"]
openGraphImageUrl: "https://opengraph.githubassets.com/68e98af35ec2f7a3e72fab055a2f75fa1e74ea39a3acdd0e5c9bed8446051b76/notsapinho/Eglantine"
---

> [!WARNING]
> Eglantine is very experimental. Expect crashes, graphical glitches and missing features, and keep backups of your saves.

## Compatibility

| Game | Status |
| --- | --- |
| Pokémon Pokopia | Playable. |
| Mario Kart World | Runs at decent to full speed, depending on your hardware and settings. |
| Splatoon Raiders | Runs, with variable performance. |

Other games are being brought up. A full compatibility list will follow.

## Download

Every change to `main` is built and published on the [Releases](https://github.com/notsapinho/Eglantine/releases) page. Day-to-day work happens on `dev`, which has no automatic builds. Every package is built with clang and profile-guided optimization (PGO). The x86_64 packages need a CPU with AVX2 (x86-64-v3: Intel Haswell from 2013, AMD Ryzen, or newer); on an older one the emulator says so and quits.

| System | File | Notes |
| --- | --- | --- |
| Windows x64 | `eglantine-windows-x86_64.zip` | Extract and run `eglantine.exe`. |
| Linux x86_64 / arm64 | `eglantine-linux-*.AppImage` | Self-contained; needs glibc 2.39 or newer (Ubuntu 24.04, Fedora 40, Debian 13, Arch). `chmod +x` it, then run it. |
| Linux x86_64 / arm64 |…
