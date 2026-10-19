---
repo: "M0Rf30/yap"
name: "yap"
description: "Package software with ease 📦 Versatile deb, rpm and apk packager fueled by PKGBUILD specfiles and golang"
readmeQualityOk: true
url: "https://github.com/M0Rf30/yap"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["packages", "artifacts", "alpine-packages", "debian-packages", "universal-packager", "arch-linux-packages", "yet-another-packager", "rhel-packages", "abuild", "apk"]
stars: 21
forks: 2
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2022-12-31T00:34:43Z"
lastCommitAt: "2026-10-19T09:14:36Z"
lastReleaseAt: "2024-05-13T21:50:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 64
maintainers: ["M0Rf30", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd9c6e5ea6e358ba6068f94c8ef08bb65c3b144c484d7f649d5036c4fa7cc322/M0Rf30/yap"
---

# YAP — Yet Another Packager

YAP builds native packages for multiple GNU/Linux distributions from a single PKGBUILD specification. Write your package once; get `.deb`, `.rpm`, `.apk`, and `.pkg.tar.zst` out. All builds run in isolated OCI containers (Docker or Podman).

## Features

- **Multi-format output**: DEB (Debian/Ubuntu), RPM (Fedora/RHEL/Rocky/openSUSE), APK (Alpine), TAR.ZST (Arch)
- **Container isolation**: reproducible builds, no host contamination, Docker and Podman supported
- **PKGBUILD-based**: familiar Arch Linux syntax extended with distribution and architecture overrides
- **Cross-compilation**: build for a different architecture than your host
- **Dependency-aware builds**: sequential by default; opt-in parallel topo-sort via `--parallel`
- **Package signing**: APK RSA + DEB/RPM/Pacman GPG (no `gpg` binary required)
- **SBOM generation**: CycloneDX 1.5 and SPDX 2.3 sidecars
- **Per-format compression**: `zstd`/`gzip`/`xz` for DEB and RPM
- **Changelog support**: `changelog` PKGBUILD field renders to native format per distro
- **Pacman scriptlets**: full 6-hook lifecycle (pre/post install/upgrade/remove)
- **Structured logging**: slog-based, tree rendering for…
