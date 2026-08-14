---
repo: "ExoCore-Kernel/Juice"
name: "Juice"
description: "Wine-based iOS application runtime with JuiceGUI and experimental x86-64 translation"
readmeQualityOk: true
url: "https://github.com/ExoCore-Kernel/Juice"
language: "C"
languages: ["C"]
languagePcts: [80]
stars: 40
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-08-11T07:08:45Z"
lastCommitAt: "2026-08-14T05:16:19Z"
lastReleaseAt: "2026-08-12T13:55:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 26
maintainers: ["ExoCore-Kernel"]
openGraphImageUrl: "https://opengraph.githubassets.com/3871ce96600e75efa978e099475e829cb6746bf5ecb5e054fd2af0f4c3d8e3fb/ExoCore-Kernel/Juice"
---

# Juice

Juice is an experimental Wine GUI runtime for ARM64 Windows applications on
iPhone and iPad. The bundled Wine runtime is named Grape. This repository is
the maintainable source snapshot recovered from the development iPad: it
contains the UIKit app, launch helpers, complete modified Wine 11.13 source,
the same Wine delta as an auditable patch, packaging assets, and build scripts.

Juice currently provides:

- a lightweight native ARM64 `JuiceGUI.exe` desktop inside one Wine desktop
  surface, with an application list, taskbar, custom BMP wallpaper, Files, and
  installer controls;
- a UIKit surface for Wine windows and BGRA frames;
- touch-to-Wine pointer input with selectable left and right buttons;
- direct ARM64 Windows EXE selection;
- automatic PE architecture detection and an isolated, explicitly
  experimental x86-64 path through ARM64EC Wine and FEX;
- safe portable ZIP import with adjacent DLLs and assets preserved;
- fullscreen display;
- UTF-16 text and Backspace, Tab, and Enter transport to a touched control;
- persistent Wine prefixes plus MSI and ordinary setup-EXE support;
- a versioned, non-framebuffer control channel from `wineios.drv` to UIKit for
  file…
