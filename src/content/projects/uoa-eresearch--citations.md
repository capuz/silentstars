---
repo: "UoA-eResearch/citations"
name: "citations"
description: "Citation network analysis using OpenAlex and cosmos.gl"
readmeQualityOk: true
url: "https://github.com/UoA-eResearch/citations"
homepage: "https://uoa-eresearch.github.io/citations"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python", "HTML"]
languagePcts: [44, 26, 25]
topics: ["citation-network", "citations", "academic", "3d-force-graph"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 5
watchers: 7
contributors: 4
recentReleases: 0
createdAt: "2020-12-01T02:51:56Z"
lastCommitAt: "2026-10-09T10:50:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 70
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba6376d00485a4a8612f2649dce70e71e741c0101f65db198e2487fa7231b1c6/UoA-eResearch/citations"
---

# Citation Network Explorer

Interactive citation network explorer powered by live [OpenAlex](https://openalex.org/) data,
GPU-accelerated visualisation, and a built-in AI assistant.

**Live demo:** https://uoa-eresearch.github.io/citations/

## Features

- **Live OpenAlex search** — type in the search box to load the citation network of any author,
  paper (the paper + its references + citing papers), institution, topic, journal or funder.
  Up to 600 works are loaded per entity, most cited first.
- **Five views**, switchable from the top bar (both network views run on
  [cosmos.gl](https://github.com/cosmosgl/graph), the GPU force layout & rendering engine behind
  [Cosmograph](https://cosmograph.app)):
  - **3D** — GPU 3D force simulation with an orbit camera (drag to rotate, scroll to zoom),
    shaded sphere points with depth cueing. Uses cosmos.gl's `spaceDimensions: 3` mode, vendored
    from a pre-release build in `vendor/cosmos-gl/` (see its README to rebuild/upgrade).
  - **2D** — GPU 2D force layout that scales to very large graphs
  - **Map** — world map of author institutions and co-authorship collaborations
    ([deck.gl](https://deck.gl) arcs + scatter over a…
