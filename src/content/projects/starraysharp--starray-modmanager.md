---
repo: "StArraySharp/StArray.ModManager"
name: "StArray.ModManager"
description: "A mod loader designed for Android Unity games compiled with il2cpp, supporting the creation of mods written in C#"
readmeQualityOk: true
url: "https://github.com/StArraySharp/StArray.ModManager"
language: "C++"
languages: ["C++", "Lua"]
languagePcts: [48, 28]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-06-19T20:41:05Z"
lastCommitAt: "2026-08-07T05:14:50Z"
lastReleaseAt: "2026-07-29T12:07:11Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 89
undervaluedScore: 52
maintainers: ["StArraySharp", "iidamie", "xphorror"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8eaedf8dcb48426808c10096e374e3896c4d713edaa13e4c6c6a4fb322d3ba1/StArraySharp/StArray.ModManager"
---

# StArray.ModManager

Android IL2CPP Unity mod manager with CoreCLR runtime embedding and ImGui overlay UI.

## How It Works

1. **Native injection** via `libmodmanager.so` loaded into Unity process
2. **Dobby hook** on `eglSwapBuffers` and Android input events
3. **CoreCLR embedded** at runtime, launching .NET managed code from JNI
4. **UnityResolve** reflection engine traverses IL2CPP/Mono managed types
5. **ImGui overlay** rendered via EGL + OpenGL ES with touch and keyboard IME

## Features

- **EGL SwapBuffers hook** with Dobby — renders ImGui overlay every frame
- **Touch & key input** via InputConsumer hooks + cimgui Android backend
- **IME support** (Chinese/Japanese) via custom KeyboardView + InputConnection bridge
- **Mod system** — scan/load/unload with dependency resolution + auto-enable on restart
- **Mod overlay API** — `OnBackgroundGUI` / `OnForegroundGUI` for direct game-screen drawing
- **Auto-update** — OTA version check + download + SHA-256 verification + restart
- **Config persistence** — STJ source-gen JSON, AOT-compatible
- **File logging** — dual-write to logcat + `manager.log`
- **GL debug panel** — caps toggles, blend/depth func selectors, GL state queries…
