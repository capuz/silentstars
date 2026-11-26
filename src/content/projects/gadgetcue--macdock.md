---
repo: "gadgetcue/MacDock"
name: "MacDock"
description: "A macOS-style desktop shell for Windows 11 (dock, menu bar, Mission Control, Launchpad, Spotlight) in C#/WinForms. Builds with the compiler that ships with Windows."
readmeQualityOk: true
url: "https://github.com/gadgetcue/MacDock"
language: "C#"
languages: ["C#", "Rust"]
languagePcts: [69, 30]
stars: 151
forks: 14
openIssues: 9
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-06T16:04:43Z"
lastCommitAt: "2026-11-26T13:01:04Z"
lastReleaseAt: "2026-11-11T11:29:41Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 24
maintainers: ["gadgetcue"]
openGraphImageUrl: "https://opengraph.githubassets.com/75d9c6626bdd125486dda6be188db0fb9344690ba86e6c263280b95161645468/gadgetcue/MacDock"
---

# MacDock

A macOS-style desktop shell for Windows 11, written in C# (WinForms). It builds with the compiler that ships with Windows, so no SDK is needed.

By [@gadgetcue](https://github.com/gadgetcue) · [YouTube](https://www.youtube.com/@gadgetcue) · [Instagram](https://www.instagram.com/gadgetcue) · Telegram

See the [changelog](https://github.com/gadgetcue/MacDock/blob/HEAD/CHANGELOG.md) for what's new in v3.0.

## Installation guide
**Requirements:** Windows 11 (Windows 10 mostly works), x64, .NET Framework 4.x (already part of Windows). No admin rights and no SDK needed.

**Only one MacDock install is supported.** Installing again, or installing a newer version, replaces the existing one in `%LOCALAPPDATA%\MacDock`. Do not keep several copies or versions side by side. Install from File Explorer by double-clicking the installer; do not launch it from a sandboxed or packaged app's shell (such as a terminal inside another app), because per-user paths are redirected there and the install or restart can fail with a "path does not exist" popup.
