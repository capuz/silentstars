---
repo: "mkeeda/arranger"
name: "arranger"
description: "Type-safe Rich Text Editor Engine for Compose Multiplatform"
readmeQualityOk: true
url: "https://github.com/mkeeda/arranger"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "jetpack-compose", "rich-text-editor", "compose-multiplatform", "kotlin-multiplatform"]
stars: 9
forks: 0
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-04-06T09:05:45Z"
lastCommitAt: "2026-07-31T06:29:48Z"
lastReleaseAt: "2026-06-18T09:56:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 53
maintainers: ["mkeeda"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f9bb65c85f6f21d5566144f29fe1816197bbb45c0adffc4495acd252a4453ff/mkeeda/arranger"
---

# Arranger - Type-safe Rich Text Editor Engine for Compose Multiplatform

Arranger is a declarative, type-safe rich text editor engine and UI components for Compose Multiplatform.
While standard `buildAnnotatedString` is perfect for static text decoration, it quickly breaks down when building real-time editors where users insert and delete text. Arranger is built specifically for **dynamic text operations**, automatically managing and shifting attribute spans (like bold, colors, or links) as the underlying text mutates.

</div>

> [!WARNING]
> **Work In Progress**: This library is currently under active development. APIs are unstable and subject to change without notice. We highly welcome your feedback, feature requests, and bug reports via GitHub Issues!

## Supported Platforms

| Platform | Support Status | Target |
| :--- | :---: | :--- |
| **Android** | ✅ Supported | API Level 26+ |
| **Desktop (JVM)** | ✅ Supported | macOS, Windows, Linux |
| **iOS** | ✅ Supported | - |
| **Web** | ✅ Supported | WasmJs |

## Requirements
* **Kotlin 2.3.20+**

## Core Features

* 🛡️ **Type-Safe Custom Attributes:** Define and apply UI-specific styles (like `SpanStyle`) and domain-specific…
