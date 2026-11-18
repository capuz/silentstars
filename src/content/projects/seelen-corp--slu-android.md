---
repo: "seelen-corp/slu-android"
name: "slu-android"
description: "Seelen UI Launcher: Home Screen"
readmeQualityOk: true
url: "https://github.com/seelen-corp/slu-android"
language: "Rust"
languages: ["Rust", "Slint"]
languagePcts: [50, 37]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-09-06T10:39:43Z"
lastCommitAt: "2026-11-18T12:06:41Z"
lastReleaseAt: "2026-11-10T07:07:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 49
maintainers: ["eythaann"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1359043129/7a54cf2b-6800-40a1-903b-16f32b168fad"
---

# Seelen UI Launcher for Android

Android launcher written 100% in Rust (`android-activity` + `ndk` +
`ndk-context`, no Kotlin/Java). The crate lives at the repo root; `android/` is
a standard Gradle project that cross-compiles it with `cargo-ndk` and packages
it into an APK.

```
slu-android/
├── Cargo.toml, src/lib.rs   # the Rust crate
└── android/                 # the Gradle project
    ├── app/                 # Android application module
    ├── gradlew, gradlew.bat # Gradle wrapper (no local Gradle install needed)
    └── release.keystore     # dev signing key (gitignored)
```

## Requirements

- Rust targets: `aarch64-linux-android`, `x86_64-linux-android`
  (`rustup target add aarch64-linux-android x86_64-linux-android`)
- `cargo-ndk` (`cargo install cargo-ndk`)
- Android SDK + NDK, with `ANDROID_HOME` and `ANDROID_NDK_HOME` set
- JDK 21 (JDK 25/the Android Studio JBR does **not** work — AGP's `d8`/R8
  doesn't support its class file version)

```powershell
$env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-21.0.12.101-hotspot"
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:ANDROID_NDK_HOME = "$env:ANDROID_HOME\ndk\26.3.11579264"
```
