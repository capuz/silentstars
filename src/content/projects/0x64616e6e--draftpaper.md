---
repo: "0x64616e6e/draftpaper"
name: "draftpaper"
description: "A Wayland desktop drawn as a drafting sheet: a tiling compositor in Rust (Smithay) with no bar. A live title block, lettered margins, windows tiled on the zones and parked in the margins, its own lock and login screens."
readmeQualityOk: true
url: "https://github.com/0x64616e6e/draftpaper"
homepage: "https://draftpaper.este.systems/"
language: "Rust"
languages: ["Rust"]
languagePcts: [68]
topics: ["debian", "desktop", "quickshell", "rust", "smithay", "tiling-window-manager", "wayland", "wayland-compositor"]
stars: 27
forks: 1
openIssues: 7
closedIssues: 41
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-14T16:27:34Z"
lastCommitAt: "2026-10-21T17:31:04Z"
lastReleaseAt: "2026-10-18T21:13:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 50
maintainers: ["0x64616e6e", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b13f26059a4b219256ca7d5d95eecc0c17437cd00f9bca8395299f58194d1b7e/0x64616e6e/draftpaper"
---

# Draftpaper

A Wayland desktop drawn as a drafting sheet. Website: https://draftpaper.este.systems/, with a
[theme generator](https://draftpaper.este.systems/schemes/) and a
[wallpaper generator](https://draftpaper.este.systems/wallpapers/) (the sheet for any desktop).

There is no bar. The wallpaper is a sheet of paper with a frame, a dot grid and zone ticks, and windows
end exactly on the frame line. What a bar would show is lettered onto the sheet:

- **The title block** in the bottom-right corner carries the readings: time, date, the workspace,
  power draw, battery, power profile, CPU and memory, network, temperatures and fan.
- **The top margin** letters the workspaces in its first zone. The focused one is bold black; one shown
  on another screen is bold. Notifications appear there; alerts (temperatures past a threshold, a low
  battery) appear in its last zone in red, and volume and brightness for a few seconds after they change.
- **The revisions**, in the title block's column (Mod+i, or by themselves with `[title] revisions = true`),
  letter the latest commits of the git repository the focused window works in (for a terminal, its
  shell's directory): REV, DESCRIPTION,…
