---
repo: "drelymk/mod_viewer"
name: "mod_viewer"
description: "Preview 3DMigoto character mods in 3D"
readmeQualityOk: true
url: "https://github.com/drelymk/mod_viewer"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [57, 40]
stars: 44
forks: 7
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-02T05:25:15Z"
lastCommitAt: "2026-09-27T09:28:03Z"
lastReleaseAt: "2026-08-13T04:49:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 45
maintainers: ["drelymk"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc3612b0589e4d93c52f6037765188474563f9f78b60bc370bc8734278cae553/drelymk/mod_viewer"
---

# 3DMigoto Mod Viewer

3DMigoto Mod Viewer is a desktop app for opening character mods and inspecting
them in 3D without launching the game. Select a mod folder and the app reads its
active INIs, buffers, and texture bindings, reconstructs the model, and presents
it in an interactive viewport.

It supports mods made for ZZMI, GIMI, and WWMI.

## What the app can do

### 1. Open the app and load a mod

1. Launch the portable executable, or follow [Running the app](#running-the-app)
   to start from source.
2. Click `Open Mod` and select the mod folder containing its INI, buffers, and
   textures. To preview a disabled mod, first enable the `Open disabled mod`
   checkbox beside the button.
3. For quick access later, open `Mod Library` on the left and click `+` or
   `Add Mod Folder`. Enter a name, use `Browse` to choose a folder, and click
   `Add`. Expand folders with their arrows, then click a mod folder's name to
   load it. The folder's menu lets you edit or remove its library entry.

### 2. Explore the model and its appearance

1. Drag with the left mouse button to orbit, drag with the right mouse button
   to pan, and scroll to zoom. Use `Reset`, `Turn`, or `Tilt` in the…
