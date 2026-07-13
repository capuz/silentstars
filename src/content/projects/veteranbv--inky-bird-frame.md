---
repo: "veteranbv/inky-bird-frame"
name: "inky-bird-frame"
description: "Location-neutral bird field-journal plates for Pimoroni Inky displays"
readmeQualityOk: true
url: "https://github.com/veteranbv/inky-bird-frame"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 36
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-09T18:16:30Z"
lastCommitAt: "2026-07-13T06:42:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 31
maintainers: ["veteranbv"]
openGraphImageUrl: "https://opengraph.githubassets.com/e01daedc5569ff84a10ac8b13b320e5cf3c01bfa542f09c9a7a48c0c970d64c1/veteranbv/inky-bird-frame"
---

# Inky Bird Frame

Turn birds observed near you into a rotating collection of illustrated,
scientific field-journal plates on a color e-paper display.

<table>
  <tr>
    <td width="50%" align="center">
      <br><strong>Eastern Bluebird</strong> · <em>Sialia sialis</em>
    </td>
    <td width="50%" align="center">
      <br><strong>Northern Cardinal</strong> · <em>Cardinalis cardinalis</em>
    </td>
  </tr>
</table>

  <br><em>A finished portrait installation using the recommended 12 x 16 inch frame with a panel-fitted mat opening.</em>
</p>

The frame follows public bird observations within a configurable distance and
rolling time window. When a new species appears, a controller researches it,
collects licensed reference photographs, creates a plate through Codex, and
subjects the result to an independent factual and visual review. Passing plates
join an immutable, reusable catalog. A lightweight Raspberry Pi rotates the
approved birds that are active in the installation's current observation
window.

## How it works

```mermaid
flowchart LR
    A["Local observations"] --> B["Species queue"]
    B --> C["Facts + licensed references"]
    C --> D["Field-journal plate"]
    D…
