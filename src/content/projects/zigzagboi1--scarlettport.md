---
repo: "ZigZagBoi1/ScarlettPort"
name: "ScarlettPort"
description: "Native PC port layer for an Xbox Series X|S title: the game's x64 code runs on your CPU and its RDNA2 GPU code is recompiled for your graphics card. Bring your own files."
readmeQualityOk: true
url: "https://github.com/ZigZagBoi1/ScarlettPort"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["d3d12", "pc-port", "rdna2", "shader-recompiler", "xbox"]
stars: 327
forks: 16
openIssues: 3
closedIssues: 2
watchers: 3
contributors: 3
recentReleases: 3
createdAt: "2026-11-24T09:36:26Z"
lastCommitAt: "2026-11-25T13:23:27Z"
lastReleaseAt: "2026-11-25T12:51:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 25
maintainers: ["ZigZagBoi1", "vladbondarenko97", "grooving6"]
openGraphImageUrl: "https://opengraph.githubassets.com/595c1d766da83be68c1eff06851d3e238bcdbe46d6ea3fb8534e18da2375ca26/ZigZagBoi1/ScarlettPort"
---

# ScarlettPort

**A bring-your-own-copy compatibility layer for Xbox Series X|S titles on Windows.**
No emulator, no streaming. The title's own x64 code runs on your CPU, and its RDNA2 GPU code is recompiled for your graphics card on the fly. You supply a dump of your own legally purchased copy; nothing of any title is included here. Wine and Proton are the spirit of it.

### Where it stands

Developed and tested so far against one open-world title. It boots, gets through the menus, saves and legal screens, reaches the world and starts gameplay: about 4 fps in the prologue on an RTX 3060 (Series S profile), now GPU-bound. The tile-grid overlay is fixed; streaming freezes and the GPU cost remain, so it is **not yet verified playable**.

```
██████████░░░░░░░░░░  50%
```

`boots` ✅ → `intro & menus` ✅ → `world loads` ✅ → `lit world` ✅ → `gameplay starts` ✅ (~4 fps) → `shadowed areas` 🔨 → `playable speed` ⏳

---

## 📸 Screenshots

All captured on an RTX 3060 under Windows 10.
