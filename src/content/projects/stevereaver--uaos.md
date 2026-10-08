---
repo: "stevereaver/uaos"
name: "uaos"
description: "A bare-metal x86_64 hobby operating system inspired by the Amiga Workbench 3.x aesthetic, built from scratch using NASM, C11, GRUB2, and OVMF/UEFI."
readmeQualityOk: true
url: "https://github.com/stevereaver/uaos"
language: "C"
languages: ["C"]
languagePcts: [96]
stars: 13
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-23T04:17:17Z"
lastCommitAt: "2026-10-08T10:52:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["stevereaver"]
openGraphImageUrl: "https://opengraph.githubassets.com/cacb49989559125f3745bae241ab6acb18157883bad52f5ef274f759c57c2c77/stevereaver/uaos"
---

# Ultimate Amiga OS (UAOS)

A bare-metal x86_64 hobby operating system inspired by the Amiga Workbench 3.x aesthetic, built from scratch using NASM, C11, GRUB2, and OVMF/UEFI.

UAOS boots directly from a hybrid ISO via GRUB2 Multiboot2, initialises a linear framebuffer, and presents a graphical Workbench-style desktop with a window manager, an interactive shell, and a hybrid execution model: a native x86_64 kernel that can also run classic Amiga M68k binaries through Musashi CPU emulation with "thunking" into AmigaOS-compatible native libraries.

---

## Features

### Desktop & GUI

- **Workbench-style desktop** — solid Amiga grey backdrop, menu bar with live CPU% indicator, status bar, disk icons with multi-select, drag, and double-click launch (WBStartup messages for M68k tools)
- **Window manager** — multiple windows, click-to-focus, z-order, title-bar drag, resize grip, gadgets, requesters, and BOOPSI gadgets
- **Built-in applications** — file browser, `ed`/`vim` text editors, AmigaGuide help viewer (`guide`), calculator, clock, preferences editors (`prefs`, `pointer`), Exchange commodity manager, format wizard, and a screen blanker
- **Screenshot capture** — `screenshot`…
