---
repo: "nuxcodes/rockpod"
name: "rockpod"
description: "Custom Rockbox firmware for iPod Classic & Video."
readmeQualityOk: true
url: "https://github.com/nuxcodes/rockpod"
language: "C"
languages: ["C"]
languagePcts: [87]
stars: 126
forks: 10
openIssues: 6
closedIssues: 9
watchers: 8
contributors: 172
recentReleases: 0
createdAt: "2026-02-13T21:22:17Z"
lastCommitAt: "2026-07-14T05:52:40Z"
lastReleaseAt: "2026-02-18T07:18:06Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 11
maintainers: ["nuxcodes", "emaadmanzoor"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a5c0747f3e999829840d0b9912194c843249467af830a0dd683651b8204a4ef/nuxcodes/rockpod"
---

<h1 align="center">Rockpod</h1>
    Custom Rockbox firmware for iPod Classic and iPod Video.<br>
    MFi digital audio, Cover Flow, dynamic colors.
  </p>
    <br/>
  </p>
</p>

---

Rockpod is a [Rockbox](https://www.rockbox.org) fork for iPod Classic (6th/7th gen, 2007–2014) and iPod Video (5th/5.5th gen, 2005–2006). It adds MFi digital audio output, a rewritten Cover Flow, dynamic album art colors, and SSD-aware power management.

Rockpod supports both HDD and iFlash-modded units. Both iPod models share the same 320x240 display and get the same UI features — Cover Flow, dynamic colors, themes, and rendering improvements. Hardware-specific features like SSD power management and MFi digital audio are iPod Classic only for now. It's a drop-in replacement for the official Rockbox firmware, with no reformatting or data loss.

---

## Features

### Digital Audio Output
> Supported on iPod Classic 6G/7G

Rockpod is the first open source firmware to support digital audio output over the iPod's dock connector. It handles the full Apple iAP authentication handshake, negotiates sample rate with the accessory, and sends bit-perfect PCM over USB, bypassing the iPod's internal DAC. The…
