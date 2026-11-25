---
repo: "JoeyKhd/arc-unpacker"
name: "arc-unpacker"
description: "Installs FitGirl-style repacks (Inno Setup + FreeArc) up to 3.8x faster than their own installer, with the same result"
readmeQualityOk: true
url: "https://github.com/JoeyKhd/arc-unpacker"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["decompression", "egui", "fitgirl", "freearc", "game-installer", "inno-setup", "installer", "parallel", "pascal-script", "repack"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-11-24T13:10:34Z"
lastCommitAt: "2026-11-25T13:19:28Z"
lastReleaseAt: "2026-11-25T00:50:38Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 43
maintainers: ["JoeyKhd"]
openGraphImageUrl: "https://opengraph.githubassets.com/67d23ad2e94f3790a333de2d661591c16f930ca836a074a527fd436206e5bfd5/JoeyKhd/arc-unpacker"
---

# arc-unpacker

**Installs FitGirl-style repacks 2.1× faster than their own installer across ten tested repacks (up to 3.9×), with byte-identical results.** It runs the installer's own install steps on a parallel engine, and checks every file while writing it.

**[→ Benchmarks: every game we tested, its own installer vs arc-unpack](https://github.com/JoeyKhd/arc-unpacker/blob/HEAD/docs/BENCHMARKS.md)**

## Use it

1. Download **`arc-unpack-gui.exe`** from the [latest release](https://github.com/JoeyKhd/arc-unpacker/releases). It's a single file.
2. Run it. It asks for administrator rights, as repack installers do.
3. Drop the repack folder onto the window, pick the optional parts you want, and press **Install**.

From a terminal: `arc-unpack install "<repack folder>" "<game folder>"`.

> Use it only on archives you have the right to extract.
