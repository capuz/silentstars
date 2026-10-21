---
repo: "UoA-eResearch/citations"
name: "citations"
description: "Citation network analysis using OpenAlex and cosmos.gl. Also a fully autonomous AI research lab"
readmeQualityOk: true
url: "https://github.com/UoA-eResearch/citations"
homepage: "https://uoa-eresearch.github.io/citations"
language: "Python"
languages: ["Python", "HTML", "Jupyter Notebook"]
languagePcts: [43, 28, 26]
topics: ["citation-network", "citations", "academic", "3d-force-graph"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 5
watchers: 7
contributors: 4
recentReleases: 0
createdAt: "2020-12-01T02:51:56Z"
lastCommitAt: "2026-10-21T21:16:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 70
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5d8ac304c047d294bdb020d1ea78e65d779e01cad03d52495505af3c04e809a/UoA-eResearch/citations"
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
