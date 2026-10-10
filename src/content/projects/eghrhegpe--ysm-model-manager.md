---
repo: "eghrhegpe/ysm-model-manager"
name: "ysm-model-manager"
description: "🎮 Minecraft YSM Model Manager - supports hard link, symbolic link, and copy modes for managing ysm, mmd, vrm, resource packs, shader packs, and blueprints"
originalDescription: "🎮 Minecraft YSM 模型管理器 - 硬链接/符号链接/复制三种模式管理ysm、mmd、vrm、资源包、光影包、蓝图"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/eghrhegpe/ysm-model-manager"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [75, 23]
stars: 43
forks: 3
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-03T09:00:45Z"
lastCommitAt: "2026-10-10T10:03:59Z"
lastReleaseAt: "2026-06-07T17:05:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 34
maintainers: ["eghrhegpe"]
openGraphImageUrl: "https://opengraph.githubassets.com/a75423f88af4b6307e034549c25db8a1e23ba91934934c17f19b7d475e9b7d28/eghrhegpe/ysm-model-manager"
---

# 🧱 YSM Model Manager

> Manage your Minecraft YSM models like the Steam Workshop.
> [https://eghrhegpe.github.io/ysm-model-manager/](https://eghrhegpe.github.io/ysm-model-manager/)

**Tech stack**: Go (Wails v3) + native HTML/CSS/TS (Web Components + Shadow DOM) + Three.js + YSMParser WASM

**✅ Windows (amd64) · ✅ Linux (amd64) · ⚠️ macOS (experimental)** Full support for import, preview, categorization, and sync.

**✅ Android "3D Previewer"** After authorizing a public repository path, `os.*` reads model files directly.

**✅ Web "3D Previewer"** Routed through the backend adapter to the IndexedDB model library (`resolveBackend` dual implementation).

---

## ⚡ Quick Start

1. **Download**: from [GitHub Releases](https://github.com/eghrhegpe/ysm-model-manager/releases), get `YSM-Model-Manager_windows_amd64.exe`
2. **Extract**: extract to any directory (e.g., `D:\YSM-Model-Manager\`)
3. **First-time setup**: launch the program → set the game root directory (the `.minecraft` folder) → set the model repository path
4. **Get started**: put model files into the repository directory, or import them by drag and drop

> 📖 **For detailed instructions, see the [User…
