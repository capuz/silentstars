---
repo: "TSGames/Libraw-Android"
name: "Libraw-Android"
description: "A simple port of Libraw with sample application for android"
readmeQualityOk: true
url: "https://github.com/TSGames/Libraw-Android"
language: "C++"
languages: ["C++", "C"]
languagePcts: [55, 33]
stars: 15
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2017-05-08T10:13:31Z"
lastCommitAt: "2026-10-26T09:16:51Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 32
maintainers: ["TSGames"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dee3cbcfe8853c8202caa2f28228f9f009ebd8fa6a4d8944cac16b985aab67f/TSGames/Libraw-Android"
---

# LibRaw as shipped in PhotoMate for Android

The LibRaw source that produces `liblibraw.so` in the PhotoMate Android app,
together with the JNI bridge that exposes it to Java.

LibRaw is dual licensed, GNU LGPL 2.1 or CDDL 1.0. Both licence texts are
included as upstream ships them, together with upstream's copyright notice.

## Contents

| Path | What it is |
|---|---|
| `jni/src/` | The LibRaw source tree as it is built, including the change described below |
| `jni/libraw/` | `libraw.c`, the JNI bridge (`Java_com_tssystems_Libraw_*`), `swab.c`/`swab.h` and `Android.mk` of the module |
| `jni/jpeglib/` | The static libjpeg the module links (`-DUSE_JPEG8`) |
| `jni/Android.mk`, `jni/Application.mk` | The ndk-build files |
| `java/com/tssystems/Libraw.java` | The Java side of the bridge |
| `app/`, `build.gradle`, `settings.gradle` | A small sample app that opens a RAW file with the library |
| `patches/` | Every difference from pristine upstream, one patch per file, plus `MANIFEST.json` |
| `LICENSE.LGPL` / `LICENSE.CDDL` / `COPYRIGHT` | Upstream's own |

## Upstream

- **LibRaw 0.22.2**
- https://github.com/LibRaw/LibRaw/archive/refs/tags/0.22.2.tar.gz
- Archive SHA-256:…
