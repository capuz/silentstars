---
repo: "larszu/cable-planner"
name: "cable-planner"
description: "Broadcast & AV cable planning app for macOS, Windows and web: draw the signal flow, get real cable lengths, patch lists, BOM and QR labels, ATEM multiviewer and Blackmagic Videohub routing. Offline-first Electron + React."
readmeQualityOk: true
url: "https://github.com/larszu/cable-planner"
homepage: "https://larszu.github.io/cable-planner/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["atem", "audiovisual", "av-production", "blackmagic-design", "broadcast", "cable-management", "cross-platform", "desktop-app", "electron", "event-technology"]
stars: 27
forks: 2
openIssues: 25
closedIssues: 487
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-04-22T09:47:31Z"
lastCommitAt: "2026-11-14T22:03:15Z"
lastReleaseAt: "2026-09-21T18:14:21Z"
status: "thriving"
tags: ["hidden_gem", "funded", "under_pressure"]
healthScore: 98
undervaluedScore: 54
maintainers: ["larszu", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1217867297/44dfa1e4-a186-44d3-998d-c39b0c21e393"
fundingLinks: ["CUSTOM:https://paypal.me/larszumpe"]
discussionCount: 0
---

Draw the signal flow, get real cable lengths, and hand over every list the build day needs.

  &nbsp;

---

## Why LZ Cable Planner

- **Plan in signal flow, not in drawings.** Devices with real ports from 2,000+
  catalogue entries, each linked to its manufacturer datasheet — including
  projectors (Barco, Christie, Panasonic, Epson, Fujifilm), PixelHue and
  PIXERA media servers, and the rental inventory of LANG AG.
  "Controlled via" in the properties panel lists the documented control
  protocols (serial with pinout, baud and network-bridge setup, or IP with
  port); values the manufacturer does not publish are marked as such.
  A new cable starts with the type and length of the last cable drawn
  between the same connectors; its name stays empty and the label shows the
  type. A cable runs from an output to an input, whichever end you start at;
  input to input or output to output is still created, with a note in the
  cable dialog; network ports and patch panel sockets work both ways.
  Library categories can have subcategories (Audio → Lautsprecher).
  The plan check tests the amplifier load per channel from impedance and
  power data.
- **Real cable lengths.** Put the…
