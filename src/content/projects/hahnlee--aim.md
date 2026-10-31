---
repo: "hahnlee/aim"
name: "aim"
description: "aim - android in mac; android runtime for macOS"
readmeQualityOk: true
url: "https://github.com/hahnlee/aim"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 20
forks: 0
openIssues: 500
closedIssues: 1096
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-16T09:23:00Z"
lastCommitAt: "2026-10-31T09:52:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 40
maintainers: ["hahnlee"]
openGraphImageUrl: "https://opengraph.githubassets.com/78aad0d84b594779c95334683c44c94dfaf017a0a42c976491d0eb6d62223532/hahnlee/aim"
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
- the Android SDK with NDK `28.2.13676358`, `build-tools/36.0.0` (for `aidl`)
  and `platforms/android-36` (for aim-build's tests)
- Homebrew `openjdk@17`, `python3`
- the pinned original image archive in `_prebuilt` (`image/original.lock`,
  [docs/gsi-base.md](https://github.com/hahnlee/aim/blob/HEAD/docs/gsi-base.md))
-…
