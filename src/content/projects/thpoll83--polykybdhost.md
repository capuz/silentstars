---
repo: "thpoll83/PolyKybdHost"
name: "PolyKybdHost"
description: "Host application to communicate with the PolyKybd"
readmeQualityOk: true
url: "https://github.com/thpoll83/PolyKybdHost"
homepage: "https://ko-fi.com/polykb"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["keyboard"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-08-18T06:30:13Z"
lastCommitAt: "2026-11-07T16:12:05Z"
lastReleaseAt: "2026-07-07T13:04:44Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 86
maintainers: ["github-actions[bot]", "thpoll83"]
openGraphImageUrl: "https://opengraph.githubassets.com/d92e9e1526ee7453e1b378a19189d450db2a8e13ee243960d481f4daf10c4cf1/thpoll83/PolyKybdHost"
fundingLinks: ["GITHUB:https://github.com/thpoll83", "KO_FI:https://ko-fi.com/polykb"]
---

# PolyHost

Host software for the **PolyKybd** keyboard. It tracks the active window and
pushes overlay / keymap / language updates to the keyboard over HID. It can
also run as a *forwarder* that relays window info from a remote machine to the
computer the keyboard is plugged into.

## Quick install (one line)

These commands clone the repo, create a virtual environment, install the Python
requirements, and (on Linux/macOS) set up the native hidapi library and HID
permissions. The clone has only the latest commit and leaves out the files the
app does not read: `tests/` and the overlay build inputs in
`polyhost/res/overlay_sources/` (about 10,000 of 12,000 files). It downloads
13 MB instead of 47 MB. `git pull` still updates it. To work on the code or the
overlays, run `git sparse-checkout disable` and `git fetch --unshallow` in the
folder.

By default the app is installed into a `PolyKybdHost/` folder **in the
directory you run the command from**. The installer prints this location and
lets you type a different one (press Enter to accept the default). To pick the
location up front without the prompt, set `POLYKYBD_DIR` first — e.g.
`POLYKYBD_DIR=~/apps/polykybd` (bash) or…
