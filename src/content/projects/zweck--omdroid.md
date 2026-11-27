---
repo: "zweck/omdroid"
name: "omdroid"
description: "Run Omarchy in an app on Android"
readmeQualityOk: true
url: "https://github.com/zweck/omdroid"
language: "QML"
languages: ["QML", "Kotlin"]
languagePcts: [32, 32]
stars: 143
forks: 5
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-04-17T07:28:28Z"
lastCommitAt: "2026-11-27T16:27:47Z"
lastReleaseAt: "2026-05-11T06:39:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 33
maintainers: ["zweck"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ae3117b9b94e9f562552e3a24201ded60e358a832e91b091e563061b5b52905/zweck/omdroid"
---

# Omdroid

**Omarchy on unrooted Android, in a single APK.**

> **Warning**
>
> **Highly experimental.** Omdroid has been measured on one tablet and used by hand on one phone.
> The latest build is the
> [`v0.0.19-alpha`](https://github.com/zweck/omdroid/releases/tag/v0.0.19-alpha) pre-release: the
> running desktop uses about 12 % of a core at idle instead of about 155 %, the first start
> extracts the guest in 104 s instead of 284 s, the APK is 1.1 GB instead of 1.7 GB, and a new
> Graphics setting chooses Auto, Adreno GPU (KGSL) or Software. It has been installed
> on the tablet as an update over the earlier builds and cold-started, never as a clean install. Most measurements come
> from injected input; docking was also tried by hand with a real USB-C dock, monitor, keyboard
> and trackpad. Expect breakage. The guest lives in the app's private storage, so
> uninstalling the app or clearing its data deletes everything inside it.
