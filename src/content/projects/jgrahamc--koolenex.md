---
repo: "jgrahamc/koolenex"
name: "koolenex"
description: "Alternative interface for dealing with KNX projects"
readmeQualityOk: true
url: "https://github.com/jgrahamc/koolenex"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 60
forks: 5
openIssues: 2
closedIssues: 8
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-03-06T16:17:54Z"
lastCommitAt: "2026-09-12T08:04:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 34
maintainers: ["jgrahamc", "2000game", "smar000"]
openGraphImageUrl: "https://opengraph.githubassets.com/a21d8f93c1b9bf4feb85736d8b7301e5a915ea13181b4b3789053c8e797ec586/jgrahamc/koolenex"
---

</p>

# koolenex

Open-source KNX project tool. Import `.knxproj` files from ETS6,
manage your installation, and interact with a live KNX bus.

DISCLAIMER: THIS IS HIGHLY EXPERIMENTAL. PROBABLY FULL OF
BUGS. PROBABLY FAILS HORRIBLY ON YOUR KNXPROJ FILE. PROCEED WITH
CAUTION. DON'T USE FOR ANY REAL KNX PROJECT. CONNECTIONS WITH BUS
MONITOR ARE NOT GUARANTEED TO WORK CORRECTLY. ANYTHING COULD HAPPEN.

PROCEED AT YOUR OWN RISK.

## Features

- **Project import** — parse ETS6 `.knxproj` files including password-protected projects
- **Locations** — browse your building structure (floors, rooms, distribution boards) with in-place name editing
- **Topology** — view areas, lines, and devices in their physical layout
- **Devices** — search, filter, sort, and edit devices; view parameters, group objects, and linked group addresses
- **Group Addresses** — tree and flat views with DPT display, linked device counts, inline creation, and in-place name editing at all three levels
- **Group Objects** — browse communication objects across all devices
- **Manufacturers** — devices grouped by manufacturer and model with catalog links
- **Product Catalog** — browse products from imported `.knxproj`…
