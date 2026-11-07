---
repo: "SumirSeth/wisp"
name: "wisp"
description: "A dock and a launcher for Windows. Replaces the taskbar. Alt+Space grows the dock into a launcher. Rust and Win32, one ~1.5 MB exe."
readmeQualityOk: true
url: "https://github.com/SumirSeth/wisp"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["direct2d", "launcher", "powertoys", "productivity", "rust", "win32", "windows", "app-launcher", "dock", "powertoys-alternative"]
stars: 81
forks: 1
openIssues: 9
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 9
createdAt: "2026-10-27T17:24:57Z"
lastCommitAt: "2026-11-07T16:11:36Z"
lastReleaseAt: "2026-11-02T09:31:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 29
maintainers: ["SumirSeth", "JulienMaille"]
openGraphImageUrl: "https://opengraph.githubassets.com/161624dd2c5cd8a43c31170c2bb8256b15fb3aa37a2dba55e5150dcb9eb38b3a/SumirSeth/wisp"
---

Replaces the taskbar. One ~1.5 MB executable.

Wisp hides the taskbar. A dock takes its place.

Touch the bottom edge of the screen. The dock slides up. To keep it on screen, turn on **Keep the dock visible** in Settings.

Press <kbd>Alt</kbd>+<kbd>Space</kbd>. The dock grows into the launcher. Type, then press <kbd>Enter</kbd>.

Wisp is written in Rust with Win32 and Direct2D. It needs no .NET, web view or PowerToys.

## Dock

- Shows your running apps. Click one to switch to it.
- Holds your tray icons. Icons you pin in Windows sit in the dock. The rest are behind **⌄**.
- Shows volume, battery and the clock. Scroll over the volume to change it. Click it to mute.
- Scroll anywhere else on the dock to switch virtual desktops. A small pill shows which one you are on.
- Hides when you move away. Stays hidden over full-screen apps.
- Needs the real taskbar? Right-click **⌄** and choose **Show taskbar**.

If Wisp quits or crashes, the taskbar comes back. No tray icon is lost.

## Launcher

| Type | Get |
| --- | --- |
| `code` | Apps, then files. `vsc` finds Visual Studio Code. |
| `?invoice` | Files only |
| `^vis` · `term$` · `'note` · `!edge` | Starts with · ends with · exact ·…
