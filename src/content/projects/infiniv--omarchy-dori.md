---
repo: "infiniV/omarchy-dori"
name: "omarchy-dori"
description: "Omarchy plugin: use an Android phone as a webcam and a second screen, over USB"
readmeQualityOk: true
url: "https://github.com/infiniV/omarchy-dori"
language: "Shell"
languages: ["Shell", "QML"]
languagePcts: [62, 38]
topics: ["adb", "android", "hyprland", "linux", "omarchy", "quickshell", "scrcpy", "v4l2loopback", "wayland", "webcam"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-20T01:05:55Z"
lastCommitAt: "2026-08-28T15:32:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 28
maintainers: ["infiniV", "TinySkillet"]
openGraphImageUrl: "https://opengraph.githubassets.com/dee170191bace028f4beadc6b1ea9687c2dd91dbe71f0ea85fa017443ee43ba9/infiniV/omarchy-dori"
discussionCount: 0
---

# Dori

An Android phone is a good camera and a spare screen that you already own. Dori
puts both on the Omarchy bar: one icon, one panel, everything over the USB cable
you charge with.

- **Live preview** — a still of the phone's screen beside the controls,
  refreshed about every two and a half seconds while the panel is open, and not
  at all when it is closed or when the full mirror is up.
- **Camera** — the phone's back or front camera appears as an ordinary webcam at
  `/dev/video10`, so Meet, Zoom, Discord, OBS and anything else that opens a
  `/dev/video*` node can use it without knowing where the picture comes from.
  Rotation, resolution and frame rate are on the panel, and a **viewfinder**
  button opens the loopback node in a window so you can fix your framing
  without joining a call to look at yourself.
- **Screen** — the phone's display mirrored in a window, with audio and
  keyboard, at a bitrate and codec you choose.
- **Screenshot** — one click puts the phone's screen on your clipboard and in
  `~/Pictures/dori`, because the reason you took it is usually to paste it.
- **Record** — the phone's screen to an mp4 in the background, with no mirror
  window in the…
