---
repo: "Niko11111/SpoolmanScale"
name: "SpoolmanScale"
description: "Open-source ESP32 filament scale with NFC and touch display for Spoolman, FilaMan and BamBuddy: weighs spools and updates the inventory, reads Bambu tags and writes its own, creates spools right on the scale, prints labels on Bluetooth printers, with a web interface."
readmeQualityOk: true
url: "https://github.com/Niko11111/SpoolmanScale"
homepage: "https://niko11111.github.io/SpoolmanScale-Docs/"
language: "C"
languages: ["C", "C++"]
languagePcts: [65, 33]
topics: ["3d-printing", "bambu-lab", "bambuddy", "esp32", "filaman", "filament", "nfc", "spoolman"]
stars: 157
forks: 36
openIssues: 15
closedIssues: 14
watchers: 7
contributors: 8
recentReleases: 0
createdAt: "2026-03-08T14:42:04Z"
lastCommitAt: "2026-11-13T11:21:59Z"
lastReleaseAt: "2026-05-06T02:19:21Z"
status: "thriving"
tags: []
healthScore: 77
undervaluedScore: 33
maintainers: ["Niko11111", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/668d100f790d28dfa048c59af4426488a8e7136f29ccaf4f18600e3a2d082ee3/Niko11111/SpoolmanScale"
---

# SpoolmanScale

### *One Scale to rule them all.*

🌐 **Everything in one place:** the brand-new SpoolmanScale website, [www.spoolmanscale.com](https://spoolmanscale.com/?ref=github)

**SpoolmanScale** is an ESP32 filament scale with an NFC reader, a touchscreen and open-source firmware. Place a spool on it: the scale reads its tag, pulls the spool from your filament manager and lets you update the weight, log a drying date, set a location or archive it. No phone needed. It also writes NFC tags, creates spools right at the scale and prints labels, and it works with [Spoolman](https://github.com/Donkie/Spoolman), [FilaMan](https://github.com/Fire-Devils/filaman-system) and [BamBuddy](https://github.com/maziggy/BamBuddy), which you can switch between at any time.

Over 200 active users, inventories of more than 300 spools, and only 5-star ratings on MakerWorld.

Yes, another filament scale – but hear me out, this one might actually earn a spot next to your printer. 😄

> [!IMPORTANT]
> **SpoolmanScale is a front end, not a database.** It needs one of the three filament managers running on your network. That is where your spools live; the scale reads them, weighs them and writes the…
