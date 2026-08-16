---
repo: "NucleusFramework/Nucleus"
name: "Nucleus"
description: "Native desktop platform for the JVM. Compose Multiplatform apps with real OS integration — native window decorations, notifications, taskbar and dock, code signing, installers, auto-update — packaged for macOS, Windows and Linux from a single Gradle DSL. Runs on the JVM or as a GraalVM native image."
readmeQualityOk: true
url: "https://github.com/NucleusFramework/Nucleus"
homepage: "http://nucleusframework.dev/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [67]
topics: ["compose", "compose-desktop", "compose-multiplatform", "desktop", "desktop-app", "framework", "jvm", "kotlin", "linux", "macos"]
stars: 331
forks: 22
openIssues: 19
closedIssues: 128
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2026-02-08T19:19:39Z"
lastCommitAt: "2026-08-16T04:08:37Z"
lastReleaseAt: "2026-02-18T13:41:07Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 28
maintainers: ["kdroidFilter", "ansheng7758", "KRTirtho"]
openGraphImageUrl: "https://opengraph.githubassets.com/24b0805e3b3a1aca93bc9f21557910ff185c158126599dee70874f638841889f/NucleusFramework/Nucleus"
fundingLinks: ["GITHUB:https://github.com/kdroidFilter", "KO_FI:https://ko-fi.com/lomityaesh"]
discussionCount: 4
---

</p>

The Nucleus framework lets you write cross-platform desktop applications using
Kotlin. It is based on [Compose Multiplatform](https://www.jetbrains.com/compose-multiplatform/)
and adds native window decorations, deep operating-system integration, code signing,
and native installers — all configured through a single Gradle DSL. Your app runs
either as a [GraalVM Native Image](https://www.graalvm.org/) or on the JVM.

It targets the gap between "a Compose Desktop window" and "an application the operating
system treats as its own" — the work that is normally spread across a dozen half-maintained
libraries and a hand-written packaging pipeline. Every OS integration is a real platform
API behind a Kotlin one: no AWT dependency on the Tao backend, and the accessibility layer
is verified against AT-SPI, UI Automation, and macOS AX in CI on all three platforms.

Read [Why Nucleus](https://nucleusframework.dev/en/docs/why-nucleus) for how it compares to
Electron and Tauri.

## Project status

Nucleus is under active development and moves fast. All published runtime modules run in
Kotlin `explicitApi()` mode with their public surface locked by a binary-compatibility dump
(`api/*.api`,…
