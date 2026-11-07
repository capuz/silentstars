---
repo: "crian/gweather-add-loc"
name: "gweather-add-loc"
description: "Add custom locations with arbitrary coordinates to GNOME Weather: GTK4/libadwaita app and Bash script"
readmeQualityOk: true
url: "https://github.com/crian/gweather-add-loc"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [66, 30]
stars: 18
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-08-05T23:24:06Z"
lastCommitAt: "2026-11-07T22:52:32Z"
lastReleaseAt: "2026-11-07T22:51:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 31
maintainers: ["crian", "Mel34"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae288146c16ab06e121c079a172efe27a91d2e63df6bea130a2f39192b0531f7/crian/gweather-add-loc"
---

# 🌤️ gweather-add-loc

Add custom locations with arbitrary coordinates to **GNOME Weather** (`org.gnome.Weather`) via `gsettings`.

Works with both **native packages** and **Flatpak** installations on **GNOME 40+ / libgweather-4**.

Two tools are included:

| Tool | What it is |
| --- | --- |
| 🖥️ **GTK app** (`gweather-add-loc`) | GTK4/libadwaita app written in Rust: add, list and remove locations |
| 📜 **Bash script** (`gweather-add-loc.sh`) | Simple standalone script to add a location from the terminal |

> 📍 **Coordinates:** always enter **latitude first, then longitude** (e.g. Berlin: `52.5200` / `13.4050`). Swapped values place the location somewhere else on the globe and the weather will be wrong.

## ✨ Features

* Automatically detects **Flatpak** vs. **native package** installations
* Converts decimal degrees to radians with proper leading-zero formatting
* Formats and injects the exact `libgweather-4` GVariant data structure
* Gracefully restarts GNOME Weather to apply changes immediately

The GTK app additionally lets you:

* See all saved locations and **remove** them
* New locations are added at the **top** of the list and become the current location
* Enter…
