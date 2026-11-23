---
repo: "bunkmr/mac-mouse-without-borders"
name: "mac-mouse-without-borders"
description: "Mac client for Mouse Without Borders (无界鼠标): connects a Mac to PowerToys' Mouse Without Borders so one keyboard and mouse can control multiple computers. Supports macOS 13+, universal for Intel and Apple Silicon."
originalDescription: "mac端无界鼠标 (Mouse Without Borders) —— 让 Mac 接入 PowerToys 的 Mouse Without Borders，一套键鼠控制多台电脑。支持 macOS 13+，Intel 与 Apple Silicon 通用。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/bunkmr/mac-mouse-without-borders"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["input-sharing", "keyboard-sharing", "kvm", "macos", "mouse-without-borders", "powertoys", "swift", "universal-binary"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-09-14T08:38:38Z"
lastCommitAt: "2026-11-23T10:31:05Z"
lastReleaseAt: "2026-10-08T13:40:42Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 52
undervaluedScore: 31
maintainers: ["bunkmr"]
openGraphImageUrl: "https://opengraph.githubassets.com/52d2b2f162a016792f44e9e7c0aa69a8813f9f122ffe3a0d1c01ac2851a9b9e8/bunkmr/mac-mouse-without-borders"
---

# MWB Mac Client

A macOS client written in **Swift** that connects to the Windows-side **Mouse Without Borders** (built into PowerToys).
It lets your Mac act as a bidirectional node in the MWB mesh: **keyboard and mouse control between Windows and Mac, clipboard text sync, and drag-and-drop file transfer in both directions**.

> Why Swift instead of C#: the MWB protocol is essentially "a stream of bytes over a socket" and is language-independent.
> Injecting and capturing input on the Mac side requires calling CoreGraphics, which is cleanest to do directly from Swift with no C# P/Invoke bridge, and it can also directly produce a native `.app`.

> **File transfer does not use any custom protocol.** It goes through MWB's own native clipboard/file channel
> (the main channel port minus 1), so the Windows side does not need any extra program or script installed.

---
