---
repo: "stevejcl/astro_dwarf_session"
name: "astro_dwarf_session"
description: "Automatic Sessions For Dwarf 2, Dwarf3 and Dwarf Mini"
readmeQualityOk: true
url: "https://github.com/stevejcl/astro_dwarf_session"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [66, 32]
stars: 18
forks: 4
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-09-27T18:27:12Z"
lastCommitAt: "2026-10-29T21:24:52Z"
lastReleaseAt: "2024-10-25T21:52:08Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 61
maintainers: ["claude", "stevejcl"]
openGraphImageUrl: "https://opengraph.githubassets.com/a94853fecfe03f03a92f64f77b9a4de6fe598578282d7192c34115c03e4e0f99/stevejcl/astro_dwarf_session"
fundingLinks: ["GITHUB:https://github.com/stevejcl"]
discussionCount: 1
---

# Astro Dwarf Session

Astro Dwarf Session automates and monitors imaging sessions for Dwarf II, Dwarf 3, and Dwarf Mini telescopes. It runs as a lightweight local web app (built with [NiceGUI](https://nicegui.io)) that you open in a browser or as a native desktop window — and, since it's a web app, from your phone or tablet too, on the same network.

> 🌌 **This project is part of the [Dwarfium Lite Suite](https://stevejcl.github.io/Dwarfium-Lite-Suite/)** — Dwarfium Hub, Dwarfium Lite and Dwarfium Scope Archive. The complete documentation (get started, "I want to…" recipes, reference) is here: **[stevejcl.github.io/Dwarfium-Lite-Suite](https://stevejcl.github.io/Dwarfium-Lite-Suite/)**

> **Note:** this project used to ship a Tkinter desktop GUI (`astro_dwarf_session_UI.py`). That interface is retired — a full rewrite on NiceGUI now covers everything it did and more, including proper multi-device support. The old Tkinter code is preserved on the `V3-multi` branch for reference.

## What it does

- **Connects to your Dwarf(s)** over Wi-Fi (BLE pairing built in, plus a no-Bluetooth manual config path for when a BLE adapter isn't cooperating — see below) and talks to them live over…
