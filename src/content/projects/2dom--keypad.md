---
repo: "2dom/keypad"
name: "keypad"
description: "Open Source minimalist Keypad for Zigbee / Thread / Matter"
url: "https://github.com/2dom/keypad"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-25T15:20:15Z"
lastCommitAt: "2026-06-26T21:32:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 33
maintainers: ["2dom"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6306126bbb9ed24e9c0e634df199a2eca45d0b4b09918ee38d6dc71b3bcec03/2dom/keypad"
---

# Zigbee Touch Keypad

I wanted a door keypad that actually looked good on the wall — slim, wireless, no visible screws, no cloud dependency. Something I could mount next to the front door, punch in a code, and have Home Assistant react instantly. Off-the-shelf Zigbee keypads exist, but they're usually expensive, mains-powered, or locked to one ecosystem. So I built my own.

The result is a battery-powered touch keypad about the size of a pez dispenser. It runs for roughly **six months** on a single charge, talks **Zigbee** to whatever coordinator you already run, and wakes from deep sleep the moment you touch a key. This repo has everything you need to build one yourself: Gerber files, a 3D-printable case, and working firmware.

The firmware ships as a **Zigbee** end-device example. The same **ESP32-C6** board is equally happy running **Matter** or **Thread** — the touch handling and power logic stay the same; only the radio stack changes.

  </a>
</p>

## What it looks like on the wall

The design goal was something that disappears into a modern entryway. A white slab on textured walls, twelve touch buttons, no mechanics to wear out.

</p>

Early renders explored proportions and…
