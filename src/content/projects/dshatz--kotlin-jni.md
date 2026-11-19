---
repo: "dshatz/Kotlin-JNI"
name: "Kotlin-JNI"
description: "Painless JNI with Kotlin/Native using a KSP processor"
readmeQualityOk: true
url: "https://github.com/dshatz/Kotlin-JNI"
homepage: "https://dshatz.github.io/Kotlin-JNI"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [87]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-01T17:02:55Z"
lastCommitAt: "2026-11-19T11:58:52Z"
lastReleaseAt: "2026-08-09T23:16:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 47
maintainers: ["dshatz", "peacefulprogram"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f0cd11263e020059d4e6a805317edf2b754af4af80317f25ef88bccba59ed3a/dshatz/Kotlin-JNI"
---

# Kotlin-JNI

Kotlin-JNI is a powerful Kotlin Multiplatform library designed to simplify and unify JNI (Java Native Interface) development across Android, Desktop (Linux, macOS, Windows), and Kotlin/Native.  

It provides a common JNI interface for all supported native targets and includes a KSP module to automatically generate JNI-compatible function stubs, eliminating boilerplate and bridging the gap between your native Kotlin code and the Java world.

## Acknowledgement

I want to express great gratitude to the original creator @DatL4g for the idea and execution. This project indeed makes JNI on Kotlin painless and effortless.

However, since the original repository no longer has a permissive license, this repository had to be created, based on the older, Apache-licensed version.

## ✨ Features
### 1. Unified JNI API

Use expect/actual definitions to seamlessly integrate JVM and Native code.

Works across `androidNative`, `linux`, `macos`, and `mingwX64` targets.

### 2. Type conversion utilities

A rich set of extension functions to effortlessly convert between JNI types and standard Kotlin types (e.g., `jstring.toKString()`, `IntArray.toJIntArray()`).
