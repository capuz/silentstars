---
repo: "yappologistic/Maia"
name: "Maia"
description: "A fast, keyboard-first file manager for Linux"
readmeQualityOk: true
url: "https://github.com/yappologistic/Maia"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["egui", "file-manager", "linux", "rust", "wayland"]
stars: 160
forks: 10
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-10-15T03:57:42Z"
lastCommitAt: "2026-11-14T22:02:23Z"
lastReleaseAt: "2026-11-02T05:18:55Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 33
maintainers: ["yappologistic", "claude", "mamal72"]
openGraphImageUrl: "https://opengraph.githubassets.com/411ea698bcae2fc53f90b628e5b759d34f0b413658099ee2536ceeb14d4c6d28/yappologistic/Maia"
---

# Maia

A fast, keyboard-first file manager for Linux, written in Rust with egui. One binary
of under 8 MB, drawn on the GPU, with split panels, tabs, live filtering, previews and
background file operations.

## Install

You need a Wayland or X11 desktop with OpenGL and glibc 2.35 or newer (Ubuntu 22.04,
Debian 12, Fedora 36 and later). The
[latest release](https://github.com/yappologistic/Maia/releases/latest) has each of
these for x86_64 and ARM64:

| Package | For |
|---|---|
| `maia_VERSION_amd64.deb` | Debian, Ubuntu, Mint, Pop!_OS: `sudo apt install ./maia_*.deb` |
| `maia-VERSION-1.x86_64.rpm` | Fedora, RHEL, openSUSE: `sudo dnf install ./maia-*.rpm` |
| `maia-VERSION-1-x86_64.pkg.tar.zst` | Arch, Manjaro, EndeavourOS: `sudo pacman -U maia-*.pkg.tar.zst` |
| `Maia-VERSION-x86_64.AppImage` | any distribution: make it executable and run it |
| `maia-VERSION-linux-x86_64.tar.gz` | unpack and run `install.sh` (to `~/.local`, or `/usr/local` as root) |
| `maia-linux-x86_64` | the program alone: run it with `--install` |

To build it yourself you need Rust 1.88 or newer:

```bash
git clone https://github.com/yappologistic/Maia.git
cd Maia
cargo build --release…
