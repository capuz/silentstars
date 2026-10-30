---
repo: "weaselway/weaselway"
name: "weaselway"
description: "A full Linux desktop on Windows, running in WSL2 with GPU acceleration."
readmeQualityOk: true
url: "https://github.com/weaselway/weaselway"
language: "C"
languages: ["C"]
languagePcts: [82]
topics: ["gnome", "linux", "nix", "nix-flake", "plasma", "wsl2", "year-of-the-linux-desktop"]
stars: 40
forks: 2
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-08-28T15:50:15Z"
lastCommitAt: "2026-10-30T10:23:14Z"
lastReleaseAt: "2026-10-14T09:49:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 42
maintainers: ["oliverbestmann"]
openGraphImageUrl: "https://opengraph.githubassets.com/861605e470dc3ff63b6cedef3b4495b0a5575dd0c89c9f37c29ac2f23527f359/weaselway/weaselway"
---

# Weaselway

Weaselway runs a GPU-accelerated Linux desktop on WSL2 and shows it in a
window on Windows. It is distributed as a NixOS-WSL image.

https://github.com/user-attachments/assets/4867b0d8-d69e-49d9-93f8-eb8ae73222fd

The compositor runs unmodified. The `dxgdrm` kernel module provides a virtual
display that it drives like a monitor, and Mesa's `d3d12` driver renders on the
GPU that Windows exposes to WSL. The `weaselwayd` daemon reads each finished
frame and passes it through shared memory to a FreeRDP-based viewer on Windows.
Keyboard, mouse, touchpad and audio travel over the same connection.

Any Wayland compositor with a KMS backend can run this way. There is an image
with GNOME and one with Plasma, and sway, Weston, Hyprland and others start
through a session script you provide. See [Sessions](#sessions).

Each image contains the patched Mesa, the kernel module, weaselwayd, the audio
configuration and the Windows viewer. Nothing else has to be installed.

[ARCHITECTURE.md](https://github.com/weaselway/weaselway/blob/HEAD/ARCHITECTURE.md) describes the architecture, the build and
how to debug it. Known [limitations](#limitations) are listed below the
installation…
