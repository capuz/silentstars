---
repo: "ozancs/voyager-ui"
name: "voyager-ui"
description: "Voyager UI: a web interface for Klipper 3D printers. Runs next to Mainsail or Fluidd, talks to Moonraker."
readmeQualityOk: true
url: "https://github.com/ozancs/voyager-ui"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [68, 29]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-25T12:21:19Z"
lastCommitAt: "2026-09-26T08:47:53Z"
lastReleaseAt: "2026-09-25T18:35:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 57
maintainers: ["ozancs", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f34f29b5c2cbeae8016f0420df8856041c1a9b01bf65343d1657c78197cb995/ozancs/voyager-ui"
---

# Voyager UI

A web interface for Klipper printers. Runs next to Mainsail or Fluidd on its own port, talks to Moonraker like any other client, changes nothing in Klipper.

> **Read this first.** The code in this repo was written with AI (Claude). I am a maker, not a frontend developer, and I could not have built this on my own. I designed it, decided what goes where, tested every feature on my printer, sent back everything that looked or felt wrong and had it redone until it was right. There is a mock Moonraker for automated browser tests, unit tests for the config checks and translations, and the code went through a security review. Still, it is one person's printer and one person's taste. Treat it as early software and keep Mainsail installed next to it.
>
> Why it exists: Mainsail is great but it never quite fit how I use my printer, and reading the forums I saw I am not alone. This is my take on it. If a UI like this is something you wanted too, try it, break it, open an issue.

Tested on: a CoreXY with a Raspberry Pi 4, Klipper + Moonraker installed with KIAUH.

## What it does

A dashboard you arrange yourself (drag, resize, hide, colour the cards), a config editor that…
