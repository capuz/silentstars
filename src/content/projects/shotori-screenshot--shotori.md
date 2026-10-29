---
repo: "shotori-screenshot/shotori"
name: "shotori"
description: "Wayland-native screenshot tool — select, annotate, pin, long-capture scrolling pages, read text with on-device OCR. UI hand-drawn with gpui-kit."
readmeQualityOk: true
url: "https://github.com/shotori-screenshot/shotori"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["annotation", "gpui", "linux", "long-screenshot", "ocr", "rust", "screenshot-tool", "wayland"]
stars: 18
forks: 0
openIssues: 4
closedIssues: 14
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-25T20:06:31Z"
lastCommitAt: "2026-10-29T09:03:35Z"
lastReleaseAt: "2026-10-28T04:19:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 49
maintainers: ["mengh04", "linyisu"]
openGraphImageUrl: "https://opengraph.githubassets.com/792270ac13751bcb65eb71a045467d2f34c5dc0d9fbe061d47d52cb39d5f781e/shotori-screenshot/shotori"
---

# Shotori

A Wayland-native screenshot tool — select, annotate, pin, long-capture
scrolling pages, and read text with on-device OCR.

Shotori freezes every screen, you drag a selection, and the selection
flows to wherever it's needed: clipboard, save dialog, text, a pinned
floating copy — or a long screenshot that stitches itself while you
scroll. The entire UI is hand-drawn with
[gpui-kit](https://crates.io/crates/gpui-kit), and everything runs
locally on your machine.

**[简体中文](https://github.com/shotori-screenshot/shotori/blob/HEAD/README.zh-CN.md)**

## Highlights

- **Wayland-native** — built on `wlr-screencopy` and layer-shell; at
  home on niri, sway, Hyprland and other wlroots-adjacent compositors.
  Multi-monitor setups with mixed scales and rotated outputs are
  handled, selections may span screens
- **Private OCR** — text recognition runs on-device; after a one-time
  ~31 MB model download, nothing ever leaves your machine
- **Long screenshots** — frame the scrolling region, scroll it
  yourself, and watch the stitched page grow in a live side preview.
  If part of the selection doesn't scroll along (fixed bars, video),
  the session stops safely and keeps what it…
