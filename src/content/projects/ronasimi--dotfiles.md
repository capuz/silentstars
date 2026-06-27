---
repo: "ronasimi/dotfiles"
name: "dotfiles"
description: "Personal dotfiles"
url: "https://github.com/ronasimi/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [79]
stars: 41
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-09-03T18:47:39Z"
lastCommitAt: "2026-06-27T00:49:06Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 50
maintainers: ["ronasimi"]
openGraphImageUrl: "https://opengraph.githubassets.com/783288b3f42dff7ceda2f58494810d28bdc3c30c8465054f7ebeec78ac113284/ronasimi/dotfiles"
---

# My Hyprland Dotfiles

This repository contains my personal [Hyprland](https://hyprland.org/) configuration, written in Lua using a native Lua implementation. It is tailored for a seamless, Wayland-native workflow on Arch Linux.

## 📦 Dependencies

To replicate this setup, you will need to install the following packages. They are divided into core Wayland components, UI elements, hardware controls, and specific applications bound in the configuration.

### 1. Core Wayland & Session
* **`hyprland`**: The Wayland compositor itself.
* **`uwsm`**: Universal Wayland Session Manager (used to wrap and launch applications).
* **`xdg-desktop-portal-hyprland`**: Required for Wayland screen sharing and portal support.
* **`xdg-desktop-portal-gtk`**: Fallback portal for GTK applications.
* **`polkit-gnome`**: Graphical authentication agent.
* **`gnome-keyring`**: Secret service provider.

### 2. Hyprland Ecosystem
* **`hypridle`**: Manages idle states and screen blanking.
* **`hyprlock`**: Screen locker.
* **`hyprpaper`**: Wallpaper utility.

### 3. Shell, Status & UI
* **`waybar`**: Highly customizable status bar.
* **`wofi`**: Application launcher and dynamic menu.
* **`dunst`**:…
