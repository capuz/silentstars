---
repo: "aozora/omaxian"
name: "omaxian"
description: "Omaxian is a port of Omarchy shell for Debian-based systems + X11/XLibre + i3. Same bar, themes, launcher, and omarchy-* commands — no Wayland, Hyprland, and no dependency on any init systems."
readmeQualityOk: true
url: "https://github.com/aozora/omaxian"
homepage: "https://omaxian.com"
language: "QML"
languages: ["QML", "Rust"]
languagePcts: [29, 24]
stars: 23
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-09-02T11:48:21Z"
lastCommitAt: "2026-11-15T08:19:08Z"
lastReleaseAt: "2026-10-26T19:55:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 46
maintainers: ["aozora", "marcellopunk"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0fea67b329518dbd5e579ab59662511d3f6619e532a2e1001c4bb508e132365/aozora/omaxian"
discussionCount: 0
---

# Omaxian

Omaxian is a port of [Omarchy](https://omarchy.org) for **Devuan / Debian + X11/XLibre + i3**.
Same bar, themes, launcher, and `omarchy-*` commands — no Wayland, Hyprland, and no dependency on systemd or other init systems.

You get a top bar (workspaces, clock, media, network, weather, tray, …),
popups for audio / bluetooth / Wi-Fi / power, a live theme switcher, a settings editor, an
Omarchy menu (apps + commands), and a command runner. Notifications use
**dunst**; the compositor is **picom**.

Porting notes and file-by-file diffs live in [`docs/omarchy-port/`](https://github.com/aozora/omaxian/blob/HEAD/docs/omarchy-port/).

## Gallery

---

## What Omaxian adds (Omarchy does not ship these)

Omaxian is not only a backend swap. Several first-party pieces have **no
upstream counterpart** — they exist because X11/i3/Debian needed them, or
because a GUI was missing.

| Piece                                                     | What you get…
