---
repo: "freakydude/klipper-touch"
name: "klipper-touch"
description: "Experimental touch screen UI for Klipper 3D printers via Moonraker. Native Rust + Slint app for small displays on the printer host (Raspberry Pi, BTT CB1/CB2).  Untested – use at your own risk."
readmeQualityOk: true
url: "https://github.com/freakydude/klipper-touch"
language: "Rust"
languages: ["Rust", "HTML", "Slint"]
languagePcts: [55, 22, 21]
topics: ["klipper", "klipper-display", "klipper3d", "touchscreen", "json-rpc2", "moonraker", "3d-printer", "3d-printing", "maker", "mainsail"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-11-05T17:07:44Z"
lastCommitAt: "2026-10-21T17:31:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 75
undervaluedScore: 45
maintainers: ["freakydude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cae959bad1a61316d12ef443549e120b38f62a167dfa1fd42fd64cc67c8cd2a/freakydude/klipper-touch"
fundingLinks: ["PATREON:https://patreon.com/freakydude", "KO_FI:https://ko-fi.com/freakydude", "BUY_ME_A_COFFEE:https://buymeacoffee.com/freakydude"]
discussionCount: 1
---

# Klipper-Touch

> [!CAUTION]
> **Untested experiment. Not intended for productive use.**
> This software has not been tested on real printers. It sends commands that move motors, heat up
> nozzles and beds and restart services; a bug can damage your printer, your print or start a fire.
> Use it only if you know what you are doing, never leave the printer unattended, and keep an
> emergency stop within reach.
> The software is provided "as is", **without any warranty and without any liability** of the author
> for damage of any kind, to the extent permitted by law (see sections 15 and 16 of the [GPL](https://github.com/freakydude/klipper-touch/blob/HEAD/LICENSE)).

Touch screen UI for [Klipper](https://www.klipper3d.org/) printers, talking to [Moonraker](https://moonraker.readthedocs.io/).
Built for small displays attached directly to the printer host (Raspberry Pi 3/4/5, BTT CB1/CB2), first target is the
BTT HDMI5 (5", 800x480, landscape). Native Rust application with a [Slint](https://slint.dev/) UI — no browser, no WebView.

So far it has only run against the included fake Moonraker and on desktops.

| | | |
|---|---|---|
|  |  |  |
|  |  |  |

## Features

- **Print**:…
