---
repo: "SimonSchubert/omalauncher"
name: "omalauncher"
description: "Agentic Android launcher: build your own apps and widgets with AI agents, Omarchy themes, Arch Linux without root"
readmeQualityOk: true
url: "https://github.com/SimonSchubert/omalauncher"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
stars: 200
forks: 44
openIssues: 28
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-10-02T13:10:28Z"
lastCommitAt: "2026-10-12T11:16:05Z"
lastReleaseAt: "2026-10-11T21:23:07Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 66
undervaluedScore: 24
maintainers: ["SimonSchubert", "ToS0", "pix3lgrass"]
openGraphImageUrl: "https://opengraph.githubassets.com/21f0d81283b53df097a5c7a8d3a6af99ba8fea7b02a6b4d76354ddff7915f45c/SimonSchubert/omalauncher"
---

# Omalauncher

An Android home screen with the look of [Omarchy](https://omarchy.org), and an
optional Arch Linux ARM system next to your phone apps. Omalauncher runs the
system under proot, without root, and is its Wayland compositor: every Linux
window opens as its own Android task, with its own card in Recents.

- **Themes**: all 22 Omarchy themes, with their wallpapers, applied to the
  launcher and to the Linux apps, plus the community themes from
  [omarchy.org/themes](https://omarchy.org/themes/), or your own in
  `~/.config/omarchy/themes`
- **Widgets** written in OWL, a small declarative language you can edit on the
  phone, plus a [widget store](https://github.com/SimonSchubert/omarchy-widgets)
- **Linux, optional**: pacman and the AUR, Linux apps in their own windows,
  terminal widgets, a file manager, and opt-in GPU acceleration on Mali GPUs
- **Coding agents**: the bar at the bottom sends a prompt to Claude Code, Codex,
  Copilot, opencode and others, which open in a terminal
- No account, no ads, no tracking

Needs an arm64 phone with Android 10 or newer. Without Linux, the launcher still
has the themes, wallpapers, Android apps and the widgets that don't run…
