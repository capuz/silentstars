---
repo: "dbmdz/imageio-jnr"
name: "imageio-jnr"
description: "ImageIO reader/writer plugins wrapping native libraries: OpenJP2 and TurboJPEG"
readmeQualityOk: true
url: "https://github.com/dbmdz/imageio-jnr"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["openjpeg", "turbojpeg"]
stars: 36
forks: 12
openIssues: 7
closedIssues: 15
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2017-11-22T15:50:20Z"
lastCommitAt: "2026-09-23T08:46:53Z"
lastReleaseAt: "2019-03-26T16:55:45Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 31
maintainers: ["jbaiter", "morpheus-87"]
openGraphImageUrl: "https://opengraph.githubassets.com/eaf616f20f93ad6e15acebe4d97396e5ed21322fb7aac9b728262e52624b062a/dbmdz/imageio-jnr"
---

# imageio-jnr

> [!CAUTION]
> This library is no longer actively maintained. We strongly encourage you to switch to better alternatives, foremost [vips-ffm](https://github.com/lopcode/vips-ffm), which is more performant, stable and has a much nicer API.

This repository contains ImageIO plugins that wrap the most common native
libraries for various image formats with [JNR-FFI](https://github.com/jnr/jnr-ffi).
This has the advantage of being generally the fastest available option on the
JVM, with the drawback that you need to make sure that the corresponding native
libraries are installed on the target system. However, thanks to JNR-FFI, no
compiler is neccessary, the plugins will directly use the installed native
libraries and you can install them directly from Maven Central.

Please note that the plugins need at least Java 11 and Ubuntu 20.04.

## Currently available plugins

|       Module      |   Format  |      Backing native library         |             Required version               | JavaDoc
| ----------------- | --------- | ----------------------------------- | ------------------------------------------ | ---
| imageio-openjpeg  | JPEG2000  |…
