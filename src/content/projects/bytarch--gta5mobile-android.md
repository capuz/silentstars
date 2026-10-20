---
repo: "bytarch/gta5mobile-android"
name: "gta5mobile-android"
description: "GTA-5-Android Launcher Source-Code BytArch Port"
readmeQualityOk: true
url: "https://github.com/bytarch/gta5mobile-android"
language: "Rust"
languages: ["Rust"]
languagePcts: [72]
topics: ["gta-v-launcher", "gta-v-port"]
stars: 11
forks: 2
openIssues: 4
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 6
createdAt: "2026-10-10T17:50:12Z"
lastCommitAt: "2026-10-20T08:49:03Z"
lastReleaseAt: "2026-10-20T05:33:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 41
maintainers: ["bytarch"]
openGraphImageUrl: "https://opengraph.githubassets.com/95dd6894abf41267a169f70f20db06cd93d0d26953c969e1cf757bafb4e79264/bytarch/gta5mobile-android"
---

# BytArch GTA-V

A native port of the GTA V web build. The game ships as WebAssembly; this throws
the browser layer away and runs the same `game.wasm` as an ordinary native app —
[wasmtime](https://wasmtime.dev) for the code, [wgpu](https://wgpu.rs) on Vulkan
for Android and Metal on Apple platforms.

Unofficial. No game content is included: you bring your own copy of the web
port's data.

- **Android (working target)** — ARM64, Android 10+, Vulkan. See below.
- **iOS / macOS** — Metal, JIT on macOS, AOT on iOS. Build scripts at the bottom.

## Android

**Download:** [BytArch GTA-V for Android 0.1.1](https://github.com/bytarch/gta5mobile-android/releases/tag/android-0.1.1)
— `BytArch-GTA-V-android-0.1.1-debug.apk`, arm64-v8a, Android 10+, debug signed
(sideloading only). Sideload it, or `adb install -r` over an older copy.

Push to `main` and GitHub Actions builds an APK; the `Muguet-Android-arm64-debug`
artifact appears on the completed run. Locally: `sh make-android.sh` or
`.\make-android.ps1`, output at
`android/app/build/outputs/apk/debug/app-debug.apk`.

### Game data

The launcher never downloads game files. Point it at data you already have, in
either form — the layout is…
