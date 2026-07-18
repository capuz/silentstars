---
repo: "mergeos-bounties/PlantGuide"
name: "PlantGuide"
description: "PlantGuide: plant species identification and per-species care guidance"
readmeQualityOk: true
url: "https://github.com/mergeos-bounties/PlantGuide"
homepage: "https://mergeos.shop"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [70, 30]
topics: ["bounty", "care", "gardening", "identification", "mergeos", "plants", "python"]
stars: 10
forks: 16
openIssues: 60
closedIssues: 99
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-07-12T12:25:04Z"
lastCommitAt: "2026-07-18T05:45:50Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 63
maintainers: ["key1989han", "TUPM96", "brino666"]
openGraphImageUrl: "https://opengraph.githubassets.com/70e7e48c04ff649ac837d5fc989dbdff96796270460bc5ae35be9bee4520bb2a/mergeos-bounties/PlantGuide"
---

# PlantGuide

**PlantGuide** identifies plants from a **photo** (or trait tags) and returns a full **care card** — light, water, soil, humidity, tips — as JSON for gardening apps. Photo ID ships as an **offline demo** (synthetic plant images + visual heuristics + catalog match); vision models can replace the toy ranker via bounties.

**Product:** [mergeos-bounties/PlantGuide](https://github.com/mergeos-bounties/PlantGuide)

---

## Table of contents

- [Photo demo (identify + care)](#photo-demo-identify--care)
- [Highlights](#highlights)
- [Screenshots](#screenshots)
- [Quick start](#quick-start)
- [CLI reference](#cli-reference)
- [How photo ID works](#how-photo-id-works)
- [App care report](#app-care-report)
- [Species catalog](#species-catalog)
- [Diagrams](#diagrams)
- [Repository layout](#repository-layout)
- [Development](#development)
- [MergeOS bounties](#mergeos-bounties)
- [License](#license)

---

## Photo demo (identify + care)

End-to-end offline path: **plant photo → species match → care + watering + SVG care card**.

```powershell
pip install -e ".[dev]"

# List bundled demo plant photos
plantguide demo photos

# Full demo (default photo = monstera)
plantguide demo…
