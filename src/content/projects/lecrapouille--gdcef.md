---
repo: "Lecrapouille/gdcef"
name: "gdcef"
description: "[Plugin][Version 0.19.3][Functional] Chromium Embedded Framework Webview for Godot 4"
readmeQualityOk: true
url: "https://github.com/Lecrapouille/gdcef"
homepage: "https://discord.gg/EckEwy7S5U"
language: "C++"
languages: ["C++"]
languagePcts: [78]
topics: ["cef", "chromium-embedded-framework", "gdnative", "gdnative-plugin", "godot", "godot-engine", "godot3", "godotengine", "godot3-4", "godot3-5"]
stars: 427
forks: 49
openIssues: 7
closedIssues: 70
watchers: 7
contributors: 12
recentReleases: 0
createdAt: "2022-05-30T16:48:42Z"
lastCommitAt: "2026-07-05T20:58:35Z"
lastReleaseAt: "2024-12-07T16:19:40Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 85
undervaluedScore: 30
maintainers: ["Lecrapouille", "rpaciorek", "ClintonSarkar"]
openGraphImageUrl: "https://opengraph.githubassets.com/c94e4512a8c4b44f33f7f52071bfb7a7efedff5813d05dd16efe201d8a46bac2/Lecrapouille/gdcef"
---

# 🌐 gdCEF - Chromium Embedded Framework for Godot 4

Integrate a fully functional **web browser** into your Godot 4.2+ games for Linux, Windows (and for macOS, we need contributors!). This GDExtension wraps the [Chromium Embedded Framework](https://bitbucket.org/chromiumembedded/cef/wiki/Home) (CEF) API, allowing you to display web content in 2D and 3D scenes using GDScript.

> ⚠️ **Godot 3 users:** Please use the [godot-3.x branch](https://github.com/Lecrapouille/gdcef/tree/godot-3.x) instead.

*🎥 Click the picture to watch the YouTube video "I made my own Browser" by FaceDev!*

---

## 📁 Repository Structure

```
📦gdCEF
 ┣ 📜 build.py              ⬅️ Python3 script for compiling the project
 ┣ 📦 cef_artifacts         ⬅️ Folder with CEF and gdCEF artifacts created by build.py
 ┣ 📂 demos                 ⬅️ Several examples of usage of gdCEF
 ┣ 📂 doc                   ⬅️ Several documents to teach you how to use gdCEF
 ┣ 📂 gdcef                 ⬅️ C++ code source of the gdextension (to be compiled)
 ┃ ┣ 📂 browser             ⬅️ Code for the CEF main process (libgdcef used by CEF)
 ┃ ┣ 📂 subprocess          ⬅️ Code for the CEF secondary process (gdCefRenderProcess used by…
