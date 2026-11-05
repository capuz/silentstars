---
repo: "strausmann/Label-Printer-Hub"
name: "Label-Printer-Hub"
description: "Self-hosted label printer hub for Brother PT-Series and QL-Series — multi-printer queue management, Snipe-IT/Grocy/Spoolman integration, plugin-based architecture, PWA-ready"
readmeQualityOk: true
url: "https://github.com/strausmann/Label-Printer-Hub"
homepage: "https://github.com/strausmann/label-printer-hub"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [72, 27]
topics: ["brother-printer", "brother-ql", "docker", "grocy", "homelab", "label-printer", "print-server", "ptouch", "self-hosted", "snipe-it"]
stars: 5
forks: 1
openIssues: 40
closedIssues: 29
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-10T16:32:44Z"
lastCommitAt: "2026-11-05T14:05:05Z"
lastReleaseAt: "2026-06-01T05:46:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 31
maintainers: ["strausmann", "semantic-release-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b78d8de3e55164ecd572d532fa506b80c83365b6e6c99536a3924eeca65e3cb/strausmann/Label-Printer-Hub"
discussionCount: 0
---

# Label Printer Hub

> Self-hosted multi-printer hub for Brother PT-Series and QL-Series label printers. Pull-mode (user scans barcode) and push-mode (Spoolman/Grocy webhooks). Integrates with Snipe-IT, Grocy, Spoolman. Plugin-based architecture for additional printer models. PWA-ready for smartphone use.

## Status

**Early development.** See [open issues](https://github.com/strausmann/label-printer-hub/issues) for progress and the [master tracking issue #22](https://github.com/strausmann/label-printer-hub/issues/22) for the phase roadmap.

This project is being designed against the [Brother PT-E550W/P750W/P710BT Raster Command Reference v1.02](https://download.brother.com/welcome/docp100064/cv_pte550wp750wp710bt_eng_raster_102.pdf) and [QL-800/810W/820NWB Raster Command Reference](https://download.brother.com/welcome/docp100278/cv_ql800_eng_raster_101.pdf). Hardware tested: Brother PT-P750W (verified). Brother QL-820NWBc (in progress).

## Features (planned)

- **Multi-printer support** via plugin architecture (PT-Series and QL-Series, more on request)
- **Pull-mode**: Open the web UI on your phone, scan a barcode, hit print
- **Push-mode**: Spoolman/Grocy webhook → automatic…
