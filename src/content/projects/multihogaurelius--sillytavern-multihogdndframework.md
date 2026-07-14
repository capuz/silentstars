---
repo: "MultihogAurelius/SillyTavern-MultihogDnDFramework"
name: "SillyTavern-MultihogDnDFramework"
description: "Started off as a humble \"RPG State Tracker\" but has since expanded into a more ambitious \"game engine.\" The aim is to really build a D&D game framework inside SillyTavern with mechanical integrity. This isn't a narrative-first philosophy; it's game/mechanics first. Narrative emerges out of the mechanics working properly."
readmeQualityOk: true
url: "https://github.com/MultihogAurelius/SillyTavern-MultihogDnDFramework"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
stars: 34
forks: 5
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-16T01:18:13Z"
lastCommitAt: "2026-07-14T05:56:53Z"
lastReleaseAt: "2026-04-23T20:21:28Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 47
maintainers: ["Multihog1", "Mimo433", "MultihogAurelius"]
openGraphImageUrl: "https://opengraph.githubassets.com/38ded59f51ca7070cddca45518a2dcbcd9c209d9ccd7b024639eade8089b85a2/MultihogAurelius/SillyTavern-MultihogDnDFramework"
---

# Multihog D&D Framework

*A D&D-based RPG platform/simulation engine for SillyTavern.*

Out of the box, this framework essentially turns SillyTavern into something like AI Dungeon, but with actual mechanics/consequences! This is a mechanical-integrity-first philosophy where your choices matter. I wasn't satisfied with any of the commercial offerings available (AI Realm, AI Dungeon, Friends & Fables, etc.), so I made my own D&D platform inside SillyTavern.

In addition to fantasy, the system works just as well for casual "slice of life" scenarios or modern settings, so you're by no means limited to wizards and goblins. Everything is FULLY customizable and homebrew-friendly, and I mean fully. You can even play it as a dating sim with the relationship component.

**Crucially, the system is input-output, not just some glorified stats collector. Everything in the State Tracker is fed back to the AI. What you see is what the AI also sees.**

---

  <br>
  <em>A basic character sheet</em>
</p>

---

### The Core Components:

1. 🖥️ **RPG State Tracker** -  Extracts and maintains HP, inventory, party, buffs, XP, spells, and more via a dedicated second-pass model. Injects a rolling State…
