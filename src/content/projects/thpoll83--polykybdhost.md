---
repo: "thpoll83/PolyKybdHost"
name: "PolyKybdHost"
description: "Host application to communicate with the PolyKybd"
readmeQualityOk: true
url: "https://github.com/thpoll83/PolyKybdHost"
homepage: "https://ko-fi.com/polykb"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["keyboard"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2023-08-18T06:30:13Z"
lastCommitAt: "2026-08-14T05:13:58Z"
lastReleaseAt: "2026-07-07T13:04:44Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 78
maintainers: ["claude", "github-actions[bot]", "thpoll83"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6a7a6aa2d2c0efb8e5ab8b9a723d3168f075770804efa91324419e38ff20f84/thpoll83/PolyKybdHost"
---

# PolyHost

Host software for the **PolyKybd** keyboard. It tracks the active window and
pushes overlay / keymap / language updates to the keyboard over HID. It can
also run as a *forwarder* that relays window info from a remote machine to the
computer the keyboard is plugged into.

## Quick install (one line)

These commands clone the repo, create a virtual environment, install the Python
requirements, and (on Linux/macOS) set up the native hidapi library and HID
permissions.

By default the app is installed into a `PolyKybdHost/` folder **in the
directory you run the command from**. The installer prints this location and
lets you type a different one (press Enter to accept the default). To pick the
location up front without the prompt, set `POLYKYBD_DIR` first — e.g.
`POLYKYBD_DIR=~/apps/polykybd` (bash) or `$env:POLYKYBD_DIR="C:\Tools\PolyKybd"`
(PowerShell).

When it finishes, the installer offers to start PolyKybd. If you ran it from a
terminal it asks first (`Start PolyKybd now? [Y/n]`); if it was launched
non-interactively it starts the app right away. Set `POLYKYBD_NO_LAUNCH=1` to
skip starting the app altogether (useful for CI/headless installs). Either way
the app…
