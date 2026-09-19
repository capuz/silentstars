---
repo: "compose-fluent/kotlin-winrt"
name: "kotlin-winrt"
description: "kotlin-winrt is a Kotlin/JVM and Kotlin/Mingw binding system that provides idiomatic, coroutine‑friendly access to Windows Runtime (WinRT) APIs, enabling Kotlin developers to build Windows desktop applications with seamless integration of native Windows features."
readmeQualityOk: true
url: "https://github.com/compose-fluent/kotlin-winrt"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 27
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-26T12:28:07Z"
lastCommitAt: "2026-09-19T02:45:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 41
maintainers: ["Sanlorng", "123Duo3"]
openGraphImageUrl: "https://opengraph.githubassets.com/054b5c97ecfd76d274200ed122f118f305d552fb2bca9cebf9d6fc2e51d6cebd/compose-fluent/kotlin-winrt"
---

<h1><img src="docs/Assets/icon.svg" alt="kotlin-winrt logo" height="48" valign="middle"> kotlin-winrt</h1>

`kotlin-winrt` is a Kotlin projection for WinRT and WinUI 3. It provides runtime interop, WinMD metadata loading, projection generation, Kotlin-authored WinRT type support, runtime asset staging, and WinUI application launch support for:

- Kotlin/JVM on Windows
- Kotlin/Native `mingwX64` on Windows

The implementation is reference-first: `.cswinrt/` is the local engineering baseline for runtime behavior, generated surface shape, authoring contracts, packaging evidence, and validation.

## Targets

Current supported validation targets are:

- JVM: uses JDK 25 and the `java.lang.foreign` FFM API for the Win32/COM bridge.
- `mingwX64`: supports runtime calls, generated projections, native executables, and native authored WinRT component exports for the implemented surface.

WinUI validation runs through both the generated JVM application host and the `mingwX64` executable path.

## Modules

- `winrt-runtime`: WinRT ABI, COM interop, activation, marshaling, object identity, WinUI bootstrap, and runtime helpers.
- `winrt-metadata`: WinMD loading and normalized metadata model…
