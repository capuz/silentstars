---
repo: "audioslayer/ampup"
name: "ampup"
description: "USB volume mixer replacement app for the Turn Up hardware. Per-app audio control, RGB lighting, macro buttons."
readmeQualityOk: true
url: "https://github.com/audioslayer/ampup"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["audio-mixer", "csharp", "dotnet", "rgb", "usb", "volume-control", "windows", "wpf"]
stars: 27
forks: 4
openIssues: 0
closedIssues: 28
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-03-08T07:12:24Z"
lastCommitAt: "2026-11-13T05:42:28Z"
lastReleaseAt: "2026-03-14T20:29:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 49
maintainers: ["audioslayer"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1175794976/df663863-cc78-49d7-9ba7-33e26f5a6302"
---

Modern Windows control software for the original Turn Up USB volume mixer,<br />
  with native support for the TreasLin / VSDinside N3 stream controller.

Amp Up replaces the original Turn Up desktop software with a fast, modern WPF application. It maps physical controls to Windows audio, apps, profiles, lighting, macros, devices, and automations while keeping the original mixer responsive and useful as a daily driver.

The original **Turn Up mixer is the primary supported device**. Amp Up can also operate a TreasLin / VSDinside N3 natively, either by itself or alongside the Turn Up.

## Install

1. Open the [latest Amp Up release](https://github.com/audioslayer/ampup/releases/latest).
2. Download the `AmpUp-Setup-{version}.exe` installer.
3. Run the installer and launch Amp Up.
4. Connect the Turn Up mixer, N3 stream controller, or both.

The Windows installer is self-contained, so users do not need to install the .NET runtime separately.

> [!IMPORTANT]
> Close the official Turn Up application before starting Amp Up. Only one application can own the Turn Up serial port at a time.

### In-app updates

After the first install, future releases can be installed without visiting…
