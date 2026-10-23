---
repo: "Naptie/openmetro"
name: "openmetro"
description: "Open metro data at ease."
readmeQualityOk: true
url: "https://github.com/Naptie/openmetro"
homepage: "https://openmetro.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-12T19:26:49Z"
lastCommitAt: "2026-10-23T08:46:58Z"
lastReleaseAt: "2026-09-17T14:17:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 66
maintainers: ["Naptie", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af092eeb7312840d3240326694dac530369ae7de65c618d54ccde5c49fd248ff/Naptie/openmetro"
---

# Open Metro

Open-source project that collects official metro map data for various cities and
reorganizes it into reusable, structured topological data (lines, stations,
timetables, fares, transfers, etc.).

## Architecture

```
packages/
  core/       # city-agnostic: schema, graph builder, Dijkstra routing, HTTP API,
              # geocoding (AMap subway → Overpass → Photon), Wikidata enrichment
  adapters/   # city-specific scrapers/normalizers (one package per network id)
    cn-beijing/
    cn-shanghai/
    cn-guangzhou/
    ...
  client/     # typed Eden Treaty client generated from the API app type
  api-worker/ # shared canonical JSON bundle module used by the Vercel API function
  web/        # SvelteKit demo frontend (Svelte 5 + Tailwind 4 + MapLibre GL)
data/
  <network-id>/
    network.json, lines.json, stations.json, stops.json, patterns.json,
    segments.json, transfers.json, timetables.json, fares.json
```

**Single source of truth:** canonical JSON under `data/<network-id>/` is the one
source of truth. It is produced by fetching the official sources and is
regenerated, never hand-edited.

**Decoupling:** source adapters are city-specific; `core`, schema, and API…
