---
repo: "camset-dev/camset"
name: "camset"
description: "Read, compare and edit Sony camera settings files (CAMSET .DAT): an editor that names every setting, and a kit that maps a camera's file on the camera itself."
readmeQualityOk: true
url: "https://github.com/camset-dev/camset"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [60, 28]
topics: ["sony", "camera", "camera-settings", "egui", "python", "rust", "kaitai-struct", "pmca-project"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-11-09T13:21:36Z"
lastCommitAt: "2026-11-13T03:06:50Z"
lastReleaseAt: "2026-11-12T11:57:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 17
maintainers: ["camset-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b73d2c05bc92bb1122027c0cd570ab5865bf39cd350d18e734cf011f8eeb675/camset-dev/camset"
discussionCount: 0
---

# Camset

Camset reads, compares and edits Sony camera settings files (`CAMSET*.DAT`), the files a camera saves to its card
with MENU > Setup > Reset/Save Settings > Save/Load Settings. It has two parts: the Camset Editor, an app for anyone
with a camera it knows, and a mapping kit that works out, on the camera itself, what each setting in a new camera's
file means.

To look inside a settings file with nothing to install, open the
[definition viewer](https://camset-dev.github.io/camset/viewer/) and choose the file: it shows every setting by name
for each camera Camset knows ([more below](#the-definition-viewer-and-the-proof-viewer)).

## Use the editor

The editor is on the project's [Releases page](https://github.com/camset-dev/camset/releases): the app in a `.dmg`
for macOS on Apple silicon, a tarball for Linux and, from 0.2.1, a zip for Windows; before 0.2.1, build it from source
on Windows ([The editor from source](#the-editor-from-source)). Take 0.2.0 or later: 0.1.0 is withdrawn, and its
editor does not open today's camera definitions.

- **macOS:** open the disk image and drag Camset Editor onto Applications. The app is not notarized, so macOS
  refuses to open it the first…
