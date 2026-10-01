---
repo: "hahnlee/aim"
name: "aim"
description: "aim - android in mac; android runtime for macOS"
readmeQualityOk: true
url: "https://github.com/hahnlee/aim"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 20
forks: 0
openIssues: 200
closedIssues: 263
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-16T09:23:00Z"
lastCommitAt: "2026-10-01T10:24:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 91
undervaluedScore: 38
maintainers: ["hahnlee"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff56348badabc5bab938833300286bfbed17e86cf656189c0553a3ba5d750c58/hahnlee/aim"
---

# AIM — Android on macOS

AIM runs the original Android 16 arm64 userspace on Apple Silicon as ordinary
macOS processes, the way Wine runs Windows programs: no VM, no hypervisor.
The pinned image's own `linker64`, bionic, framework, SurfaceFlinger and apps
run unmodified on an in-process Linux syscall layer; HALs reach macOS
(CoreAudio, Metal through ANGLE, AppKit, IOKit) over a narrow host-call ABI.

The architecture and its decisions are in
[ADR 0012](https://github.com/hahnlee/aim/blob/HEAD/docs/adr/0012-original-android-userspace.md); a short map of the
tree is in [ARCHITECTURE.md](https://github.com/hahnlee/aim/blob/HEAD/ARCHITECTURE.md). How far the image boots is
recorded in [docs/boot-status.md](https://github.com/hahnlee/aim/blob/HEAD/docs/boot-status.md).

## Requirements

- macOS on Apple Silicon, Rust (with `rustup target add aarch64-linux-android`)
- the Android SDK with NDK `28.2.13676358` and `build-tools/36.0.0` (for `aidl`)
- Homebrew `openjdk@17`, `python3`
- the pinned original image archive in `_prebuilt` (`image/original.lock`,
  [docs/gsi-base.md](https://github.com/hahnlee/aim/blob/HEAD/docs/gsi-base.md))
- for ANGLE (Metal), its checkout in…
