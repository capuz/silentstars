---
repo: "mmlTools/audio-stems-recorder"
name: "audio-stems-recorder"
description: "This plugin automatically captures each selected OBS audio source separately whenever you start or stop Recording or Streaming. Instead of one mixed track, you get clean, perfectly synced audio stems for professional editing."
readmeQualityOk: true
url: "https://github.com/mmlTools/audio-stems-recorder"
language: "C++"
languages: ["C++", "CMake"]
languagePcts: [51, 47]
stars: 7
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-19T16:58:42Z"
lastCommitAt: "2026-11-20T12:25:14Z"
lastReleaseAt: "2026-04-21T04:40:31Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 25
maintainers: ["mmlTools"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c8e7eaf01c0911cc32693d877c7f52828a2064bfa2a0b43ea260059f3439bb1/mmlTools/audio-stems-recorder"
fundingLinks: ["KO_FI:https://ko-fi.com/mmltech"]
---

# Audio Stems Recorder for OBS Studio

**Record every sound in your stream as its own professional audio layer.**

Audio Stems Recorder is an OBS Studio plugin that captures each selected audio source (and, optionally, each OBS mixer track) into its own sample-aligned file whenever you **record**, **stream**, or start a **manual capture**. Instead of one flat mix you get clean stems that drop straight into any DAW or video editor.

> **Requires OBS Studio 33 or newer** (Windows x64, macOS, Linux). Version 1.x of this plugin targets OBS 31/32.

---

## Installation

### Windows

**Installer (recommended):** run `audio-stems-recorder-<version>-windows-x64-installer.exe`. It installs into the OBS 33+ plugin folder and removes files left by 1.x versions.

**Manual (ZIP):**

1. Close OBS Studio.
2. Copy the `audio-stems-recorder` folder from the ZIP into `C:\ProgramData\obs-studio\plugins\`, so that this file exists:
   ```
   C:\ProgramData\obs-studio\plugins\audio-stems-recorder\audio-stems-recorder.dll
   C:\ProgramData\obs-studio\plugins\audio-stems-recorder\data\...
   ```
3. Start OBS and open **Tools → Audio Stems Recorder...**
