---
repo: "k-mktr/debian-things-to-do"
name: "debian-things-to-do"
description: "Initial System Setup Shell Script Builder for Debian Workstation"
readmeQualityOk: true
url: "https://github.com/k-mktr/debian-things-to-do"
homepage: "https://nattdd.streamlit.app"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-03-06T14:08:32Z"
lastCommitAt: "2026-11-03T10:52:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 45
maintainers: ["k-mktr"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e00a4daf69ba8f6d0811ce694b366b07b3ff73b39df50e6cba87347e4f9f073/k-mktr/debian-things-to-do"
---

# Debian: Not Another 'Things To Do'!

**Initial System Setup Shell Script Builder for Debian**

> This is a Debian adaptation of the [Fedora Things To Do](https://github.com/k-mktr/fedora-things-to-do) project. The app, test suite and CI pipeline mirror the Fedora edition; package management is fully apt-native and the catalog is verified against **Debian 13 (trixie)**.

## Latest Changes

*(As of 2026-09-29)*

- **Debian 13 (trixie) compatibility pass, verified in a Debian 13 container:**
  - Multimedia Repositories option rewritten: `software-properties-common`/`add-apt-repository` were **removed from trixie** — replaced with a deb822-safe `sed` that enables `contrib`, `non-free` and `non-free-firmware` in the sources
  - Steam dependencies: `libgl1-mesa-glx:i386` (removed in trixie) → `libgl1:i386`
  - PPSSPP: APT variant dropped (package not in trixie), Flatpak kept
  - Multimedia codecs: `ubuntu-restricted-extras` (Ubuntu-only package) → `libavcodec-extra`
  - `configure_apt` no longer depends on `software-properties-common`
- Builder fix: selecting any codec option now automatically enables the multimedia repositories (previously a phantom option key made that a no-op)
-…
