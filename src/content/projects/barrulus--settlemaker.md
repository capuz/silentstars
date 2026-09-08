---
repo: "barrulus/settlemaker"
name: "settlemaker"
description: "TypeScript reimplementation of watabou's Medieval Fantasy City Generator"
readmeQualityOk: true
url: "https://github.com/barrulus/settlemaker"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-08T16:05:30Z"
lastCommitAt: "2026-09-08T08:13:50Z"
lastReleaseAt: "2026-08-11T13:05:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 45
maintainers: ["barrulus"]
openGraphImageUrl: "https://opengraph.githubassets.com/440add88a4d3cbe72295e9b350809c6b4f3ed816a2d81de57b9cd6f814eb078f/barrulus/settlemaker"
---

# Settlemaker

A medieval fantasy settlement map generator for Node.js. TypeScript reimplementation of [watabou's Medieval Fantasy City Generator](https://watabou.itch.io/medieval-fantasy-city-generator).

</p>
</p>
</p>

## Features

- **Procedural settlement generation** from hamlets (pop 10) to metropolises (pop 200k+)
- **Deterministic output** — same seed always produces identical results
- **Zero runtime dependencies** — all algorithms ported directly (Voronoi, A\*, polygon operations, PRNG)
- **SVG and GeoJSON output** — render to vector graphics or geospatial features
- **Tile-ready** — built-in SVG-to-tile slicing for map integration
- **8 colour palettes** — default, blueprint, black & white, ink, night, ancient, colour, simple

### Settlement features

- Walled cities with towers and gates
- Citadels, castles, markets, temples, parks
- Ward types: craftsmen, merchants, patriciate, slums, administration, military
- Road networks connecting gates to the city center
- **Farmlands** with strip fields, furrows, and farmstead buildings
- **Harbour/dock wards** with warehouses and piers for port cities
- Farm belts hug the built edge; growth outside the walls follows route…
