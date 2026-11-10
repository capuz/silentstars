---
repo: "weaselway/weaselway"
name: "weaselway"
description: "A full Linux desktop on Windows, running in WSL2 with GPU acceleration."
readmeQualityOk: true
url: "https://github.com/weaselway/weaselway"
language: "C"
languages: ["C"]
languagePcts: [79]
topics: ["gnome", "linux", "nix", "nix-flake", "plasma", "wsl2", "year-of-the-linux-desktop"]
stars: 46
forks: 6
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-28T15:50:15Z"
lastCommitAt: "2026-11-10T14:49:09Z"
lastReleaseAt: "2026-11-10T12:04:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 42
maintainers: ["oliverbestmann", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcd5b0ea33bd8fc620b61c9051152e78edcaa2dd25fdfb68d31a2114f5efae40/weaselway/weaselway"
---

# Weaselway

Weaselway runs a GPU-accelerated Linux desktop on WSL2 and shows it in a
window on Windows. The releases are NixOS-WSL images with GNOME or Plasma.
This README explains how to install, use and configure it.
[ARCHITECTURE.md](https://github.com/weaselway/weaselway/blob/HEAD/ARCHITECTURE.md) explains how it works.

https://github.com/user-attachments/assets/4867b0d8-d69e-49d9-93f8-eb8ae73222fd

The compositor runs unmodified. The `dxgdrm` kernel module gives it a virtual
display that it drives like a monitor through KMS (the kernel interface for
display output). Mesa's `d3d12` driver (which runs OpenGL and Vulkan on
Direct3D 12) renders on the GPU that Windows exposes to WSL. The `weaselwayd`
daemon reads each finished frame and passes it through shared memory to the
viewer, a Windows build of FreeRDP (an open-source Remote Desktop client).
Keyboard, mouse, touchpad and audio use the same connection.

Any Wayland compositor that can drive a display through KMS runs this way.
Besides GNOME and Plasma, sway, Weston, Hyprland and others start through a
session script you provide. See [Sessions](#sessions).

Each image contains the patched Mesa, the kernel module,…
