---
repo: "ClypLabs/ClypDat"
name: "ClypDat"
description: "ClypDat is a recorder and video editor, made to easily edit and record, as personally, ads and accounts can go bye-bye."
readmeQualityOk: true
url: "https://github.com/ClypLabs/ClypDat"
homepage: "https://clypdat.xyz"
language: "C#"
languages: ["C#"]
languagePcts: [77]
topics: ["clipping", "gaming", "native", "recording", "windows"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-25T13:06:27Z"
lastCommitAt: "2026-10-12T11:15:46Z"
lastReleaseAt: "2026-09-08T05:26:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 60
maintainers: ["Stormanzanii"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1346145811/eadd19b3-900a-4bb1-8a6b-17a3bde7ce59"
---

# ClypDat

ClypDat records game or desktop footage on Windows. It keeps a rolling replay buffer, so pressing a hotkey saves what just happened. You can also record a full session, save clips automatically for supported game events, and edit clips in the local library.

Version 2.0 uses a native C++ recorder. The desktop UI is C#/.NET 10 with a maintained [Avalonia fork](https://github.com/ClypLabs/clypdat-avalonia).

## Install

Download from [clypdat.xyz](https://www.clypdat.xyz) or [GitHub Releases](https://github.com/ClypLabs/ClypDat/releases/latest). Choose **Setup.exe** for a normal installation. Portable builds run without installation; MSI and ZIP packages are also available.

The unversioned `ClypDat-Setup.exe` is the same installer as the versioned Setup file. Its permanent filename keeps existing updater and WinGet links working. FFmpeg source archives and signed release manifests are supporting files, not additional programs to install.

ClypDat checks for stable updates and verifies signed download metadata. First-run setup asks you to choose **Game Capture** or **Desktop Capture** before recording starts.

Install with WinGet:

```powershell
winget install --id…
