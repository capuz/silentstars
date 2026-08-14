---
repo: "nicosandller/easy-floorplan"
name: "easy-floorplan"
description: "Interactive Home Assistant floorplan card with a visual drag-and-drop editor for walls, doors, furniture, text and device controls"
readmeQualityOk: true
url: "https://github.com/nicosandller/easy-floorplan"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["custom-card", "floorplan", "hacs", "home-assistant", "homeassistant", "lovelace", "lovelace-card"]
stars: 469
forks: 13
openIssues: 8
closedIssues: 70
watchers: 3
contributors: 10
recentReleases: 10
createdAt: "2026-05-21T05:05:04Z"
lastCommitAt: "2026-08-14T05:13:57Z"
lastReleaseAt: "2026-05-22T05:40:24Z"
status: "thriving"
tags: ["needs_contributors", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 27
maintainers: ["nicosandller", "superflyer11", "shauneccles"]
openGraphImageUrl: "https://opengraph.githubassets.com/b870bf6ce0c48a9e339582bdb6be3b5572dec4fc609323971224259a3773a228/nicosandller/easy-floorplan"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/nicosandller", "CUSTOM:https://www.blockchain.com/explorer/addresses/btc/bc1q348rpj7qav8n983kwrmt7ln6wzp7zu0yq83ncv", "CUSTOM:https://etherscan.io/address/0x36CA6EEF3700ff18858f195706C5E3A9d6458241"]
discussionCount: 6
---

# Easy Floorplan

A Home Assistant Lovelace card for building an interactive floorplan — **with a visual
drag-and-drop editor**. Draw walls, drop doors and windows, add furniture and labels, and
place your entities as icons, ripples or live state. Everything scales to the card and
screen size.

## What you can end up with

## Features
- **Visual editor** — draw walls, drop doors and windows that snap onto them, drag, nudge with arrow keys, multi-select, copy/paste, undo/redo, zoom.
- **Devices** — bind any entity to an icon: tap to toggle or open more-info, live state or attribute label, custom icon, size, rotation.
  - **Presence ripples** — presence sensors drawn as animated rings instead of a static icon.
  - (${\color{red}NEW!}$) **Cast light** — a light pools its own color and brightness onto the plan; overlapping pools mix, so a warm lamp and a cool one blend between them.
  - (${\color{red}NEW!}$) **Conditional text / icon / coloring** — threshold and state rules restyle an element from what its entity reads: the badge color, the label, and the glyph itself, so blinds swap between open and closed icons and a thermostat reddens as it heats. The same rules drive furniture and…
