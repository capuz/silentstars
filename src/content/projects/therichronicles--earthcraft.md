---
repo: "therichronicles/EarthCraft"
name: "EarthCraft"
description: "An open-source 3D globe explorer built in Rust, with satellite imagery, live aircraft, ships, weather and traffic."
readmeQualityOk: true
url: "https://github.com/therichronicles/EarthCraft"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 10
forks: 2
openIssues: 23
closedIssues: 3
watchers: 2
contributors: 4
recentReleases: 3
createdAt: "2026-10-12T11:02:21Z"
lastCommitAt: "2026-10-16T08:26:43Z"
lastReleaseAt: "2026-10-14T06:24:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 46
maintainers: ["PixelSoftwareStudios", "therichronicles", "PierrunoYT"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dcb464bf090001b06c932dc0cab6a9e6acdc694cf8b6ac9146afb2478544e28/therichronicles/EarthCraft"
---

[**English**](https://github.com/therichronicles/EarthCraft/blob/HEAD/README.md) | [Brazilian Portuguese](https://github.com/therichronicles/EarthCraft/blob/HEAD/README.pt-BR.md)

# EarthCraft 🌍

A 3D globe explorer in the style of Google Earth, written in pure Rust (egui + CPU ray-casting globe rendering, with optional, experimental GPU acceleration). Runs on Windows, macOS and Linux.

### Build and run

Requires Rust 1.95+ (https://rustup.rs):

    cargo run --release

Linux (if something is missing):  `sudo apt install libxkbcommon-dev libwayland-dev libx11-dev` / `sudo apt install build-essential pkg-config libatk1.0-dev libgtk-3-dev`

An internet connection is required to download map tiles.

The release workflow provides Linux archives, AppImage, DEB, RPM, Flatpak and Snap;
Windows portable builds and MSI installers for x64 and ARM64; and a FreeBSD
x86-64 archive. macOS downloads remain Apple Silicon DMGs. See the
[release guide](https://github.com/therichronicles/EarthCraft/blob/HEAD/docs/RELEASING.md) for runtime requirements and installation.

**macOS downloads (Apple Silicon):** Open the DMG and drag EarthCraft to Applications. The app
is not notarized, so Gatekeeper…
