---
repo: "carlo9890/gnome-window-control"
name: "gnome-window-control"
description: "List, move and tile windows on GNOME Wayland from scripts, rules or the keyboard. A GNOME Shell extension with a D-Bus interface and the wctl CLI."
readmeQualityOk: true
url: "https://github.com/carlo9890/gnome-window-control"
homepage: "https://extensions.gnome.org/extension/10886/window-control/"
language: "Rust"
languages: ["Rust", "JavaScript", "Shell"]
languagePcts: [44, 28, 27]
topics: ["cli", "dbus", "gjs", "gnome", "gnome-shell-extension", "rust", "tiling", "wayland", "window-management", "wmctrl"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-01-08T11:59:53Z"
lastCommitAt: "2026-10-24T08:07:41Z"
lastReleaseAt: "2026-09-05T20:35:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 71
maintainers: ["hk9890"]
openGraphImageUrl: "https://opengraph.githubassets.com/42a43a59f90984341de835a51d356fb37819377e8ded7bc63be6c0167406e7b9/carlo9890/gnome-window-control"
---

# GNOME Window Control

List, move and tile windows on GNOME Shell from a script, a rules file, or the
keyboard. It works on Wayland, where `wmctrl` and `xdotool` reach only
XWayland windows.

One GNOME Shell extension, three ways to use it:

- **From a script** - `wctl`, a single static binary, or any D-Bus client such
  as `gdbus`. See [Usage](#usage).
- **On window creation** - rules in `rules.json` place a matching window the
  moment it opens. See [Automatic window placement](#automatic-window-placement).
- **From the keyboard** - `Super+Ctrl` plus a numpad key tiles the focused
  window. See [Keyboard shortcuts](#keyboard-shortcuts).

```bash
wctl list                                  # every window, with ID, class and title
wctl tile -c kitty left                    # tile the kitty window to the left column
wctl place focused right top 50% 100%      # right half of the workarea
wctl minimize focused                      # minimize the focused window
```

## What a script can do

- **List windows** - Enumerate all windows with their metadata (ID, title, WM class, workspace, monitor, etc.), with optional workspace, monitor, and class filters
- **Window info** - Get detailed…
