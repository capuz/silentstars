---
repo: "teerprah/dock-window-preview"
name: "dock-window-preview"
description: "Preview open windows in a GNOME Dock by hovering a dock icon and activate a window by selecting the preview."
readmeQualityOk: true
url: "https://github.com/teerprah/dock-window-preview"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
stars: 6
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-03-06T17:10:40Z"
lastCommitAt: "2026-11-19T05:04:55Z"
lastReleaseAt: "2026-11-13T18:06:32Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 74
maintainers: ["teerprah", "devl34n", "plugo1"]
openGraphImageUrl: "https://opengraph.githubassets.com/3df0ae0df1323d9a4f4162b6a4cc45459dbc2dccbe754cf3e402c735ba5a6dcf/teerprah/dock-window-preview"
discussionCount: 2
---

# dock-window-preview
# Dock Window Preview (GNOME 46/48/49/50/51)
This GNOME Shell extension shows open-window previews when you hover a dock icon.
Clicking a preview activates that window; middle-clicking a preview closes that
window, like the Windows taskbar.

See [CHANGELOG.md](https://github.com/teerprah/dock-window-preview/blob/HEAD/CHANGELOG.md) for release history.

## Install locally

1. Run:
   `make install`
2. Reload GNOME Shell:
   - GNOME 50/51 / Wayland: log out and back in
   - GNOME 46/48/49 / X11: press `Alt+F2`, run `r`
   - GNOME 46/48 / Wayland: log out and back in
3. Enable the extension:
   `gnome-extensions enable dock-window-preview@quivio`
4. Open settings:
   `gnome-extensions prefs dock-window-preview@quivio`

## Make targets

- `make install`: installs to `~/.local/share/gnome-shell/extensions/dock-window-preview@quivio`
- `make zip`: creates `dist/dock-window-preview@quivio.zip`
- `make uninstall`: runs `./uninstall.sh` to disable (if possible) and remove the local install directory

You can override the install location:
`make install INSTALL_DIR=/path/to/extensions/dock-window-preview@quivio`
