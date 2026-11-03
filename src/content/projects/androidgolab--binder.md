---
repo: "AndroidGoLab/binder"
name: "binder"
description: "Go bindings (+ CLI) for ~14K methods across 1500+ Android interfaces via Binder IPC — pure Go, no Java, no cgo"
readmeQualityOk: true
url: "https://github.com/AndroidGoLab/binder"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["aidl", "android", "android-api", "binder", "go", "golang", "ipc", "pure-go", "bindings", "ble"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-03-14T13:57:22Z"
lastCommitAt: "2026-11-03T11:02:34Z"
lastReleaseAt: "2026-10-31T19:41:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 63
maintainers: ["xaionaro", "1514599514", "xaionaro-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/46faca267baafd97dd56444afa3bbb43f1de644eba027082035fc20c26a80eae/AndroidGoLab/binder"
---

# binder

Call Android system services from pure Go. Provides ~14,000 type-safe Go methods across 1,500+ Android interfaces — ActivityManager, PowerManager, SurfaceFlinger, PackageManager, audio, camera and sensor HALs, and more — by speaking the Binder IPC wire protocol directly via `/dev/binder` ioctl syscalls. No Java, no NDK, no cgo required.

Includes a complete AIDL compiler that parses Android Interface Definition Language files and generates the Go proxies, a version-aware runtime that adapts transaction codes across Android API levels, and a CLI tool (`bindercli`) for interactive service discovery and invocation.

## What can it do?

- **Query system services** — battery level, GPS location, thermal status, running processes, installed packages
- **Control hardware** — connect to WiFi, toggle flashlight, manage Bluetooth, configure audio
- **Interact with any binder service** — ActivityManager, PowerManager, SurfaceFlinger, camera/sensor HALs, and more
- **No Java, no cgo** — pure Go, cross-compiles to a static binary, runs on Android or any Linux with `/dev/binder`
- **CLI tool included** — `bindercli` for interactive service discovery, method invocation, and debugging…
