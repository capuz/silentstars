---
repo: "NeoNatural/xr-3d-viewer"
name: "xr-3d-viewer"
description: "Open-source Android/OpenXR viewer that converts local and SMB photos and videos from 2D to stereoscopic 3D in real time."
readmeQualityOk: true
url: "https://github.com/NeoNatural/xr-3d-viewer"
language: "C"
languages: ["C", "Java"]
languagePcts: [66, 32]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 124
recentReleases: 4
createdAt: "2026-09-19T17:22:53Z"
lastCommitAt: "2026-11-25T13:21:21Z"
lastReleaseAt: "2026-10-25T10:06:22Z"
status: "thriving"
tags: ["funded"]
healthScore: 77
undervaluedScore: 49
maintainers: ["Gilleece", "cgutman", "NeoNatural"]
openGraphImageUrl: "https://opengraph.githubassets.com/a29b6a555e4a932ac7cb14d937ad60d31454f416dfafaffff2955a4829625649/NeoNatural/xr-3d-viewer"
fundingLinks: ["GITHUB:https://github.com/Gilleece", "KO_FI:https://ko-fi.com/moonlightxr"]
---

# XR 3D Viewer

**English** | [简体中文](https://github.com/NeoNatural/xr-3d-viewer/blob/HEAD/README.zh-CN.md)

XR 3D Viewer turns ordinary photos and videos into stereoscopic 3D on a standalone Android/OpenXR headset. Open media from local storage, an SMB/NAS share or a supported website.

[Download the signed v0.8 APK](https://github.com/NeoNatural/xr-3d-viewer/releases/download/v0.8/xr-3d-viewer-v0.8.apk)

## New in v0.8

- **Watch web videos in 3D.** Open **Online videos**, choose Bilibili or YouTube, or select **Enter URL**. Put a supported video into fullscreen and select **Watch in 3D**. **Back to menu** returns directly to the library. **4K per eye** requests a higher render resolution when the headset supports it. Stream quality depends on the site.
- **Choose where to watch.** Use the home-screen gear → **General → 3D playback mode**. Local and SMB media, plus supported web videos, open in the selected mode on the next playback. Immersive 3D starts in passthrough on a fresh install. Windowed 3D plays inside a Quest system window and requires Meta VR OS SDK 207 or later. Local and SMB windowed videos offer 1920, 2560 or 3840 pixels on the long edge per eye.
