---
repo: "Yggdrasil-AI-labs/adsb-to-wdgwars"
name: "adsb-to-wdgwars"
description: "Muninn — ADS-B feeder for WDGoWars. Handles AVR, SBS-1, dump1090/readsb, tar1090, VRS, Stratux, Mode-S Beast, NDJSON, Mayhem, GDL-90, and CSV. Built on gungnir (shared transport). Ships as both CLI (Python) and browser (Pyodide) with the same parser core."
url: "https://github.com/Yggdrasil-AI-labs/adsb-to-wdgwars"
homepage: "https://yggdrasil-ai-labs.github.io/adsb-to-wdgwars/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["adsb", "dump1090", "hackrf", "pyodide", "rtl-sdr", "sdr", "wardriving", "wdgwars", "gdl90", "mode-s"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-11T00:27:04Z"
lastCommitAt: "2026-06-23T23:27:42Z"
lastReleaseAt: "2026-05-29T03:45:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 54
maintainers: ["HiroAlleyCat"]
openGraphImageUrl: "https://opengraph.githubassets.com/2559669ede7504d1742a61129e02dfbaafab6b96c4424e89e516930fc0e9f619/Yggdrasil-AI-labs/adsb-to-wdgwars"
---

</p>

</p>

# Muninn

Convert ADS-B capture files (HackRF H4M, dump1090 / readsb, tar1090, VirtualRadarServer, Stratux, Mode-S Beast, RTL-SDR, RTL1090, PortaPack Mayhem, GDL-90 cockpit receivers) to WDGoWars-compatible JSON and optionally upload them. Auto-detects 13 input dialects and decompresses gzipped chunks transparently.

## Family

Sibling repos in the WDGoWars feeder family:

- [Heimdall](https://github.com/Yggdrasil-AI-labs/meshcore-to-wdgwars) — MeshCore LoRa feeder
- [wigle-to-wdgwars](https://github.com/Yggdrasil-AI-labs/wigle-to-wdgwars) — WiGLE Wi-Fi/BLE feeder
- [gungnir](https://github.com/Yggdrasil-AI-labs/gungnir) — shared HMAC transport library
- [wdgwars-api-tester](https://github.com/Yggdrasil-AI-labs/wdgwars-api-tester) — API surface probe

> **Linked by WDGoWars as the recommended advanced converter.** The
> WDGoWars portal includes a native importer for the common JSON
> dialects (dump1090 / readsb / tar1090 / Stratux / VRS / Sleipnir)
> and the SBS-1 / PortaPack Mayhem text formats — drag-and-drop a
> file and it imports. For everything else — AVR raw Mode-S, Mode-S
> Beast binary, GDL-90 binary, NDJSON, gzipped tar1090 chunks,
>…
