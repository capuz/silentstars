---
repo: "thereisnotime/tlauncher-launcher"
name: "tlauncher-launcher"
description: "Run TLauncher from a container (Docker/Podman)."
readmeQualityOk: true
url: "https://github.com/thereisnotime/tlauncher-launcher"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-07T11:19:54Z"
lastCommitAt: "2026-11-21T11:37:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 66
undervaluedScore: 43
maintainers: ["thereisnotime"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc7315ed1a662a04548f5c547e5d1932f1a4adf6f01ff990c1376139fda697c5/thereisnotime/tlauncher-launcher"
---

# Minecraft Launcher Launcher

**A launcher for TLauncher** - Run Minecraft safely in an isolated container with full GPU acceleration, audio support, and automatic system detection.

## What Is This?

This project lets you run **Minecraft via TLauncher** inside a container (like a lightweight virtual machine) that:

✅ **Isolates Minecraft** from your main system (safer, cleaner)
✅ **Auto-detects** your GPU, display server, and audio system
✅ **Works out-of-the-box** with NVIDIA/AMD GPUs
✅ **Provides both GUI and CLI** interfaces
✅ **Runs on Linux and Windows** (via WSL2)

---

## Three Ways to Run

### 🎮 Option 1: Easy Launcher (Recommended)

**Best for:** Everyone, especially non-technical users

A Python wrapper with graphical interface and automatic detection.

```bash
./minecraft.py          # Opens GUI window
./minecraft.py start    # Or use terminal

# Add to application menu:
./create-shortcut.sh
```

**Features:**

- Double-click to launch
- Auto-detects everything
- One-click start/stop buttons
- Save your preferences
- Real-time log display

👉 **See:** [Quick Start for Linux](#-linux-users) | [Quick Start for Windows](#-windows-users-wsl2)

---
