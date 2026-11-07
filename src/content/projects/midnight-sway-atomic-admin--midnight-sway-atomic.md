---
repo: "midnight-sway-atomic-admin/Midnight-Sway-Atomic"
name: "Midnight-Sway-Atomic"
description: "Midnight Sway Atomic, a reasonably clean Fedora Linux rice"
readmeQualityOk: true
url: "https://github.com/midnight-sway-atomic-admin/Midnight-Sway-Atomic"
language: "CSS"
languages: ["CSS"]
languagePcts: [79]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-14T03:56:53Z"
lastCommitAt: "2026-11-07T16:12:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["midnight-sway-atomic-admin"]
openGraphImageUrl: "https://opengraph.githubassets.com/72ea8c9b78e28241ca43cb759e981abd6f9c55674135940e467f41758e180918/midnight-sway-atomic-admin/Midnight-Sway-Atomic"
---

# Midnight Sway Atomic

A secure and visually austere base desktop environment for a fresh install of Fedora Sway Atomic.

---

## Setup Notes

This rice is stable on Fedora 45.

For the rice to look correct and function as intended, review the following before using it.

### Display scaling

The rice is being built on a **2560×1600** display. Other display sizes have not been tested.

Configure the appropriate scaling settings for your display in:

```text
~/.config/sway/config
```

### Rofi application entries

The Rofi files assume that the Flatpak versions of **Firefox**, **GIMP** and **Showtime** are installed.

If you use different applications, change the application names in the relevant Rofi files. You may also need to adjust the Rofi width manually so that application titles fit cleanly within the menu.

If you replace Firefox, you also won't be able to use the included Firefox chrome files or the Firefox temporary extensions described below.

---

## Sway and Foot Locking Mechanism

After placing the Sway config, Waybar, and bin files in the appropriate places, activate the locking mechanism by running these commands from your Sway session:

```bash
chmod u+x…
