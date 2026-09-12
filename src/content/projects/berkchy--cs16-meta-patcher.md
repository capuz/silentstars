---
repo: "berkchy/cs16-meta-patcher"
name: "cs16-meta-patcher"
description: "CS16 Client apk is the open source of the patcher project"
readmeQualityOk: true
url: "https://github.com/berkchy/cs16-meta-patcher"
language: "C++"
languages: ["C++"]
languagePcts: [69]
stars: 5
forks: 1
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-31T08:03:50Z"
lastCommitAt: "2026-09-12T08:05:15Z"
lastReleaseAt: "2026-08-31T19:26:49Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 85
undervaluedScore: 63
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/eb1bbd27919e1b577d7921c55bdbc979717525eaeaf9248a36d4931763c1bfd6/berkchy/cs16-meta-patcher"
---

# CS16 Meta Patcher

Repacks the **CS16Client (Xash3D)** Android APK to bundle **AMX Mod X** (64-bit-cell build),
**Metamod-P** and a full addons layout, then re-signs it. No AMXX server-side install needed;
the patched APK is self-contained.

Only **arm64-v8a** (`aarch64`) is supported — this is the platform Xash3D uses on Android and the
only ABI the ported metamod/AMXX targets. arm32/x86 are out of scope by design.

## Why 64-bit cells

Official AMXX ships **32-bit cells** (`PAWN_CELL_SIZE=32`). On aarch64 a pointer is 8 bytes and
does not fit in a 4-byte cell: `amx_BrowseRelocate` stores relocated function pointers into code
cells, so `sizeof(cell)` must equal `sizeof(void*)`. Everything here therefore builds with
**64-bit cells**: core, every module, the compiler and all shipped plugins. 32-bit `.amxx` files
are rejected cleanly at load time.

## Repository layout

```
android/
  app/                  patcher APK (Jetpack Compose UI, pick+patch+sign flow)
  app/src/main/assets/  embedded bundle.zip (offline fallback, populated by CI)
  patcherlib/           pure-JVM patching core: bundle manifest, ZipRepacker,
                        apksig signing, CLI
  ci/…
