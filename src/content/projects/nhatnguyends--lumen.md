---
repo: "nhatnguyends/Lumen"
name: "Lumen"
description: "Windows 11 widgets"
readmeQualityOk: true
url: "https://github.com/nhatnguyends/Lumen"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 5
createdAt: "2026-11-11T05:22:21Z"
lastCommitAt: "2026-11-15T08:19:27Z"
lastReleaseAt: "2026-11-14T12:13:52Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 24
maintainers: ["nhatnguyends"]
openGraphImageUrl: "https://opengraph.githubassets.com/7902a1786a870ece228ff6c9e3423e1718aabf4c814f60da2ba891a6d765b5f9/nhatnguyends/Lumen"
---

# Lumen

Native Rust desktop widgets for Windows: App Dock, Clock, Calendar, YouTube
Music, Notes and Control Center. Widget UI shares one Rust/Win32 process and
wallpaper compositor. The Electron app and its build/runtime dependencies have
been removed.

## Portable download

Download `Lumen-<version>-windows-x86_64.zip` from
[GitHub Releases](https://github.com/nhatnguyends/Lumen/releases), extract the
whole archive to a writable folder, and open **Lumen.exe**. The native portable
edition bundles its Music runtime: Python, Node, Rust and Visual Studio do not
need to be installed. Music playback uses installed Chrome or Edge and internet;
the other widgets do not require a browser. No Electron or WebView runtime is used.

The initial target is Windows 10/11 **x64**. Native ARM64 and 32-bit builds are
not supplied, and cross-machine compatibility still needs broader testing.
The binary is currently unsigned. Keep all extracted files together and use
a writable user folder rather than Program Files. Data stays in `config/` beside
the executable. Start with Windows defaults on and can be disabled in General
Settings. Launch once after moving the folder to…
