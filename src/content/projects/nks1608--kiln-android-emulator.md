---
repo: "NKS1608/kiln-android-emulator"
name: "kiln-android-emulator"
description: "Kiln: an Android emulator for Apple Silicon Macs. Hardware virtualization, GPU acceleration (GLES/Vulkan), per-game key mapping."
readmeQualityOk: true
url: "https://github.com/NKS1608/kiln-android-emulator"
homepage: "https://ko-fi.com/nks1608"
language: "C"
languages: ["C"]
languagePcts: [95]
topics: ["android-emulator", "apple-silicon", "gamming", "virualization"]
stars: 38
forks: 3
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-10-14T19:25:57Z"
lastCommitAt: "2026-10-26T18:06:04Z"
lastReleaseAt: "2026-10-26T18:08:26Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 69
undervaluedScore: 25
maintainers: ["NKS1608"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7bde425f9deba6870ecc051c9c0b4e5dfb4b2b7309a022ff8be381bf378f00d/NKS1608/kiln-android-emulator"
---

---

Kiln runs Android 16 in a window on your Mac. Each instance behaves like a separate phone, with its own apps, settings
and device identity, and you can run several at once. Graphics run on your Mac's GPU, and games can be played with the
keyboard, the mouse or a game controller.

## Features

### Android

- Android 16, built by the Kiln project and included in the app. A new instance starts in about half a minute and
  opens directly on the home screen.
- Apps and games get OpenGL ES 3.1 and Vulkan, drawn by your Mac's GPU.
- Install `.apk`, `.xapk`, `.apkm` and `.apks` files from the toolbar, or drop them on the window. Split APKs are
  combined for you.
- Android's Download, Documents, Movies, DCIM and Music folders are kept on your Mac, inside the instance: a photo
  taken in Android is in Finder at once (**Android Folders** in the toolbar), and a file you put there is in Android.
  Other files dropped on the window go to Download.
- Root with Magisk, for each instance that needs it (Device > **Root with Magisk** in the player). Kiln downloads
  Magisk from its author's page when you turn it on.
- Google apps are not included, but can be added with **Install Zip** (see…
