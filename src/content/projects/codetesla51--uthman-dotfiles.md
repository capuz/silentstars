---
repo: "codetesla51/uthman_dotfiles"
name: "uthman_dotfiles"
description: "Arch Linux · Hyprland · Matugen dynamic theming dotfiles"
readmeQualityOk: true
url: "https://github.com/codetesla51/uthman_dotfiles"
language: "QML"
languages: ["QML"]
languagePcts: [84]
stars: 151
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-09T07:22:54Z"
lastCommitAt: "2026-10-10T10:04:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 27
maintainers: ["codetesla51"]
openGraphImageUrl: "https://opengraph.githubassets.com/942dba0f5016df37926f5d314bccc99bbd4c9e9de9e4552e3b9aebc66126f017/codetesla51/uthman_dotfiles"
---

# dotfiles

Arch Linux, Hyprland, Quickshell, Matugen. Wallpaper sets the palette, everything else follows.

Bar island, Zathura and kitty over a wallpaper-pulled palette. Every surface you see here (bar, OSD, toasts, login, terminals, editors) is recolored from that one image.

## Fresh machine

```bash
yay -S hyprland quickshell kitty matugen starship zsh lsd zoxide fzf \
       cava btop rofi swayosd hyprlock hypridle hyprsunset sddm \
       xdg-desktop-portal-hyprland uwsm cliphist wl-clipboard \
       ttf-jetbrainsmono-nerd ttf-firacode-nerd inter-font
git clone https://github.com/codetesla51/uthman_dotfiles.git ~/dotfiles
cd ~/dotfiles && chmod +x install.sh && ./install.sh
set-wallpaper ~/Pictures/your-wallpaper.jpg
```

Reboot once after the first install (SDDM theme lands in `/usr/share/sddm/themes/`, user services start on fresh login). Lost after that: `SUPER+K` is the keybind cheatsheet.

## How the whole thing fits together

Four pieces, and each one only knows about the one below it.

```
Hyprland         window manager, keybinds, layer rules, compositor
  └── quickshell bar, panels, OSD, notification daemon  (all QML)
        └── Matugen   one image -> every app's…
