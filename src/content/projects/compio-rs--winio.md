---
repo: "compio-rs/winio"
name: "winio"
description: "A native GUI framework with single-threaded asynchronous runtime."
readmeQualityOk: true
url: "https://github.com/compio-rs/winio"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 141
forks: 13
openIssues: 1
closedIssues: 45
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2024-02-10T13:02:40Z"
lastCommitAt: "2026-10-23T09:32:13Z"
lastReleaseAt: "2026-06-03T17:01:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 97
undervaluedScore: 44
maintainers: ["Berrysoft", "mokurin000"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c6d3aa3f635592f142934a05d52292fbe12d619bc7ecbbfa126aa753d167686/compio-rs/winio"
---

# Winio

Winio is a single-threaded asynchronous GUI runtime.
The GUI part is powered by native backends, and it is compatible with [`compio`](https://github.com/compio-rs/compio).
All IO requests could be issued in the same thread as GUI, without blocking the user interface!

## Platform support

| Backend | Platform                                                           |
| ------- | ------------------------------------------------------------------ |
| Win32   | Windows 10 1703+ <br> Windows 10 1809+ (`windows-dark-mode`)       |
| WinUI   | Windows 10 1809+ <br> WinUI (3) 1.0+ <br> WinUI (3) 1.2+ (`media`) |
| Qt      | Qt 5.15+ <br> Qt 6.0+                                              |
| GTK     | GTK 4.16+ <br> WebkitGtk 6 2.42+ (`webview`)                       |
| AppKit  | macOS 11.0+                                                        |
| UIKit   | iOS 13.0+ <br> Mac Catalyst 13.1+                                  |
| Android | Android SDK 36+ <br> Android NDK 27+                               |

> [!NOTE]
> WinUI backend needs `Microsoft.WindowsAppRuntime.dll` on Windows 10.

> [!WARNING]
> On systems other than macOS, iOS, and Android, you have to select only…
