---
repo: "a092devs/Nexfusion-Patches"
name: "Nexfusion-Patches"
description: "Modular runtime bytecode patch bundles (.nxb) for the NexFusion root and LSPosed manager ecosystem."
readmeQualityOk: true
url: "https://github.com/a092devs/Nexfusion-Patches"
homepage: "https://github.com/a092devs/Nexfusion-Patches"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
topics: ["android", "gboard", "lsposed", "morphe-patches", "nexalloy", "pixelboard", "xposed", "hushfacebook", "hushgram", "youtube-patches"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-15T09:13:56Z"
lastCommitAt: "2026-11-02T15:15:39Z"
lastReleaseAt: "2026-10-18T20:38:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 69
maintainers: ["a092devs", "2eno", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/a436fdd11b27f7266b549e7c1f5bcedffb9ea374963794d48fb266a643e4f6f4/a092devs/Nexfusion-Patches"
---

---

## 📖 Overview

**Nexfusion-Patches** provides modular runtime bytecode patches packaged into `.nxb` bundles for the [NexFusion](https://github.com/a092devs/NexFusion) root + LSPosed manager ecosystem.

Unlike traditional patching tools that decompile, modify, re-sign, and reinstall target APKs, **NexFusion patches execute entirely in-memory at process startup**:

- 🔒 **Zero APK Tampering:** Target applications remain official, unaltered on disk, and preserve their authentic Play Store signatures and Play Protect integrity.
- ⚡ **Dynamic DexKit Interception:** Obfuscated classes, methods, and fields are resolved at process startup via bytecode pattern analysis and string fingerprinting.
- 🛡️ **Fail-Safe Isolation:** Hooks execute with comprehensive `runCatching` safeguards, ensuring target apps remain stable and functional even if non-critical symbols change across updates.
- 📦 **Containerized `.nxb` Bundles:** Patches are packaged into signed `.nxb` APK containers loaded directly into process memory without requiring APK installation.

> [!IMPORTANT]
> - **Runtime-Only Architecture:** Patches run purely in-memory via LSPosed (API 101). Target APK files are never modified,…
