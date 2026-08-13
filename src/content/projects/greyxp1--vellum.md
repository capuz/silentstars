---
repo: "greyxp1/vellum"
name: "vellum"
description: "Wayland native screen annotation tool"
readmeQualityOk: true
url: "https://github.com/greyxp1/vellum"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 24
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-08-04T13:19:15Z"
lastCommitAt: "2026-08-13T05:17:18Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 31
maintainers: ["greyxp1", "NormalFall", "imnotpoz"]
openGraphImageUrl: "https://opengraph.githubassets.com/b058210316efdda834ab75120eaf916112eca62a57f3f3ae2c0f0b3b0e405083/greyxp1/vellum"
---

# Vellum

`vellum` is a small native Wayland overlay for drawing directly over the live desktop, tested on niri.

https://github.com/user-attachments/assets/f8171063-16a8-497f-ba20-9e11bc50727e

Vellum began as a fork of [Chameleos](https://github.com/Treeniks/chameleos) by Thomas Lindae.

## Usage

Start the overlay once, then toggle drawing from a compositor shortcut:

```sh
vellum &
vellum toggle
```

For example, in niri:

```kdl
Mod+A { spawn "vellum" "toggle"; }
```

## Controls

| Input | Action |
| --- | --- |
| Left drag | Draw or manipulate the selection |
| Hold right click | Open the tool wheel |
| Release right click in the center | Open the color wheel |
| Middle drag | Erase annotations |
| Mouse wheel | Change stroke width or text size |
| `Ctrl` + wheel | Change opacity |
| `Shift` + wheel | Change roundness |
| `Ctrl` + click in Select | Add or remove an annotation from the selection |
| Double-click selected text | Edit it |
| `Ctrl+Z` / `Ctrl+Shift+Z` | Undo / redo |
| `Escape` | Cancel, clear the selection, or leave drawing mode |

Drag selection handles to reshape supported elements. While drawing, `Shift` constrains geometry
and `Alt` draws rectangles and…
