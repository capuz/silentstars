---
repo: "fiverecords/SuperTimecodeConverter"
name: "SuperTimecodeConverter"
description: "Professional timecode router and converter — MTC, Art-Net, LTC, System Time & Pioneer Pro DJ Link I/O with multi-engine architecture and audio passthrough. Built with C++/JUCE."
readmeQualityOk: true
url: "https://github.com/fiverecords/SuperTimecodeConverter"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["artnet", "audio", "broadcast", "cdj", "djm", "juce", "lighting-control", "live-performance", "ltc", "mtc"]
stars: 169
forks: 13
openIssues: 7
closedIssues: 16
watchers: 8
contributors: 4
recentReleases: 0
createdAt: "2026-02-08T19:08:59Z"
lastCommitAt: "2026-11-24T14:07:06Z"
lastReleaseAt: "2026-03-24T17:25:06Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 84
undervaluedScore: 33
maintainers: ["fiverecords"]
openGraphImageUrl: "https://opengraph.githubassets.com/3906157abfb45ce891ce845d811b7eefd1a5ec30650c6fa33ead9744d1dbd2ba/fiverecords/SuperTimecodeConverter"
fundingLinks: ["GITHUB:https://github.com/fiverecords", "BUY_ME_A_COFFEE:https://buymeacoffee.com/fiverecords"]
---

# Super Timecode Converter

A professional timecode routing and conversion tool built with C++ and [JUCE](https://juce.com/). Run up to **8 independent timecode engines** simultaneously — each with its own input source, output destinations, frame rate, and offset. Connect directly to **Pioneer CDJ/DJM hardware** via native Pro DJ Link integration and to **Denon Engine OS hardware** via StageLinQ — no additional software required. Ideal for live events, broadcast, post-production, and AV installations.

---

## Features

### Multi-Engine Routing

Run **up to 8 independent timecode engines** simultaneously. Each engine has its own input source, frame rate, output destinations, and offset settings — all running in parallel.

- Route internal generator to MTC on one engine while converting LTC input to Art-Net on another
- Feed the same source to multiple outputs with different frame offsets
- Run independent MTC, Art-Net, and LTC pipelines side by side — each with its own device assignments
- Monitor different CDJ or Denon players on separate engines — each generating independent timecode streams
