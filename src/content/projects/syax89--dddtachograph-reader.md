---
repo: "Syax89/DDDTachograph_Reader"
name: "DDDTachograph_Reader"
description: "Open Source digital tachograph (.ddd) file analyzer — full decoding, signature verification, and tree-structured data exploration (G1/G2/G2.2)"
readmeQualityOk: true
url: "https://github.com/Syax89/DDDTachograph_Reader"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["compliance", "customtkinter", "ddd", "digital-tachograph", "eu-regulation", "fleet-management", "gui", "python", "tachograph"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-02-11T19:21:53Z"
lastCommitAt: "2026-10-03T09:21:27Z"
lastReleaseAt: "2026-02-12T18:40:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 50
maintainers: ["Syax89", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d70ee68b5f14f29bea1a81caae5a36f54ba5fab93e899283907e90ee6947e235/Syax89/DDDTachograph_Reader"
---

# DDD Tachograph Reader

</p>

> Open Source  `.ddd` digital tachograph file analyzer — full decoding with tree-structured data exploration.

---

## Features

### File Decoding
- **Multi-generation**: G1 (Annex 1B), G2 Smart (Annex 1C), **Gen 2.2 Smart V2** (Reg. EU 2023/980)
- **Driver data**: Surname, first name, date of birth, card number, expiry, issuing nation
- **Daily activities**: Driving, work, availability, rest/break
- **Vehicle data**: VIN, plate, registration nation, odometer
- **GNSS positions**: Coordinates, border crossings, places
- **VU records**: Card insertions/withdrawals, calibrations, sensors, events/faults
- **Per-day vehicles**: Vehicle(s) driven each day shown in the driver activity chart
- **Full nation names**: Registration/issuing/sensor nation codes expanded to English names

### Integrity
- Cryptographic signature verification (ERCA → MSCA → Card/VU chain)
- Recursive BER-TLV and STAP parsing (nested containers)
- 100% byte coverage on all tested files
- TREP completeness inventory and origin detection (driver card vs VU download)
- Plausibility gating and best-effort salvage of partial/corrupted downloads
- Tree structure for data exploration

###…
