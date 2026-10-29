---
repo: "eolix/PhotoSplice"
name: "PhotoSplice"
description: " A desktop image editor faithfully replicating classic Adobe Photoshop with 1:1 native PSD/PSB compatibility. Live WebApp at https://photosplice.com/web"
readmeQualityOk: true
url: "https://github.com/eolix/PhotoSplice"
homepage: "https://photosplice.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 42
forks: 6
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 47
recentReleases: 4
createdAt: "2026-10-15T19:08:22Z"
lastCommitAt: "2026-10-29T10:36:59Z"
lastReleaseAt: "2026-10-26T08:36:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 44
maintainers: ["eolix"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa519a38799199b2951a07728da36e321fed4f8271a3fee1f7abefba6e25072f/eolix/PhotoSplice"
---

---

PhotoSplice is built upon PhotoCraft, as an open-source Rust image-editing engine (MIT OR Apache-2.0). 
Its main focus areas are **compatibility, simplicity and speed**. Featuring full PSD round-trip 
between Photoshop and PhotoSplice, classic Photoshop 'feel' (circa version CS6), and GPU optimisation for
all Operating Systems. PhotoSplice's cleaner and leaner interface, full PSD and PDF reader and writer, 
and comprehensive EXR/HDR tools and features on top.

## Downloads

Installers are on the **[Releases](https://github.com/eolix/photosplice/releases)** page.

| Platform | Packages | Architecture |
|:---|:---|:---|
| **macOS** 11+ | `.dmg` | Universal: Apple silicon and Intel |
| **Windows** 10+ | `.msi` installer, portable `.zip` | x64 |
| **Linux** | `.AppImage`, `.deb`, `.rpm`, Arch Linux `.pkg.tar.zst`, `.tar.gz` | x86_64 and arm64 |
| **Linux** | `.flatpak` | x86_64 |

On Linux, pick the package for your distribution (`<version>` and `<arch>` as in the file name):

```sh
sudo apt install ./photosplice-<version>-linux-<arch>.deb          # Debian, Ubuntu, Mint, Pop!_OS
sudo dnf install ./photosplice-<version>-linux-<arch>.rpm          # Fedora, RHEL (openSUSE: zypper…
